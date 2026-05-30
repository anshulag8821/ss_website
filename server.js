import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import { readFileSync } from 'fs';

// Load .env manually (no dotenv dependency needed)
try {
  const envFile = readFileSync(new URL('.env', import.meta.url), 'utf-8');
  for (const line of envFile.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIndex = trimmed.indexOf('=');
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed.slice(eqIndex + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[key]) process.env[key] = value;
  }
} catch {
  // .env not found — rely on real environment variables (production)
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 4000;
const dataDir = path.join(__dirname, 'data');
const registrationsPath = path.join(dataDir, 'registrations.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function ensureDataFile() {
  try {
    await fs.mkdir(dataDir, { recursive: true });
    await fs.access(registrationsPath);
  } catch {
    await fs.writeFile(registrationsPath, '[]', 'utf-8');
  }
}

app.post('/api/register', async (req, res) => {
  const payload = req.body;

  if (!payload || typeof payload !== 'object' || !payload.name || !payload.email) {
    return res.status(400).json({ success: false, message: 'Name and email are required.' });
  }

  try {
    await ensureDataFile();
    const raw = await fs.readFile(registrationsPath, 'utf-8');
    const registrations = JSON.parse(raw || '[]');
    registrations.push({
      ...payload,
      receivedAt: new Date().toISOString(),
    });
    await fs.writeFile(registrationsPath, JSON.stringify(registrations, null, 2), 'utf-8');
    return res.status(201).json({ success: true });
  } catch (error) {
    console.error('Failed to save registration:', error);
    return res.status(500).json({ success: false, message: 'Unable to save registration.' });
  }
});

app.get('/api/registrations', async (req, res) => {
  try {
    await ensureDataFile();
    const raw = await fs.readFile(registrationsPath, 'utf-8');
    res.json(JSON.parse(raw || '[]'));
  } catch (error) {
    console.error('Failed to read registrations:', error);
    res.status(500).json({ success: false, message: 'Unable to read registrations.' });
  }
});


// ─── Gemini proxy — keeps API key server-side, avoids browser CORS ───────────
const GEMINI_API_KEY = process.env.VITE_GEMINI_API_KEY;

app.post('/api/chat', async (req, res) => {
  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: 'VITE_GEMINI_API_KEY not set on server' });
  }

  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

  try {
    const body = JSON.stringify(req.body);
    const url = new URL(GEMINI_URL);

    const geminiRes = await new Promise((resolve, reject) => {
      const options = {
        hostname: url.hostname,
        path: url.pathname + url.search,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body),
        },
      };
      const request = https.request(options, (r) => {
        let data = '';
        r.on('data', (chunk) => (data += chunk));
        r.on('end', () => resolve({ status: r.statusCode, body: data }));
      });
      request.on('error', reject);
      request.write(body);
      request.end();
    });

    const parsed = JSON.parse(geminiRes.body);
    res.status(geminiRes.status).json(parsed);
  } catch (error) {
    console.error('Gemini proxy error:', error);
    res.status(500).json({ error: String(error) });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});

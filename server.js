import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

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

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});

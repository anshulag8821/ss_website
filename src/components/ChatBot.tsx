import { useState } from 'react';
import { MessageCircle, Send, X, MessageSquare } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  action?: 'contact' | 'training' | null;
}

type KnowledgeItem = {
  keywords: string[];
  answer: string;
  action?: 'contact' | 'training';
};

const knowledgeBase: KnowledgeItem[] = [
  {
    keywords: ['services', 'service', 'offerings', 'what do you do'],
    answer:
      'We provide managed IT, cloud, database, DevOps, operating systems, middleware, and AI services. Ask about any specific service to learn more.',
  },
  {
    keywords: ['ai', 'artificial intelligence', 'ai services', 'machine learning', 'automation'],
    answer:
      'Our AI services include consulting, automation, predictive analytics, intelligent workflow design, and AI-powered business transformation.',
  },
  {
    keywords: ['managed', 'managed services', 'managed it'],
    answer:
      'Managed IT services from SARMAK include proactive monitoring, end-user support, infrastructure management, and secure system administration.',
  },
  {
    keywords: ['cloud', 'aws', 'azure', 'cloud migration', 'cloud services'],
    answer:
      'Cloud services cover strategy, migration, architecture, infrastructure management, security, and optimization for hybrid and multi-cloud environments.',
  },
  {
    keywords: ['database', 'data', 'dba', 'data platform'],
    answer:
      'Database services include architecture, migration, backup, performance optimization and full lifecycle administration for modern data platforms.',
  },
  {
    keywords: ['devops', 'ci/cd', 'automation pipeline', 'infrastructure as code'],
    answer:
      'DevOps services include CI/CD pipelines, automation, infrastructure as code, monitoring, and release orchestration for faster delivery.',
  },
  {
    keywords: ['operating', 'operating systems', 'os', 'system administration'],
    answer:
      'OS services help keep servers and endpoints secure, updated, and optimized across Windows, Linux, and hybrid environments.',
  },
  {
    keywords: ['middleware', 'integration', 'api', 'message broker'],
    answer:
      'Middleware services include application integration, API management, and platform connectivity to streamline enterprise systems.',
  },
  {
    keywords: ['pricing', 'cost', 'quote', 'estimate'],
    answer:
      'Pricing depends on the scope and service needs. For an accurate quote, please share your requirements on the Contact page.',
    action: 'contact',
  },
  {
    keywords: ['timeline', 'timeline', 'delivery', 'schedule', 'how long'],
    answer:
      'Project timelines vary by service and complexity. The best next step is to share your scope on the Contact page so we can give you a tailored estimate.',
    action: 'contact',
  },
  {
    keywords: ['process', 'approach', 'methodology'],
    answer:
      'Our approach combines discovery, planning, implementation, and ongoing support to ensure your technology investments deliver measurable outcomes.',
  },
  {
    keywords: ['security', 'compliance', 'risk'],
    answer:
      'Security is part of our service delivery. We help clients secure infrastructure, implement best practices, and maintain compliance across IT operations.',
  },
  {
    keywords: ['case study', 'case studies', 'client', 'testimonial'],
    answer:
      'We share success stories in our Case Studies section. If you want to discuss a similar project, I can route you to Contact so our team can help.',
    action: 'contact',
  },
  {
    keywords: ['leader', 'leaders', 'management', 'leadership', 'management team'],
    answer:
      'Our About page describes SARMAK leadership as experienced technology and operations professionals. The team includes CEO & Founder Jithesh A. Balan, Head of Business (Operations & AI Strategy) Priyaranjan Mohapatra, and Advisory Board member Suneel Wattal, with expertise across enterprise IT, digital transformation, operational excellence, and strategic planning.',
  },
  {
    keywords: ['career', 'careers', 'job', 'join'],
    answer:
      'For open roles and career opportunities, visit our Careers page where all current positions and application details are listed.',
  },
  {
    keywords: ['blog', 'news', 'article', 'insights'],
    answer:
      'Our Blog shares insights on technology, cloud, AI, and digital transformation. Check the Blog page for the latest updates.',
  },
  {
    keywords: ['training', 'traning', 'train', 'learn', 'learning', 'free training', 'training program', 'training course'],
    answer:
      'SARMAK training offers free and paid learning programs in AI, cloud, DevOps, and IT operations. For full details and enrollment, visit learn.sarmak.in.',
    action: 'training',
  },
  {
    keywords: ['faq', 'questions', 'help', 'support'],
    answer:
      'If you have general questions, our FAQ page may help. For anything specific, I can route you to the Contact page to submit your request.',
    action: 'contact',
  },
  {
    keywords: ['contact', 'reach', 'get in touch', 'email', 'phone'],
    answer:
      'You can reach us directly on the Contact page. I can take you there to submit your query and our team will respond quickly.',
    action: 'contact',
  },
];

const ChatBot = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      text: 'Hi! I can help with information from this website. Ask about our services or contact options, and I can route specific queries to the Contact page.',
      action: null,
    },
  ]);

  const visiblePagePrefixes = [
    '/',
    '/about',
    '/services',
    '/service-plans',
    '/why-choose-us',
    '/case-studies',
    '/blog',
    '/careers',
    '/faq',
    '/partners',
    '/resources',
    '/news',
  ];

  const showChat = visiblePagePrefixes.some(
    (prefix) => location.pathname === prefix || location.pathname.startsWith(`${prefix}/`)
  );

  if (!showChat) {
    return null;
  }

  const matchesKeyword = (text: string, keyword: string) => {
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'i');
    return regex.test(text);
  };

  const sendMessage = (message: string) => {
    const userMessage: ChatMessage = { sender: 'user', text: message };
    setMessages((prev) => [...prev, userMessage]);

    const normalized = message.toLowerCase();
    const knowledge = knowledgeBase.find((item) =>
      item.keywords.some((keyword) => matchesKeyword(normalized, keyword))
    );

    if (knowledge) {
      const botMessage: ChatMessage = {
        sender: 'bot',
        text: knowledge.answer,
        action: knowledge.action ?? null,
      };
      setMessages((prev) => [...prev, userMessage, botMessage]);
    } else {
      const fallbackMessage: ChatMessage = {
        sender: 'bot',
        text:
          'I could not find a direct answer on the website. Please submit your query through the Contact page and our team will assist you.',
        action: 'contact',
      };
      setMessages((prev) => [...prev, userMessage, fallbackMessage]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput('');
  };

  const handleContactRedirect = () => {
    setOpen(false);
    navigate('/contact');
  };

  const handleTrainingRedirect = () => {
    setOpen(false);
    window.open('https://learn.sarmak.in', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {open ? (
        <div className="w-[340px] max-w-[90vw] rounded-3xl border border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between rounded-t-3xl bg-slate-900/95 px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">SARMAK Chat Assistant</p>
              {/*  <p className="text-xs text-slate-400">Get info or route to contact</p> */}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex h-[400px] flex-col overflow-hidden">
            <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm text-slate-100">
              {messages.map((message, index) => (
                <div
                  key={`${message.sender}-${index}`}
                  className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] break-words rounded-3xl px-4 py-3 shadow-sm ${
                      message.sender === 'bot'
                        ? 'bg-slate-800 text-slate-100'
                        : 'bg-gold/10 text-white'
                    }`}
                  >
                    <p>{message.text}</p>
                    {message.action === 'contact' && (
                      <button
                        type="button"
                        onClick={handleContactRedirect}
                        className="mt-3 inline-flex rounded-full border border-gold/30 bg-gold/10 px-3 py-2 text-xs font-medium text-gold transition hover:bg-gold/20"
                      >
                        Go to Contact page
                      </button>
                    )}
                    {message.action === 'training' && (
                      <button
                        type="button"
                        onClick={handleTrainingRedirect}
                        className="mt-3 inline-flex rounded-full border border-gold/30 bg-gold/10 px-3 py-2 text-xs font-medium text-gold transition hover:bg-gold/20"
                      >
                        Visit learn.sarmak.in
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="border-t border-white/10 bg-slate-950/95 px-4 py-3">
              <div className="flex gap-2">
                <label htmlFor="chat-input" className="sr-only">
                  Type your message
                </label>
                <input
                  id="chat-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about services, training, or contact support..."
                  className="min-h-[44px] flex-1 rounded-2xl border border-white/10 bg-slate-900/90 px-4 text-sm text-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
                />
                <button
                  type="submit"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold text-slate-950 transition hover:bg-gold/90"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-slate-950 shadow-2xl shadow-black/20 transition hover:-translate-y-1"
          aria-label="Open chat bot"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;

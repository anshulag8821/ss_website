import { useEffect, useState } from 'react';
import { ArrowRight, Target, Handshake, Eye, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

interface Job {
  id: number;
  title: string;
  dept: string;
  location: string;
  type: string;
  salary: string;
}

const FALLBACK_JOBS: Job[] = [
  { id: 1, title: 'Senior Full-Stack Engineer', dept: 'Engineering', location: 'Remote (India)', type: 'Full-time', salary: '₹18–26 LPA' },
  { id: 2, title: 'AI/ML Engineer — Applied AI Solutions', dept: 'Engineering', location: 'Remote / Bangalore', type: 'Full-time', salary: '₹22–32 LPA' },
  { id: 3, title: 'DevOps & Infrastructure Engineer', dept: 'Engineering', location: 'Remote (India)', type: 'Full-time', salary: '₹15–22 LPA' },
  { id: 4, title: 'Cloud Solutions Architect', dept: 'Cloud', location: 'Bangalore / Remote', type: 'Full-time', salary: '₹20–28 LPA' },
  { id: 5, title: 'Database Administrator', dept: 'Database', location: 'Remote (India / APAC)', type: 'Full-time', salary: '₹12–18 LPA' },
  { id: 6, title: 'Enterprise Account Executive', dept: 'Sales', location: 'Mumbai / Delhi', type: 'Full-time', salary: '₹14–20 LPA + OTE' },
  { id: 7, title: 'Customer Success Manager', dept: 'Operations', location: 'Remote (India)', type: 'Full-time', salary: '₹10–16 LPA' },
];

const DEPARTMENTS = ['All', 'Engineering', 'Cloud', 'Database', 'Sales', 'Operations'];

const VALUES = [
  { icon: Target, title: 'Precision Over Volume', description: 'The right outcome matters more than any number of tickets closed. Quality over noise, always.' },
  { icon: Handshake, title: 'Human + Tech, Together', description: "Technology augments judgment; it doesn't replace it. We keep people at the center of every decision." },
  { icon: Eye, title: 'Radical Transparency', description: 'Internally and with clients. We share information openly, communicate setbacks early, and never spin.' },
  { icon: Zap, title: 'Bias Toward Action', description: 'We ship, learn, and iterate. Done is better than perfect — as long as we are honest about what "done" means.' },
];

const BENEFITS = [
  { title: 'Competitive Compensation', description: 'Market-benchmarked salary plus performance bonuses for every full-time role.' },
  { title: 'Flexible Remote-First Work', description: 'Work from where you do your best thinking. Async-friendly culture.' },
  { title: 'Learning & Development Budget', description: '₹60,000/year toward courses, certifications, and conferences.' },
  { title: 'Health Coverage', description: 'Comprehensive medical, dental, and vision for you and your dependents.' },
  { title: 'Generous PTO + Paid Holidays', description: '25 days PTO, 12 public holidays, and dedicated wellness days.' },
];

const LIFE_GRID = [
  { emoji: '🚀', label: 'All-hands every Monday', wide: true },
  { emoji: '🌏', label: 'Remote across 6 countries', tall: true },
  { emoji: '🏆', label: 'Quarterly team offsite' },
  { emoji: '📚', label: 'Bi-weekly learning lunch' },
  { emoji: '🤖', label: 'Internal AI hackathons' },
];

const PROCESS_STEPS = [
  { num: 1, title: 'Apply', description: 'Submit your application. We review every one — no ATS black holes.' },
  { num: 2, title: 'Intro Call', description: '30-min conversation with our talent team. No trick questions.' },
  { num: 3, title: 'Skills Round', description: 'A focused assessment relevant to the role. Paid for senior positions.' },
  { num: 4, title: 'Team Interview', description: "Meet the people you'd work with. Ask us anything." },
  { num: 5, title: 'Offer', description: 'Clear, no-games offer with full compensation transparency.' },
];

const TESTIMONIALS = [
  { emoji: '👨‍💻', name: 'Rahul Desai', role: 'Staff Engineer, 2 yrs', text: 'The engineering culture here is genuinely different. We move fast but thoughtfully — no shortcuts that create tech debt nightmares later.' },
  { emoji: '👩‍🎨', name: 'Ananya Sharma', role: 'Product Designer, 1.5 yrs', text: 'I came for the challenge and stayed for the people. Leadership actually listens — feedback goes in and real changes come out.' },
  { emoji: '🧑‍💼', name: 'Karthik Rao', role: 'Customer Success, 1 yr', text: 'Remote-first is real here, not just a tagline. Async by default, docs-heavy culture, and zero guilt about time zones.' },
];

const FAQS = [
  { q: 'Do I need to be based in India to apply?', a: 'Most roles are open to candidates anywhere in India or the APAC region. A few Sales roles require presence in Mumbai or Delhi. Each job listing specifies its location policy clearly.' },
  { q: 'How long does the hiring process take?', a: "Most roles close within 3–4 weeks from your first interview. We move in 5 steps: application review, intro call, skills round, team interview, and offer. We'll always keep you informed at each stage." },
  { q: 'Is the skills assessment paid?', a: "Yes — for senior-level positions (Senior Engineer, Lead, and above), we pay a stipend for the skills round because we believe your time has value. We'll share details before the assessment begins." },
  { q: "Can I apply if I don't meet all the requirements?", a: "Yes. Job descriptions list requirements, not a checklist. If you're genuinely excited about the role and meet roughly 70% of what's listed, we encourage you to apply. We hire for trajectory and potential, not just credentials." },
  { q: 'What is the compensation structure?', a: 'All full-time roles include a market-benchmarked base salary. We share salary bands at the start of the process — no surprises at the offer stage. Senior roles also include performance bonuses.' },
];

const PERKS = ['Remote-First Culture', 'Competitive Compensation', '₹60K L&D Budget', '4-Week Hiring Process', '4.8★ Glassdoor', '25 Days PTO', 'Health Coverage', 'Mental Wellness Days', 'Async-Friendly Team'];

const Careers = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/jobs');
        if (!res.ok) throw new Error('API error');
        const data = await res.json();
        if (!cancelled) setJobs(data.jobs?.length ? data.jobs : FALLBACK_JOBS);
      } catch {
        if (!cancelled) setJobs(FALLBACK_JOBS);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const filteredJobs = filter === 'All' ? jobs : jobs.filter((j) => j.dept === filter);

  return (
    <>
      <SEO
        title="Careers - Join the SARMAK Team"
        description="Join SARMAK and be part of a team transforming IT infrastructure. Explore career opportunities in cloud, DevOps, database, AI, and more."
        keywords="SARMAK careers, IT jobs India, cloud engineer jobs, DevOps jobs, DBA jobs"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />

        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Join Our Team</span>
            <h1 className="heading-xl text-white mb-6">
              Build the Future of <span className="text-gradient">IT Infrastructure</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto mb-10">
              We help businesses run on cloud, AI, and modern infrastructure — with minimal
              friction and maximum reliability. Come build it with us.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#open-roles" className="btn-primary inline-flex items-center gap-2">
                Explore Open Roles
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#our-values" className="btn-outline inline-flex items-center gap-2">
                Our Culture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Perks ticker */}
      <div className="relative border-y border-white/10 bg-black/40 py-3.5 overflow-hidden" aria-hidden="true">
        <div className="flex w-max" style={{ animation: 'careers-ticker 30s linear infinite' }}>
          {[...PERKS, ...PERKS].map((perk, i) => (
            <span key={i} className="flex items-center gap-2 px-8 text-sm font-medium text-white/40 whitespace-nowrap">
              <span className="text-gold text-xs">✦</span>
              {perk}
            </span>
          ))}
        </div>
        <style>{`@keyframes careers-ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-white/10 bg-black/20">
        <div className="section-padding py-7 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-y-6">
          {[
            { label: 'Team Members', value: '50+' },
            { label: 'Open Positions', value: loading ? '—' : String(jobs.length) },
            { label: 'Glassdoor Rating', value: '4.8★' },
            { label: 'Countries Represented', value: '6' },
          ].map((stat, i) => (
            <div key={i} className={i > 0 ? 'md:border-l md:border-white/10' : ''}>
              <span className="block text-3xl font-bold text-gold">{stat.value}</span>
              <span className="text-xs text-white/50 font-medium mt-1 block">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <section id="our-values" className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">What Drives Us</span>
              <h2 className="heading-lg text-white mb-4">Our Values</h2>
              <p className="body-md max-w-xl">
                These are not corporate platitudes. They are the principles we actually use when making hard decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((value, index) => (
                <div key={index} className="glass-card p-6 hover-lift">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{value.title}</h3>
                  <p className="body-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-24">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Life at Sarmak</span>
              <h2 className="heading-lg text-white mb-8">Benefits That Support the Whole You</h2>
              <div className="flex flex-col gap-6">
                {BENEFITS.map((b, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <div>
                      <strong className="block text-white font-semibold mb-1">{b.title}</strong>
                      <span className="body-sm">{b.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card-dark p-10 relative overflow-hidden">
              <span className="block text-6xl text-gold/50 font-serif leading-none mb-4">"</span>
              <p className="text-lg text-white/90 italic leading-relaxed mb-6">
                Working at Sarmak felt like joining a team that actually practices what it preaches
                about client trust. The culture reflects that every day.
              </p>
              <div className="text-gold font-semibold text-sm">Priya Nair</div>
              <div className="text-white/50 text-xs">Senior Product Manager, Bangalore</div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Sarmak visual grid */}
      <section className="relative pb-24">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Our Culture</span>
            <h2 className="heading-lg text-white mb-4">Life at Sarmak</h2>
            <p className="body-md max-w-xl mb-10">
              A small, focused team that ships fast, argues productively, and celebrates wins together.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:auto-rows-[190px]">
              {LIFE_GRID.map((cell, i) => (
                <div
                  key={i}
                  className={`rounded-xl flex items-center justify-center text-center p-6 bg-gradient-to-br from-gold/20 to-black/40 border border-white/10 ${
                    cell.wide ? 'lg:col-span-2' : ''
                  } ${cell.tall ? 'lg:row-span-2' : ''}`}
                >
                  <div>
                    <span className="text-4xl block mb-3">{cell.emoji}</span>
                    <span className="text-white/80 text-sm font-semibold uppercase tracking-wide">{cell.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-5xl mx-auto">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Now Hiring</span>
            <h2 className="heading-lg text-white mb-4">Open Positions</h2>
            <p className="body-md max-w-xl mb-8">
              We hire for potential as much as experience. If you are close to the requirements, apply — we mean it.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setFilter(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    filter === dept
                      ? 'bg-gold text-[#1c1d1b] border-gold'
                      : 'border-white/15 text-white/60 hover:border-gold/50 hover:text-white'
                  }`}
                >
                  {dept === 'All' ? 'All Roles' : dept}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3.5">
              {loading ? (
                [1, 2, 3].map((i) => (
                  <div key={i} className="h-24 rounded-lg bg-white/5 animate-pulse" />
                ))
              ) : filteredJobs.length === 0 ? (
                <p className="body-sm py-6">No roles in this category right now. Check back soon.</p>
              ) : (
                filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="glass-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-5 hover-lift"
                  >
                    <div className="flex-1">
                      <span className="inline-block text-[11px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-gold/10 text-gold mb-2.5">
                        {job.dept}
                      </span>
                      <div className="text-white font-bold mb-1.5">{job.title}</div>
                      <div className="flex flex-wrap gap-4 text-xs text-white/50">
                        <span>📍 {job.location}</span>
                        <span>💼 {job.type}</span>
                        <span>💰 {job.salary}</span>
                      </div>
                    </div>
                    <a
                      href={`mailto:careers@sarmaksolutions.com?subject=Application: ${encodeURIComponent(job.title)}`}
                      className="btn-primary text-center whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">How It Works</span>
            <h2 className="heading-lg text-white mb-4">Our Hiring Process</h2>
            <p className="body-md max-w-xl mb-14">
              Transparent, fast, and respectful of your time. Most roles close in under 4 weeks.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-4 relative">
              <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gold to-gold/30 z-0" />
              {PROCESS_STEPS.map((step) => (
                <div key={step.num} className="text-center relative z-10 px-2">
                  <div className="w-14 h-14 rounded-full bg-[#1c1d1b] border-2 border-gold flex items-center justify-center mx-auto mb-5 font-bold text-gold">
                    {step.num}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                  <p className="body-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">From the Team</span>
            <h2 className="heading-lg text-white mb-4">What Our People Say</h2>
            <p className="body-md max-w-xl mb-14">
              Do not take our word for it — here is what the team says about working at Sarmak.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="glass-card p-7">
                  <div className="text-gold text-sm tracking-widest mb-3.5">★★★★★</div>
                  <p className="text-sm text-white/80 italic leading-relaxed mb-6">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center text-base flex-shrink-0">
                      {t.emoji}
                    </div>
                    <div>
                      <div className="text-white text-sm font-bold">{t.name}</div>
                      <div className="text-white/50 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Got Questions?</span>
            <h2 className="heading-lg text-white mb-4">Frequently Asked</h2>
            <p className="body-md max-w-xl mb-12">Answers to the questions candidates ask us most often.</p>

            <div className="rounded-xl border border-white/10 overflow-hidden">
              {FAQS.map((faq, i) => (
                <div key={i} className={i !== FAQS.length - 1 ? 'border-b border-white/10' : ''}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-6 sm:px-7 py-5 flex items-center justify-between gap-4 font-semibold text-white hover:bg-white/5 transition-colors"
                  >
                    {faq.q}
                    <span
                      className={`w-6 h-6 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 text-white/60 transition-transform ${
                        openFaq === i ? 'rotate-45 bg-gold border-gold text-[#1c1d1b]' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 sm:px-7 pb-5 body-sm">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/about-bg.jpg" alt="CTA Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/80 to-[#1c1d1b]" />
        </div>

        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-6">
              Do Not See a <span className="text-gradient">Perfect Fit</span>?
            </h2>
            <p className="body-lg text-white/70 mb-8">
              We are always looking for talented individuals. Send us your resume and we will
              keep you in mind for future opportunities.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Send Resume
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;

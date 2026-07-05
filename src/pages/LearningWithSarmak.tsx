import { ArrowRight, Cpu, Rocket, ShieldCheck, Sparkles } from 'lucide-react';
import SEO from '@/components/SEO';

const LearningWithSarmak = () => {
  const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbz2LF4UPeqobcLPaKZNtj6m4SXvR2L5Ey2uYFtmCwrwlvBuashAwQGB4yKf14pz639v/exec",
      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    );

    alert("Registration submitted successfully!");
    form.reset();

    window.location.href = "/thank-you.html";
  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.error(error);
  }
};
  return (
    <>
      <SEO
        title="Learning with SARMAK - Free 4-Week Training"
        description="Join SARMAK's free 4-week technology foundation program for college graduates and become IT-ready with hands-on labs, databases, DevOps, Linux, and AI training."
        keywords="free training, SARMAK program, college graduates, IT ready, technology foundation, database training, DevOps training, AI training"
      />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        <div className="relative z-10 section-padding">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#1c1d1b] bg-gold rounded-full mb-4">
              <Sparkles className="w-4 h-4" /> Free 4-Week Program
            </span>
            <h1 className="heading-xl text-white mb-6">
              Learning with <span className="text-gradient">SARMAK</span>
            </h1>
            <p className="body-lg text-white/70 mx-auto max-w-3xl">
              A free month-long program for fresh college graduates to build industry-ready skills in databases, Linux, DevOps, cloud-native workflows, and AI agents.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#register"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold text-black bg-gradient-to-r from-emerald-400 to-green-600 hover:from-emerald-300 hover:to-green-500 transition-all"
              >
                Register Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#register" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/70">
                Register on site
              </a>
              <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/70">
                Daily commitment: 4–6 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-16 bg-[#0d0e10]">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Free Training',
              description: 'No tuition for eligible graduates. Join the program and build real-world skills with mentor-led labs.',
              icon: ShieldCheck
            },
            {
              title: 'IT Ready Options',
              description: 'Complete industry-aligned mini projects and capstone work that prepare you for entry-level roles.',
              icon: Rocket
            },
            {
              title: 'Hands-on Labs',
              description: 'Practice with real tools for databases, Linux, DevOps automation, containers, and AI development.',
              icon: Cpu
            }
          ].map((item) => (
            <div key={item.title} className="glass-card p-8 border border-white/10 shadow-black/10">
              <div className="inline-flex items-center justify-center w-14 h-14 mb-5 rounded-2xl bg-gold/10 text-gold">
                <item.icon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">{item.title}</h2>
              <p className="text-white/70 leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding py-16">
        <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Program Overview</span>
            <h2 className="heading-lg text-white mb-6">4-Week Technology Foundation Program for College Graduates</h2>
            <p className="body-lg text-white/70 mb-8">
              This program is designed for fresh graduates who want a practical introduction to modern software engineering, infrastructure, databases, DevOps, and AI technologies.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Duration', value: '4 Weeks' },
                { label: 'Mode', value: 'Instructor-led + Hands-on Labs' },
                { label: 'Outcome', value: 'Industry-ready foundations' }
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/50 mb-2">{item.label}</p>
                  <p className="text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111214] p-8 shadow-black/20">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Program Benefits</span>
            <div className="space-y-5">
              {[
                'Strong practical foundation in databases, Linux, DevOps, cloud, and AI.',
                'Hands-on labs and mini projects that build industry-ready skills.',
                'Portfolio-focused learning with capstone projects and demo-ready outputs.',
                'Free training designed for college graduates seeking IT-ready careers.'
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xl font-bold text-white leading-8">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-16 bg-[#0d0e10]">
        <div className="max-w-6xl mx-auto">
          <span className="text-gold text-sm font-medium uppercase tracking-widest mb-6 block">Weekly Curriculum</span>
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: 'Week 1 — Databases & Database Technologies',
                description: 'Build foundational understanding of relational databases and modern NoSQL technologies.',
                items: [
                  'Introduction to Databases',
                  'Relational Databases',
                  'SQL Fundamentals',
                  'Advanced SQL Concepts',
                  'NoSQL Databases',
                  'Database Project'
                ]
              },
              {
                title: 'Week 2 — Linux & SQL Basics',
                description: 'Learn Linux fundamentals, shell scripting, and practical SQL integration workflows.',
                items: [
                  'Linux Fundamentals',
                  'Linux Commands',
                  'Shell Scripting Basics',
                  'SQL Practice & Integration',
                  'Linux Administration Basics',
                  'Linux + SQL Project'
                ]
              },
              {
                title: 'Week 3 — DevOps Basics',
                description: 'Understand modern software delivery pipelines, version control, CI/CD, containers, and cloud-native deployment practices.',
                items: [
                  'Introduction to DevOps',
                  'Version Control with Git',
                  'CI/CD Basics',
                  'Containers & Docker',
                  'Cloud & Kubernetes Basics',
                  'DevOps Project'
                ]
              },
              {
                title: 'Week 4 — AI Basics & AI Agents',
                description: 'Gain a practical introduction to AI, large language models, prompt engineering, agent design, and responsible AI practices.',
                items: [
                  'AI & Machine Learning Fundamentals',
                  'Introduction to Generative AI',
                  'AI Development Basics',
                  'AI Agents',
                  'Responsible AI & Industry Trends',
                  'Final Capstone Project'
                ]
              }
            ].map((week) => (
              <div key={week.title} className="rounded-3xl border border-white/10 bg-[#111214] p-8">
                <h3 className="text-xl font-semibold text-white mb-3">{week.title}</h3>
                <p className="text-white/70 mb-5">{week.description}</p>
                <ul className="space-y-3">
                  {week.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gold/10 text-gold">•</span>
                      <span className="text-white font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="section-padding py-20 bg-[#0d0e10]">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Register for Free Training</span>
            <h2 className="heading-lg text-white mb-4">Reserve your seat in the SARMAK 4-week cohort</h2>
            <p className="text-white/70 mb-8">
              This training is ideal for graduates seeking a strong start in software, infrastructure, DevOps, and AI. Fill out the form below and we will contact you with next steps.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Program Format', value: 'Instructor-led + Labs' },
                { label: 'Delivery', value: 'Hybrid / Online' },
                { label: 'Eligibility', value: 'College Graduates' },
                { label: 'Final Outcome', value: 'Capstone Demo + Resume Support' }
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/50 mb-2">{item.label}</p>
                  <p className="font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111214] p-8">
            <div className="mb-6 rounded-2xl bg-gradient-to-r from-gold to-yellow-400 p-6 text-[#111214]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest">Limited Seats</div>
                  <h3 className="text-2xl font-bold">Free 4-Week Cohort — Reserve Now</h3>
                  <p className="mt-2 text-sm">No fee for eligible graduates. Seats are assigned on a rolling basis.</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[#111214]/80">Starts</div>
                  <div className="text-xl font-extrabold">Next Cohort</div>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-white/70">
                  Full Name *
                  <input
                    type="text"
                    name="name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none"
                      required
                    placeholder="Your full name"
                  />
                </label>
                <label className="space-y-2 text-sm text-white/70">
                  Email Address *
                  <input
                    type="email"
                    name="email"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none"
                      required
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-white/70">
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none"
                    placeholder="+91 99999 99999"
                  />
                </label>
                <label className="space-y-2 text-sm text-white/70">
                  College / University
                  <input
                    type="text"
                    name="college"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none"
                    placeholder="Your college or university"
                  />
                </label>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-white/70">
                  Degree / Course
                  <input
                    type="text"
                    name="course"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none"
                    placeholder="B.Tech / BCA / MCA"
                  />
                </label>
                <label className="space-y-2 text-sm text-white/70">
                  Preferred Start Date
                  <input
                    type="date"
                    name="startDate"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none"
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm text-white/70">
                Message
                <textarea
                  name="message"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none resize-none"
                  rows={5}
                  placeholder="Tell us why you want to join this program or any question you have."
                />
              </label>

              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 font-semibold text-black bg-gradient-to-r from-emerald-400 to-green-600 hover:from-emerald-300 hover:to-green-500 transition-all">
                Submit Registration
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearningWithSarmak;

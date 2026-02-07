import { FileText, Download, BookOpen, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: 'Whitepapers',
      description: 'In-depth technical documents and industry insights.',
      items: [
        { name: 'AI in IT Infrastructure Management', type: 'PDF' },
        { name: 'Cloud Migration Best Practices', type: 'PDF' },
        { name: 'Database Optimization Guide', type: 'PDF' }
      ]
    },
    {
      icon: BookOpen,
      title: 'Case Studies',
      description: 'Real-world success stories from our clients.',
      items: [
        { name: 'Financial Services Cloud Migration', type: 'PDF' },
        { name: 'University AI Training Program', type: 'PDF' },
        { name: 'Manufacturing Database Optimization', type: 'PDF' }
      ]
    },
    {
      icon: Video,
      title: 'Webinars',
      description: 'Recorded sessions and upcoming events.',
      items: [
        { name: 'Introduction to AI in IT Operations', type: 'Video' },
        { name: 'DevOps Fundamentals', type: 'Video' },
        { name: 'Cloud Security Best Practices', type: 'Video' }
      ]
    }
  ];

  const guides = [
    { title: 'IT Infrastructure Assessment Checklist', description: 'Evaluate your current IT setup' },
    { title: 'Cloud Readiness Guide', description: 'Prepare for cloud migration' },
    { title: 'Security Audit Framework', description: 'Assess your security posture' },
    { title: 'Disaster Recovery Planning', description: 'Build resilient IT systems' }
  ];

  return (
    <>
      <SEO 
        title="Resources - Whitepapers, Case Studies & Guides"
        description="Access SARMAK's library of resources including whitepapers, case studies, guides, and webinars on IT infrastructure, cloud, AI, and more."
        keywords="IT resources, whitepapers, case studies, IT guides, cloud migration guide"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Resources</span>
            <h1 className="heading-xl text-white mb-6">
              Knowledge <span className="text-gradient">Center</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto">
              Explore our library of resources to learn more about IT best practices, 
              industry trends, and technology insights.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((category, index) => (
                <div key={index} className="glass-card p-8">
                  <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                    <category.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                  <p className="body-sm mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center justify-between text-white/70 text-sm">
                        <span>{item.name}</span>
                        <span className="px-2 py-1 bg-white/5 rounded text-xs">{item.type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Guides</span>
              <h2 className="heading-lg text-white mb-6">
                Free <span className="text-gradient">Downloads</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {guides.map((guide, index) => (
                <div key={index} className="glass-card p-6 flex items-center justify-between hover-lift">
                  <div>
                    <h3 className="text-white font-semibold mb-1">{guide.title}</h3>
                    <p className="text-white/60 text-sm">{guide.description}</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-[#1c1d1b] transition-all">
                    <Download className="w-5 h-5" />
                  </button>
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
              Need <span className="text-gradient">Custom</span> Resources?
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Contact us for customized documentation and resources tailored to your needs.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;

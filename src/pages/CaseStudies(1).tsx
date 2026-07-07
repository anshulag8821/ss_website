import { ArrowRight, Building2, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Cloud Migration for Financial Services',
      industry: 'Banking & Finance',
      challenge: 'Legacy infrastructure was causing frequent downtime and limiting scalability.',
      solution: 'Migrated entire infrastructure to AWS with hybrid cloud architecture.',
      results: [
        '99.99% uptime achieved',
        '40% reduction in infrastructure costs',
        '3x faster application deployment',
        'Enhanced security and compliance'
      ],
      icon: Building2
    },
    {
      title: 'AI Training Program for University',
      industry: 'Education',
      challenge: 'University wanted to enhance AI skills among students to improve employability.',
      solution: 'Designed and delivered comprehensive AI training curriculum with hands-on labs.',
      results: [
        '500+ students trained',
        '95% placement rate for AI track',
        'Industry-recognized certification',
        'Partnership with leading tech companies'
      ],
      icon: TrendingUp
    },
    {
      title: 'Database Optimization for Manufacturing',
      industry: 'Manufacturing',
      challenge: 'Slow database performance was impacting production systems.',
      solution: 'Comprehensive database audit, optimization, and ongoing DBA support.',
      results: [
        '60% improvement in query performance',
        '30% reduction in licensing costs',
        'Zero unplanned downtime',
        'Proactive monitoring implemented'
      ],
      icon: CheckCircle
    }
  ];

  return (
    <>
      <SEO 
        title="Case Studies - Success Stories & Client Projects"
        description="Explore SARMAK's case studies and success stories. See how we have helped businesses transform their IT infrastructure and achieve their goals."
        keywords="SARMAK case studies, IT success stories, cloud migration case study, client projects India"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Case Studies</span>
            <h1 className="heading-xl text-white mb-6">
              Success <span className="text-gradient">Stories</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto">
              See how we have helped businesses transform their IT infrastructure and achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div key={index} className="glass-card p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <study.icon className="w-6 h-6 text-gold" />
                        <span className="text-gold text-sm font-medium">{study.industry}</span>
                      </div>
                      <h2 className="heading-md text-white mb-6">{study.title}</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Challenge</h4>
                          <p className="body-md">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">Solution</h4>
                          <p className="body-md">{study.solution}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-4">Results</h4>
                      <ul className="space-y-3">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-3 text-white/80">
                            <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
              Ready for Your <span className="text-gradient">Success Story</span>?
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Let us help you achieve similar results for your business.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;

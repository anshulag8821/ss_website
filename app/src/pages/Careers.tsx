import { MapPin, Clock, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const Careers = () => {
  const openings = [
    {
      title: 'Senior Database Administrator',
      location: 'India (Remote)',
      type: 'Full-time',
      department: 'Database Services',
      description: 'We are looking for an experienced Oracle DBA to join our team and manage enterprise database environments.'
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'India (Remote)',
      type: 'Full-time',
      department: 'Cloud Services',
      description: 'Design and implement cloud solutions for enterprise clients across AWS, Azure, and GCP.'
    },
    {
      title: 'DevOps Engineer',
      location: 'India (Remote)',
      type: 'Full-time',
      department: 'DevOps',
      description: 'Build and maintain CI/CD pipelines, implement infrastructure as code, and optimize deployment processes.'
    },
    {
      title: 'AI/ML Engineer',
      location: 'India (Remote)',
      type: 'Full-time',
      department: 'AI Solutions',
      description: 'Develop AI-powered solutions for IT operations and contribute to our AI training programs.'
    },
    {
      title: 'Middleware Administrator',
      location: 'India (Remote)',
      type: 'Full-time',
      department: 'Middleware',
      description: 'Manage WebLogic and WebSphere environments for enterprise clients.'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with experienced professionals and learn from the best.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career paths and opportunities for advancement.'
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Support for professional certifications and training.'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options.'
    }
  ];

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
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Careers</span>
            <h1 className="heading-xl text-white mb-6">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto">
              Be part of a team that is transforming IT infrastructure and empowering businesses 
              through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Why Join Us</span>
              <h2 className="heading-lg text-white mb-6">
                Benefits & <span className="text-gradient">Perks</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="glass-card p-6 text-center hover-lift">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="body-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Openings</span>
              <h2 className="heading-lg text-white mb-6">
                Current <span className="text-gradient">Opportunities</span>
              </h2>
            </div>

            <div className="space-y-6">
              {openings.map((job, index) => (
                <div key={index} className="glass-card p-6 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                      <p className="body-sm mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-white/60 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="px-3 py-1 bg-gold/10 text-gold rounded-full text-xs">
                          {job.department}
                        </span>
                      </div>
                    </div>
                    <Link 
                      to="/contact" 
                      className="btn-primary flex items-center gap-2 whitespace-nowrap"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
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

import { Award, Users, Clock, Shield, TrendingUp, ArrowRight, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const WhyChooseUs = () => {
  const differentiators = [
    {
      icon: Users,
      title: 'Expert Team',
      description: '30+ years of combined experience in IT infrastructure, cloud, and enterprise solutions. Our team includes certified professionals across all major technologies.',
      stat: '50+',
      statLabel: 'Expert Engineers'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support with rapid response times. We are always there when you need us, ensuring minimal downtime.',
      stat: '99.9%',
      statLabel: 'Uptime SLA'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security measures and compliance standards. We prioritize safeguarding your data while adhering to regulations.',
      stat: '100%',
      statLabel: 'Compliance'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of delivering measurable improvements in efficiency, cost savings, and system performance for our clients.',
      stat: '45%',
      statLabel: 'Avg. Cost Savings'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Business Centric',
      description: 'Our strategic direction aligns with your business goals, not just technology for technology sake.'
    },
    {
      icon: TrendingUp,
      title: 'Growth Oriented',
      description: 'Services designed to scale with your business growth and evolving needs.'
    },
    {
      icon: Users,
      title: 'Deep Collaboration',
      description: 'Effective communication and prompt reporting foster robust partnerships.'
    },
    {
      icon: Award,
      title: 'Value Delivery',
      description: 'Focus on delivering exceptional value and optimal returns for our clients.'
    },
    {
      icon: Shield,
      title: 'Security Priority',
      description: 'Safeguarding data while adhering to regulations is of utmost importance.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your success is our success. We go above and beyond to exceed expectations.'
    }
  ];

  const certifications = [
    'Oracle Certified', 'AWS Certified', 'Azure Certified', 'Google Cloud Certified',
    'ITIL Certified', 'PMP Certified', 'CISSP', 'CompTIA Security+'
  ];

  return (
    <>
      <SEO 
        title="Why Choose SARMAK - IT Solutions Partner"
        description="Discover why businesses choose SARMAK for IT solutions. Expert team, 24/7 support, proven results, and customer-first approach."
        keywords="why choose SARMAK, IT partner India, managed IT services, IT solutions provider"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Why Us</span>
            <h1 className="heading-xl text-white mb-6">
              Why Choose <span className="text-gradient">SARMAK</span>?
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto">
              We are not just another IT service provider. We are your technology partner, 
              committed to your success with expertise, dedication, and a customer-first approach.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Our Edge</span>
              <h2 className="heading-lg text-white mb-6">
                What Sets Us <span className="text-gradient">Apart</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {differentiators.map((item, index) => (
                <div key={index} className="glass-card p-8 hover-lift">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-8 h-8 text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="body-md mb-4">{item.description}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-gold">{item.stat}</span>
                        <span className="text-white/60 text-sm">{item.statLabel}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Our Values</span>
              <h2 className="heading-lg text-white mb-6">
                Principles That <span className="text-gradient">Guide Us</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="glass-card p-6 hover-lift group">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="body-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Expertise</span>
              <h2 className="heading-lg text-white mb-6">
                Certified <span className="text-gradient">Professionals</span>
              </h2>
              <p className="body-lg text-white/60 max-w-2xl mx-auto">
                Our team holds industry-recognized certifications across all major technologies.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="px-6 py-3 glass-card hover:bg-gold/10 transition-colors">
                  <span className="text-white font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Our Approach</span>
              <h2 className="heading-lg text-white mb-6">
                How We <span className="text-gradient">Work</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: '1', title: 'Discover', desc: 'Understand your needs' },
                { step: '2', title: 'Design', desc: 'Create tailored solutions' },
                { step: '3', title: 'Deploy', desc: 'Implement with care' },
                { step: '4', title: 'Support', desc: 'Ongoing management' },
                { step: '5', title: 'Optimize', desc: 'Continuous improvement' }
              ].map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-gold">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="body-sm">{item.desc}</p>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-gold/30 to-transparent" />
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
              Ready to Experience the <span className="text-gradient">Difference</span>?
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Let us show you why businesses trust SARMAK for their IT needs.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;

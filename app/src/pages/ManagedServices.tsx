import { Server, Shield, TrendingUp, CheckCircle, ArrowRight, Zap, Users, Activity, HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { generateServiceSchema } from '@/components/SEO';

const ManagedServices = () => {
  const services = [
    {
      icon: HeadphonesIcon,
      title: '24/7 Helpdesk Support',
      description: 'Round-the-clock technical support with rapid issue resolution and expert assistance.'
    },
    {
      icon: Activity,
      title: 'Proactive Monitoring',
      description: 'Continuous system monitoring with early detection and prevention of potential issues.'
    },
    {
      icon: Shield,
      title: 'Security Management',
      description: 'Comprehensive security services including patching, updates, and threat protection.'
    },
    {
      icon: Zap,
      title: 'Automation & Optimization',
      description: 'Process automation and system optimization to improve efficiency and reduce costs.'
    },
    {
      icon: Users,
      title: 'IT Operations',
      description: 'Complete IT operations management from infrastructure to end-user support.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Management',
      description: 'Regular performance assessments and continuous improvement initiatives.'
    }
  ];

  const benefits = [
    { value: '20%', label: 'Efficiency Improvement' },
    { value: '10-20%', label: 'Cost Reduction' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '24/7', label: 'Support Available' }
  ];

  const plans = [
    {
      name: 'Basic',
      description: 'Ideal for small businesses',
      features: [
        'Helpdesk support (Business hours)',
        'Remote troubleshooting',
        'Patch management',
        'Monthly health reports',
        'Asset inventory management'
      ]
    },
    {
      name: 'Standard',
      description: 'For growing businesses',
      features: [
        '24/7 Helpdesk support',
        'Proactive monitoring',
        'Backup management',
        'Security policy enforcement',
        'Quarterly IT reviews',
        'Cloud services support'
      ],
      popular: true
    },
    {
      name: 'Premium',
      description: 'Full-service IT management',
      features: [
        'Dedicated account manager',
        'Disaster recovery planning',
        'Cloud migration support',
        'Advanced cybersecurity',
        'Compliance support',
        'Technology roadmap planning'
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Managed IT Services - 24/7 Support & Operations"
        description="SARMAK provides comprehensive managed IT services including 24/7 support, proactive monitoring, security management, and IT operations. Focus on your business while we manage your IT."
        keywords="managed IT services, IT support, 24/7 IT helpdesk, proactive monitoring, IT operations India"
        schema={generateServiceSchema(
          'Managed IT Services',
          'Comprehensive IT managed services with 24/7 support, proactive monitoring, and expert operations management.',
          'https://sarmak.in/services/managed-it'
        )}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/managed-services.jpg" alt="Managed Services" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/90 to-[#1c1d1b]/70" />
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-8">
              <Server className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Core Service</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6">
              Managed <span className="text-gradient">IT Services</span>
            </h1>
            
            <p className="body-lg text-white/70 mb-8 max-w-2xl">
              Focus on your core business while we keep your operations up and running. 
              Our comprehensive managed IT services provide 24/7 support, proactive monitoring, 
              and expert management of your entire IT infrastructure.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2 group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/service-plans" className="btn-outline">
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Services</span>
              <h2 className="heading-lg text-white mb-6">
                Comprehensive <span className="text-gradient">IT Support</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="glass-card p-6 hover-lift group">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-gold group-hover:text-[#1c1d1b] transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="body-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Benefits</span>
                <h2 className="heading-lg text-white mb-6">
                  Why <span className="text-gradient">Outsource IT</span>?
                </h2>
                <p className="body-lg text-white/70 mb-8">
                  Managed IT services offer numerous benefits that positively impact organizations, 
                  allowing you to focus on your core expertise while we handle the technology.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Reduce technology costs by 25-45%',
                    'Increase operational efficiency by 45-65%',
                    'Access to skilled expertise and resources',
                    'Scalability and flexibility',
                    'Enhanced security and compliance',
                    'Ability to focus on core competencies'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <img src="/team-meeting.jpg" alt="IT Support" className="rounded-lg shadow-2xl shadow-gold/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Plans */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Plans</span>
              <h2 className="heading-lg text-white mb-6">
                Service <span className="text-gradient">Plans</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div key={index} className={`glass-card p-8 ${plan.popular ? 'border-gold/50 relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-[#1c1d1b] text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/80 text-sm">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`w-full py-3 rounded-md font-semibold text-center block transition-all ${
                    plan.popular 
                      ? 'bg-gold text-[#1c1d1b] hover:bg-[#d4a84f]' 
                      : 'border border-gold text-gold hover:bg-gold hover:text-[#1c1d1b]'
                  }`}>
                    Get Quote
                  </Link>
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
              Ready to <span className="text-gradient">Transform</span> Your IT Operations?
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Let us handle your IT infrastructure while you focus on growing your business.
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

export default ManagedServices;

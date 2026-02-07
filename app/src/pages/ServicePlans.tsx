import { CheckCircle, ArrowRight, Star, Zap, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const ServicePlans = () => {
  const plans = [
    {
      name: 'Basic',
      description: 'Essential IT support for small businesses and startups',
      price: 'Custom',
      period: 'Quote',
      icon: Star,
      features: [
        'Helpdesk support (Business hours)',
        'Remote troubleshooting & issue resolution',
        'Patch management',
        'Monthly health reports',
        'Asset inventory management',
        'Email support',
        'Basic security monitoring'
      ],
      cta: 'Get Quote',
      popular: false
    },
    {
      name: 'Standard',
      description: 'Proactive IT support for growing businesses',
      price: 'Custom',
      period: 'Quote',
      icon: Zap,
      features: [
        'Everything in Basic, plus:',
        '24/7 Helpdesk support',
        'Proactive monitoring of systems & network',
        'Backup management',
        'Software updates and patching',
        'Security policy enforcement',
        'Quarterly IT reviews & reporting',
        'Cloud services support',
        'Priority response times'
      ],
      cta: 'Get Quote',
      popular: true
    },
    {
      name: 'Premium',
      description: 'Full-service IT management for enterprises',
      price: 'Custom',
      period: 'Quote',
      icon: Building2,
      features: [
        'Everything in Standard, plus:',
        'Dedicated IT account manager',
        'Disaster recovery planning & management',
        'Cloud migration & hybrid cloud support',
        'Advanced cybersecurity (firewall, email security)',
        'Vulnerability scans & penetration testing',
        'Annual technology roadmap planning',
        'Compliance support (ISO, GDPR, HIPAA)',
        'On-site support when needed'
      ],
      cta: 'Get Quote',
      popular: false
    }
  ];

  const addons = [
    { name: 'AI-Powered Monitoring', description: 'Intelligent anomaly detection and predictive maintenance' },
    { name: 'Database Administration', description: 'Expert DBA services for all major platforms' },
    { name: 'DevOps Implementation', description: 'CI/CD pipelines and infrastructure automation' },
    { name: 'Cloud Migration', description: 'End-to-end cloud migration services' },
    { name: 'Security Audits', description: 'Comprehensive security assessments and recommendations' },
    { name: 'IT Training', description: 'Staff training on various technologies and best practices' }
  ];

  return (
    <>
      <SEO 
        title="Service Plans - IT Managed Services Pricing"
        description="Explore SARMAK's service plans for IT managed services. From Basic to Premium, find the right plan for your business needs with 24/7 support and expert management."
        keywords="IT service plans, managed IT pricing, IT support packages, IT service levels, IT outsourcing plans India"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Pricing</span>
            <h1 className="heading-xl text-white mb-6">
              Service <span className="text-gradient">Plans</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto">
              Choose the right plan for your business. From essential support to full-service 
              IT management, we have solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`glass-card p-8 ${plan.popular ? 'border-gold/50 relative scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-[#1c1d1b] text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <plan.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-white/60 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-gold">{plan.price}</span>
                      <span className="text-white/50">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 rounded-md font-semibold text-center flex items-center justify-center gap-2 transition-all ${
                      plan.popular 
                        ? 'bg-gold text-[#1c1d1b] hover:bg-[#d4a84f]' 
                        : 'border border-gold text-gold hover:bg-gold hover:text-[#1c1d1b]'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Add-ons</span>
              <h2 className="heading-lg text-white mb-6">
                Optional <span className="text-gradient">Services</span>
              </h2>
              <p className="body-lg text-white/60 max-w-2xl mx-auto">
                Enhance your plan with these specialized services tailored to your specific needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addons.map((addon, index) => (
                <div key={index} className="glass-card p-6 hover-lift">
                  <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                  <p className="body-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">FAQ</span>
              <h2 className="heading-lg text-white mb-6">
                Common <span className="text-gradient">Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: 'How do I choose the right plan?',
                  a: 'Our team will assess your current IT infrastructure, business needs, and growth plans to recommend the most suitable plan for your organization.'
                },
                {
                  q: 'Can I upgrade or downgrade my plan?',
                  a: 'Yes, you can change your plan at any time based on your evolving business needs. We offer flexible arrangements.'
                },
                {
                  q: 'What is included in the support?',
                  a: 'All plans include remote support, monitoring, and maintenance. Higher-tier plans include additional services like on-site support and strategic consulting.'
                },
                {
                  q: 'How quickly will you respond to issues?',
                  a: 'Response times vary by plan severity and plan level. Premium plans include priority response with SLA guarantees.'
                }
              ].map((faq, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                  <p className="body-md">{faq.a}</p>
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
              Need a <span className="text-gradient">Custom</span> Solution?
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Contact us to discuss your specific requirements and get a tailored quote.
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

export default ServicePlans;

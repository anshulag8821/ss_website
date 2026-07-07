import { Settings, Layout, Database, Globe, ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { generateServiceSchema } from '@/components/SEO';

const PowerPlatform = () => {
  const services = [
    {
      icon: Layout,
      title: 'Power Apps',
      description: 'Build custom low-code business applications tailored to your needs.',
      features: ['Canvas Apps', 'Model-driven Apps', 'Custom Connectors', 'App Integration']
    },
    {
      icon: Globe,
      title: 'Power Pages',
      description: 'Create secure external-facing websites and business portals.',
      features: ['External Portals', 'Customer Websites', 'Partner Portals', 'Pro-dev Extensions']
    },
    {
      icon: Database,
      title: 'Dataverse',
      description: 'Scalable and secure data platform for all Power Platform apps.',
      features: ['Data Storage', 'Business Rules', 'Security', 'Integration']
    },
    {
      icon: Zap,
      title: 'Power Automate',
      description: 'Automate workflows and business processes across applications.',
      features: ['Flow Automation', 'RPA', 'Process Mining', 'AI Builder']
    }
  ];

  const benefits = [
    { value: '70%', label: 'Faster Development' },
    { value: '60%', label: 'Cost Reduction' },
    { value: '10x', label: 'Productivity Gain' },
    { value: '99.9%', label: 'Reliability' }
  ];

  const useCases = [
    {
      title: 'Employee Onboarding',
      description: 'Streamline new hire processes with automated workflows and self-service portals.'
    },
    {
      title: 'Customer Service',
      description: 'Build customer portals for ticket submission, tracking, and self-help.'
    },
    {
      title: 'Inventory Management',
      description: 'Create custom apps for tracking inventory, orders, and supply chain.'
    },
    {
      title: 'Approval Workflows',
      description: 'Automate approval processes with notifications and audit trails.'
    }
  ];

  return (
    <>
      <SEO 
        title="Microsoft Power Platform Services - Power Apps, Pages, Dataverse"
        description="SARMAK provides Microsoft Power Platform services including Power Apps development, Power Pages portals, Dataverse implementation, and Power Automate workflows."
        keywords="Power Platform, Power Apps, Power Pages, Dataverse, Microsoft Power Platform India, low-code development"
        schema={generateServiceSchema(
          'Microsoft Power Platform Services',
          'Comprehensive Microsoft Power Platform services including Power Apps, Power Pages, Dataverse, and automation solutions.',
          'https://sarmak.in/services/power-platform'
        )}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/powerplatform-services.jpg" alt="Power Platform" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/90 to-[#1c1d1b]/70" />
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-8">
              <Settings className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Microsoft Solutions</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6">
              Microsoft Power <span className="text-gradient">Platform</span>
            </h1>
            
            <p className="body-lg text-white/70 mb-8 max-w-2xl">
              Transform your business with Microsoft Power Platform. Build low-code apps, 
              automate workflows, and create powerful business solutions faster than ever before.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2 group">
                Power Platform Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services/managed-it" className="btn-outline">
                Managed Services
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
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Components</span>
              <h2 className="heading-lg text-white mb-6">
                Power Platform <span className="text-gradient">Components</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="glass-card p-8 hover-lift group">
                  <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-gold group-hover:text-[#1c1d1b] transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="body-md mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 text-white/60 text-sm rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Use Cases</span>
              <h2 className="heading-lg text-white mb-6">
                Power Platform <span className="text-gradient">Solutions</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="glass-card p-6 text-center hover-lift">
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="body-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Benefits</span>
                <h2 className="heading-lg text-white mb-6">
                  Why Power <span className="text-gradient">Platform</span>?
                </h2>
                <p className="body-lg text-white/70 mb-8">
                  Microsoft Power Platform empowers organizations to build custom business 
                  applications quickly and cost-effectively, with seamless integration across 
                  Microsoft 365, Dynamics 365, and Azure.
                </p>
                
                <div className="space-y-4">
                  {[
                    'High availability and secure platform',
                    'Optimum utilization of resources',
                    'Easy integration with Microsoft ecosystem',
                    'Low-code development for faster delivery',
                    'Responsive design for all devices',
                    'Enterprise-grade security and governance'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <img src="/powerplatform-services.jpg" alt="Power Platform" className="rounded-lg shadow-2xl shadow-gold/10" />
              </div>
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
              Build Your <span className="text-gradient">Business Apps</span> Faster
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Let our Power Platform experts help you transform your business processes.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Start Building
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PowerPlatform;

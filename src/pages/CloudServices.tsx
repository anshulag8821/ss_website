import { Cloud, CloudRain, Server, ArrowRight, CheckCircle, Shield, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { generateServiceSchema } from '@/components/SEO';

const CloudServices = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Public Cloud',
      description: 'AWS, Azure, and GCP deployment and management for scalable, cost-effective solutions.',
      providers: ['AWS', 'Azure', 'GCP']
    },
    {
      icon: Server,
      title: 'Private Cloud',
      description: 'Secure, dedicated cloud infrastructure tailored to your specific requirements.',
      providers: ['VMware', 'OpenStack', 'Hyper-V']
    },
    {
      icon: CloudRain,
      title: 'Hybrid Cloud',
      description: 'Seamless integration of public and private clouds for maximum flexibility.',
      providers: ['Multi-cloud', 'Hybrid Orchestration']
    },
    {
      icon: Globe,
      title: 'Cloud Migration',
      description: 'End-to-end migration services with minimal disruption to operations.',
      providers: ['Lift & Shift', 'Re-platforming', 'Refactoring']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security measures to protect your cloud infrastructure.',
      providers: ['IAM', 'Encryption', 'Compliance']
    },
    {
      icon: Zap,
      title: 'Cloud Optimization',
      description: 'Continuous optimization to reduce costs and improve performance.',
      providers: ['Cost Management', 'Performance Tuning']
    }
  ];

  const benefits = [
    { value: '40%', label: 'Cost Savings' },
    { value: '99.9%', label: 'Uptime' },
    { value: '3x', label: 'Faster Deployment' },
    { value: '24/7', label: 'Monitoring' }
  ];

  const process = [
    {
      step: '1',
      title: 'Assessment',
      description: 'Evaluate current infrastructure and define cloud strategy.'
    },
    {
      step: '2',
      title: 'Planning',
      description: 'Design cloud architecture and migration roadmap.'
    },
    {
      step: '3',
      title: 'Migration',
      description: 'Execute migration with minimal business disruption.'
    },
    {
      step: '4',
      title: 'Optimization',
      description: 'Continuous monitoring and performance optimization.'
    }
  ];

  return (
    <>
      <SEO 
        title="Cloud Services - AWS, Azure, GCP Migration & Management"
        description="SARMAK provides comprehensive cloud services including public, private, and hybrid cloud solutions. Expert cloud migration, management, and optimization for AWS, Azure, and GCP."
        keywords="cloud services, AWS migration, Azure services, GCP, hybrid cloud, cloud management India"
        schema={generateServiceSchema(
          'Cloud Services',
          'Comprehensive cloud services including public, private, and hybrid cloud deployment, migration, and management.',
          'https://sarmak.in/services/cloud'
        )}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/cloud-services.jpg" alt="Cloud Services" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/90 to-[#1c1d1b]/70" />
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-8">
              <Cloud className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Cloud Solutions</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6">
              Cloud <span className="text-gradient">Services</span>
            </h1>
            
            <p className="body-lg text-white/70 mb-8 max-w-2xl">
              Transform your business with our comprehensive cloud solutions. From migration 
              to management, we help you leverage the full potential of AWS, Azure, and GCP 
              for scalable, secure, and cost-effective operations.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2 group">
                Cloud Consultation
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
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Offerings</span>
              <h2 className="heading-lg text-white mb-6">
                Cloud <span className="text-gradient">Solutions</span>
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
                  <p className="body-sm mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.providers.map((provider, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded">
                        {provider}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Platforms</span>
              <h2 className="heading-lg text-white mb-6">
                Cloud <span className="text-gradient">Platforms</span> We Support
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'AWS', description: 'Amazon Web Services - Comprehensive cloud platform with 200+ services' },
                { name: 'Azure', description: 'Microsoft Azure - Enterprise-grade cloud with seamless Microsoft integration' },
                { name: 'GCP', description: 'Google Cloud Platform - Data analytics and machine learning leader' }
              ].map((platform, index) => (
                <div key={index} className="glass-card p-8 text-center hover-lift">
                  <h3 className="text-2xl font-bold text-gold mb-4">{platform.name}</h3>
                  <p className="body-sm">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Process</span>
              <h2 className="heading-lg text-white mb-6">
                Cloud <span className="text-gradient">Migration</span> Process
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-gold">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="body-sm">{item.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-gold/30 to-transparent" />
                  )}
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
                  Why Move to <span className="text-gradient">Cloud</span>?
                </h2>
                <p className="body-lg text-white/70 mb-8">
                  Cloud computing offers transformative benefits that enable businesses to 
                  innovate faster, reduce costs, and scale efficiently.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Scalability - Scale resources up or down based on demand',
                    'Cost Efficiency - Pay only for what you use',
                    'Disaster Recovery - Built-in backup and recovery solutions',
                    'Global Accessibility - Access from anywhere, anytime',
                    'Automatic Updates - Always have the latest technology',
                    'Enhanced Collaboration - Real-time team collaboration'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <img src="/cloud-services.jpg" alt="Cloud Benefits" className="rounded-lg shadow-2xl shadow-gold/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-bg.jpg" alt="CTA Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/80 to-[#1c1d1b]" />
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-6">
              Ready for <span className="text-gradient">Cloud</span> Transformation?
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Let our cloud experts assess your infrastructure and design a migration strategy 
              tailored to your business needs.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Start Cloud Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CloudServices;

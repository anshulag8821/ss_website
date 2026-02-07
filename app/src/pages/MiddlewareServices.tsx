import { Layers, Server, Zap, ArrowRight, CheckCircle, RefreshCw, Lock, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { generateServiceSchema } from '@/components/SEO';

const MiddlewareServices = () => {
  const platforms = [
    {
      name: 'Oracle WebLogic',
      description: 'Enterprise-grade Java EE application server',
      services: ['Installation & Configuration', 'Performance Tuning', 'Clustering', 'Security Management']
    },
    {
      name: 'IBM WebSphere',
      description: 'Robust application server for enterprise apps',
      services: ['Deployment & Management', 'High Availability', 'Patching & Upgrades', 'Troubleshooting']
    },
    {
      name: 'Apache Tomcat',
      description: 'Lightweight Java Servlet container',
      services: ['Setup & Configuration', 'Optimization', 'Load Balancing', 'Monitoring']
    },
    {
      name: 'JBoss/WildFly',
      description: 'Open source Java EE application server',
      services: ['Installation', 'Configuration', 'Performance Tuning', 'Security Hardening']
    }
  ];

  const services = [
    {
      icon: Server,
      title: 'Installation & Configuration',
      description: 'Expert setup and configuration of middleware platforms.'
    },
    {
      icon: Zap,
      title: 'Performance Tuning',
      description: 'Optimize middleware for maximum throughput and minimal latency.'
    },
    {
      icon: Layers,
      title: 'Clustering & HA',
      description: 'High availability configurations for mission-critical applications.'
    },
    {
      icon: Lock,
      title: 'Security Management',
      description: 'Access control, SSL configuration, and security hardening.'
    },
    {
      icon: RefreshCw,
      title: 'Patching & Upgrades',
      description: 'Regular updates and version upgrades with minimal downtime.'
    },
    {
      icon: Activity,
      title: 'Incident Resolution',
      description: 'Rapid troubleshooting and problem resolution.'
    }
  ];

  const benefits = [
    { value: '99.9%', label: 'Application Uptime' },
    { value: '40%', label: 'Performance Gain' },
    { value: '24/7', label: 'Expert Support' },
    { value: '50%', label: 'Faster Resolution' }
  ];

  return (
    <>
      <SEO 
        title="Middleware Services - WebLogic, WebSphere, Tomcat, JBoss Support"
        description="SARMAK provides expert middleware services including WebLogic, WebSphere, Tomcat, and JBoss administration, performance tuning, clustering, and 24/7 support."
        keywords="middleware services, WebLogic administration, WebSphere support, Tomcat, JBoss, application server India"
        schema={generateServiceSchema(
          'Middleware Services',
          'Expert middleware administration and support for WebLogic, WebSphere, Tomcat, and JBoss application servers.',
          'https://sarmak.in/services/middleware'
        )}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/middleware-services.jpg" alt="Middleware Services" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/90 to-[#1c1d1b]/70" />
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-8">
              <Layers className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Application Infrastructure</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6">
              Middleware <span className="text-gradient">Services</span>
            </h1>
            
            <p className="body-lg text-white/70 mb-8 max-w-2xl">
              Expert middleware administration for enterprise application servers. From WebLogic 
              to WebSphere, we ensure your applications run smoothly, securely, and at peak performance.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2 group">
                Middleware Consultation
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

      {/* Platforms */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Platforms</span>
              <h2 className="heading-lg text-white mb-6">
                Middleware <span className="text-gradient">Platforms</span> We Support
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="glass-card p-8 hover-lift">
                  <h3 className="text-xl font-semibold text-white mb-2">{platform.name}</h3>
                  <p className="text-white/60 mb-6">{platform.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {platform.services.map((service, i) => (
                      <span key={i} className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Services</span>
              <h2 className="heading-lg text-white mb-6">
                Comprehensive <span className="text-gradient">Middleware</span> Support
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
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Benefits</span>
                <h2 className="heading-lg text-white mb-6">
                  Why Expert <span className="text-gradient">Middleware</span> Support?
                </h2>
                <p className="body-lg text-white/70 mb-8">
                  Expert middleware engineers who understand enterprise environments and critical 
                  workloads, supporting large-scale deployments with minimal downtime.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Maximum efficiency for enterprise applications',
                    'Minimal downtime during maintenance',
                    'Detect and eliminate resource waste',
                    'Expert troubleshooting and resolution',
                    'Proactive performance optimization',
                    'Secure and compliant configurations'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <img src="/middleware-services.jpg" alt="Middleware Services" className="rounded-lg shadow-2xl shadow-gold/10" />
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
              Optimize Your <span className="text-gradient">Application</span> Infrastructure
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Let our middleware experts ensure your applications run at peak performance.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Talk to an Expert
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddlewareServices;

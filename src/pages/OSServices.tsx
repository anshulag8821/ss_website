import { Monitor, Server, Shield, Zap, ArrowRight, CheckCircle, Terminal, Settings, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { generateServiceSchema } from '@/components/SEO';

const OSServices = () => {
  const operatingSystems = [
    { name: 'Linux', variants: 'RHEL, CentOS, Ubuntu, Debian, SUSE', icon: Terminal },
    { name: 'Unix', variants: 'AIX, HP-UX, Solaris', icon: Server },
    { name: 'Windows Server', variants: '2012, 2016, 2019, 2022', icon: Monitor },
    { name: 'Freeware OS', variants: 'Open Source Solutions', icon: Settings }
  ];

  const services = [
    {
      icon: Server,
      title: 'OS Administration',
      description: 'Full lifecycle support for operating systems including installation, configuration, and maintenance.'
    },
    {
      icon: Zap,
      title: 'Performance Tuning',
      description: 'Resource optimization and system parameter fine-tuning for high availability.'
    },
    {
      icon: Shield,
      title: 'Security Management',
      description: 'Regular updates, vulnerability patching, and access control enforcement.'
    },
    {
      icon: Lock,
      title: 'Backup & Recovery',
      description: 'Review and design backup policies for data integrity and availability.'
    }
  ];

  const benefits = [
    { value: '99.9%', label: 'System Uptime' },
    { value: '40%', label: 'Performance Gain' },
    { value: '24/7', label: 'Monitoring' },
    { value: '50%', label: 'Faster Resolution' }
  ];

  return (
    <>
      <SEO 
        title="Operating System Services - Linux, Unix, Windows Administration"
        description="SARMAK provides expert operating system services including Linux, Unix, and Windows Server administration, performance tuning, security management, and 24/7 support."
        keywords="OS administration, Linux support, Windows Server, Unix administration, operating system services India"
        schema={generateServiceSchema(
          'Operating System Services',
          'Expert operating system administration and support for Linux, Unix, Windows, and freeware OS platforms.',
          'https://sarmak.in/services/operating-systems'
        )}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/os-services.jpg" alt="OS Services" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/90 to-[#1c1d1b]/70" />
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-8">
              <Monitor className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">System Administration</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6">
              Operating System <span className="text-gradient">Services</span>
            </h1>
            
            <p className="body-lg text-white/70 mb-8 max-w-2xl">
              Expert administration and support for all major operating systems. From Linux to 
              Windows Server, our team ensures your systems are secure, optimized, and always available.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2 group">
                OS Consultation
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

      {/* Supported OS */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Platforms</span>
              <h2 className="heading-lg text-white mb-6">
                Operating Systems We <span className="text-gradient">Support</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {operatingSystems.map((os, index) => (
                <div key={index} className="glass-card p-6 text-center hover-lift group">
                  <os.icon className="w-12 h-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white mb-2">{os.name}</h3>
                  <p className="text-white/50 text-sm">{os.variants}</p>
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
                OS <span className="text-gradient">Management</span> Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="glass-card p-8 flex gap-6 hover-lift group">
                  <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                    <service.icon className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="body-md">{service.description}</p>
                  </div>
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
                  Why Professional <span className="text-gradient">OS Management</span>?
                </h2>
                <p className="body-lg text-white/70 mb-8">
                  Professional operating system management ensures higher uptime, improved 
                  customer experience, and increased operational efficiency.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Higher system uptime and availability',
                    'Improved customer experience',
                    'Increased operational efficiency',
                    'Enhanced security posture',
                    'Proactive issue resolution',
                    'Compliance with industry standards'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <img src="/os-services.jpg" alt="OS Services" className="rounded-lg shadow-2xl shadow-gold/10" />
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
              Optimize Your <span className="text-gradient">Infrastructure</span>
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Let our OS experts ensure your systems run at peak performance.
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

export default OSServices;

import { Code, GitBranch, Container, Server, ArrowRight, CheckCircle, TrendingUp, Cloud, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { generateServiceSchema } from '@/components/SEO';

const DevOpsServices = () => {
  const services = [
    {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description: 'Design and implementation of Continuous Integration and Continuous Deployment pipelines.'
    },
    {
      icon: Container,
      title: 'Containerization',
      description: 'Docker containerization and Kubernetes orchestration for scalable deployments.'
    },
    {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Terraform, Ansible, and CloudFormation for automated infrastructure management.'
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Microservices architecture and cloud-native application development.'
    },
    {
      icon: Workflow,
      title: 'DevSecOps',
      description: 'Security integration throughout the development lifecycle.'
    },
    {
      icon: TrendingUp,
      title: 'Monitoring & Logging',
      description: 'Comprehensive observability with ELK stack, Prometheus, and Grafana.'
    }
  ];

  const tools = [
    'Git', 'Jenkins', 'GitLab CI', 'GitHub Actions',
    'Docker', 'Kubernetes', 'Helm', 'Terraform',
    'Ansible', 'Puppet', 'Chef', 'Nexus',
    'SonarQube', 'Jira', 'Confluence', 'Slack'
  ];

  const benefits = [
    { value: '10x', label: 'Faster Releases' },
    { value: '70%', label: 'Cost Reduction' },
    { value: '99.9%', label: 'Deployment Success' },
    { value: '50%', label: 'Fewer Defects' }
  ];

  const process = [
    {
      step: '1',
      title: 'Plan',
      description: 'Define requirements, architecture, and implementation strategy.'
    },
    {
      step: '2',
      title: 'Develop',
      description: 'Code development with version control and collaborative workflows.'
    },
    {
      step: '3',
      title: 'Build',
      description: 'Automated builds, testing, and artifact creation.'
    },
    {
      step: '4',
      title: 'Deploy',
      description: 'Automated deployment to various environments with rollback capability.'
    },
    {
      step: '5',
      title: 'Monitor',
      description: 'Continuous monitoring, logging, and performance optimization.'
    }
  ];

  return (
    <>
      <SEO 
        title="DevOps Services - CI/CD, Kubernetes, Docker, Automation"
        description="SARMAK provides comprehensive DevOps services including CI/CD pipeline implementation, containerization with Docker and Kubernetes, infrastructure automation, and cloud-native development."
        keywords="DevOps services, CI/CD pipeline, Kubernetes, Docker, infrastructure automation, DevOps India"
        schema={generateServiceSchema(
          'DevOps Services',
          'Comprehensive DevOps services including CI/CD, containerization, infrastructure automation, and cloud-native development.',
          'https://sarmak.in/services/devops'
        )}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/devops-services.jpg" alt="DevOps Services" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/90 to-[#1c1d1b]/70" />
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-8">
              <Code className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Development Operations</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6">
              DevOps <span className="text-gradient">Services</span>
            </h1>
            
            <p className="body-lg text-white/70 mb-8 max-w-2xl">
              Accelerate your software delivery with modern DevOps practices. From CI/CD pipelines 
              to container orchestration, we help you build, deploy, and scale applications faster 
              and more reliably.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2 group">
                DevOps Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services/cloud" className="btn-outline">
                Cloud Services
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
                End-to-End <span className="text-gradient">DevOps Solutions</span>
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

      {/* DevOps Lifecycle */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Process</span>
              <h2 className="heading-lg text-white mb-6">
                DevOps <span className="text-gradient">Lifecycle</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="glass-card p-6 text-center h-full">
                    <span className="text-3xl font-bold text-gold/30 block mb-4">{item.step}</span>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="body-sm">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-gold/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Tools</span>
              <h2 className="heading-lg text-white mb-6">
                DevOps <span className="text-gradient">Toolchain</span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="px-6 py-3 glass-card hover:bg-gold/10 transition-colors cursor-default">
                  <span className="text-white font-medium">{tool}</span>
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
                  Why <span className="text-gradient">DevOps</span>?
                </h2>
                <p className="body-lg text-white/70 mb-8">
                  DevOps bridges the gap between development and operations, enabling faster 
                  delivery, higher quality, and improved collaboration.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Faster time-to-market for new features',
                    'Improved deployment frequency and reliability',
                    'Reduced failure rate of new releases',
                    'Faster recovery from failures',
                    'Better collaboration between teams',
                    'Enhanced security through DevSecOps'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <img src="/devops-services.jpg" alt="DevOps" className="rounded-lg shadow-2xl shadow-gold/10" />
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
              Ready to <span className="text-gradient">Accelerate</span>?
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Let our DevOps experts transform your software delivery pipeline.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Start DevOps Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevOpsServices;

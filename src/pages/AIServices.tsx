import { Brain, Cpu, TrendingUp, Shield, Zap, BarChart3, Clock, CheckCircle, ArrowRight, MessageSquare, Server, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { generateServiceSchema } from '@/components/SEO';

const AIServices = () => {
  const features = [
    {
      icon: Activity,
      title: 'Predictive Maintenance',
      description: 'AI algorithms analyze system patterns to predict and prevent failures before they occur, reducing downtime by up to 45%.'
    },
    {
      icon: Shield,
      title: 'Intelligent Security',
      description: 'AI-driven threat detection and response systems that learn and adapt to new security challenges in real-time.'
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Advanced data analytics and visualization powered by machine learning for actionable business insights.'
    },
    {
      icon: Zap,
      title: 'Automated Optimization',
      description: 'Continuous resource optimization based on usage patterns, ensuring maximum efficiency and cost savings.'
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbots & Support',
      description: 'Intelligent virtual assistants for IT support, providing instant responses and automated issue resolution.'
    },
    {
      icon: Server,
      title: 'Infrastructure Intelligence',
      description: 'Smart infrastructure management that adapts to workload demands and optimizes performance automatically.'
    }
  ];

  const benefits = [
    { value: '45%', label: 'Reduction in Downtime' },
    { value: '60%', label: 'Faster Issue Resolution' },
    { value: '30%', label: 'Cost Savings' },
    { value: '99.9%', label: 'System Availability' }
  ];

  const useCases = [
    {
      title: 'Automated Incident Management',
      description: 'AI automatically detects, categorizes, and routes incidents to the right team, reducing response time by 60%.',
      icon: Clock
    },
    {
      title: 'Capacity Planning',
      description: 'Predictive analytics forecast resource needs, enabling proactive scaling and preventing performance bottlenecks.',
      icon: TrendingUp
    },
    {
      title: 'Anomaly Detection',
      description: 'Machine learning models identify unusual patterns in system behavior, flagging potential issues before they escalate.',
      icon: Activity
    },
    {
      title: 'Self-Healing Systems',
      description: 'AI-powered automation resolves common issues without human intervention, ensuring continuous operations.',
      icon: Cpu
    }
  ];

  const technologies = [
    'Machine Learning', 'Deep Learning', 'Natural Language Processing', 
    'Computer Vision', 'Predictive Analytics', 'Neural Networks',
    'Reinforcement Learning', 'MLOps', 'AI Model Training'
  ];

  return (
    <>
      <SEO 
        title="AI-Powered IT Management & Solutions"
        description="Transform your IT infrastructure with SARMAK's AI solutions. Predictive maintenance, intelligent security, automated optimization, and smart analytics for modern enterprises."
        keywords="AI IT management, artificial intelligence IT services, predictive maintenance, AI security, machine learning infrastructure"
        schema={generateServiceSchema(
          'AI-Powered IT Management',
          'Transform your IT infrastructure with intelligent automation, predictive analytics, and AI-driven optimization.',
          'https://sarmak.in/services/ai'
        )}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/ai-services.jpg" alt="AI Services" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/90 to-[#1c1d1b]/70" />
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-8">
              <Brain className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Primary Service</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6">
              AI-Powered <span className="text-gradient">IT Management</span>
            </h1>
            
            <p className="body-lg text-white/70 mb-8 max-w-2xl">
              Transform your IT infrastructure with intelligent automation, predictive analytics, 
              and AI-driven optimization. Our AI solutions learn, adapt, and evolve to keep your 
              systems running at peak performance.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2 group">
                Get AI Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services/ai-training" className="btn-outline">
                AI Training Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Features Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Capabilities</span>
              <h2 className="heading-lg text-white mb-6">
                Intelligent <span className="text-gradient">IT Automation</span>
              </h2>
              <p className="body-lg text-white/60 max-w-3xl mx-auto">
                Our AI-powered platform brings together cutting-edge technologies to deliver 
                intelligent, autonomous IT operations that scale with your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 hover-lift group">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-gold group-hover:text-[#1c1d1b] transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="body-sm">{feature.description}</p>
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
                Real-World <span className="text-gradient">Applications</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="glass-card p-8 flex gap-6">
                  <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="body-md">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Process</span>
              <h2 className="heading-lg text-white mb-6">
                How <span className="text-gradient">AI IT Management</span> Works
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Data Collection',
                  description: 'AI agents collect and aggregate data from all IT systems and infrastructure components.'
                },
                {
                  step: '2',
                  title: 'Pattern Analysis',
                  description: 'Machine learning models analyze patterns to establish baselines and detect anomalies.'
                },
                {
                  step: '3',
                  title: 'Intelligent Action',
                  description: 'AI automatically takes corrective actions or alerts the appropriate team members.'
                },
                {
                  step: '4',
                  title: 'Continuous Learning',
                  description: 'The system continuously learns and improves from each interaction and outcome.'
                }
              ].map((item, index) => (
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

      {/* Technologies */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Technologies</span>
              <h2 className="heading-lg text-white mb-6">
                AI & Machine Learning <span className="text-gradient">Stack</span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="px-6 py-3 glass-card hover:bg-gold/10 transition-colors cursor-default">
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AI */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Advantages</span>
                <h2 className="heading-lg text-white mb-6">
                  Why Choose <span className="text-gradient">AI-Powered IT</span>?
                </h2>
                <p className="body-lg text-white/70 mb-8">
                  Traditional IT management relies on reactive approaches. Our AI solutions 
                  transform your operations into a proactive, self-optimizing ecosystem that 
                  anticipates needs and prevents issues before they impact your business.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Proactive issue prevention instead of reactive firefighting',
                    '24/7 intelligent monitoring with instant response',
                    'Continuous optimization without human intervention',
                    'Scalable solutions that grow with your business',
                    'Data-driven decision making and reporting'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <img src="/managed-services.jpg" alt="AI Operations" className="rounded-lg" />
                <img src="/cloud-services.jpg" alt="Cloud AI" className="rounded-lg mt-8" />
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
              Ready to Transform with <span className="text-gradient">AI</span>?
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Let our AI experts analyze your infrastructure and design a customized 
              intelligent IT management solution for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2 group">
                Schedule AI Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services/ai-training" className="btn-outline">
                Explore AI Training
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIServices;

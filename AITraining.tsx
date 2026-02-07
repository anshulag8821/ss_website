import { GraduationCap, BookOpen, Users, Award, Clock, CheckCircle, ArrowRight, Brain, Code, Database, LineChart, Lightbulb, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { generateServiceSchema } from '@/components/SEO';

const AITraining = () => {
  const programs = [
    {
      icon: Brain,
      title: 'AI Fundamentals',
      duration: '4 Weeks',
      level: 'Beginner',
      description: 'Introduction to artificial intelligence, machine learning concepts, and real-world applications.',
      topics: ['AI Basics', 'ML Introduction', 'Python for AI', 'Data Preprocessing']
    },
    {
      icon: Code,
      title: 'Machine Learning Deep Dive',
      duration: '8 Weeks',
      level: 'Intermediate',
      description: 'Comprehensive training on supervised and unsupervised learning algorithms.',
      topics: ['Regression', 'Classification', 'Clustering', 'Model Evaluation']
    },
    {
      icon: Database,
      title: 'Deep Learning & Neural Networks',
      duration: '10 Weeks',
      level: 'Advanced',
      description: 'Master neural networks, CNNs, RNNs, and build deep learning models.',
      topics: ['Neural Networks', 'CNN', 'RNN/LSTM', 'Transfer Learning']
    },
    {
      icon: LineChart,
      title: 'Data Science & Analytics',
      duration: '6 Weeks',
      level: 'Intermediate',
      description: 'Learn data analysis, visualization, and statistical modeling techniques.',
      topics: ['Data Analysis', 'Visualization', 'Statistics', 'Pandas & NumPy']
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with real-world AI implementation experience.'
    },
    {
      icon: BookOpen,
      title: 'Hands-on Labs',
      description: 'Practical exercises and projects using industry-standard tools and frameworks.'
    },
    {
      icon: Award,
      title: 'Industry Certification',
      description: 'Receive recognized certificates upon successful program completion.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Programs designed to fit academic calendars and student schedules.'
    }
  ];

  const benefits = [
    'Enhanced employability in the AI-driven job market',
    'Practical skills aligned with industry requirements',
    'Portfolio of real-world AI projects',
    'Networking opportunities with AI professionals',
    'Foundation for advanced AI research',
    'Competitive advantage in technology careers'
  ];

  const stats = [
    { value: '50+', label: 'Partner Institutions' },
    { value: '10,000+', label: 'Students Trained' },
    { value: '95%', label: 'Placement Rate' },
    { value: '4.8/5', label: 'Student Rating' }
  ];

  const technologies = [
    'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 
    'Keras', 'Pandas', 'NumPy', 'Matplotlib', 
    'Jupyter', 'OpenCV', 'NLTK', 'AWS SageMaker'
  ];

  return (
    <>
      <SEO 
        title="AI Training Programs for Universities & Colleges"
        description="SARMAK offers comprehensive AI training programs for universities and colleges. Enhance AI skills among students with hands-on learning and industry-recognized certifications."
        keywords="AI training, machine learning courses, AI education, university AI programs, college AI training India"
        schema={generateServiceSchema(
          'AI Training Programs',
          'Comprehensive AI and machine learning training programs for universities and colleges to enhance student skills.',
          'https://sarmak.in/services/ai-training'
        )}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/ai-training.jpg" alt="AI Training" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/90 to-[#1c1d1b]/70" />
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-8">
              <GraduationCap className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Education Initiative</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6">
              AI Training for <span className="text-gradient">Universities & Colleges</span>
            </h1>
            
            <p className="body-lg text-white/70 mb-8 max-w-2xl">
              Empowering the next generation with AI skills. SARMAK partners with educational 
              institutions to deliver comprehensive AI and machine learning training programs 
              that prepare students for the future of technology.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2 group">
                Partner With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services/ai" className="btn-outline">
                AI Solutions
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
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Programs</span>
              <h2 className="heading-lg text-white mb-6">
                Comprehensive <span className="text-gradient">AI Curriculum</span>
              </h2>
              <p className="body-lg text-white/60 max-w-3xl mx-auto">
                Our carefully designed programs cater to different skill levels, from beginners 
                to advanced learners, ensuring every student can build a strong foundation in AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="glass-card p-8 hover-lift group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                      <program.icon className="w-7 h-7 text-gold group-hover:text-[#1c1d1b] transition-colors" />
                    </div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-gold/10 text-gold text-xs rounded-full">{program.duration}</span>
                      <span className="px-3 py-1 bg-white/5 text-white/60 text-xs rounded-full">{program.level}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors">
                    {program.title}
                  </h3>
                  <p className="body-sm mb-6">{program.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {program.topics.map((topic, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 text-white/60 text-sm rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Why Choose Us</span>
              <h2 className="heading-lg text-white mb-6">
                Program <span className="text-gradient">Highlights</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 text-center hover-lift group">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="body-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Student Benefits</span>
                <h2 className="heading-lg text-white mb-6">
                  Building <span className="text-gradient">Future-Ready</span> Skills
                </h2>
                <p className="body-lg text-white/70 mb-8">
                  Our AI training programs are designed to equip students with the skills and 
                  knowledge needed to excel in the rapidly evolving technology landscape.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-white/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 text-center">
                  <Lightbulb className="w-10 h-10 text-gold mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Innovation Focus</h4>
                  <p className="text-white/60 text-sm">Learn cutting-edge AI techniques</p>
                </div>
                <div className="glass-card p-6 text-center mt-8">
                  <Target className="w-10 h-10 text-gold mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Career Ready</h4>
                  <p className="text-white/60 text-sm">Industry-aligned curriculum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Tools & Technologies</span>
              <h2 className="heading-lg text-white mb-6">
                Industry-Standard <span className="text-gradient">Tech Stack</span>
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

      {/* Partnership Model */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Partnership</span>
              <h2 className="heading-lg text-white mb-6">
                How <span className="text-gradient">Institutional Partnership</span> Works
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Initial Discussion',
                  description: 'We understand your institution\'s goals and requirements.'
                },
                {
                  step: '2',
                  title: 'Customized Curriculum',
                  description: 'We tailor our programs to fit your academic calendar and needs.'
                },
                {
                  step: '3',
                  title: 'Program Delivery',
                  description: 'Our expert instructors deliver engaging, hands-on training sessions.'
                },
                {
                  step: '4',
                  title: 'Certification & Support',
                  description: 'Students receive certificates and ongoing career support.'
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

      {/* Testimonials */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Success Stories</span>
              <h2 className="heading-lg text-white mb-6">
                What <span className="text-gradient">Institutions Say</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: 'SARMAK\'s AI training program has transformed our computer science curriculum. Students are now industry-ready with practical AI skills.',
                  author: 'Dr. Rajesh Kumar',
                  role: 'HOD, Computer Science',
                  institution: 'Leading Engineering College'
                },
                {
                  quote: 'The hands-on approach and expert instructors from SARMAK have made AI accessible to all our students, regardless of their background.',
                  author: 'Prof. Priya Sharma',
                  role: 'Dean, Technology',
                  institution: 'Premier University'
                }
              ].map((testimonial, index) => (
                <div key={index} className="glass-card p-8">
                  <div className="text-gold text-4xl mb-4">"</div>
                  <p className="body-md mb-6">{testimonial.quote}</p>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-gold text-sm">{testimonial.role}</div>
                    <div className="text-white/50 text-sm">{testimonial.institution}</div>
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
          <img src="/ai-services.jpg" alt="CTA Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/80 to-[#1c1d1b]" />
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-6">
              Ready to <span className="text-gradient">Empower</span> Your Students?
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Partner with SARMAK to bring world-class AI education to your institution. 
              Let's prepare the next generation for an AI-driven future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2 group">
                Start Partnership Discussion
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services/ai" className="btn-outline">
                Explore AI Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AITraining;

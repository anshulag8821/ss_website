import { Building2, Landmark, ShoppingCart, Factory, Stethoscope, GraduationCap, Plane, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const Industries = () => {
  const industries = [
    {
      icon: Landmark,
      name: 'Banking & Finance',
      description: 'Secure, compliant IT solutions for financial institutions with 24/7 monitoring and disaster recovery.',
      services: ['Security & Compliance', 'High Availability', 'Data Protection', 'Fintech Integration']
    },
    {
      icon: ShoppingCart,
      name: 'Retail & E-commerce',
      description: 'Scalable infrastructure to handle peak loads and deliver seamless customer experiences.',
      services: ['Cloud Scaling', 'Payment Security', 'Inventory Systems', 'Customer Analytics']
    },
    {
      icon: Factory,
      name: 'Manufacturing',
      description: 'Industry 4.0 solutions for smart manufacturing and supply chain optimization.',
      services: ['IoT Integration', 'ERP Support', 'Predictive Maintenance', 'Quality Systems']
    },
    {
      icon: Stethoscope,
      name: 'Healthcare',
      description: 'HIPAA-compliant IT solutions for hospitals, clinics, and healthcare providers.',
      services: ['HIPAA Compliance', 'EMR Support', 'Telehealth', 'Data Security']
    },
    {
      icon: GraduationCap,
      name: 'Education',
      description: 'Technology solutions for schools, colleges, and universities including AI training.',
      services: ['Learning Management', 'AI Training', 'Campus Networks', 'Student Portals']
    },
    {
      icon: Plane,
      name: 'Transportation & Logistics',
      description: 'Real-time tracking, fleet management, and logistics optimization solutions.',
      services: ['Fleet Management', 'Route Optimization', 'Real-time Tracking', 'Warehouse Systems']
    },
    {
      icon: Building2,
      name: 'Government',
      description: 'Secure eGovernance solutions for public sector organizations.',
      services: ['eGovernance', 'Citizen Portals', 'Data Security', 'Compliance']
    },
    {
      icon: Smartphone,
      name: 'Telecommunications',
      description: 'Robust infrastructure support for telecom operators and service providers.',
      services: ['Network Management', 'Billing Systems', 'Customer Care', 'Infrastructure']
    }
  ];

  return (
    <>
      <SEO 
        title="Industries We Serve - IT Solutions by Sector"
        description="SARMAK provides specialized IT solutions for banking, healthcare, manufacturing, retail, education, and more. Industry-specific expertise for your business."
        keywords="IT solutions by industry, banking IT services, healthcare IT, manufacturing IT, retail technology India"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Industries</span>
            <h1 className="heading-xl text-white mb-6">
              Industries We <span className="text-gradient">Serve</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto">
              We bring deep industry expertise to deliver tailored IT solutions that address 
              the unique challenges and requirements of your sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="glass-card p-6 hover-lift group">
                  <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                    <industry.icon className="w-7 h-7 text-gold group-hover:text-[#1c1d1b] transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                    {industry.name}
                  </h3>
                  <p className="body-sm mb-4">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.services.map((service, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded">
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

      {/* Custom Solutions */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Customization</span>
                <h2 className="heading-lg text-white mb-6">
                  Tailored Solutions for <span className="text-gradient">Your Industry</span>
                </h2>
                <p className="body-lg text-white/70 mb-8">
                  We understand that every industry has unique challenges. Our team works closely 
                  with you to design and implement solutions that address your specific needs, 
                  regulatory requirements, and business objectives.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Industry-specific compliance expertise',
                    'Customized service levels and SLAs',
                    'Specialized security requirements',
                    'Integration with industry-standard systems',
                    'Scalable solutions for growth'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <img src="/team-meeting.jpg" alt="Industry Solutions" className="rounded-lg shadow-2xl shadow-gold/10" />
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
              Serving Your <span className="text-gradient">Industry</span>?
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Contact us to discuss how we can help address your industry-specific IT challenges.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Discuss Your Needs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;

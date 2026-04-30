import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import SEO from '@/components/SEO';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What services does SARMAK offer?',
         // a: 'SARMAK offers comprehensive IT services including Managed IT Services, AI-Powered IT Management, Cloud Services (AWS, Azure, GCP), Database Administration, DevOps, Middleware Support, Operating System Management, and Microsoft Power Platform solutions. We also provide AI training programs for universities and colleges.'
          a: 'SARMAK offers comprehensive IT services including Managed IT Services, AI-Powered IT Management, Cloud Services (AWS, Azure, GCP), Database Administration, DevOps, Middleware Support and Operating System Management. We also provide AI training programs for universities and colleges.'
        },
        {
          q: 'Where is SARMAK located?',
          a: 'SARMAK is based in India and serves clients across the country. Our team works remotely and can provide on-site support when needed for enterprise clients.'
        },
        {
          q: 'What industries do you serve?',
          a: 'We serve a wide range of industries including Banking & Finance, Healthcare, Manufacturing, Retail, Education, Telecommunications, Government, and Transportation & Logistics.'
        }
      ]
    },
    {
      category: 'Services',
      questions: [
        {
          q: 'What is included in Managed IT Services?',
          a: 'Our Managed IT Services include 24/7 helpdesk support, proactive monitoring, security management, patch management, backup & recovery, and IT operations management. We offer Basic, Standard, and Premium plans to suit different business needs.'
        },
        {
          q: 'Do you provide cloud migration services?',
          a: 'Yes, we provide end-to-end cloud migration services for AWS, Azure, and GCP. Our process includes assessment, planning, migration execution, and post-migration optimization.'
        },
        {
          q: 'What databases do you support?',
          a: 'We support all major database platforms including Oracle, Microsoft SQL Server, MySQL, PostgreSQL, MongoDB, Cassandra, Snowflake, and Couchbase.'
        },
        {
          q: 'Do you offer AI solutions?',
          a: 'Yes, we offer AI-powered IT management solutions including predictive maintenance, intelligent security, automated optimization, and smart analytics. We also provide AI training programs for educational institutions.'
        }
      ]
    },
    {
      category: 'Support',
      questions: [
        {
          q: 'What are your support hours?',
          a: 'We offer 24/7 support for Standard and Premium plan clients. Basic plan clients receive support during business hours (9 AM - 6 PM IST, Monday-Saturday).'
        },
        {
          q: 'How quickly do you respond to issues?',
          a: 'Response times depend on the severity of the issue and your service plan. Critical issues are addressed immediately, while standard issues are typically resolved within 4-24 hours based on SLAs.'
        },
        {
          q: 'Do you provide on-site support?',
          a: 'On-site support is available for Premium plan clients and for specific projects that require it. Remote support is our primary mode of operation for efficiency and cost-effectiveness.'
        }
      ]
    },
    {
      category: 'Pricing',
      questions: [
        {
          q: 'How is pricing determined?',
          a: 'Pricing is customized based on your specific requirements, infrastructure size, service level needed, and project scope. Contact us for a detailed quote tailored to your needs.'
        },
        {
          q: 'Are there any long-term contracts?',
          a: 'We offer flexible engagement models including monthly, quarterly, and annual contracts. We can discuss terms that work best for your business.'
        },
        {
          q: 'Can I upgrade or downgrade my plan?',
          a: 'Yes, you can change your service plan at any time based on your evolving business needs. We recommend discussing changes with your account manager for a smooth transition.'
        }
      ]
    },
    {
      category: 'AI Training',
      questions: [
        {
          q: 'Who can enroll in AI training programs?',
          a: 'Our AI training programs are designed for universities and colleges to offer their students. We work with educational institutions to customize curriculum based on their requirements.'
        },
        {
          q: 'What topics are covered in AI training?',
          a: 'Our programs cover AI Fundamentals, Machine Learning, Deep Learning, Neural Networks, Data Science, and practical applications using industry-standard tools like Python, TensorFlow, and PyTorch.'
        },
        {
          q: 'Do students receive certification?',
          a: 'Yes, students receive industry-recognized certificates upon successful completion of our AI training programs.'
        }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="FAQ - Frequently Asked Questions"
        description="Find answers to frequently asked questions about SARMAK's IT services, support, pricing, and AI training programs."
        keywords="SARMAK FAQ, IT services FAQ, managed IT questions, cloud services FAQ"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">FAQ</span>
            <h1 className="heading-xl text-white mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto">
              Find answers to common questions about our services, support, and more.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-gold" />
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, qIndex) => {
                    const index = catIndex * 10 + qIndex;
                    const isOpen = openIndex === index;
                    
                    return (
                      <div key={qIndex} className="glass-card overflow-hidden">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : index)}
                          className="w-full p-6 flex items-center justify-between text-left"
                        >
                          <span className="text-white font-medium pr-4">{faq.q}</span>
                          <ChevronDown 
                            className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                          />
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="body-md">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/about-bg.jpg" alt="CTA Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/80 to-[#1c1d1b]" />
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-6">
              Still Have <span className="text-gradient">Questions</span>?
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Contact us and we will be happy to help.
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;

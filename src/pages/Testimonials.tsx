import { Star, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "SARMAK transformed our IT infrastructure completely. Their 24/7 support and proactive monitoring have reduced our downtime by 80%. The team's expertise in cloud migration was invaluable.",
      author: "Rajesh Sharma",
      role: "CTO",
      company: "Leading Financial Services Firm",
      rating: 5
    },
    {
      quote: "The AI training program SARMAK conducted for our university was exceptional. Students gained practical skills that have significantly improved their employability in the AI field.",
      author: "Dr. Priya Patel",
      role: "Dean of Technology",
      company: "Premier Engineering College",
      rating: 5
    },
    {
      quote: "Working with SARMAK for our database administration needs has been a game-changer. Their Oracle expertise helped us optimize performance and reduce licensing costs by 30%.",
      author: "Amit Kumar",
      role: "IT Director",
      company: "Manufacturing Enterprise",
      rating: 5
    },
    {
      quote: "The DevOps implementation by SARMAK reduced our deployment time from days to hours. Their CI/CD pipeline expertise has transformed our software delivery process.",
      author: "Sneha Gupta",
      role: "VP of Engineering",
      company: "Technology Startup",
      rating: 5
    },
    {
      quote: "SARMAK's managed services have allowed us to focus on our core business while they handle all IT operations. Their proactive approach prevents issues before they impact us.",
      author: "Vikram Singh",
      role: "CEO",
      company: "Healthcare Provider",
      rating: 5
    },
    {
      quote: "The middleware support from SARMAK has been outstanding. Their WebLogic expertise ensures our critical applications run smoothly with minimal downtime.",
      author: "Anita Reddy",
      role: "Enterprise Architect",
      company: "Telecommunications Company",
      rating: 5
    }
  ];

  const stats = [
    { value: '95%', label: 'Client Retention' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '500+', label: 'Projects Completed' },
    { value: '100+', label: 'Happy Clients' }
  ];

  return (
    <>
      <SEO 
        title="Client Testimonials - What Our Clients Say"
        description="Read what our clients say about SARMAK's IT services. Discover why businesses trust us for managed IT services, cloud solutions, and AI implementations."
        keywords="SARMAK testimonials, client reviews, IT services reviews, customer feedback India"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Testimonials</span>
            <h1 className="heading-xl text-white mb-6">
              What Our <span className="text-gradient">Clients Say</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto">
              Do not just take our word for it. Here is what our clients have to say about 
              working with SARMAK.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Testimonials Grid */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="glass-card p-8 hover-lift">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-gold/30 mb-4" />
                  
                  <p className="body-md mb-6">{testimonial.quote}</p>
                  
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-gold text-sm">{testimonial.role}</div>
                    <div className="text-white/50 text-sm">{testimonial.company}</div>
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
          <img src="/about-bg.jpg" alt="CTA Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/80 to-[#1c1d1b]" />
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-6">
              Join Our <span className="text-gradient">Satisfied Clients</span>
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Experience the SARMAK difference for yourself.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

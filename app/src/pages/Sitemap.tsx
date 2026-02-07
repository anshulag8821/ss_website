import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const Sitemap = () => {
  const sections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'AI Solutions', path: '/services/ai' },
        { name: 'AI Training', path: '/services/ai-training' },
        { name: 'Managed IT Services', path: '/services/managed-it' },
        { name: 'Cloud Services', path: '/services/cloud' },
        { name: 'Database Services', path: '/services/database' },
        { name: 'DevOps Services', path: '/services/devops' },
        { name: 'Operating Systems', path: '/services/operating-systems' },
        { name: 'Middleware Services', path: '/services/middleware' },
        { name: 'Power Platform', path: '/services/power-platform' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'Why Choose Us', path: '/why-choose-us' },
        { name: 'Industries', path: '/industries' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Partners', path: '/partners' },
        { name: 'Careers', path: '/careers' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Resources', path: '/resources' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Service Plans', path: '/service-plans' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms-of-service' },
        { name: 'Sitemap', path: '/sitemap' }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Sitemap - SARMAK Website Structure"
        description="Complete sitemap of SARMAK website. Find all pages including services, company information, resources, and more."
      />

      <section className="relative pt-32 pb-20">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h1 className="heading-lg text-white mb-8">Sitemap</h1>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-semibold text-gold mb-4">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link 
                          to={link.path}
                          className="text-white/70 hover:text-gold transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sitemap;

import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const Blog = () => {
  const posts = [
    {
      id: 'ai-infrastructure-management',
      title: 'The Future of AI in IT Infrastructure Management',
      excerpt: 'Discover how artificial intelligence is transforming the way organizations manage their IT infrastructure, from predictive maintenance to automated incident response.',
      author: 'SARMAK Team',
      date: 'Jan 15, 2025',
      category: 'AI',
      readTime: '5 min read'
    },
    {
      id: 'cloud-migration-2025',
      title: 'Cloud Migration Best Practices for 2025',
      excerpt: 'Learn the essential strategies and best practices for successful cloud migration, minimizing downtime and maximizing ROI.',
      author: 'SARMAK Team',
      date: 'Jan 10, 2025',
      category: 'Cloud',
      readTime: '7 min read'
    },
    {
      id: 'ai-training-universities',
      title: 'Why Universities Should Invest in AI Training Programs',
      excerpt: 'Explore the importance of AI education in preparing students for the future job market and how institutions can implement effective training programs.',
      author: 'SARMAK Team',
      date: 'Jan 5, 2025',
      category: 'Education',
      readTime: '6 min read'
    },
    {
      id: 'devops-trends-2025',
      title: 'DevOps Trends Shaping the Industry',
      excerpt: 'Stay ahead of the curve with these emerging DevOps trends that are revolutionizing software development and deployment.',
      author: 'SARMAK Team',
      date: 'Dec 28, 2024',
      category: 'DevOps',
      readTime: '4 min read'
    },
    {
      id: 'database-optimization',
      title: 'Database Performance Optimization Techniques',
      excerpt: 'Practical tips and techniques for optimizing database performance, reducing costs, and improving application responsiveness.',
      author: 'SARMAK Team',
      date: 'Dec 20, 2024',
      category: 'Database',
      readTime: '8 min read'
    },
    {
      id: 'cybersecurity-ai-age',
      title: 'Cybersecurity in the Age of AI',
      excerpt: 'Understanding how AI is both a threat and a solution in the evolving cybersecurity landscape.',
      author: 'SARMAK Team',
      date: 'Dec 15, 2024',
      category: 'Security',
      readTime: '5 min read'
    }
  ];

  const categories = ['All', 'AI', 'Cloud', 'DevOps', 'Database', 'Security', 'Education'];

  return (
    <>
      <SEO 
        title="Blog - IT Insights & Technology Trends"
        description="Stay updated with the latest IT trends, technology insights, and expert opinions from SARMAK's blog. AI, cloud, DevOps, and more."
        keywords="IT blog, technology insights, AI trends, cloud computing blog, DevOps articles India"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Blog</span>
            <h1 className="heading-xl text-white mb-6">
              Insights & <span className="text-gradient">Trends</span>
            </h1>
            <p className="body-lg text-white/70 max-w-2xl mx-auto">
              Stay updated with the latest in IT, technology trends, and expert insights from our team.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-8 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    index === 0 
                      ? 'bg-gold text-[#1c1d1b]' 
                      : 'bg-white/5 text-white/70 hover:bg-gold/10 hover:text-gold'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article key={index} className="glass-card overflow-hidden hover-lift group">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-gold/10 text-gold text-xs rounded-full">
                        {post.category}
                      </span>
                      <span className="text-white/50 text-xs">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="body-sm mb-6 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-4 text-white/50 text-sm">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors text-sm font-medium group-hover:gap-3"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-24 bg-black/30">
        <div className="section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-md text-white mb-4">
              Subscribe to Our <span className="text-gradient">Newsletter</span>
            </h2>
            <p className="body-md mb-8">
              Get the latest IT insights and trends delivered to your inbox.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:border-gold focus:outline-none transition-colors"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

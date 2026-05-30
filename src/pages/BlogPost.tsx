import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import SEO from '@/components/SEO';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  const blogPosts = {
    'ai-infrastructure-management': {
      title: 'The Future of AI in IT Infrastructure Management',
      content: `
        <h2>Introduction</h2>
        <p>Artificial Intelligence (AI) is revolutionizing the way organizations manage their IT infrastructure. From predictive maintenance to automated incident response, AI technologies are transforming traditional IT operations into intelligent, self-optimizing systems.</p>

        <h2>Predictive Maintenance</h2>
        <p>One of the most significant applications of AI in IT infrastructure management is predictive maintenance. Machine learning algorithms analyze historical data, system logs, and performance metrics to predict potential failures before they occur.</p>

        <p>This proactive approach allows organizations to:</p>
        <ul>
          <li>Reduce downtime by addressing issues before they impact users</li>
          <li>Optimize maintenance schedules</li>
          <li>Extend the lifespan of hardware components</li>
          <li>Reduce operational costs</li>
        </ul>

        <h2>Automated Incident Response</h2>
        <p>AI-powered incident response systems can automatically detect anomalies, classify incidents, and initiate appropriate remediation actions. This significantly reduces mean time to resolution (MTTR) and minimizes the impact of incidents on business operations.</p>

        <h2>Resource Optimization</h2>
        <p>AI algorithms continuously monitor resource utilization patterns and automatically adjust capacity to match demand. This ensures optimal performance while minimizing costs.</p>

        <h2>The Road Ahead</h2>
        <p>As AI technologies continue to evolve, we can expect even more sophisticated applications in IT infrastructure management. Organizations that embrace AI-driven approaches will be better positioned to deliver reliable, efficient, and cost-effective IT services.</p>
      `,
      author: 'SARMAK Team',
      date: 'Jan 15, 2025',
      category: 'AI',
      readTime: '5 min read',
      tags: ['AI', 'IT Infrastructure', 'Predictive Maintenance', 'Automation']
    },
    'cloud-migration-2025': {
      title: 'Cloud Migration Best Practices for 2025',
      content: `
        <h2>Planning Your Cloud Migration</h2>
        <p>Successful cloud migration requires careful planning and execution. In 2025, organizations are adopting more sophisticated approaches to ensure seamless transitions.</p>

        <h2>Assessment and Strategy</h2>
        <p>Begin with a comprehensive assessment of your current infrastructure, applications, and data. Identify which workloads are suitable for migration and determine the most appropriate cloud services.</p>

        <h2>Security Considerations</h2>
        <p>Security should be integrated into every phase of the migration process. Implement robust identity management, encryption, and compliance measures.</p>

        <h2>Performance Optimization</h2>
        <p>Optimize your applications for cloud environments. This may involve refactoring monolithic applications into microservices or containerizing workloads.</p>

        <h2>Cost Management</h2>
        <p>Implement cost monitoring and optimization strategies from day one. Use cloud-native tools to track spending and identify opportunities for cost reduction.</p>
      `,
      author: 'SARMAK Team',
      date: 'Jan 10, 2025',
      category: 'Cloud',
      readTime: '7 min read',
      tags: ['Cloud Migration', 'AWS', 'Azure', 'GCP', 'Best Practices']
    },
    'ai-training-universities': {
      title: 'Why Universities Should Invest in AI Training Programs',
      content: `
        <h2>The AI Skills Gap</h2>
        <p>As artificial intelligence continues to transform industries, there's a growing demand for AI-skilled professionals. Universities play a crucial role in bridging this skills gap.</p>

        <h2>Curriculum Development</h2>
        <p>Modern AI education should cover machine learning, deep learning, natural language processing, computer vision, and ethical AI considerations.</p>

        <h2>Practical Experience</h2>
        <p>Students need hands-on experience with AI tools and platforms. Universities should provide access to cloud-based AI development environments and real-world projects.</p>

        <h2>Industry Partnerships</h2>
        <p>Collaborations with technology companies can provide students with internships, mentorship, and exposure to cutting-edge AI applications.</p>

        <h2>Future-Proofing Graduates</h2>
        <p>AI literacy is becoming essential across all disciplines. Universities should integrate AI concepts into various curricula, not just computer science programs.</p>
      `,
      author: 'SARMAK Team',
      date: 'Jan 5, 2025',
      category: 'Education',
      readTime: '6 min read',
      tags: ['AI Education', 'Universities', 'Skills Development', 'Training']
    },
    'devops-trends-2025': {
      title: 'DevOps Trends Shaping the Industry',
      content: `
        <h2>GitOps and Infrastructure as Code</h2>
        <p>GitOps continues to gain traction as organizations adopt declarative infrastructure management. This approach treats infrastructure configurations as code stored in Git repositories.</p>

        <h2>Platform Engineering</h2>
        <p>Platform engineering teams are building internal developer platforms that provide self-service capabilities, reducing cognitive load on development teams.</p>

        <h2>Observability Evolution</h2>
        <p>Modern observability goes beyond traditional monitoring to include distributed tracing, log analytics, and AI-powered anomaly detection.</p>

        <h2>Security Integration</h2>
        <p>DevSecOps practices are becoming standard, with security integrated throughout the development lifecycle rather than treated as an afterthought.</p>

        <h2>AI in DevOps</h2>
        <p>Artificial intelligence is being applied to various DevOps processes, from automated testing to predictive incident management.</p>
      `,
      author: 'SARMAK Team',
      date: 'Dec 28, 2024',
      category: 'DevOps',
      readTime: '4 min read',
      tags: ['DevOps', 'GitOps', 'Platform Engineering', 'Observability']
    },
    'database-optimization': {
      title: 'Database Performance Optimization Techniques',
      content: `
        <h2>Index Optimization</h2>
        <p>Proper indexing is crucial for database performance. Analyze query patterns and create appropriate indexes to speed up data retrieval operations.</p>

        <h2>Query Optimization</h2>
        <p>Write efficient SQL queries and use query execution plans to identify performance bottlenecks. Avoid unnecessary joins and complex subqueries when possible.</p>

        <h2>Connection Pooling</h2>
        <p>Implement connection pooling to reduce the overhead of establishing database connections. This is especially important for high-traffic applications.</p>

        <h2>Caching Strategies</h2>
        <p>Use caching layers to store frequently accessed data in memory. Consider both application-level caching and database query result caching.</p>

        <h2>Partitioning and Sharding</h2>
        <p>For large datasets, consider partitioning tables or implementing sharding strategies to distribute data across multiple servers.</p>

        <h2>Monitoring and Maintenance</h2>
        <p>Regularly monitor database performance metrics and perform maintenance tasks like statistics updates and index rebuilds.</p>
      `,
      author: 'SARMAK Team',
      date: 'Dec 20, 2024',
      category: 'Database',
      readTime: '8 min read',
      tags: ['Database', 'Performance', 'Optimization', 'SQL', 'Indexing']
    },
    'cybersecurity-ai-age': {
      title: 'Cybersecurity in the Age of AI',
      content: `
        <h2>AI as a Threat</h2>
        <p>While AI offers powerful capabilities for defense, it also presents new attack vectors. Adversaries can use AI for sophisticated phishing, automated attacks, and deepfake-based social engineering.</p>

        <h2>AI-Powered Defense</h2>
        <p>AI enhances cybersecurity through automated threat detection, behavioral analysis, and rapid incident response. Machine learning algorithms can identify patterns that human analysts might miss.</p>

        <h2>Zero Trust Architecture</h2>
        <p>Zero trust principles become even more critical in AI-driven environments. Every access request must be verified, regardless of location or previous authentication.</p>

        <h2>Ethical Considerations</h2>
        <p>As AI becomes integral to cybersecurity, organizations must address ethical concerns around privacy, bias in AI decision-making, and the potential for AI systems to be manipulated.</p>

        <h2>Future Challenges</h2>
        <p>The cybersecurity landscape will continue to evolve as AI technologies advance. Organizations must stay vigilant and adapt their strategies to address emerging threats and opportunities.</p>
      `,
      author: 'SARMAK Team',
      date: 'Dec 15, 2024',
      category: 'Security',
      readTime: '5 min read',
      tags: ['Cybersecurity', 'AI', 'Zero Trust', 'Threat Detection']
    }
  };

  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-[#1c1d1b] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-gold hover:text-gold/80 transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} | SARMAK Blog`}
        description={post.content.split('</p>')[0].replace(/<[^>]*>/g, '')}
        keywords={`${post.tags.join(', ')}, ${post.category}, SARMAK blog`}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full">
                {post.category}
              </span>
              <span className="text-white/50 text-sm">{post.readTime}</span>
            </div>

            <h1 className="heading-xl text-white mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-white/70">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative py-16">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-invert max-w-none">
              <div
                className="text-white/80 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/5 text-white/60 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <button className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors">
                    <Bookmark className="w-4 h-4" />
                    Save
                  </button>
                </div>

                <Link
                  to="/blog"
                  className="text-gold hover:text-gold/80 transition-colors font-medium"
                >
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="relative py-16 bg-black/30">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="heading-lg text-white mb-8 text-center">
              Related <span className="text-gradient">Articles</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(blogPosts)
                .filter(([postId]) => postId !== id)
                .slice(0, 3)
                .map(([postId, relatedPost]) => (
                  <Link
                    key={postId}
                    to={`/blog/${postId}`}
                    className="glass-card p-6 hover-lift group"
                  >
                    <span className="px-3 py-1 bg-gold/10 text-gold text-xs rounded-full mb-3 inline-block">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-white/60 text-sm line-clamp-2 mb-4">
                      {relatedPost.content.split('</p>')[0].replace(/<[^>]*>/g, '')}
                    </p>
                    <div className="flex items-center gap-4 text-white/50 text-xs">
                      <span>{relatedPost.author}</span>
                      <span>{relatedPost.date}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
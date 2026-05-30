import { Database, Server, Shield, Zap, ArrowRight, CheckCircle, TrendingUp, RefreshCw, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { generateServiceSchema } from '@/components/SEO';

const DatabaseServices = () => {
  const databases = [
    { name: 'Oracle', type: 'Enterprise RDBMS', icon: Database },
    { name: 'Microsoft SQL Server', type: 'Enterprise RDBMS', icon: Server },
    { name: 'MySQL', type: 'Open Source RDBMS', icon: Database },
    { name: 'PostgreSQL', type: 'Advanced Open Source', icon: Database },
    { name: 'MongoDB', type: 'NoSQL Document', icon: Database },
    { name: 'Cassandra', type: 'NoSQL Distributed', icon: Database },
    { name: 'Snowflake', type: 'Cloud Data Warehouse', icon: Database },
    { name: 'Couchbase', type: 'NoSQL Document', icon: Database }
  ];

  const services = [
    {
      icon: Server,
      title: 'Database Administration',
      description: 'Complete DBA services including installation, configuration, and ongoing management.'
    },
    {
      icon: RefreshCw,
      title: 'Migration & Replication',
      description: 'Seamless cross-platform database migrations and replication setup.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Database security, access control, and compliance management.'
    },
    {
      icon: Zap,
      title: 'Performance Tuning',
      description: 'Query optimization, indexing, and performance enhancement.'
    },
    {
      icon: TrendingUp,
      title: 'Monitoring & Alerts',
      description: '24/7 database monitoring with proactive issue detection.'
    },
    {
      icon: Lock,
      title: 'Backup & Recovery',
      description: 'Comprehensive backup strategies and disaster recovery planning.'
    }
  ];

  const benefits = [
    { value: '40%', label: 'Performance Gain' },
    { value: '30%', label: 'Cost Savings' },
    { value: '99.9%', label: 'Availability' },
    { value: '24/7', label: 'Support' }
  ];

  return (
    <>
      <SEO 
        title="Database Services - Oracle, SQL, MySQL, MongoDB Administration"
        description="SARMAK provides expert database services including administration, migration, performance tuning, and support for Oracle, SQL Server, MySQL, PostgreSQL, MongoDB, and more."
        keywords="database services, Oracle DBA, SQL Server administration, MySQL support, MongoDB, database migration India"
        schema={generateServiceSchema(
          'Database Services',
          'Expert database administration, migration, performance tuning, and support services for all major database platforms.',
          'https://sarmak.in/services/database'
        )}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/database-services.jpg" alt="Database Services" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1c1d1b] via-[#1c1d1b]/90 to-[#1c1d1b]/70" />
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-8">
              <Database className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">Data Management</span>
            </div>
            
            <h1 className="heading-xl text-white mb-6">
              Database <span className="text-gradient">Services</span>
            </h1>
            
            <p className="body-lg text-white/70 mb-8 max-w-2xl">
              Expert database administration and support for all major platforms. From Oracle 
              to MongoDB, our certified DBAs ensure your data is secure, available, and performing 
              at its best.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2 group">
                Database Consultation
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

      {/* Supported Databases */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Platforms</span>
              <h2 className="heading-lg text-white mb-6">
                Databases We <span className="text-gradient">Support</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {databases.map((db, index) => (
                <div key={index} className="glass-card p-6 text-center hover-lift group">
                  <db.icon className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold mb-1">{db.name}</h3>
                  <p className="text-white/50 text-sm">{db.type}</p>
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
                Comprehensive <span className="text-gradient">DBA Services</span>
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

      {/* Benefits */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hex-pattern opacity-20" />
        
        <div className="relative z-10 section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img src="/database-services.jpg" alt="Database Services" className="rounded-lg shadow-2xl shadow-gold/10" />
              </div>
              
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Benefits</span>
                <h2 className="heading-lg text-white mb-6">
                  Why <span className="text-gradient">Expert DBA</span> Services?
                </h2>
                <p className="body-lg text-white/70 mb-8">
                  Professional database administration ensures your critical data assets are 
                  always available, secure, and performing optimally.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Optimum cost and maximum performance',
                    'License optimization for huge cost savings',
                    'Cross-platform migration expertise',
                    'Proactive monitoring and maintenance',
                    'Disaster recovery and business continuity',
                    'Security hardening and compliance'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
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
              Optimize Your <span className="text-gradient">Database</span> Performance
            </h2>
            <p className="body-lg text-white/70 mb-8">
              Let our certified DBAs help you get the most out of your database infrastructure.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Talk to a DBA Expert
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default DatabaseServices;

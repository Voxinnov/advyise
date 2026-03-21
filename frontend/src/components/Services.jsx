import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Search, Target, Youtube, Mail, MonitorSmartphone } from 'lucide-react';

const services = [
  {
    title: 'Social Media Marketing',
    icon: <Share2 size={32} color="var(--accent-blue)" />,
    desc: 'Strategic content planning, brand positioning & engagement-focused growth.',
    features: ['Account Management', 'Content Creation', 'Paid Ads', 'Strategy Planning']
  },
  {
    title: 'Search Engine Optimization',
    icon: <Search size={32} color="var(--accent-purple)" />,
    desc: 'On-page & technical SEO for local & global search visibility.',
    features: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'SEO Audits']
  },
  {
    title: 'Paid Advertising (Meta & Google)',
    icon: <Target size={32} color="var(--accent-blue)" />,
    desc: 'High-intent lead campaigns with conversion-focused funnels.',
    features: ['Search & Display Ads', 'Lead Generation', 'Retargeting', 'Performance Campaigns']
  },
  {
    title: 'YouTube Marketing',
    icon: <Youtube size={32} color="var(--accent-purple)" />,
    desc: 'Channel optimization and brand authority through video discoverability.',
    features: ['Channel Optimization', 'Video SEO', 'YouTube Ads', 'Audience Growth']
  },
  {
    title: 'Email Marketing',
    icon: <Mail size={32} color="var(--accent-blue)" />,
    desc: 'Lead nurturing sequences and customer retention campaigns.',
    features: ['Campaign Setup', 'Newsletter Marketing', 'Automation', 'List Management']
  },
  {
    title: 'Web Development',
    icon: <MonitorSmartphone size={32} color="var(--accent-purple)" />,
    desc: 'Business and E-commerce websites designed for high conversions.',
    features: ['Business Websites', 'E-commerce', 'Landing Pages', 'Optimization']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title">Our <span className="gradient-text">Core Services</span></h2>
          <p className="section-subtitle">
            We help businesses get discovered online, attract the right audience, and convert attention into enquiries and sales.
          </p>
        </div>

        <motion.div 
          style={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants} style={styles.card} className="glass-panel service-card">
              <div style={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardDesc}>{service.desc}</p>
              
              <ul style={styles.featureList}>
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} style={styles.featureItem}>
                    <div style={styles.dot}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .service-card {
          transition: var(--transition);
        }
        .service-card:hover {
          transform: translateY(-10px);
          border-color: rgba(139, 92, 246, 0.3);
          box-shadow: 0 20px 40px -10px rgba(139, 92, 246, 0.15);
        }
      `}</style>
    </section>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },
  card: {
    padding: '2.5rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  iconWrapper: {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    background: 'rgba(255,255,255,0.03)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  cardDesc: {
    color: 'var(--text-secondary)',
    marginBottom: '2rem',
    flexGrow: 1,
  },
  featureList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'var(--accent-gradient)',
    marginRight: '12px',
  }
};

export default Services;

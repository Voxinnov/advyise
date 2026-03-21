import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Understand', desc: 'Deep dive into your business, audience, and market position.' },
  { num: '02', title: 'Choose', desc: 'Select the right channels that align with your unique growth goals.' },
  { num: '03', title: 'Build', desc: 'Create a conversion-focused strategy with precise messaging.' },
  { num: '04', title: 'Execute', desc: 'Implement the strategy with data-driven precision and testing.' },
  { num: '05', title: 'Scale', desc: 'Optimize performance for maximum ROI and long-term scale.' }
];

const Approach = () => {
  return (
    <section id="approach" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <h2 className="section-title">The Advyise <span className="gradient-text">Growth Framework</span></h2>
          <p className="section-subtitle">
            A structured, 5-step approach to building a complete digital ecosystem where every channel has a role.
          </p>
        </div>

        <div style={styles.timeline}>
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              style={styles.stepContainer}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.15 }}
            >
              <div className="glass-panel" style={styles.numberWrapper}>
                <span className="gradient-text" style={styles.number}>{step.num}</span>
              </div>
              <div style={styles.stepContent}>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDesc}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .timeline-layout {
            flex-direction: column !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  timeline: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '1.5rem',
    className: 'timeline-layout', 
  },
  stepContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    position: 'relative',
  },
  numberWrapper: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    position: 'relative',
    zIndex: 2,
    border: '2px solid rgba(139, 92, 246, 0.3)',
  },
  number: {
    fontSize: '2rem',
    fontWeight: '800',
    fontFamily: 'Outfit',
  },
  stepTitle: {
    fontSize: '1.25rem',
    marginBottom: '0.75rem',
  },
  stepDesc: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
  }
};

export default Approach;

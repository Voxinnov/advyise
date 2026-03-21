import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  'Strategy-first mindset',
  'Performance & ROI focused',
  'Clear communication',
  'Transparent reporting',
  'Long-term partnership approach'
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section-padding">
      <div className="container" style={styles.container}>
        <motion.div 
          style={styles.imageCol}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass-panel" style={styles.imageOverlay}>
            <div style={styles.statsBox}>
              <h3 style={styles.statsNumber} className="gradient-text">100%</h3>
              <p style={styles.statsLabel}>Focus on Measurable Growth</p>
            </div>
            <div style={styles.statsBox2}>
              <h3 style={styles.statsNumber}>0</h3>
              <p style={styles.statsLabel}>Vanity Metrics</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          style={styles.contentCol}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Why Choose <span className="gradient-text">Advyise</span></h2>
          <p style={styles.desc}>
            Digital marketing works best when channels support each other — not when they operate in isolation.
            We design strategies where every channel has a role.
          </p>

          <ul style={styles.list}>
            {reasons.map((reason, idx) => (
              <li key={idx} style={styles.listItem}>
                <CheckCircle2 color="var(--accent-blue)" style={{ minWidth: '24px' }} />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-us-container {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '4rem',
    className: 'why-us-container'
  },
  imageCol: {
    flex: 1,
    position: 'relative',
    height: '500px',
    borderRadius: '24px',
    background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2rem',
  },
  statsBox: {
    background: 'rgba(0,0,0,0.5)',
    padding: '2rem',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.1)',
    textAlign: 'center',
    width: '60%',
  },
  statsBox2: {
    background: 'rgba(255,255,255,0.05)',
    padding: '1.5rem',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.05)',
    textAlign: 'center',
    width: '60%',
    backdropFilter: 'blur(10px)',
  },
  statsNumber: {
    fontSize: '3rem',
    fontFamily: 'Outfit',
    marginBottom: '0.25rem',
  },
  statsLabel: {
    color: 'var(--text-secondary)',
    fontWeight: '500',
  },
  contentCol: {
    flex: 1,
  },
  desc: {
    fontSize: '1.125rem',
    color: 'var(--text-secondary)',
    marginBottom: '3rem',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '1.125rem',
    fontWeight: '500',
  }
};

export default WhyUs;

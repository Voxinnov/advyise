import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={styles.section}>
      {/* Background glow effects */}
      <div style={styles.glowBlue}></div>
      <div style={styles.glowPurple}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={styles.content}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span style={styles.badge} className="glass-panel">
              Digital Growth & Performance Marketing Agency
            </span>
          </motion.div>
          
          <motion.h1 
            style={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We don’t chase trends.<br />
            We build <span className="gradient-text">systems that convert.</span>
          </motion.h1>
          
          <motion.p 
            style={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Advyise is a results-driven digital marketing agency helping businesses grow
            visibility, leads, and revenue through structured digital strategies.
          </motion.p>
          
          <motion.div 
            style={styles.buttonGroup}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#services" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Explore Our Services <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
            <a href="#contact" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              Book a Strategy Call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '80px',
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  badge: {
    display: 'inline-block',
    padding: '0.5rem 1.25rem',
    borderRadius: '99px',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    marginBottom: '2rem',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 'clamp(3rem, 5vw, 5rem)',
    marginBottom: '1.5rem',
  },
  subtitle: {
    fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
    color: 'var(--text-secondary)',
    marginBottom: '3rem',
    maxWidth: '700px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  glowBlue: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    width: '40vw',
    height: '40vw',
    background: 'rgba(59, 130, 246, 0.2)',
    filter: 'blur(100px)',
    borderRadius: '50%',
    zIndex: 0,
  },
  glowPurple: {
    position: 'absolute',
    bottom: '10%',
    right: '10%',
    width: '30vw',
    height: '30vw',
    background: 'rgba(139, 92, 246, 0.2)',
    filter: 'blur(100px)',
    borderRadius: '50%',
    zIndex: 0,
  }
};

export default Hero;

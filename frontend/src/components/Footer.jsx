import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer style={styles.footer} className="glass-panel">
      <div className="container" style={styles.container}>
        <div style={styles.brand}>
          <img src={logo} alt="ADVYISE Logo" style={{ height: '40px', objectFit: 'contain', margin: 0 }} />
          <p style={styles.tagline}>Digital Growth Partner</p>
        </div>
        
        <div style={styles.links}>
          <a href="#services" style={styles.link}>Services</a>
          <a href="#approach" style={styles.link}>Approach</a>
          <a href="#why-us" style={styles.link}>Why Us</a>
        </div>
        
        <div style={styles.socials}>
          <p style={styles.copyright}>&copy; {new Date().getFullYear()} Advyise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    padding: '3rem 0',
    marginTop: '4rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  tagline: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    fontWeight: 500,
  },
  links: {
    display: 'flex',
    gap: '2rem',
  },
  link: {
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    transition: 'var(--transition)',
    fontWeight: 500,
  },
  socials: {
    textAlign: 'right',
  },
  copyright: {
    color: 'var(--text-secondary)',
    fontSize: '0.85rem',
  }
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`} style={styles.nav}>
      <div className="container" style={styles.container}>
        <div className="logo" style={styles.logo}>
          <span className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: '800' }}>ADVYISE</span>
        </div>
        
        <div className="desktop-menu" style={styles.desktopMenu}>
          <a href="#services" style={styles.link}>Services</a>
          <a href="#approach" style={styles.link}>Approach</a>
          <a href="#why-us" style={styles.link}>Why Us</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', marginLeft: '1rem' }}>
            Let's Talk
          </a>
        </div>

        <button className="mobile-toggle" style={styles.mobileToggle} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className="mobile-menu glass-panel" style={styles.mobileMenu}>
          <a href="#services" style={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#approach" style={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Approach</a>
          <a href="#why-us" style={styles.mobileLink} onClick={() => setIsMobileMenuOpen(false)}>Why Us</a>
          <a href="#contact" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }} onClick={() => setIsMobileMenuOpen(false)}>
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: 'var(--transition)',
    padding: '1rem 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  desktopMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  link: {
    fontWeight: '500',
    color: 'var(--text-secondary)',
    transition: 'var(--transition)',
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: 'var(--text-primary)',
    cursor: 'pointer',
  },
  mobileMenu: {
    position: 'absolute',
    top: '100%',
    left: '1rem',
    right: '1rem',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    borderRadius: '16px',
    marginTop: '0.5rem',
  },
  mobileLink: {
    fontSize: '1.125rem',
    fontWeight: '500',
    color: 'var(--text-primary)',
    padding: '0.5rem 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  }
};

export default Navbar;

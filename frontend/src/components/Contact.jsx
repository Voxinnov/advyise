import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully! We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error connecting to the server. Please try again later.');
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div 
          className="glass-panel" 
          style={{ padding: '4rem 3rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 className="section-title">Let's Grow <span className="gradient-text">Your Business</span></h2>
            <p className="section-subtitle" style={{ marginBottom: 0 }}>
              If you’re looking for structured, result-oriented digital marketing — let’s talk.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={styles.form}>
            <div className="form-row" style={styles.row}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Full Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} style={styles.input} />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} style={styles.input} />
              </div>
            </div>
            
            <div style={styles.inputGroup}>
              <label style={styles.label}>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={styles.input} />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>How can we help you?</label>
              <textarea name="message" required rows="4" value={formData.message} onChange={handleChange} style={styles.textarea}></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '1rem' }}>
              Submit Enquiry
            </button>

            {status && (
              <p style={{ marginTop: '1.5rem', textAlign: 'center', color: status.includes('success') ? '#10b981' : '#ef4444' }}>
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-row {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  row: {
    display: 'flex',
    gap: '1.5rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    flex: 1,
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: '500',
    color: 'var(--text-secondary)',
  },
  input: {
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    padding: '0.875rem 1rem',
    color: 'white',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none',
    transition: 'var(--transition)',
  },
  textarea: {
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    padding: '0.875rem 1rem',
    color: 'white',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none',
    resize: 'vertical',
    transition: 'var(--transition)',
  }
};

export default Contact;

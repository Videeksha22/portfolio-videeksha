import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${formData.name}! This is a demo form.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-container-modern">
          <motion.div
            className="contact-left-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="contact-header-large left-align">
              <h2 className="huge-text">Let's work<br /><span> together.</span></h2>
              <p className="contact-subtitle">Currently seeking opportunities in Full-Stack Development and AI/ML. Let's collaborate on something extraordinary.</p>
            </div>

            <div className="contact-info-blocks">
              <div className="info-block glass">
                <div className="block-icon"><FaEnvelope /></div>
                <div className="info-content">
                  <h4>Email</h4>
                  <a href="mailto:videekshareddy@gmail.com">videekshareddy@gmail.com</a>
                </div>
              </div>

              <div className="info-block glass">
                <div className="block-icon"><FaPhoneAlt /></div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <p>+91 90144429885</p>
                </div>
              </div>

              <div className="social-inline-links">
                <a href="https://www.linkedin.com/in/dvideeksha" target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
                <a href="https://github.com/videeksha22" target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-modern glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="modern-form">
              <div className="form-row">
                <div className="form-group-modern">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group-modern">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="form-group-modern">
                <label>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Hello! I'm interested in..."
                ></textarea>
              </div>
              <button type="submit" className="btn-modern btn-full-width">
                <span>Send Message</span> <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

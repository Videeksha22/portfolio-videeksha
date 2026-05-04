import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content centered-footer">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Dannaram Videeksha. All rights reserved.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top" aria-label="Back to Top">
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

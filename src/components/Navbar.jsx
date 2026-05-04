import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check localStorage for theme
    const savedTheme = localStorage.getItem('portfolio_theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    // Save to localStorage when theme changes
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
        <div className="navbar-container container">
          <Link to="hero" smooth={true} duration={500} className="navbar-logo">
            &lt;Videeksha<span>/</span>&gt;
          </Link>
          <div className="navbar-right">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="about" smooth={true} duration={500} offset={-70} className="nav-links">About</Link>
              </li>
              <li className="nav-item">
                <Link to="skills" smooth={true} duration={500} offset={-70} className="nav-links">Skills</Link>
              </li>
              <li className="nav-item">
                <Link to="projects" smooth={true} duration={500} offset={-70} className="nav-links">Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="awards" smooth={true} duration={500} offset={-70} className="nav-links">Achievements</Link>
              </li>
              <li className="nav-item">
                <Link to="contact" smooth={true} duration={500} offset={-70} className="nav-links">Contact</Link>
              </li>
            </ul>
            <div className="navbar-actions">
              <button onClick={toggleTheme} className="theme-toggle-btn desktop-theme-toggle" aria-label="Toggle Theme">
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
              <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open Mobile Menu">
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mobile-menu-header container">
              <button className="mobile-close-btn" onClick={closeMobileMenu} aria-label="Close Mobile Menu">
                <FaTimes />
              </button>
              <button onClick={toggleTheme} className="theme-toggle-btn mobile-theme-toggle" aria-label="Toggle Theme">
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </div>
            <div className="mobile-nav-links-container">
              <Link to="hero" onClick={closeMobileMenu} smooth={true} duration={500} className="mobile-nav-link">HOME</Link>
              <Link to="about" onClick={closeMobileMenu} smooth={true} duration={500} offset={-70} className="mobile-nav-link">ABOUT</Link>
              <Link to="skills" onClick={closeMobileMenu} smooth={true} duration={500} offset={-70} className="mobile-nav-link">SKILLS</Link>
              <Link to="projects" onClick={closeMobileMenu} smooth={true} duration={500} offset={-70} className="mobile-nav-link">PROJECTS</Link>
              <Link to="awards" onClick={closeMobileMenu} smooth={true} duration={500} offset={-70} className="mobile-nav-link">ACHIEVEMENTS</Link>
              <Link to="contact" onClick={closeMobileMenu} smooth={true} duration={500} offset={-70} className="mobile-nav-link">CONTACT</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

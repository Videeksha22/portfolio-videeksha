import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const roles = ["CSE Student", "Full-Stack Developer", "ML Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content-wrapper">
          <motion.div
            className="hero-text-side"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="greeting">Hi, I'm</p>
            <h1 className="name">Dannaram Videeksha.</h1>
            <div className="role-container">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentRole}
                  className="role-text tagline"
                  variants={{
                    hidden: { opacity: 1 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.04 }
                    },
                    exit: {
                      opacity: 0,
                      transition: { duration: 0.3 }
                    }
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{ margin: 0, display: 'flex', flexWrap: 'wrap' }}
                >
                  {roles[currentRole].split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} style={{ display: "inline-block", marginRight: "0.3em" }}>
                      {word.split("").map((char, charIndex) => (
                        <motion.span
                          key={charIndex}
                          variants={{
                            hidden: { opacity: 0, x: -5 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                          }}
                          style={{ display: "inline-block" }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  ))}
                </motion.h2>
              </AnimatePresence>
            </div>
            <p className="bio-short">
              Passionate about building scalable web applications and integrating intelligent AI solutions. Let's create something amazing.
            </p>
            <div className="hero-cta">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FaDownload style={{ marginRight: '8px' }} /> Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-image-side"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-animation-container">
              <motion.div
                className="shape shape-1"
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 45, 0],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="shape shape-2"
                animate={{
                  y: [0, 40, 0],
                  x: [0, -20, 0],
                  rotate: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="shape shape-3"
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.2, 0.6, 0.2]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="hero-code-snippet">
                <div className="mac-header">
                  <span className="mac-dot red"></span>
                  <span className="mac-dot yellow"></span>
                  <span className="mac-dot green"></span>
                </div>
                <code>
                  <span className="code-keyword">const</span> <span className="code-var">coder</span> = {'{'} <br />
                  &nbsp;&nbsp;<span className="code-prop">name</span>: <span className="code-string">'Videeksha'</span>, <br />
                  &nbsp;&nbsp;<span className="code-prop">skills</span>: [<span className="code-string">'React'</span>, <span className="code-string">'Python'</span>, <span className="code-string">'Express'</span>, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'MySql'</span>, <span className="code-string">'MongoDB'</span>, <span className="code-string">'Docker'</span>], <br />
                  &nbsp;&nbsp;<span className="code-prop">hardWorker</span>: <span className="code-bool">true</span>, <br />
                  &nbsp;&nbsp;<span className="code-prop">quickLearner</span>: <span className="code-bool">true</span>, <br />
                  &nbsp;&nbsp;<span className="code-prop">problemSolver</span>: <span className="code-bool">true</span>, <br />
                  &nbsp;&nbsp;<span className="code-func">hireable</span>: <span className="code-keyword">function</span>() {'{'} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-keyword">return</span> ( <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-this">this</span>.<span className="code-prop">hardWorker</span> <span className="code-operator">&&</span> <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-this">this</span>.<span className="code-prop">problemSolver</span> <span className="code-operator">&&</span> <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-this">this</span>.<span className="code-prop">skills</span>.length {'>='} <span className="code-bool">5</span> <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;); <br />
                  &nbsp;&nbsp;{'}'}; <br />
                  {'}'};
                </code>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

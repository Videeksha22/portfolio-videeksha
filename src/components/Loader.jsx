import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const textToType = "PORTFOLIO.....";

const Loader = () => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(textToType.substring(0, index + 1));
      index++;
      if (index === textToType.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{
        y: '-100vh',
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      <div className="loader-glow"></div>

      <div className="loader-content">
        <motion.div
          className="terminal-loader"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="brackets">{'{'}</span>
          <span className="typed-text">{typedText}</span>
          <span className="cursor">|</span>
          <span className="brackets">{'}'}</span>
        </motion.div>

        {/* Centered progress bar directly below the text */}
        <motion.div
          className="progress-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="progress-bar"></div>
        </motion.div>
      </div>

    </motion.div>
  );
};

export default Loader;

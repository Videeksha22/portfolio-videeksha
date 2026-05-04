import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          <span>01.</span> About Me
        </h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I am an aspiring Computer Science professional with a strong interest in full-stack development, machine learning, and cloud technologies. I am passionate about building scalable and efficient solutions while continuously exploring emerging technologies. I actively seek opportunities to work on real-world projects and enhance my problem-solving and analytical skills. Through involvement in developer communities such as GDG on Campus and Open Source Contributions, I aim to collaborate, learn, and contribute meaningfully. My goal is to grow into a skilled professional capable of delivering impactful, research-driven solutions in the tech industry.
            </p>


          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-container">
              <img src="/Vid_Image.jpeg" alt="Dannaram Videeksha" className="about-hero-image" onError={(e) => { e.target.onerror = null; e.target.src = '/avatar.png'; }} />
              <div className="image-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

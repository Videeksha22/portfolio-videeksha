import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaIdBadge } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title text-left">
          <span><FaGraduationCap /></span> Education
        </h2>

        <motion.div
          className="education-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Card 1: B.Tech */}
          <div className="education-card glass">
            <div className="education-icon-box">
              <FaIdBadge />
            </div>
            <div className="education-content">
              <span className="education-year">2023 - 2027</span>
              <h4 className="education-title">B.TECH IN CSE</h4>
              <span className="education-school">B V Raju Institute of Technology</span>
              <span className="education-score">CGPA: 8.81</span>
            </div>
          </div>

          {/* Card 2: Intermediate */}
          <div className="education-card glass">
            <div className="education-icon-box">
              <FaIdBadge />
            </div>
            <div className="education-content">
              <span className="education-year">2021 - 2023</span>
              <h4 className="education-title">INTERMEDIATE - MPC</h4>
              <span className="education-school">Shree Akshaya Junior College</span>
              <span className="education-score">Score: 97.2%</span>
            </div>
          </div>

          {/* Card 3: SSC */}
          <div className="education-card glass">
            <div className="education-icon-box">
              <FaIdBadge />
            </div>
            <div className="education-content">
              <span className="education-year">2021</span>
              <h4 className="education-title">MATRICULATION - SSC</h4>
              <span className="education-school">St. Peter's High School</span>
              <span className="education-score">Score: 100%</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Education;

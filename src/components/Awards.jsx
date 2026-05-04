import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaBookOpen, FaHackerrank, FaTrophy, FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';
import './Awards.css';

const Awards = () => {
  return (
    <section id="awards" className="awards-section">
      <div className="container">

        <motion.div
          className="journey-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-left">
            <span><FaBriefcase /></span> Experience
          </h2>
          <div className="list-container">
            <div className="list-item glass-hover">
              <div className="item-header">
                <h4>PR Co-Lead</h4>
                <span className="item-date">Nov 2025 - Present</span>
              </div>
              <h5 className="item-subtitle">GDG on Campus • BVRIT Narsapur</h5>
              <p>Organizing workshops, hackathons, and technical sessions on web, cloud, and AI. Led study jams and mentored student projects to build a strong peer learning community.</p>
            </div>
          </div>
        </motion.div>



        <motion.div
          className="journey-block mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="section-title text-left">
            <span><FaBookOpen /></span> Paper Publications
          </h2>
          <div className="list-container">
            <div className="list-item glass-hover">
              <h4>IEEE Xplore Research Paper <a href="https://ieeexplore.ieee.org/document/11089883" target="_blank" rel="noopener noreferrer" className="external-link"><FaExternalLinkAlt /></a></h4>
              <p>"YOLO-Powered Deep Learning Framework for Smart Drone Surveillance in Emergency Rescue Operation", presented at the 6th International Conference on Inventive Research in Computing Applications (ICIRCA 2025).</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="journey-block mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="section-title text-left">
            <span><FaTrophy /></span> Hackathons & Awards
          </h2>
          <div className="list-container">
            <div className="list-item glass-hover">
              <div className="item-header">
                <h4>R&D Showcase 2025 - First Prize</h4>
              </div>
              <p>Awarded First Prize for developing 'Smart Drone Surveillance' using YOLOv8-based computer vision on autonomous drones for real-time survivor detection and disaster response.</p>
            </div>

            <div className="list-item glass-hover">
              <div className="item-header">
                <h4>4hr Hackathon @ BVRIT</h4>
              </div>
              <p>Built an MVP of the BVRIT Connect platform within 4 hours, contributing as a Full-Stack Developer. Tech: Firebase, JavaScript, HTML, CSS.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="journey-block mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="section-title text-left">
            <span><FaCertificate /></span> Certifications
          </h2>
          <div className="cert-grid">
            <div className="cert-card glass-hover">
              <h4>Responsive Web Designing</h4>
              <p>TechA / Infosys (2024)</p>
            </div>
            <div className="cert-card glass-hover">
              <h4>Programming in Java</h4>
              <p>NPTEL (2025)</p>
            </div>
            <div className="cert-card glass-hover">
              <h4>Programming Essentials in C++</h4>
              <p>Cisco Networking Academy (2024)</p>
            </div>
            <div className="cert-card glass-hover">
              <h4>Computer Vision 101</h4>
              <p>Infosys (2024)</p>
            </div>
            <div className="cert-card glass-hover">
              <h4>AWS Essentials</h4>
              <p>Udemy (2025)</p>
            </div>
            <div className="cert-card glass-hover">
              <h4>Deloitte Tech Job Simulation</h4>
              <p>Forage (2025)</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Awards;

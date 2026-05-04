import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "YOLO-Powered Smart Drone Surveillance",
      description: "Built an autonomous UAV-based search and rescue system using YOLOv8 and optical flow for real-time survivor detection, false-positive reduction, and Gaussian heatmap-based rescue zone prioritization.",
      tags: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "PyTorch"],
      github: "https://github.com/Videeksha22/smart-drone-surveillance",
      live: null
    },
    {
      title: "Heart Disease Prediction using Machine Learning",
      description: "Developed a machine learning web application to predict heart disease risk using clinical data. Implemented data preprocessing, feature engineering, and deployed using Streamlit for real-time predictions.",
      tags: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
      github: "https://github.com/Videeksha22/Heart-Disease-Prediction-ML",
      live: "https://heart-disease-prediction-ml-videeksha.streamlit.app/"
    },
    {
      title: "Civica: Smart Citizen Engagement Platform",
      description: "Developing a full-stack civic issue reporting platform with real-time notifications and an integrated AI/ML microservice for automated complaint categorization and prioritization.",
      tags: ["React", "Node.js", "MySQL", "FastAPI", "HuggingFace"],
      github: "https://github.com/videeksha22",
      live: null
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span>03.</span> Featured Projects
        </h2>

        <div className="projects-grid">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-content">
                <div className="project-header">
                  <div className="folder-icon">
                    <svg stroke="currentColor" fill="none" strokeWidth="1" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>

              <div className="project-footer">
                <ul className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <li key={idx}>{tag}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

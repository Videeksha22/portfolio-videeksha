import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiC, SiPython, SiCplusplus, SiJavascript, 
  SiReact, SiTailwindcss, SiGit, SiGithub, 
  SiJupyter, SiVercel, SiMysql, SiPandas, SiNumpy, SiScikitlearn 
} from 'react-icons/si';
import { FaJava, FaDatabase, FaHtml5, FaCss3Alt, FaCode } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C", icon: <SiC /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "SQL", icon: <FaDatabase /> }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "ReactJS", icon: <SiReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> }
      ]
    },
    {
      title: "Libraries & Data Science",
      skills: [
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Matplotlib", icon: <SiPython /> },
        { name: "Seaborn", icon: <SiPython /> }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <SiGithub /> },
        { name: "VS Code", icon: <FaCode /> },
        { name: "Jupyter", icon: <SiJupyter /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "MySQL", icon: <SiMysql /> }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          <span>02.</span> My Skills
        </h2>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="skill-category glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

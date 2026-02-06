import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiTypescript, SiNodedotjs, SiNextdotjs,
  SiTailwindcss, SiFigma, SiGithub, SiJavascript
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: "React", icon: <SiReact />, color: "#61DAFB", level: 95 },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", level: 90 },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", level: 85 },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000", level: 80 },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", level: 85 },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4", level: 90 },
    { name: "UI Design", icon: <SiFigma />, color: "#F24E1E", level: 75 },
    { name: "Git/Github", icon: <SiGithub />, color: "#181717", level: 88 }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Expertise</span>
          <h2 className="title">Skills & Technologies</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.05 }}
              className="skill-card glass"
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <div className="progress-bg">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="progress-bar"
                    style={{ background: skill.color }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
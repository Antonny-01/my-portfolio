import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiUser, FiZap } from 'react-icons/fi';
import './About.css';
import profileImg from './IMG_9787.jpg';


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="about-image-container"
          >
            <div className="image-wrapper">
              <img src={profileImg} alt="Antonny" />
            </div>
            <div className="experience-badge glass">
              <span className="years">3+</span>
              <span className="text">Years of <br /> Experience</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-content"
          >
            <span className="subtitle">Introduction</span>
            <h2 className="title">Passion For Design & Technology</h2>
            <p className="description">
              Hello! I'm Antonny, a self-taught Frontend Developer based in Zambia.
              My journey into the world of creative coding started with curiosity and
              evolved into a career where I blend design aesthetics with functional perfection.
            </p>
            <p className="description">
              I specialize in building responsive, user-friendly web applications
              using the latest technologies. I believe that every line of code
              should contribute to a seamless user experience.
            </p>

            <div className="about-cards">
              <div className="about-card glass">
                <div className="card-icon"><FiCode /></div>
                <h3>Clean Code</h3>
                <p>Writing maintainable, scalable, and efficient code.</p>
              </div>
              <div className="about-card glass">
                <div className="card-icon"><FiZap /></div>
                <h3>Performance</h3>
                <p>Ensuring lightning-fast load times and smooth interactions.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
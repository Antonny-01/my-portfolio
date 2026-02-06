import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <div className="badge">
            <span className="badge-dot"></span>
            Available for new opportunities
          </div>

          <h1 className="hero-title">
            Transforming Ideas into <br />
            <span className="text-gradient">Digital Masterpieces</span>
          </h1>

          <p className="hero-subtitle">
            I'm <strong>Antonny</strong>, a Frontend Craftsman dedicated to building
            immersive, high-performance web experiences that leave a lasting impression.
          </p>

          <div className="hero-btns">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="btn btn-primary"
            >
              See My Work <HiArrowRight />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn btn-outline"
            >
              Let's Talk
            </motion.a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years of Experience</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-visual"
        >
          <div className="blob-bg"></div>
          <div className="visual-card glass">
            <div className="card-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="card-body">
              <pre>
                <code>
                  {`const developer = {
  name: 'Antonny',
  role: 'Frontend Engineer',
  location: 'Zambia',
  passions: [
    'UI/UX Design',
    'Creative Coding',
    'Open Source'
  ],
  motto: 'Code with Purpose'
};

// Ready to build?
developer.collaborate();`}
                </code>
              </pre>
            </div>
          </div>

          {/* Floating tech icons */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="floating-icon react"
          >⚛️</motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="floating-icon js"
          >🟨</motion.div>
          <motion.div
            animate={{ x: [0, 15, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="floating-icon css"
          >🎨</motion.div>
        </motion.div>
      </div>

      <div className="hero-bg-elements">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
      </div>
    </section>
  );
};

export default Hero;
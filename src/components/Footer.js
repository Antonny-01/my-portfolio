import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="logo-text">TONNY<span>.</span></h2>
            <p>Creating digital experiences that matter.</p>
            <p className="footer-email">mthokozisiantonny625@gmail.com</p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h3>Navigation</h3>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
            </div>
            <div className="link-group">
              <h3>Social</h3>
              <a href="https://github.com"><FiGithub /> GitHub</a>
              <a href="https://linkedin.com"><FiLinkedin /> LinkedIn</a>
              <a href="https://twitter.com"><FiTwitter /> Twitter</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tonny. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#"><FiGithub /></a>
            <a href="#"><FiLinkedin /></a>
            <a href="#"><FiTwitter /></a>
            <a href="#"><FiInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
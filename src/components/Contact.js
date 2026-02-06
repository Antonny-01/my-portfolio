import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');

    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      formRef.current.reset();

      setTimeout(() => setFormState('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Connect with me</span>
          <h2 className="title">Get In Touch</h2>
          <p className="description">
            I'm currently available for freelance work and full-time positions.
            Have a project in mind or just want to say hi?
          </p>
        </div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="contact-info"
          >
            <div className="info-item glass">
              <div className="info-icon"><FiMail /></div>
              <div className="info-text">
                <h3>Email</h3>
                <p>mthokozisiantonny625@gmail.com</p>
              </div>
            </div>
            <div className="info-item glass">
              <div className="info-icon"><FiPhone /></div>
              <div className="info-text">
                <h3>Phone</h3>
                <p>+260764699574</p>
              </div>
            </div>
            <div className="info-item glass">
              <div className="info-icon"><FiMapPin /></div>
              <div className="info-text">
                <h3>Location</h3>
                <p>Zambia</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="contact-form-container glass"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="mthokozisiantonny625@gmail.com" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${formState}`}
                disabled={formState !== 'idle'}
              >
                <AnimatePresence mode="wait">
                  {formState === 'idle' && (
                    <motion.span key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Send Message <FiSend />
                    </motion.span>
                  )}
                  {formState === 'sending' && (
                    <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Sending...
                    </motion.span>
                  )}
                  {formState === 'success' && (
                    <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Message Sent!
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
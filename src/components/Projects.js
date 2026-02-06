import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "Tech Store",
      category: "Digital Commerce",
      description: "A robust e-commerce solution for hardware and electronic retail, featuring a full-featured management system.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      tags: ["PHP", "MySQL", "Web App"],
      live: "#",
      github: "https://github.com/Antonny-01/Tech-Store"
    },
    {
      title: "Truth or Dare",
      category: "Entertainment",
      description: "An engaging social game application designed with a focus on interactive user experience and clean logic.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      tags: ["JavaScript", "Game Dev", "CSS3"],
      live: "#",
      github: "https://github.com/Antonny-01/truth-or-dare"
    },
    {
      title: "Data Visualization",
      category: "Analytics",
      description: "Interactive data dashboards designed to transform complex metrics into beautiful, actionable insights.",
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?w=800&q=80",
      tags: ["JavaScript", "Data Viz", "Charts"],
      live: "#",
      github: "https://github.com/Antonny-01/data_visualization"
    },
    {
      title: "Dladla Events",
      category: "Events Platform",
      description: "A specialized platform for event management and promotion, emphasizing local discovery and ease of use.",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
      tags: ["HTML", "CSS", "UI Design"],
      live: "#",
      github: "https://github.com/Antonny-01/dladla-events"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="subtitle"
          >
            My Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="title"
          >
            Featured Projects
          </motion.h2>
          <p className="description">
            A selection of my most recent work, blending creative design with technical excellence.
          </p>
        </div>

        <div className="projects-grid">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay glass">
                  <div className="overlay-btns">
                    <a href={project.github} className="overlay-btn" title="GitHub">
                      <FiGithub />
                    </a>
                    <a href={project.live} className="overlay-btn" title="Live Demo">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
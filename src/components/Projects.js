import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: "AI Vision platform",
      category: "Artificial Intelligence",
      description: "A comprehensive platform for AI image generation and processing using state-of-the-art diffusion models.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      tags: ["React", "Next.js", "OpenAI", "Tailwind"],
      live: "#",
      github: "#"
    },
    {
      title: "Fintech Dashboard",
      category: "Financial Technology",
      description: "Real-time analytics dashboard for cryptocurrency traders with advanced charting and automated alerts.",
      image: "https://images.unsplash.com/photo-1611974715853-2b8ef9a3d136?w=800&q=80",
      tags: ["TypeScript", "Recharts", "Node.js", "PostgreSQL"],
      live: "#",
      github: "#"
    },
    {
      title: "Urban E-commerce",
      category: "Digital Commerce",
      description: "High-performance fashion marketplace with seamless checkout, product filtering, and inventory management.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
      tags: ["React", "Redux", "Stripe", "Firebase"],
      live: "#",
      github: "#"
    },
    {
      title: "Health & Fitness App",
      category: "Mobile & Web",
      description: "Personalized fitness tracking application with workout plans, nutrition logging, and progress visualization.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      tags: ["React Native", "GraphQL", "MongoDB", "Auth0"],
      live: "#",
      github: "#"
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
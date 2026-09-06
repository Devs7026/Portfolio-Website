import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import portfolioConfig from '../portfolio.config';

const { projects = [] } = portfolioConfig;

const Portfolio = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header-block">
          <p className="section-eyebrow">Featured Work</p>
          <h1 className="subtitle">My Projects</h1>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id || project.title}
              className="project-card"
              initial={prefersReduced ? {} : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.45,
                delay: prefersReduced ? 0 : index * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {project.image && (
                <div className="project-card-media">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  {project.year && (
                    <span className="project-year-badge">{project.year}</span>
                  )}
                </div>
              )}

              <div className="project-card-body">
                <div className="project-card-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.subtitle && (
                    <p className="project-subtitle">{project.subtitle}</p>
                  )}
                </div>

                {project.tags && project.tags.length > 0 && (
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="project-desc">{project.description}</p>

                <div className="project-card-actions">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-primary"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <i className="fa-brands fa-github" aria-hidden="true" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn project-btn-secondary"
                      aria-label={`View live demo for ${project.title}`}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import portfolioConfig from '../portfolio.config';

const { achievements = [] } = portfolioConfig;

const Achievements = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="section-header-block">
          <p className="section-eyebrow">Milestones &amp; Recognition</p>
          <h1 className="subtitle">Achievements</h1>
        </div>

        <div className="achievements-list">
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.id || ach.title}
              className={`achievement-card ${ach.badgeType || ''}`}
              initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.45,
                delay: prefersReduced ? 0 : index * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <div className="achievement-card-top">
                <div className="achievement-icon-wrapper" aria-hidden="true">
                  <i className={ach.icon || "fa-solid fa-trophy"} />
                </div>
                <div className="achievement-badges">
                  {ach.year && <span className="achievement-year">{ach.year}</span>}
                  {ach.badge && (
                    <span className={`achievement-badge-pill ${ach.badgeType || ''}`}>
                      {ach.badge}
                    </span>
                  )}
                </div>
              </div>

              <div className="achievement-card-body">
                <span className="achievement-category">{ach.category}</span>
                <h3 className="achievement-title">{ach.title}</h3>
                {ach.subtitle && (
                  <p className="achievement-subtitle">{ach.subtitle}</p>
                )}

                {ach.highlight && (
                  <div className="achievement-highlight-box">
                    <i className="fa-solid fa-bolt-lightning" aria-hidden="true" />
                    <span>{ach.highlight}</span>
                  </div>
                )}

                <p className="achievement-desc">{ach.description}</p>
              </div>

              {ach.link && (
                <div className="achievement-card-footer">
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="achievement-link"
                    aria-label={`View details for ${ach.title}`}
                  >
                    <span>{ach.linkLabel || "View Details"}</span>
                    <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

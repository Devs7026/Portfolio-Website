import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import portfolioConfig from '../portfolio.config';

const { services } = portfolioConfig;

const Services = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="services" id="services">
      <div className="container">
        <h1 className="subtitle">Services I Offer</h1>
        <div className="serviceslist">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={prefersReduced ? {} : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                delay: prefersReduced ? 0 : index * 0.1,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <i className={service.icon} />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <a href={service.link}>{service.linkLabel}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
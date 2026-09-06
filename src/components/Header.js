import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import portfolioConfig from '../portfolio.config';

const { profile } = portfolioConfig;

const Header = () => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.header
      className="Header"
      id="header"
      initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div>
        <p>{profile.tagline}</p>
        <h1>
          Hey, I'm{' '}
          <span>
            <ReactTyped
              strings={[profile.name]}
              typeSpeed={60}
              backSpeed={40}
            />
          </span>
        </h1>
        <br />
        <p>- {profile.quote}</p>
        <p>{profile.subquote}</p>
      </div>
      <div>
        <img className="pics" src={profile.heroImage} alt="my_image" />
      </div>
    </motion.header>
  );
};

export default Header;

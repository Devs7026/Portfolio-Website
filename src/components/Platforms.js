import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Platforms.css';
import portfolioConfig from '../portfolio.config';

const { platforms = [] } = portfolioConfig;

const PlatformIcon = ({ iconType }) => {
  if (iconType === 'leetcode') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 94 111"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="platform-svg leetcode-svg"
        aria-hidden="true"
      >
        <path
          d="M49.412 2.023c2.406-2.575 6.44-2.71 9.011-.3 2.572 2.41 2.706 6.451.301 9.027L15.928 56.573c-4.651 4.979-4.141 13.001 1.218 18.256l19.763 19.38c2.516 2.467 2.56 6.51.096 9.031-2.463 2.52-6.5 2.564-9.016.096L8.227 83.957c-10.151-9.955-11.163-25.883-1.61-36.11L49.412 2.023z"
          fill="#FFFFFF"
        />
        <path
          d="M67.507 83.066c2.494-2.49 6.53-2.483 9.016.015 2.486 2.498 2.479 6.542-.015 9.032l-11.073 11.057c-10.216 10.201-26.875 10.349-37.263.343-.06-.057-4.686-4.593-19.945-19.556-10.152-9.954-11.163-25.882-1.61-36.111L24.43 28.775C33.91 18.622 51.388 17.512 62.228 26.279l16.177 13.083c2.74 2.216 3.168 6.237.956 8.981-2.212 2.744-6.226 3.173-8.965.957L54.219 36.217c-5.67-4.585-15.587-3.955-20.479 1.284L15.928 56.573c-4.65 4.98-4.14 13.001 1.218 18.256 11.206 10.988 19.842 19.456 19.852 19.465 5.4 5.202 14.133 5.124 19.436-.171l11.073-11.057z"
          fill="#FFA116"
        />
        <path
          d="M40.607 72.001c-3.521 0-6.375-2.859-6.375-6.386 0-3.527 2.854-6.386 6.375-6.386h47.018c3.52 0 6.375 2.859 6.375 6.386 0 3.527-2.855 6.386-6.375 6.386H40.607z"
          fill="#B3B3B3"
        />
      </svg>
    );
  }

  if (iconType === 'hackerrank') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="platform-svg hackerrank-svg"
        aria-hidden="true"
      >
        <path
          d="M16 1.8c.6 0 1.2.3 1.5.8l11.4 6.6c.6.4 1 1 1 1.7v13.2c0 .7-.4 1.3-1 1.7L17.5 31.4c-.3.2-.6.3-.9.3-.3 0-.6-.1-.9-.3L4.3 25.8c-.6-.4-1-1-1-1.7V10.9c0-.7.4-1.3 1-1.7L15.7 2.6c.3-.5.9-.8 1.5-.8z"
          fill="#2EC866"
        />
        <path
          d="M9.6 23.4h3.2v-5.9h6.4v3.5h-1.2l2.8 3.5 2.8-3.5h-1.2V8.6h-3.2v5.9h-6.4v-3.5h1.2L11.2 7.5 8.4 11h1.2v12.4z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  if (iconType === 'figma') {
    return (
      <svg
        width="18"
        height="27"
        viewBox="0 0 38 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="platform-svg figma-svg"
        aria-hidden="true"
      >
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
      </svg>
    );
  }

  if (iconType === 'github') {
    return <i className="fa-brands fa-github platform-icon-fa" aria-hidden="true" />;
  }

  if (iconType === 'linkedin') {
    return <i className="fa-brands fa-linkedin-in platform-icon-fa" aria-hidden="true" />;
  }

  if (iconType === 'twitter') {
    return <i className="fa-brands fa-x-twitter platform-icon-fa" aria-hidden="true" />;
  }

  if (iconType === 'instagram') {
    return <i className="fa-brands fa-instagram platform-icon-fa" aria-hidden="true" />;
  }

  return <i className="fa-solid fa-arrow-up-right-from-square platform-icon-fa" aria-hidden="true" />;
};

const Platforms = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="platforms" id="platforms">
      <div className="container">
        <div className="section-header-block">
          <p className="section-eyebrow">Online Presence</p>
          <h1 className="subtitle">Platforms &amp; Accounts</h1>
        </div>
        <p className="platforms-intro">
          Explore my code repositories, algorithmic problem-solving journeys, UI/UX designs, and social channels across the web.
        </p>

        <div className="platforms-grid">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.id || platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`platform-card platform-${platform.id}`}
              initial={prefersReduced ? {} : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.45,
                delay: prefersReduced ? 0 : index * 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
              aria-label={`Visit my ${platform.name} profile (${platform.handle})`}
            >
              <div className="platform-card-glow" />

              <div className="platform-card-top">
                <div className={`platform-icon-wrapper platform-icon-${platform.id}`}>
                  <PlatformIcon iconType={platform.iconType} />
                </div>
                {platform.badge && (
                  <span className="platform-badge-pill">
                    {platform.badge}
                  </span>
                )}
              </div>

              <div className="platform-card-body">
                <span className="platform-category">{platform.category}</span>
                <h3 className="platform-title">{platform.name}</h3>
                <p className="platform-handle">{platform.handle}</p>
                <p className="platform-desc">{platform.description}</p>
              </div>

              <div className="platform-card-footer">
                <span className="platform-link">
                  <span>Visit Profile</span>
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platforms;

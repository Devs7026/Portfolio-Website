import React from 'react';
import portfolioConfig from '../portfolio.config';

const { social } = portfolioConfig;

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="section-header-block">
            <p className="section-eyebrow">Get In Touch</p>
            <h1 className="subtitle">Connect</h1>
          </div>
          <p className="contact-intro">
            Have a project in mind, an opportunity, or just want to say hi? Feel free to reach out directly through email, phone, or any of my profiles below.
          </p>

          {/* Direct Email & Phone Cards */}
          <div className="contact-cards-grid">
            {social.email && (
              <a
                href={`mailto:${social.email}`}
                className="contact-direct-card"
                aria-label={`Send email to ${social.email}`}
              >
                <div className="contact-card-icon">
                  <i className="fa-solid fa-envelope" aria-hidden="true" />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Email Address</span>
                  <span className="contact-card-value">{social.email}</span>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square contact-card-arrow" aria-hidden="true" />
              </a>
            )}

            {social.phone && (
              <a
                href={`tel:${social.phone.replace(/\s+/g, '')}`}
                className="contact-direct-card"
                aria-label={`Call ${social.phone}`}
              >
                <div className="contact-card-icon">
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                </div>
                <div className="contact-card-content">
                  <span className="contact-card-label">Phone Number</span>
                  <span className="contact-card-value">{social.phone}</span>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square contact-card-arrow" aria-hidden="true" />
              </a>
            )}
          </div>

          {/* Social Profiles */}
          <div className="contact-social-block">
            <span className="contact-social-label">Connect across platforms:</span>
            <div className="socialicons">
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin" aria-hidden="true" />
                </a>
              )}

              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <i className="fa-brands fa-github" aria-hidden="true" />
                </a>
              )}

              {social.leetcode && (
                <a
                  href={social.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  title="LeetCode"
                  className="contact-svg-icon"
                >
                  <svg width="25" height="25" viewBox="0 0 94 111" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M49.412 2.023c2.406-2.575 6.44-2.71 9.011-.3 2.572 2.41 2.706 6.451.301 9.027L15.928 56.573c-4.651 4.979-4.141 13.001 1.218 18.256l19.763 19.38c2.516 2.467 2.56 6.51.096 9.031-2.463 2.52-6.5 2.564-9.016.096L8.227 83.957c-10.151-9.955-11.163-25.883-1.61-36.11L49.412 2.023z" fill="#FFFFFF"/>
                    <path d="M67.507 83.066c2.494-2.49 6.53-2.483 9.016.015 2.486 2.498 2.479 6.542-.015 9.032l-11.073 11.057c-10.216 10.201-26.875 10.349-37.263.343-.06-.057-4.686-4.593-19.945-19.556-10.152-9.954-11.163-25.882-1.61-36.111L24.43 28.775C33.91 18.622 51.388 17.512 62.228 26.279l16.177 13.083c2.74 2.216 3.168 6.237.956 8.981-2.212 2.744-6.226 3.173-8.965.957L54.219 36.217c-5.67-4.585-15.587-3.955-20.479 1.284L15.928 56.573c-4.65 4.98-4.14 13.001 1.218 18.256 11.206 10.988 19.842 19.456 19.852 19.465 5.4 5.202 14.133 5.124 19.436-.171l11.073-11.057z" fill="#FFA116"/>
                    <path d="M40.607 72.001c-3.521 0-6.375-2.859-6.375-6.386 0-3.527 2.854-6.386 6.375-6.386h47.018c3.52 0 6.375 2.859 6.375 6.386 0 3.527-2.855 6.386-6.375 6.386H40.607z" fill="#B3B3B3"/>
                  </svg>
                </a>
              )}

              {social.hackerrank && (
                <a
                  href={social.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HackerRank Profile"
                  title="HackerRank"
                  className="contact-svg-icon"
                >
                  <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M16 1.8c.6 0 1.2.3 1.5.8l11.4 6.6c.6.4 1 1 1 1.7v13.2c0 .7-.4 1.3-1 1.7L17.5 31.4c-.3.2-.6.3-.9.3-.3 0-.6-.1-.9-.3L4.3 25.8c-.6-.4-1-1-1-1.7V10.9c0-.7.4-1.3 1-1.7L15.7 2.6c.3-.5.9-.8 1.5-.8z" fill="#2EC866"/>
                    <path d="M9.6 23.4h3.2v-5.9h6.4v3.5h-1.2l2.8 3.5 2.8-3.5h-1.2V8.6h-3.2v5.9h-6.4v-3.5h1.2L11.2 7.5 8.4 11h1.2v12.4z" fill="#FFFFFF"/>
                  </svg>
                </a>
              )}

              {social.figma && (
                <a
                  href={social.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Figma Profile"
                  title="Figma"
                  className="contact-svg-icon"
                >
                  <svg
                    width="18"
                    height="27"
                    viewBox="0 0 38 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="figma-svg"
                    aria-hidden="true"
                  >
                    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                  </svg>
                </a>
              )}

              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter/X Profile"
                  title="Twitter/X"
                >
                  <i className="fa-brands fa-x-twitter" aria-hidden="true" />
                </a>
              )}

              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

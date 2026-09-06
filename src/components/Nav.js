import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';
import { GithubOutlined } from '@ant-design/icons';
import portfolioConfig from '../portfolio.config';

const { nav, social } = portfolioConfig;

const Nav = ({ isBWMode = false, onToggleBWMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setNavHidden(true); // scrolling down — hide
      } else {
        setNavHidden(false); // scrolling up or near top — show
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`Navbar ${navHidden ? 'hidden' : 'visible'}`}>
      <a className="Logo" href="/">
        <img src={nav.logo} alt="logo" />
      </a>

      <ul className={menuOpen ? 'open' : ''}>
        {/* Profile Icons: GitHub, LeetCode, HackerRank */}
        <li className="nav-social-item">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            title="GitHub Profile"
          >
            <GithubOutlined />
          </a>
        </li>

        {social.leetcode && (
          <li className="nav-social-item">
            <a
              href={social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              title="LeetCode Profile"
              className="nav-icon-link"
            >
              <svg width="19" height="19" viewBox="0 0 94 111" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
            </a>
          </li>
        )}

        {social.hackerrank && (
          <li className="nav-social-item">
            <a
              href={social.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HackerRank Profile"
              title="HackerRank Profile"
              className="nav-icon-link"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="hackerrank-hexagon-svg"
                aria-hidden="true"
              >
                {/* Green Hexagon */}
                <path
                  d="M16 1.8c.6 0 1.2.3 1.5.8l11.4 6.6c.6.4 1 1 1 1.7v13.2c0 .7-.4 1.3-1 1.7L17.5 31.4c-.3.2-.6.3-.9.3-.3 0-.6-.1-.9-.3L4.3 25.8c-.6-.4-1-1-1-1.7V10.9c0-.7.4-1.3 1-1.7L15.7 2.6c.3-.5.9-.8 1.5-.8z"
                  fill="#2EC866"
                />
                {/* White H with up and down arrows */}
                <path
                  d="M9.6 23.4h3.2v-5.9h6.4v3.5h-1.2l2.8 3.5 2.8-3.5h-1.2V8.6h-3.2v5.9h-6.4v-3.5h1.2L11.2 7.5 8.4 11h1.2v12.4z"
                  fill="#FFFFFF"
                />
              </svg>
            </a>
          </li>
        )}

        {/* Black and White / Monochrome Toggle */}
        <li className="nav-toggle-item">
          <button
            type="button"
            className={`theme-toggle-btn ${isBWMode ? 'active' : ''}`}
            onClick={onToggleBWMode}
            aria-label={isBWMode ? "Switch to Color Mode" : "Switch to Black & White Noir Mode"}
            title={isBWMode ? "Switch to Color Mode" : "Switch to Black & White Noir Mode"}
          >
            <i className="fa-solid fa-circle-half-stroke" aria-hidden="true" />
            <span className="theme-toggle-label">{isBWMode ? 'B&W' : 'Color'}</span>
          </button>
        </li>

        {/* Dynamic nav links from config */}
        {nav.links.map((link) => (
          <li key={link.sectionId}>
            <a
              href={`#${link.sectionId}`}
              onClick={() => {
                scrollToSection(link.sectionId);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          </li>
        ))}

        <button
          className="nav-btn nav-close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </ul>

      <button
        className="nav-btn"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        <i className="fa-solid fa-bars" />
      </button>
    </nav>
  );
};

export default Nav;

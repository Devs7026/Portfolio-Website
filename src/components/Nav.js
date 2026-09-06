import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';
import portfolioConfig from '../portfolio.config';

const { nav } = portfolioConfig;

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

      {menuOpen && (
        <div
          className="nav-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default Nav;

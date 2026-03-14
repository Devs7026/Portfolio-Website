import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';
import image from '../Images/applogo.png';
import { GithubOutlined } from '@ant-design/icons';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling down — hide nav
        setNavHidden(true);
      } else {
        // Scrolling up or near top — show nav
        setNavHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function openmenu() {
    setMenuOpen(true);
  }

  function closemenu() {
    setMenuOpen(false);
  }

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav className={`Navbar ${navHidden ? 'hidden' : 'visible'}`}>
      <a className="Logo" href="/">
        <img src={image} alt="logo" />
      </a>
      <ul className={menuOpen ? 'open' : ''}>
        <li><a href="https://github.com/Devs7026"><GithubOutlined /></a></li>
        <li><a href="#home" onClick={() => { scrollToSection('home'); closemenu(); }}>Home</a></li>
        <li><a href="#about" onClick={() => { scrollToSection('about'); closemenu(); }}>About</a></li>
        <li><a href="#services" onClick={() => { scrollToSection('services'); closemenu(); }}>Services</a></li>
        <li><a href="#portfolio" onClick={() => { scrollToSection('portfolio'); closemenu(); }}>Portfolio</a></li>
        <li><a href="#contact" onClick={() => { scrollToSection('contact'); closemenu(); }}>Contact</a></li>
        <button className="nav-btn nav-close-btn" onClick={closemenu}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </ul>
      <button className="nav-btn" onClick={openmenu}>
        <i className="fa-solid fa-bars"></i>
      </button>
    </nav>
  );
};

export default Nav;

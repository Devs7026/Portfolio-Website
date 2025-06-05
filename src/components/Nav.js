import React, { useRef, useState, useEffect } from 'react';
import image from '../Images/applogo.png';

const Nav = () => {
  const sidemenuRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsScrolling(false);
      } else {
        // Scrolling up
        setIsScrolling(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Open menu function
  function openmenu() {
    if (sidemenuRef.current) {
      sidemenuRef.current.style.right = "0";
    }
  }

  // Close menu function
  function closemenu() {
    if (sidemenuRef.current) {
      sidemenuRef.current.style.right = "-200px";
    }
  }

  // Scroll to section function
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav className={`Navbar ${isScrolling ? 'sticky' : ''}`}>
      <a className="Logo" href="/">
        <img src={image} alt="logo" />
      </a>
      <ul id="sidemenu" ref={sidemenuRef}>
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
}

export default Nav;

















import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image from '../Images/applogo.png';
import { GithubOutlined } from '@ant-design/icons';


gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const sidemenuRef = useRef(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const nav = navRef.current;
    const logo = logoRef.current;
    const menuItems = menuItemsRef.current;

    // Initial entrance animation
    gsap.fromTo(nav, 
      { 
        opacity: 0, 
        y: -50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out" 
      }
    );

    // Logo animation
    gsap.fromTo(logo, 
      { 
        opacity: 0, 
        scale: 0.5, 
        rotation: -180 
      },
      { 
        opacity: 1, 
        scale: 1, 
        rotation: 0, 
        duration: 1, 
        ease: "back.out(1.7)",
        delay: 0.2
      }
    );

    // Menu items stagger animation
    if (menuItems) {
      gsap.fromTo(menuItems.children, 
        { 
          opacity: 0, 
          x: 50 
        },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.6, 
          stagger: 0.1, 
          ease: "power2.out",
          delay: 0.4
        }
      );
    }

    // Add hover animations to menu items
    if (menuItems) {
      Array.from(menuItems.children).forEach((item) => {
        const itemHover = gsap.to(item, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
          paused: true
        });

        item.addEventListener('mouseenter', () => itemHover.play());
        item.addEventListener('mouseleave', () => itemHover.reverse());
      });
    }

    // Scroll-triggered navbar animation
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (self.direction === 1 && self.progress > 0.1) {
          // Scrolling down
          gsap.to(nav, {
            y: -100,
            duration: 0.3,
            ease: "power2.out"
          });
        } else {
          // Scrolling up
          gsap.to(nav, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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

  // Open menu function with animation
  function openmenu() {
    if (sidemenuRef.current) {
      gsap.to(sidemenuRef.current, {
        right: "0",
        duration: 0.5,
        ease: "power3.out"
      });
    }
  }

 
  function closemenu() {
    if (sidemenuRef.current) {
      gsap.to(sidemenuRef.current, {
        right: "-200px",
        duration: 0.5,
        ease: "power3.out"
      });
    }
  }

  
  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <nav className={`Navbar ${isScrolling ? 'sticky' : ''}`} ref={navRef}>
      <a className="Logo" href="/" ref={logoRef}>
        <img src={image} alt="logo" />
      </a>
      <ul id="sidemenu" ref={sidemenuRef}>
         <li><a href="https://github.com/Devs7026"><GithubOutlined twoToneColor="#eb2f96" /></a></li> 
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

















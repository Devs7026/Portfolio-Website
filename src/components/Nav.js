// import React, { useRef } from 'react';
// import image from '../Images/applogo.png';

// const Nav = () => {
//   // Using useRef to get reference to the sidemenu
//   const sidemenuRef = useRef(null);

//   // Function to open the side menu
//   function openmenu() {
//     if (sidemenuRef.current) {
//       sidemenuRef.current.style.right = "0";
//     }
//   }

//   // Function to close the side menu
//   function closemenu() {
//     if (sidemenuRef.current) {
//       sidemenuRef.current.style.right = "-200px";
//     }
//   }

//   return (
//     <nav className="Navbar">
//       <a className='Logo' href='/'>
//         <img src={image} alt='logo' />
//       </a>
//       <ul id="sidemenu" ref={sidemenuRef}>
//         <li><a href="#header">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#portfolio">Portfolio</a></li>
//         <li><a href="#contact">Contact</a></li>
//         <button className="nav-btn nav-close-btn" onClick={closemenu}>
//           <i className="fa-solid fa-xmark"></i>
//         </button>
//       </ul>
//       <button className="nav-btn" onClick={openmenu}>
//         <i className="fa-solid fa-bars"></i>
//       </button>
//     </nav>
//   );
// }

// export default Nav;


import React, { useRef } from 'react';
import image from '../Images/applogo.png';

const Nav = () => {
  const sidemenuRef = useRef(null);

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
    <nav className="Navbar">
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







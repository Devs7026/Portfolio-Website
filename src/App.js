import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider'
import OrbsBackground from './components/OrbsBackground';
import img1 from './Images/certifications/img1.jpg';
import img2 from './Images/certifications/img2.jpg';
import img3 from './Images/certifications/img3.jpg';
import img4 from './Images/certifications/img4.jpg';
import img5 from './Images/certifications/img5.jpg';
import img6 from './Images/certifications/img6.jpg';
import img7 from './Images/certifications/img7.jpg';
import img8 from './Images/certifications/img8.jpg';
import img9 from './Images/certifications/img9.jpg';
import img10 from './Images/certifications/img10.jpg';
import img11 from './Images/certifications/img11.jpg';
import img12 from './Images/certifications/img12.jpg';
import img13 from './Images/certifications/img13.jpg';
import img14 from './Images/certifications/img14.jpg'
import img15 from './Images/certifications/img15.jpg'
import img16 from './Images/certifications/img16.jpg'
import img17 from './Images/certifications/img17.JPG'
import img18 from './Images/certifications/img18.gif'
import img19 from './Images/certifications/img19.gif'
import CurvedLoop from './Reactbits/CurvedLoop';
import ClickSpark from './Reactbits/ClickSpark';
import LogoLoop from './Reactbits/LogoLoop';

function App() {
  const slides = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
    { url: img6 },
    { url: img7 },
    { url: img8 },
    { url: img9 },
    { url: img10 },
    { url: img11 },
    { url: img12 },
    { url: img13 },
    { url: img14 },
    { url: img15 },
    { url: img16 },
    { url: img17 },
    { url: img18 },
    { url: img19 },


  ];

  const containerStyles = {
    width: "100%",
    maxWidth: "700px",
    height: "600px",
    margin: "0 auto",
    overflow: "hidden",
    padding: "0 20px",
  };

  const skillItems = [
    { name: "JavaScript", logoUrl: "https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript" },
    { name: "TypeScript", logoUrl: "https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript" },
    { name: "React", logoUrl: "https://img.shields.io/badge/-React-black?style=flat-square&logo=react" },
    { name: "Next.js", logoUrl: "https://img.shields.io/badge/-Next.js-black?style=flat-square&logo=next.js" },
    { name: "Node.js", logoUrl: "https://img.shields.io/badge/-Node.js-black?style=flat-square&logo=node.js" },
    { name: "Python", logoUrl: "https://img.shields.io/badge/-Python-black?style=flat-square&logo=python" },
    { name: "Java", logoUrl: "https://img.shields.io/badge/-Java-black?style=flat-square&logo=java" },
    { name: "MongoDB", logoUrl: "https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb" },
    { name: "MySQL", logoUrl: "https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql" },
    { name: "Figma", logoUrl: "https://img.shields.io/badge/-Figma-black?style=flat-square&logo=figma" },
    { name: "Git", logoUrl: "https://img.shields.io/badge/-Git-black?style=flat-square&logo=git" },
    { name: "Tailwind CSS", logoUrl: "https://img.shields.io/badge/-Tailwind%20CSS-black?style=flat-square&logo=tailwind-css" },
  ];
  return (
    <ClickSpark
      sparkColor="rgb(203, 11, 11)"
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
    >
      <div className="orbs-root">
        <OrbsBackground />
        <Nav />
        <CurvedLoop marqueeText="Welcome to  my Portfolio Website! " />
        <Header />
        <LogoLoop items={skillItems} />
        <About />
        <Services />
        <Portfolio />
        <div style={containerStyles} className="imgslider">
          <ImageSlider slides={slides} />
        </div>
        <Contact />
        <CurvedLoop marqueeText="Thank you for Visiting my Portfolio Website! ❤️ Looking forward to Connecting with you! " straight={true} className="footer-loop"/>
        <Footer />
      </div>
    </ClickSpark>
  );
}

export default App;

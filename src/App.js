import React from 'react';
import './App.css';
import Nav from  './components/Nav'
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

function App() {
  const slides= [
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
    { url: img14},
    { url: img15},
    { url: img16},

   
  ];

  const containerStyles ={
    width: "700px",
    height: "600px",
    margin: "0 auto",
    overflow: "hidden",
  };
  return (
    <div className="orbs-root">
      <OrbsBackground />
      <Nav/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <div style={containerStyles} className="imgslider">
        <ImageSlider slides={slides}/>
      </div>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

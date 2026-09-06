import React, { useState, useEffect } from 'react';
import './App.css';
import portfolioConfig from './portfolio.config';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Achievements from './components/Achievements';
import Badges from './components/Badges';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import OrbsBackground from './components/OrbsBackground';
import CurvedLoop from './Reactbits/CurvedLoop';
import ClickSpark from './Reactbits/ClickSpark';
import LogoLoop from './Reactbits/LogoLoop';

const { certSlides, skillLoop, marquee } = portfolioConfig;

const sliderContainerStyles = {
  width: "100%",
  maxWidth: "700px",
  height: "600px",
  margin: "0 auto",
  overflow: "hidden",
  padding: "0 20px",
};

function App() {
  const [isBWMode, setIsBWMode] = useState(() => {
    try {
      return localStorage.getItem('theme-bw') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      if (isBWMode) {
        document.body.classList.add('theme-bw');
      } else {
        document.body.classList.remove('theme-bw');
      }
      localStorage.setItem('theme-bw', String(isBWMode));
    } catch (e) {
      console.warn('Could not persist theme preference:', e);
    }
  }, [isBWMode]);

  const toggleBWMode = () => {
    setIsBWMode((prev) => !prev);
  };

  return (
    <ClickSpark
      sparkColor={isBWMode ? "rgb(255, 255, 255)" : "rgb(203, 11, 11)"}
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
    >
      <div className={`orbs-root ${isBWMode ? 'theme-bw' : ''}`}>
        <OrbsBackground />
        <Nav isBWMode={isBWMode} onToggleBWMode={toggleBWMode} />
        <CurvedLoop marqueeText={marquee.top} />
        <Header />
        <LogoLoop items={skillLoop} />
        <About />
        <Services />
        <Portfolio />
        <Achievements />
        <div className="certifications-section" id="certifications">
          <div className="container">
            <h1 className="certi certi-section-title">Licenses &amp; Certifications</h1>
            <div style={sliderContainerStyles} className="imgslider">
              <ImageSlider slides={certSlides} />
            </div>
          </div>
        </div>
        <Badges />
        <Contact />
        <CurvedLoop
          marqueeText={marquee.bottom}
          straight={true}
          className="footer-loop"
        />
        <Footer />
      </div>
    </ClickSpark>
  );
}

export default App;

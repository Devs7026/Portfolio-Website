import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import pic1 from '../Images/code1.jpeg'
import pic2 from '../Images/code2.jpeg'
import pic3 from '../Images/code3.jpeg'


gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const portfolioRef = useRef(null);
  const titleRef = useRef(null);
  const workListRef = useRef(null);
  const btnRef = useRef(null);
  const certiRef = useRef(null);

  useEffect(() => {
    const portfolio = portfolioRef.current;
    const title = titleRef.current;
    const workList = workListRef.current;
    const btn = btnRef.current;
    const certi = certiRef.current;

    // Main section animation
    gsap.fromTo(portfolio, 
      { 
        opacity: 0, 
        y: 100 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: portfolio,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Title animation
    gsap.fromTo(title, 
      { 
        opacity: 0, 
        scale: 0.8 
      },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Work items stagger animation
    gsap.fromTo(workList.children, 
      { 
        opacity: 0, 
        y: 50, 
        scale: 0.8 
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: workList,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Button animation
    gsap.fromTo(btn, 
      { 
        opacity: 0, 
        scale: 0.8 
      },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.6, 
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: btn,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Certifications title animation
    gsap.fromTo(certi, 
      { 
        opacity: 0, 
        x: -50 
      },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: certi,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Add hover animations to work items
    const workItems = workList.children;
    Array.from(workItems).forEach((item, index) => {
      const itemHover = gsap.to(item, {
        y: -10,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        paused: true
      });

      item.addEventListener('mouseenter', () => itemHover.play());
      item.addEventListener('mouseleave', () => itemHover.reverse());

      // Layer animation on hover
      const layer = item.querySelector('.layer');
      if (layer) {
        const layerHover = gsap.to(layer, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          paused: true
        });

        item.addEventListener('mouseenter', () => layerHover.play());
        item.addEventListener('mouseleave', () => layerHover.reverse());
      }

      // Icon animation on hover
      const icon = item.querySelector('i');
      if (icon) {
        const iconHover = gsap.to(icon, {
          rotation: 360,
          scale: 1.2,
          duration: 0.5,
          ease: "back.out(1.7)",
          paused: true
        });

        item.addEventListener('mouseenter', () => iconHover.play());
        item.addEventListener('mouseleave', () => iconHover.reverse());
      }
    });

    // Button hover effect
    const btnHover = gsap.to(btn, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
      paused: true
    });

    btn.addEventListener('mouseenter', () => btnHover.play());
    btn.addEventListener('mouseleave', () => btnHover.reverse());

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="portfolio" id="portfolio" ref={portfolioRef}>
        <div className="container">
            <h1 className="subtitle" ref={titleRef}>My Work</h1>
            <div className="worklist" ref={workListRef}>
                <div className="work">
                  <img src={pic1} alt="randomimg"></img>
                  <div className="layer">
                    <h3>HealthCare App</h3>
                     <p>A simple diet tracking along with symptoms log that tells you what foods are potential triggers for particular chronic health conditions.</p>
                     <a href="https://github.com/Devs7026/HealthCare.git"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                </div>
                <div className="work">
                  <img src={pic2} alt="randomimg"></img>
                  <div className="layer">
                    <h3>Stock Price Predictor</h3>
                     <p>Stock price predictor using LSTM to predict next day price.</p>
                     <a href="https://github.com/Devs7026/AIML-Projects.git"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                </div>
                <div className="work">
                  <img src={pic3} alt="randomimg"></img>
                  <div className="layer">
                    <h3>Student Database Management System</h3>
                     <p>SDBMS using Django templates.</p>
                     <a href="https://github.com/Devs7026/Mini-Project-DBS.git"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                </div>

            </div>
             <a href="https://github.com/Devs7026" className="btn" ref={btnRef}>See More</a>
             <h1 className="certi" ref={certiRef}>Licenses & Certifications</h1>
        </div>
    </div>
  );
}

export default Portfolio;

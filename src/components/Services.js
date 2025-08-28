import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef(null);
  const titleRef = useRef(null);
  const servicesListRef = useRef(null);

  useEffect(() => {
    const services = servicesRef.current;
    const title = titleRef.current;
    const servicesList = servicesListRef.current;

    // Main section animation
    gsap.fromTo(services, 
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
          trigger: services,
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

    // Services cards stagger animation
    gsap.fromTo(servicesList.children, 
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
          trigger: servicesList,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );

  
    const serviceCards = servicesList.children;
    Array.from(serviceCards).forEach((card, index) => {
      const cardHover = gsap.to(card, {
        y: -10,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        paused: true
      });

      card.addEventListener('mouseenter', () => cardHover.play());
      card.addEventListener('mouseleave', () => cardHover.reverse());

      // Icon animation on hover
      const icon = card.querySelector('i');
      if (icon) {
        const iconHover = gsap.to(icon, {
          rotation: 360,
          scale: 1.2,
          duration: 0.5,
          ease: "back.out(1.7)",
          paused: true
        });

        card.addEventListener('mouseenter', () => iconHover.play());
        card.addEventListener('mouseleave', () => iconHover.reverse());
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="services" id="services" ref={servicesRef}>
      <div className="container">
        <h1 className="subtitle" ref={titleRef}>Services I Offer</h1>
        <div className="serviceslist" ref={servicesListRef}>
            <div>
            <i className="fa-solid fa-paint-roller"></i>
                <h2>UI/UX Design</h2>
                <p>I can create UI/UX designs using Figma.Figma is a cloud-based tool that enables real-time collaboration for creating and prototyping UI/UX designs.</p>
                <a href="https://www.figma.com/resource-library/difference-between-ui-and-ux/">Learn more</a>
            </div>
            <div>
            <i className="fa-solid fa-photo-film"></i>
                <h2>Photography</h2>
                <p>I use Creativity and Imagination to take aesthetic and high standard pictures for be it your products or yourself.</p>
                <a href="https://drive.google.com/drive/folders/1YFugaH_1Yv9i9LITMnAHFVpbG93JCnbt">Check it Out!</a>
            </div>
            <div>
            <i className="fa-solid fa-code"></i>
                <h2>Web Design</h2>
                <p>I can create a fully functional website design for you based on your requirements.</p>
                <a href="https://en.wikipedia.org/wiki/Web_design">Learn more</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services;
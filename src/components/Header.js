import React, { useEffect, useRef } from 'react';
import { ReactTyped } from 'react-typed';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cast from '../Images/user.jpg';


gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const text = textRef.current;
    const image = imageRef.current;
    const typed = typedRef.current;

    
    const tl = gsap.timeline();

   
    tl.fromTo(header, 
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out" 
      }
    )
    .fromTo(text, 
      { 
        opacity: 0, 
        x: -50 
      },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8, 
        ease: "back.out(1.7)" 
      }, 
      "-=0.5"
    )
    .fromTo(image, 
      { 
        opacity: 0, 
        scale: 0.8, 
        rotation: -10 
      },
      { 
        opacity: 1, 
        scale: 1, 
        rotation: 0, 
        duration: 1, 
        ease: "elastic.out(1, 0.3)" 
      }, 
      "-=0.3"
    );

    
    const imageHover = gsap.to(image, {
      scale: 1.05,
      rotation: 2,
      duration: 0.3,
      ease: "power2.out",
      paused: true
    });

    image.addEventListener('mouseenter', () => imageHover.play());
    image.addEventListener('mouseleave', () => imageHover.reverse());

    
    gsap.fromTo(text.querySelectorAll('p'), 
      { 
        opacity: 0, 
        y: 20 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.2, 
        ease: "power2.out",
        delay: 1.5
      }
    );

    
    ScrollTrigger.create({
      trigger: header,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(typed, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      },
      onLeave: () => {
        gsap.to(typed, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <header className="Header" id="header" ref={headerRef}>
      <div ref={textRef}>
        <p>FullStack/ UI/UX Developer</p>
        <h1>
          Hey, I'm{' '}
          <span ref={typedRef}>
            <ReactTyped
              strings={["Dev Srijit","A Life Long Learner"]}
              typeSpeed={60}
              backSpeed={40}
              loop={true}
            />
          </span>
        </h1>
        <br />
        <p>- "Showcasing Creativity, Crafting Impact"</p>
        <p>Turning Ideas into Icons</p>
      </div>
      <div>
        <img className='pics' src={cast} alt="my_image" ref={imageRef} />
      </div>
    </header>
  );
};

export default Header;






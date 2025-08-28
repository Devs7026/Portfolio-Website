import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(""); 
  const contactRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const formRef = useRef(null);
  const socialIconsRef = useRef(null);

  useEffect(() => {
    const contact = contactRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const form = formRef.current;
    const socialIcons = socialIconsRef.current;

    // Main section animation
    gsap.fromTo(contact, 
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
          trigger: contact,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Left side animation
    gsap.fromTo(left, 
      { 
        opacity: 0, 
        x: -50 
      },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: left,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Right side animation
    gsap.fromTo(right, 
      { 
        opacity: 0, 
        x: 50 
      },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: right,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Form inputs stagger animation
    gsap.fromTo(form.querySelectorAll('input, textarea'), 
      { 
        opacity: 0, 
        y: 30 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: form,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Social icons animation
    gsap.fromTo(socialIcons.children, 
      { 
        opacity: 0, 
        scale: 0, 
        rotation: 180 
      },
      { 
        opacity: 1, 
        scale: 1, 
        rotation: 0, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: socialIcons,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      }
    );

   
    Array.from(socialIcons.children).forEach((icon) => {
      const iconHover = gsap.to(icon, {
        scale: 1.2,
        rotation: 360,
        duration: 0.5,
        ease: "back.out(1.7)",
        paused: true
      });

      icon.addEventListener('mouseenter', () => iconHover.play());
      icon.addEventListener('mouseleave', () => iconHover.reverse());
    });

    // Form input focus animations
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      const inputFocus = gsap.to(input, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
        paused: true
      });

      input.addEventListener('focus', () => inputFocus.play());
      input.addEventListener('blur', () => inputFocus.reverse());
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

 
  useEffect(() => {
    if (message) {
      const msgElement = document.getElementById('msg');
      if (msgElement) {
        gsap.fromTo(msgElement, 
          { 
            opacity: 0, 
            scale: 0.8 
          },
          { 
            opacity: 1, 
            scale: 1, 
            duration: 0.5, 
            ease: "back.out(1.7)" 
          }
        );
      }
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();  

    if (isSubmitting) {
      return; 
    }

    setIsSubmitting(true); 

    const form = e.target;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyrxzTJss3YvnV3xOhJfQoSb6T6rgIjGN4B_pkJWjrxA7FUx7pvP8E0bTaRge9sZUuFtg/exec';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        setMessage("Message sent successfully!"); 
        setTimeout(() => {
          setMessage(""); 
        }, 5000);

        form.reset();
        setIsSubmitting(false); 
      })
      .catch((error) => {
        console.error('Error!', error.message);
        setIsSubmitting(false); 
      });
  };

  return (
    <div className="contact" id="contact" ref={contactRef}>
      <div className="container">
        <div className="row">
          <div className="contactleft" ref={leftRef}>
            <h1 className="subtitle">Connect:</h1>
            <p className="email"><i className="fa-solid fa-envelope"></i><a href='mailto:devsrijit260705@gmail.com' >devsrijit260705@gmail.com</a> </p>
            <p><i className="fa-solid fa-phone"></i> +91 8088067470</p>
            <div className="socialicons" ref={socialIconsRef}>
              <a href="https://www.instagram.com/dev_o_o_2607?igsh=MXB0eTAwbWc1ZjY3OQ=="><i className="fa-brands fa-instagram"></i></a>
              <a href="https://x.com/Dev2607x?t=il1cE-1OF6F_0GaDavYjEg&s=08 "><i className="fa-brands fa-twitter-square"></i></a>
              <a href="https://www.linkedin.com/in/dev-srijit-7a8353295"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <a href="./Images/ResuME.pdf"  download className="btn btn2">Download Resume</a>
          </div>
          <div className="contactright" ref={rightRef}>
            <form name="submit-to-google-sheet" onSubmit={handleSubmit} ref={formRef}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button
                type="submit"
                className="btn btn2"
                disabled={isSubmitting} 
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            {message && <span id="msg">{message}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;




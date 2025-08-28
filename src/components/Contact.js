import React, { useState } from 'react';

const Contact = () => {
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(""); 

 
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
    <div className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="contactleft">
            <h1 className="subtitle">Connect:</h1>
            <p className="email"><i className="fa-solid fa-envelope"></i><a href='mailto:devsrijit260705@gmail.com' >devsrijit260705@gmail.com</a> </p>
            <p><i className="fa-solid fa-phone"></i> +91 8088067470</p>
            <div className="socialicons">
              <a href="https://www.instagram.com/dev_o_o_2607?igsh=MXB0eTAwbWc1ZjY3OQ=="><i className="fa-brands fa-instagram"></i></a>
              <a href="https://x.com/Dev2607x?t=il1cE-1OF6F_0GaDavYjEg&s=08 "><i className="fa-brands fa-twitter-square"></i></a>
              <a href="https://www.linkedin.com/in/dev-srijit-7a8353295"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <a href="./Images/ResuME.pdf"  download className="btn btn2">Download Resume</a>
          </div>
          <div className="contactright">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
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




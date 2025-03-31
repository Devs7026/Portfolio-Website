import React, { useState } from 'react';

const Contact = () => {
  // State to track form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(""); // State for the success message

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submit behavior

    if (isSubmitting) {
      return; // Prevent multiple submissions if already submitting
    }

    setIsSubmitting(true); // Set submitting state to true

    const form = e.target;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyrxzTJss3YvnV3xOhJfQoSb6T6rgIjGN4B_pkJWjrxA7FUx7pvP8E0bTaRge9sZUuFtg/exec';

    // Send data to Google Sheets using fetch
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        setMessage("Message sent successfully!"); // Set success message
        setTimeout(() => {
          setMessage(""); // Clear message after 5 seconds
        }, 5000);

        // Reset form after submission (optional)
        form.reset();
        setIsSubmitting(false); // Reset submitting state after form is submitted
      })
      .catch((error) => {
        console.error('Error!', error.message);
        setIsSubmitting(false); // Reset submitting state on error
      });
  };

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="contactleft">
            <h1 className="subtitle">Connect:</h1>
            <p><i className="fa-solid fa-envelope"></i> devsrijit260705@gmail.com</p>
            <p><i className="fa-solid fa-phone"></i> +91 8088067470</p>
            <div className="socialicons">
              <a href="https://www.instagram.com/dev_o_o_2607?igsh=MXB0eTAwbWc1ZjY3OQ=="><i className="fa-brands fa-instagram"></i></a>
              <a href="https://x.com/Dev2607x?t=il1cE-1OF6F_0GaDavYjEg&s=08 "><i className="fa-brands fa-twitter-square"></i></a>
              <a href="https://www.linkedin.com/in/dev-srijit-7a8353295"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            <a href="./Images/Resume.pdf"  download className="btn btn2">Download CV</a>
          </div>
          <div className="contactright">
            <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button
                type="submit"
                className="btn btn2"
                disabled={isSubmitting} // Disable submit button while submitting
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            {/* Display success message */}
            {message && <span id="msg">{message}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;




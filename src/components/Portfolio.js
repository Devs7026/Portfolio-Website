import React from 'react'
import pic1 from '../Images/code1.jpeg'
import pic2 from '../Images/code2.jpeg'
import pic3 from '../Images/code3.jpeg'

const Portfolio=() => {
  return (
    <div className="portfolio" id="portfolio">
        <div className="container">
            <h1 className="subtitle">My Work</h1>
            <div className="worklist">
                <div className="work">
                  <img src={pic1} alt="randomimg"></img>
                  <div className="layer">
                    <h3>HealthCare App</h3>
                     <p>A simple diet tracking along with symptoms log that tells you what foods are potential triggers for particular chronic health conditions.</p>
                     <a href="https://github.com/Devs7026/HealthCare.git"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                </div>
                <div className="work">
                  <img src={pic2} alt="randomimg"></img>
                  <div className="layer">
                    <h3>Stock Price Predictor</h3>
                     <p>Stock price predictor using LSTM to predict next day price.</p>
                     <a href="https://github.com/Devs7026/AIML-Projects.git"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                </div>
                <div className="work">
                  <img src={pic3} alt="randomimg"></img>
                  <div className="layer">
                    <h3>Student Database Management System</h3>
                     <p>SDBMS using Django templates.</p>
                     <a href="https://github.com/Devs7026/Mini-Project-DBS.git"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                </div>

            </div>
             <a href="https://github.com/Devs7026" className="btn">See More</a>
             <h1 className="certi">Licenses & Certifications</h1>
        </div>
    </div>
  );
}

export default Portfolio;

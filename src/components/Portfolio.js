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
                    <h3>Project under Work!</h3>
                     <p>Project yet to be made.Work under progress</p>
                     <a href="/"><i class="fa-solid fa-wrench"></i></a>
                  </div>
                </div>
                <div className="work">
                  <img src={pic2} alt="randomimg"></img>
                  <div className="layer">
                    <h3>Project under Work!</h3>
                     <p>Project yet to be made.Work under progress</p>
                     <a href="/"><i class="fa-solid fa-wrench"></i></a>
                  </div>
                </div>
                <div className="work">
                  <img src={pic3} alt="randomimg"></img>
                  <div className="layer">
                    <h3>GitHub</h3>
                     <p>Check out more of my Projects on GitHub</p>
                     <a href="https://github.com/Devs7026"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                </div>

            </div>
             <a href="/" className="btn">See More</a>
        </div>
    </div>
  );
}

export default Portfolio;

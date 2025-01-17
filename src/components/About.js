import React from 'react';
import pic from '../Images/Backgnd.jpeg';

const About = () => {
    function opentab(event, tabname) {
        let tablinks = document.getElementsByClassName("tablinks");
        let tabcontents = document.getElementsByClassName("tabcontents");

        for (let tablink of tablinks) {
            tablink.classList.remove("activelink");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("activetab");
        }
        document.getElementById(tabname).classList.add("activetab");
        event.currentTarget.classList.add("activelink");
    }

    return (
        <div className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col1">
                        <img src={pic} alt="imageslider"></img>
                    </div>
                    <div className="col2">
                        <h1 className="subtitle">About Me</h1>
                        <p>
                            Hi, I'm Dev Srijit, passionate about web development and diving into the fascinating world of AI and machine learning. Whether I'm coding dynamic websites or exploring cutting-edge AI technologies, I love turning ideas into reality and continuously learning along the way. I always try to be consistent and work hard to achieve my goals.
                        </p>
                        <div className="tabtitles">
                            <p className="tablinks activelink" onClick={(e) => opentab(e, 'skills')}>Skills</p>
                            <p className="tablinks" onClick={(e) => opentab(e, 'experience')}>Experience</p>
                            <p className="tablinks" onClick={(e) => opentab(e, 'education')}>Education</p>
                        </div>
                        <div className="tabcontents activetab" id="skills">
                            <ul>
                                <li><span>Web Development</span><br></br>Web app development</li>
                                <li><span>UI/UX</span><br></br>Designing Web/App interfaces</li>
                                <li><span>App development</span><br></br>Building Android/iOS apps</li>
                            </ul>
                        </div>
                        <div className="tabcontents" id="experience">
                            <ul>
                                <li><span>2024 May-Jul</span><br></br>Cyber Security Intern at CISCO</li>
                                <li><span>2023-present</span><br></br>Learning Web Development</li>
                            </ul>
                        </div>
                        <div className="tabcontents" id="education">
                            <ul>
                                <li><span>2023-2027</span><br></br>Btech from Manipal Institute of Technology Bengaluru</li>
                                <li><span>2021-2023</span><br></br>+2 from Chethana P.U College</li>
                                <li><span>2013-2021</span><br></br>Studied at Presidency School Bangalore North</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

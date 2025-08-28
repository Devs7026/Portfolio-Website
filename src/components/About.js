import React, { useState } from 'react';
import pic from '../Images/Backgnd.jpeg';


const skillBadges = [
  {
    name: "JavaScript",
    url: "https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript",
  },
  {
    name: "TypeScript",
    url: "https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript",
  },
  {
    name: "Next.js",
    url: "https://img.shields.io/badge/-Next.js-black?style=flat-square&logo=next.js",
  },
  {
    name: "Python",
    url: "https://img.shields.io/badge/-Python-black?style=flat-square&logo=python",
  },
  {
    name: "Java",
    url: "https://img.shields.io/badge/-Java-black?style=flat-square&logo=java",
  },
  {
    name: "C/C++",
    url: "https://img.shields.io/badge/-C/C++-black?style=flat-square&logo=c",
  },
  {
    name: "React",
    url: "https://img.shields.io/badge/-React-black?style=flat-square&logo=react",
  },
  {
    name: "Node.js",
    url: "https://img.shields.io/badge/-Node.js-black?style=flat-square&logo=node.js",
  },
  {
    name: "Express.js",
    url: "https://img.shields.io/badge/-Express.js-black?style=flat-square&logo=express",
  },
  {
    name: "HTML5",
    url: "https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5",
  },
  {
    name: "CSS3",
    url: "https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3",
  },
  {
    name: "Django",
    url: "https://img.shields.io/badge/-Django-black?style=flat-square&logo=django",
  },
  {
    name: "MongoDB",
    url: "https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb",
  },
  {
    name: "MySQL",
    url: "https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql",
  },
  {
    name: "Figma",
    url: "https://img.shields.io/badge/-Figma-black?style=flat-square&logo=figma",
  },
  {
    name: "Git",
    url: "https://img.shields.io/badge/-Git-black?style=flat-square&logo=git",
  },
  {
    name: "Tailwind CSS",
    url: "https://img.shields.io/badge/-Tailwind%20CSS-black?style=flat-square&logo=tailwind-css",
  },
];

const tabData = [
  {
    label: "Skills",
    key: "skills",
    content: (
      <div style={{ marginTop: "1rem" }}>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}>
          {skillBadges.map((badge) => (
            <img
              key={badge.name}
              src={badge.url}
              alt={badge.name}
              style={{ height: "28px" }}
            />
          ))}
        </div>
        <ul style={{ marginTop: "1.5rem" }}>
          <li><span className="highlight">Web Development</span> — Web app development</li>
          <li><span className="highlight">UI/UX</span> — Designing Web/App interfaces</li>
          <li><span className="highlight">App Development</span> — Building Android/iOS apps</li>
        </ul>
      </div>
    ),
  },
  {
    label: "Experience",
    key: "experience",
    content: (
      <ul style={{ marginTop: "1.5rem" }}>
        <li><span className="highlight">2024 May-Jul</span> — Cyber Security Intern at CISCO</li>
        <li><span className="highlight">2025 May-June</span> — AIML Intern at Elevate Labs</li>
        <li><span className="highlight">2025 June-July</span> — Frontend Developer Intern at Diggaj Coder</li>
      </ul>
    ),
  },
  {
    label: "Education",
    key: "education",
    content: (
      <ul style={{ marginTop: "1.5rem" }}>
        <li><span className="highlight">2023-2027</span> — BTech from Manipal Institute of Technology Bengaluru</li>
        <li><span className="highlight">2021-2023</span> — +2 from Chethana P.U College</li>
        <li><span className="highlight">2013-2021</span> — Presidency School Bangalore North</li>
      </ul>
    ),
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div className="about" id="about" style={{
      background: "black",
      color: "#fff",
      padding: "3rem 0",
      minHeight: "100vh",
      fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif"
    }}>
      <div className="container" style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 1.5rem",
      }}>
        <div className="row" style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "center",
        }}>
          <div className="col1" style={{
            flex: "1 1 350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <img
              src={pic}
              alt="About"
              style={{
                width: "320px",
                height: "450px",
                objectFit: "cover",
                borderRadius: "1.5rem",
                boxShadow: "0 6px 24px black",
                border: "4px"
              }}
            />
          </div>
          <div className="col2" style={{
            flex: "2 1 500px",
            background: "rgba(30,30,40,0.85)",
            borderRadius: "1.2rem",
            padding: "2.5rem 2rem",
            boxShadow: "0 2px 16px rgba(0,0,0,0.15)",
            minWidth: "320px"
          }}>
            <h1 className="subtitle" style={{
              fontSize: "2.3rem",
              fontWeight: "bold",
              marginBottom: "1.2rem",
              letterSpacing: "-1px",
              color: "White"
            }}>About Me</h1>
            <p style={{
              fontSize: "1.18rem",
              lineHeight: "1.7",
              marginBottom: "2.2rem",
              color: "#e0e0e0"
            }}>
              Hi, I'm <span style={{ color: "rgb(203, 11, 11)", fontWeight: 600 }}>Dev Srijit</span>, passionate about web development and diving into the fascinating world of AI and machine learning. Whether I'm coding dynamic websites or exploring cutting-edge AI technologies, I love turning ideas into reality and continuously learning along the way. I always try to be consistent and work hard to achieve my goals.Currently Learning Cloud Computing and Spring Boot.
            </p>
            <div className="tabtitles" style={{
              display: "flex",
              gap: "1.5rem",
              marginBottom: "1.2rem",
              borderBottom: "1.5px solid #222",
              paddingBottom: "0.5rem"
            }}>
              {tabData.map(tab => (
                <button
                  key={tab.key}
                  className={`tablinks${activeTab === tab.key ? " activelink" : ""}`}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    background: "none",
                    border: "none",
                    color: activeTab === tab.key ? "#00e6d3" : "#bbb",
                    fontWeight: activeTab === tab.key ? "bold" : "normal",
                    fontSize: "1.08rem",
                    padding: "0.4rem 1.1rem",
                    borderBottom: activeTab === tab.key ? "2.5px solid #00e6d3" : "2.5px solid transparent",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="tabcontent" style={{
              minHeight: "120px",
              marginTop: "0.5rem",
              fontSize: "1.08rem"
            }}>
              {tabData.find(tab => tab.key === activeTab)?.content}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        @media (max-width: 900px) {
          .about .row {
            flex-direction: column;
            gap: 2.5rem;
          }
          .about .col1 img {
            width: 220px !important;
            height: 220px !important;
          }
        }
        .highlight {
          color:rgb(203, 11, 11);
          font-weight: 600;
        }
        `}
      </style>
    </div>
  );
};

export default About;

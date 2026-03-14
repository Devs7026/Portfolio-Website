import React, { useState } from 'react';
import pic from '../Images/Backgnd.jpeg';

const skillBadges = [
  { name: "JavaScript", url: "https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript" },
  { name: "TypeScript", url: "https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript" },
  { name: "Next.js", url: "https://img.shields.io/badge/-Next.js-black?style=flat-square&logo=next.js" },
  { name: "Python", url: "https://img.shields.io/badge/-Python-black?style=flat-square&logo=python" },
  { name: "Java", url: "https://img.shields.io/badge/-Java-black?style=flat-square&logo=java" },
  { name: "C/C++", url: "https://img.shields.io/badge/-C/C++-black?style=flat-square&logo=c" },
  { name: "React", url: "https://img.shields.io/badge/-React-black?style=flat-square&logo=react" },
  { name: "Node.js", url: "https://img.shields.io/badge/-Node.js-black?style=flat-square&logo=node.js" },
  { name: "Express.js", url: "https://img.shields.io/badge/-Express.js-black?style=flat-square&logo=express" },
  { name: "HTML5", url: "https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5" },
  { name: "CSS3", url: "https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3" },
  { name: "Django", url: "https://img.shields.io/badge/-Django-black?style=flat-square&logo=django" },
  { name: "MongoDB", url: "https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb" },
  { name: "MySQL", url: "https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql" },
  { name: "Figma", url: "https://img.shields.io/badge/-Figma-black?style=flat-square&logo=figma" },
  { name: "Git", url: "https://img.shields.io/badge/-Git-black?style=flat-square&logo=git" },
  { name: "Tailwind CSS", url: "https://img.shields.io/badge/-Tailwind%20CSS-black?style=flat-square&logo=tailwind-css" },
];

const tabData = [
  {
    label: "Skills",
    key: "skills",
    icon: "⚡",
    content: (
      <div>
        <div className="about-badges">
          {skillBadges.map((badge) => (
            <img key={badge.name} src={badge.url} alt={badge.name} className="skill-badge" />
          ))}
        </div>
        <ul className="about-list">
          <li><span className="about-highlight">Web Development</span> — Web app development</li>
          <li><span className="about-highlight">UI/UX</span> — Designing Web/App interfaces</li>
          <li><span className="about-highlight">App Development</span> — Building Android/iOS apps</li>
        </ul>
      </div>
    ),
  },
  {
    label: "Experience",
    key: "experience",
    icon: "💼",
    content: (
      <ul className="about-list">
        <li><span className="about-highlight">2024 May–Jul</span> — Cyber Security Intern at CISCO</li>
        <li><span className="about-highlight">2025 May–Jun</span> — AIML Intern at Elevate Labs</li>
        <li><span className="about-highlight">2025 Jun–Jul</span> — Frontend Developer Intern at Diggaj Coder</li>
      </ul>
    ),
  },
  {
    label: "Education",
    key: "education",
    icon: "🎓",
    content: (
      <ul className="about-list">
        <li><span className="about-highlight">2023–2027</span> — BTech from Manipal Institute of Technology Bengaluru</li>
        <li><span className="about-highlight">2021–2023</span> — +2 from Chethana P.U College</li>
        <li><span className="about-highlight">2013–2021</span> — Presidency School Bangalore North</li>
      </ul>
    ),
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="about-section" id="about">
      <style>{`
        .about-section {
          background: #0a0a0a;
          color: #fff;
          padding: 6rem 2rem;
          min-height: 100vh;
          font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(203,11,11,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-section::after {
          content: '';
          position: absolute;
          bottom: -200px;
          left: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0,230,211,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          gap: 3.5rem;
          align-items: flex-start;
          flex-wrap: wrap;
        }

        .about-label {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: rgb(203,11,11);
          margin-bottom: 0.75rem;
        }

        .about-section-title {
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -1.5px;
          background: linear-gradient(135deg, #fff 0%, #888 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* LEFT: Image column */
        .about-image-col {
          flex: 0 0 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.2rem;
          position: sticky;
          top: 100px;
        }

        .about-img-wrapper {
          position: relative;
          width: 280px;
        }

        .about-img-wrapper::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 1.5rem;
          background: linear-gradient(135deg, rgb(203,11,11), #ff6b35, #00e6d3);
          z-index: 0;
        }

        .about-img-wrapper img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          border-radius: 1.4rem;
          position: relative;
          z-index: 1;
          display: block;
        }

        .about-status-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          padding: 0.4rem 1rem;
          font-size: 0.85rem;
          color: #aaa;
          backdrop-filter: blur(10px);
        }

        .about-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #00e6d3;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }

        .about-status-badges {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: center;
          width: 100%;
        }

        /* RIGHT: Content column */
        .about-content-col {
          flex: 1 1 500px;
          min-width: 300px;
        }

        .about-bio {
          font-size: 1.05rem;
          line-height: 1.85;
          color: #999;
          margin-bottom: 2.5rem;
          border-left: 3px solid rgb(203,11,11);
          padding-left: 1.2rem;
        }

        .about-bio strong {
          color: #fff;
          font-weight: 600;
        }

        /* Tabs */
        .about-tabs {
          display: flex;
          gap: 0;
          margin-bottom: 0;
          background: rgba(255,255,255,0.04);
          border-radius: 0.75rem 0.75rem 0 0;
          border: 1px solid rgba(255,255,255,0.08);
          border-bottom: none;
          overflow: hidden;
        }

        .about-tab-btn {
          flex: 1;
          background: none;
          border: none;
          color: #666;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 0.85rem 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: inherit;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          border-right: 1px solid rgba(255,255,255,0.06);
        }

        .about-tab-btn:last-child {
          border-right: none;
        }

        .about-tab-btn.active {
          background: rgba(203,11,11,0.15);
          color: #fff;
          border-bottom: 2px solid rgb(203,11,11);
        }

        .about-tab-btn:hover:not(.active) {
          background: rgba(255,255,255,0.05);
          color: #ccc;
        }

        .about-tab-content {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 0 0 0.75rem 0.75rem;
          padding: 1.8rem;
          min-height: 200px;
        }

        .about-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1.5rem;
        }

        .skill-badge {
          height: 26px;
          border-radius: 4px;
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.85;
        }

        .skill-badge:hover {
          transform: translateY(-2px);
          opacity: 1;
        }

        .about-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .about-list li {
          color: #aaa;
          font-size: 0.98rem;
          line-height: 1.5;
          padding: 0.75rem 1rem;
          background: rgba(255,255,255,0.03);
          border-radius: 0.5rem;
          border: 1px solid rgba(255,255,255,0.06);
          transition: background 0.2s;
        }

        .about-list li:hover {
          background: rgba(255,255,255,0.06);
        }

        .about-highlight {
          color: rgb(203,11,11);
          font-weight: 700;
          font-size: 0.88rem;
          display: inline-block;
          margin-right: 0.4rem;
        }

        @media (max-width: 860px) {
          .about-section {
            padding: 3rem 1rem;
          }

          .about-inner {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }

          .about-image-col {
            position: static;
            flex: none;
            width: 100%;
            gap: 1rem;
          }

          .about-img-wrapper {
            width: 240px;
            max-width: 100%;
          }

          .about-img-wrapper img {
            height: 300px;
          }

          .about-section-title {
            font-size: 2rem;
          }

          .about-label {
            font-size: 0.7rem;
            letter-spacing: 2px;
          }

          .about-bio {
            font-size: 0.95rem;
            padding-left: 1rem;
            margin-bottom: 2rem;
          }

          .about-tabs {
            flex-direction: column;
            border-radius: 0.75rem;
            border: 1px solid rgba(255,255,255,0.08);
          }

          .about-tab-btn {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            padding: 0.75rem 1rem;
            font-size: 0.85rem;
          }

          .about-tab-btn:last-child {
            border-bottom: none;
          }

          .about-tab-content {
            padding: 1.2rem;
          }

          .about-badges {
            gap: 0.35rem;
          }

          .skill-badge {
            height: 22px;
          }

          .about-list li {
            font-size: 0.9rem;
            padding: 0.6rem 0.8rem;
          }

          .about-highlight {
            font-size: 0.82rem;
            display: block;
            margin-bottom: 0.3rem;
          }

          .about-status-badge {
            font-size: 0.8rem;
            padding: 0.35rem 0.85rem;
          }

          .about-status-badges {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
            width: 100%;
            max-width: 280px;
          }

          .about-status-badges strong {
            font-size: 0.85rem !important;
            line-height: 1.4;
          }
        }

        @media (max-width: 480px) {
          .about-section {
            padding: 2rem 0.75rem;
          }

          .about-img-wrapper {
            width: 200px;
          }

          .about-img-wrapper img {
            height: 260px;
          }

          .about-section-title {
            font-size: 1.6rem;
            margin-bottom: 1rem;
          }

          .about-bio {
            font-size: 0.9rem;
            line-height: 1.7;
          }

          .about-tab-btn {
            font-size: 0.8rem;
            padding: 0.65rem 0.85rem;
          }

          .about-tab-content {
            padding: 1rem;
          }

          .about-badges {
            gap: 0.3rem;
          }

          .skill-badge {
            height: 20px;
          }

          .about-list li {
            font-size: 0.85rem;
            padding: 0.5rem 0.7rem;
          }

          .about-status-badges {
            max-width: 100%;
            padding: 0 1rem;
          }

          .about-status-badges strong {
            font-size: 0.8rem !important;
          }
        }
      `}</style>

      <div className="about-inner">
        {/* Left: Image */}
        <div className="about-image-col">
          <div className="about-img-wrapper">
            <img src={pic} alt="About Dev Srijit" />
          </div>
          <div className="about-status-badge">
            <span className="about-status-dot"></span>
            Available for work
          </div>
          <div className="about-status-badges">
            <strong style={{ color: '#fff', marginTop: '0.4rem', fontSize: '0.9rem' }}>
              Core Skill: <span style={{ color: 'rgb(203,11,11)' }}>Java</span>
            </strong>
            <strong style={{ color: '#fff', marginTop: '0.4rem', fontSize: '0.9rem' }}>
              Currently Learning: <span style={{ color: 'rgb(203,11,11)' }}>System Design, Building Scalable Systems</span>
            </strong>
          </div>
        </div>

        {/* Right: Content */}
        <div className="about-content-col">
          <p className="about-label">Who I Am</p>
          <h1 className="about-section-title">About Me</h1>

          <p className="about-bio">
            Hi, I'm <strong>Dev Srijit</strong>, passionate about web development and diving into the fascinating world of AI and machine learning.
            Whether I'm coding dynamic websites or exploring cutting-edge AI technologies, I love turning ideas into reality and continuously learning along the way.
            I always try to be consistent and work hard to achieve my goals. Currently Learning Cloud Computing and Spring Boot.
          </p>

          {/* Tabs */}
          <div className="about-tabs">
            {tabData.map(tab => (
              <button
                key={tab.key}
                className={`about-tab-btn${activeTab === tab.key ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.key)}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
          <div className="about-tab-content">
            {tabData.find(tab => tab.key === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

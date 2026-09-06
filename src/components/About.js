import React, { useState } from 'react';
import portfolioConfig from '../portfolio.config';
import DeveloperTerminal from './DeveloperTerminal';

const { profile, skills, experience, education } = portfolioConfig;

/* ── Derive bio parts to bold the name inline ── */
const bioParts = profile.bioText.split(profile.name);

/* ── Tab definitions — content built from config arrays ── */
const tabData = [
  {
    label: "Skills",
    key: "skills",
    icon: "⚡",
    content: (
      <div>
        <div className="about-badges">
          {skills.map((badge) => (
            <img
              key={badge.name}
              src={badge.url}
              alt={badge.name}
              className="skill-badge"
            />
          ))}
        </div>
        <ul className="about-list">
          <li>
            <span className="about-highlight">Web Development</span>
            — Web app development
          </li>
          <li>
            <span className="about-highlight">UI/UX</span>
            — Designing Web/App interfaces
          </li>
          <li>
            <span className="about-highlight">App Development</span>
            — Building Android/iOS apps
          </li>
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
        {experience.map((item) => (
          <li key={item.period}>
            <span className="about-highlight">{item.period}</span>
            — {item.role} at {item.company}
          </li>
        ))}
      </ul>
    ),
  },
  {
    label: "Education",
    key: "education",
    icon: "🎓",
    content: (
      <ul className="about-list">
        {education.map((item) => (
          <li key={item.period}>
            <span className="about-highlight">{item.period}</span>
            — {item.degree} from {item.institution}
          </li>
        ))}
      </ul>
    ),
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        {/* Left: Interactive Developer Terminal Card */}
        <div className="about-image-col">
          <DeveloperTerminal />
          <div className="about-status-badge">
            <span className="about-status-dot" />
            {profile.availableForWork ? "Available for work" : "Not available"}
          </div>
          <div className="about-status-badges">
            <strong style={{ color: '#fff', marginTop: '0.4rem', fontSize: '0.9rem' }}>
              Core Skill:{' '}
              <span className="about-accent-highlight">{profile.coreSkill}</span>
            </strong>
            <strong style={{ color: '#fff', marginTop: '0.4rem', fontSize: '0.9rem' }}>
              Currently Learning:{' '}
              <span className="about-accent-highlight">{profile.currentlyLearning}</span>
            </strong>
          </div>
        </div>

        {/* Right: Content */}
        <div className="about-content-col">
          <p className="about-label">Who I Am</p>
          <h1 className="about-section-title">About Me</h1>

          <p className="about-bio">
            {bioParts[0]}
            <strong>{profile.name}</strong>
            {bioParts[1]}
          </p>

          {/* Tabs */}
          <div className="about-tabs">
            {tabData.map((tab) => (
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
            {tabData.find((tab) => tab.key === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

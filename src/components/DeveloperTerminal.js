import React, { useState } from 'react';
import './DeveloperTerminal.css';
import portfolioConfig from '../portfolio.config';

const { profile } = portfolioConfig;

const CODE_SNIPPETS = {
  profile: `// devsrijit.ts
interface Developer {
  name: string;
  role: string;
  core: string;
  location: string;
  passions: string[];
  status: string;
}

const engineer: Developer = {
  name: "${profile.name}",
  role: "${profile.tagline}",
  core: "${profile.coreSkill} & Distributed Systems",
  location: "Bengaluru, India 🇮🇳",
  passions: [
    "Scalable Architectures",
    "AI/ML Pipelines",
    "Human-Centric UI/UX"
  ],
  status: "${profile.availableForWork ? "🟢 Open to opportunities" : "🔴 Busy"}"
};

export default engineer;`,

  stack: `// tech-stack.json
{
  "languages": ["Java", "TypeScript", "Python", "C++", "SQL"],
  "frameworks": ["Spring Boot", "React", "Next.js", "FastAPI"],
  "data_and_ai": ["PostgreSQL", "Supabase", "Kafka", "Gemini API"],
  "design": ["Figma", "UI/UX Prototyping", "Design Systems"],
  "tools": ["Git", "Docker", "AWS", "Linux", "REST APIs"]
}`,

  stats: `# terminal.sh
$ dev-srijit --overview
✔ Top 10 Nationwide: Deloitte USI Capstone 2026
✔ 1st Place Winner: Aptiv Ideathon
✔ Top 20 Finalist: Tally Code Brewers
✔ 500+ Algorithmic Challenges Solved
✔ 365 Days Active LeetCode Streak
$ echo $MOTTO
"Turning Ideas into Scalable Impact ⚡"`
};

const DeveloperTerminal = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(CODE_SNIPPETS[activeTab]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="dev-terminal-wrapper">
      <div className="dev-terminal-card">
        {/* Terminal Window Chrome */}
        <div className="dev-terminal-header">
          <div className="terminal-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>

          <div className="terminal-tabs">
            <button
              type="button"
              className={`term-tab ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
              aria-label="View TypeScript profile"
            >
              <i className="fa-brands fa-js term-tab-icon ts-color" />
              <span>devsrijit.ts</span>
            </button>
            <button
              type="button"
              className={`term-tab ${activeTab === 'stack' ? 'active' : ''}`}
              onClick={() => setActiveTab('stack')}
              aria-label="View tech stack JSON"
            >
              <i className="fa-solid fa-code term-tab-icon json-color" />
              <span>stack.json</span>
            </button>
            <button
              type="button"
              className={`term-tab ${activeTab === 'stats' ? 'active' : ''}`}
              onClick={() => setActiveTab('stats')}
              aria-label="View terminal metrics"
            >
              <i className="fa-solid fa-terminal term-tab-icon sh-color" />
              <span>stats.sh</span>
            </button>
          </div>

          <button
            type="button"
            className="terminal-copy-btn"
            onClick={handleCopy}
            title="Copy snippet"
            aria-label="Copy snippet"
          >
            {copied ? (
              <span className="copied-text"><i className="fa-solid fa-check" /> Copied!</span>
            ) : (
              <i className="fa-regular fa-copy" />
            )}
          </button>
        </div>

        {/* Terminal Code Display */}
        <div className="dev-terminal-body">
          <pre className="terminal-code">
            <code>
              {activeTab === 'profile' && (
                <>
                  <span className="c-comment">{'// devsrijit.ts'}</span>{'\n'}
                  <span className="c-keyword">interface</span> <span className="c-type">Developer</span> {'{\n'}
                  {'  '}<span className="c-prop">name</span>: <span className="c-type">string</span>;{'\n'}
                  {'  '}<span className="c-prop">role</span>: <span className="c-type">string</span>;{'\n'}
                  {'  '}<span className="c-prop">core</span>: <span className="c-type">string</span>;{'\n'}
                  {'  '}<span className="c-prop">location</span>: <span className="c-type">string</span>;{'\n'}
                  {'  '}<span className="c-prop">passions</span>: <span className="c-type">string</span>[];{'\n'}
                  {'  '}<span className="c-prop">status</span>: <span className="c-type">string</span>;{'\n'}
                  {'}\n\n'}
                  <span className="c-keyword">const</span> <span className="c-var">engineer</span>: <span className="c-type">Developer</span> = {'{\n'}
                  {'  '}<span className="c-prop">name</span>: <span className="c-string">"{profile.name}"</span>,{'\n'}
                  {'  '}<span className="c-prop">role</span>: <span className="c-string">"{profile.tagline}"</span>,{'\n'}
                  {'  '}<span className="c-prop">core</span>: <span className="c-string">"{profile.coreSkill} & Systems"</span>,{'\n'}
                  {'  '}<span className="c-prop">location</span>: <span className="c-string">"Bengaluru, India 🇮🇳"</span>,{'\n'}
                  {'  '}<span className="c-prop">passions</span>: [{'\n'}
                  {'    '}<span className="c-string">"Scalable Architectures"</span>,{'\n'}
                  {'    '}<span className="c-string">"AI/ML Pipelines"</span>,{'\n'}
                  {'    '}<span className="c-string">"Human-Centric UI/UX"</span>{'\n'}
                  {'  '}],{'\n'}
                  {'  '}<span className="c-prop">status</span>: <span className="c-accent">"{profile.availableForWork ? "🟢 Open to opportunities" : "🔴 Busy"}"</span>{'\n'}
                  {'};\n\n'}
                  <span className="c-keyword">export default</span> <span className="c-var">engineer</span>;
                </>
              )}

              {activeTab === 'stack' && (
                <>
                  <span className="c-comment">{'// tech-stack.json'}</span>{'\n'}
                  {`{\n`}
                  {'  '}<span className="c-prop">"languages"</span>: [<span className="c-string">"Java"</span>, <span className="c-string">"TypeScript"</span>, <span className="c-string">"Python"</span>, <span className="c-string">"C++"</span>],{'\n'}
                  {'  '}<span className="c-prop">"backend"</span>: [<span className="c-string">"Spring Boot"</span>, <span className="c-string">"FastAPI"</span>, <span className="c-string">"PostgreSQL"</span>],{'\n'}
                  {'  '}<span className="c-prop">"frontend"</span>: [<span className="c-string">"React"</span>, <span className="c-string">"Next.js"</span>, <span className="c-string">"Tailwind CSS"</span>],{'\n'}
                  {'  '}<span className="c-prop">"ai_and_data"</span>: [<span className="c-string">"Supabase"</span>, <span className="c-string">"Gemini API"</span>, <span className="c-string">"Kafka"</span>],{'\n'}
                  {'  '}<span className="c-prop">"design"</span>: [<span className="c-string">"Figma"</span>, <span className="c-string">"UI/UX Prototyping"</span>],{'\n'}
                  {'  '}<span className="c-prop">"tools"</span>: [<span className="c-string">"Git"</span>, <span className="c-string">"Docker"</span>, <span className="c-string">"AWS"</span>, <span className="c-string">"Linux"</span>]{'\n'}
                  {`}`}
                </>
              )}

              {activeTab === 'stats' && (
                <>
                  <span className="c-comment">{'# terminal.sh'}</span>{'\n'}
                  <span className="c-prompt">$</span> <span className="c-cmd">dev-srijit --highlights</span>{'\n'}
                  <span className="c-output">✔ Top 10 Nationwide: Deloitte USI Capstone 2026</span>{'\n'}
                  <span className="c-output">✔ 1st Place Winner: Aptiv Ideathon</span>{'\n'}
                  <span className="c-output">✔ Top 20 Finalist: Tally Code Brewers</span>{'\n'}
                  <span className="c-output">✔ 500+ Algorithmic Challenges Solved</span>{'\n'}
                  <span className="c-output">✔ 365 Days Active LeetCode Streak</span>{'\n\n'}
                  <span className="c-prompt">$</span> <span className="c-cmd">echo $MOTTO</span>{'\n'}
                  <span className="c-accent">"Turning Ideas into Scalable Impact ⚡"</span>
                </>
              )}
              <span className="terminal-cursor">|</span>
            </code>
          </pre>
        </div>

        {/* Live Interactive Footer Chips */}
        <div className="dev-terminal-footer">
          <div className="term-chip">
            <span className="term-chip-dot green" />
            <span>Spring Boot</span>
          </div>
          <div className="term-chip">
            <span className="term-chip-dot orange" />
            <span>500+ LeetCode</span>
          </div>
          <div className="term-chip">
            <span className="term-chip-dot cyan" />
            <span>Figma UI/UX</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperTerminal;

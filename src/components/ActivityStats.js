import React, { useState, useEffect, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './ActivityStats.css';
import initialStatsData from '../codingStatsData.json';
import portfolioConfig from '../portfolio.config';

const { social } = portfolioConfig;

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Color scale mappings for each tab
const COLOR_SCALES = {
  combined: [
    'rgba(255, 255, 255, 0.04)', // 0: empty
    'rgba(0, 230, 211, 0.28)',   // 1: low
    'rgba(0, 230, 211, 0.55)',   // 2: medium
    '#00e6d3',                   // 3: high
    '#ff0055',                   // 4: peak
  ],
  leetcode: [
    'rgba(255, 255, 255, 0.04)', // 0: empty
    'rgba(255, 161, 22, 0.3)',   // 1: low
    'rgba(255, 161, 22, 0.6)',   // 2: medium
    '#ffa116',                   // 3: high
    '#ff6a00',                   // 4: peak
  ],
  github: [
    'rgba(255, 255, 255, 0.04)', // 0: empty
    'rgba(38, 166, 65, 0.35)',   // 1: low
    'rgba(38, 166, 65, 0.65)',   // 2: medium
    '#26a641',                   // 3: high
    '#39d353',                   // 4: peak
  ],
};

function getLevel(count, mode) {
  if (!count || count <= 0) return 0;
  if (mode === 'combined') {
    if (count <= 2) return 1;
    if (count <= 4) return 2;
    if (count <= 7) return 3;
    return 4;
  }
  if (mode === 'leetcode') {
    if (count <= 1) return 1;
    if (count <= 3) return 2;
    if (count <= 5) return 3;
    return 4;
  }
  // github
  if (count <= 1) return 1;
  if (count <= 2) return 2;
  if (count <= 4) return 3;
  return 4;
}

const ActivityStats = () => {
  const prefersReduced = useReducedMotion();
  const [statsData, setStatsData] = useState(initialStatsData);
  const [activeTab, setActiveTab] = useState('combined'); // 'combined' | 'leetcode' | 'github'
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: null });
  const [isLiveSynced, setIsLiveSynced] = useState(false);

  // Background fetch to update summary and calendar matrix with live data
  useEffect(() => {
    const controller = new AbortController();

    async function fetchLiveMetrics() {
      try {
        const [lcRes, ghRes] = await Promise.allSettled([
          fetch('https://alfa-leetcode-api.onrender.com/userProfile/7ICNbRHRSu', {
            signal: controller.signal,
          }).then((r) => (r.ok ? r.json() : null)),
          fetch('https://github-contributions-api.jogruber.de/v4/Devs7026?y=last', {
            signal: controller.signal,
          }).then((r) => (r.ok ? r.json() : null)),
        ]);

        const lcData = lcRes.status === 'fulfilled' ? lcRes.value : null;
        const ghData = ghRes.status === 'fulfilled' ? ghRes.value : null;

        if (lcData || ghData) {
          setStatsData((prev) => {
            const updated = { ...prev };
            const updatedSummary = { ...prev.summary };
            const updatedCalendar = { ...(prev.calendar || {}) };

            // Update GitHub metrics and daily contribution counts
            if (ghData) {
              if (ghData.total && ghData.total.lastYear) {
                updatedSummary.githubContributions = ghData.total.lastYear;
              }
              if (Array.isArray(ghData.contributions)) {
                ghData.contributions.forEach((item) => {
                  if (item && item.date) {
                    const existing = updatedCalendar[item.date] || { github: 0, leetcode: 0, total: 0 };
                    const ghCount = item.count || 0;
                    updatedCalendar[item.date] = {
                      ...existing,
                      github: ghCount,
                      total: ghCount + (existing.leetcode || 0),
                    };
                  }
                });
              }
            }

            // Update LeetCode metrics and daily submission calendar
            if (lcData) {
              if (lcData.totalSolved) {
                updatedSummary.leetcodeSolved = lcData.totalSolved;
                updatedSummary.leetcodeEasy = lcData.easySolved || updatedSummary.leetcodeEasy;
                updatedSummary.leetcodeMedium = lcData.mediumSolved || updatedSummary.leetcodeMedium;
                updatedSummary.leetcodeHard = lcData.hardSolved || updatedSummary.leetcodeHard;
                updatedSummary.totalSolved = (lcData.totalSolved || 500) + (updatedSummary.hackerrankSolved || 178);
              }

              if (lcData.submissionCalendar) {
                let calObj = lcData.submissionCalendar;
                if (typeof calObj === 'string') {
                  try { calObj = JSON.parse(calObj); } catch (e) { calObj = {}; }
                }
                Object.entries(calObj).forEach(([ts, count]) => {
                  const d = new Date(parseInt(ts, 10) * 1000);
                  const dateStr = d.toISOString().split('T')[0];

                  const existing = updatedCalendar[dateStr] || { github: 0, leetcode: 0, total: 0 };
                  const lcCount = Number(count) || 0;
                  updatedCalendar[dateStr] = {
                    ...existing,
                    leetcode: lcCount,
                    total: (existing.github || 0) + lcCount,
                  };
                });
              }
            }

            // Recalculate active days from merged calendar
            const activeDays = Object.values(updatedCalendar).filter((d) => (d.total || 0) > 0).length;
            if (activeDays > 0) {
              updatedSummary.activeDays = activeDays;
            }

            updated.summary = updatedSummary;
            updated.calendar = updatedCalendar;
            return updated;
          });

          setIsLiveSynced(true);
        }
      } catch (err) {
        // Fallback to bundled data gracefully
      }
    }

    fetchLiveMetrics();
    return () => controller.abort();
  }, []);

  // Compute 53-week calendar matrix
  const { weeks, monthLabels, totalModeActivities, activeDaysCount, maxSingleDay } = useMemo(() => {
    const calendar = statsData.calendar || {};
    const today = new Date();

    // End on current week Saturday
    const endDate = new Date(today);
    const dayOfWeek = endDate.getDay(); // 0 is Sunday, 6 is Saturday
    endDate.setDate(endDate.getDate() + (6 - dayOfWeek));

    // 53 weeks back (Sunday 52 weeks ago)
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - (53 * 7 - 1));

    const weeksArr = [];
    const months = [];
    let lastMonth = -1;
    let modeTotal = 0;
    let modeActiveDays = 0;
    let peakDay = 0;

    const curr = new Date(startDate);
    for (let w = 0; w < 53; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const iso = curr.toISOString().split('T')[0];
        const dayRecord = calendar[iso] || { github: 0, leetcode: 0, total: 0 };

        let count = 0;
        if (activeTab === 'combined') count = dayRecord.total || 0;
        else if (activeTab === 'leetcode') count = dayRecord.leetcode || 0;
        else if (activeTab === 'github') count = dayRecord.github || 0;

        if (count > 0) {
          modeTotal += count;
          modeActiveDays += 1;
          if (count > peakDay) peakDay = count;
        }

        days.push({
          date: iso,
          count,
          github: dayRecord.github || 0,
          leetcode: dayRecord.leetcode || 0,
          total: dayRecord.total || 0,
          dayOfWeek: d,
          level: getLevel(count, activeTab),
          isFuture: curr > today,
        });

        // Track month label on first row of week
        if (d === 0) {
          const m = curr.getMonth();
          if (m !== lastMonth && w < 52) {
            months.push({ weekIndex: w, name: MONTH_NAMES[m] });
            lastMonth = m;
          }
        }

        curr.setDate(curr.getDate() + 1);
      }
      weeksArr.push(days);
    }

    return {
      weeks: weeksArr,
      monthLabels: months,
      totalModeActivities: modeTotal,
      activeDaysCount: modeActiveDays,
      maxSingleDay: peakDay,
    };
  }, [statsData, activeTab]);

  const handleCellMouseEnter = (e, day) => {
    if (day.isFuture) return;
    const rect = e.target.getBoundingClientRect();
    const formattedDate = new Date(day.date + 'T00:00:00').toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    setTooltip({
      visible: true,
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
      content: {
        date: formattedDate,
        count: day.count,
        leetcode: day.leetcode,
        github: day.github,
      },
    });
  };

  const handleCellMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  const { summary } = statsData;
  const currentPalette = COLOR_SCALES[activeTab] || COLOR_SCALES.combined;

  // Percentage calculations for LeetCode difficulty bars
  const totalLc = summary.leetcodeSolved || 500;
  const easyPct = Math.round(((summary.leetcodeEasy || 219) / totalLc) * 100);
  const medPct = Math.round(((summary.leetcodeMedium || 249) / totalLc) * 100);
  const hardPct = Math.round(((summary.leetcodeHard || 32) / totalLc) * 100);

  return (
    <section className="activity-section" id="activity">
      <div className="container">
        {/* Header */}
        <div className="section-header-block">
          <p className="section-eyebrow">Metrics &amp; Consistency</p>
          <h1 className="subtitle">Coding Activity &amp; Heatmap</h1>
        </div>
        <p className="activity-intro">
          Continuous algorithmic practice and production engineering tracked across LeetCode, HackerRank, and GitHub over the past 365 days.
        </p>

        {/* ── 4 Top Cumulative Highlight Cards ────────────────────────────── */}
        <div className="activity-metric-grid">
          <motion.div
            className="activity-metric-card accent-amber"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="metric-icon-wrap" aria-hidden="true">
              <i className="fa-solid fa-code" />
            </div>
            <div className="metric-info">
              <span className="metric-value">{summary.totalSolved}+</span>
              <span className="metric-label">Cumulative Questions Solved</span>
              <span className="metric-subtext">500 LeetCode • 178 HackerRank</span>
            </div>
          </motion.div>

          <motion.div
            className="activity-metric-card accent-red"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <div className="metric-icon-wrap" aria-hidden="true">
              <i className="fa-solid fa-fire" />
            </div>
            <div className="metric-info">
              <span className="metric-value">{summary.streak}</span>
              <span className="metric-label">Active Streak Record</span>
              <span className="metric-subtext">{summary.activeDays}+ Active Days This Year</span>
            </div>
          </motion.div>

          <motion.div
            className="activity-metric-card accent-teal"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
          >
            <div className="metric-icon-wrap" aria-hidden="true">
              <i className="fa-solid fa-chart-line" />
            </div>
            <div className="metric-info">
              <span className="metric-value">938+</span>
              <span className="metric-label">Submissions &amp; Commits</span>
              <span className="metric-subtext">773 Submissions • 165 GitHub Commits</span>
            </div>
          </motion.div>

          <motion.div
            className="activity-metric-card accent-purple"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
          >
            <div className="metric-icon-wrap" aria-hidden="true">
              <i className="fa-brands fa-github" />
            </div>
            <div className="metric-info">
              <span className="metric-value">{summary.githubRepos}+</span>
              <span className="metric-label">Public Repositories</span>
              <span className="metric-subtext">Full-Stack &amp; AI Systems</span>
            </div>
          </motion.div>
        </div>

        {/* ── Platform Detailed Cards ────────────────────────────────────── */}
        <div className="activity-platforms-row">
          {/* LeetCode Card */}
          <div className="activity-platform-card">
            <div className="activity-card-header">
              <div className="platform-brand">
                <div className="platform-logo-box leetcode-box" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 94 111" fill="none">
                    <path d="M49.4 2a6.4 6.4 0 0 1 9 .3c2.4 2.5 2.5 6.5.1 9L15.9 56.6a12.8 12.8 0 0 0 1.2 18.3l19.8 19.3a6.4 6.4 0 0 1 .1 9 6.4 6.4 0 0 1-9 .1L8.2 84a25.6 25.6 0 0 1-1.6-36.1L49.4 2z" fill="#FFF" />
                    <path d="M67.5 83.1a6.4 6.4 0 0 1 9 0 6.4 6.4 0 0 1 0 9l-11.1 11.1a25.6 25.6 0 0 1-37.2.3l-19.9-19.5a25.6 25.6 0 0 1-1.6-36.1l17.7-19.2a25.6 25.6 0 0 1 37.8 0l16.2 13.1a6.4 6.4 0 0 1-8 10l-16.2-13.1a12.8 12.8 0 0 0-19.2 0L15.9 56.6a12.8 12.8 0 0 0 1.2 18.3l19.8 19.4a12.8 12.8 0 0 0 19.5-.1l11.1-11.1z" fill="#FFA116" />
                    <path d="M40.6 72a6.4 6.4 0 0 1-6.4-6.4 6.4 6.4 0 0 1 6.4-6.4h47a6.4 6.4 0 0 1 6.4 6.4 6.4 6.4 0 0 1-6.4 6.4H40.6z" fill="#B3B3B3" />
                  </svg>
                </div>
                <div className="platform-meta">
                  <h3>LeetCode</h3>
                  <a href={social.leetcode} target="_blank" rel="noopener noreferrer">
                    <span>@7ICNbRHRSu</span>
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                </div>
              </div>
              <span className="platform-badge-tag gold">365 Badge</span>
            </div>

            <div className="platform-big-stat">
              <span className="big-stat-number">{summary.leetcodeSolved}</span>
              <span className="big-stat-desc">Problems Solved</span>
            </div>

            <div className="difficulty-bars">
              <div className="diff-row">
                <div className="diff-labels">
                  <span className="diff-name easy">Easy</span>
                  <span className="diff-count">{summary.leetcodeEasy} ({easyPct}%)</span>
                </div>
                <div className="diff-progress-bg">
                  <div className="diff-progress-fill easy" style={{ width: `${easyPct}%` }} />
                </div>
              </div>

              <div className="diff-row">
                <div className="diff-labels">
                  <span className="diff-name medium">Medium</span>
                  <span className="diff-count">{summary.leetcodeMedium} ({medPct}%)</span>
                </div>
                <div className="diff-progress-bg">
                  <div className="diff-progress-fill medium" style={{ width: `${medPct}%` }} />
                </div>
              </div>

              <div className="diff-row">
                <div className="diff-labels">
                  <span className="diff-name hard">Hard</span>
                  <span className="diff-count">{summary.leetcodeHard} ({hardPct}%)</span>
                </div>
                <div className="diff-progress-bg">
                  <div className="diff-progress-fill hard" style={{ width: `${hardPct}%` }} />
                </div>
              </div>
            </div>

            <div className="platform-card-footer-tags">
              <span className="platform-pill">Global Rank: #{summary.ranking || '218k'}</span>
              <span className="platform-pill">1,159 Submissions</span>
              <span className="platform-pill">Rating: 1500+</span>
            </div>
          </div>

          {/* HackerRank Card */}
          <div className="activity-platform-card">
            <div className="activity-card-header">
              <div className="platform-brand">
                <div className="platform-logo-box hackerrank-box" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                    <path d="M16 1.8c.6 0 1.2.3 1.5.8l11.4 6.6c.6.4 1 1 1 1.7v13.2c0 .7-.4 1.3-1 1.7L17.5 31.4c-.3.2-.6.3-.9.3-.3 0-.6-.1-.9-.3L4.3 25.8c-.6-.4-1-1-1-1.7V10.9c0-.7.4-1.3 1-1.7L15.7 2.6c.3-.5.9-.8 1.5-.8z" fill="#2EC866" />
                    <path d="M9.6 23.4h3.2v-5.9h6.4v3.5h-1.2l2.8 3.5 2.8-3.5h-1.2V8.6h-3.2v5.9h-6.4v-3.5h1.2L11.2 7.5 8.4 11h1.2v12.4z" fill="#FFFFFF" />
                  </svg>
                </div>
                <div className="platform-meta">
                  <h3>HackerRank</h3>
                  <a href={social.hackerrank} target="_blank" rel="noopener noreferrer">
                    <span>@d2twins2607</span>
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                </div>
              </div>
              <span className="platform-badge-tag gold">5-Star Gold</span>
            </div>

            <div className="platform-big-stat">
              <span className="big-stat-number">{summary.hackerrankSolved}</span>
              <span className="big-stat-desc">Challenges Solved</span>
            </div>

            <div className="hackerrank-domains">
              <div className="hr-badge-chip gold">
                <i className="fa-solid fa-star hr-stars" />
                <span>Java 5★</span>
                <span className="hr-count">(64)</span>
              </div>
              <div className="hr-badge-chip gold">
                <i className="fa-solid fa-star hr-stars" />
                <span>SQL 5★</span>
                <span className="hr-count">(44)</span>
              </div>
              <div className="hr-badge-chip">
                <i className="fa-solid fa-star hr-stars" />
                <span>Problem Solving 4★</span>
                <span className="hr-count">(51)</span>
              </div>
              <div className="hr-badge-chip">
                <i className="fa-solid fa-star hr-stars" />
                <span>C 3★</span>
                <span className="hr-count">(10)</span>
              </div>
              <div className="hr-badge-chip">
                <i className="fa-solid fa-star hr-stars" />
                <span>Python 2★</span>
                <span className="hr-count">(7)</span>
              </div>
              <div className="hr-badge-chip">
                <i className="fa-solid fa-star hr-stars" />
                <span>C++ 1★</span>
                <span className="hr-count">(2)</span>
              </div>
            </div>

            <div className="platform-card-footer-tags">
              <span className="platform-pill">Multi-Domain Gold</span>
              <span className="platform-pill">Verified Assessments</span>
              <span className="platform-pill">SQL &amp; Algorithms</span>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="activity-platform-card">
            <div className="activity-card-header">
              <div className="platform-brand">
                <div className="platform-logo-box github-box" aria-hidden="true">
                  <i className="fa-brands fa-github" />
                </div>
                <div className="platform-meta">
                  <h3>GitHub</h3>
                  <a href={social.github} target="_blank" rel="noopener noreferrer">
                    <span>@Devs7026</span>
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                </div>
              </div>
              <span className="platform-badge-tag">Open Source</span>
            </div>

            <div className="platform-big-stat">
              <span className="big-stat-number">{summary.githubContributions}+</span>
              <span className="big-stat-desc">Contributions This Year</span>
            </div>

            <div className="github-stats-list">
              <div className="gh-stat-item">
                <span className="gh-stat-key">
                  <i className="fa-solid fa-book-bookmark" />
                  <span>Public Repositories</span>
                </span>
                <span className="gh-stat-val">{summary.githubRepos} Repos</span>
              </div>
              <div className="gh-stat-item">
                <span className="gh-stat-key">
                  <i className="fa-solid fa-layer-group" />
                  <span>Primary Languages</span>
                </span>
                <span className="gh-stat-val">Java, TS, Python</span>
              </div>
              <div className="gh-stat-item">
                <span className="gh-stat-key">
                  <i className="fa-solid fa-code-branch" />
                  <span>Architecture</span>
                </span>
                <span className="gh-stat-val">Kafka, REST, AI/ML</span>
              </div>
            </div>

            <div className="platform-card-footer-tags">
              <span className="platform-pill">Spring Boot &amp; React</span>
              <span className="platform-pill">Active Contributor</span>
              <span className="platform-pill">Open Source</span>
            </div>
          </div>
        </div>

        {/* ── Interactive Activity Heatmap Card ──────────────────────────── */}
        <div className="heatmap-card">
          <div className="heatmap-card-header">
            <div className="heatmap-title-block">
              <div className="heatmap-title-row">
                <h3>Contribution &amp; Activity Calendar</h3>
                <span className={`heatmap-sync-badge ${isLiveSynced ? 'live' : 'connected'}`}>
                  <span className="sync-dot" />
                  {isLiveSynced ? 'Live Synced' : 'Auto-Syncing'}
                </span>
              </div>
              <p>
                Visualizing daily intensity and volume across the last 52 weeks (Nov 2025 – Nov 2026)
              </p>
            </div>

            {/* Tab Filter Controller */}
            <div className="heatmap-tabs" role="tablist">
              <button
                type="button"
                className={`heatmap-tab-btn ${activeTab === 'combined' ? 'active' : ''}`}
                onClick={() => setActiveTab('combined')}
                role="tab"
                aria-selected={activeTab === 'combined'}
              >
                <i className="fa-solid fa-bolt" />
                <span>Combined Activity</span>
              </button>
              <button
                type="button"
                className={`heatmap-tab-btn tab-leetcode ${activeTab === 'leetcode' ? 'active' : ''}`}
                onClick={() => setActiveTab('leetcode')}
                role="tab"
                aria-selected={activeTab === 'leetcode'}
              >
                <i className="fa-solid fa-code" />
                <span>LeetCode ({statsData.summary.leetcodeSolved || 500})</span>
              </button>
              <button
                type="button"
                className={`heatmap-tab-btn tab-github ${activeTab === 'github' ? 'active' : ''}`}
                onClick={() => setActiveTab('github')}
                role="tab"
                aria-selected={activeTab === 'github'}
              >
                <i className="fa-brands fa-github" />
                <span>GitHub ({summary.githubContributions || 165})</span>
              </button>
            </div>
          </div>

          {/* SVG Heatmap */}
          <div className="heatmap-scroll-area">
            <svg
              className="heatmap-svg"
              viewBox="0 0 820 125"
              preserveAspectRatio="xMinYMin meet"
              aria-label="Annual coding activity calendar heatmap"
            >
              {/* Month Labels */}
              <g className="heatmap-months">
                {monthLabels.map((m, idx) => (
                  <text
                    key={`${m.name}-${idx}`}
                    x={35 + m.weekIndex * 14.5}
                    y="12"
                    className="heatmap-month-label"
                  >
                    {m.name}
                  </text>
                ))}
              </g>

              {/* Day of Week Labels (Mon, Wed, Fri) */}
              <g className="heatmap-days">
                <text x="5" y="38" className="heatmap-day-label">Mon</text>
                <text x="5" y="66" className="heatmap-day-label">Wed</text>
                <text x="5" y="94" className="heatmap-day-label">Fri</text>
              </g>

              {/* Day Cells (53 weeks x 7 days) */}
              <g className="heatmap-cells" transform="translate(32, 20)">
                {weeks.map((week, wIdx) => (
                  <g key={`w-${wIdx}`} transform={`translate(${wIdx * 14.5}, 0)`}>
                    {week.map((day) => {
                      const color = day.isFuture
                        ? 'transparent'
                        : currentPalette[day.level] || currentPalette[0];

                      return (
                        <rect
                          key={day.date}
                          x="0"
                          y={day.dayOfWeek * 14}
                          width="11"
                          height="11"
                          rx="2.5"
                          ry="2.5"
                          fill={color}
                          className="heatmap-cell"
                          opacity={day.isFuture ? 0 : 1}
                          onMouseEnter={(e) => handleCellMouseEnter(e, day)}
                          onMouseLeave={handleCellMouseLeave}
                        />
                      );
                    })}
                  </g>
                ))}
              </g>
            </svg>
          </div>

          {/* Heatmap Footer & Legend */}
          <div className="heatmap-card-footer">
            <div className="heatmap-stats-summary">
              <i className="fa-solid fa-circle-check" aria-hidden="true" />
              <span>
                <strong>{totalModeActivities}</strong> activities across{' '}
                <strong>{activeDaysCount}</strong> active days{' '}
                {maxSingleDay > 0 && `(Peak: ${maxSingleDay}/day)`}
              </span>
            </div>

            <div className="heatmap-legend">
              <span>Less</span>
              <div className="legend-cells">
                {currentPalette.map((col, idx) => (
                  <span
                    key={idx}
                    className="legend-box"
                    style={{ background: col, border: idx === 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Floating Tooltip */}
        {tooltip.visible && tooltip.content && (
          <div
            className="heatmap-tooltip"
            style={{
              left: `${tooltip.x}px`,
              top: `${tooltip.y}px`,
            }}
          >
            <div className="tooltip-date">{tooltip.content.date}</div>
            <div className="tooltip-count">
              {tooltip.content.count > 0 ? `${tooltip.content.count} activities` : 'No activity recorded'}
            </div>
            {activeTab === 'combined' && tooltip.content.count > 0 && (
              <div className="tooltip-details">
                {tooltip.content.leetcode > 0 && `${tooltip.content.leetcode} LeetCode`}
                {tooltip.content.leetcode > 0 && tooltip.content.github > 0 && ' • '}
                {tooltip.content.github > 0 && `${tooltip.content.github} GitHub`}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ActivityStats;

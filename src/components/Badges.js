import React, { useRef, useState, useEffect } from 'react';
import portfolioConfig from '../portfolio.config';

const { badges = [] } = portfolioConfig;

/* Helper to render the badge visual graphic */
const BadgeIcon = ({ badge }) => {
  if (badge.image) {
    return (
      <img
        src={badge.image}
        alt={badge.title || "Badge"}
        className="badge-item-img"
        loading="lazy"
        draggable={false}
      />
    );
  }

  if (badge.iconType === 'leetcode') {
    return (
      <div className="badge-emblem-graphic leetcode-emblem">
        <svg
          viewBox="0 0 94 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="badge-svg"
        >
          <path
            d="M49.412 2.023c2.406-2.575 6.44-2.71 9.011-.3 2.572 2.41 2.706 6.451.301 9.027L15.928 56.573c-4.651 4.979-4.141 13.001 1.218 18.256l19.763 19.38c2.516 2.467 2.56 6.51.096 9.031-2.463 2.52-6.5 2.564-9.016.096L8.227 83.957c-10.151-9.955-11.163-25.883-1.61-36.11L49.412 2.023z"
            fill="#FFFFFF"
          />
          <path
            d="M67.507 83.066c2.494-2.49 6.53-2.483 9.016.015 2.486 2.498 2.479 6.542-.015 9.032l-11.073 11.057c-10.216 10.201-26.875 10.349-37.263.343-.06-.057-4.686-4.593-19.945-19.556-10.152-9.954-11.163-25.882-1.61-36.111L24.43 28.775C33.91 18.622 51.388 17.512 62.228 26.279l16.177 13.083c2.74 2.216 3.168 6.237.956 8.981-2.212 2.744-6.226 3.173-8.965.957L54.219 36.217c-5.67-4.585-15.587-3.955-20.479 1.284L15.928 56.573c-4.65 4.98-4.14 13.001 1.218 18.256 11.206 10.988 19.842 19.456 19.852 19.465 5.4 5.202 14.133 5.124 19.436-.171l11.073-11.057z"
            fill="#FFA116"
          />
          <path
            d="M40.607 72.001c-3.521 0-6.375-2.859-6.375-6.386 0-3.527 2.854-6.386 6.375-6.386h47.018c3.52 0 6.375 2.859 6.375 6.386 0 3.527-2.855 6.386-6.375 6.386H40.607z"
            fill="#B3B3B3"
          />
        </svg>
        <span className="badge-tag-text">365 DAYS</span>
      </div>
    );
  }

  if (badge.iconType === 'hackerrank') {
    return (
      <div className="badge-emblem-graphic hackerrank-emblem">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="badge-svg"
        >
          <path
            d="M16 1.8c.6 0 1.2.3 1.5.8l11.4 6.6c.6.4 1 1 1 1.7v13.2c0 .7-.4 1.3-1 1.7L17.5 31.4c-.3.2-.6.3-.9.3-.3 0-.6-.1-.9-.3L4.3 25.8c-.6-.4-1-1-1-1.7V10.9c0-.7.4-1.3 1-1.7L15.7 2.6c.3-.5.9-.8 1.5-.8z"
            fill="#2EC866"
          />
          <path
            d="M9.6 23.4h3.2v-5.9h6.4v3.5h-1.2l2.8 3.5 2.8-3.5h-1.2V8.6h-3.2v5.9h-6.4v-3.5h1.2L11.2 7.5 8.4 11h1.2v12.4z"
            fill="#FFFFFF"
          />
        </svg>
        <div className="badge-stars-row">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
        </div>
      </div>
    );
  }

  if (badge.iconType === 'meta') {
    return (
      <div className="badge-emblem-graphic meta-emblem">
        <i className="fa-brands fa-meta" aria-hidden="true" />
        <span className="badge-tag-text">CERTIFIED</span>
      </div>
    );
  }

  if (badge.iconType === 'aws') {
    return (
      <div className="badge-emblem-graphic aws-emblem">
        <i className="fa-brands fa-aws" aria-hidden="true" />
        <span className="badge-tag-text">ACADEMY</span>
      </div>
    );
  }

  return (
    <div className="badge-emblem-graphic default-emblem">
      <i className={badge.icon || "fa-solid fa-award"} aria-hidden="true" />
    </div>
  );
};

const Badges = () => {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [dragMoved, setDragMoved] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update arrow states on scroll
  const checkScrollBounds = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    checkScrollBounds();
    el.addEventListener('scroll', checkScrollBounds, { passive: true });
    window.addEventListener('resize', checkScrollBounds);
    return () => {
      el.removeEventListener('scroll', checkScrollBounds);
      window.removeEventListener('resize', checkScrollBounds);
    };
  }, []);

  // Mouse Drag handlers
  const handleMouseDown = (e) => {
    const el = trackRef.current;
    if (!el) return;
    setIsDragging(true);
    setDragMoved(false);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = trackRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed multiplier
    if (Math.abs(walk) > 5) {
      setDragMoved(true);
    }
    el.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    // Reset dragMoved after a short delay so link click isn't erroneously blocked
    setTimeout(() => setDragMoved(false), 50);
  };

  // Click handler to prevent opening link if user was dragging
  const handleBadgeClick = (e, link) => {
    if (dragMoved) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  // Arrow button click handlers (smooth scroll by ~300px)
  const scrollByAmount = (amount) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div className="badges-section" id="badges">
      <div className="container">
        <h1 className="certi certi-section-title">Badges</h1>

        <div className="badges-slider-wrapper">
          {/* Left Arrow */}
          <button
            type="button"
            className={`badge-arrow badge-arrow-left ${!canScrollLeft ? 'arrow-disabled' : ''}`}
            onClick={() => scrollByAmount(-320)}
            aria-label="Scroll badges left"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            className={`badge-arrow badge-arrow-right ${!canScrollRight ? 'arrow-disabled' : ''}`}
            onClick={() => scrollByAmount(320)}
            aria-label="Scroll badges right"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>

          {/* Draggable & Scrollable Horizontal Track */}
          <div
            ref={trackRef}
            className={`badges-track ${isDragging ? 'is-dragging' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
          >
            {badges.map((badge, idx) => {
              const isClickable = Boolean(badge.link);
              return (
                <div
                  key={badge.id || badge.title || idx}
                  className={`badge-item-card ${isClickable ? 'clickable' : ''}`}
                  onClick={(e) => handleBadgeClick(e, badge.link)}
                  title={badge.link ? `Click to view ${badge.title}` : badge.title}
                  role={isClickable ? "link" : "article"}
                  tabIndex={isClickable ? 0 : undefined}
                >
                  <div className="badge-item-emblem-wrap">
                    <BadgeIcon badge={badge} />
                  </div>
                  {badge.title && (
                    <div className="badge-item-title">{badge.title}</div>
                  )}
                  {badge.issuer && (
                    <div className="badge-item-issuer">{badge.issuer}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="badges-drag-hint">
          <i className="fa-solid fa-arrows-left-right" />
          <span>Drag or use arrows to explore badges</span>
        </div>
      </div>
    </div>
  );
};

export default Badges;

import React from 'react';
import './LogoLoop.css';


const LogoLoop = ({ items = [] }) => {
  if (!items.length) return null;

  const loopItems = [...items, ...items];

  return (
    <div className="logo-loop-wrapper">
      <div className="logo-loop-track">
        {loopItems.map((item, index) => (
          <div key={index} className="logo-loop-item">
            {item.logoUrl ? (
              <img 
                src={item.logoUrl} 
                alt={item.label || item.name} 
                className="logo-loop-badge"
              />
            ) : item.icon ? (
              <>
                <span className="logo-loop-icon" aria-hidden="true">
                  {item.icon}
                </span>
                {(item.label || item.name) && (
                  <span className="logo-loop-label">{item.label || item.name}</span>
                )}
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;



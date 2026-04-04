import React, { useEffect, useState } from 'react';
import './SmoothLoader.css';

export const SmoothLoader = () => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Complete the animation after 10 seconds
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`smooth-loader ${isComplete ? 'complete' : ''}`}>
      <div className="smooth-loader-content">
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <div className="loader-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <p className="loading-text">Loading your space...</p>
      </div>
    </div>
  );
};

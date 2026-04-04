import React from 'react';
import './LoadingAnimation.css';

export const LoadingAnimation = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="design-grid">
          <div className="grid-line grid-line-1"></div>
          <div className="grid-line grid-line-2"></div>
          <div className="grid-line grid-line-3"></div>
          <div className="grid-line grid-line-4"></div>
        </div>
        <div className="design-elements">
          <div className="element element-1"></div>
          <div className="element element-2"></div>
          <div className="element element-3"></div>
          <div className="element element-4"></div>
        </div>
        <div className="loader-text">
          <h2>Designing Your Space...</h2>
          <div className="dots">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

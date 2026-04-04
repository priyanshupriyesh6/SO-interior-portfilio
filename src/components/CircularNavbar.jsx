import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CircularNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Home', path: '/home', icon: '🏠', angle: 0 },
    { label: 'Services', path: '/services', icon: '🛠️', angle: 51.43 },
    { label: 'About Us', path: '/about-us', icon: 'ℹ️', angle: 102.86 },
    { label: 'Projects', path: '/projects', icon: '🎨', angle: 154.29 },
    { label: 'Process', path: '/process', icon: '⚙️', angle: 205.71 },
    { label: 'Founders', path: '/founders', icon: '👥', angle: 257.14 },
    { label: 'Contact', path: '/contact', icon: '📧', angle: 308.57 },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-8 right-8 z-50">
      <style jsx>{`
        .circular-nav-container {
          position: fixed;
          top: 32px;
          right: 32px;
          z-index: 50;
        }

        .circular-nav-toggle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ff6b6b, #ffd93d);
          border: 3px solid rgba(255, 255, 255, 0.2);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(255, 107, 107, 0.3);
          backdrop-filter: blur(10px);
          position: relative;
          z-index: 51;
        }

        .circular-nav-toggle:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 48px rgba(255, 107, 107, 0.5);
        }

        .circular-nav-toggle.active {
          background: linear-gradient(135deg, #ffd93d, #ff6b6b);
          transform: scale(1.15) rotate(45deg);
        }

        .circular-nav-menu {
          position: fixed;
          width: 300px;
          height: 300px;
          top: 50%;
          right: 32px;
          transform: translate(50%, -50%);
          pointer-events: none;
          z-index: 50;
        }

        .circular-nav-menu.active {
          pointer-events: auto;
        }

        .nav-item {
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 107, 107, 0.9), rgba(255, 217, 61, 0.9));
          border: 2px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2);
          top: 50%;
          right: 50%;
          margin-top: -25px;
          margin-right: -25px;
          opacity: 0;
          transform: translate(0, 0) scale(0);
        }

        .circular-nav-menu.active .nav-item {
          opacity: 1;
          transform: scale(1);
        }

        .nav-item:nth-child(1) {
          transition-delay: ${isOpen ? '0.05s' : '0s'};
        }

        .nav-item:nth-child(2) {
          transition-delay: ${isOpen ? '0.1s' : '0.05s'};
        }

        .nav-item:nth-child(3) {
          transition-delay: ${isOpen ? '0.15s' : '0.1s'};
        }

        .nav-item:nth-child(4) {
          transition-delay: ${isOpen ? '0.2s' : '0.15s'};
        }

        .nav-item:nth-child(5) {
          transition-delay: ${isOpen ? '0.25s' : '0.2s'};
        }

        .nav-item:nth-child(6) {
          transition-delay: ${isOpen ? '0.3s' : '0.25s'};
        }

        .nav-item:nth-child(7) {
          transition-delay: ${isOpen ? '0.35s' : '0.3s'};
        }

        .nav-item:hover {
          transform: scale(1.2) translateY(-20px);
          background: linear-gradient(135deg, #ff6b6b, #ffd93d);
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
        }

        .nav-label {
          position: absolute;
          background: rgba(10, 14, 39, 0.95);
          color: white;
          padding: 8px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          border: 1px solid rgba(255, 107, 107, 0.3);
          backdrop-filter: blur(10px);
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 8px;
        }

        .nav-item:hover .nav-label {
          opacity: 1;
        }

        .circular-nav-center {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(10, 14, 39, 0.8), rgba(26, 31, 58, 0.8));
          top: 50%;
          right: 50%;
          margin-top: -30px;
          margin-right: -30px;
          border: 2px solid rgba(255, 107, 107, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          z-index: 52;
        }

        .circular-nav-center-icon {
          font-size: 1.5rem;
        }

        /* Background overlay when menu is open */
        .nav-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 49;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .nav-overlay.active {
          display: block;
          opacity: 1;
          pointer-events: auto;
        }

        @media (max-width: 768px) {
          .circular-nav-toggle {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }

          .nav-item {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
          }

          .circular-nav-container {
            top: 16px;
            right: 16px;
          }

          .circular-nav-menu {
            width: 250px;
            height: 250px;
            right: 16px;
          }

          .circular-nav-center {
            width: 50px;
            height: 50px;
            margin-top: -25px;
            margin-right: -25px;
          }
        }
      `}</style>

      {/* Menu Items arranged in circle */}
      <div className={`circular-nav-menu ${isOpen ? 'active' : ''}`}>
        {menuItems.map((item, index) => {
          const radius = 100;
          const angle = (item.angle * Math.PI) / 180;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={index}
              className="nav-item"
              style={{
                transform: isOpen
                  ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`
                  : 'translate(0, 0) scale(0)',
                right: 'auto',
                left: '50%',
                top: '50%',
              }}
              onClick={() => handleNavigation(item.path)}
              title={item.label}
            >
              {item.icon}
              <div className="nav-label">{item.label}</div>
            </div>
          );
        })}

        {/* Center circle */}
        <div className="circular-nav-center">
          <span className="circular-nav-center-icon">✨</span>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className={`circular-nav-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Navigation Menu"
      >
        ☰
      </button>

      {/* Overlay */}
      <div
        className={`nav-overlay ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </div>
  );
};

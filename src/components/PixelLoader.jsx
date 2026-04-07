import React, { useEffect, useState } from 'react';
import './PixelLoader.css';

export const PixelLoader = () => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Complete the animation after 10 seconds
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`pixel-loader ${isComplete ? 'complete' : ''}`}>
      <div className="pixel-grid">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="pixel"
            style={{
              animationDelay: `${(i % 10) * 0.15}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

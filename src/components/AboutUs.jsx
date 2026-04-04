import React, { useState, useEffect } from 'react';
import woodBg from '../assets/wood.jpeg';

export const AboutUs = () => {
  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    setAnimateContent(true);
  }, []);

  return (
    <div className="py-20 relative overflow-hidden" style={{
      backgroundColor: '#1b0f5a',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Decorative Elements - Removed blue/purple as they clash with wood brown */}

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center">
          {/* Title */}
          <h2 
            style={{
              animation: animateContent ? 'float-up 0.8s ease-out' : 'none',
              fontFamily: 'Georgia, Times New Roman, serif',
              color: '#ffffff',
              fontSize: '4rem',
              fontWeight: 'bold',
              marginBottom: '3rem'
            }}
          >
            About SO Interiors
          </h2>

          {/* Content Blocks */}
          <div className="space-y-6 leading-relaxed">
            {/* Block 1 */}
            <div 
              style={{
                animation: animateContent ? 'float-up 0.8s ease-out 0.2s backwards' : 'none',
                padding: '2rem',
                borderRadius: '0.75rem',
                transition: 'all 300ms',
                backgroundColor: '#ffffff',
                border: '2px solid rgba(255, 215, 0, 0.3)'
              }}
              className="transform hover:scale-105 hover:shadow-lg"
            >
              <p className="font-semibold text-2xl" style={{ fontFamily: 'Georgia, Times New Roman, serif', color: '#1b0f5a', fontSize: '1.5rem' }}>
                ✨ At SO Interiors, we believe that exceptional design enhances the quality of life.
              </p>
            </div>

            {/* Block 2 */}
            <div 
              style={{
                animation: animateContent ? 'float-up 0.8s ease-out 0.4s backwards' : 'none',
                padding: '2rem',
                borderRadius: '0.75rem',
                transition: 'all 300ms',
                backgroundColor: '#ffffff',
                border: '2px solid rgba(255, 215, 0, 0.3)'
              }}
              className="transform hover:scale-105 hover:shadow-lg"
            >
              <p style={{ fontFamily: 'Georgia, Times New Roman, serif', color: '#1b0f5a', fontSize: '1.5rem' }}>
                We combine artistic creativity with practical functionality to design spaces that are not only visually appealing but also purposeful and livable.
              </p>
            </div>

            {/* Block 3 */}
            <div 
              style={{
                animation: animateContent ? 'float-up 0.8s ease-out 0.6s backwards' : 'none',
                padding: '2rem',
                borderRadius: '0.75rem',
                transition: 'all 300ms',
                backgroundColor: '#ffffff',
                border: '2px solid rgba(255, 215, 0, 0.3)'
              }}
              className="transform hover:scale-105 hover:shadow-lg"
            >
              <p style={{ fontFamily: 'Georgia, Times New Roman, serif', color: '#1b0f5a', fontSize: '1.5rem' }}>
                From concept to execution, our approach ensures that every detail reflects quality, innovation, and client vision.
              </p>
            </div>

            {/* Main Message */}
            <div 
              style={{
                animation: animateContent ? 'float-up 0.8s ease-out 0.8s backwards' : 'none',
                padding: '2.5rem',
                borderRadius: '0.75rem',
                backgroundColor: '#ffffff',
                border: '2px solid rgba(255, 215, 0, 0.3)',
                transition: 'all 300ms'
              }}
              className="text-2xl font-semibold shadow-2xl transform hover:scale-105"
            >
              <p style={{ fontFamily: 'Georgia, Times New Roman, serif', color: '#1b0f5a', marginBottom: '0.5rem', fontSize: '1.5rem' }}>🏢 We don't just design spaces — we create experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import woodBg from '../assets/wood.jpeg';
import wood2Bg from '../assets/wood2.jpeg';

export const WhyChooseUs = () => {
  const reasons = [
    'End-to-End Design Solution',
    'Modern & Functional Approach',
    'Detail-Oriented Execution',
    'Client-Centric Process',
    'Pan India Services'
  ];

  return (
    <div className="py-20" style={{
      backgroundImage: `url(${woodBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FFF8DC', fontFamily: 'Georgia, Times New Roman, serif' }}>Why SO Interiors</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="p-8 rounded-lg shadow-md text-center hover:shadow-lg transition" style={{
                backgroundImage: `url(${wood2Bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="text-4xl font-bold mb-4" style={{ color: '#FFD700' }}>✓</div>
              <p className="text-lg font-semibold" style={{ color: '#FFF8DC', fontFamily: 'Georgia, Times New Roman, serif' }}>{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

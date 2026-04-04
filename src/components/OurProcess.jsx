import React from 'react';
import woodBg from '../assets/wood.jpeg';
import wood2Bg from '../assets/wood2.jpeg';

export const OurProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Understanding',
      description: 'We analyze client needs, vision, and space requirements'
    },
    {
      number: '02',
      title: 'Concept Design',
      description: 'Developing layouts, themes, and design direction'
    },
    {
      number: '03',
      title: 'Development',
      description: '3D visualization and detailed planning'
    },
    {
      number: '04',
      title: 'Execution',
      description: 'Seamless implementation with precision and quality'
    }
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
          <h2 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#FFF8DC', fontFamily: 'Georgia, Times New Roman, serif' }}>Our Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number background */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full text-white text-2xl font-bold" style={{
                    backgroundImage: `url(${wood2Bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}>
                    {step.number}
                  </div>
                </div>
              </div>
              
              {/* Step content */}
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#FFF8DC', fontFamily: 'Georgia, Times New Roman, serif' }}>{step.title}</h3>
                <p style={{ color: '#E8D4B8', fontFamily: 'Georgia, Times New Roman, serif' }}>{step.description}</p>
              </div>

              {/* Connector line for non-last items */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-24 w-full h-1 bg-blue-200 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

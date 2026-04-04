import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/sectioncard slot images/18comune/1.jpeg';
import bgImage1 from '../assets/sectioncard slot images/Adda by soi7/1.jpeg';
import bgImage2 from '../assets/sectioncard slot images/rassta/1.jpeg';
import bgImage3 from '../assets/sectioncard slot images/soi7/1.jpeg';
import bgImage4 from '../assets/sectioncard slot images/18comune/2.jpeg';
import bgImage5 from '../assets/sectioncard slot images/rassta/2.jpeg';

export const Services = () => {
  const navigate = useNavigate();
  const [animateItems, setAnimateItems] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setAnimateItems(true);
  }, []);

  const handleCardClick = (index) => {
    setSelectedIndex(index);
    // Delay navigation to allow animation to play
    setTimeout(() => {
      navigate('/services');
    }, 600);
  };

  const services = [
    {
      icon: '📐',
      title: 'Space Planning',
      description: 'Expert layout design and spatial optimization for your projects.',
      bg: bgImage
    },
    {
      icon: '🎨',
      title: 'Concept Development',
      description: 'Creative themes and design direction aligned with your vision.',
      bg: bgImage1
    },
    {
      icon: '📊',
      title: '3D Visualization',
      description: 'Detailed renderings to visualize your space before execution.',
      bg: bgImage2
    },
    {
      icon: '✨',
      title: 'Interior Design',
      description: 'Complete interior design and decoration services.',
      bg: bgImage3
    },
    {
      icon: '💬',
      title: 'Consultation',
      description: 'Professional guidance on materials and design selections.',
      bg: bgImage4
    },
    {
      icon: '🏗️',
      title: 'End-to-End Execution',
      description: 'Seamless implementation with precision and quality.',
      bg: bgImage5
    }
  ];

  return (
    <div 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundColor: '#000000',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16" style={{animation: animateItems ? 'float-up 0.6s ease-out' : 'none'}}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>Our Services</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            Comprehensive design solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              onClick={() => handleCardClick(index)}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 hover:border-blue-400/50 transform hover:scale-105 hover:-translate-y-2 h-80 cursor-pointer"
              style={{
                animation: selectedIndex === index 
                  ? 'card-zoom-in 0.6s ease-out forwards' 
                  : (animateItems ? `float-up 0.6s ease-out ${index * 0.1}s backwards` : 'none'),
                zIndex: selectedIndex === index ? 50 : 'auto'
              }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage: `url(${service.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              ></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-end p-8 text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-200 group-hover:text-gray-100 transition-colors duration-300 text-sm" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
                  {service.description}
                </p>
              </div>

              {/* Hover Border Animation */}
              <div className="absolute inset-0 rounded-xl border-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

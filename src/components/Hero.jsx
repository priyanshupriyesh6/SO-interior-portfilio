import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../assets/banner1.png';

export const Hero = () => {
  const navigate = useNavigate();
  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    setAnimateContent(true);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-[2]"></div>
      
      {/* Parallax background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 opacity-10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-[3] flex flex-col md:flex-row items-center justify-center h-full max-w-7xl mx-auto px-4 py-20 gap-8 md:gap-16">
        {/* Logo / Image (Left side) */}
        <div 
          className="mb-8 md:mb-0 -mt-8 md:-mt-16 transform transition-all duration-1000 hover:scale-110 flex-shrink-0"
          style={{
            animation: animateContent ? 'float-up 0.8s ease-out' : 'none',
            transform: animateContent ? 'translateY(0) translateX(-15px)' : 'translateY(30px)',
            opacity: animateContent ? 1 : 0
          }}
        >
          <img 
            src={banner} 
            alt="SO INTERIORS" 
            className="h-64 md:h-80 lg:h-96 w-auto drop-shadow-2xl hover:drop-shadow-blue-900/50 transition-all duration-300"
          />
        </div>

        {/* Text Section (Right side) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Main Title */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#D4AF37] -ml-2 md:-ml-8"
            style={{
              animation: animateContent ? 'float-up 0.8s ease-out 0.2s backwards' : 'none',
              fontFamily: 'Georgia, Times New Roman, serif'
            }}
          >
            SO INTERIORS
          </h1>

          {/* Subtitle */}
          <h2 
            className="text-xl md:text-3xl lg:text-4xl font-bold mb-6 text-white"
            style={{
              animation: animateContent ? 'float-up 0.8s ease-out 0.4s backwards' : 'none',
              fontFamily: 'Georgia, Times New Roman, serif'
            }}
          >
            Where SPACE Becomes SIGNATURE
          </h2>

          {/* Description */}
          <p 
            className="text-lg md:text-xl mb-8 max-w-2xl text-white font-semibold leading-relaxed"
            style={{
              animation: animateContent ? 'float-up 0.8s ease-out 0.6s backwards' : 'none',
              fontFamily: 'Georgia, Times New Roman, serif'
            }}
          >
            Luxury Interior Design Studio crafting modern, functional, and aesthetic spaces across Pan India.
          </p>

          {/* Service Badges */}
          <div 
            className="mb-8 flex justify-center md:justify-start gap-4 flex-wrap"
            style={{
              animation: animateContent ? 'float-up 0.8s ease-out 0.8s backwards' : 'none'
            }}
          >
            {['Residential', 'Commercial', 'Hospitality'].map((service, idx) => (
              <span 
                key={idx}
                className="bg-black bg-opacity-10 backdrop-blur-md px-6 py-2 rounded-full text-sm font-semibold text-white border border-white border-opacity-30 hover:bg-opacity-20 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                style={{
                  animation: animateContent ? `float-up 0.6s ease-out ${0.9 + idx * 0.1}s backwards` : 'none',
                  fontFamily: 'Georgia, Times New Roman, serif'
                }}
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex gap-6 justify-center md:justify-start flex-wrap"
            style={{
              animation: animateContent ? 'float-up 0.8s ease-out 1.2s backwards' : 'none'
            }}
          >
            <button 
              onClick={() => navigate('/projects')}
              className="group bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 relative overflow-hidden"
              style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
            >
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            <button 
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-black hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 relative overflow-hidden"
              style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-soft">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce-soft"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

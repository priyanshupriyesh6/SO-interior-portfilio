import React, { useState, useEffect } from 'react';
import { Footer } from '../components/Footer';
import founderImage from '../assets/founderpho.jpeg';

export const Founders = () => {
  const [animateContent, setAnimateContent] = useState(false);

  useEffect(() => {
    setAnimateContent(true);
  }, []);

  const visionPoints = [
    {
      title: 'Design Excellence',
      description: 'Committed to pushing creative boundaries and delivering award-quality design solutions.',
      icon: '🏆'
    },
    {
      title: 'Quality Craftsmanship',
      description: 'Every detail is meticulously executed with precision and attention to quality standards.',
      icon: '⚙️'
    },
    {
      title: 'Innovation',
      description: 'Constantly exploring new ideas and techniques to deliver cutting-edge design solutions.',
      icon: '💡'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-500 opacity-10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 
            className="text-5xl font-bold mb-4"
            style={{animation: animateContent ? 'float-up 0.8s ease-out' : 'none'}}
          >
            Leadership & Vision
          </h1>
          <p 
            className="text-xl text-gray-300"
            style={{animation: animateContent ? 'float-up 0.8s ease-out 0.2s backwards' : 'none'}}
          >
            Meet the visionaries behind SO Interiors
          </p>
        </div>
      </div>

      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Founders Image Section */}
          <div 
            className="mb-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 mx-auto"
            style={{animation: animateContent ? 'float-up 0.8s ease-out' : 'none', maxWidth: '500px'}}
          >
            <img 
              src={founderImage} 
              alt="Founders - Sanju Jangid & Omprakash Jangid" 
              className="w-full h-auto object-cover hover:brightness-110 transition-all duration-500"
            />
          </div>

          <div className="text-center">
            {/* Founders Names */}
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 whitespace-nowrap overflow-hidden text-ellipsis"
              style={{animation: animateContent ? 'float-up 0.8s ease-out' : 'none'}}
            >
              Mr. SANJU JANGID & Mr. OMPRAKASH JANGID
            </h2>

            {/* Main Content Card */}
            <div 
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-xl mb-12 border border-gray-700 hover:border-blue-500 shadow-lg hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{animation: animateContent ? 'float-up 0.8s ease-out 0.2s backwards' : 'none'}}
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Driven by a shared vision of design excellence, they lead SO Interiors with a commitment to creating modern, functional, and aesthetically refined spaces. Their combined expertise ensures every project reflects innovation, quality craftsmanship, and attention to detail.
              </p>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-white">
                <p className="text-xl font-semibold">
                  🌟 Transforming ideas into impactful spaces that inspire and elevate everyday experiences.
                </p>
              </div>
            </div>

            {/* Vision Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {visionPoints.map((point, index) => (
                <div 
                  key={index}
                  className="group scroll-trigger bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all duration-500 border border-gray-700 hover:border-blue-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
                  style={{
                    animation: animateContent ? `float-up 0.8s ease-out ${0.4 + index * 0.15}s backwards` : 'none'
                  }}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                      {point.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {point.description}
                    </p>
                  </div>

                  {/* Hover Border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

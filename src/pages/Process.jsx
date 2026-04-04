import React, { useState, useEffect, useRef } from 'react';
import { Footer } from '../components/Footer';
import woodBg from '../assets/wood.jpeg';
import wood2Bg from '../assets/wood2.jpeg';

export const Process = () => {
  const [animateContent, setAnimateContent] = useState(false);
  const stepRefs = useRef([]);

  useEffect(() => {
    setAnimateContent(true);
  }, []);

  // Attach scroll animation hook to all step cards
  useEffect(() => {
    stepRefs.current.forEach((ref) => {
      if (ref) {
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-scroll-in');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);

        observer.observe(ref);
      }
    });
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Understanding',
      description: 'We analyze client needs, vision, and space requirements to understand your unique requirements.',
      icon: '🔍'
    },
    {
      number: '02',
      title: 'Concept Design',
      description: 'Developing layouts, themes, and design direction that align with your vision and goals.',
      icon: '🎨'
    },
    {
      number: '03',
      title: 'Development',
      description: '3D visualization and detailed planning to bring your concept to life with precision.',
      icon: '📐'
    },
    {
      number: '04',
      title: 'Execution',
      description: 'Seamless implementation with precision and quality ensures your project exceeds expectations.',
      icon: '✨'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="py-20 text-white relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-500 opacity-10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 
            className="text-5xl font-bold mb-4"
            style={{animation: animateContent ? 'float-up 0.8s ease-out' : 'none'}}
          >
            Our Process
          </h1>
          <p 
            className="text-xl text-gray-300"
            style={{animation: animateContent ? 'float-up 0.8s ease-out 0.2s backwards' : 'none'}}
          >
            A systematic approach to creating exceptional design solutions
          </p>
        </div>
      </div>

      <div className="py-20" style={{
        backgroundImage: `url(${woodBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Steps Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  ref={(el) => stepRefs.current[index] = el}
                  className="group scroll-trigger relative"
                  style={{
                    animation: animateContent ? `float-up 0.8s ease-out ${index * 0.2}s backwards` : 'none'
                  }}
                >
                  {/* Step Card */}
                  <div className="p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group" style={{
                    backgroundImage: `url(${wood2Bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: '2px solid rgba(255, 248, 220, 0.3)'
                  }}>
                    {/* Background Gradient */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                      backgroundImage: `url(${wood2Bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: '0.3'
                    }}></div>

                    {/* Step number circle */}
                    <div className="relative z-10 flex items-center justify-center h-20 w-20 rounded-full text-white text-3xl font-bold mx-auto mb-6 transform group-hover:scale-110 group-hover:shadow-lg transition-all duration-300" style={{
                      backgroundImage: `url(${wood2Bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      border: '3px solid #FFD700',
                      boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
                    }}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="text-5xl text-center mb-4 transform group-hover:scale-125 transition-transform duration-300 relative z-10">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <h3 className="text-2xl font-bold mb-4 transition-colors duration-300" style={{ color: '#FFF8DC' }}>
                        {step.title}
                      </h3>
                      <p className="transition-colors duration-300 leading-relaxed" style={{ color: '#E8D4B8', fontFamily: 'Georgia, Times New Roman, serif' }}>
                        {step.description}
                      </p>
                    </div>

                    {/* Hover Border */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ border: '2px solid #FFD700' }}></div>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 left-1/2 transform translate-x-1/2 w-full h-1 bg-gradient-to-r from-blue-300 to-purple-300 -z-10"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Process Summary */}
            <div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-xl shadow-2xl text-white transform hover:scale-105 transition-all duration-300"
              style={{
                animation: animateContent ? 'float-up 0.8s ease-out 0.8s backwards' : 'none'
              }}
            >
              <h3 className="text-3xl font-bold text-center mb-6">Our Commitment</h3>
              <p className="text-lg text-center leading-relaxed">
                Each step of our process is designed to ensure clear communication, creative excellence, and exceptional results. We work collaboratively with you throughout every phase to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

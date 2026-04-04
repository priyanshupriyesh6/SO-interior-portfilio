import React, { useState, useEffect, useRef } from 'react';
import { Footer } from '../components/Footer';
import { useScrollAnimation } from '../utils/useScrollAnimation';
import woodBg from '../assets/wood.jpeg';
import wood2Bg from '../assets/wood2.jpeg';

export const Services = () => {
  const [animateContent, setAnimateContent] = useState(false);
  const categoryRefs = useRef([]);
  const offeringRefs = useRef([]);

  useEffect(() => {
    setAnimateContent(true);
  }, []);

  // Attach scroll animation hook to all category cards
  categoryRefs.current.forEach((ref) => {
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

  // Attach scroll animation hook to all offering cards
  offeringRefs.current.forEach((ref) => {
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

  const serviceCategories = [
    { title: 'Residential Interior Design', icon: '🏠' },
    { title: 'Commercial Interior Spaces', icon: '🏢' },
    { title: 'Cafés & Restaurant Design', icon: '☕' },
    { title: 'Bars, Clubs & Lounge Interiors', icon: '🍸' },
    { title: 'Co-working Spaces', icon: '💼' },
    { title: 'Retail Outlets & Showrooms', icon: '🛍️' },
    { title: 'Salons & Lifestyle Spaces', icon: '💇' },
    { title: 'Customized Looks & Design Affinity', icon: '✨' }
  ];

  const serviceOfferings = [
    { title: 'Space Planning & Layout Design', icon: '📐' },
    { title: 'Concept Development', icon: '🎨' },
    { title: '3D Visualization', icon: '🖼️' },
    { title: 'Interior Design & Decoration', icon: '🎭' },
    { title: 'Consultation & Material Selection', icon: '💬' },
    { title: 'End-to-End Execution', icon: '🏗️' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="py-20 text-white relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-500 opacity-10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 
            className="text-5xl font-bold mb-4"
            style={{animation: animateContent ? 'float-up 0.8s ease-out' : 'none'}}
          >
            Our Expertise & Services
          </h1>
          <p 
            className="text-xl text-gray-300"
            style={{animation: animateContent ? 'float-up 0.8s ease-out 0.2s backwards' : 'none'}}
          >
            Comprehensive design solutions for every project type
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
          {/* Service Categories */}
          <div className="mb-20">
            <h2 
              className="text-4xl font-bold mb-12 text-center"
              style={{animation: animateContent ? 'float-up 0.8s ease-out' : 'none', color: '#FFF8DC', fontFamily: 'Georgia, Times New Roman, serif'}}
            >
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceCategories.map((service, index) => (
                <div 
                  key={index}
                  ref={(el) => categoryRefs.current[index] = el}
                  className="group scroll-trigger p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 text-center transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
                  style={{
                    animation: animateContent ? `float-up 0.6s ease-out ${index * 0.1}s backwards` : 'none',
                    backgroundImage: `url(${wood2Bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: '2px solid rgba(255, 248, 220, 0.3)'
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    backgroundImage: `url(${wood2Bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.3'
                  }}></div>

                  <div className="relative z-10">
                    <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <p className="text-lg font-semibold transition-colors duration-300" style={{ color: '#FFF8DC' }}>
                      {service.title}
                    </p>
                  </div>

                  {/* Hover Border */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ border: '2px solid #FFD700' }}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Offerings */}
          <div className="py-20 -mx-4 px-4 rounded-2xl" style={{
            backgroundImage: `url(${wood2Bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div className="container mx-auto">
              <h2 
                className="text-4xl font-bold mb-12 text-center"
                style={{animation: animateContent ? 'float-up 0.8s ease-out 0.2s backwards' : 'none', color: '#FFF8DC', fontFamily: 'Georgia, Times New Roman, serif'}}>
                Services We Provide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceOfferings.map((service, index) => (
                  <div 
                    key={index}
                    ref={(el) => offeringRefs.current[index] = el}
                    className="group scroll-trigger p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
                    style={{
                      animation: animateContent ? `float-up 0.6s ease-out ${0.4 + index * 0.12}s backwards` : 'none',
                      backgroundImage: `url(${wood2Bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      border: '2px solid rgba(255, 248, 220, 0.3)'
                    }}
                  >
                    {/* Background on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                      backgroundImage: `url(${wood2Bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: '0.3'
                    }}></div>

                    <div className="relative z-10">
                      <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 transition-colors duration-300" style={{ color: '#FFF8DC' }}>
                        {service.title}
                      </h3>
                      <p style={{ color: '#E8D4B8', fontFamily: 'Georgia, Times New Roman, serif' }} className="transition-colors duration-300">
                        Professional {service.title.toLowerCase()} tailored to your unique needs and vision.
                      </p>
                    </div>

                    {/* Hover Border */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ border: '2px solid #FFD700' }}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

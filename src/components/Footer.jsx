import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.jpg';

export const Footer = () => {
  const [animateFooter, setAnimateFooter] = useState(false);

  useEffect(() => {
    setAnimateFooter(true);
  }, []);

  const footerLinks = [
    { label: 'Home', to: '/home' },
    { label: 'Services', to: '/services' },
    { label: 'Process', to: '/process' },
    { label: 'Projects', to: '/projects' },
    { label: 'About Us', to: '/about-us' },
    { label: 'Founders', to: '/founders' },
    { label: 'Contact Us', to: '/contact' }
  ];

  const services = [
    'Space Planning',
    '3D Visualization',
    'Interior Design',
    'End-to-End Execution'
  ];

  return (
    <footer className="text-white py-12 relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Decorative Elements */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          {/* Left Column: Company Info & Quick Links */}
          <div className="space-y-8">
            <div 
              style={{
                animation: animateFooter ? 'float-up 0.6s ease-out' : 'none'
              }}
            >
              {/* Logo */}
              <div className="mb-6">
                <img 
                  src={logo} 
                  alt="SO Interiors Logo" 
                  className="h-20 w-auto rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>SO Interiors CO-Powered by Jangid Interior</h3>
              <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
                Luxury Interior Design Studio crafting modern, functional, and aesthetic spaces across Pan India.
              </p>
            </div>

            {/* Quick Links */}
            <div 
              style={{
                animation: animateFooter ? 'float-up 0.6s ease-out 0.1s backwards' : 'none'
              }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>QUICK LINKS</h3>
              <ul className="grid grid-cols-2 gap-3">
                {footerLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      to={link.to} 
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Services & Contact Info */}
          <div className="space-y-8">
            {/* Services */}
            <div 
              style={{
                animation: animateFooter ? 'float-up 0.6s ease-out 0.2s backwards' : 'none'
              }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>SERVICES</h3>
              <ul className="space-y-2">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:translate-x-2 inline-block"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div 
              style={{
                animation: animateFooter ? 'float-up 0.6s ease-out 0.3s backwards' : 'none'
              }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>CONTACT INFO</h3>
              <p className="text-gray-400 mb-2 hover:text-blue-400 transition-colors duration-300 cursor-pointer" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
                📞 9811960048 | 9811960650 | 9599317145
              </p>
              <p className="text-gray-400 mb-2 hover:text-blue-400 transition-colors duration-300 cursor-pointer" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
                ✉️ sointeriorsofficials@gmail.com
              </p>
              <p className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
                📍 Savitri Cinema Complex, GK-2, New Delhi - 110048
              </p>
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div 
          className="border-t border-gray-700 pt-8 mb-8"
          style={{
            animation: animateFooter ? 'float-up 0.6s ease-out 0.4s backwards' : 'none'
          }}
        >
          <h3 className="text-xl font-bold mb-4 text-center text-blue-400" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>Leadership & Vision</h3>
          <div className="text-center mb-6">
            <p className="text-lg font-semibold text-blue-300" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
              Mr. SANJU JANGID & Mr. OMPRAKASH JANGID
            </p>
            <p className="text-gray-400 mt-3 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
              Driven by a shared vision of design excellence, they lead SO Interiors with a commitment to creating modern, functional, and aesthetically refined spaces.
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div 
          className="border-t border-gray-700 pt-8 text-center"
          style={{
            animation: animateFooter ? 'float-up 0.6s ease-out 0.5s backwards' : 'none'
          }}
        >
          <p className="text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            🏢 SO Interiors — Where Space Becomes Signature
          </p>
          <p className="text-gray-500">&copy; 2025 SO Interiors CO-Powered by Jangid Interior. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

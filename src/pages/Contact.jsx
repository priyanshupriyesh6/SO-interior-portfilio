import React, { useState, useEffect, useRef } from 'react';
import { Footer } from '../components/Footer';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('sjB4MKDo9N5DIoubT');

export const Contact = () =>
{
  const [animateContent, setAnimateContent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);
  const contactCardRefs = useRef([]);

  useEffect(() => {
    setAnimateContent(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setMessageStatus({
        type: 'error',
        message: '❌ Please fill in all fields'
      });
      setTimeout(() => setMessageStatus(null), 5000);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessageStatus({
        type: 'error',
        message: '❌ Please enter a valid email address'
      });
      setTimeout(() => setMessageStatus(null), 5000);
      return;
    }

    setIsLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_da4fzif',  // Replace with your EmailJS service ID
        'template_hfui2nj', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'sointeriorsofficials@gmail.com',
          message: formData.message,
          reply_to: formData.email
        }
      );

      setMessageStatus({
        type: 'success',
        message: '✅ Message sent successfully! We\'ll get back to you soon.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Clear message after 5 seconds
      setTimeout(() => setMessageStatus(null), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setMessageStatus({
        type: 'error',
        message: '❌ Failed to send message. Please try again later.'
      });
      setTimeout(() => setMessageStatus(null), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  // Attach scroll animation hook to contact cards
  useEffect(() => {
    contactCardRefs.current.forEach((ref) => {
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

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      {/* Contact Hero Section */}
      <div className="relative py-20 text-white overflow-hidden" style={{ backgroundColor: '#000000' }}>
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full opacity-10 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl" style={{animation: 'float 20s ease-in-out infinite 2s'}} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 
            className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600"
            style={{
              animation: animateContent ? 'float-up 0.8s ease-out 0s backwards' : 'none'
            }}
          >
            Let's Create Something Exceptional
          </h2>
          
          <div className="space-y-4 mb-12">
            <p 
              className="text-xl text-gray-300"
              style={{
                animation: animateContent ? 'float-up 0.8s ease-out 0.2s backwards' : 'none'
              }}
            >
              📞 <span className="text-blue-400">9811960048 | 9811960650 | 9599317145</span>
            </p>
            <p 
              className="text-xl text-gray-300"
              style={{
                animation: animateContent ? 'float-up 0.8s ease-out 0.4s backwards' : 'none'
              }}
            >
              ✉️ <span className="text-blue-400">sointeriorsofficials@gmail.com</span>
            </p>
            <p 
              className="text-xl text-gray-300"
              style={{
                animation: animateContent ? 'float-up 0.8s ease-out 0.6s backwards' : 'none'
              }}
            >
              📍 <span className="text-blue-400">Savitri Cinema Complex, GK-2, New Delhi - 110048</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
            style={{
              animation: animateContent ? 'float-up 0.8s ease-out 0.2s backwards' : 'none'
            }}
          >
            Get in Touch
          </h1>
          <p 
            className="text-lg text-gray-400"
            style={{
              animation: animateContent ? 'float-up 0.8s ease-out 0.4s backwards' : 'none'
            }}
          >
            We'd love to hear from you. Let's build something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Card */}
          <div 
            ref={(el) => contactCardRefs.current[0] = el}
            className="group scroll-trigger relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20"
            style={{
              animation: animateContent ? 'float-up 0.6s ease-out 0.3s backwards' : 'none'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                Contact Information
              </h2>
              <div className="space-y-5">
                <p className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group/item">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="group-hover/item:translate-x-1 transition-transform duration-300">priyanshupriyesh@gmail.com</span>
                </p>
                <p className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group/item">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.212l-2.032.812a11.942 11.942 0 005.576 5.576l.812-2.032a1 1 0 011.212-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span className="group-hover/item:translate-x-1 transition-transform duration-300">9811960048, 9811960650</span>
                </p>
                <p className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group/item">
                  <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  </svg>
                  <span className="group-hover/item:translate-x-1 transition-transform duration-300">Savitri Cinema Complex, GK-2, New Delhi</span>
                </p>
              </div>
              <div className="mt-10">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden border border-gray-600 hover:border-blue-500 transition-colors duration-300">
                  <div className="flex items-center justify-center h-48">
                    <p className="text-gray-400">📍 Map Location Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div 
            ref={(el) => contactCardRefs.current[1] = el}
            className="group scroll-trigger relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
            style={{
              animation: animateContent ? 'float-up 0.6s ease-out 0.5s backwards' : 'none'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
                Send us a Message
              </h2>

              {/* Status Message Display */}
              {messageStatus && (
                <div className={`mb-6 p-4 rounded-lg text-center font-semibold transition-all duration-300 ${
                  messageStatus.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/50 text-green-300' 
                    : 'bg-red-500/20 border border-red-500/50 text-red-300'
                }`}>
                  {messageStatus.message}
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Full Name</label>
                  <input 
                    className="w-full bg-gray-700 text-gray-100 rounded-lg py-3 px-4 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors duration-300 placeholder-gray-500"
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
                  <input 
                    className="w-full bg-gray-700 text-gray-100 rounded-lg py-3 px-4 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors duration-300 placeholder-gray-500"
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Message</label>
                  <textarea 
                    className="w-full bg-gray-700 text-gray-100 rounded-lg py-3 px-4 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors duration-300 placeholder-gray-500 h-32 resize-none"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..." 
                  />
                </div>
                <button 
                  className={`group/btn relative w-full ${
                    isLoading ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50'
                  } text-white font-bold py-3 px-6 rounded-lg overflow-hidden transition-all duration-300 transform ${
                    !isLoading ? 'hover:scale-105' : ''
                  }`}
                  type="submit"
                  disabled={isLoading}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-300" />
                  <span className="relative">{isLoading ? 'Sending...' : 'Send Message ✉️'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

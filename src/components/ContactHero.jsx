import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ContactHero = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 text-white" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>Let's Create Something Exceptional</h2>
        
        <div className="space-y-4 mb-12">
          <p className="text-xl" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            📞 9811960048 | 9811960650 | 9599317145
          </p>
          <p className="text-xl" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            ✉️ sointeriorsofficials@gmail.com
          </p>
          <p className="text-xl" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            📍 Savitri Cinema Complex, GK-2, New Delhi - 110048
          </p>
        </div>

        <button 
          onClick={() => navigate('/contact')}
          className="bg-white text-gray-900 font-bold py-3 px-8 rounded hover:bg-gray-100 transition text-lg"
          style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
        >
          Book Consultation
        </button>
      </div>
    </div>
  );
};

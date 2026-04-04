import React from 'react';
import logo from '../assets/LOGO.jpg';
import woodBg from '../assets/wood.jpeg';

export const Header = () => {
  return (
    <header className="shadow-md" style={{
      backgroundImage: `url(${woodBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="SO Interiors CO-Powered by Jangid Interior" className="h-10 w-auto" />
          <span className="ml-3 font-bold text-xl" style={{ fontFamily: 'Georgia, Times New Roman, serif', color: '#FFF8DC' }}>SO Interiors CO-Powered by Jangid Interior</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" style={{ fontFamily: 'Georgia, Times New Roman, serif', color: '#E8D4B8' }} className="hover:text-yellow-100">Home</a>
          <a href="#" style={{ fontFamily: 'Georgia, Times New Roman, serif', color: '#E8D4B8' }} className="hover:text-yellow-100">About</a>
          <a href="#" style={{ fontFamily: 'Georgia, Times New Roman, serif', color: '#E8D4B8' }} className="hover:text-yellow-100">Services</a>
          <a href="#" style={{ fontFamily: 'Georgia, Times New Roman, serif', color: '#E8D4B8' }} className="hover:text-yellow-100">Projects</a>
          <a href="#" style={{ fontFamily: 'Georgia, Times New Roman, serif', color: '#E8D4B8' }} className="hover:text-yellow-100">Blog</a>
          <a href="#" style={{ fontFamily: 'Georgia, Times New Roman, serif', color: '#E8D4B8' }} className="hover:text-yellow-100">Contact</a>
        </nav>
        <div className="flex items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            Get A Quote
          </button>
        </div>
      </div>
    </header>
  );
};

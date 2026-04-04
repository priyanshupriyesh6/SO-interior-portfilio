import React, { useState, useEffect } from 'react';
// Import project images - Kylin Aerocity
import kylinAero1 from '../assets/Kylin (aerocity)/IMG_4972.PNG';
import kylinAero2 from '../assets/Kylin (aerocity)/IMG_4973.PNG';
import kylinAero3 from '../assets/Kylin (aerocity)/IMG_4974.PNG';
import kylinAero4 from '../assets/Kylin (aerocity)/IMG_4975.PNG';
import kylinAero5 from '../assets/Kylin (aerocity)/IMG_4976.PNG';
import kylinAero6 from '../assets/Kylin (aerocity)/IMG_4977.PNG';
import kylinAero7 from '../assets/Kylin (aerocity)/IMG_4978.PNG';
import kylinAero8 from '../assets/Kylin (aerocity)/IMG_4979.PNG';
import kylinAero9 from '../assets/Kylin (aerocity)/IMG_4980.PNG';
import kylinAero10 from '../assets/Kylin (aerocity)/IMG_4981.PNG';

// Import project images - Kylin Skybar
import kylinSkybar1 from '../assets/Kylin (skybar vasnt kunj)/IMG_5013.PNG';
import kylinSkybar2 from '../assets/Kylin (skybar vasnt kunj)/IMG_5014.PNG';
import kylinSkybar3 from '../assets/Kylin (skybar vasnt kunj)/IMG_5015.PNG';
import kylinSkybar4 from '../assets/Kylin (skybar vasnt kunj)/IMG_5016.PNG';
import kylinSkybar5 from '../assets/Kylin (skybar vasnt kunj)/IMG_5017.PNG';
import kylinSkybar6 from '../assets/Kylin (skybar vasnt kunj)/IMG_5018.PNG';
import kylinSkybar7 from '../assets/Kylin (skybar vasnt kunj)/IMG_5019.PNG';
import kylinSkybar8 from '../assets/Kylin (skybar vasnt kunj)/IMG_5020.PNG';
import kylinSkybar9 from '../assets/Kylin (skybar vasnt kunj)/IMG_5021.PNG';
import kylinSkybar10 from '../assets/Kylin (skybar vasnt kunj)/IMG_5022.PNG';

// Import project images - Shophouse
import shophouse1 from '../assets/Shophouse by kylin (worldmark sec-65)/IMG_5049.PNG';
import shophouse2 from '../assets/Shophouse by kylin (worldmark sec-65)/IMG_5050.PNG';
import shophouse3 from '../assets/Shophouse by kylin (worldmark sec-65)/IMG_5051.PNG';
import shophouse4 from '../assets/Shophouse by kylin (worldmark sec-65)/IMG_5052.PNG';
import shophouse5 from '../assets/Shophouse by kylin (worldmark sec-65)/IMG_5053.PNG';
import shophouse6 from '../assets/Shophouse by kylin (worldmark sec-65)/IMG_5054.PNG';

// Import project images - 18 Comune
import comune1 from '../assets/sectioncard slot images/18comune/1.jpeg';
import comune2 from '../assets/sectioncard slot images/18comune/2.jpeg';
import comune3 from '../assets/sectioncard slot images/18comune/3.jpeg';
import comune4 from '../assets/sectioncard slot images/18comune/4.jpeg';

// Import project images - Adda by SOI7
import adda1 from '../assets/sectioncard slot images/Adda by soi7/1.jpeg';

// Import project images - Rassta
import rassta1 from '../assets/sectioncard slot images/rassta/1.jpeg';
import rassta2 from '../assets/sectioncard slot images/rassta/2.jpeg';
import rassta3 from '../assets/sectioncard slot images/rassta/3.jpeg';
import rassta4 from '../assets/sectioncard slot images/rassta/4.jpeg';

// Import project images - SOI7
import soi71 from '../assets/sectioncard slot images/soi7/1.jpeg';
import soi72 from '../assets/sectioncard slot images/soi7/2.jpeg';
import soi73 from '../assets/sectioncard slot images/soi7/3.jpeg';
import soi74 from '../assets/sectioncard slot images/soi7/4.jpeg';

export const Portfolio = () => {
  const [animateItems, setAnimateItems] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const cardRefs = React.useRef([]);

  const portfolioItems = [
    // Kylin Skybar - 10 images
    { category: 'Bar', title: 'Kylin Skybar - Vasant Kunj', image: kylinSkybar1, description: 'Modern rooftop bar with premium aesthetics' },
    { category: 'Bar', title: 'Kylin Skybar - Signature Lounge', image: kylinSkybar2, description: 'Contemporary lounge design' },
    { category: 'Bar', title: 'Kylin Skybar - Seating Area', image: kylinSkybar3, description: 'Luxury seating arrangements' },
    { category: 'Bar', title: 'Kylin Skybar - Bar Counter', image: kylinSkybar4, description: 'Elegant bar setup' },
    { category: 'Bar', title: 'Kylin Skybar - Ambiance', image: kylinSkybar5, description: 'Atmospheric lighting design' },
    { category: 'Bar', title: 'Kylin Skybar - Entertainment', image: kylinSkybar6, description: 'Entertainment zone' },
    { category: 'Bar', title: 'Kylin Skybar - Interior Design', image: kylinSkybar7, description: 'Interior architecture' },
    { category: 'Bar', title: 'Kylin Skybar - Premium Details', image: kylinSkybar8, description: 'Premium finishing details' },
    { category: 'Bar', title: 'Kylin Skybar - Evening Ambiance', image: kylinSkybar9, description: 'Evening ambiance setup' },
    { category: 'Bar', title: 'Kylin Skybar - VIP Lounge', image: kylinSkybar10, description: 'VIP exclusive area' },
    
    // Kylin Aerocity - 10 images
    { category: 'Residential', title: 'Kylin Aerocity - Living Space', image: kylinAero1, description: 'Sophisticated living space' },
    { category: 'Residential', title: 'Kylin Aerocity - Kitchen Design', image: kylinAero2, description: 'Modern kitchen design' },
    { category: 'Residential', title: 'Kylin Aerocity - Master Bedroom', image: kylinAero3, description: 'Luxury bedroom suite' },
    { category: 'Residential', title: 'Kylin Aerocity - Dining Area', image: kylinAero4, description: 'Elegant dining area' },
    { category: 'Residential', title: 'Kylin Aerocity - Bathroom Suite', image: kylinAero5, description: 'Premium spa bathroom' },
    { category: 'Residential', title: 'Kylin Aerocity - Interior View', image: kylinAero6, description: 'Complete interior view' },
    { category: 'Residential', title: 'Kylin Aerocity - Bedroom Details', image: kylinAero7, description: 'Bedroom design elements' },
    { category: 'Residential', title: 'Kylin Aerocity - Living Lounge', image: kylinAero8, description: 'Lounge seating area' },
    { category: 'Residential', title: 'Kylin Aerocity - Study Area', image: kylinAero9, description: 'Home office space' },
    { category: 'Residential', title: 'Kylin Aerocity - Fixtures & Tiles', image: kylinAero10, description: 'Premium fixtures' },

    // Shophouse - 6 images
    { category: 'Commercial', title: 'Shophouse by Kylin - Entrance', image: shophouse1, description: 'Retail commercial space entrance' },
    { category: 'Commercial', title: 'Shophouse by Kylin - Display Area 1', image: shophouse2, description: 'Main retail display area' },
    { category: 'Commercial', title: 'Shophouse by Kylin - Interior Design', image: shophouse3, description: 'Commercial interior layout' },
    { category: 'Commercial', title: 'Shophouse by Kylin - Display Area 2', image: shophouse4, description: 'Secondary display zone' },
    { category: 'Commercial', title: 'Shophouse by Kylin - Store Layout', image: shophouse5, description: 'Retail space organization' },
    { category: 'Commercial', title: 'Shophouse by Kylin - Premium Finishes', image: shophouse6, description: 'Finishing details' },

    // 18 Comune - 4 images
    { category: 'Residential', title: '18 Comune - Unit 1 Living', image: comune1, description: 'Modern residential living space' },
    { category: 'Residential', title: '18 Comune - Unit 2 Design', image: comune2, description: 'Contemporary residential design' },
    { category: 'Residential', title: '18 Comune - Unit 3 Interior', image: comune3, description: 'Elegant residential interior' },
    { category: 'Residential', title: '18 Comune - Unit 4 Premium', image: comune4, description: 'Luxury residential finishing' },

    // Adda by SOI7 - 1 image
    { category: 'F&B', title: 'Adda by SOI7 - Dining Space', image: adda1, description: 'Trendy F&B establishment' },

    // Rassta - 4 images
    { category: 'Commercial', title: 'Rassta - Main Display', image: rassta1, description: 'Retail display showcase' },
    { category: 'Commercial', title: 'Rassta - Store Interior', image: rassta2, description: 'Commercial retail space' },
    { category: 'Commercial', title: 'Rassta - Design Details', image: rassta3, description: 'Premium design elements' },
    { category: 'Commercial', title: 'Rassta - Ambiance Setup', image: rassta4, description: 'Retail ambiance design' },

    // SOI7 - 4 images
    { category: 'Residential', title: 'SOI7 - Living Room', image: soi71, description: 'Premium residential living' },
    { category: 'Residential', title: 'SOI7 - Bedroom Suite', image: soi72, description: 'Luxury bedroom design' },
    { category: 'Residential', title: 'SOI7 - Kitchen & Dining', image: soi73, description: 'Modern kitchen setup' },
    { category: 'Residential', title: 'SOI7 - Additional Spaces', image: soi74, description: 'Utility and living areas' },
  ];

  const categories = ['All', 'Bar', 'Residential', 'Commercial', 'F&B'];

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  useEffect(() => {
    setAnimateItems(true);
  }, []);

  useEffect(() => {
    setAnimateItems(false);
    const timer = setTimeout(() => setAnimateItems(true), 50);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Set up intersection observer for portfolio items
  useEffect(() => {
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

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredItems]);

  return (
    <div className="py-20" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16 animate-float-up">
          <h2 className="text-5xl font-bold mb-4 text-white text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            A curated collection of our work showcasing luxury, functionality, and innovative design solutions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-slide-in-up">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === cat
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50 scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
              style={{
                animation: animateItems ? `float-up 0.5s ease-out ${idx * 0.1}s backwards` : 'none',
                fontFamily: 'Georgia, Times New Roman, serif'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <div
              ref={(el) => {
                if (el && !cardRefs.current.includes(el)) {
                  cardRefs.current[index] = el;
                }
              }}
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-2xl cursor-pointer transform h-64"
              style={{
                animation: animateItems ? `scale-in 0.5s ease-out ${index * 0.08}s backwards` : 'none',
                opacity: 1
              }}
            >
              {/* Image Container */}
              <div className="relative h-full w-full overflow-hidden bg-gray-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-10 group-hover:translate-y-0">
                <h3 className="text-2xl font-bold mb-2 text-center" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>{item.title}</h3>
                <p className="text-sm text-gray-200 text-center" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
                  {item.description}
                </p>
              </div>

              {/* Blue Glow Border on Hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Portfolio Statement */}
        <div 
          className="text-center bg-gradient-to-r from-gray-800 to-gray-900 p-12 rounded-xl shadow-2xl border border-gray-700 animate-float-up"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)',
            animation: 'pulse-glow 3s ease-in-out infinite'
          }}
        >
          <p className="text-2xl text-white font-semibold leading-relaxed" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
            ✨ "Each project reflects our commitment to detail, design excellence, and client satisfaction."
          </p>
        </div>
      </div>
    </div>
  );
};

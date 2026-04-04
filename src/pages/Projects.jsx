import React, { useState, useEffect, useRef } from 'react';
import { Portfolio } from '../components/Portfolio';
import { Footer } from '../components/Footer';

// Import showcase images - Kylin Aerocity
import kylinAero1 from '../assets/Kylin (aerocity)/IMG_4972.PNG';
import kylinAero2 from '../assets/Kylin (aerocity)/IMG_4975.PNG';
import kylinAero3 from '../assets/Kylin (aerocity)/IMG_4980.PNG';
import kylinAero4 from '../assets/Kylin (aerocity)/IMG_4985.PNG';
import kylinAero5 from '../assets/Kylin (aerocity)/IMG_4990.PNG';
import kylinAero6 from '../assets/Kylin (aerocity)/IMG_4995.PNG';

// Import showcase images - Kylin Skybar
import kylinSkybar1 from '../assets/Kylin (skybar vasnt kunj)/IMG_5013.PNG';
import kylinSkybar2 from '../assets/Kylin (skybar vasnt kunj)/IMG_5020.PNG';
import kylinSkybar3 from '../assets/Kylin (skybar vasnt kunj)/IMG_5025.PNG';
import kylinSkybar4 from '../assets/Kylin (skybar vasnt kunj)/IMG_5030.PNG';
import kylinSkybar5 from '../assets/Kylin (skybar vasnt kunj)/IMG_5038.PNG';
import kylinSkybar6 from '../assets/Kylin (skybar vasnt kunj)/IMG_5045.PNG';

// Import showcase images - Shophouse
import shophouse1 from '../assets/Shophouse by kylin (worldmark sec-65)/IMG_5049.PNG';
import shophouse2 from '../assets/Shophouse by kylin (worldmark sec-65)/IMG_5052.PNG';
import shophouse3 from '../assets/Shophouse by kylin (worldmark sec-65)/IMG_5056.PNG';
import shophouse4 from '../assets/Shophouse by kylin (worldmark sec-65)/IMG_5060.PNG';

// Import showcase images - 18 Comune
import comune1 from '../assets/sectioncard slot images/18comune/1.jpeg';
import comune2 from '../assets/sectioncard slot images/18comune/2.jpeg';
import comune3 from '../assets/sectioncard slot images/18comune/3.jpeg';
import comune4 from '../assets/sectioncard slot images/18comune/4.jpeg';

// Import showcase images - Adda by SOI7
import adda1 from '../assets/sectioncard slot images/Adda by soi7/1.jpeg';

// Import showcase images - Rassta
import rassta1 from '../assets/sectioncard slot images/rassta/1.jpeg';
import rassta2 from '../assets/sectioncard slot images/rassta/2.jpeg';
import rassta3 from '../assets/sectioncard slot images/rassta/3.jpeg';
import rassta4 from '../assets/sectioncard slot images/rassta/4.jpeg';

// Import showcase images - SOI7
import soi71 from '../assets/sectioncard slot images/soi7/1.jpeg';
import soi72 from '../assets/sectioncard slot images/soi7/2.jpeg';
import soi73 from '../assets/sectioncard slot images/soi7/3.jpeg';
import soi74 from '../assets/sectioncard slot images/soi7/4.jpeg';

export const Projects = () => {
  const [animateContent, setAnimateContent] = useState(false);
  const projectCardRefs = useRef([]);

  useEffect(() => {
    setAnimateContent(true);
  }, []);

  const projectShowcase = [
    // Kylin Aerocity - Multiple views
    {
      name: 'Kylin Aerocity - Living Spaces',
      type: 'Residential',
      icon: '🏠',
      image: kylinAero1,
      description: 'Luxury residential interiors with modern aesthetics',
      highlights: '35+ Images | Premium Finishes | Smart Design'
    },
    {
      name: 'Kylin Aerocity - Bedrooms',
      type: 'Residential',
      icon: '🏠',
      image: kylinAero2,
      description: 'Elegant bedroom designs with contemporary finishes',
      highlights: 'Master Bedroom | Guest Rooms | Luxury Details'
    },
    {
      name: 'Kylin Aerocity - Dining Areas',
      type: 'Residential',
      icon: '🍽️',
      image: kylinAero3,
      description: 'Sophisticated dining spaces with premium furnishings',
      highlights: 'Open Kitchen | dining lounge | Modern Aesthetics'
    },
    {
      name: 'Kylin Aerocity - Bathrooms',
      type: 'Residential',
      icon: '🚿',
      image: kylinAero4,
      description: 'Luxurious spa-like bathroom installations',
      highlights: 'Premium Tiles | Modern Fixtures | Ambient Lighting'
    },
    {
      name: 'Kylin Aerocity - Entertainment',
      type: 'Residential',
      icon: '📺',
      image: kylinAero5,
      description: 'Home theater and entertainment zones',
      highlights: 'Media Room | Gaming Area | Lounge Seating'
    },
    {
      name: 'Kylin Aerocity - Interiors',
      type: 'Residential',
      icon: '✨',
      image: kylinAero6,
      description: 'Detail shots of premium interior elements',
      highlights: 'Lighting Design | Furniture | Decor Elements'
    },

    // Kylin Skybar - Multiple views
    {
      name: 'Kylin Skybar - Main Lounge',
      type: 'Bar & Lounge',
      icon: '🍸',
      image: kylinSkybar1,
      description: 'Contemporary rooftop bar with premium ambiance',
      highlights: '37+ Images | Modern Lounge | Entertainment Zones'
    },
    {
      name: 'Kylin Skybar - Seating Area',
      type: 'Bar & Lounge',
      icon: '🪑',
      image: kylinSkybar2,
      description: 'Comfortable seating arrangements with city views',
      highlights: 'VIP Lounge | Comfortable Seating | Sky Views'
    },
    {
      name: 'Kylin Skybar - Bar Counter',
      type: 'Bar & Lounge',
      icon: '🛟',
      image: kylinSkybar3,
      description: 'Modern bar counter with premium service area',
      highlights: 'Bar Design | Service Area | Premium Materials'
    },
    {
      name: 'Kylin Skybar - Ambiance',
      type: 'Bar & Lounge',
      icon: '💡',
      image: kylinSkybar4,
      description: 'Evening ambiance with sophisticated lighting',
      highlights: 'Ambient Lighting | Evening Views | Premium Feel'
    },
    {
      name: 'Kylin Skybar - Details',
      type: 'Bar & Lounge',
      icon: '✨',
      image: kylinSkybar5,
      description: 'Close-up details of bar furnishings and decor',
      highlights: 'Decor Details | Premium Finishes | Design Elements'
    },
    {
      name: 'Kylin Skybar - Outdoor Area',
      type: 'Bar & Lounge',
      icon: '🌙',
      image: kylinSkybar6,
      description: 'Outdoor seating with panoramic views',
      highlights: 'Outdoor Lounge | Night Views | Premium Seating'
    },

    // Shophouse Kylin - Multiple views
    {
      name: 'Shophouse Kylin - Main Entrance',
      type: 'Commercial',
      icon: '🏢',
      image: shophouse1,
      description: 'Retail commercial space with innovative design',
      highlights: 'Multi-purpose | Retail Excellence | Contemporary'
    },
    {
      name: 'Shophouse Kylin - Display Area',
      type: 'Commercial',
      icon: '🛍️',
      image: shophouse2,
      description: 'Modern retail display with premium finishes',
      highlights: 'Product Display | Retail Layout | Modern Design'
    },
    {
      name: 'Shophouse Kylin - Interior Design',
      type: 'Commercial',
      icon: '📦',
      image: shophouse3,
      description: 'Well-organized interior retail space',
      highlights: 'Space Efficiency | Modern Fixtures | Retail Zones'
    },
    {
      name: 'Shophouse Kylin - Lighting Design',
      type: 'Commercial',
      icon: '💡',
      image: shophouse4,
      description: 'Professional lighting setup for retail ambiance',
      highlights: 'Ambient Lighting | Product Highlighting | Modern'
    },

    // 18 Comune - Multiple views
    {
      name: '18 Comune - Unit 1',
      type: 'Residential',
      icon: '🏠',
      image: comune1,
      description: 'Modern residential project with elegant finishing',
      highlights: '4 Images | Contemporary Design | Urban Living'
    },
    {
      name: '18 Comune - Unit 2',
      type: 'Residential',
      icon: '🏠',
      image: comune2,
      description: 'Contemporary residential unit with smart layouts',
      highlights: 'Open Plan | Modern Finishes | Bright Spaces'
    },
    {
      name: '18 Comune - Unit 3',
      type: 'Residential',
      icon: '🏠',
      image: comune3,
      description: 'Spacious modern home with elegant interiors',
      highlights: 'Spacious Layout | Premium Materials | Natural Light'
    },
    {
      name: '18 Comune - Unit 4',
      type: 'Residential',
      icon: '🏠',
      image: comune4,
      description: 'Luxury residential unit with contemporary style',
      highlights: 'Luxury Finishes | Modern Design | Comfort Living'
    },

    // Adda by SOI7
    {
      name: 'Adda by SOI7',
      type: 'F&B',
      icon: '🍽️',
      image: adda1,
      description: 'Trendy food & beverage space with vibrant atmosphere',
      highlights: 'Premium Ambiance | Social Space | Modern Interiors'
    },

    // Rassta - Multiple views
    {
      name: 'Rassta - Main Space',
      type: 'Commercial',
      icon: '🏢',
      image: rassta1,
      description: 'Commercial retail space with contemporary design',
      highlights: '4 Images | Retail Excellence | Modern Layout'
    },
    {
      name: 'Rassta - Display Area',
      type: 'Commercial',
      icon: '🛍️',
      image: rassta2,
      description: 'Modern retail display configuration',
      highlights: 'Product Showcase | Modern Design | Professional'
    },
    {
      name: 'Rassta - Interior Details',
      type: 'Commercial',
      icon: '✨',
      image: rassta3,
      description: 'Detailed interior design elements',
      highlights: 'Design Details | Modern Fixtures | Premium Finish'
    },
    {
      name: 'Rassta - Lighting Setup',
      type: 'Commercial',
      icon: '💡',
      image: rassta4,
      description: 'Professional lighting for retail ambiance',
      highlights: 'Ambient Lighting | Retail Feel | Contemporary'
    },

    // SOI7 - Multiple views
    {
      name: 'SOI7 - Main Living Area',
      type: 'Residential',
      icon: '🏠',
      image: soi71,
      description: 'Premium residential interiors with sophisticated aesthetics',
      highlights: '4 Images | Luxury Finishes | Smart Spaces'
    },
    {
      name: 'SOI7 - Bedroom Space',
      type: 'Residential',
      icon: '🛏️',
      image: soi72,
      description: 'Luxury bedroom with contemporary design',
      highlights: 'Master Bedroom | Premium Finishes | Comfort Design'
    },
    {
      name: 'SOI7 - Kitchen & Dining',
      type: 'Residential',
      icon: '🍳',
      image: soi73,
      description: 'Modern kitchen with premium appliances',
      highlights: 'Modern Kitchen | Dining Area | Premium Fixtures'
    },
    {
      name: 'SOI7 - Additional Spaces',
      type: 'Residential',
      icon: '✨',
      image: soi74,
      description: 'Additional living spaces with elegant finishes',
      highlights: 'Utility Areas | Smart Design | Quality Materials'
    }
  ];

  // Attach scroll animation hook to project cards
  useEffect(() => {
    projectCardRefs.current.forEach((ref) => {
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
    <div className="projects-container">
      <style jsx>{`
        .projects-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
          color: #fff;
        }

        .projects-header {
          padding: 80px 40px 40px;
          text-align: center;
          animation: fadeInDown 0.8s ease-out;
        }

        .projects-header h1 {
          font-size: 3rem;
          margin-bottom: 10px;
          font-weight: 700;
          background: linear-gradient(135deg, #ff6b6b, #ffd93d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .projects-header p {
          font-size: 1.1rem;
          color: #999;
          margin-top: 15px;
        }

        .showcase-section {
          padding: 60px 40px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .showcase-title {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 50px;
          background: linear-gradient(135deg, #ffd93d, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .showcase-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0;
          animation: slideUp 0.6s ease-out forwards;
        }

        .showcase-card:nth-child(n) {
          animation-delay: calc(0.05s * var(--index, 1));
        }

        .showcase-card:nth-child(1) { animation-delay: 0.05s; }
        .showcase-card:nth-child(2) { animation-delay: 0.1s; }
        .showcase-card:nth-child(3) { animation-delay: 0.15s; }
        .showcase-card:nth-child(4) { animation-delay: 0.2s; }
        .showcase-card:nth-child(5) { animation-delay: 0.25s; }
        .showcase-card:nth-child(6) { animation-delay: 0.3s; }
        .showcase-card:nth-child(7) { animation-delay: 0.35s; }
        .showcase-card:nth-child(8) { animation-delay: 0.4s; }
        .showcase-card:nth-child(9) { animation-delay: 0.45s; }
        .showcase-card:nth-child(10) { animation-delay: 0.5s; }
        .showcase-card:nth-child(11) { animation-delay: 0.55s; }
        .showcase-card:nth-child(12) { animation-delay: 0.6s; }
        .showcase-card:nth-child(13) { animation-delay: 0.65s; }
        .showcase-card:nth-child(14) { animation-delay: 0.7s; }
        .showcase-card:nth-child(15) { animation-delay: 0.75s; }
        .showcase-card:nth-child(16) { animation-delay: 0.8s; }
        .showcase-card:nth-child(17) { animation-delay: 0.85s; }
        .showcase-card:nth-child(18) { animation-delay: 0.9s; }
        .showcase-card:nth-child(19) { animation-delay: 0.95s; }
        .showcase-card:nth-child(20) { animation-delay: 1s; }
        .showcase-card:nth-child(21) { animation-delay: 1.05s; }
        .showcase-card:nth-child(22) { animation-delay: 1.1s; }
        .showcase-card:nth-child(23) { animation-delay: 1.15s; }
        .showcase-card:nth-child(24) { animation-delay: 1.2s; }
        .showcase-card:nth-child(25) { animation-delay: 1.25s; }
        .showcase-card:nth-child(26) { animation-delay: 1.3s; }
        .showcase-card:nth-child(27) { animation-delay: 1.35s; }
        .showcase-card:nth-child(28) { animation-delay: 1.4s; }
        .showcase-card:nth-child(29) { animation-delay: 1.45s; }
        .showcase-card:nth-child(30) { animation-delay: 1.5s; }
        .showcase-card:nth-child(31) { animation-delay: 1.55s; }
        .showcase-card:nth-child(32) { animation-delay: 1.6s; }
        .showcase-card:nth-child(33) { animation-delay: 1.65s; }
        .showcase-card:nth-child(34) { animation-delay: 1.7s; }
        .showcase-card:nth-child(35) { animation-delay: 1.75s; }

        .showcase-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 107, 107, 0.5);
          box-shadow: 0 20px 40px rgba(255, 107, 107, 0.2);
        }

        .showcase-image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .showcase-card:hover .showcase-image {
          transform: scale(1.05);
        }

        .showcase-content {
          padding: 25px;
        }

        .showcase-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .showcase-icon {
          font-size: 1.8rem;
        }

        .showcase-name {
          font-size: 1.3rem;
          color: #fff;
          margin: 0;
        }

        .showcase-type {
          display: inline-block;
          background: rgba(255, 107, 107, 0.2);
          color: #ff6b6b;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          margin-bottom: 12px;
        }

        .showcase-description {
          color: #999;
          font-size: 0.9rem;
          margin-bottom: 12px;
        }

        .showcase-highlights {
          font-size: 0.8rem;
          color: #666;
          padding-top: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          padding: 60px 40px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0;
          animation: slideUp 0.6s ease-out forwards;
        }

        .project-card:nth-child(1) {
          animation-delay: 0.1s;
        }

        .project-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .project-card:nth-child(3) {
          animation-delay: 0.3s;
        }

        .project-card:nth-child(4) {
          animation-delay: 0.4s;
        }

        .project-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 107, 107, 0.5);
          box-shadow: 0 20px 40px rgba(255, 107, 107, 0.2);
        }

        .project-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .project-card h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: #fff;
        }

        .project-category {
          display: inline-block;
          background: rgba(255, 107, 107, 0.2);
          color: #ff6b6b;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          margin-bottom: 15px;
        }

        .project-card p {
          color: #999;
          margin-bottom: 15px;
          font-size: 0.95rem;
        }

        .project-highlights {
          font-size: 0.85rem;
          color: #666;
          padding: 10px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .featured-section-title {
          font-size: 2rem;
          text-align: center;
          margin: 60px 0 40px;
          background: linear-gradient(135deg, #ff6b6b, #ffd93d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes animate-scroll-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .projects-header {
            padding: 60px 20px 30px;
          }

          .projects-header h1 {
            font-size: 2rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            padding: 40px 20px;
          }

          .showcase-section {
            padding: 40px 20px;
          }

          .showcase-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div className="projects-header">
        <h1>Our Projects</h1>
        <p>Showcasing our finest works across residential, commercial, and hospitality sectors</p>
      </div>

      {/* Project Showcase Section */}
      <div className="showcase-section">
        <h2 className="showcase-title">Featured Project Showcase</h2>
        <div className="showcase-grid">
          {projectShowcase.map((project, idx) => (
            <div key={idx} className="showcase-card">
              <img src={project.image} alt={project.name} className="showcase-image" />
              <div className="showcase-content">
                <div className="showcase-header">
                  <span className="showcase-icon">{project.icon}</span>
                  <p className="showcase-name">{project.name}</p>
                </div>
                <span className="showcase-type">{project.type}</span>
                <p className="showcase-description">{project.description}</p>
                <p className="showcase-highlights">{project.highlights}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Portfolio Section */}
      <h2 className="featured-section-title">Complete Portfolio Gallery</h2>
      <Portfolio />

      {/* Project Category Cards */}
      <div className="projects-grid">
        <div className="project-card" ref={(el) => projectCardRefs.current[0] = el}>
          <p className="project-icon">🏠</p>
          <h3>Residential</h3>
          <span className="project-category">Interior Design</span>
          <p>Modern home designs with contemporary aesthetics and functional layouts</p>
          <p className="project-highlights">✓ Custom layouts | ✓ Premium materials | ✓ Smart spaces</p>
        </div>
        <div className="project-card" ref={(el) => projectCardRefs.current[1] = el}>
          <p className="project-icon">☕</p>
          <h3>Café & Dining</h3>
          <span className="project-category">Hospitality</span>
          <p>Luxury dining spaces with ambient design and premium finishes</p>
          <p className="project-highlights">✓ Ambiance design | ✓ Comfort seating | ✓ Modern aesthetics</p>
        </div>
        <div className="project-card" ref={(el) => projectCardRefs.current[2] = el}>
          <p className="project-icon">🏢</p>
          <h3>Commercial</h3>
          <span className="project-category">Office & Retail</span>
          <p>Professional office and retail spaces designed for productivity</p>
          <p className="project-highlights">✓ Space efficiency | ✓ Brand identity | ✓ Modern fixtures</p>
        </div>
        <div className="project-card" ref={(el) => projectCardRefs.current[3] = el}>
          <p className="project-icon">🎭</p>
          <h3>Hospitality</h3>
          <span className="project-category">Premium Spaces</span>
          <p>Premium hospitality spaces that deliver exceptional guest experiences</p>
          <p className="project-highlights">✓ Luxury details | ✓ Guest comfort | ✓ Exclusive designs</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

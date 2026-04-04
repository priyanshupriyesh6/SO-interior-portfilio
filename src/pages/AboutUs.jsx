import React from 'react';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export const AboutUs = () => {
  const navigate = useNavigate();

  // Services data for the expertise section
  const expertise = [
    'Residential Interior Design',
    'Commercial Interior Spaces',
    'Cafés & Restaurant Design',
    'Bars, Clubs & Lounge Interiors',
    'Co-working Spaces',
    'Retail Outlets & Showrooms',
    'Salons & Lifestyle Spaces',
    'Customized Looks & Design Affinity'
  ];

  const services = [
    'Space Planning & Layout Design',
    'Concept Development',
    '3D Visualization',
    'Interior Design & Decoration',
    'Consultation & Material Selection',
    'End-to-End Execution'
  ];

  // Sample images from different projects
  const showcaseImages = [
    '/src/assets/Kylin (aerocity)/IMG_4972.PNG',
    '/src/assets/Kylin (skybar vasnt kunj)/IMG_5013.PNG',
    '/src/assets/Shophouse by kylin (worldmark sec-65)/IMG_5048.PNG',
    '/src/assets/Kylin (aerocity)/IMG_4980.PNG',
    '/src/assets/Kylin (skybar vasnt kunj)/IMG_5025.PNG',
    '/src/assets/Shophouse by kylin (worldmark sec-65)/IMG_5055.PNG',
  ];

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>SO INTERIORS</h1>
          <p className="about-tagline">Creating Spaces That Enhance Life</p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="about-main">
        <div className="about-container">
          <div className="about-intro">
            <h2>Our Philosophy</h2>
            <p className="about-description">
              At SO Interiors, we believe that exceptional design enhances the quality of life.
            </p>
            <p className="about-text">
              We combine artistic creativity with practical functionality to design spaces that are not only visually appealing but also purposeful and livable.
            </p>
            <p className="about-text">
              From concept to execution, our approach ensures that every detail reflects quality, innovation, and client vision.
            </p>
            <p className="about-highlight">
              "We don't just design spaces — we create experiences."
            </p>
          </div>

          {/* Showcase Grid */}
          <div className="about-showcase-grid">
            {showcaseImages.map((img, idx) => (
              <div key={idx} className="showcase-card">
                <img src={img} alt={`Project showcase ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="expertise-container">
          <h2>Our Expertise</h2>
          <div className="expertise-grid">
            {expertise.map((item, idx) => (
              <div key={idx} className="expertise-card">
                <div className="expertise-number">{idx + 1}</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-showcase">
        <div className="services-showcase-container">
          <h2>Our Services</h2>
          <div className="services-showcase-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-showcase-card">
                <div className="service-number">{idx + 1}</div>
                <h3>{service}</h3>
              </div>
            ))}
          </div>
          <button 
            className="cta-button"
            onClick={() => navigate('/services')}
          >
            Explore Full Services
          </button>
        </div>
      </section>

      <Footer />

      <style>{`
        .about-us-page {
          width: 100%;
          background: #000000;
          color: #E8D4B8;
        }

        /* Hero Section */
        .about-hero {
          min-height: 400px;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 80px 20px;
          position: relative;
          overflow: hidden;
        }

        .about-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('/src/assets/banner.jpeg');
          background-size: cover;
          background-position: center;
          opacity: 0.3;
          z-index: 1;
        }

        .about-hero-content {
          position: relative;
          z-index: 2;
        }

        .about-hero h1 {
          font-size: 4rem;
          font-weight: 900;
          letter-spacing: 2px;
          margin-bottom: 20px;
          font-family: Georgia, 'Times New Roman', serif;
          color: #FFD700;
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
        }

        .about-tagline {
          font-size: 1.8rem;
          font-family: Georgia, 'Times New Roman', serif;
          color: #FFF8DC;
          font-weight: 300;
          letter-spacing: 1px;
        }

        /* Main About Section */
        .about-main {
          background: url('/src/assets/wood.jpeg');
          background-size: cover;
          background-attachment: fixed;
          padding: 80px 20px;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-intro {
          background: rgba(107, 68, 35, 0.95);
          padding: 60px;
          border-radius: 8px;
          margin-bottom: 60px;
          border: 2px solid rgba(255, 215, 0, 0.3);
        }

        .about-intro h2 {
          font-size: 2.5rem;
          font-family: Georgia, 'Times New Roman', serif;
          color: #FFD700;
          margin-bottom: 30px;
          letter-spacing: 1px;
        }

        .about-description {
          font-size: 1.6rem;
          font-family: Georgia, 'Times New Roman', serif;
          color: #FFF8DC;
          font-weight: 600;
          margin-bottom: 25px;
          line-height: 1.8;
        }

        .about-text {
          font-size: 1.1rem;
          font-family: Georgia, 'Times New Roman', serif;
          color: #E8D4B8;
          line-height: 1.9;
          margin-bottom: 20px;
          text-align: justify;
        }

        .about-highlight {
          font-size: 1.4rem;
          font-family: Georgia, 'Times New Roman', serif;
          color: #FFD700;
          font-style: italic;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 2px solid rgba(255, 215, 0, 0.5);
          font-weight: 600;
        }

        /* Showcase Grid */
        .about-showcase-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-top: 60px;
        }

        .showcase-card {
          overflow: hidden;
          border-radius: 8px;
          height: 300px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          transition: transform 0.4s ease;
          border: 3px solid rgba(255, 215, 0, 0.2);
        }

        .showcase-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255, 215, 0, 0.6);
        }

        .showcase-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Expertise Section */
        .expertise-section {
          background: #000000;
          padding: 80px 20px;
          border-top: 3px solid #FFD700;
        }

        .expertise-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .expertise-section h2 {
          font-size: 2.5rem;
          font-family: Georgia, 'Times New Roman', serif;
          color: #FFD700;
          text-align: center;
          margin-bottom: 60px;
          letter-spacing: 1px;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .expertise-card {
          background: url('/src/assets/wood2.jpeg');
          background-size: cover;
          padding: 40px;
          border-radius: 8px;
          border: 2px solid rgba(255, 215, 0, 0.3);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 20px;
          min-height: 100px;
        }

        .expertise-card:hover {
          transform: translateX(10px);
          border-color: rgba(255, 215, 0, 0.8);
          box-shadow: 0 8px 20px rgba(255, 215, 0, 0.2);
        }

        .expertise-number {
          font-size: 1.8rem;
          font-weight: bold;
          color: #FFD700;
          min-width: 40px;
          font-family: Georgia, 'Times New Roman', serif;
        }

        .expertise-card p {
          font-size: 1rem;
          font-family: Georgia, 'Times New Roman', serif;
          color: #FFF8DC;
          font-weight: 500;
          line-height: 1.6;
        }

        /* Services Showcase Section */
        .services-showcase {
          background: url('/src/assets/wood.jpeg');
          background-size: cover;
          background-attachment: fixed;
          padding: 80px 20px;
        }

        .services-showcase-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .services-showcase h2 {
          font-size: 2.5rem;
          font-family: Georgia, 'Times New Roman', serif;
          color: #FFD700;
          text-align: center;
          margin-bottom: 60px;
          letter-spacing: 1px;
        }

        .services-showcase-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .service-showcase-card {
          background: rgba(139, 111, 71, 0.95);
          padding: 40px;
          border-radius: 8px;
          border-left: 5px solid #FFD700;
          transition: all 0.3s ease;
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .service-showcase-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border-left-color: #FFF8DC;
        }

        .service-number {
          font-size: 2rem;
          font-weight: bold;
          color: #FFD700;
          min-width: 50px;
          font-family: Georgia, 'Times New Roman', serif;
        }

        .service-showcase-card h3 {
          font-size: 1.1rem;
          font-family: Georgia, 'Times New Roman', serif;
          color: #FFF8DC;
          font-weight: 600;
          line-height: 1.6;
        }

        /* CTA Button */
        .cta-button {
          display: block;
          margin: 40px auto 0;
          padding: 16px 50px;
          background: linear-gradient(135deg, #FFD700 0%, #FFC700 100%);
          color: #1a1a1a;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-family: Georgia, 'Times New Roman', serif;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 8px 20px rgba(255, 215, 0, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(255, 215, 0, 0.5);
          background: linear-gradient(135deg, #FFC700 0%, #FFD700 100%);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 2.5rem;
          }

          .about-tagline {
            font-size: 1.2rem;
          }

          .about-intro {
            padding: 40px;
          }

          .about-intro h2 {
            font-size: 1.8rem;
          }

          .about-description {
            font-size: 1.2rem;
          }

          .about-text {
            font-size: 1rem;
          }

          .expertise-section h2,
          .services-showcase h2 {
            font-size: 1.8rem;
          }

          .expertise-grid,
          .services-showcase-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

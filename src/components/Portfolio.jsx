import { useState } from 'react';
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
  const [activeCategory, setActiveCategory] = useState('All');

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
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="page-section pt-0">
      <div className="section-inner">
        <div className="mb-10 max-w-3xl">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            A selection of residential, commercial, dining, and lifestyle interiors designed by SO Interiors.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
                activeCategory === cat
                  ? 'border-[var(--color-border-strong)] bg-[rgba(212,175,55,0.12)] text-[var(--color-text)]'
                  : 'border-white/10 bg-white/[0.03] text-[var(--color-muted)] hover:border-[var(--color-border)] hover:text-[#fff7de]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map((item, index) => (
            <article key={`${item.title}-${index}`} className="surface-card overflow-hidden">
              <div className="image-frame rounded-none border-x-0 border-t-0 border-b border-white/8 shadow-none">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[260px] w-full"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">{item.category}</p>
                <h3 className="text-xl font-semibold text-[var(--color-gold)]">{item.title}</h3>
                <p className="leading-7 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

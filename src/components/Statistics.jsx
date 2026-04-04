import React, { useState, useEffect, useRef } from 'react';

export const Statistics = () => {
  const [animateStats, setAnimateStats] = useState(false);
  const [counts, setCounts] = useState({ clients: 0, projects: 0, awards: 0 });
  const ref = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animateStats) {
          setAnimateStats(true);
          // Start counting animation
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [animateStats]);

  // Set up intersection observer for stat cards
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -20px 0px'
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
  }, [animateStats]);

  const animateCounters = () => {
    const duration = 2000;
    const startTime = Date.now();

    const targetStats = {
      clients: 380,
      projects: 500,
      awards: 75
    };

    const counter = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        clients: Math.floor(targetStats.clients * progress),
        projects: Math.floor(targetStats.projects * progress),
        awards: Math.floor(targetStats.awards * progress)
      });

      if (progress === 1) clearInterval(counter);
    }, 50);
  };

  const stats = [
    {
      number: `${counts.clients}+`,
      label: 'Happy Clients',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: `${counts.projects}+`,
      label: 'Projects Completed',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: `${counts.awards}+`,
      label: 'Repeated Clients',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background Animation Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6"
            style={{
              animation: animateStats ? 'float-up 0.8s ease-out' : 'none',
              fontFamily: 'Georgia, Times New Roman, serif'
            }}
          >
            Our Achievements
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            style={{
              animation: animateStats ? 'float-up 0.8s ease-out 0.2s backwards' : 'none',
              fontFamily: 'Georgia, Times New Roman, serif'
            }}
          >
            Years of excellence, innovation, and commitment to creating extraordinary spaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              ref={(el) => {
                if (el && !cardRefs.current.includes(el)) {
                  cardRefs.current[index] = el;
                }
              }}
              key={index}
              className={`group relative overflow-hidden rounded-2xl p-10 md:p-12 text-center transform transition-all duration-500`}
              style={{
                animation: animateStats ? `float-up 0.8s ease-out ${index * 0.2}s backwards` : 'none',
                backgroundImage: `linear-gradient(135deg, ${
                  stat.color === 'from-blue-500 to-blue-600'
                    ? 'rgba(59, 130, 246, 0.2)'
                    : stat.color === 'from-purple-500 to-purple-600'
                    ? 'rgba(147, 51, 234, 0.2)'
                    : 'rgba(236, 72, 153, 0.2)'
                }, rgba(15, 23, 42, 0.5))`,
                opacity: 1
              }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

              {/* Glowing Border */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-2xl transition-colors duration-500`} style={{
                borderImage: stat.color === 'from-blue-500 to-blue-600' 
                  ? 'linear-gradient(135deg, #3b82f6, #1e40af) 1'
                  : stat.color === 'from-purple-500 to-purple-600'
                  ? 'linear-gradient(135deg, #9333ea, #6b21a8) 1'
                  : 'linear-gradient(135deg, #ec4899, #be185d) 1'
              }}></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Counter Number */}
                <div className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                  {stat.number}
                </div>

                {/* Label */}
                <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300 font-semibold" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
                  {stat.label}
                </p>
              </div>

              {/* Hover Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-400">Since 2016</p>
              <p className="text-gray-400 mt-2">Years in Business</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-400">Pan India</p>
              <p className="text-gray-400 mt-2">Service Coverage</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-pink-400">100%</p>
              <p className="text-gray-400 mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

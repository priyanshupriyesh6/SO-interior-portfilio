import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Star } from 'lucide-react';
import logo from '../assets/LOGO.jpg';

const navItems = [
  { label: 'Home', to: '/home' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Projects', to: '/projects' },
  { label: 'Process', to: '/process' },
  { label: 'Founders', to: '/founders' },
  { label: 'Contact', to: '/contact' },
];

export const SiteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isIntroRoute = location.pathname === '/';

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen);

    return () => {
      document.body.classList.remove('nav-open');
    };
  }, [isOpen]);

  if (isIntroRoute) {
    return null;
  }

  return (
    <header className="navbar-shell">
      <div className="navbar-inner">
        <Link to="/home" className="nav-brand" aria-label="SO Interiors home" onClick={() => setIsOpen(false)}>
          <div className="nav-brand-logo">
            <img src={logo} alt="SO Interiors logo" />
          </div>
          <div className="min-w-0">
            <p className="brand-text text-xl font-semibold leading-tight md:text-2xl">SO Interiors</p>
            <p className="truncate text-xs uppercase tracking-[0.18em] text-[var(--color-muted)] md:text-sm">
              Co-Powered by Jangid Interior
            </p>
          </div>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="nav-star-button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <Star size={18} fill="currentColor" />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className="mobile-menu"
        data-open={isOpen}
        aria-hidden={!isOpen}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => `nav-link-mobile ${isActive ? 'active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

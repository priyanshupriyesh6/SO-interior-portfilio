import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.jpg';

export const Footer = () => {
  const footerLinks = [
    { label: 'Home', to: '/home' },
    { label: 'About Us', to: '/about-us' },
    { label: 'Projects', to: '/projects' },
    { label: 'Process', to: '/process' },
    { label: 'Founders', to: '/founders' },
    { label: 'Contact', to: '/contact' },
  ];

  const expertise = [
    'Residential interiors',
    'Commercial spaces',
    'Dining formats',
    'Execution support',
  ];

  return (
    <footer className="border-t border-white/8 bg-[#040404] px-4 py-12">
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr,0.9fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="nav-brand-logo">
                <img src={logo} alt="SO Interiors logo" />
              </div>
              <div>
                <p className="brand-text text-2xl font-semibold">SO Interiors</p>
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Co-Powered by Jangid Interior
                </p>
              </div>
            </div>
            <p className="max-w-md leading-7 text-[var(--color-muted)]">
              Where Space Becomes Signature.
            </p>
            <div className="flex flex-wrap gap-3">
              {expertise.map((item) => (
                <span key={item} className="static-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="section-label">Navigation</p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-[var(--color-muted)] transition-colors duration-200 hover:text-[#fff7de]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div>
              <p className="section-label">Contact</p>
              <div className="space-y-3 leading-7 text-[var(--color-muted)]">
                <a href="tel:+91 9811960048 | +91 9811960650 | +91 9599317145" className="block transition-colors duration-200 hover:text-[#fff7de]">
                  +91 9811960048 | +91 9811960650 | +91 9599317145
                </a>
                <a href="mailto:sointeriorsofficials@gmail.com" className="block transition-colors duration-200 hover:text-[#fff7de]">
                  sointeriorsofficials@gmail.com
                </a>
                <p>Savitri Cinema Complex, GK-2, New Delhi - 110048</p>
              </div>
            </div>

            <div className="surface-card-soft p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">Brand Line</p>
              <p className="mt-3 leading-7 text-[var(--color-muted)]">
                Where Space Becomes Signature.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/8 pt-6 text-sm text-[var(--color-muted)]">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>&copy; 2026 SO Interiors CO-Powered by Jangid Interior. All rights reserved.</p>
            <p className="brand-text">SO Interiors</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

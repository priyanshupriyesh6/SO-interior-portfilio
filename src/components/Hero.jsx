import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import banner from '../assets/banner1.png';
import homeback from '../assets/homeback.jpg';

export const Hero = () => {
  return (
    <section className="page-section relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={homeback}
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-black/72" />
      </div>

      <div className="section-inner relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr,0.92fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="section-label">Luxury Interior Design Studio</p>
              <h1 className="section-title max-w-3xl">
                SO Interiors creates disciplined, high-impact spaces across residential, commercial, and hospitality projects.
              </h1>
              <p className="section-subtitle max-w-2xl">
                We translate brief, brand, and function into interiors that feel refined, usable, and built to last.
                The visual language stays warm, clean, and premium from concept to execution.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Residential', 'Commercial', 'Hospitality'].map((service) => (
                <span key={service} className="static-pill">
                  {service}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects" className="button-primary">
                View Portfolio
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="button-secondary">
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="surface-card relative overflow-hidden rounded-[28px] p-4 sm:p-5">
            <div className="image-frame rounded-[22px] bg-[#121212] p-5">
              <img
                src={banner}
                alt="SO Interiors brand banner"
                className="mx-auto h-[260px] w-full object-contain sm:h-[340px] lg:h-[420px]"
                style={{ objectFit: 'contain', filter: 'brightness(1.18) contrast(1.08)' }}
              />
            </div>
            <div className="mt-5 grid gap-4 text-sm text-[var(--color-muted)] sm:grid-cols-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">Since</p>
                <p className="mt-2 text-base text-[var(--color-text)]">2016</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">Coverage</p>
                <p className="mt-2 text-base text-[var(--color-text)]">Pan India</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">Focus</p>
                <p className="mt-2 text-base text-[var(--color-text)]">Premium delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

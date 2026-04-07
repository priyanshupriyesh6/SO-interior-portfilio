import founderPhoto from '../assets/foundersphoto.jpeg';

export const AboutUs = () => {
  return (
    <section className="page-section">
      <div className="section-inner">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="surface-card p-6 sm:p-8">
            <p className="section-label">About Us</p>
            <h2 className="section-title">A restrained design language, executed with clarity and precision.</h2>
            <p className="section-subtitle max-w-none">
              At SO Interiors, every space starts with intent. We study circulation, brand character, material balance,
              and long-term use before moving into detailing.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="surface-card-soft p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">Approach</p>
                <p className="mt-3 leading-7 text-[var(--color-muted)]">
                  Strong concepts, functional planning, and disciplined execution.
                </p>
              </div>
              <div className="surface-card-soft p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">Result</p>
                <p className="mt-3 leading-7 text-[var(--color-muted)]">
                  Interiors that feel composed, premium, and easy to live or work in.
                </p>
              </div>
            </div>
          </div>

          <div className="surface-card p-4 sm:p-5">
            <div className="image-frame rounded-[22px]">
              <img
                src={founderPhoto}
                alt="SO Interiors leadership"
                className="h-[320px] w-full sm:h-[420px]"
                loading="lazy"
              />
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">Design</p>
                <p className="mt-2 leading-7 text-[var(--color-muted)]">Residential, commercial, and hospitality interiors.</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">Delivery</p>
                <p className="mt-2 leading-7 text-[var(--color-muted)]">Concept, detailing, coordination, and execution support.</p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">Philosophy</p>
                <p className="mt-2 leading-7 text-[var(--color-muted)]">We do not decorate space. We structure experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

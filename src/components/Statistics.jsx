export const Statistics = () => {
  const stats = [
    {
      number: '380+',
      label: 'Happy Clients',
      note: 'Long-term relationships built on clarity and reliability.',
    },
    {
      number: '500+',
      label: 'Projects Delivered',
      note: 'Residential, commercial, and hospitality work across India.',
    },
    {
      number: 'Since 2016',
      label: 'Operational Experience',
      note: 'A mature process shaped by execution, not just presentation.',
    },
    {
      number: 'Pan India',
      label: 'Project Reach',
      note: 'Consistent design direction and delivery support across locations.',
    },
  ];

  return (
    <section className="page-section">
      <div className="section-inner">
        <div className="mb-10 max-w-3xl">
          <p className="section-label">Our Achievements</p>
          <h2 className="section-title">Measured in delivered spaces, repeat trust, and consistent execution.</h2>
          <p className="section-subtitle">
            The visual polish is quieter now, but the substance stays visible. These figures are static by design,
            removing count-up effects and keeping the information readable.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="surface-card p-6">
              <p className="text-3xl font-semibold text-[var(--color-gold)] lg:text-4xl">{stat.number}</p>
              <p className="mt-3 text-lg text-[var(--color-text)]">{stat.label}</p>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{stat.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="surface-card-soft p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">Workflow</p>
            <p className="mt-3 leading-7 text-[var(--color-muted)]">Structured documentation and cleaner review cycles.</p>
          </div>
          <div className="surface-card-soft p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">Materials</p>
            <p className="mt-3 leading-7 text-[var(--color-muted)]">Selections shaped by longevity, finish balance, and maintenance.</p>
          </div>
          <div className="surface-card-soft p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">Communication</p>
            <p className="mt-3 leading-7 text-[var(--color-muted)]">Clear expectations from concept sign-off to final execution.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

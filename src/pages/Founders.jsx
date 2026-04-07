import { Footer } from '../components/Footer';
import founderImage from '../assets/founderpho.jpeg';

const visionPoints = [
  {
    title: 'Design excellence',
    description: 'A consistent standard of detail, proportion, and finish across every project type.',
  },
  {
    title: 'Execution discipline',
    description: 'Concepts are developed with delivery realities in mind so the final outcome stays aligned.',
  },
  {
    title: 'Long-term relationships',
    description: 'Repeat trust comes from clarity, responsiveness, and spaces that continue to perform well.',
  },
];

export const Founders = () => {
  return (
    <main className="page-shell">
      <section className="page-section">
        <div className="section-inner grid gap-8 lg:grid-cols-[0.92fr,1.08fr] lg:items-center">
          <div className="surface-card p-4 sm:p-5">
            <div className="image-frame rounded-[22px]">
              <img
                src={founderImage}
                alt="Founders - Sanju Jangid and Omprakash Jangid"
                className="h-[340px] w-full sm:h-[470px]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="section-label">Leadership & Vision</p>
              <h1 className="section-title">Mr. Sanju Jangid and Mr. Omprakash Jangid lead the studio with a practical design mindset.</h1>
              <p className="section-subtitle max-w-none">
                Their direction keeps the studio focused on spaces that are modern, functional, and visually grounded.
                The emphasis is on quality craftsmanship, clarity in decision-making, and execution that reflects the
                original intent.
              </p>
            </div>

            <div className="surface-card-soft p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">Leadership Statement</p>
              <p className="mt-3 leading-7 text-[var(--color-muted)]">
                The studio is built around the idea that refined interiors are achieved through stronger planning and
                disciplined execution, not through unnecessary visual excess.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="section-inner grid gap-4 md:grid-cols-3">
          {visionPoints.map((point) => (
            <article key={point.title} className="surface-card p-6">
              <h2 className="text-2xl font-semibold text-[var(--color-gold)]">{point.title}</h2>
              <p className="mt-4 leading-7 text-[var(--color-muted)]">{point.description}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

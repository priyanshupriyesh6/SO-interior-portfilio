import { Portfolio } from '../components/Portfolio';
import { Footer } from '../components/Footer';

const highlights = [
  {
    title: 'Residential',
    description: 'Private spaces shaped through layout discipline, warm material balance, and everyday usability.',
  },
  {
    title: 'Commercial',
    description: 'Business interiors designed for movement, clarity, brand expression, and durability in use.',
  },
  {
    title: 'Dining & Bar',
    description: 'Guest environments shaped for atmosphere, comfort, and memorable experiences.',
  },
];

export const Projects = () => {
  return (
    <main className="page-shell">
      <section className="page-section">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-label">Projects</p>
            <h1 className="section-title">Selected work across residential, commercial, and dining spaces.</h1>
            <p className="section-subtitle">
              Explore a range of completed interiors that reflect our approach to planning, detail, and execution.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="surface-card-soft p-5">
                <h2 className="text-xl font-semibold text-[var(--color-gold)]">{item.title}</h2>
                <p className="mt-3 leading-7 text-[var(--color-muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />
      <Footer />
    </main>
  );
};

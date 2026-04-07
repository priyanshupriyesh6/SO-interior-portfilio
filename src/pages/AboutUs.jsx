import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import showcaseOne from '../assets/Kylin (aerocity)/IMG_4972.PNG';
import showcaseTwo from '../assets/Kylin (skybar vasnt kunj)/IMG_5013.PNG';
import showcaseThree from '../assets/Shophouse by kylin (worldmark sec-65)/IMG_5049.PNG';
import showcaseFour from '../assets/sectioncard slot images/rassta/2.jpeg';

const principles = [
  {
    title: 'Function before noise',
    description: 'Planning, movement, storage, and usability are resolved before decorative choices expand the scope.',
  },
  {
    title: 'Premium through restraint',
    description: 'A controlled palette, cleaner detailing, and measured contrast create a more lasting premium feel.',
  },
  {
    title: 'Execution-aware design',
    description: 'Design decisions are made with implementation, coordination, and finish quality in mind.',
  },
];

export const AboutUs = () => {
  return (
    <main className="page-shell">
      <section className="page-section">
        <div className="section-inner">
          <div className="grid gap-8 lg:grid-cols-[1fr,0.95fr] lg:items-center">
            <div className="space-y-6">
              <div>
                <p className="section-label">About SO Interiors</p>
                <h1 className="section-title">We shape interiors that feel balanced in both use and appearance.</h1>
                <p className="section-subtitle max-w-none">
                  Our philosophy is straightforward: good design should support everyday function, express a clear visual
                  identity, and hold up well in execution. That is why the studio works with a disciplined, less-is-more
                  approach rather than relying on excess.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="button-primary">View Projects</Link>
                <Link to="/contact" className="button-secondary">Start a Conversation</Link>
              </div>
            </div>

            <div className="surface-card p-4 sm:p-5">
              <div className="grid gap-4 sm:grid-cols-2">
                {[showcaseOne, showcaseTwo, showcaseThree, showcaseFour].map((image, index) => (
                  <div key={image} className="image-frame rounded-[22px]">
                    <img
                      src={image}
                      alt={`SO Interiors showcase ${index + 1}`}
                      className="h-[180px] w-full sm:h-[210px]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="section-inner grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="surface-card p-6 sm:p-8">
            <p className="section-label">Our Philosophy</p>
            <h2 className="text-3xl font-semibold text-[var(--color-gold)]">Exceptional design should improve the way a space is lived in.</h2>
            <div className="mt-6 space-y-4 leading-7 text-[var(--color-muted)]">
              <p>
                We combine artistic direction with practical planning so the final outcome is not only visually refined
                but also easier to inhabit, maintain, and use.
              </p>
              <p>
                From concept to execution, every decision is evaluated through function, material balance, and the
                experience of moving through the space.
              </p>
              <p className="text-[var(--color-text)]">
                We do not just design rooms. We define how they feel, operate, and represent the people or brand inside them.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {principles.map((principle) => (
              <article key={principle.title} className="surface-card-soft p-5">
                <h3 className="text-xl font-semibold text-[var(--color-gold)]">{principle.title}</h3>
                <p className="mt-3 leading-7 text-[var(--color-muted)]">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

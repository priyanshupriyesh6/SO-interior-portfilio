import { Footer } from '../components/Footer';

const steps = [
  {
    step: '01',
    title: 'Understand the brief',
    description: 'We review goals, function, context, and how the space needs to perform on a daily basis.',
  },
  {
    step: '02',
    title: 'Build the concept',
    description: 'The visual direction, material language, and planning logic are aligned into one clear design route.',
  },
  {
    step: '03',
    title: 'Resolve the details',
    description: 'Layouts, views, finishes, lighting, and selections are refined until the scheme is execution-ready.',
  },
  {
    step: '04',
    title: 'Deliver with control',
    description: 'Execution follows a cleaner review path so the completed space matches the approved design intent.',
  },
];

export const Process = () => {
  return (
    <main className="page-shell">
      <section className="page-section">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-label">Our Process</p>
            <h1 className="section-title">A clean sequence of steps, without decorative motion.</h1>
            <p className="section-subtitle">
              The process section now reads as a structured workflow. Number animation, hover lift, and visual clutter
              have been removed so the emphasis stays on what happens at each stage.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="section-inner">
          <div className="relative">
            <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-[rgba(212,175,55,0.18)] xl:block" />
            <ol className="grid gap-5 xl:grid-cols-4">
              {steps.map((step) => (
                <li key={step.step} className="relative">
                  <article className="surface-card relative h-full p-6">
                    <div className="mb-6 flex items-center gap-4">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[rgba(212,175,55,0.08)] text-xl font-semibold text-[var(--color-gold)]">
                        {step.step}
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">Step</p>
                        <h2 className="mt-2 text-xl font-semibold text-[var(--color-gold)]">{step.title}</h2>
                      </div>
                    </div>
                    <p className="leading-7 text-[var(--color-muted)]">{step.description}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8 surface-card-soft p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">Execution Principle</p>
            <p className="mt-3 max-w-4xl leading-7 text-[var(--color-muted)]">
              Every step is designed to reduce revision noise, improve decision quality, and keep the finished space
              aligned with the approved concept. The UI reflects that same principle by staying minimal and structured.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

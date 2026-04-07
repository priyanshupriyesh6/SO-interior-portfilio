import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Accordion = ({
  items,
  defaultOpen = 0,
}) => {
  const baseId = useId().replace(/:/g, '');
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="accordion-list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <article key={item.title} className="accordion-item">
            <button
              id={buttonId}
              type="button"
              className="accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <div className="min-w-0 space-y-1">
                {item.label && (
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    {item.label}
                  </p>
                )}
                <h3 className="accordion-title">{item.title}</h3>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[var(--color-gold)] transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="accordion-panel"
              >
                <div className={`${item.image ? 'grid gap-5 md:grid-cols-[1.3fr,0.9fr] md:items-start' : ''}`}>
                  <div className="space-y-4">
                    <p className="accordion-copy">{item.description}</p>
                    {item.detail && <p className="accordion-copy">{item.detail}</p>}
                    {Array.isArray(item.points) && item.points.length > 0 && (
                      <ul className="grid gap-2 md:grid-cols-2">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-[var(--color-text)]"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {item.image && (
                    <div className="accordion-media">
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </div>
                  )}
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
};

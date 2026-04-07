import { Link } from 'react-router-dom';
import { Accordion } from './Accordion';
import expertiseOne from '../assets/sectioncard slot images/18comune/1.jpeg';
import expertiseTwo from '../assets/sectioncard slot images/Adda by soi7/1.jpeg';
import expertiseThree from '../assets/sectioncard slot images/rassta/1.jpeg';
import expertiseFour from '../assets/sectioncard slot images/soi7/1.jpeg';

export const Services = () => {
  const expertiseItems = [
    {
      label: '01',
      title: 'Residential Interior Design',
      description: 'Homes planned around comfort, movement, storage, and a calm visual hierarchy.',
      detail: 'Layouts stay intentional, material transitions stay controlled, and every room is designed to feel usable from day one.',
      points: ['Living and bedroom planning', 'Kitchen and utility detailing', 'Lighting and finish coordination'],
      image: expertiseOne,
    },
    {
      label: '02',
      title: 'Commercial Interior Spaces',
      description: 'Workspaces, retail, and business environments designed to support operations and brand identity.',
      detail: 'We focus on circulation, zoning, presentation, and durability so the space performs as well as it looks.',
      points: ['Reception and work areas', 'Retail display planning', 'Back-of-house flow'],
      image: expertiseThree,
    },
    {
      label: '03',
      title: 'Cafes, Restaurants, and Bars',
      description: 'Hospitality interiors with atmosphere, seating logic, and finish selection tuned to guest experience.',
      detail: 'Each layout balances comfort, service efficiency, and visual identity without cluttering the guest journey.',
      points: ['Seating mix and zoning', 'Feature surfaces and bars', 'Mood lighting strategy'],
      image: expertiseTwo,
    },
    {
      label: '04',
      title: 'Retail and Lifestyle Formats',
      description: 'Showrooms, salons, and niche environments that need clarity, product focus, and a premium finish.',
      detail: 'The visual system stays minimal and structured so the business offering remains the focal point.',
      points: ['Display rhythm', 'Customer movement paths', 'Brand-aligned presentation'],
      image: expertiseFour,
    },
  ];

  return (
    <section className="page-section">
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-6">
            <div>
              <p className="section-label">Our Expertise</p>
              <h2 className="section-title">A cleaner way to understand what we design.</h2>
              <p className="section-subtitle max-w-none">
                We have replaced heavy card animations with a simpler content structure. The expertise summary now
                reads faster, scales better on mobile, and keeps the focus on scope rather than decoration.
              </p>
            </div>
            <div className="surface-card-soft p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">Delivery Focus</p>
              <p className="mt-4 leading-7 text-[var(--color-muted)]">
                From planning and concept development to visualization, material selection, and end-to-end execution.
              </p>
            </div>
            <Link to="/services" className="button-secondary">
              Explore Full Services
            </Link>
          </div>

          <div className="surface-card p-5 sm:p-6">
            <Accordion items={expertiseItems} defaultOpen={0} />
          </div>
        </div>
      </div>
    </section>
  );
};

import { Accordion } from '../components/Accordion';
import { Footer } from '../components/Footer';
import heroImage from '../assets/sectioncard slot images/18comune/2.jpeg';
import residentialImage from '../assets/sectioncard slot images/18comune/3.jpeg';
import diningImage from '../assets/sectioncard slot images/Adda by soi7/1.jpeg';
import commercialImage from '../assets/sectioncard slot images/rassta/2.jpeg';
import retailImage from '../assets/sectioncard slot images/soi7/2.jpeg';
import planningImage from '../assets/sectioncard slot images/18comune/4.jpeg';
import conceptImage from '../assets/sectioncard slot images/rassta/3.jpeg';
import visualizationImage from '../assets/sectioncard slot images/soi7/3.jpeg';
import executionImage from '../assets/sectioncard slot images/rassta/4.jpeg';

const expertiseItems = [
  {
    label: '01',
    title: 'Residential Interior Design',
    description: 'Homes designed around comfort, circulation, storage, and a refined material balance.',
    detail: 'The intent is to create spaces that stay visually quiet but highly resolved in daily use.',
    points: ['Family living layouts', 'Bedroom and wardrobe planning', 'Kitchen and utility detailing'],
    image: residentialImage,
  },
  {
    label: '02',
    title: 'Commercial Interior Spaces',
    description: 'Workspaces and business environments structured for flow, brand clarity, and durability.',
    detail: 'We align public-facing areas and backend movement so the space performs operationally as well as visually.',
    points: ['Reception and arrival zones', 'Workstation planning', 'Client-facing meeting areas'],
    image: commercialImage,
  },
  {
    label: '03',
    title: 'Dining and Social Spaces',
    description: 'Cafes, restaurants, bars, and lounges shaped around guest movement and atmosphere.',
    detail: 'Layouts, feature surfaces, lighting, and seating mix are resolved together to keep the experience cohesive.',
    points: ['Dining and lounge zoning', 'Service movement paths', 'Ambient lighting direction'],
    image: diningImage,
  },
  {
    label: '04',
    title: 'Retail and Lifestyle Formats',
    description: 'Showrooms, salons, and customer-facing environments with strong display logic and visual rhythm.',
    detail: 'We keep the visual system controlled so the product, service, or experience remains central.',
    points: ['Display sequencing', 'Customer navigation', 'Brand-aligned presentation'],
    image: retailImage,
  },
];

const offeringItems = [
  {
    label: 'A',
    title: 'Space Planning and Layout Design',
    description: 'We translate the brief into circulation logic, zoning, furniture placement, and measured usability.',
    detail: 'This stage keeps the project grounded before aesthetic detailing begins.',
    points: ['Functional zoning', 'Furniture fit', 'Movement clarity'],
    image: planningImage,
  },
  {
    label: 'B',
    title: 'Concept Development',
    description: 'Design direction is established through mood, tone, finish language, and material personality.',
    detail: 'The objective is a clear identity rather than multiple unrelated visual ideas.',
    points: ['Palette definition', 'Material hierarchy', 'Feature moments'],
    image: conceptImage,
  },
  {
    label: 'C',
    title: '3D Visualization',
    description: 'Visual previews help align expectations before execution and support smoother sign-offs.',
    detail: 'Rendered views are used to validate proportion, mood, and design intent.',
    points: ['View studies', 'Material testing', 'Presentation support'],
    image: visualizationImage,
  },
  {
    label: 'D',
    title: 'Interior Design and Decoration',
    description: 'We refine fixed elements, finishes, furniture, lighting, and styling into a coherent interior system.',
    detail: 'The emphasis remains on overall balance instead of over-layering the space.',
    points: ['Surface selection', 'Furniture direction', 'Lighting integration'],
    image: residentialImage,
  },
  {
    label: 'E',
    title: 'Consultation and Material Selection',
    description: 'Material, fixture, and detailing decisions are made with longevity, budget alignment, and maintenance in mind.',
    detail: 'This keeps the finished space premium without becoming visually inconsistent.',
    points: ['Finish shortlisting', 'Vendor coordination', 'Detail reviews'],
    image: commercialImage,
  },
  {
    label: 'F',
    title: 'End-to-End Execution',
    description: 'Execution support ties together planning, approvals, site coordination, and quality review.',
    detail: 'The final result should match the intent established in the early design stages.',
    points: ['Site follow-through', 'Quality checkpoints', 'Completion alignment'],
    image: executionImage,
  },
];

export const Services = () => {
  return (
    <main className="page-shell">
      <section className="page-section">
        <div className="section-inner">
          <div className="grid gap-8 lg:grid-cols-[1.02fr,0.98fr] lg:items-center">
            <div className="space-y-6">
              <div>
                <p className="section-label">Services</p>
                <h1 className="section-title">Interior design services across residential, commercial, dining, and lifestyle spaces.</h1>
                <p className="section-subtitle max-w-none">
                  From concept development and planning to visualization, material selection, and execution support.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="surface-card-soft p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">Coverage</p>
                  <p className="mt-3 leading-7 text-[var(--color-muted)]">Residential, commercial, dining, and lifestyle projects.</p>
                </div>
                <div className="surface-card-soft p-5">
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">Method</p>
                  <p className="mt-3 leading-7 text-[var(--color-muted)]">Planning first, concept next, execution with control.</p>
                </div>
              </div>
            </div>

            <div className="surface-card p-4 sm:p-5">
              <div className="image-frame rounded-[22px]">
                <img
                  src={heroImage}
                  alt="SO Interiors service showcase"
                  className="h-[320px] w-full sm:h-[420px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="section-inner grid gap-8 xl:grid-cols-2">
          <div className="surface-card p-5 sm:p-6">
            <div className="mb-6">
              <p className="section-label">Our Expertise</p>
              <h2 className="text-3xl font-semibold text-[var(--color-gold)]">Where we work best</h2>
              <p className="mt-3 leading-7 text-[var(--color-muted)]">
                Each category is structured around space type, guest or user movement, and the quality of long-term use.
              </p>
            </div>
            <Accordion items={expertiseItems} defaultOpen={0} />
          </div>

          <div className="surface-card p-5 sm:p-6">
            <div className="mb-6">
              <p className="section-label">Service Scope</p>
              <h2 className="text-3xl font-semibold text-[var(--color-gold)]">What we provide</h2>
              <p className="mt-3 leading-7 text-[var(--color-muted)]">
                A complete range of design and execution services tailored to the needs of each project.
              </p>
            </div>
            <Accordion items={offeringItems} defaultOpen={0} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

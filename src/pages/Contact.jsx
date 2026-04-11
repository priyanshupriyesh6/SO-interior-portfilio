import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Footer } from '../components/Footer';

emailjs.init('sjB4MKDo9N5DIoubT');

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9811960048 | +91 9811960650 | +91 9599317145',
    href: 'tel:+919811960048',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'sointeriorsofficials@gmail.com',
    href: 'mailto:sointeriorsofficials@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Savitri Cinema Complex, GK-2, New Delhi - 110048',
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setMessageStatus({
        type: 'error',
        message: 'Please fill in all fields.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessageStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setIsLoading(true);
    setMessageStatus(null);

    try {
      await emailjs.send(
        'service_da4fzif',
        'template_hfui2nj',
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'sointeriorsofficials@gmail.com',
          message: formData.message,
          reply_to: formData.email,
        }
      );

      setMessageStatus({
        type: 'success',
        message: 'Message sent successfully. We will get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setMessageStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="page-shell">
      <section className="page-section">
        <div className="section-inner">
          <div className="max-w-3xl">
            <p className="section-label">Contact</p>
            <h1 className="section-title">Get in touch with SO Interiors.</h1>
            <p className="section-subtitle">
              Share your project details, location, and requirements and our team will get back to you.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
            <div className="space-y-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                const content = detail.href ? (
                  <a href={detail.href} className="block transition-colors duration-200 hover:text-[#fff7de]">
                    {detail.value}
                  </a>
                ) : (
                  <p>{detail.value}</p>
                );

                return (
                  <article key={detail.label} className="surface-card p-5">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl border border-[var(--color-border)] bg-[rgba(212,175,55,0.08)] p-3 text-[var(--color-gold)]">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">{detail.label}</p>
                        <div className={`mt-3 leading-7 text-[var(--color-muted)]${detail.label === 'Phone' ? ' text-base font-medium normal-case tracking-normal' : ''}`}>{content}</div>
                      </div>
                    </div>
                  </article>
                );
              })}

              <div className="surface-card-soft p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">Availability</p>
                <p className="mt-3 leading-7 text-[var(--color-muted)]">
                  Share your project type, location, and broad scope. We will respond with the right next step for
                  consultation, planning, or execution support.
                </p>
              </div>
            </div>

            <div className="surface-card p-6 sm:p-8">
              <div>
                <p className="section-label">Send a Message</p>
                <h2 className="text-3xl font-semibold text-[var(--color-gold)]">Send us a message.</h2>
              </div>

              {messageStatus && (
                <div
                  className={`mt-6 rounded-2xl border px-4 py-3 text-sm ${
                    messageStatus.type === 'success'
                      ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-200'
                      : 'border-red-500/40 bg-red-500/10 text-red-200'
                  }`}
                >
                  {messageStatus.message}
                </div>
              )}

              <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">
                    Full Name
                  </label>
                  <input
                    id="name"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-[var(--color-text)] outline-none transition-colors duration-200 placeholder:text-[var(--color-muted)] focus:border-[var(--color-border-strong)]"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">
                    Email
                  </label>
                  <input
                    id="email"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-[var(--color-text)] outline-none transition-colors duration-200 placeholder:text-[var(--color-muted)] focus:border-[var(--color-border-strong)]"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">
                    Project Brief
                  </label>
                  <textarea
                    id="message"
                    className="min-h-[160px] w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-[var(--color-text)] outline-none transition-colors duration-200 placeholder:text-[var(--color-muted)] focus:border-[var(--color-border-strong)]"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your space, scope, location, and requirements."
                  />
                </div>

                <button type="submit" className="button-primary w-full" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

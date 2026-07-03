import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email address';
    if (!form.subject.trim()) e.subject = 'Please add a subject';
    if (!form.message.trim()) e.message = 'Please write a message';
    return e;
  };

  const showToast = (type, text) => {
    setToast({ type, text });
    setTimeout(() => setToast(null), 3500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setSending(true);
    try {
      // Plug in EmailJS here, e.g.:
      // await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      await new Promise((res) => setTimeout(res, 1100));
      showToast('success', 'Message sent! I will get back to you soon.');
      setForm(initialForm);
    } catch {
      showToast('error', 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const field = (name, label, type = 'text') => (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink/70 dark:text-white/70">{label}</label>
      {type === 'textarea' ? (
        <textarea
          rows={5}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className={`w-full resize-none rounded-xl glass px-4 py-3 text-sm outline-none ring-accent-purple/50 focus:ring-2 ${
            errors[name] ? 'ring-2 ring-red-400' : ''
          }`}
        />
      ) : (
        <input
          type={type}
          value={form[name]}
          onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          className={`w-full rounded-xl glass px-4 py-3 text-sm outline-none ring-accent-purple/50 focus:ring-2 ${
            errors[name] ? 'ring-2 ring-red-400' : ''
          }`}
        />
      )}
      {errors[name] && <p className="mt-1 text-xs text-red-400">{errors[name]}</p>}
    </div>
  );

  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact" 
          title="Let's build something together"
          subtitle="Let's connect and create something amazing. I'm always interested in building meaningful relationships and contributing to projects that create real value. Feel free to reach out—I'd be happy to connect."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="left" className="space-y-4">
            {[
              { icon: <FiMail />, label: 'Email', value: 'kusum@example.com', href: 'mailto:kusum@example.com' },
              { icon: <FaWhatsapp />, label: 'WhatsApp', value: '+91 9991101045', href: 'https://wa.me/9991101045' },
              { icon: <FiGithub />, label: 'GitHub', value: 'github.com/kusum', href: 'https://github.com/kusumhans/' },
              { icon: <FiLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/kusum', href: 'https://www.linkedin.com/in/kusum-hans/ ' },
              { icon: <FiMapPin />, label: 'Location', value: 'Faridabad, Haryana, India', href: null },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href || undefined}
                target={c.href ? '_blank' : undefined}
                rel={c.href ? 'noreferrer' : undefined}
                data-cursor-hover
                className="flex items-center gap-4 rounded-2xl glass p-4 transition-transform hover:-translate-y-1"
              >
                <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple text-white">
                  {c.icon}
                </span>
                <span>
                  <p className="text-xs text-ink/55 dark:text-white/55">{c.label}</p>
                  <p className="text-sm font-medium">{c.value}</p>
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal direction="right">
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl glass p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {field('name', 'Name')}
                {field('email', 'Email', 'email')}
              </div>
              {field('subject', 'Subject')}
              {field('message', 'Message', 'textarea')}
              <button
                type="submit"
                disabled={sending}
                data-cursor-hover
                className="relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform active:scale-95 disabled:opacity-70"
              >
                <FiSend className={sending ? 'animate-pulse' : ''} />
                {sending ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className={`fixed bottom-6 right-6 z-[80] flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white shadow-lg ${
              toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
            }`}
          >
            {toast.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
            {toast.text}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import type { FormEvent } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const CONTACT_EMAILS = [
  'san.svit369webdeveloper@gmail.com'

];

const LINKEDIN_URL = 'https://www.linkedin.com/in/svit-san-865ba23a0/';
const GITHUB_URL = 'https://github.com/SvitSan?tab=repositories';

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString() || 'Portfolio visitor';
    const email = formData.get('email')?.toString() || 'No email provided';
    const message = formData.get('message')?.toString() || '';

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${CONTACT_EMAILS[0]}?subject=${subject}&body=${body}`;
  }

  const contactCards = [
    {
      title: 'Email Me',
      description: 'Always open to new projects.',
      icon: <Mail size={24} />,
      links: CONTACT_EMAILS.map((email) => ({
        label: email,
        href: `mailto:${email}`
      }))
    },
    {
      title: 'LinkedIn',
      description: 'Connect with me professionally.',
      icon: <Linkedin size={24} />,
      links: [{ label: 'svit-san-865ba23a0', href: LINKEDIN_URL }]
    },
    {
      title: 'GitHub',
      description: 'View my repositories and code.',
      icon: <Github size={24} />,
      links: [{ label: 'SvitSan repositories', href: GITHUB_URL }]
    },
    {
      title: 'Call Me',
      description: 'Available Mon-Fri, 9am-6pm.',
      icon: <Phone size={24} />,
      links: [{ label: '+855 965-749-513', href: 'tel:+855965749513' }]
    }
  ];

  return (
    <section id="contact" className="bg-slate-50/50 py-14 text-slate-900 dark:bg-slate-900/50 dark:text-white sm:py-18 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <div className="text-[10px] font-mono font-bold text-cyan-500 uppercase tracking-widest mb-4">Get In Touch</div>
          <h2 className="text-2xl font-display font-bold tracking-normal sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Let's <span className="text-cyan-500">Connect.</span></h2>
        </motion.div>
        
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-6 lg:col-span-5"
          >
            <div className="mb-6 border-b border-slate-100 pb-5 dark:border-slate-800">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Contact Information</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Reach me through email, LinkedIn, GitHub, or phone.
              </p>
            </div>

            <div className="space-y-5">
              {contactCards.map((card) => (
                <div key={card.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-50 text-cyan-500 dark:bg-cyan-500/10">
                    {card.icon}
                  </div>
                  <div className="min-w-0 flex-1 border-b border-slate-100 pb-5 last:border-b-0 last:pb-0 dark:border-slate-800">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{card.title}</h4>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{card.description}</p>
                    <div className="mt-3 space-y-1.5">
                      {card.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                          className="block break-all text-xs font-bold text-cyan-500 hover:underline sm:text-sm"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.aside>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-6 lg:p-8">
              <div className="mb-6 border-b border-slate-100 pb-5 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Send a Message</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Fill out the form and it will open your email app with the message ready.
                </p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                    <input id="contact-name" name="name" type="text" placeholder="Your name" required className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-800 dark:bg-slate-900 sm:px-5" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                    <input id="contact-email" name="email" type="email" placeholder="your.email@example.com" required className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-800 dark:bg-slate-900 sm:px-5" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">Message</label>
                  <textarea id="contact-message" name="message" rows={6} placeholder="How can I help you?" required className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 transition-all focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-800 dark:bg-slate-900 sm:px-5"></textarea>
                </div>
                <button type="submit" className="w-full rounded-lg bg-cyan-500 py-4 font-bold text-white shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-600 active:scale-95">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

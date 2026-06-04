import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const socialLinks = [
    { icon: <Code2 size={20} />, href: "https://github.com/SvitSan?tab=repositories", label: "Code" },
    { icon: <Github size={20} />, href: "https://github.com/SvitSan?tab=repositories", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/svit-san-865ba23a0/", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:san.svit@student.passerellesnumeriques.org", label: "Email" },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-normal text-slate-900 dark:text-white uppercase">
              Technical Gallery
            </span>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={link.label}
                className="text-slate-400 hover:text-cyan-500 transition-colors"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} TECHNICAL GALLERY. BUILT WITH PRECISION.
          </p>
        </div>
      </div>
    </footer>
  );
}

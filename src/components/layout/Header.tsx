import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { Menu, X, Download, ArrowRight } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import logoImage from '../../images/logo.png';

const NAV_ITEMS = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Skills', path: '#skills' },
  { label: 'Projects', path: '#projects' },
  { label: 'Experience', path: '#experience' },
  { label: 'Contact', path: '#contact' },
];

const CV_FILE = 'https://drive.google.com/uc?export=download&id=1eNv3yo09jN9AfO2sNb8CBan5sFnxpycF';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('#home');

  // Handle scroll to section
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(id);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => document.querySelector(item.path));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, i) => {
        if (section && section instanceof HTMLElement) {
          if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            setActiveTab(NAV_ITEMS[i].path);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between sm:h-20">
          <button onClick={() => scrollToSection('#home')} className="flex items-center gap-2 group">
            <img
              src={logoImage}
              alt="San Developer"
              className="h-8 w-auto max-w-[105px] object-contain transition-transform group-hover:scale-105 sm:h-12 sm:max-w-[150px]"
            />
          </button>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => scrollToSection(item.path)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-cyan-500 relative py-2",
                  activeTab === item.path ? "text-cyan-500" : "text-slate-500 dark:text-slate-400"
                )}
              >
                {item.label}
                {activeTab === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500"
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <a
              href={CV_FILE}
              target="_blank"
              rel="noreferrer"
              // download="San-SVIT-CV.pdf"
              download="VCFile/San-SVIT-CV.pdf"
              className="hidden lg:inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-all gap-2"
            >
              <Download size={16} />
              CV
            </a>
            <a 
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
              className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-cyan-500 text-white text-sm font-semibold hover:bg-cyan-600 transition-all hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
            >
              Get In Touch
            </a>

            {/* Mobile Menu Toggle */}
            {!isMobileMenuOpen && (
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="rounded-xl p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-cyan-500 dark:text-slate-400 dark:hover:bg-slate-900 lg:hidden"
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu size={22} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-14 z-[110] px-3 pt-2 sm:top-20 sm:px-4 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="ml-auto max-h-[calc(100dvh-5rem)] w-[min(82vw,17.5rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/20 dark:border-slate-800 dark:bg-slate-950 sm:max-h-[calc(100dvh-6rem)] sm:w-[min(72vw,19rem)] sm:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3 dark:border-slate-800">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-500">Menu</span>
                  <p className="mt-0.5 text-[11px] leading-4 text-slate-500 dark:text-slate-400">Home, About, Skills, Projects</p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="shrink-0 rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-cyan-500 dark:hover:bg-slate-900"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>
              
              <nav className="mt-3 grid gap-1.5">
                {NAV_ITEMS.map((item) => (
                  <button
                    type="button"
                    key={item.path}
                    onClick={() => scrollToSection(item.path)}
                    className={cn(
                      "flex min-h-10 items-center justify-between rounded-xl border px-3 py-2 text-left text-sm font-display font-bold transition-all active:scale-[0.98] sm:min-h-11 sm:text-base",
                      activeTab === item.path
                        ? "border-cyan-500/40 bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                        : "border-slate-100 bg-slate-50 text-slate-900 hover:border-cyan-500/40 hover:bg-cyan-50 hover:text-cyan-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-white dark:hover:bg-cyan-500/10 dark:hover:text-cyan-400"
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} className={activeTab === item.path ? 'opacity-100' : 'opacity-50'} />
                  </button>
                ))}
              </nav>

              <div className="mt-3 grid gap-2 border-t border-slate-100 pt-3 dark:border-slate-800">
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
                <a
                  href={CV_FILE}
                  target="_blank"
                  rel="noreferrer"
                  // download="San-SVIT-CV.pdf"
                  download="VCFile/San-SVIT-CV.pdf"
                  className="flex min-h-10 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900 sm:min-h-11"
                >
                  <Download size={16} />
                  CV
                </a>
                <button 
                  type="button"
                  onClick={() => scrollToSection('#contact')}
                  className="flex min-h-10 w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-bold text-white shadow-xl shadow-cyan-500/20 transition-all hover:bg-cyan-600 sm:min-h-11"
                >
                  Hire Me
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

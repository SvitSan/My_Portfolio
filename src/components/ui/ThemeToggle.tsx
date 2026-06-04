import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/src/context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-500 transition-all hover:scale-110 active:scale-95 group relative overflow-hidden"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, y: 20, rotate: -90 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, y: -20, rotate: 90 }}
          transition={{ duration: 0.3, ease: "backOut" }}
          className="flex items-center justify-center"
        >
          {theme === 'light' ? (
            <Sun size={20} className="group-hover:rotate-12 transition-transform" />
          ) : (
            <Moon size={20} className="group-hover:rotate-12 transition-transform" />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Tooltip-like indicator */}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[8px] font-bold uppercase tracking-normal opacity-0 group-hover:opacity-100 transition-opacity bg-cyan-500 text-white px-1 rounded-t">
        {nextTheme}
      </span>
    </button>
  );
}

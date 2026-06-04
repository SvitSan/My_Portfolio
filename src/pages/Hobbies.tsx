import { motion } from 'motion/react';
import { Cpu, FileCode, Lightbulb, Share2, Star } from 'lucide-react';
import type { Hobby } from '@/src/types';

const HOBBIES: Hobby[] = [
  {
    title: 'New Technologies',
    text: 'Interested in learning new technologies and staying ahead of the curve.',
    icon: 'Cpu'
  },
  {
    title: 'Building Projects',
    text: 'Practice building small projects to sharpen practical skills and solve real-world problems.',
    icon: 'FileCode'
  },
  {
    title: 'Research',
    text: 'Like doing research and exploring new knowledge in various scientific and tech fields.',
    icon: 'Lightbulb'
  },
  {
    title: 'Networking',
    text: 'Participate in events and meet new people to expand professional horizons.',
    icon: 'Share2'
  }
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="bg-white pb-14 text-slate-900 dark:bg-slate-950 dark:text-white sm:pb-18 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="text-[10px] font-mono font-bold text-cyan-500 uppercase tracking-widest mb-4">Extracurricular</div>
          <h2 className="text-2xl font-display font-bold tracking-normal sm:text-3xl md:text-4xl lg:text-5xl">Hobbies & <span className="text-cyan-500">Interests.</span></h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {HOBBIES.map((hobby, i) => {
            const IconComponent = {
              Cpu: Cpu,
              FileCode: FileCode,
              Lightbulb: Lightbulb,
              Share2: Share2
            }[hobby.icon as 'Cpu' | 'FileCode' | 'Lightbulb' | 'Share2'] || Star;

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition-all hover:border-cyan-500/30 dark:border-slate-800 dark:bg-slate-900/50 sm:p-8 lg:rounded-[2.5rem]"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-8 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-inner group-hover:scale-110 group-hover:rotate-6">
                  <IconComponent size={32} />
                </div>
                <h4 className="mb-3 text-base font-bold uppercase leading-tight tracking-normal transition-colors group-hover:text-cyan-500 sm:mb-4 sm:text-lg lg:text-xl">{hobby.title}</h4>
                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
                  {hobby.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import type { Workshop } from '@/src/types';

const WORKSHOPS: Workshop[] = [
  {
    title: 'Scrum & Agile Concept workshop',
    presenter: 'Rady Y - PNC IT Trainer',
    description: [
      'Learned Scrum principles, sprint planning, and Agile workflow',
      'Developed skills in team collaboration, task prioritization, and continuous improvement'
    ]
  },
  {
    title: 'UX/UI Design Workshop',
    presenter: 'Poeurn Sokunthea - Web Developer',
    description: [
      'Learned user research, wireframing, and interface design principles',
      'Created user-friendly and innovative UI designs'
    ]
  },
  {
    title: 'Dev SecOps workshop',
    presenter: 'Seniors 2024 - Dev SecOps, ABA Bank',
    description: [
      'Participated integrating security practices into the software development lifecycle',
      'Gained practical understanding of secure coding, vulnerability management, collaboration between development, operations, and security teams.'
    ]
  }
];

export default function Workshops() {
  return (
    <section id="workshops" className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-[10px] font-mono font-bold text-cyan-500 uppercase tracking-widest mb-4">Learning</div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold">Technical <span className="text-cyan-500">Workshops.</span></h2>
          </motion.div>
          <div className="space-y-12">
            {WORKSHOPS.map((workshop, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">{workshop.title}</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white shrink-0" />
                    <span className="font-bold">Presented by:</span> {workshop.presenter}
                  </li>
                  {workshop.description.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

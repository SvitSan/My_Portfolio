import { motion } from 'motion/react';
import type { Experience as ExperienceItem } from '@/src/types';

const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    company: 'Nisseat Find Internship Cambodia - VC1 PROJECT',
    role: 'Frontend Developer & QA Tester',
    location: 'Phnom Penh, Cambodia',
    period: 'Feb 15 - April 02, 2026',
    description: [
      'Developed a job-matching web platform connecting students with companies',
      'Used Jira and GitHub to connect with team members',
      'Used React.js, Node.js, MySQL, JavaScript, HTML, CSS, Jira, GitHub, AWS to build project'
    ],
    technologies: ['React.js', 'Node.js', 'MySQL', 'JavaScript', 'AWS', 'Jira'],
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '2',
    company: 'JavaScript Project - Note Taker application',
    role: 'Developer',
    location: 'Phnom Penh, Cambodia',
    period: 'Dec 15, 2025 - Jan 04, 2026',
    description: [
      'Developed Note Taker helps users note their tasks',
      'Delivered Note app to store important notes',
      'Used HTML, CSS, JavaScript, Local Storage, Github, and Vercel to build project'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'Github', 'Vercel'],
    logo: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '3',
    company: 'Deployment Project - Laravel Deployment',
    role: 'Project Deployer',
    location: 'Phnom Penh, Cambodia',
    period: 'Dec 15, 2025 - Dec 21, 2025',
    description: [
      'Deployed Laravel, React.js, and WordPress on AWS using command line and GoDaddy domain',
      'Tools: AWS, MobaXterm, Command Line, GoDaddy',
      'Successfully deployed the project and gained hands-on experience in deployment process'
    ],
    technologies: ['AWS', 'MobaXterm', 'Command Line', 'GoDaddy', 'Laravel', 'WordPress'],
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KyJJYrqcqOY6dKHfdVWN19v9F7LTm1Ui-w&s'
  },
  {
    id: '4',
    company: 'Web Design Project - Basic Portfolio',
    role: 'Individual Project Lead',
    location: 'Phnom Penh, Cambodia',
    period: 'Sep 02, 2025 - Oct 09, 2025',
    description: [
      'Developed a personal Portfolio that showcase myself',
      'Used HTML, CSS and SASS to build project'
    ],
    technologies: ['HTML', 'CSS', 'SASS'],
    logo: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=100'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-14 text-slate-900 dark:bg-slate-950 dark:text-white sm:py-18 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <div className="text-[10px] font-mono font-bold text-cyan-500 uppercase tracking-widest mb-4">Journey</div>
          <h2 className="text-2xl font-display font-bold tracking-normal sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"><span className="text-cyan-500">SCHOOL</span> EXPERIENCE</h2>
        </motion.div>
        
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:gap-6">
            {EXPERIENCE.map((exp, i) => (
              <motion.article
                key={exp.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 18 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50 sm:p-6"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="mt-1 h-10 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                  <div className="min-w-0">
                    <h4 className="text-base font-bold leading-snug text-slate-900 dark:text-white sm:text-lg">{exp.company}</h4>
                    <div className="mt-2 text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-500 sm:text-xs">{exp.period}</div>
                    <div className="mt-3 text-sm font-bold text-slate-900 dark:text-white">
                      Role: <span className="font-medium text-slate-600 dark:text-slate-400">{exp.role}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-500 dark:text-slate-400">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500/70" />
                      <span className="text-xs leading-relaxed sm:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                  {exp.technologies.map((tech, j) => (
                    <span
                      key={j}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-widest text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  );
}

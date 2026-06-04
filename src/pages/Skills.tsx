import { motion } from 'motion/react';
import {
  Box,
  Brain,
  Cloud,
  Code2,
  Clock,
  Database,
  GitBranch,
  Handshake,
  Layout,
  MessageCircle,
  Network,
  PenTool,
  Repeat,
  Server,
  ShieldCheck,
  Terminal,
  Wrench,
  Users
} from 'lucide-react';

const TECHNICAL_SKILLS = {
  hard: [
    { name: 'HTML', icon: Code2 },
    { name: 'CSS', icon: PenTool },
    { name: 'Postman', icon: Database },
    { name: 'JavaScript', icon: Terminal },
    { name: 'Git & Version Control', icon: GitBranch },
    { name: 'React.js, Node.js, SQL', icon: Network },
  ],
  tools: [
    { name: 'AWS', icon: Server },
    { name: 'Vercel', icon: Cloud },
    { name: 'Render', icon: Layout },
    { name: 'Docker', icon: Box },
    { name: 'VS Code', icon: Terminal },
    { name: 'GitHub', icon: GitBranch },
    { name: 'Postman', icon: Database },
    { name: 'Winshurf', icon: Code2 },
  ],
  soft: [
    { name: 'Teamwork', icon: Users },
    { name: 'Adaptability', icon: Repeat },
    { name: 'Responsibility', icon: ShieldCheck },
    { name: 'Communication', icon: MessageCircle },
    { name: 'Problem-Solving', icon: Wrench },
    { name: 'Critical Thinking', icon: Brain },
    { name: 'Time Management', icon: Clock },
  ] 
};

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-14 text-slate-900 dark:bg-slate-950 dark:text-white sm:py-18 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <div className="text-[10px] font-mono font-bold text-cyan-500 uppercase tracking-widest mb-4">Technical Arsenal</div>
          <h2 className="text-2xl font-display font-bold tracking-normal sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Skills & <span className="text-cyan-500">Expertise.</span></h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Hard Skills Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="group/card relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition-all hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-900/50 sm:p-8"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
            <h3 className="mb-6 flex items-center gap-3 text-lg font-bold sm:mb-8 sm:text-xl">
              <Code2 className="text-cyan-500 transition-transform duration-300 group-hover/card:rotate-6 group-hover/card:scale-110" size={24} />
              Hard Skills
            </h3>
            <ul className="space-y-3 text-sm sm:space-y-4 sm:text-base">
              {TECHNICAL_SKILLS.hard.map((skill, i) => {
                const SkillIcon = skill.icon;

                return (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between gap-6 group transition-transform duration-300 hover:translate-x-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.7)]" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-cyan-500 transition-colors leading-tight">{skill.name}</span>
                    </div>
                    <div className="h-9 w-9 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0 transition-all group-hover:bg-cyan-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                      <SkillIcon size={18} />
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Tools Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 260, damping: 22 }}
            className="group/card relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition-all hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-900/50 sm:p-8"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
            <h3 className="mb-6 flex items-center gap-3 text-lg font-bold sm:mb-8 sm:text-xl">
              <Terminal className="text-cyan-500 transition-transform duration-300 group-hover/card:rotate-6 group-hover/card:scale-110" size={24} />
              Tools & Platforms
            </h3>
            <ul className="space-y-3 text-sm sm:space-y-4 sm:text-base">
              {TECHNICAL_SKILLS.tools.map((tool, i) => {
                const ToolIcon = tool.icon;

                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between gap-6 group transition-transform duration-300 hover:translate-x-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.7)]" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-cyan-500 transition-colors leading-tight">{tool.name}</span>
                    </div>
                    <div className="h-9 w-9 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0 transition-all group-hover:bg-cyan-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                      <ToolIcon size={18} />
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Soft Skills Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 22 }}
            className="group/card relative flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition-all hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-900/50 sm:p-8 md:col-span-2 lg:col-span-1"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
            <h3 className="mb-6 flex items-center gap-3 text-lg font-bold sm:mb-8 sm:text-xl">
              <Users className="text-cyan-500 transition-transform duration-300 group-hover/card:rotate-6 group-hover/card:scale-110" size={24} />
              Soft Skills
            </h3>
            <ul className="space-y-3 text-sm sm:space-y-4 sm:text-base">
              {TECHNICAL_SKILLS.soft.map((skill, i) => {
                const SkillIcon = skill.icon;

                return (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between gap-6 group transition-transform duration-300 hover:translate-x-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.7)]" />
                      <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-cyan-500 transition-colors leading-tight">{skill.name}</span>
                    </div>
                    <div className="h-9 w-9 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0 transition-all group-hover:bg-cyan-500 group-hover:text-white group-hover:scale-110 group-hover:rotate-3">
                      <SkillIcon size={18} />
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

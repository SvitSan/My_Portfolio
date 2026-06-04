import { motion } from 'motion/react';
import { MapPin, Mail, User, Zap, CheckCircle2 } from 'lucide-react';
import aboutImage from '../images/about.png';

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-slate-50/50 py-14 dark:bg-slate-900/50 sm:py-18 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-white">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image Column */}
          <motion.div 
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none"
          >
            <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl sm:rounded-[2rem]">
              <img
                src={aboutImage}
                alt="San Svit Profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              
              {/* Decorative Stats on Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="flex justify-between rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-md sm:p-4">
                  <div className="text-center flex-1">
                    <div className="text-white text-lg font-bold">1+</div>
                    <div className="text-[8px] text-slate-300 uppercase tracking-normal">Years Exp.</div>
                  </div>
                  <div className="w-px bg-white/20" />
                  <div className="text-center flex-1">
                    <div className="text-white text-lg font-bold">10+</div>
                    <div className="text-[8px] text-slate-300 uppercase tracking-normal">Projects</div>
                  </div>
                  <div className="w-px bg-white/20" />
                  <div className="text-center flex-1">
                    <div className="text-white text-lg font-bold">PNC</div>
                    <div className="text-[8px] text-slate-300 uppercase tracking-normal">Current</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Shapes */}
            <div className="absolute -right-3 -top-3 -z-10 h-full w-full rounded-3xl border-2 border-cyan-500/20 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 sm:-right-6 sm:-top-6 sm:rounded-[2rem]" />
            <div className="absolute -z-20 -bottom-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
          </motion.div>

          {/* Content Column */}
          <div className="space-y-10 lg:col-span-7 lg:space-y-12">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-5 text-2xl font-display font-bold tracking-normal sm:text-3xl md:text-4xl lg:mb-8 lg:text-5xl xl:text-6xl">
                <span className="text-cyan-500">About Me</span>
              </h2>
              
              <div className="space-y-4 text-sm font-light leading-7 text-slate-500 dark:text-slate-400 sm:text-base lg:text-lg">
                <p>
                  I am a dedicated web developer with experience in building real-world projects and a strong focus on creating responsive, user-friendly websites. 
                  Currently studying at <span className="text-slate-900 dark:text-white font-semibold">Passerelles Numériques Cambodia (PNC)</span>, I am continuously 
                  improving my frontend and backend skills to build modern, high-performance web applications.
                </p>
                <p>
                  My goal is to translate complex business needs into elegant software solutions that are not only visualy stunning but also functionally robust. 
                  I specialize in modern technologies like <span className="text-cyan-500 font-mono text-sm">React.js, Node.js, and TypeScript.</span>
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 pt-8 min-[480px]:grid-cols-2 sm:gap-6 sm:pt-10">
                {[
                  { icon: <MapPin size={18} />, label: 'Location', value: 'Phnom Penh, KH' },
                  { icon: <Mail size={18} />, label: 'Email', value: 'brossbross979@gmail.com' },
                  { icon: <User size={18} />, label: 'Profile', value: 'Full Stack Dev' },
                  { icon: <Zap size={18} />, label: 'Interests', value: 'AI & Automation' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="w-10 h-10 bg-slate-100 dark:bg-slate-900 text-slate-400 group-hover/item:text-cyan-500 group-hover/item:bg-cyan-500/10 rounded-xl flex items-center justify-center transition-all">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[8px] text-slate-400 uppercase tracking-[0.2em] font-bold">{item.label}</div>
                      <div className="break-all text-sm font-bold tracking-normal">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Simplified Education Preview */}
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 sm:p-8"
            >
              <h3 className="mb-6 flex items-center gap-3 text-lg font-bold sm:mb-8 sm:text-xl">
                <CheckCircle2 className="text-cyan-500" size={24} />
                Academic Foundation
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { period: '2025 - 2026', title: 'Associate Degree', school: 'PNC Cambodia', active: true },
                  { period: '2018 - 2024', title: 'High School', school: 'Hun Boeng Preah', active: false }
                ].map((edu, i) => (
                  <div key={i} className="space-y-2">
                    <div className={`text-[10px] font-mono font-bold uppercase tracking-widest ${edu.active ? 'text-cyan-500' : 'text-slate-400'}`}>{edu.period}</div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{edu.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{edu.school}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

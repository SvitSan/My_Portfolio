import { motion } from 'motion/react';
import { ArrowRight, Download, Atom, Server, FileCode, Code2, Database, Layout, Palette, Globe, Layers, Cloud, Box, GitBranch } from 'lucide-react';
import profileImage from '../images/profile.png';

const CV_FILE = 'https://drive.google.com/uc?export=download&id=1eNv3yo09jN9AfO2sNb8CBan5sFnxpycF';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center py-20 overflow-hidden bg-white dark:bg-slate-950">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-[10px] font-mono font-bold uppercase tracking-widest mb-8 border border-cyan-100/50 dark:border-cyan-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-tight"
            >
              Hi, I'm <span className="text-cyan-500">San Svit.</span> <br />
              <span className="italic">Web</span> Developer.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed font-light"
            >
              Passionate web developer with experience in building real-world projects
              and a strong focus on responsive, user-friendly websites.
              Currently studying at PNC and specializing in modern frontend development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12 text-slate-900 dark:text-white"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-cyan-500 text-white rounded-2xl font-bold hover:bg-cyan-600 transition-all flex items-center gap-3 shadow-2xl shadow-cyan-500/30 active:scale-95"
              >
                View My Projects
                <ArrowRight size={20} />
              </a>
              <a
                href={CV_FILE}
                target="_blank"
                rel="noreferrer"
                // download="San-SVIT-CV.pdf"
                download="VCFile/San-SVIT-CV.pdf"
                className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-3 shadow-sm active:scale-95"
              >
                <Download size={20} />
                Download CV
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl active:scale-95"
              >
                Hire Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative flex-1 flex flex-col items-center justify-center lg:items-end"
          >
            <div className="relative w-64 h-64 lg:w-96 lg:h-96 rounded-full p-2 bg-gradient-to-tr from-cyan-500 via-indigo-400 to-blue-500 shadow-[0_0_50px_rgba(6,182,212,0.3)] mb-12">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-900">
                <img
                  src={profileImage}
                  alt="San Svit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Running Languages Marquee */}
            <div className="w-full max-w-md overflow-hidden relative py-6 lg:mr-4">
              <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10" />

              <motion.div
                animate={{ x: [0, -1200] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 35,
                    ease: "linear",
                  },
                }}
                className="flex whitespace-nowrap gap-20 items-center"
              >
                {[
                  { name: "React.js", icon: <Atom size={18} /> },
                  { name: "Node.js", icon: <Server size={18} /> },
                  { name: "TypeScript", icon: <FileCode size={18} /> },
                  { name: "JavaScript", icon: <Code2 size={18} /> },
                  { name: "MySQL", icon: <Database size={18} /> },
                  { name: "HTML5", icon: <Layout size={18} /> },
                  { name: "CSS3", icon: <Palette size={18} /> },
                  { name: "PHP", icon: <Globe size={18} /> },
                  { name: "Laravel", icon: <Layers size={18} /> },
                  { name: "AWS", icon: <Cloud size={18} /> },
                  { name: "Docker", icon: <Box size={18} /> },
                  { name: "Git", icon: <GitBranch size={18} /> },
                  { name: "SASS", icon: <Palette size={18} /> }
                ].map((lang, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-xs md:text-sm font-mono font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em] group/lang"
                  >
                    <span className="text-cyan-500/50 group-hover/lang:text-cyan-500 transition-colors">
                      {lang.icon}
                    </span>
                    {lang.name}
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  { name: "React.js", icon: <Atom size={18} /> },
                  { name: "Node.js", icon: <Server size={18} /> },
                  { name: "TypeScript", icon: <FileCode size={18} /> },
                  { name: "JavaScript", icon: <Code2 size={18} /> },
                  { name: "SQL", icon: <Database size={18} /> },
                  { name: "MySQL", icon: <Database size={18} /> },
                  { name: "HTML5", icon: <Layout size={18} /> },
                  { name: "CSS3", icon: <Palette size={18} /> },
                  { name: "PHP", icon: <Globe size={18} /> },
                  { name: "Laravel", icon: <Layers size={18} /> },
                  { name: "AWS", icon: <Cloud size={18} /> },
                  { name: "Docker", icon: <Box size={18} /> },
                  { name: "Git", icon: <GitBranch size={18} /> },
                  { name: "SASS", icon: <Palette size={18} /> }
                ].map((lang, i) => (
                  <div
                    key={`dup-${i}`}
                    className="flex items-center gap-4 text-xs md:text-sm font-mono font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em] group/lang"
                  >
                    <span className="text-cyan-500/50 group-hover/lang:text-cyan-500 transition-colors">
                      {lang.icon}
                    </span>
                    {lang.name}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

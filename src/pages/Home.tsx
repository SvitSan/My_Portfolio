import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Hobbies from './Hobbies';
import Contact from './Contact';
import profileImage from '../images/profile.png';
import backgroundImage from '../images/background.png';
import backgroundLightModeImage from '../images/backgroundLightMode.jpg';
import awsIcon from '../images/lageuage/aws.png';
import cssIcon from '../images/lageuage/css3.png';
import dockerIcon from '../images/lageuage/docker.png';
import gitIcon from '../images/lageuage/git.png';
import htmlIcon from '../images/lageuage/html5.png';
import javascriptIcon from '../images/lageuage/javascript.png';
import mysqlIcon from '../images/lageuage/mySQL.png';
import nodeIcon from '../images/lageuage/node.png';
import phpIcon from '../images/lageuage/php.png';
import laravelIcon from '../images/lageuage/ralavel.png';
import reactIcon from '../images/lageuage/react.png';
import sassIcon from '../images/lageuage/sass.png';
import typescriptIcon from '../images/lageuage/typscript.png';

const languages = [
  { name: 'React.js', icon: reactIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'HTML5', icon: htmlIcon },
  { name: 'CSS3', icon: cssIcon },
  { name: 'PHP', icon: phpIcon },
  { name: 'Laravel', icon: laravelIcon },
  { name: 'AWS', icon: awsIcon },
  { name: 'Docker', icon: dockerIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'SASS', icon: sassIcon },
];

const nameLetters = Array.from('San Svit');
const titleLetters = Array.from('Web Developer.');
const nameLetterVariants = {
  hidden: { opacity: 0, x: -10, filter: 'blur(6px)' },
  visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
};
const titleStartDelay = 1.35;
const CV_FILE = 'https://drive.google.com/uc?export=download&id=1eNv3yo09jN9AfO2sNb8CBan5sFnxpycF';

function Hero() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center overflow-hidden bg-white py-14 dark:bg-slate-950 sm:py-18 lg:py-24">
      <img
        src={backgroundLightModeImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover dark:hidden"
      />
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 hidden h-full w-full object-cover dark:block"
      />
      <div className="absolute inset-0 bg-white/70 dark:bg-slate-950/80" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20 xl:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-100/50 bg-cyan-50 px-3 py-1.5 text-[8px] font-mono font-bold uppercase tracking-widest text-cyan-600 dark:border-cyan-500/20 dark:bg-cyan-900/30 dark:text-cyan-400 sm:mb-7 sm:px-4 sm:text-[10px]"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-5 text-[2.35rem] font-display font-bold leading-[1.1] tracking-normal text-slate-900 dark:text-white min-[390px]:text-4xl sm:mb-7 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            >
              Hi, I'm{' '}
              <motion.span
                className="inline-flex whitespace-nowrap text-cyan-500"
                aria-label="San Svit"
                initial="hidden"
                animate="visible"
                transition={{ delayChildren: 0.45, staggerChildren: 0.08 }}
              >
                {nameLetters.map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    className="inline-block"
                    aria-hidden="true"
                    variants={nameLetterVariants}
                    transition={{
                      duration: 0.32,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
                <motion.span
                  className="ml-2 inline-block h-[0.9em] w-1 rounded-full bg-cyan-300 align-[-0.08em]"
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    delay: 1.2,
                    duration: 0.9,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.span>{' '}
              <br />
              <motion.span
                className="inline-flex whitespace-nowrap"
                aria-label="Web Developer."
              >
                {titleLetters.map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    className={`inline-block ${index < 3 ? 'italic' : ''}`}
                    aria-hidden="true"
                    initial={{ opacity: 0, x: -10, filter: 'blur(6px)' }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      x: [-10, 0, 0, 0],
                      filter: ['blur(6px)', 'blur(0px)', 'blur(0px)', 'blur(4px)'],
                    }}
                    transition={{
                      delay: titleStartDelay + index * 0.07,
                      duration: 3.2,
                      times: [0, 0.18, 0.82, 1],
                      repeat: Infinity,
                      repeatDelay: 0.45,
                      ease: 'easeInOut',
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.75, duration: 0.8 }}
              className="mx-auto mb-7 max-w-xl text-sm font-light leading-7 text-slate-500 dark:text-slate-400 sm:mb-10 sm:max-w-2xl sm:text-base lg:mx-0 lg:text-lg"
            >
              Passionate web developer with experience in building real-world projects
              and a strong focus on responsive, user-friendly websites.
              Currently studying at PNC and specializing in modern frontend development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.8 }}
              className="mb-8 flex flex-col justify-center gap-3 text-sm text-slate-900 dark:text-white sm:flex-row sm:flex-wrap sm:gap-4 sm:text-base lg:mb-12 lg:justify-start"
            >
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-5 py-3.5 font-bold text-white shadow-2xl shadow-cyan-500/30 transition-all hover:bg-cyan-600 active:scale-95 sm:w-auto sm:px-7 sm:py-4"
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
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-50 active:scale-95 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 sm:w-auto sm:px-7 sm:py-4"
              >
                <Download size={20} />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative flex w-full flex-1 flex-col items-center justify-center"
          >
            <div className="relative mb-8 aspect-[4/5] w-56 max-w-full rounded-lg bg-gradient-to-tr from-cyan-500 via-indigo-400 to-blue-500 p-2 shadow-[0_28px_80px_rgba(6,182,212,0.38),0_10px_35px_rgba(99,102,241,0.28)] sm:w-64 lg:mb-12 lg:w-80 xl:w-96">
              <div className="absolute -inset-5 -z-10 rounded-2xl bg-gradient-to-tr from-cyan-400/35 via-blue-500/25 to-indigo-500/35 blur-2xl" />
              <div className="w-full h-full rounded-md overflow-hidden border-4 border-white dark:border-slate-900 bg-white dark:bg-slate-900">
                <img
                  src={profileImage}
                  alt="San Svit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-lg border-2 border-cyan-400/40 lg:block" />
              <div className="absolute -left-4 -top-4 hidden h-20 w-20 rounded-lg border-2 border-indigo-400/30 lg:block" />
            </div>

            <div className="relative w-full max-w-xs overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] sm:max-w-md lg:max-w-lg">
              <motion.div
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 24,
                    ease: 'linear',
                  },
                }}
                className="flex w-max items-center gap-14 whitespace-nowrap"
              >
                {[...languages, ...languages].map((lang, i) => (
                  <div
                    key={`${lang.name}-${i}`}
                    className="flex items-center gap-3 text-xs md:text-sm font-mono font-bold text-slate-400/90 dark:text-slate-500 uppercase tracking-[0.2em] group/lang"
                  >
                    <img
                      src={lang.icon}
                      alt=""
                      className="h-7 w-7 md:h-8 md:w-8 object-contain transition-transform group-hover/lang:scale-110"
                    />
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

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Hobbies />
      <Contact />
    </div>
  );
}

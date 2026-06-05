import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, X } from 'lucide-react';
import type { Project } from '@/src/types';
import placeholderImage from '../images/background.png';

type ProjectFilter = 'all' | 'web' | 'uxui' | 'individual';
type PortfolioProject = Project & {
  group: Exclude<ProjectFilter, 'all'>;
};

const getProjectScreenshot = (url: string) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800`;

const PROJECT_FILTERS: { label: string; value: ProjectFilter }[] = [
  { label: 'View All Projects', value: 'all' },
  { label: 'Web Project', value: 'web' },
  { label: 'UX/UI Project', value: 'uxui' },
  { label: 'Individual Project', value: 'individual' },
];

const PROJECTS: PortfolioProject[] = [
  {
    id: '1',
    title: 'Nisseat Find Internship',
    description: 'Developed a job-matching web platform connecting students with companies. Served as Frontend Developer & QA Tester.',
    category: 'Full Stack',
    group: 'web',
    tags: ['React.js', 'Node.js', 'MySQL', 'Jira', 'GitHub', 'AWS'],
    image: getProjectScreenshot('https://vc1-nissaet.vercel.app/'),
    link: 'https://vc1-nissaet.vercel.app/',
    sourceLink: 'https://github.com/SOPHATSIENG/Nissaet__FInd__Internship'
  },
  {
    id: '2',
    title: 'Note Taker Application',
    description: 'Simple and efficient application for users to store and manage daily tasks and important notes.',
    category: 'Web App',
    group: 'individual',
    tags: ['HTML', 'CSS', 'JavaScript', 'Local Storage', 'Vercel'],
    image: getProjectScreenshot('https://note-taker-javascript-a6-jga9.vercel.app/'),
    link: 'https://note-taker-javascript-a6-jga9.vercel.app/',
    sourceLink: 'https://github.com/phalla-develop07/note_taker_javascript_A6'
  },
  {
    id: '3',
    title: 'Laravel Deployment Project',
    description: 'Expertly deployed Laravel, React.js, and WordPress applications on AWS using command line interfaces.',
    category: 'DevOps',
    group: 'web',
    tags: ['AWS', 'MobaXterm', 'Command Line', 'GoDaddy'],
    image: placeholderImage,
    link: '#'
  },
  {
    id: '4',
    title: 'Personal Base Portfolio',
    description: 'A clean, responsive personal portfolio showcasing projects and technical skills.',
    category: 'Web Design',
    group: 'uxui',
    tags: ['HTML', 'CSS', 'SASS'],
    image: placeholderImage,
    link: '#'
  },
  {
    id: '5',
    title: 'Figma Design Case Study',
    description: 'Designed a clean, user-friendly interface concept in Figma for a modern portfolio experience.',
    category: 'UI/UX Design',
    group: 'uxui',
    tags: ['Figma', 'UI Design', 'Prototyping', 'User Experience'],
    image: getProjectScreenshot('https://www.figma.com/design/vf47AL6VQ658wLuwGS0clQ/B6?t=0IrE4kXNoleRrlux-1'),
    link: 'https://www.figma.com/design/vf47AL6VQ658wLuwGS0clQ/B6?t=0IrE4kXNoleRrlux-1'
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((project) => project.group === activeFilter);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="bg-slate-50/50 py-14 dark:bg-slate-900/50 sm:py-18 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-900 dark:text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="text-2xl font-display font-bold tracking-normal text-slate-900 dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">Featured Projects</h2>
          <div className="mt-6 mx-auto w-full max-w-4xl sm:mt-8">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {PROJECT_FILTERS.map((filter) => (
                <div key={filter.value} className="flex basis-full items-center justify-center min-[480px]:basis-auto">
                  <button
                    onClick={() => {
                      setActiveFilter(filter.value);
                      const element = document.getElementById('project-grid');
                      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className={`min-h-9 rounded-md border px-4 py-2 text-xs font-semibold tracking-normal transition-colors duration-200 sm:min-h-10 sm:px-5 sm:text-sm ${
                      activeFilter === filter.value
                        ? 'border-cyan-500 bg-transparent text-cyan-600 dark:border-cyan-400 dark:text-cyan-300'
                        : 'border-slate-300 bg-transparent text-slate-600 hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300'
                    }`}
                  >
                    {filter.label}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <div className="mb-8 text-center" id="project-grid">
          <div className="text-[10px] font-mono font-bold text-cyan-500 uppercase tracking-widest mb-3">
            {PROJECT_FILTERS.find((filter) => filter.value === activeFilter)?.label}
          </div>
          <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white sm:text-2xl md:text-3xl">
            Project Information
          </h3>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {filteredProjects.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {filteredProjects.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl transition-all hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950 sm:rounded-3xl"
                  >
                    <div 
                      className="relative aspect-video overflow-hidden cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        {project.link !== '#' ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${project.title} live demo`}
                            className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={20} />
                          </a>
                        ) : (
                          <button
                            className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-all"
                            onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                            aria-label={`Open details for ${project.title}`}
                            title={`Open details for ${project.title}`}
                          >
                            <ExternalLink size={20} />
                          </button>
                        )}
                        {project.sourceLink && (
                          <a
                            href={project.sourceLink}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View ${project.title} source code`}
                            className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="cursor-pointer p-5 sm:p-6" onClick={() => setSelectedProject(project)}>
                      <div className="text-[10px] font-mono font-bold text-cyan-500 uppercase tracking-widest mb-4">{project.category}</div>
                      <h3 className="mb-3 text-base font-bold leading-tight sm:mb-4 sm:text-lg lg:text-xl">{project.title}</h3>
                      <p className="mb-5 line-clamp-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400 sm:mb-6 sm:text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, j) => (
                          <span 
                            key={j} 
                            className="px-3 py-1 bg-slate-50 dark:bg-slate-900 text-[9px] font-mono font-bold uppercase tracking-widest rounded-lg border border-slate-100 dark:border-slate-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 p-10 text-center text-slate-500 dark:text-slate-400">
                No projects found for this category yet.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 p-3 backdrop-blur-sm sm:p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-950 md:max-h-[90vh] md:flex-row md:rounded-[2.5rem]"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-lg backdrop-blur-md transition-all hover:bg-white dark:bg-slate-900/70 dark:text-white dark:hover:bg-slate-800 sm:right-6 sm:top-6"
              >
                <X size={20} />
              </button>

              <div className="relative h-56 overflow-hidden sm:h-64 md:h-auto md:w-1/2">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent md:hidden" />
              </div>

              <div className="flex overflow-y-auto p-6 sm:p-8 md:w-1/2 md:p-12 flex-col">
                <div className="text-xs font-mono font-bold text-cyan-500 uppercase tracking-[0.2em] mb-4">
                  {selectedProject.category}
                </div>
                <h3 className="mb-5 text-2xl font-display font-bold text-slate-900 dark:text-white md:mb-6 md:text-3xl lg:text-4xl">
                  {selectedProject.title}
                </h3>
                <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-8">
                  <p>{selectedProject.description}</p>
                  <p className="text-sm">
                    This project demonstrates a comprehensive approach to modern web development, focusing on performance, 
                    accessibility, and a seamless user experience across all devices.
                  </p>
                </div>

                <div className="mb-10">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-4">Technologies Used</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, j) => (
                      <span 
                        key={j} 
                        className="px-4 py-1.5 bg-slate-100 dark:bg-slate-900 text-[10px] font-mono font-bold uppercase tracking-widest rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-all hover:border-cyan-500/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-4">
                  {selectedProject.link !== '#' && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-w-[150px] flex-1 items-center justify-center gap-2 rounded-2xl bg-cyan-500 py-4 text-center font-bold text-white shadow-xl shadow-cyan-500/20 transition-all hover:bg-cyan-600"
                    >
                      Live Demo
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {selectedProject.sourceLink && (
                    <a
                      href={selectedProject.sourceLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-w-[150px] flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-900 py-4 text-center font-bold text-white shadow-xl transition-all hover:scale-[1.02] dark:bg-white dark:text-slate-900"
                    >
                      View Source
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

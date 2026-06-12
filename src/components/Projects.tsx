import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import { Github } from './Icons';

interface Project {
  title: string;
  techs: string[];
  description: string;
  featured?: boolean;
  githubUrl: string;
  liveUrl?: string;
  langDotColor: string; // GitHub style language color
  primaryLang: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Pipeline Failure RCA Bot',
      techs: ['Python', 'Jenkins', 'CI/CD', 'Log Analysis'],
      description: 'Developed an automated Root Cause Analysis system that analyzes failed pipeline logs, compares successful and failed executions, and generates RCA reports to reduce debugging time. Automated failure analysis to improve troubleshooting efficiency.',
      featured: true,
      githubUrl: 'https://github.com',
      liveUrl: 'https://github.com',
      langDotColor: '#3572A5', // Python Blue
      primaryLang: 'Python'
    },
    {
      title: 'BunkTracer',
      techs: ['IoT', 'MERN Stack', 'AI', 'MQTT', 'ESP32'],
      description: 'Developed a secure multi-factor attendance system using BLE, ESP32, MQTT, and face recognition for anti-proxy validation. Built a scalable backend with JWT authentication and REST APIs, along with a React dashboard for analytics.',
      githubUrl: 'https://github.com',
      liveUrl: 'https://github.com',
      langDotColor: '#f1e05a', // JavaScript Yellow
      primaryLang: 'JavaScript'
    },
    {
      title: 'E-Commerce Website',
      techs: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas'],
      description: 'Built a full-stack e-commerce platform with secure user authentication, product management, shopping cart functionality, and order processing. Designed a responsive UI and scalable backend for seamless user experience.',
      githubUrl: 'https://github.com',
      liveUrl: 'https://github.com',
      langDotColor: '#3178c6', // TypeScript/React Blue
      primaryLang: 'React'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white dark:bg-[#0D1117] transition-colors duration-200">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-10">
          <GitFork size={18} className="text-[#0969DA] dark:text-[#58A6FF]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#24292F] dark:text-[#E6EDF3]">
            Projects
          </h2>
        </div>

        {/* Repository Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col justify-between p-5 rounded-xl border border-[#D0D7DE] dark:border-[#30363D] bg-white dark:bg-[#161B22] shadow-github-sm dark:shadow-github-dark-sm hover:border-[#0969DA]/50 dark:hover:border-[#58A6FF]/50 transition-all duration-200`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div>
                {/* Header: Title + Star featured */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-sm sm:text-base font-bold text-[#0969DA] dark:text-[#58A6FF] hover:underline cursor-pointer break-words flex items-center gap-1">
                    {proj.title}
                  </h3>
                  
                  {proj.featured && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-extrabold uppercase rounded-full tracking-wider bg-amber-500/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400 border border-amber-500/20 dark:border-amber-400/20">
                      <Star size={8} className="fill-amber-500 text-amber-500" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs leading-relaxed text-[#57606A] dark:text-[#8B949E] mb-5 text-justify">
                  {proj.description}
                </p>
              </div>

              <div>
                {/* Tech Stack badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.techs.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-0.5 text-[10px] font-semibold rounded bg-[#F6F8FA] dark:bg-[#0D1117] text-[#57606A] dark:text-[#8B949E] border border-[#D0D7DE] dark:border-[#30363D]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom line: Language dot + links */}
                <div className="flex items-center justify-between pt-3 border-t border-[#D0D7DE] dark:border-[#30363D] text-[11px] text-[#57606A] dark:text-[#8B949E]">
                  {/* Language Indicator */}
                  <div className="flex items-center gap-1.5 font-medium">
                    <span 
                      className="w-3 h-3 rounded-full inline-block" 
                      style={{ backgroundColor: proj.langDotColor }}
                    />
                    <span>{proj.primaryLang}</span>
                  </div>

                  {/* Icon Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0969DA] dark:hover:text-[#58A6FF] transition-colors"
                      aria-label="GitHub Source"
                    >
                      <Github size={15} />
                    </a>
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0969DA] dark:hover:text-[#58A6FF] transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

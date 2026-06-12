import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

// Typing effect helper component
function TypingEffect({ strings, speed = 80, delay = 1500 }: { strings: string[]; speed?: number; delay?: number }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (strings.length === 0) return;

    if (subIndex === strings[index].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % strings.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      setText(strings[index].substring(0, subIndex + (isDeleting ? -1 : 1)));
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, strings, speed, delay]);

  return (
    <span className="typing-cursor pr-1 text-[#58A6FF] dark:text-[#58A6FF] light:text-[#0969DA] font-semibold">
      {text}
    </span>
  );
}

export default function Hero() {
  const titles = [
    'Computer and Communication Engineering Student',
    'Full Stack Developer',
    'Java | Spring Boot | React Developer'
  ];

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Side: Text Details */}
        <motion.div 
          className="md:col-span-7 flex flex-col justify-center text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B949E] dark:text-[#8B949E] light:text-[#57606A] mb-3">
            Portfolio Profile
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#24292F] dark:text-[#E6EDF3]">
            Thamarai Selvan S
          </h1>

          <div className="text-sm sm:text-base md:text-lg font-medium mb-6 min-h-[30px] flex items-center text-[#24292F] dark:text-[#E6EDF3]">
            <TypingEffect strings={titles} />
          </div>

          <p className="text-sm sm:text-base leading-relaxed mb-8 text-[#57606A] dark:text-[#8B949E] max-w-lg">
            Passionate full-stack developer with experience in Java, Spring Boot, React.js, and the MERN stack. Interested in building scalable web applications, automation tools, and IoT solutions.
          </p>

          {/* Clean Rounded-12px Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="/resume.pdf"
              download="Thamarai_Selvan_S_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-[12px] bg-[#58A6FF] hover:bg-[#58A6FF]/80 dark:bg-[#58A6FF] dark:hover:bg-[#58A6FF]/80 text-white cursor-pointer transition-all hover:scale-[1.02]"
            >
              <Download size={14} />
              <span>Download Resume</span>
            </a>
            
            <button
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-[12px] border border-[#D0D7DE] dark:border-[#30363D] bg-transparent hover:bg-slate-100 dark:hover:bg-[#161B22] text-[#24292F] dark:text-[#E6EDF3] transition-all hover:scale-[1.02]"
            >
              <span>View Projects</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Socials - Minimal styling */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[#D0D7DE] dark:border-[#30363D] text-[#57606A] dark:text-[#8B949E] hover:text-[#0969DA] dark:hover:text-[#58A6FF] transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[#D0D7DE] dark:border-[#30363D] text-[#57606A] dark:text-[#8B949E] hover:text-[#0969DA] dark:hover:text-[#58A6FF] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            
            <a
              href="mailto:thamaraiselvansubbiah@gmail.com"
              className="p-2 rounded-lg border border-[#D0D7DE] dark:border-[#30363D] text-[#57606A] dark:text-[#8B949E] hover:text-[#0969DA] dark:hover:text-[#58A6FF] transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Simple Profile Image */}
        <motion.div 
          className="md:col-span-5 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative w-56 sm:w-64 h-56 sm:h-64 rounded-2xl overflow-hidden border border-[#D0D7DE] dark:border-[#30363D] p-1.5 bg-[#FFFFFF] dark:bg-[#161B22] shadow-sm">
            <img 
              src="/avatar.jpg" 
              alt="Thamarai Selvan S" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

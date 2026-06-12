import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section intersection detection
      const scrollPosition = window.scrollY + 250;
      const sections = navItems.map((item) => document.getElementById(item.id));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 border-b backdrop-blur-md transition-all duration-200 ${
      scrolled 
        ? (darkMode ? 'shadow-github-dark-md bg-[#0D1117]/95' : 'shadow-github-md bg-[#F6F8FA]/95') 
        : (darkMode ? 'bg-[#0D1117]/80' : 'bg-[#F6F8FA]/80')
    } ${
      darkMode 
        ? 'border-[#30363D] text-[#E6EDF3]' 
        : 'border-[#D0D7DE] text-[#24292F]'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')} 
          className="flex items-center gap-2 font-bold text-sm tracking-wide text-slate-800 dark:text-white uppercase"
        >
          <Terminal size={18} className="text-blue-500 dark:text-[#58A6FF]" />
          <span>Thamarai Selvan S</span>
        </a>

        {/* Desktop Menu - GitHub Tabs Style */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                  isActive
                    ? (darkMode ? 'text-[#58A6FF] bg-[#161B22]' : 'text-[#0969DA] bg-[#F6F8FA]')
                    : (darkMode ? 'text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#161B22]/50' : 'text-[#57606A] hover:text-[#24292F] hover:bg-[#D0D7DE]/30')
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Actions (Theme + Mobile Hamburger) */}
        <div className="flex items-center gap-2">
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-all border ${
              darkMode 
                ? 'bg-[#161B22] border-[#30363D] text-yellow-400 hover:bg-[#30363D]' 
                : 'bg-white border-[#D0D7DE] text-[#0969DA] hover:bg-[#F6F8FA]'
            }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className={`hidden sm:inline-flex px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all ${
              darkMode 
                ? 'bg-[#2188ff] border-[#2188ff] hover:bg-[#58A6FF] text-white' 
                : 'bg-[#24292F] border-[#24292F] hover:bg-[#57606A] text-white'
            }`}
          >
            Contact
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg border ${
              darkMode 
                ? 'border-[#30363D] text-[#8B949E]' 
                : 'border-[#D0D7DE] text-[#57606A]'
            }`}
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden border-t ${
              darkMode ? 'bg-[#0D1117] border-[#30363D]' : 'bg-[#F6F8FA] border-[#D0D7DE]'
            }`}
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`py-2 text-xs font-semibold ${
                    activeSection === item.id
                      ? (darkMode ? 'text-[#58A6FF]' : 'text-[#0969DA]')
                      : (darkMode ? 'text-[#8B949E] hover:text-[#E6EDF3]' : 'text-[#57606A] hover:text-[#24292F]')
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className={`w-full text-center py-2.5 text-xs font-bold rounded-lg border mt-2 block ${
                  darkMode 
                    ? 'bg-[#2188ff] border-[#2188ff] text-white' 
                    : 'bg-[#24292F] border-[#24292F] text-white'
                }`}
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

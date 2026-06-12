import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

interface Internship {
  company: string;
  role: string;
  duration: string;
  description: string;
  techs: string[];
}

export default function Experience() {
  const experiences: Internship[] = [
    {
      company: 'RAMPeX',
      role: 'Java Full Stack Intern',
      duration: '2025',
      description: 'Completed hands-on full-stack development training using Spring Boot and React.js. Developed REST APIs, authentication modules, CRUD operations, and database integration using JPA and Hibernate. Followed MVC architecture principles and gained experience in frontend-backend integration.',
      techs: ['Java', 'Spring Boot', 'React.js', 'JPA', 'Hibernate', 'REST APIs', 'MVC']
    },
    {
      company: 'Better Tomorrow',
      role: 'MERN Stack Intern',
      duration: '2024',
      description: 'Built full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Developed REST APIs, optimized database schemas, and created responsive UI components for scalable applications.',
      techs: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'UI/UX']
    }
  ];

  return (
    <section id="experience" className="py-16 bg-[#F6F8FA] dark:bg-[#0D1117] transition-colors duration-200">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-12">
          <Briefcase size={18} className="text-[#0969DA] dark:text-[#58A6FF]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#24292F] dark:text-[#E6EDF3]">
            Work Experience
          </h2>
        </div>

        {/* Timeline Line */}
        <div className="relative border-l border-[#D0D7DE] dark:border-[#30363D] ml-3 pl-8 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Dot indicator */}
              <span className="absolute -left-[38px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-white dark:bg-[#0D1117] border-2 border-[#0969DA] dark:border-[#58A6FF] z-10" />

              {/* Minimal Card */}
              <div className="rounded-xl border border-[#D0D7DE] dark:border-[#30363D] bg-white dark:bg-[#161B22] p-6 shadow-github-sm dark:shadow-github-dark-sm hover:border-[#0969DA]/50 dark:hover:border-[#58A6FF]/50 transition-all duration-200">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-[#D0D7DE] dark:border-[#30363D] pb-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#24292F] dark:text-[#E6EDF3]">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#0969DA] dark:text-[#58A6FF] mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md bg-[#F6F8FA] dark:bg-[#0D1117] border border-[#D0D7DE] dark:border-[#30363D] text-[#57606A] dark:text-[#8B949E] w-fit h-fit">
                    <Calendar size={12} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[#57606A] dark:text-[#8B949E] mb-4 text-justify">
                  {exp.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.techs.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-0.5 text-[10px] font-bold rounded bg-[#F6F8FA] dark:bg-[#0D1117] text-[#57606A] dark:text-[#8B949E] border border-[#D0D7DE] dark:border-[#30363D]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

interface SkillGroup {
  title: string;
  skills: string[];
}

export default function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'C', 'C++']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      skills: ['Spring Boot', 'Node.js', 'Express.js']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'MongoDB Compass', 'Canva']
    },
    {
      title: 'Core Concepts',
      skills: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'DBMS',
        'Operating Systems',
        'Computer Networks',
        'Design and Analysis of Algorithms'
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white dark:bg-[#0D1117] transition-colors duration-200">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-10">
          <Layers size={18} className="text-[#0969DA] dark:text-[#58A6FF]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#24292F] dark:text-[#E6EDF3]">
            Skills &amp; Technologies
          </h2>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              className="rounded-xl border border-[#D0D7DE] dark:border-[#30363D] bg-[#F6F8FA] dark:bg-[#161B22] p-5 shadow-github-sm dark:shadow-github-dark-sm flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.05 }}
            >
              <h3 className="text-sm font-bold text-[#24292F] dark:text-[#E6EDF3] border-b border-[#D0D7DE] dark:border-[#30363D] pb-2 mb-4">
                {group.title}
              </h3>
              
              {/* Badges resembling GitHub topic tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#0969da]/10 dark:bg-[#388bfd]/10 text-[#0969DA] dark:text-[#58A6FF] hover:bg-[#0969DA] hover:text-white dark:hover:bg-[#2188ff] dark:hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

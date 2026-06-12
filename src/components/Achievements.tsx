import { motion } from 'framer-motion';
import { Award, BookOpen, BarChart3, Trophy } from 'lucide-react';

interface Stat {
  metric: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

export default function Achievements() {
  const stats: Stat[] = [
    {
      metric: '100+ Solved',
      label: 'LeetCode Problems',
      description: 'Solved algorithmic logic exercises covering arrays, trees, dynamic programming, and logic constructs.',
      icon: <Trophy size={18} className="text-[#0969DA] dark:text-[#58A6FF]" />
    },
    {
      metric: '200+ Solved',
      label: 'SkillRack Problems',
      description: 'Completed syntax tests, code puzzles, and aptitude evaluations to enhance core proficiency.',
      icon: <BarChart3 size={18} className="text-[#1a7f37] dark:text-[#3FB950]" />
    },
    {
      metric: 'ICRTICC 2025',
      label: 'Research Paper Published',
      description: 'Published paper at the Galgotias College of Engineering and Technology (ICRTICC 2025 conference).',
      icon: <BookOpen size={18} className="text-blue-500 dark:text-blue-400" />
    }
  ];

  return (
    <section id="achievements" className="py-16 bg-[#F6F8FA] dark:bg-[#0D1117] transition-colors duration-200">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-10">
          <Award size={18} className="text-[#0969DA] dark:text-[#58A6FF]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#24292F] dark:text-[#E6EDF3]">
            Achievements
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl border border-[#D0D7DE] dark:border-[#30363D] bg-white dark:bg-[#161B22] p-6 shadow-github-sm dark:shadow-github-dark-sm flex flex-col justify-between hover:border-[#0969DA]/50 dark:hover:border-[#58A6FF]/50 transition-all duration-200"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div>
                {/* Icon row */}
                <div className="p-2 rounded-lg bg-[#F6F8FA] dark:bg-[#0D1117] border border-[#D0D7DE] dark:border-[#30363D] w-fit mb-4">
                  {stat.icon}
                </div>
                
                {/* Metric */}
                <h3 className="text-2xl font-extrabold text-[#24292F] dark:text-[#E6EDF3] tracking-tight mb-1">
                  {stat.metric}
                </h3>
                
                {/* Label */}
                <p className="text-xs font-bold uppercase tracking-wider text-[#0969DA] dark:text-[#58A6FF] mb-3">
                  {stat.label}
                </p>
                
                {/* Description */}
                <p className="text-xs text-[#57606A] dark:text-[#8B949E] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

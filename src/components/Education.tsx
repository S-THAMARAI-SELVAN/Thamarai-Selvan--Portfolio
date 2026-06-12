import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Star } from 'lucide-react';

export default function Education() {
  const details = {
    college: 'Sri Eshwar College of Engineering',
    degree: 'B.E. Computer and Communication Engineering',
    duration: '2023 – 2027',
    cgpa: '7.39',
    courses: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java/C++)',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks'
    ]
  };

  return (
    <section id="education" className="py-16 bg-white dark:bg-[#0D1117] transition-colors duration-200">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-10">
          <GraduationCap size={18} className="text-[#0969DA] dark:text-[#58A6FF]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#24292F] dark:text-[#E6EDF3]">
            Education
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Main detail card */}
          <motion.div
            className="md:col-span-8 rounded-xl border border-[#D0D7DE] dark:border-[#30363D] bg-[#F6F8FA] dark:bg-[#161B22] p-6 shadow-github-sm dark:shadow-github-dark-sm flex flex-col justify-between"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4 border-b border-[#D0D7DE] dark:border-[#30363D] pb-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#24292F] dark:text-[#E6EDF3] leading-tight">
                    {details.college}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#0969DA] dark:text-[#58A6FF] mt-0.5">
                    {details.degree}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md bg-white dark:bg-[#0D1117] border border-[#D0D7DE] dark:border-[#30363D] text-[#57606A] dark:text-[#8B949E] w-fit h-fit">
                  <Calendar size={12} />
                  <span>{details.duration}</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#57606A] dark:text-[#8B949E] block mb-2">
                  Key Coursework
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#57606A] dark:text-[#8B949E]">
                  {details.courses.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <Star size={10} className="text-blue-500 fill-blue-500/20" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CGPA Card */}
          <motion.div
            className="md:col-span-4 rounded-xl border border-[#D0D7DE] dark:border-[#30363D] bg-white dark:bg-[#161B22] p-6 shadow-github-sm dark:shadow-github-dark-sm flex flex-col justify-center items-center text-center hover:border-[#0969DA]/50 dark:hover:border-[#58A6FF]/50 transition-all duration-200"
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#57606A] dark:text-[#8B949E] mb-2">
              Academic Score
            </span>
            <span className="text-5xl font-black text-[#0969DA] dark:text-[#58A6FF] tracking-tight mb-2">
              {details.cgpa}
            </span>
            <span className="text-xs font-bold text-[#24292F] dark:text-[#E6EDF3]">
              Cumulative CGPA
            </span>
            <div className="w-12 h-px bg-[#D0D7DE] dark:bg-[#30363D] my-3" />
            <p className="text-[11px] text-[#57606A] dark:text-[#8B949E] max-w-[150px]">
              Active participant in computer networks and full-stack software development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

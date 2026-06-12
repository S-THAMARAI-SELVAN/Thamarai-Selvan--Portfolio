import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#F6F8FA] dark:bg-[#0D1117] transition-colors duration-200">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-8">
          <User size={18} className="text-[#0969DA] dark:text-[#58A6FF]" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#24292F] dark:text-[#E6EDF3]">
            About Me
          </h2>
        </div>

        {/* Clean card with thin border and soft shadow */}
        <motion.div
          className="rounded-xl border border-[#D0D7DE] dark:border-[#30363D] bg-white dark:bg-[#161B22] p-6 sm:p-8 shadow-github-sm dark:shadow-github-dark-sm"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#57606A] dark:text-[#8B949E] text-justify">
            <p>
              I am a final-year Computer and Communication Engineering student with a strong interest in full-stack development and backend engineering. I have hands-on experience with Spring Boot, React.js, Node.js, MongoDB, and MySQL.
            </p>
            <p>
              I enjoy solving real-world problems through scalable applications, automation solutions, and innovative IoT systems. I am passionate about continuous learning and building impactful software products.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

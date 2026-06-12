export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F6F8FA] dark:bg-[#0D1117] border-t border-[#D0D7DE] dark:border-[#30363D] transition-colors duration-200 py-10">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#57606A] dark:text-[#8B949E]">
        {/* Left copyright */}
        <div>
          <span>© {currentYear} Thamarai Selvan S</span>
        </div>

        {/* Right technology tag */}
        <div className="flex items-center gap-1">
          <span>Built with</span>
          <span className="text-[#0969DA] dark:text-[#58A6FF]">React</span>
          <span>+</span>
          <span className="text-[#0969DA] dark:text-[#58A6FF]">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}

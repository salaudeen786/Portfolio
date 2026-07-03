import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 90,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const sections = ["home", "about", "skills", "experience", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        hasShadow
          ? "bg-dark-900/80 backdrop-blur-xl border-b border-white/5 shadow-glow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <motion.button
          onClick={() => scrollToSection("home")}
          className="text-xl lg:text-2xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-cyan-400">&lt;</span>
          <span className="text-white">Salaudeen</span>
          <span className="text-cyan-400">/&gt;</span>
        </motion.button>

        <ul className="hidden lg:flex items-center gap-x-8">
          {sections.map((section) => (
            <motion.li key={section} className="relative group">
              <button
                onClick={() => scrollToSection(section)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 tracking-wide uppercase"
              >
                {section}
              </button>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </motion.li>
          ))}
        </ul>

        <motion.a
          href="#"
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 hover:shadow-glow transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={16} />
          Resume
        </motion.a>

        <motion.button
          className="lg:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-16 left-0 w-full bg-dark-800/95 backdrop-blur-xl border-b border-white/5"
          >
            <ul className="flex flex-col px-5 py-6 gap-y-4">
              {sections.map((section) => (
                <motion.li
                  key={section}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide uppercase py-2"
                  >
                    {section}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mt-2"
                >
                  <Download size={16} />
                  Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

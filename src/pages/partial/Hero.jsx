import { motion } from "framer-motion";
import { GitBranch, Globe, MapPin, ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import TechConstellation from "../../components/TechConstellation";

export default function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 90, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-dark-900 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="flex-1 order-2 lg:order-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Hi, I'm{" "}
              <span className="text-gradient">Salaudeen</span>
            </motion.h1>

            <motion.div
              className="mt-3 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <TypeAnimation
                sequence={[
                  "Full Stack & AI-Integrated Developer",
                  3000,
                  "Front-End & Back-End Architect",
                  3000,
                  "UI/UX + AI Engineer",
                  3000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-cyan-400"
              />
            </motion.div>

            <motion.p
              className="mt-6 text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              "Crafting high-performance web solutions and intelligent user
              experiences from front-end elegance to robust back-end
              architecture."
            </motion.p>

            <motion.div
              className="flex items-center gap-2 mt-4 text-gray-500 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              <MapPin size={14} className="text-cyan-400" />
              Karachi, Sindh, Pakistan
            </motion.div>

            <motion.div
              className="flex items-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-700 border border-white/10 rounded-xl text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <GitBranch size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dark-700 border border-white/10 rounded-xl text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe size={20} />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 font-medium text-sm hover:bg-cyan-500/20 hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <TechConstellation />
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-cyan-400 transition-colors"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        whileHover={{ y: 3 }}
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
}

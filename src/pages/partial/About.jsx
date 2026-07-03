import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

export default function About() {
  const education = [
    {
      icon: GraduationCap,
      title: "Advanced Diploma in Software Engineering",
      institution: "Aptech Learning",
      period: "3-Year Program",
      highlights: ["OOP", "SOLID Principles", "Full-Stack Application Lifecycle"],
    },
    {
      icon: Award,
      title: "Intermediate in Computer Science",
      institution: "GOVT Degree College Panjgur",
      period: "Grade A",
      highlights: [],
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-3xl" />
              <div className="bg-dark-800 border border-white/5 rounded-3xl p-8 lg:p-10 relative">
                <BookOpen className="text-cyan-400 mb-4" size={28} />
                <h3 className="text-xl font-semibold text-white mb-4">
                  Background
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Creative and detail-oriented Developer with strong foundations
                  in translating complex UI/UX designs into maintainable code.
                  Passionate about building seamless digital experiences that
                  merge aesthetics with performance.
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-cyan-500/30 rounded-br-3xl" />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <GraduationCap className="text-cyan-400" size={24} />
              Education
            </h3>
            {education.map((item, index) => (
              <motion.div
                key={index}
                className="bg-dark-800 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/20 hover:shadow-glow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl flex-shrink-0">
                    <item.icon className="text-cyan-400" size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-cyan-400/80 text-sm mt-1">
                      {item.institution}
                    </p>
                    <span className="inline-block text-xs text-gray-500 mt-1 bg-dark-700 px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                    {item.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="text-xs text-gray-300 bg-dark-700 border border-white/5 px-3 py-1 rounded-full"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

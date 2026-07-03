import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Handicrafts E-Commerce Website",
    description:
      "Fully responsive e-commerce web app with product listings, search filters, and a smooth shopping cart interface.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/assets/project1.png",
    code: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Hospital Management System",
    description:
      "Clean UI for streamlining appointment bookings, patient records, and staff management with real-time API integrations.",
    tags: [".NET Core MVC", "SQL Server", "React", "REST API"],
    image: "/assets/project1.png",
    code: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-dark-800 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/20 hover:shadow-glow-lg transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden h-48 lg:h-56">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-gradient opacity-50">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.code}
                    className="p-3 bg-dark-700 border border-white/10 rounded-xl text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitBranch size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="p-3 bg-dark-700 border border-white/10 rounded-xl text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-cyan-400/80 bg-cyan-500/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-6 lg:hidden">
                  <a
                    href={project.code}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitBranch size={16} /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

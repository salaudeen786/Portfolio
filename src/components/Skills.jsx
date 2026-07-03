import { motion } from "framer-motion";
import {
  Code2,
  FileJson,
  Globe,
  Layout,
  Server,
  Database,
  GitBranch,
  BrainCircuit,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["PHP", "C#", "JavaScript"],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      "React.js",
      "Vue.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Flutter",
    ],
  },
  {
    title: "Backend & Frameworks",
    icon: Server,
    skills: [
      ".NET Core MVC",
      "WinForms",
      "Django",
      "Flask",
      "Node.js",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "MySQL",
      "SQL Server",
      "Firebase",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Tools & UI/UX",
    icon: GitBranch,
    skills: ["Git", "GitHub", "Figma", "Tableau"],
  },
  {
    title: "AI & Next-Gen",
    icon: BrainCircuit,
    skills: [
      "Prompt Engineering",
      "Custom GPTs",
      "Midjourney",
      "SORA",
    ],
  },
];

const experiences = [
  {
    id: 1,
    role: "PHP Developer",
    company: "Wize Consultancy",
    period: "",
    description:
      "Developed backend solutions using PHP/MySQL, enhanced API performance, and reduced response times by 30%.",
  },
  {
    id: 2,
    role: "Dot Net Developer",
    company: "Awesome Technologies",
    period: "",
    description:
      "Designed optimized database schemas (increased query efficiency by 25%), built software using .NET MVC and WinForms.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold">
            Skills <span className="text-gradient">Matrix</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="bg-dark-800 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/20 hover:shadow-glow-lg transition-all duration-500 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                  <category.icon className="text-cyan-400" size={20} />
                </div>
                <h3 className="text-white font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-dark-700 border border-white/5 rounded-lg text-sm text-gray-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div id="experience" className="mt-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-4" />
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-400/20 to-transparent -translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={`relative flex flex-col ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  } items-start gap-8 lg:gap-12`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="hidden lg:block flex-1" />

                  <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark-900 border-2 border-cyan-400 shadow-glow z-10" />

                  <div className="flex-1 pl-14 lg:pl-0">
                    <div className="bg-dark-800 border border-white/5 rounded-2xl p-6 lg:p-8 hover:border-cyan-500/20 hover:shadow-glow-lg transition-all duration-300">
                      <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                        <div>
                          <h3 className="text-white text-lg lg:text-xl font-semibold">
                            {exp.role}
                          </h3>
                          <p className="text-cyan-400/80 text-sm mt-1">
                            {exp.company}
                          </p>
                        </div>
                        {exp.period && (
                          <span className="text-xs text-gray-500 bg-dark-700 px-3 py-1 rounded-full">
                            {exp.period}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

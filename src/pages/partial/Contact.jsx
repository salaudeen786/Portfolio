import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  GitBranch,
  Globe,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Salaudeenhamraz786@gmail.com",
      href: "mailto:Salaudeenhamraz786@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+923342668390",
      href: "tel:+923342668390",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karachi, Sindh, Pakistan",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-3.5 bg-dark-800 border border-white/10 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-5 py-3.5 bg-dark-800 border border-white/10 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-5 py-3.5 bg-dark-800 border border-white/10 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                className="w-full px-5 py-3.5 bg-dark-800 border border-white/10 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
              />
              <motion.button
                type="submit"
                className="w-full px-6 py-3.5 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400 font-medium hover:bg-cyan-500/20 hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <Send size={16} />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-dark-800 border border-white/5 rounded-2xl p-6 hover:border-cyan-500/20 hover:shadow-glow-lg transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl flex-shrink-0">
                    <item.icon className="text-cyan-400" size={22} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white font-medium mt-1 block hover:text-cyan-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium mt-1">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-gray-400 text-sm mb-4">Find me on</p>
              <div className="flex items-center gap-3">
                {[
                  { icon: GitBranch, href: "https://github.com" },
                  { icon: Globe, href: "https://linkedin.com" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-700 border border-white/10 rounded-xl text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

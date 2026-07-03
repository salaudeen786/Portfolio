import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Button({ value }) {
  return (
    <motion.a
      href="#"
      className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 hover:shadow-glow transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {value} <Download size={16} />
    </motion.a>
  );
}

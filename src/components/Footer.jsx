import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-900">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-6 lg:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="text-cyan-400" size={18} />
            <span className="text-gray-300 font-semibold">
              &lt;<span className="text-cyan-400">Salaudeen</span>/&gt;
            </span>
          </div>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-red-400" /> &copy;{" "}
            {new Date().getFullYear()} Salaudeen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

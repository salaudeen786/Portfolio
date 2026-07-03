import { useMemo, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { buildConstellation } from "../lib/techStack";

function TechIconSVG({ name, color, size = 20 }) {
  const s = size;
  const props = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", className: "shrink-0" };
  switch (name) {
    case "React":
      return (<svg {...props} viewBox="-11.5 -10.232 23 20.463"><circle r="2.05" fill={color} /><g stroke={color} strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>);
    case "JavaScript":
      return (<svg {...props} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2" fill={color} /><path d="M15 18.5c.8.6 1.8.9 2.8.9 1.2 0 2-.4 2-1.3 0-.7-.4-1.1-1.5-1.5l-.5-.2c-1.4-.5-2.3-1.2-2.3-2.6 0-1.3 1-2.3 2.6-2.3 1.2 0 2 .4 2.7 1l-1.4 1c-.4-.5-.9-.7-1.4-.7-.7 0-1 .4-1 1 0 .7.4 1 1.4 1.4l.5.2c1.5.6 2.4 1.2 2.4 2.7 0 1.6-1.2 2.5-3 2.5-1.6 0-2.9-.7-3.6-1.7l1.5-1.2zM8.7 18.5c.5.4 1 .7 1.7.7 1 0 1.5-.5 1.5-1.4v-7h2v7c0 2.2-1.3 3.2-3.4 3.2-1 0-1.9-.3-2.6-.8l.8-1.7z" fill="#000" /></svg>);
    case "TypeScript":
      return (<svg {...props} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2" fill={color} /><path d="M6.5 12.5h3v2h-1v4h-1v-4h-1v-2zm5 0h4.5v1.8H13v1.1h2.5v1.8H13v1.2h3V20h-4.5v-1.8h2.5V17H11.5v-1.8H14V14h-2.5v-1.5z" fill="#FFF" /></svg>);
    case "Next.js":
      return (<svg {...props} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill={color} /><path d="M13.5 8H15v8h-1.5V8zM8 8h1.5l4.5 6.8V8H15v8h-1L9 9.2V16H8V8z" fill="#000" /></svg>);
    case "Node.js":
      return (<svg {...props} viewBox="0 0 24 24"><path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" fill={color} /><path d="M7.5 9.5v5l3 1.5 3-1.5v-5l-3-1.5-3 1.5z" fill="#FFF" opacity="0.9" /></svg>);
    case "Express":
      return (<svg {...props} viewBox="0 0 24 24"><text x="2" y="17" fontFamily="monospace" fontSize="16" fontWeight="bold" fill={color}>Ex</text></svg>);
    case "MongoDB":
      return (<svg {...props} viewBox="0 0 24 24"><path d="M12 2C8 6 7 12 7 12s1 6 5 10c4-4 5-10 5-10s-1-6-5-10z" fill={color} /><path d="M12 22c-3-4-4-8-4-10 0-2 1-6 4-8" fill="none" stroke="#FFF" strokeWidth="0.5" opacity="0.3" /></svg>);
    case "PostgreSQL":
      return (<svg {...props} viewBox="0 0 24 24"><path d="M12 3c-3 0-5 2-5 5v1H6c-1 0-2 1-2 2v6c0 1 1 2 2 2h3v-4h6v4h3c1 0 2-1 2-2v-6c0-1-1-2-2-2h-1V8c0-3-2-5-5-5z" fill={color} /><path d="M10 8h4" stroke="#FFF" strokeWidth="0.8" /></svg>);
    case "Docker":
      return (<svg {...props} viewBox="0 0 24 24"><rect x="3" y="10" width="3" height="3" rx="0.5" fill={color} /><rect x="7" y="10" width="3" height="3" rx="0.5" fill={color} /><rect x="11" y="10" width="3" height="3" rx="0.5" fill={color} /><rect x="7" y="6" width="3" height="3" rx="0.5" fill={color} /><rect x="11" y="6" width="3" height="3" rx="0.5" fill={color} /><rect x="15" y="10" width="3" height="3" rx="0.5" fill={color} /><path d="M4 14c0 4 2 6 8 6 5 0 7-2 7-5 0-1-1-1-1-1H4z" fill={color} opacity="0.3" /></svg>);
    case "Git":
      return (<svg {...props} viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2z" fill={color} /><circle cx="12" cy="12" r="3" fill="#FFF" /></svg>);
    case "ASP.NET Core":
      return (<svg {...props} viewBox="0 0 24 24"><path d="M2 4h20v16H2V4zm2 2v12h16V6H4zm4 10V8h2v8H8zm4 0V8h6v2h-4v1h3v2h-3v1h4v2h-6z" fill={color} /></svg>);
    case "Laravel":
      return (<svg {...props} viewBox="0 0 24 24"><path d="M6 5l2-2 2 2-2 2-2-2zm7 0l2-2 2 2-2 2-2-2zM4 10l2-2 2 2-2 2-2-2zm7 0l2-2 2 2-2 2-2-2z" fill={color} /><path d="M12 12l2-2 2 2v5l-2 2-2-2v-5z" fill={color} /><path d="M8 14l2-2 2 2v3l-2 2-2-2v-3z" fill={color} opacity="0.7" /></svg>);
    default:
      return <div className="w-5 h-5 rounded bg-neutral-700" />;
  }
}

export default function TechnologyConstellation() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springMouseX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springMouseY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  const nodes = useMemo(() => buildConstellation(), []);

  const lines = useMemo(() => {
    const result = [];
    const added = new Set();
    nodes.forEach((node) => {
      node.connections.forEach((targetIdx) => {
        const key = [node.tech.name, nodes[targetIdx].tech.name].sort().join("-");
        if (!added.has(key)) {
          added.add(key);
          result.push({
            x1: node.x, y1: node.y,
            x2: nodes[targetIdx].x, y2: nodes[targetIdx].y,
          });
        }
      });
    });
    return result;
  }, [nodes]);

  const handleMouse = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouse}
      className="relative w-full h-full"
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        {lines.map((line, i) => (
          <line
            key={`line-${i}`}
            x1={`${line.x1}%`} y1={`${line.y1}%`}
            x2={`${line.x2}%`} y2={`${line.y2}%`}
            stroke="rgba(6,182,212,0.08)"
            strokeWidth="0.8"
            strokeDasharray="4 4"
            className="animate-data-flow"
          />
        ))}
      </svg>

      {nodes.map((node, i) => (
        <ConstellationNodeIcon
          key={node.tech.name}
          node={node}
          index={i}
          mouseX={springMouseX}
          mouseY={springMouseY}
        />
      ))}
    </div>
  );
}

function ConstellationNodeIcon({ node, index, mouseX, mouseY }) {
  const seeds = [7, 9, 5, 11, 8, 6, 10, 7, 9, 12, 6, 8];
  const ampSeed = [6, 7, 8, 9, 10, 6, 7, 8, 9, 10, 6, 7];
  const amplitude = ampSeed[index % ampSeed.length];
  const period = 4 + (seeds[index % seeds.length] % 4);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="absolute flex flex-col items-center gap-1"
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.div
        animate={{ y: [0, -amplitude, 0] }}
        transition={{ duration: period, repeat: Infinity, ease: "easeInOut" }}
        className="group cursor-pointer"
        style={{
          translateX: mouseX,
          translateY: mouseY,
        }}
      >
        <div
          className="flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08]"
          style={{
            width: 44, height: 44,
            boxShadow: `inset 0 1px 0 0 rgba(255,255,255,0.05), 0 0 0 1px ${node.tech.color}15`,
          }}
        >
          <TechIconSVG name={node.tech.name} color={node.tech.color} size={20} />
        </div>
        <span className="text-[9px] font-medium text-neutral-600 whitespace-nowrap transition-colors group-hover:text-neutral-400">
          {node.tech.name}
        </span>
      </motion.div>
    </motion.div>
  );
}

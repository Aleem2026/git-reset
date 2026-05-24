import { motion } from "motion/react";
import type { CSSProperties } from "react";
import {
  Activity,
  CalendarCheck,
  MessageSquareText,
  PhoneCall,
} from "lucide-react";

const orbitNodes = [
  { icon: PhoneCall, label: "Voice", delay: 0, radius: 178 },
  { icon: MessageSquareText, label: "Chat", delay: -2.5, radius: 206 },
  { icon: CalendarCheck, label: "Book", delay: -5, radius: 190 },
];

export function Orb() {
  return (
    <div className="relative w-[520px] h-[520px] max-w-full mx-auto [perspective:1400px]">
      <motion.div
        animate={{ rotateX: [58, 66, 58], rotateZ: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-amber/25 [transform-style:preserve-3d]"
      />
      <motion.div
        animate={{ rotateY: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-12 rounded-full border border-neon/25 [transform-style:preserve-3d]"
        style={{ transform: "rotateX(72deg)" }}
      />
      <motion.div
        animate={{ rotateX: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-20 rounded-full border border-violet/25 [transform-style:preserve-3d]"
        style={{ transform: "rotateY(68deg)" }}
      />

      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.025, 1],
        }}
        transition={{
          rotate: { duration: 34, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute inset-24 rounded-full shadow-lux"
        style={{
          background:
            "conic-gradient(from 120deg, oklch(0.85 0.16 150), oklch(0.78 0.13 85), oklch(0.58 0.18 290), oklch(0.85 0.16 150))",
        }}
      >
        <div
          className="absolute inset-2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, oklch(0.98 0.08 120), oklch(0.34 0.08 175) 44%, oklch(0.13 0.03 220) 76%)",
          }}
        />
        <div className="absolute inset-10 rounded-full border border-white/10" />
        <div className="absolute inset-20 rounded-full bg-white/10 blur-xl" />
      </motion.div>

      {orbitNodes.map((node) => (
        <div
          key={node.label}
          className="absolute top-1/2 left-1/2 -mt-7 -ml-7"
          style={
            {
              "--orbit-r": `${node.radius}px`,
              animation: "orbit 16s linear infinite",
              animationDelay: `${node.delay}s`,
            } as CSSProperties
          }
        >
          <div className="w-14 h-14 rounded-2xl bg-background/70 border border-border backdrop-blur flex items-center justify-center shadow-elev">
            <node.icon className="w-5 h-5 text-amber" />
          </div>
        </div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-2 top-20 glass rounded-2xl p-4 w-44 shadow-elev"
      >
        <div className="flex items-center gap-2 text-xs font-mono text-amber mb-2">
          <Activity className="w-4 h-4" />
          Live workflow
        </div>
        <div className="space-y-2">
          {[78, 52, 88].map((width, index) => (
            <span
              key={width}
              className="block h-2 rounded-full bg-gradient-to-r from-neon to-amber"
              style={{ width: `${width}%`, opacity: 0.9 - index * 0.16 }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="absolute right-3 bottom-24 glass rounded-2xl p-4 w-48 shadow-elev"
      >
        <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
          AI handoff
        </div>
        <div className="text-sm font-medium">Qualified lead booked</div>
        <div className="mt-3 flex items-end gap-1 h-8">
          {Array.from({ length: 12 }).map((_, index) => (
            <span
              key={index}
              className="w-1.5 bg-gradient-to-t from-violet to-neon rounded-full animate-wave"
              style={{
                height: `${38 + ((index * 17) % 55)}%`,
                animationDelay: `${index * 0.07}s`,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

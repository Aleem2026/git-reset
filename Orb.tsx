import { motion } from "motion/react";

// 3D-feeling animated orb built with layered gradients + CSS transforms.
export function Orb() {
  return (
    <div className="relative w-[480px] h-[480px] max-w-full mx-auto [perspective:1200px]">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,oklch(0.7_0.22_150/0.35),transparent_60%)] blur-2xl animate-pulse-glow" />

      {/* Rotating rings */}
      <motion.div
        animate={{ rotateX: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 rounded-full border border-neon/30 [transform-style:preserve-3d]"
        style={{ transform: "rotateY(70deg)" }}
      />
      <motion.div
        animate={{ rotateY: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-neon/20 [transform-style:preserve-3d]"
        style={{ transform: "rotateX(65deg)" }}
      />
      <motion.div
        animate={{ rotateZ: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-neon/15"
      />

      {/* Core sphere */}
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-20 rounded-full shadow-glow"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.95 0.18 150), oklch(0.55 0.2 155) 45%, oklch(0.2 0.05 165) 75%)",
        }}
      >
        <div className="absolute inset-0 rounded-full opacity-50 mix-blend-overlay"
          style={{
            background:
              "conic-gradient(from 0deg, oklch(0.9 0.22 148), transparent, oklch(0.7 0.2 152), transparent, oklch(0.9 0.22 148))",
          }}
        />
      </motion.div>

      {/* Orbiting nodes */}
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5"
          style={{
            // @ts-expect-error css var
            "--orbit-r": `${170 + i * 18}px`,
            animation: `orbit ${10 + i * 3}s linear infinite`,
            animationDelay: `${i * -2}s`,
          }}
        >
          <div className="w-full h-full rounded-full bg-neon shadow-[0_0_12px_oklch(0.85_0.22_150)]" />
        </div>
      ))}

      {/* Voice waveform */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-end gap-1 h-10">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="w-1 bg-gradient-to-t from-neon-soft to-neon rounded-full animate-wave"
            style={{
              height: "100%",
              animationDelay: `${i * 0.08}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

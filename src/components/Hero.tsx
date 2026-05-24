import { motion } from "motion/react";
import { ArrowRight, Headphones, ShieldCheck, Sparkles } from "lucide-react";
import { Orb } from "./Orb";

const chips = [
  "Human-like calls",
  "CRM-ready workflows",
  "Luxury UI delivery",
  "Sydney based",
];

const metrics = [
  ["24/7", "AI coverage"],
  ["2 wks", "Pilot launch"],
  ["3x", "Faster follow-up"],
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 bg-hero">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 premium-pill px-3 py-1 text-xs font-mono text-neon mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber" />
            AI revenue systems for serious teams
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-[1.02] mb-6"
          >
            Voice agents that{" "}
            <span className="text-gradient">sell, qualify, and support.</span>
            <br />
            Digital products that{" "}
            <span className="text-gradient">feel elite.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mb-8"
          >
            Awazsuno designs and deploys premium AI voice agents, intelligent
            chat systems, and high-converting web applications for businesses
            that want automation to look sharp, sound human, and drive revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-8 flex flex-wrap gap-2 text-sm text-muted-foreground"
          >
            {chips.map((item) => (
              <span key={item} className="feature-chip">
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium shadow-glow hover:opacity-90 transition"
            >
              Build my AI system
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-medium hover:bg-accent/40 transition"
            >
              <Headphones className="w-4 h-4" />
              See capabilities
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {metrics.map(([value, label]) => (
              <div key={label}>
                <div className="text-2xl font-display font-bold text-neon">
                  {value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <Orb />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 mt-16">
        <div className="premium-strip">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber" />
            <span>
              Built for sales, support, booking, lead qualification, and premium
              web launches.
            </span>
          </div>
          <div className="hidden md:block text-muted-foreground">
            Strategy, design, development, integrations, launch, and monthly
            optimization.
          </div>
        </div>
      </div>
    </section>
  );
}

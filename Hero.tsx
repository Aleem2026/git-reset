import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { Orb } from "./Orb";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 bg-hero">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-neon/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-0 -right-32 w-[28rem] h-[28rem] rounded-full bg-neon-soft/10 blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs font-mono text-neon mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse-glow" />
            AI infrastructure for modern businesses
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-[1.02] mb-6"
          >
            Voice agents that <span className="text-gradient">never sleep.</span>
            <br />
            Websites that <span className="text-gradient">never break.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-xl mb-8"
          >
            We build AI calling systems, conversational chatbots, and premium
            web applications for startups, scale-ups, and enterprise call
            centers — engineered to convert.
          </motion.p>

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
              Explore pricing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-medium hover:bg-accent/40 transition"
            >
              <Phone className="w-4 h-4" />
              Hear a demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              ["98%", "Pickup rate"],
              ["24/7", "Always on"],
              ["3.2x", "Avg. ROI"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="text-2xl font-display font-bold text-neon">
                  {v}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {l}
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
    </section>
  );
}

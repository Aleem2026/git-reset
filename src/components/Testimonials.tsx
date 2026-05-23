import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Our call center cut response time from 4 minutes to under 10 seconds. The AI agent handles 70% of volume before a human ever touches a call.",
    author: "Sarah Chen",
    role: "VP of Operations, Finova Lending",
  },
  {
    quote:
      "They rebuilt our entire customer portal in six weeks. The design is gorgeous and conversion went up 40%. This team ships like no one else.",
    author: "Marcus Webb",
    role: "CTO, Relay Health",
  },
  {
    quote:
      "We tried five AI voice providers before Awazsuno. The difference is they actually understand our business — the voice agent sounds like us.",
    author: "Priya Kapoor",
    role: "Head of CX, SwiftRoutes",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono text-neon uppercase tracking-widest mb-3">
            / 04 — Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by teams that ship.
          </h2>
          <p className="text-muted-foreground text-lg">
            Real results from founders, operators, and engineering leaders who
            bet on us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-7 flex flex-col"
            >
              <Quote className="w-8 h-8 text-neon/40 mb-4 shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>
              <div className="border-t border-border/40 pt-4">
                <div className="font-semibold text-sm">{t.author}</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

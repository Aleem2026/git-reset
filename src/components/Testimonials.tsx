import { motion } from "motion/react";
import { BarChart3, Clock3, Quote, ShieldCheck } from "lucide-react";

const proof = [
  {
    icon: Clock3,
    label: "Speed",
    value: "Prototype in week one",
  },
  {
    icon: ShieldCheck,
    label: "Quality",
    value: "Human review before launch",
  },
  {
    icon: BarChart3,
    label: "Clarity",
    value: "Analytics after go-live",
  },
];

const notes = [
  "Best for founders who want a premium AI front office without hiring a full product team.",
  "Built for operators who need calls answered, leads qualified, and customers routed fast.",
  "Designed for businesses that care about how automation feels, not only what it does.",
];

export function Testimonials() {
  return (
    <section className="relative py-28 px-6 surface-band">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-end mb-16">
          <div>
            <div className="section-kicker">/ 04 - Confidence</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Premium means calm, measurable, and launch-ready.
            </h2>
          </div>
          <p className="text-muted-foreground text-lg lg:max-w-xl">
            Until you have public case studies, the strongest trust signal is a
            clear delivery promise: fast prototypes, careful launch control, and
            reporting that shows what the system is doing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {proof.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="premium-card"
            >
              <item.icon className="w-8 h-8 text-amber mb-5" />
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                {item.label}
              </div>
              <div className="text-xl font-semibold">{item.value}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {notes.map((note, index) => (
            <motion.article
              key={note}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass rounded-[1.25rem] p-7"
            >
              <Quote className="w-7 h-7 text-neon/40 mb-5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {note}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

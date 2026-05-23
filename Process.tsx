import { motion } from "motion/react";

const steps = [
  { n: "01", t: "Discovery", d: "30-min call to map your funnel, scripts, and integrations. We leave with a scoped plan." },
  { n: "02", t: "Design & Train", d: "We craft the agent persona, train on your data, and design the surface area. You see prototypes in week one." },
  { n: "03", t: "Launch", d: "We ship to production, integrate to your CRM and telephony, and run a supervised pilot." },
  { n: "04", t: "Optimize", d: "Monthly retainer means continuous tuning — prompts, voices, flows, and analytics." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono text-neon uppercase tracking-widest mb-3">
            / 03 — Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            From idea to live agent in two weeks.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-5 relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative glass rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-full bg-background border border-neon/40 flex items-center justify-center font-mono text-sm text-neon mb-4">
                {s.n}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.d}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

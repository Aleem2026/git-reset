import { motion } from "motion/react";

const steps = [
  {
    n: "01",
    t: "Map the revenue flow",
    d: "We identify where calls, chats, forms, bookings, and follow-ups currently leak time or sales.",
  },
  {
    n: "02",
    t: "Design the AI experience",
    d: "We define the agent voice, conversation logic, knowledge base, UI moments, and escalation paths.",
  },
  {
    n: "03",
    t: "Build the working system",
    d: "We connect telephony, chat, CRM, calendars, analytics, and any custom web interface required.",
  },
  {
    n: "04",
    t: "Launch, listen, optimize",
    d: "We supervise the first real interactions, review transcripts, refine flows, and improve performance monthly.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-end mb-16">
          <div>
            <div className="section-kicker">/ 03 - Delivery</div>
            <h2 className="text-4xl md:text-5xl font-bold">
              A polished system, not a disconnected AI experiment.
            </h2>
          </div>
          <p className="text-muted-foreground text-lg lg:max-w-xl">
            The difference is execution: clear scope, premium interface design,
            production integrations, and ongoing improvement from real customer
            conversations.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent" />
          {steps.map((step, index) => (
            <motion.article
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative glass rounded-[1.25rem] p-6"
            >
              <div className="w-10 h-10 rounded-full bg-background border border-amber/50 flex items-center justify-center font-mono text-sm text-amber mb-4">
                {step.n}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.d}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

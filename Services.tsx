import { motion } from "motion/react";
import { PhoneCall, MessagesSquare, Code2 } from "lucide-react";

const services = [
  {
    icon: PhoneCall,
    title: "AI Voice Calling",
    body: "Outbound and inbound voice agents with natural turn-taking, CRM sync, and live call analytics. Built for sales, support, and high-volume call centers.",
    tags: ["Twilio", "Multilingual", "Sub-300ms"],
  },
  {
    icon: MessagesSquare,
    title: "AI Chatbots",
    body: "Retrieval-grounded chat agents trained on your docs, products, and tone. Deployed to your site, WhatsApp, Slack, and inbox in days, not months.",
    tags: ["RAG", "Multi-channel", "Handoff"],
  },
  {
    icon: Code2,
    title: "Premium Web Apps",
    body: "Bespoke, performance-obsessed web applications. Marketing sites, dashboards, portals — designed and engineered like a product, not a project.",
    tags: ["TypeScript", "Edge", "Design-led"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono text-neon uppercase tracking-widest mb-3">
            / 01 — Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Three pillars. One unfair advantage.
          </h2>
          <p className="text-muted-foreground text-lg">
            From a single voice agent to an entire AI-augmented call center,
            we ship the systems that move revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-card-gradient border border-border p-7 hover:border-neon/40 transition overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-neon/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 ring-1 ring-neon/20">
                  <s.icon className="w-6 h-6 text-neon" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {s.body}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

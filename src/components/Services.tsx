import { motion } from "motion/react";
import { Code2, MessagesSquare, PhoneCall, Workflow } from "lucide-react";

const services = [
  {
    icon: PhoneCall,
    title: "AI Voice Agents",
    body: "Inbound and outbound agents that answer, qualify, book, follow up, and route customers with a natural voice experience.",
    tags: ["Sales", "Support", "Bookings"],
    detail:
      "Telephony, scripts, objection handling, CRM sync, and call analytics.",
  },
  {
    icon: MessagesSquare,
    title: "AI Chat Systems",
    body: "Website, WhatsApp, inbox, and internal chat assistants trained on your business knowledge and escalation rules.",
    tags: ["RAG", "WhatsApp", "Handoff"],
    detail:
      "Grounded answers, lead capture, product guidance, and support triage.",
  },
  {
    icon: Workflow,
    title: "Automation Workflows",
    body: "The invisible operations layer behind the AI: routing, reminders, lead scoring, notifications, and reporting.",
    tags: ["CRM", "Ops", "Analytics"],
    detail: "Built to connect the tools your team already uses every day.",
  },
  {
    icon: Code2,
    title: "Premium Web Apps",
    body: "High-end websites, portals, dashboards, and product interfaces with polished UI and production-grade engineering.",
    tags: ["Design-led", "Fast", "Scalable"],
    detail:
      "A complete product surface, not just a page that looks good in screenshots.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-end mb-16">
          <div>
            <div className="section-kicker">/ 01 - Capabilities</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              One studio for voice, chat, automation, and premium web.
            </h2>
          </div>
          <p className="text-muted-foreground text-lg lg:max-w-xl">
            Awazsuno combines AI implementation with high-end product design, so
            your automation feels credible to customers and useful to your team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="premium-card group"
            >
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center ring-1 ring-neon/20">
                    <service.icon className="w-6 h-6 text-neon" />
                  </div>
                  <div className="text-xs font-mono text-muted-foreground">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {service.body}
                </p>
                <p className="text-sm text-foreground/80 mb-6">
                  {service.detail}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span key={tag} className="feature-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

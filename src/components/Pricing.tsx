import { motion } from "motion/react";
import { Check, Gem } from "lucide-react";

const tiers = [
  {
    name: "Launch",
    tagline: "For startups proving their first AI workflow",
    setup: 2500,
    retainer: 650,
    highlight: false,
    features: [
      "1 AI voice or chat agent",
      "Script, persona, and knowledge setup",
      "Website or WhatsApp deployment",
      "Lead capture and email alerts",
      "Monthly tuning and support",
    ],
  },
  {
    name: "Signature",
    tagline: "A complete premium AI + web experience",
    setup: 5500,
    retainer: 1200,
    highlight: true,
    features: [
      "Voice agent and chatbot system",
      "Custom landing page or client portal",
      "CRM, calendar, and notification flows",
      "Conversion analytics dashboard",
      "Priority delivery and optimization",
    ],
  },
  {
    name: "Enterprise",
    tagline: "For call centers and high-volume operations",
    setup: 9500,
    retainer: 2500,
    highlight: false,
    features: [
      "Multi-agent voice and chat fleet",
      "Advanced routing and escalation",
      "Custom reporting and QA workflows",
      "Multilingual voice options",
      "Dedicated implementation partner",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28 px-6 surface-band">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-end mb-16">
          <div>
            <div className="section-kicker">/ 02 - Investment</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Premium builds with clear entry points.
            </h2>
          </div>
          <p className="text-muted-foreground text-lg lg:max-w-xl">
            Every engagement includes strategy, implementation, launch support,
            and practical refinement after real users start interacting with the
            system.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((tier, index) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`relative rounded-[1.35rem] p-8 flex flex-col ${
                tier.highlight
                  ? "bg-card-gradient border border-amber/50 shadow-lux"
                  : "bg-card-gradient border border-border"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-8 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-primary text-primary-foreground">
                  <Gem className="w-3 h-3" />
                  Best value
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.tagline}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-muted-foreground mr-1">
                    from
                  </span>
                  <span className="text-5xl font-display font-bold text-gradient">
                    ${tier.setup.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground">setup</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  +{" "}
                  <span className="text-foreground font-medium">
                    ${tier.retainer.toLocaleString()}
                  </span>{" "}
                  / month for tuning and support
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-neon mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center px-5 py-3 rounded-full font-medium transition ${
                  tier.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "glass hover:bg-accent/40"
                }`}
              >
                Start with {tier.name}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

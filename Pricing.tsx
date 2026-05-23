import { motion } from "motion/react";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Startup",
    tagline: "AI voice + chat, launch-ready",
    setup: 2000,
    retainer: 500,
    highlight: false,
    features: [
      "1 AI voice agent (in or outbound)",
      "1 AI chatbot, RAG over your docs",
      "Twilio / WhatsApp integration",
      "Up to 2,000 conversations / mo",
      "Email support, 48h response",
    ],
  },
  {
    name: "Web Application",
    tagline: "Custom builds, designed to convert",
    setup: 1500,
    retainer: null,
    highlight: false,
    starting: true,
    features: [
      "Bespoke design + development",
      "Marketing site or web app",
      "Performance, SEO, analytics",
      "CMS + content workflows",
      "Care plans available",
    ],
  },
  {
    name: "Enterprise Call Center",
    tagline: "Full AI contact-center stack",
    setup: 6000,
    retainer: 1000,
    highlight: true,
    features: [
      "Multi-agent voice + chat fleet",
      "CRM + telephony integration",
      "Unlimited conversations",
      "Custom voices & multilingual",
      "Realtime analytics dashboard",
      "Dedicated success engineer",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28 px-6">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-mono text-neon uppercase tracking-widest mb-3">
            / 02 — Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transparent. Premium. Built to scale.
          </h2>
          <p className="text-muted-foreground text-lg">
            One-time setup plus a monthly retainer for AI agents. Web
            applications are scoped and quoted from a fixed starting price.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                t.highlight
                  ? "bg-card-gradient border border-neon/40 shadow-glow"
                  : "bg-card-gradient border border-border"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-8 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-widest bg-primary text-primary-foreground">
                  Most powerful
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-1">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.tagline}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-border">
                <div className="flex items-baseline gap-1">
                  {t.starting && (
                    <span className="text-xs text-muted-foreground mr-1">
                      from
                    </span>
                  )}
                  <span className="text-5xl font-display font-bold text-gradient">
                    ${t.setup.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {t.retainer !== null ? "setup" : "one-time"}
                  </span>
                </div>
                {t.retainer !== null && (
                  <div className="mt-2 text-sm text-muted-foreground">
                    + <span className="text-foreground font-medium">
                      ${t.retainer}
                    </span>{" "}
                    / month retainer
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-neon mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`text-center px-5 py-3 rounded-full font-medium transition ${
                  t.highlight
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "glass hover:bg-accent/40"
                }`}
              >
                Start with {t.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { ArrowRight, Clock, Mail, MapPin, PhoneCall } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "aleem00012001@gmail.com",
    href: "mailto:aleem00012001@gmail.com",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Sydney, Australia",
    href: "https://maps.google.com/?q=Sydney,Australia",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
    href: null,
  },
];

export function CTA() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[2rem] overflow-hidden border border-amber/30 shadow-lux p-10 md:p-16"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.17 0.035 220), oklch(0.14 0.03 165) 55%, oklch(0.2 0.07 95))",
          }}
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber mb-4">
                <PhoneCall className="w-4 h-4" />
                Limited premium builds each month
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
                Give your business an{" "}
                <span className="text-gradient">AI front office.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mb-8">
                Send the first workflow you want automated. We will reply with a
                clear scope, timeline, and the best package for your launch.
              </p>
              <a
                href="mailto:aleem00012001@gmail.com"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-medium shadow-glow hover:opacity-90 transition"
              >
                Start the conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-background/40 backdrop-blur p-4 hover:border-amber/40 transition-colors">
                    <div className="w-11 h-11 rounded-xl bg-amber/10 border border-amber/30 flex items-center justify-center text-amber">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="text-sm font-medium truncate">
                        {item.value}
                      </div>
                    </div>
                    {item.href && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-amber group-hover:translate-x-1 transition-all" />
                    )}
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 text-sm text-muted-foreground">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Awazsuno. Sydney, Australia. All rights
          reserved.
        </div>
        <div className="font-mono text-xs">
          AI voice, chat, automation, and premium web systems.
        </div>
      </div>
    </footer>
  );
}

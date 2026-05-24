import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { CTA, Footer } from "@/components/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Awazsuno - Premium AI Voice Agents, Chatbots & Web Apps" },
      {
        name: "description",
        content:
          "Premium AI voice agents, chat systems, automation workflows, and bespoke web applications for businesses that want automation to drive revenue.",
      },
      { property: "og:title", content: "Awazsuno - AI Voice, Chat & Web" },
      {
        property: "og:description",
        content:
          "AI voice agents, chat systems, automation workflows, and premium web applications engineered to convert.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

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
      { title: "Awazsuno — AI Voice Agents, Chatbots & Premium Web Apps" },
      {
        name: "description",
        content:
          "Premium AI voice calling, chatbots, and bespoke web applications for startups and enterprise call centers. Transparent pricing, white-glove delivery.",
      },
      { property: "og:title", content: "Awazsuno — AI Voice, Chat & Web" },
      {
        property: "og:description",
        content:
          "AI voice agents, chatbots, and premium web applications engineered to convert.",
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

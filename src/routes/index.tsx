import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Cycle } from "@/components/landing/Cycle";
import { FeatureShowcase } from "@/components/landing/FeatureShowcase";
import { WaitlistCTA } from "@/components/landing/WaitlistCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scraps — Turn what you have into what you'll love" },
      { name: "description", content: "Scan your fridge, talk through your cravings, and Scraps builds a recipe from what you already have. Join the waitlist." },
      { property: "og:title", content: "Scraps — Turn what you have into what you'll love" },
      { property: "og:description", content: "Scan your fridge, talk through your cravings, and Scraps builds a recipe from what you already have." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen scroll-smooth bg-cream font-sans text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <Cycle />
        <FeatureShowcase />
        <WaitlistCTA />
      </main>
      <Footer />
      <Toaster position="bottom-center" richColors />
    </div>
  );
}

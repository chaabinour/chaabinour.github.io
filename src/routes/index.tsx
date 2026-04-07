import { createFileRoute } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import { BootSequence } from "@/components/BootSequence";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ActivityDashboard } from "@/components/ActivityDashboard";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { NowPlaying } from "@/components/NowPlaying";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollProgress } from "@/components/ScrollProgress";
import { NetworkStatus } from "@/components/NetworkStatus";
import { KonamiCode } from "@/components/KonamiCode";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [booted, setBooted] = useState(false);
  const onBootComplete = useCallback(() => setBooted(true), []);

  if (!booted) {
    return <BootSequence onComplete={onBootComplete} />;
  }

  return (
    <>
      <ScrollProgress />
      <ThemeToggle />
      <Navigation />
      <KonamiCode />
      <main>
        <Hero />
        <ActivityDashboard />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <NowPlaying />
        <Contact />
      </main>
      <NetworkStatus />
      <footer className="py-8 px-4 text-center border-t border-border">
        <p className="font-mono text-xs text-muted-foreground">
          Engineered with precision by Nour El Houda Chaabi • 2026
        </p>
      </footer>
    </>
  );
}

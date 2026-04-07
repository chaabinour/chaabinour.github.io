import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo, heroTypingCommands } from "@/config/portfolio";
import { Terminal } from "./Terminal";
import { ChevronDown } from "lucide-react";

function TypingEffect() {
  const [cmdIndex, setCmdIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const cmd = heroTypingCommands[cmdIndex];

  useEffect(() => {
    if (!deleting && charIndex < cmd.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 50);
      return () => clearTimeout(t);
    }
    if (!deleting && charIndex === cmd.length) {
      const t = setTimeout(() => setDeleting(true), 1500);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((c) => c - 1), 25);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setCmdIndex((i) => (i + 1) % heroTypingCommands.length);
    }
  }, [charIndex, deleting, cmd.length, cmdIndex]);

  return (
    <span className="font-mono text-cyan">
      {cmd.slice(0, charIndex)}
      <span className="inline-block w-2 h-5 ml-0.5 bg-cyan align-middle" style={{ animation: "blink 1s infinite" }} />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="h-2 w-2 rounded-full bg-cyan" style={{ animation: "pulse-dot 2s infinite" }} />
          <span className="text-muted-foreground">4th-Year Cloud Engineer • Summer 2026</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
          <span className="text-foreground">{personalInfo.name.split(" ").slice(0, -1).join(" ")} </span>
          <span className="text-gradient-cyan">{personalInfo.name.split(" ").pop()}</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-4">{personalInfo.title}</p>

        <div className="h-8 mb-8">
          <span className="font-mono text-sm text-muted-foreground">$ </span>
          <TypingEffect />
        </div>

        <motion.p
          className="text-lg sm:text-xl font-medium text-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {personalInfo.heroStatement}
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-cyan px-6 py-3 font-semibold text-cyan-foreground transition-all hover:opacity-90 glow-cyan"
          >
            Explore Architecture
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all hover:bg-accent"
          >
            View Documentation
          </a>
        </div>

        <Terminal />
      </motion.div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}

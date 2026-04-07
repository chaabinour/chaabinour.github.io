import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

export function KonamiCode() {
  const [sequence, setSequence] = useState<string[]>([]);
  const [triggered, setTriggered] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    setSequence((prev) => {
      const next = [...prev, e.key].slice(-KONAMI.length);
      if (next.join(",") === KONAMI.join(",")) {
        setTriggered(true);
        setTimeout(() => setTriggered(false), 4000);
        return [];
      }
      return next;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {triggered && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Glitch overlay */}
          <div className="absolute inset-0 bg-terminal/80" style={{ animation: "glitch 0.3s infinite" }} />
          
          {/* Banner */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <div className="rounded-xl border-2 border-cyan bg-terminal p-8 glow-cyan">
              <h2 className="text-3xl font-bold font-mono text-cyan mb-2">
                DEPLOY SUCCESSFUL ✓
              </h2>
              <p className="text-gold font-mono text-sm">
                You found the secret. Imagine what I build.
              </p>
            </div>
          </motion.div>

          {/* Confetti particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full"
              style={{
                background: i % 2 === 0 ? "var(--color-cyan)" : "var(--color-gold)",
                left: `${Math.random() * 100}%`,
              }}
              initial={{ top: "-5%", opacity: 1 }}
              animate={{
                top: `${50 + Math.random() * 50}%`,
                opacity: 0,
                rotate: Math.random() * 720,
                x: (Math.random() - 0.5) * 200,
              }}
              transition={{ duration: 2 + Math.random(), delay: Math.random() * 0.5 }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

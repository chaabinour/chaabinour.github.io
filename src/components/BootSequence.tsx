import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bootSequence } from "@/config/portfolio";

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let totalDelay = 0;
    bootSequence.forEach((item, i) => {
      totalDelay += item.delay;
      setTimeout(() => {
        setLines((prev) => [...prev, item.text]);
        setProgress(((i + 1) / bootSequence.length) * 100);
      }, totalDelay);
    });
    setTimeout(() => {
      setDone(true);
      setTimeout(onComplete, 600);
    }, totalDelay + 500);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-terminal"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-xl px-6">
            <div className="mb-8 font-mono text-sm">
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="py-0.5 text-terminal-foreground"
                >
                  <span className="text-cyan">{line.slice(0, 4)}</span>
                  <span>{line.slice(4)}</span>
                </motion.div>
              ))}
              {!done && (
                <span className="inline-block w-2 h-4 bg-cyan" style={{ animation: "blink 1s infinite" }} />
              )}
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-secondary">
              <motion.div
                className="h-full bg-cyan rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="mt-2 font-mono text-xs text-muted-foreground text-center">
              {Math.round(progress)}% loaded
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

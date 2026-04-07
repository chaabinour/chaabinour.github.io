import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { certifications } from "@/config/portfolio";
import { Award, Loader2 } from "lucide-react";

export function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 bg-secondary/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Certifications
          </h2>
          <div className="h-1 w-16 bg-gold rounded mb-8" />

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                className="rounded-xl border border-border bg-card p-6 group hover:border-gold transition-colors"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  {cert.status === "completed" ? (
                    <Award className="text-gold" size={24} />
                  ) : (
                    <Loader2 className="text-cyan animate-spin" size={24} />
                  )}
                  <h3 className="font-semibold">{cert.name}</h3>
                </div>
                {cert.status === "in-progress" && cert.progress !== undefined && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground font-mono">
                      <span>Progress</span>
                      <span>{cert.progress}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan to-gold rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${cert.progress}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                )}
                {cert.status === "completed" && (
                  <span className="text-xs font-mono text-gold">
                    Source: {(cert as any).source || "Verified"}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

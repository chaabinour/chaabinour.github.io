import { motion } from "framer-motion";
import { nowPlaying } from "@/config/portfolio";
import { Activity, GitCommit, BookOpen, Zap, Target } from "lucide-react";

export function NowPlaying() {
  const items = [
    { icon: Zap, label: "Building", value: nowPlaying.currentlyBuilding, color: "text-cyan" },
    { icon: GitCommit, label: "Last Commit", value: nowPlaying.lastCommit, color: "text-gold" },
    { icon: Target, label: "Focus", value: nowPlaying.currentFocus, color: "text-cyan" },
    { icon: Activity, label: "Learning", value: nowPlaying.learning, color: "text-gold" },
    { icon: BookOpen, label: "Reading", value: nowPlaying.reading, color: "text-muted-foreground" },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan" style={{ animation: "pulse-dot 2s infinite" }} />
            <h3 className="font-mono text-sm uppercase tracking-wider text-cyan">Live Activity</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-start gap-3 rounded-lg bg-secondary/50 p-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <item.icon size={16} className={`mt-0.5 ${item.color}`} />
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { activityDashboard } from "@/config/portfolio";

export function ActivityDashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-mono text-sm uppercase tracking-wider text-cyan mb-4">System Activity</h3>
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
              {activityDashboard.map((item, i) => (
                <motion.div
                  key={item.name}
                  className="p-5"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`h-2 w-2 rounded-full ${item.status === "active" ? "bg-cyan" : "bg-muted-foreground"}`}
                      style={item.status === "active" ? { animation: "pulse-dot 2s infinite" } : {}}
                    />
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      {item.status}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm mb-1">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

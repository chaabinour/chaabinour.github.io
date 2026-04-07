import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skillCategories, codeSnippets } from "@/config/portfolio";
import { TechIcon } from "./TechIcons";

function CodeTooltip({ name }: { name: string }) {
  const snippet = codeSnippets[name];
  if (!snippet) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.95 }}
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-72"
    >
      <div className="terminal-window p-3 text-xs shadow-xl">
        <div className="flex items-center gap-1.5 mb-2 text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-destructive" />
          <span className="h-2 w-2 rounded-full bg-gold" />
          <span className="h-2 w-2 rounded-full bg-cyan" />
          <span className="ml-1 font-mono">{name.toLowerCase()}</span>
        </div>
        <pre className="text-terminal-foreground font-mono overflow-x-auto whitespace-pre leading-relaxed">{snippet.code}</pre>
      </div>
    </motion.div>
  );
}

function SkillCard({ skill }: { skill: { name: string; details: string; icon: string } }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && <CodeTooltip name={skill.name} />}
      <motion.div
        className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-cyan cursor-pointer"
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <TechIcon name={skill.icon} size={32} />
        <div>
          <h4 className="font-semibold text-sm">{skill.name}</h4>
          <p className="text-xs text-muted-foreground">{skill.details}</p>
        </div>
      </motion.div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Skills Dashboard
          </h2>
          <div className="h-1 w-16 bg-cyan rounded mb-8" />
          <p className="text-muted-foreground mb-12">
            Hover over any technology to see a code snippet. These are the tools I use daily.
          </p>

          <div className="space-y-10">
            {skillCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIdx * 0.15 }}
              >
                <h3 className="text-sm font-mono text-cyan uppercase tracking-wider mb-4">
                  {cat.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {cat.skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/config/portfolio";
import { TechIcon } from "./TechIcons";
import { ChevronDown, RotateCcw } from "lucide-react";

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`);
  };

  return (
    <div
      ref={ref}
      className={`card-3d ${className}`}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTransform("")}
    >
      {children}
    </div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const [adrOpen, setAdrOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
    >
      <TiltCard>
        <div className="relative rounded-2xl border border-border bg-card overflow-hidden group">
          {/* Sheen effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-transparent via-cyan/5 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-700" />

          {/* Status badge */}
          <div className="absolute top-4 right-4 z-10">
            {project.status === "in-progress" ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 text-xs font-mono text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" style={{ animation: "pulse-dot 2s infinite" }} />
                IN PROGRESS
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/10 px-3 py-1 text-xs font-mono text-cyan">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                COMPLETED
              </span>
            )}
          </div>

          {!flipped ? (
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-2 pr-24" style={{ fontFamily: "var(--font-display)" }}>
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-1">
                <span className="text-gold font-mono text-xs">CHALLENGE:</span> {project.challenge}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <span className="text-cyan font-mono text-xs">SOLUTION:</span> {project.solution}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <div key={tech} className="flex items-center gap-1.5 rounded-lg border border-border bg-secondary px-2.5 py-1.5">
                    <TechIcon name={tech} size={16} />
                    <span className="text-xs font-mono capitalize">{tech}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm font-medium text-foreground mb-4">
                <span className="text-cyan">→</span> {project.result}
              </p>

              {/* Efficiency */}
              <div className="border-t border-border pt-4 mb-4">
                <h4 className="text-xs font-mono text-gold uppercase tracking-wider mb-2">Efficiency Approach</h4>
                <ul className="space-y-1">
                  {project.efficiency.map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-cyan mt-0.5">▸</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setFlipped(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan hover:text-foreground transition-colors"
                >
                  <RotateCcw size={12} /> View Architecture Decisions
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  {project.adr.title}
                </h3>
                <button
                  onClick={() => setFlipped(false)}
                  className="text-xs font-mono text-cyan hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <RotateCcw size={12} /> Back
                </button>
              </div>
              <div className="space-y-4">
                {project.adr.decisions.map((d, i) => (
                  <div key={i} className="border-l-2 border-cyan pl-4">
                    <h4 className="text-sm font-semibold mb-1">{d.question}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{d.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
          Project Showcase
        </h2>
        <div className="h-1 w-16 bg-cyan rounded mb-4" />
        <p className="text-muted-foreground mb-12">
          Click any card to see architecture decisions. Hover for 3D effect.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.slice(0, 2).map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
        <div className="mt-8">
          <ProjectCard project={projects[2]} index={2} />
        </div>
      </div>
    </section>
  );
}

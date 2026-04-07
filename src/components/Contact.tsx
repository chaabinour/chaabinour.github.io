import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/config/portfolio";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const terminalLines = [
    "nour@cloud-engineer:~ $ ls -la",
    "drwxr-xr-x  skills/",
    "drwxr-xr-x  projects/",
    "-rw-r--r--  resume.pdf",
    "drwxr-xr-x  certifications/",
    "",
    "nour@cloud-engineer:~ $ cat connect.txt",
  ];

  return (
    <section id="contact" className="py-24 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Connect
          </h2>
          <div className="h-1 w-16 bg-cyan rounded mb-8" />

          <div className="terminal-window overflow-hidden max-w-2xl">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
              <div className="h-3 w-3 rounded-full bg-destructive" />
              <div className="h-3 w-3 rounded-full bg-gold" />
              <div className="h-3 w-3 rounded-full bg-cyan" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">connect</span>
            </div>
            <div className="p-4 font-mono text-sm space-y-1">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  className="text-terminal-foreground"
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08 }}
                >
                  {line.startsWith("nour") ? (
                    <>
                      <span className="text-cyan">nour@cloud-engineer</span>
                      <span className="text-muted-foreground">:</span>
                      <span className="text-gold">~</span>
                      <span className="text-muted-foreground"> $ </span>
                      <span className="text-foreground">{line.split("$ ")[1]}</span>
                    </>
                  ) : (
                    <span className="text-muted-foreground">{line}</span>
                  )}
                </motion.div>
              ))}

              <motion.div
                className="mt-4 space-y-2"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <Github size={16} className="text-cyan" />
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-cyan transition-colors">
                    github.com/chaabinour
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin size={16} className="text-cyan" />
                  <span className="text-muted-foreground">{personalInfo.linkedin || "[TO FILL]"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-cyan" />
                  <span className="text-muted-foreground">{personalInfo.email || "[TO FILL]"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-gold" />
                  <span className="text-muted-foreground">Tunisia, Remote Global</span>
                </div>
              </motion.div>

              <motion.div
                className="mt-6 pt-4 border-t border-border"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
              >
                <p className="text-cyan italic">
                  "Exploring internship opportunities for Summer 2026"
                </p>
                <p className="text-gold mt-2">
                  "Infrastructure that anticipates, adapts, performs."
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

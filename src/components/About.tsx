import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, experience } from "@/config/portfolio";
import { MapPin, GraduationCap, Users } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
            {personalInfo.aboutHeadline}
          </h2>
          <div className="h-1 w-16 bg-cyan rounded mb-8" />

          <p className="text-lg text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            {personalInfo.aboutNarrative}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-xl border border-border bg-card p-6">
              <GraduationCap className="text-cyan mb-3" size={24} />
              <h3 className="font-semibold mb-1">Education</h3>
              <p className="text-sm text-muted-foreground">{personalInfo.education}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <MapPin className="text-gold mb-3" size={24} />
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">{personalInfo.location} • Remote Global</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <Users className="text-cyan mb-3" size={24} />
              <h3 className="font-semibold mb-1">Goal</h3>
              <p className="text-sm text-muted-foreground">2+ month DevOps/Cloud internship, Summer 2026</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Leadership & Community
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.org}
                className="rounded-xl border border-border bg-card p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`h-2 w-2 rounded-full ${exp.type === "leadership" ? "bg-gold" : "bg-cyan"}`} />
                  <h4 className="font-semibold">{exp.org}</h4>
                  <span className="text-xs text-muted-foreground ml-auto">{exp.role}</span>
                </div>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

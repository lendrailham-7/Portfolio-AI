"use client";

import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Website portfolio modern dengan dark/light mode dan integrasi AI chatbot.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    github: "https://github.com/lendrailham-7/Portfolio-AI",
    demo: "#",
  },
  {
    title: "WhatsApp AI Bot",
    description:
      "Bot WhatsApp berbasis Node.js dengan integrasi AI untuk menjawab pesan secara otomatis.",
    tech: ["Node.js", "Whatsapp-web-js", "Gemini", "Groq"],
    github: "https://github.com/lendrailham-7/Bot-WhatsApp",
    demo: "#",
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="font-semibold uppercase tracking-[0.2em] text-amber-500">
          Projects
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Things I've built.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border p-8 shadow-lg transition hover:-translate-y-2"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 opacity-80">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full px-3 py-1 text-sm"
                    style={{
                      border: "1px solid var(--border)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-amber-500"
                >
                  <GitBranch size={18} />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-amber-500"
                >
                  <ExternalLink size={18} />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
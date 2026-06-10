"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "REST API", "Express", "JSON"],
  },
  {
    title: "IoT",
    items: ["ESP8266", "ESP32", "Arduino IDE", "Sensors"],
  },
  {
    title: "AI & Tools",
    items: ["OpenAI API", "Gemini API", "Git", "GitHub"],
  },
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="font-semibold uppercase tracking-[0.2em] text-amber-500">
          Skills
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Technologies I work with.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-3xl border p-8 shadow-lg transition hover:-translate-y-1"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <h3 className="text-2xl font-semibold text-amber-500">
                {skill.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full px-4 py-2 text-sm"
                    style={{
                      backgroundColor: "var(--bg)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
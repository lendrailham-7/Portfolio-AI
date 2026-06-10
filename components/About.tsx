"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="font-semibold uppercase tracking-[0.2em] text-amber-500">
          About Me
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Building modern digital experiences.
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div
            className="rounded-3xl border p-8 shadow-lg"
            style={{
              backgroundColor: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <h3 className="text-2xl font-semibold">
              Siapa saya?
            </h3>

            <p className="mt-4 leading-8 opacity-80">
              Saya adalah seorang Full-Stack Engineer
              yang memiliki ketertarikan besar pada
              pengembangan web modern, Internet of Things
              (IoT), dan intelligent automation.
            </p>

            <p className="mt-4 leading-8 opacity-80">
              Saya percaya bahwa teknologi harus
              memberikan manfaat nyata melalui solusi
              yang cepat, elegan, dan mudah digunakan.
            </p>
          </div>

          <div
            className="rounded-3xl border p-8 shadow-lg"
            style={{
              backgroundColor: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <h3 className="text-2xl font-semibold">
              Yang saya kerjakan
            </h3>

            <ul className="mt-6 space-y-4">
              <li>⚡ Membangun aplikasi web modern.</li>

              <li>🤖 Mengintegrasikan AI ke dalam aplikasi.</li>

              <li>📡 Mengembangkan solusi IoT berbasis ESP8266 dan ESP32.</li>

              <li>🔄 Membuat sistem automasi yang efisien.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
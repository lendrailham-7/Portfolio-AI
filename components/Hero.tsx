"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-6xl flex-col-reverse items-center justify-center gap-16 px-6 py-20 lg:flex-row">
      {/* Kiri */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center lg:text-left"
      >
        <p className="font-semibold tracking-[0.2em] text-amber-500 uppercase">
          Full-Stack Engineer
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight md:text-7xl">
          Halo, saya{" "}
          <span className="bg-linear-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Lendra Ilham
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg opacity-80">
          Saya membangun website modern, cepat, dan elegan
          dengan fokus pada pengalaman pengguna terbaik.
          Tertarik pada pengembangan web, IoT, dan automasi.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
          <button className="rounded-xl bg-linear-to-r from-amber-400 to-yellow-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
            Lihat Project
          </button>

          <button
            className="rounded-xl border px-8 py-3 transition hover:scale-105"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--card)",
            }}
          >
            Hubungi Saya
          </button>
        </div>
      </motion.div>

      {/* Kanan */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-1 justify-center"
      >
        <div className="rounded-full bg-linear-to-r from-amber-400 to-yellow-600 p-1 shadow-2xl">
          <div
            className="overflow-hidden rounded-full"
            style={{
              backgroundColor: "var(--card)",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={400}
              height={400}
              className="h-80 w-80 object-cover md:h-96 md:w-96"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
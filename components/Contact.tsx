"use client";

import { Mail, FolderGit2, Users} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <p className="font-semibold uppercase tracking-[0.2em] text-amber-500">
        Contact
      </p>

      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        Let's work together.
      </h2>

      <p className="mt-6 max-w-2xl opacity-80">
        Tertarik untuk berkolaborasi atau ingin berdiskusi
        mengenai pengembangan web, IoT, maupun automasi?
        Jangan ragu untuk menghubungi saya.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="mailto:lendrailham@gmail.com"
          className="flex items-center gap-3 rounded-2xl px-6 py-4"
          style={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          <Mail size={20} />
          Email
        </a>

        <a
          href="https://github.com/lendrailham-7"
          target="_blank"
          className="flex items-center gap-3 rounded-2xl px-6 py-4"
          style={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          <FolderGit2 size={20} />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/lendrailham"
          target="_blank"
          className="flex items-center gap-3 rounded-2xl px-6 py-4"
          style={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          <Users size={20} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
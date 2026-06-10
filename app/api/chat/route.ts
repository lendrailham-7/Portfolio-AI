import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Groq from "groq-sdk";

const SYSTEM_PROMPT = `
Kamu adalah chatbot untuk website portfolio Lendra Ilham.

Informasi:
- Nama: Lendra Ilham
- Role: Full-Stack Engineer
- Fokus: Web Development, IoT, Intelligent Automation
- Skill:
  • Next.js
  • React
  • TypeScript
  • Tailwind CSS
  • Node.js
  • ESP8266
  • ESP32
  • OpenAI API
  • Gemini API
  • Git & GitHub

Project:
- Portfolio Website
- WhatsApp AI Bot
- IoT Monitoring
- Arduino RC Car

Jawab dengan ramah, singkat, dan profesional.
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    /* GEMINI */
    try {
      const genAI = new GoogleGenerativeAI(
        process.env.GEMINI_API_KEY!
      );

      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      const result = await model.generateContent(
        `${SYSTEM_PROMPT}\n\nUser: ${message}`
      );

      return NextResponse.json({
        reply: result.response.text(),
      });
    } catch (error) {
      console.log("Gemini gagal");
    }

    /* GROQ 1 */
    try {
      const groq = new Groq({
        apiKey: process.env.GROQ_API_KEY_1,
      });

      const chat = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",

        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          {
            role: "user",
            content: message,
          },
        ],
      });

      return NextResponse.json({
        reply: chat.choices[0].message.content,
      });
    } catch (error) {
      console.log("Groq 1 gagal");
    }

    /* GROQ 2 */
    try {
      const groq = new Groq({
        apiKey: process.env.GROQ_API_KEY_2,
      });

      const chat = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",

        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          {
            role: "user",
            content: message,
          },
        ],
      });

      return NextResponse.json({
        reply: chat.choices[0].message.content,
      });
    } catch (error) {
      console.log("Groq 2 gagal");
    }

    return NextResponse.json({
      reply:
        "Maaf, semua layanan AI sedang tidak tersedia.",
    });
  } catch {
    return NextResponse.json(
      {
        reply: "Terjadi kesalahan.",
      },
      {
        status: 500,
      }
    );
  }
}
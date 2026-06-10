"use client";

import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Halo! Saya asisten AI Lendra. Tanyakan apa saja tentang skill, project, atau pengalaman.",
    },
  ]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setInput("");

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Maaf, chatbot sedang mengalami gangguan.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Tombol Floating */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-amber-500 p-4 text-white shadow-2xl transition hover:scale-110"
      >
        {open ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-3xl border shadow-2xl"
          style={{
            backgroundColor: "var(--card)",
            borderColor: "var(--border)",
          }}
        >
          {/* Header */}
          <div className="bg-amber-500 p-4 text-white">
            <h2 className="font-bold">
              AI Assistant
            </h2>

            <p className="text-sm opacity-90">
              Tanya tentang Lendra
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "ml-auto bg-amber-500 text-white"
                    : ""
                }`}
                style={
                  message.role === "assistant"
                    ? {
                        backgroundColor: "var(--bg)",
                      }
                    : {}
                }
              >
                {message.content}
              </div>
            ))}

            {loading && (
              <p className="text-sm opacity-70">
                AI sedang mengetik...
              </p>
            )}
          </div>

          {/* Input */}
          <div
            className="flex gap-2 border-t p-4"
            style={{
              borderColor: "var(--border)",
            }}
          >
            <input
              type="text"
              placeholder="Tulis pertanyaan..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              className="flex-1 rounded-xl border px-4 py-2 outline-none"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg)",
              }}
            />

            <button
              onClick={sendMessage}
              className="rounded-xl bg-amber-500 px-4 text-white"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
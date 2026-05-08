"use client";

import { FormEvent, useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { ClientShell } from "@/components/client-shell";
import { useOnboardingStore } from "@/store/onboarding-store";

type Message = {
  role: "user" | "oracle";
  content: string;
  citations?: Array<{ title: string; url: string }>;
};

const suggestedQuestions = [
  "How do cohorts work?",
  "How do members earn?",
  "What kinds of projects exist?",
  "Can beginners contribute?",
  "What skills are most needed?"
];

export default function OraclePage() {
  const selectedRole = useOnboardingStore((state) => state.selectedRole);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "oracle",
      content:
        "The archive stirs. Ask plainly, and I will answer plainly. The best paths through Raid Guild are discovered by asking what you can help move forward."
    }
  ]);

  async function askOracle(message: string) {
    const trimmed = message.trim();
    if (!trimmed || loading) return;

    setInput("");
    setLoading(true);
    setMessages((current) => [...current, { role: "user", content: trimmed }]);

    const response = await fetch("/api/mock/oracle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: trimmed, selectedRole })
    });
    const data = (await response.json()) as Message;

    setMessages((current) => [...current, { role: "oracle", content: data.content, citations: data.citations }]);
    setLoading(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void askOracle(input);
  }

  return (
    <ClientShell room="oracle" title="Consult the Oracle" eyebrow="Room 2" backHref="/hub">
      <section className="oracle-layout">
        <div className="oracle-intro">
          <Sparkles size={30} />
          <h2>The handbook speaks through a prototype mask.</h2>
          <p>Responses are mocked for now, but the chamber keeps the same boundary a real retrieval agent will use later.</p>
        </div>

        <div className="suggested-questions">
          {suggestedQuestions.map((question) => (
            <button key={question} type="button" onClick={() => askOracle(question)}>
              {question}
            </button>
          ))}
        </div>

        <div className="chat-window">
          {messages.map((message, index) => (
            <article className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>
              <p>{message.content}</p>
              {message.citations?.length ? (
                <div className="citation-row">
                  {message.citations.map((citation) => (
                    <a href={citation.url} key={citation.url} target="_blank" rel="noreferrer">
                      {citation.title}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
          {loading ? <article className="chat-message oracle">The Oracle is reading the smoke...</article> : null}
        </div>

        <form className="chat-form" onSubmit={handleSubmit}>
          <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask the Oracle..." />
          <button className="primary-action" type="submit" disabled={loading}>
            <Send size={17} />
            Ask
          </button>
        </form>
      </section>
    </ClientShell>
  );
}

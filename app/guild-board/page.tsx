"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Pin } from "lucide-react";
import { ClientShell } from "@/components/client-shell";
import type { DailyBriefItem } from "@/types/onboarding";

export default function GuildBoardPage() {
  const [items, setItems] = useState<DailyBriefItem[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/mock/daily-brief")
      .then((response) => response.json())
      .then((data: { items: DailyBriefItem[] }) => setItems(data.items));
  }, []);

  return (
    <ClientShell room="guildBoard" title="Guild Bulletin Board" eyebrow="Room 3" backHref="/hub">
      <section className="board-wall">
        {items.map((item) => {
          const open = openId === item.id;
          return (
            <article className="notice" key={item.id}>
              <button type="button" onClick={() => setOpenId(open ? null : item.id)}>
                <span className="notice-pin">
                  <Pin size={15} />
                </span>
                <span>
                  <small>{item.type.replace("_", " ")}</small>
                  <strong>{item.title}</strong>
                  <em>{item.summary}</em>
                </span>
              </button>
              {open ? (
                <div className="notice-body">
                  <p>{item.body}</p>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer">
                      Follow thread <ExternalLink size={14} />
                    </a>
                  ) : null}
                </div>
              ) : null}
            </article>
          );
        })}
      </section>
    </ClientShell>
  );
}

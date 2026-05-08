"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarDays, ExternalLink, LockKeyhole } from "lucide-react";
import { ClientShell } from "@/components/client-shell";
import { useOnboardingStore } from "@/store/onboarding-store";
import type { CohortMeeting } from "@/types/onboarding";

export default function SchedulePage() {
  const scheduleUnlocked = useOnboardingStore((state) => state.scheduleUnlocked);
  const [discordInviteUrl, setDiscordInviteUrl] = useState("https://discord.gg/ZuuSmUbmf");
  const [meetings, setMeetings] = useState<CohortMeeting[]>([]);

  useEffect(() => {
    fetch("/api/mock/cohort-schedule")
      .then((response) => response.json())
      .then((data: { discordInviteUrl: string; meetings: CohortMeeting[] }) => {
        setDiscordInviteUrl(data.discordInviteUrl);
        setMeetings(data.meetings);
      });
  }, []);

  if (!scheduleUnlocked) {
    return (
      <ClientShell room="schedule" title="A Sealed Passage" eyebrow="Schedule" backHref="/hub">
        <section className="locked-panel">
          <LockKeyhole size={34} />
          <h2>The schedule door has not opened yet.</h2>
          <p>Complete Character Forge to reveal upcoming cohort meetings.</p>
          <Link className="primary-action" href="/character-forge">
            Enter the forge
          </Link>
        </section>
      </ClientShell>
    );
  }

  return (
    <ClientShell room="schedule" title="Cohort Schedule" eyebrow="Unlocked passage" backHref="/hub">
      <section className="schedule-intro">
        <CalendarDays size={30} />
        <div>
          <h2>The next gatherings are held in Discord.</h2>
          <p>Join the server before the first meeting and bring one useful question about your path through the guild.</p>
        </div>
        <a className="primary-action" href={discordInviteUrl} target="_blank" rel="noreferrer">
          Join Discord
          <ExternalLink size={16} />
        </a>
      </section>

      <section className="meeting-list">
        {meetings.map((meeting) => (
          <article className="meeting" key={meeting.id}>
            <div className="meeting-date">
              <strong>{meeting.date}</strong>
              <span>
                {meeting.time} {meeting.timezone}
              </span>
            </div>
            <div>
              <h2>{meeting.title}</h2>
              <p>{meeting.description}</p>
            </div>
            <a href={meeting.discordUrl} target="_blank" rel="noreferrer" aria-label={`Open Discord for ${meeting.title}`}>
              <ExternalLink size={18} />
            </a>
          </article>
        ))}
      </section>
    </ClientShell>
  );
}

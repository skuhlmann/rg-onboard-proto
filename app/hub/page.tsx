"use client";

import { useEffect } from "react";
import { BookOpenText, CalendarDays, Flame, ScrollText } from "lucide-react";
import { ClientShell } from "@/components/client-shell";
import { HubDoor } from "@/components/hub-door";
import { useOnboardingStore } from "@/store/onboarding-store";

export default function HubPage() {
  const scheduleUnlocked = useOnboardingStore(
    (state) => state.scheduleUnlocked,
  );
  const completedForge = useOnboardingStore(
    (state) => state.completedRooms.forge,
  );
  const visitRoom = useOnboardingStore((state) => state.visitRoom);

  useEffect(() => {
    visitRoom("hub");
  }, [visitRoom]);

  return (
    <ClientShell room="hub" spacious>
      <section className="hub-hero">
        <p className="micro-label">Central chamber</p>
        <h1>Choose a door. The guild reveals itself by motion.</h1>
      </section>

      <section className="door-grid" aria-label="Onboarding rooms">
        <HubDoor
          href="/character-forge"
          title="Forge Your Character"
          description={
            completedForge
              ? "Identity formed. Return anytime."
              : "Choose your role, name, and motivations."
          }
          Icon={Flame}
        />
        <HubDoor
          href="/oracle"
          title="Consult the Oracle"
          description="Ask about guild systems and paths."
          Icon={BookOpenText}
        />
        <HubDoor
          href="/guild-board"
          title="Read the Guild Board"
          description="Scan mocked notices from active raids."
          Icon={ScrollText}
        />
        <HubDoor
          href="/schedule"
          title="Enter the Cohort Schedule"
          description="Upcoming meetings and the Discord threshold."
          Icon={CalendarDays}
          locked={!scheduleUnlocked}
          revealed={scheduleUnlocked}
        />
      </section>
    </ClientShell>
  );
}

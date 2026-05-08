"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarDays, CheckCircle2, Heart, LockKeyhole, Sparkles, X } from "lucide-react";
import { useOnboardingStore } from "@/store/onboarding-store";
import { cx } from "@/lib/utils";

export function PlayerCard() {
  const [open, setOpen] = useState(false);
  const email = useOnboardingStore((state) => state.email);
  const selectedRole = useOnboardingStore((state) => state.selectedRole);
  const characterName = useOnboardingStore((state) => state.characterName);
  const motivations = useOnboardingStore((state) => state.motivations);
  const completedForge = useOnboardingStore((state) => state.completedRooms.forge);
  const scheduleUnlocked = useOnboardingStore((state) => state.scheduleUnlocked);

  const forgeSteps = [
    Boolean(selectedRole),
    Boolean(characterName?.trim()),
    motivations.length > 0
  ];
  const forgeProgress = forgeSteps.filter(Boolean).length;
  const displayName = characterName || "Unnamed Initiate";
  const displayClass = selectedRole?.characterClass || "Class undiscovered";
  const displayRole = selectedRole?.guildRole || "Choose your role in the forge";

  return (
    <div className="player-card-root">
      <button
        className="player-control"
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Open player card"
      >
        <span className="player-control-avatar">
          {selectedRole ? <img src={selectedRole.icon} alt="" /> : <span>?</span>}
        </span>
        <span className="player-control-copy">
          <strong>{displayName}</strong>
          <span className="heart-row compact" aria-label={`${forgeProgress} of 3 forge steps complete`}>
            {forgeSteps.map((filled, index) => (
              <Heart
                className={cx("heart-icon", filled && "filled")}
                fill={filled ? "currentColor" : "none"}
                key={`heart-${index}`}
                size={14}
              />
            ))}
          </span>
        </span>
      </button>

      {open ? (
        <div className="player-card-layer" role="dialog" aria-modal="true" aria-label="Player identity">
          <button className="player-card-scrim" type="button" onClick={() => setOpen(false)} aria-label="Close player card" />
          <section className="player-card">
            <div className="player-card-header">
              <div>
                <p className="micro-label">Traveler</p>
                <h2>{displayName}</h2>
              </div>
              <button className="icon-button" type="button" onClick={() => setOpen(false)} aria-label="Close player card">
                <X size={17} />
              </button>
            </div>

            <div className="identity-row">
              {selectedRole ? <img src={selectedRole.icon} alt="" /> : <div className="empty-avatar">?</div>}
              <div>
                <strong>{displayClass}</strong>
                <span>{displayRole}</span>
              </div>
            </div>

            <div className="progress-stack">
              <div>
                <span>Character Forge</span>
                <strong>{completedForge ? "Complete" : `${forgeProgress}/3`}</strong>
              </div>
              <div className="heart-row large" aria-label={`${forgeProgress} of 3 forge steps complete`}>
                {forgeSteps.map((filled, index) => (
                  <Heart
                    className={cx("heart-icon", filled && "filled")}
                    fill={filled ? "currentColor" : "none"}
                    key={`large-heart-${index}`}
                    size={25}
                  />
                ))}
              </div>
              <div className="progress-track">
                <span style={{ width: `${(forgeProgress / 3) * 100}%` }} />
              </div>
            </div>

            <div className="status-list">
              <span className={completedForge ? "status-done" : ""}>
                <CheckCircle2 size={15} />
                Identity formed
              </span>
              <span className={scheduleUnlocked ? "status-done" : ""}>
                {scheduleUnlocked ? <CalendarDays size={15} /> : <LockKeyhole size={15} />}
                Schedule door {scheduleUnlocked ? "open" : "sealed"}
              </span>
            </div>

            {email ? <p className="session-note">Entered as {email}</p> : <p className="session-note">Demo session</p>}

            {scheduleUnlocked ? (
              <Link className="primary-action full" href="/schedule" onClick={() => setOpen(false)}>
                View cohort meetings
              </Link>
            ) : (
              <Link className="secondary-action full" href="/character-forge" onClick={() => setOpen(false)}>
                Complete the forge
              </Link>
            )}
          </section>
        </div>
      ) : null}
    </div>
  );
}

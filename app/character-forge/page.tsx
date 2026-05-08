"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Check, ChevronLeft, ChevronRight, Dices, Flame } from "lucide-react";
import { ClientShell } from "@/components/client-shell";
import { guildRoles, motivationTags, namePrefixes, nameSuffixes } from "@/data/roles";
import { cx } from "@/lib/utils";
import { selectCanCompleteForge, useOnboardingStore } from "@/store/onboarding-store";

export default function CharacterForgePage() {
  const selectedRole = useOnboardingStore((state) => state.selectedRole);
  const characterName = useOnboardingStore((state) => state.characterName);
  const motivations = useOnboardingStore((state) => state.motivations);
  const motivationDetails = useOnboardingStore((state) => state.motivationDetails);
  const completedForge = useOnboardingStore((state) => state.completedRooms.forge);
  const selectRole = useOnboardingStore((state) => state.selectRole);
  const setCharacterName = useOnboardingStore((state) => state.setCharacterName);
  const toggleMotivation = useOnboardingStore((state) => state.toggleMotivation);
  const setMotivationDetails = useOnboardingStore((state) => state.setMotivationDetails);
  const completeForge = useOnboardingStore((state) => state.completeForge);
  const canComplete = useOnboardingStore(selectCanCompleteForge);
  const selectedRoleIndex = Math.max(
    guildRoles.findIndex((role) => role.id === selectedRole?.id),
    0
  );
  const [visibleRoleIndex, setVisibleRoleIndex] = useState(selectedRoleIndex);
  const activeRole = guildRoles[visibleRoleIndex];
  const isFirstRole = visibleRoleIndex === 0;
  const isLastRole = visibleRoleIndex === guildRoles.length - 1;

  useEffect(() => {
    setVisibleRoleIndex(selectedRoleIndex);
  }, [selectedRoleIndex]);

  const moveRole = (direction: -1 | 1) => {
    setVisibleRoleIndex((currentIndex) => {
      const nextIndex = currentIndex + direction;
      return Math.min(Math.max(nextIndex, 0), guildRoles.length - 1);
    });
  };

  const generatedName = useMemo(() => {
    const roleSeed = selectedRole?.id.length || 3;
    return `${namePrefixes[roleSeed % namePrefixes.length]}${nameSuffixes[(roleSeed + motivations.length) % nameSuffixes.length]}`;
  }, [motivations.length, selectedRole?.id]);

  return (
    <ClientShell room="forge" title="Forge Your Character" eyebrow="Room 1" backHref="/hub">
      <div className="flow-stack">
        <section className="forge-section">
          <div className="section-heading">
            <p className="micro-label">Choose your class</p>
            <h2>Every guild path starts as a shape of attention.</h2>
          </div>
          <div className="role-carousel" aria-label="Guild role selector">
            <button
              className="role-carousel-control"
              type="button"
              onClick={() => moveRole(-1)}
              disabled={isFirstRole}
              aria-label="Previous guild role"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className={cx("role-card", selectedRole?.id === activeRole.id && "selected")}
              type="button"
              onClick={() => selectRole(activeRole)}
            >
              <span className="role-check">{selectedRole?.id === activeRole.id ? <Check size={16} /> : null}</span>
              <img src={activeRole.icon} alt="" />
              <strong>{activeRole.characterClass}</strong>
              <span>{activeRole.guildRole}</span>
              <p>{activeRole.flavor}</p>
              <small>
                {visibleRoleIndex + 1} / {guildRoles.length}
              </small>
            </button>
            <button
              className="role-carousel-control"
              type="button"
              onClick={() => moveRole(1)}
              disabled={isLastRole}
              aria-label="Next guild role"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>

        <section className="forge-section two-column">
          <div>
            <p className="micro-label">Name ritual</p>
            <h2>Mark the card with a name you would enjoy seeing in the halls.</h2>
          </div>
          <div className="name-panel">
            <label htmlFor="character-name">Character name</label>
            <div className="name-row">
              <input
                id="character-name"
                value={characterName || ""}
                onChange={(event) => setCharacterName(event.target.value)}
                placeholder="Runeweaver"
              />
              <button className="icon-button large" type="button" onClick={() => setCharacterName(generatedName)}>
                <Dices size={18} />
              </button>
            </div>
            <p>Suggestion: {generatedName}</p>
          </div>
        </section>

        <section className="forge-section">
          <div className="section-heading">
            <p className="micro-label">Motivation ritual</p>
            <h2>What brought you to the guild halls?</h2>
          </div>
          <div className="tag-grid">
            {motivationTags.map((tag) => (
              <button
                className={cx("motivation-tag", motivations.includes(tag) && "selected")}
                key={tag}
                type="button"
                onClick={() => toggleMotivation(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <textarea
            value={motivationDetails || ""}
            onChange={(event) => setMotivationDetails(event.target.value)}
            placeholder="Optional: tell the guild what kind of work feels alive to you right now."
          />
        </section>

        <section className="completion-panel">
          <div>
            <p className="micro-label">Forge status</p>
            <h2>{completedForge ? "The schedule passage is open." : "Complete the ritual to reveal the schedule door."}</h2>
          </div>
          <div className="completion-actions">
            <button className="primary-action" type="button" disabled={!canComplete} onClick={completeForge}>
              <Flame size={17} />
              Complete Character Forge
            </button>
            {completedForge ? (
              <Link className="secondary-action" href="/schedule">
                Enter schedule
              </Link>
            ) : null}
          </div>
        </section>
      </div>
    </ClientShell>
  );
}

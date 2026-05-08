"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { useOnboardingStore } from "@/store/onboarding-store";
import { cx } from "@/lib/utils";
import { PlayerCard } from "@/components/player-card";

type ClientShellProps = {
  children: React.ReactNode;
  room: "hub" | "forge" | "oracle" | "guildBoard" | "schedule";
  title?: string;
  eyebrow?: string;
  backHref?: string;
  spacious?: boolean;
};

export function ClientShell({
  children,
  room,
  title,
  eyebrow,
  backHref,
  spacious,
}: ClientShellProps) {
  const visitRoom = useOnboardingStore((state) => state.visitRoom);
  const resetPrototype = useOnboardingStore((state) => state.resetPrototype);

  useEffect(() => {
    visitRoom(room);
  }, [room, visitRoom]);

  return (
    <main className={cx("app-frame", `room-${room}`)}>
      <div className="scene-backdrop" aria-hidden="true" />
      <div className="ambient-layer" aria-hidden="true">
        <div className="torch torch-left" />
        <div className="torch torch-right" />
        <div className="mist mist-one" />
        <div className="mist mist-two" />
        <div className="glyph-ring" />
      </div>
      <div className="player-silhouette" aria-hidden="true">
        <img src="/assets/art/cloaked-figure.png" alt="" />
      </div>

      <header className="topbar">
        <div className="topbar-left">
          {backHref ? (
            <Link
              className="icon-button"
              href={backHref}
              aria-label="Return to hub"
            >
              <ArrowLeft size={18} />
            </Link>
          ) : null}
          <Link className="brand-mark" href="/hub">
            <span className="brand-sigil">
              <img src="/assets/icon/symbol-m500.svg" alt="" />
            </span>
            <span>
              <span className="brand-title">The Guild Depths</span>
              <span className="brand-subtitle">Cohort onboarding</span>
            </span>
          </Link>
        </div>
        <div className="topbar-actions">
          <PlayerCard />
          <button
            className="icon-button"
            type="button"
            onClick={resetPrototype}
            aria-label="Reset prototype"
          >
            <RotateCcw size={17} />
          </button>
        </div>
      </header>

      <div className={cx("page-grid", spacious && "page-grid-spacious")}>
        <section className="content-stage">
          {eyebrow || title ? (
            <div className="room-heading">
              {eyebrow ? <p>{eyebrow}</p> : null}
              {title ? <h1>{title}</h1> : null}
            </div>
          ) : null}
          <AnimatePresence mode="wait">
            <motion.div
              key={room}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </main>
  );
}

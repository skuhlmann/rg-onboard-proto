"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useOnboardingStore } from "@/store/onboarding-store";

export function OnboardingEntry() {
  const searchParams = useSearchParams();
  const initializeFromParams = useOnboardingStore((state) => state.initializeFromParams);

  useEffect(() => {
    initializeFromParams({
      email: searchParams.get("email") || undefined,
      session: searchParams.get("session") || undefined
    });
  }, [initializeFromParams, searchParams]);

  return (
    <main className="arrival-screen room-hub">
      <div className="scene-backdrop" aria-hidden="true" />
      <div className="ambient-layer" aria-hidden="true">
        <div className="torch torch-left" />
        <div className="torch torch-right" />
        <div className="mist mist-one" />
      </div>
      <div className="player-silhouette" aria-hidden="true">
        <img src="/assets/art/cloaked-figure.png" alt="" />
      </div>
      <motion.section
        className="arrival-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="micro-label">Another traveler enters the depths...</p>
        <h1>The Guild Depths</h1>
        <p>Raid Guild is seeking contributors. Step into the halls, form your identity, and choose where to explore.</p>
        <Link className="primary-action arrival-action" href="/hub">
          Enter the halls
        </Link>
      </motion.section>
    </main>
  );
}

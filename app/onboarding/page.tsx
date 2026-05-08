import { Suspense } from "react";
import { OnboardingEntry } from "@/components/onboarding-entry";

export default function OnboardingPage() {
  return (
    <Suspense fallback={<OnboardingFallback />}>
      <OnboardingEntry />
    </Suspense>
  );
}

function OnboardingFallback() {
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
      <section className="arrival-copy">
        <p className="micro-label">Opening the threshold...</p>
        <h1>The Guild Depths</h1>
      </section>
    </main>
  );
}

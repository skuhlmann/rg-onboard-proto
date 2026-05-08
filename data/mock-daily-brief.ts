import type { DailyBriefItem } from "@/types/onboarding";

export const mockDailyBrief: DailyBriefItem[] = [
  {
    id: "brief-1",
    type: "project_update",
    title: "New product raid forming",
    summary: "A client discovery effort is gathering design, PM, and frontend contributors.",
    body: "The first pass needs sharp product framing, a lightweight prototype, and a path toward technical scoping.",
    link: "https://www.raidguild.org/"
  },
  {
    id: "brief-2",
    type: "opportunity",
    title: "Smart contract review bench",
    summary: "The guild is collecting available protocol engineers for upcoming audit support.",
    body: "Strong candidates can read specs, reason about edge cases, and explain risk without theater.",
    link: "https://handbook.raidguild.org/"
  },
  {
    id: "brief-3",
    type: "shoutout",
    title: "Design systems cleanup shipped",
    summary: "A small crew tightened components, tokens, and page rhythm for an active client dashboard.",
    body: "Quiet polish compounds. The latest release reduced visual drift and made future feature work faster."
  },
  {
    id: "brief-4",
    type: "announcement",
    title: "Cohort orientation approaches",
    summary: "New travelers should prepare a short intro, a role preference, and one question for the guild.",
    body: "The meeting will happen in Discord. Come curious, concise, and ready to explore."
  }
];

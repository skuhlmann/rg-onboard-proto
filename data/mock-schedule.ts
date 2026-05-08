import type { CohortMeeting } from "@/types/onboarding";

export const discordInviteUrl = "https://discord.gg/ZuuSmUbmf";

export const mockCohortMeetings: CohortMeeting[] = [
  {
    id: "cohort-1",
    title: "Cohort Orientation",
    date: "May 14, 2026",
    time: "11:00 AM",
    timezone: "MT",
    description: "Meet the cohort guides, learn how the guild works, and choose your first path through the halls.",
    discordUrl: discordInviteUrl
  },
  {
    id: "cohort-2",
    title: "Role Alignment Circle",
    date: "May 18, 2026",
    time: "1:00 PM",
    timezone: "MT",
    description: "Compare role interests with current guild needs and find where your skills can land first.",
    discordUrl: discordInviteUrl
  },
  {
    id: "cohort-3",
    title: "First Quest Briefing",
    date: "May 21, 2026",
    time: "10:30 AM",
    timezone: "MT",
    description: "Review sample bounties, team rituals, and what a strong first contribution looks like.",
    discordUrl: discordInviteUrl
  }
];

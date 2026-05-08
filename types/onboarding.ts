export type RoomId = "hub" | "forge" | "oracle" | "guildBoard" | "schedule";

export type GuildRole = {
  id: string;
  characterClass: string;
  guildRole: string;
  icon: string;
  flavor: string;
  responsibilities: string[];
  idealFor: string;
};

export type PrototypeOnboardingState = {
  email?: string;
  sessionParam?: string;
  selectedRole?: GuildRole;
  characterName?: string;
  motivations: string[];
  motivationDetails?: string;
  visitedRooms: Record<RoomId, boolean>;
  completedRooms: {
    forge: boolean;
  };
  scheduleUnlocked: boolean;
};

export type DailyBriefItem = {
  id: string;
  type: "project_update" | "announcement" | "opportunity" | "shoutout" | "ecosystem_news";
  title: string;
  summary: string;
  body?: string;
  link?: string;
};

export type CohortMeeting = {
  id: string;
  title: string;
  date: string;
  time: string;
  timezone: string;
  description: string;
  discordUrl: string;
};

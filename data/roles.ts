import type { GuildRole } from "@/types/onboarding";

const iconBase = "/assets/icon/8bit";

export const guildRoles: GuildRole[] = [
  {
    id: "alchemist",
    characterClass: "Alchemist",
    guildRole: "DAO Consultant",
    icon: `${iconBase}/alchemist.svg`,
    flavor: "Turns hazy organizational intent into usable systems and rituals.",
    responsibilities: ["DAO design", "governance facilitation", "operating model research"],
    idealFor: "Systems thinkers who like translating chaos into shared momentum."
  },
  {
    id: "archer",
    characterClass: "Archer",
    guildRole: "Visual Design",
    icon: `${iconBase}/archer.svg`,
    flavor: "Finds the visual line of truth and lands it with precision.",
    responsibilities: ["visual identity", "interface direction", "brand systems"],
    idealFor: "Designers with strong taste, restraint, and a sharp eye."
  },
  {
    id: "cleric",
    characterClass: "Cleric",
    guildRole: "Account Manager",
    icon: `${iconBase}/cleric.svg`,
    flavor: "Keeps clients, contributors, and project energy in healthy alignment.",
    responsibilities: ["client communication", "scope stewardship", "relationship care"],
    idealFor: "Calm operators who can hold context and earn trust."
  },
  {
    id: "druid",
    characterClass: "Druid",
    guildRole: "Data Science",
    icon: `${iconBase}/druid.svg`,
    flavor: "Reads patterns in the wild and turns signals into decisions.",
    responsibilities: ["analytics", "modeling", "insight synthesis"],
    idealFor: "Curious analysts who can make complexity legible."
  },
  {
    id: "dwarf",
    characterClass: "AngryDwarf",
    guildRole: "Treasury",
    icon: `${iconBase}/dwarf.svg`,
    flavor: "Guards the vault, sharpens the books, and keeps resources grounded.",
    responsibilities: ["treasury operations", "budget tracking", "payment coordination"],
    idealFor: "Detail-minded stewards with a practical sense of risk."
  },
  {
    id: "healer",
    characterClass: "Healer",
    guildRole: "Internal Ops",
    icon: `${iconBase}/healer.svg`,
    flavor: "Maintains the guild's connective tissue so teams can move clearly.",
    responsibilities: ["process design", "internal coordination", "documentation"],
    idealFor: "Organizers who notice friction before everyone else does."
  },
  {
    id: "hunter",
    characterClass: "Hunter",
    guildRole: "BizDev",
    icon: `${iconBase}/hunter.svg`,
    flavor: "Tracks promising opportunities and brings the right quests home.",
    responsibilities: ["lead discovery", "partnerships", "deal shaping"],
    idealFor: "Networkers who can sense fit and follow through."
  },
  {
    id: "monk",
    characterClass: "Monk",
    guildRole: "PM",
    icon: `${iconBase}/monk.svg`,
    flavor: "Turns ambiguity into cadence, priorities, and forward motion.",
    responsibilities: ["roadmapping", "delivery coordination", "team rituals"],
    idealFor: "Pragmatic planners who keep teams honest without killing the spark."
  },
  {
    id: "necromancer",
    characterClass: "Necromancer",
    guildRole: "DevOps",
    icon: `${iconBase}/necromancer.svg`,
    flavor: "Raises infrastructure, watches the pipes, and banishes deployment dread.",
    responsibilities: ["deployment", "observability", "automation"],
    idealFor: "Engineers who enjoy reliability, tooling, and clean release paths."
  },
  {
    id: "paladin",
    characterClass: "Paladin",
    guildRole: "Backend Dev",
    icon: `${iconBase}/paladin.svg`,
    flavor: "Builds durable systems that hold under pressure.",
    responsibilities: ["API design", "databases", "service architecture"],
    idealFor: "Engineers who like clean contracts and battle-tested foundations."
  },
  {
    id: "ranger",
    characterClass: "Ranger",
    guildRole: "UX Design",
    icon: `${iconBase}/ranger.svg`,
    flavor: "Scouts user paths and marks the route through product uncertainty.",
    responsibilities: ["research", "flows", "interaction design"],
    idealFor: "Designers who care about behavior, clarity, and product fit."
  },
  {
    id: "rogue",
    characterClass: "Rogue",
    guildRole: "Legal",
    icon: `${iconBase}/rogue.svg`,
    flavor: "Finds the hidden traps in agreements before anyone steps on them.",
    responsibilities: ["contract review", "risk analysis", "entity guidance"],
    idealFor: "Precise readers who can make legal nuance usable."
  },
  {
    id: "scribe",
    characterClass: "Scribe",
    guildRole: "Content Creator",
    icon: `${iconBase}/scribe.svg`,
    flavor: "Captures the lore, sharpens the message, and carries the signal outward.",
    responsibilities: ["writing", "editorial systems", "campaign content"],
    idealFor: "Story-minded communicators with a strong sense of audience."
  },
  {
    id: "tavernkeeper",
    characterClass: "Tavern Keeper",
    guildRole: "Community",
    icon: `${iconBase}/tavernkeeper.svg`,
    flavor: "Makes the room warm, useful, and worth returning to.",
    responsibilities: ["community rituals", "member support", "event coordination"],
    idealFor: "Hosts, facilitators, and high-context community builders."
  },
  {
    id: "warrior",
    characterClass: "Warrior",
    guildRole: "Frontend Dev",
    icon: `${iconBase}/warrior.svg`,
    flavor: "Brings interfaces to life with speed, craft, and practical polish.",
    responsibilities: ["React development", "component systems", "frontend performance"],
    idealFor: "Builders who care about both code quality and feel."
  },
  {
    id: "wizard",
    characterClass: "Wizard",
    guildRole: "Smart Contracts",
    icon: `${iconBase}/wizard.svg`,
    flavor: "Writes spells that become protocols, vaults, and trusted execution.",
    responsibilities: ["Solidity", "contract architecture", "security review"],
    idealFor: "Protocol-minded engineers who respect sharp edges."
  }
];

export const motivationTags = [
  "Find collaborators",
  "Learn new skills",
  "Earn through meaningful work",
  "Build ambitious projects",
  "Explore frontier tech",
  "Contribute to web3 ecosystems"
];

export const namePrefixes = ["Ash", "Rune", "Void", "Signal", "Iron", "Moon", "Cipher", "Ember"];
export const nameSuffixes = ["wright", "caster", "mancer", "keeper", "runner", "scribe", "forger", "weaver"];

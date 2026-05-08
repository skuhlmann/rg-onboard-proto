# Raid Guild Cohort Onboarding Experience

## Product Specification (Clickable Prototype)

---

# Project Overview

## Working Title

**The Guild Depths**

## Goal

Transform the current post-signup onboarding flow into an immersive, RPG-inspired onboarding experience that:

- increases excitement and engagement
- communicates Raid Guild culture
- gathers richer applicant information
- introduces guild systems naturally
- creates a memorable first impression

The full product experience begins **after** the existing email capture flow on:
[Raid Guild Join Page](https://www.raidguild.org/join?utm_source=chatgpt.com)

For this prototype, the app should behave as if that handoff has already happened. The prototype will accept loose URL params such as:

```txt
/onboarding?email=traveler@example.com&session=demo-123
```

The email and session values will be read from the URL and persisted in `localStorage`. Supabase persistence and production session creation are intentionally deferred.

---

# Product Vision

The onboarding experience should feel like:

- entering a mysterious guild headquarters
- beginning a role-playing game
- exploring a living organization

The experience should NOT feel like:

- filling out a corporate application
- completing a static form wizard
- a parody or overly comedic fantasy game

Tone should balance:

- mystery
- professionalism
- internet-native culture
- dark fantasy inspiration
- experimentation

---

# Core Product Principles

## 1. Exploration Over Forms

Users should feel like they are exploring spaces, not completing fields.

Information gathering should happen naturally through interaction.

---

## 2. Identity Formation

Users should begin forming an identity within the guild immediately.

The onboarding flow should encourage:

- self-expression
- role alignment
- narrative participation

---

## 3. Progressive Discovery

The guild should reveal itself gradually.

Users should uncover:

- culture
- opportunities
- active work
- knowledge systems

through interaction rather than static documentation.

---

## 4. Extensible Architecture

The onboarding hub should support future expansion:

- quests
- bounties
- profiles
- attestations
- team formation
- mini-games
- onboarding progression systems

without needing major redesign.

---

# Prototype Scope

## Included in Prototype

### Central Hub Scene

- immersive landing environment
- navigation to onboarding rooms
- progression state
- player identity card

### Character Creation Experience

- role selection
- character naming
- motivations collection

### Oracle Chamber

- mocked handbook AI chat
- suggested questions
- conversational onboarding

### Guild Bulletin Board

- display daily brief content
- show guild activity
- reinforce that the guild is active/alive

### Cohort Schedule Door

- unlocks after Character Forge is complete
- shows a list of upcoming cohort meetings
- includes the Discord invite link where meetings are held

---

## Excluded From Prototype

- multiplayer/social presence
- gamified stats system
- inventory/items
- reputation systems
- hidden rooms
- achievements
- audio system
- account authentication beyond onboarding session
- advanced animations/game engine
- NFT integrations
- cohort progression tracking
- Supabase persistence
- production AI retrieval
- production daily brief feed
- production calendar integration

---

# User Flow

## Step 1 — Prototype URL Handoff

User opens the prototype with onboarding context attached as URL params.

Example:

```txt
/onboarding?email=traveler@example.com&session=demo-123
```

Prototype behavior:

- reads `email` and `session` from the URL
- stores them in `localStorage`
- initializes or resumes local onboarding state
- redirects/continues to the hub

Production behavior to define later:

- existing join page creates a Supabase-backed onboarding session
- session is tied to the captured email
- user is redirected into the onboarding app with an opaque session token

---

# Step 2 — Arrival Scene

## Objective

Create excitement and establish tone immediately.

---

## Experience

User enters a dungeon-like guild chamber.

Narration appears:

> “Another traveler enters the depths…”

A short introductory sequence explains:

- this is Raid Guild
- the guild is seeking contributors
- the user may explore freely

---

## UI Elements

### Environment

- dark atmospheric chamber
- animated torchlight/glow
- subtle ambient motion
- minimal but immersive

### Navigation

Users can select destinations through:

- large dungeon doors
- map nodes
- hallway portals

---

## Available Destinations

### 1. Forge Your Character

(character creation)

### 2. Consult the Oracle

(handbook AI)

### 3. Read the Guild Board

(daily brief)

### 4. Enter the Cohort Schedule

(locked until Character Forge is complete)
---

# Hub Architecture

## Design Pattern

The app should use a **central explorable hub** rather than a linear onboarding wizard.

Users may:

- enter rooms in any order
- revisit rooms
- partially complete onboarding

For the prototype, completing Character Forge unlocks the Cohort Schedule door. Oracle and Guild Board remain available for exploration but are not required to unlock the schedule.

---

## Persistent UI

### Player Card

Visible globally.

Contains:

- chosen role/class
- character name
- onboarding completion progress
- schedule door lock/unlock state

---

# Feature Specification

# Room 1 — Forge Your Character

## Objective

Collect onboarding information while making users feel like they are creating a guild identity.

---

# Section 1 — Choose Your Role

## Purpose

Capture user skill alignment.

Based on:
[Raid Guild Roles & Skills Handbook](https://handbook.raidguild.org/docs/membership/skills-roles?utm_source=chatgpt.com)

---

## UX

Users browse through role cards.

Possible interaction models:

- swipe carousel
- horizontally scrolling cards
- fullscreen card selection

---

## Role Card Contents

Each role card contains:

- role artwork/icon
- role title
- short flavor description
- example responsibilities
- “ideal for” text

---

## Prototype Role Taxonomy

The prototype should use all 16 Raid Guild 8bit role icons from the brand iconography library:
[Raid Guild Iconography](https://www.brand.raidguild.org/iconography)

| Character Class | Guild Role |
| --- | --- |
| Alchemist | DAO Consultant |
| Archer | Visual Design |
| Cleric | Account Manager |
| Druid | Data Science |
| AngryDwarf | Treasury |
| Healer | Internal Ops |
| Hunter | BizDev |
| Monk | PM |
| Necromancer | DevOps |
| Paladin | Backend Dev |
| Ranger | UX Design |
| Rogue | Legal |
| Scribe | Content Creator |
| Tavern Keeper | Community |
| Warrior | Frontend Dev |
| Wizard | Smart Contracts |

Each role card should show the icon image, character class, guild role, short flavor description, example responsibilities, and "ideal for" text.

---

## Data Captured

```ts
selectedRole: {
  characterClass: string;
  guildRole: string;
};
```

---

# Section 2 — Character Name

## Objective

Help users form identity and emotional attachment.

---

## UX

Users may:

- type a name manually
- generate names
- reroll suggestions

---

## Optional Name Generation

For the prototype, name generation can use a local list or lightweight deterministic generator. Production AI name generation is deferred.

Inputs:

- selected role
- interests
- optional existing handle

Outputs:

- fantasy-inspired handles
- internet-native pseudonyms
- hybrid naming styles

---

## Data Captured

```ts
characterName: string;
```

---

# Section 3 — Motivation Ritual

## Objective

Capture meaningful onboarding intent.

---

## UX Style

Conversational.

Presented as dialogue from:

- guild master
- wizard
- narrator
- oracle

Questions appear sequentially.

---

## Example Questions

### Question 1

> “What brought you to the guild halls?”

### Question 2

> “What kind of work excites you most?”

### Question 3

> “What are you hoping to become here?”

---

## Input Pattern

Recommended:

1. selectable motivations
2. optional freeform elaboration

---

## Suggested Motivation Tags

Examples:

- Find collaborators
- Learn new skills
- Earn through meaningful work
- Build ambitious projects
- Explore frontier tech
- Contribute to web3 ecosystems

---

## Data Captured

```ts
motivations: string[]
motivationDetails: string
```

## Prototype Completion

Completing Character Forge requires:

- selecting one of the 16 roles
- entering or generating a character name
- selecting at least one motivation

When Character Forge is complete, the Cohort Schedule door is unveiled/unlocked in the hub.

---

# Room 2 — Consult the Oracle

## Objective

Allow users to learn about the guild conversationally.

---

# Core Functionality

Mocked handbook assistant experience inspired by:
[Raid Guild Handbook](https://handbook.raidguild.org/?utm_source=chatgpt.com)

---

## UX Theme

The user enters:

- archive
- library
- oracle chamber
- magical knowledge vault

---

## AI Persona

Tone:

- wise
- mysterious
- practical
- welcoming

Avoid:

- excessive roleplay
- cringe fantasy speech
- overly verbose responses

---

## Features

### Suggested Questions

Examples:

- “How do cohorts work?”
- “How do members earn?”
- “What kinds of projects exist?”
- “Can beginners contribute?”
- “What skills are most needed?”

---

## AI Responses

Responses should:

- answer clearly
- cite handbook sources when possible
- remain concise
- encourage further exploration

---

## Prototype API Requirements

For the prototype, the Oracle should call a mocked local API route. The implementation should preserve an API boundary so a real handbook retrieval agent can replace the mock later.

Required:

- conversational mock API endpoint
- suggested questions
- concise mocked responses
- mocked citations to handbook pages when useful

---

# Room 3 — Guild Bulletin Board

## Objective

Demonstrate active guild momentum and ecosystem activity.

---

# UX Theme

A tavern-style notice board / mission wall.

---

## Displayed Content

For the prototype, daily brief data should come from a mocked local API route.

Mocked entries may include:

- project updates
- active initiatives
- announcements
- ecosystem news
- opportunities
- wins/shoutouts

---

## UX Presentation

Content should appear as:

- pinned notes
- parchment cards
- stacked notices
- mission postings

---

## Interaction

Users may:

- scroll entries
- expand entries
- click outbound links

---

# Room 4 — Cohort Schedule

## Objective

Give users a clear next step after forming their guild identity.

---

## Unlock Rule

The Cohort Schedule door is hidden or locked until Character Forge is complete.

Character Forge is complete when:

- a role is selected
- a character name is set
- at least one motivation is selected

---

## UX Theme

A newly revealed passage, war room, calendar altar, or council chamber.

---

## Displayed Content

The prototype should show a list of upcoming cohort meetings.

Each meeting should include:

- meeting title
- date
- time
- short description
- Discord invite link

---

## Prototype Data

Schedule data should come from a mocked local API route.

Production calendar integration is deferred.

---

# Visual Design Specification

# Art Direction

## Target Aesthetic

“Dark fantasy productivity software.”

Blend:

- fantasy RPG
- guild hall atmosphere
- modern SaaS polish
- subtle cyberpunk/magical tech

---

## Avoid

- parody fantasy
- pixel-art nostalgia overload
- cartoon UI
- meme-heavy presentation
- excessive clutter

---

# UI Inspiration

Influences:

- Diablo menus
- Darkest Dungeon
- Arcane interfaces
- MUD terminals
- Notion
- Linear
- fantasy codex systems

---

# Motion Design

## Recommended Effects

- fog/parallax
- torch flicker
- glowing glyphs
- hover illumination
- slow ambient particles
- cinematic transitions

---

## Keep Motion Subtle

The product should feel:

- immersive
- polished
- performant

NOT:

- game-engine heavy
- distracting
- visually noisy

---

## Fonts

Headline: Mazius Display
Body: EB Garamond
Mono: Ubuntu Mono

# Prototype Technical Specification

# Frontend

## Recommended Stack

- Next.js
- React
- Tailwind
- Framer Motion

---

# State Management

Use:

- Zustand
- `localStorage` persistence

The store should initialize from URL params on first entry and then persist all prototype onboarding state locally.

```ts
type PrototypeOnboardingState = {
  email?: string;
  sessionParam?: string;
  selectedRole?: {
    characterClass: string;
    guildRole: string;
  };
  characterName?: string;
  motivations: string[];
  motivationDetails?: string;
  visitedRooms: {
    hub: boolean;
    forge: boolean;
    oracle: boolean;
    guildBoard: boolean;
    schedule: boolean;
  };
  completedRooms: {
    forge: boolean;
  };
  scheduleUnlocked: boolean;
};
```

---

# Mock API Requirements

The prototype should use local Next.js API routes as mock service boundaries. These routes should return realistic data but should not require Supabase, external AI APIs, calendar APIs, or production authentication.

## Oracle Mock Endpoint

```ts
POST /api/mock/oracle
```

Request:

```ts
{
  message: string;
  selectedRole?: {
    characterClass: string;
    guildRole: string;
  };
}
```

Response:

```ts
{
  answer: string;
  citations: Array<{
    title: string;
    url: string;
  }>;
}
```

---

## Daily Brief Mock Endpoint

```ts
GET /api/mock/daily-brief
```

Response:

```ts
{
  items: Array<{
    id: string;
    type: "project_update" | "announcement" | "opportunity" | "shoutout" | "ecosystem_news";
    title: string;
    summary: string;
    body?: string;
    link?: string;
  }>;
}
```

---

## Schedule Mock Endpoint

```ts
GET /api/mock/cohort-schedule
```

Response:

```ts
{
  discordInviteUrl: string;
  meetings: Array<{
    id: string;
    title: string;
    date: string;
    time: string;
    timezone: string;
    description: string;
    discordUrl: string;
  }>;
}
```

---

# Suggested Application Structure

```txt
/app
  /onboarding
  /hub
  /character-forge
  /oracle
  /guild-board
  /schedule
  /api
    /mock
      /oracle
      /daily-brief
      /cohort-schedule
/components
  /ui
  /environment
  /cards
  /motion
  /player-card
  /rooms
/data
  roles.ts
  mock-daily-brief.ts
  mock-schedule.ts
/store
  onboarding-store.ts
/types
  onboarding.ts
```

---

# Prototype Success Signals

## Engagement

- users complete Character Forge
- users notice and enter the unlocked Schedule door
- users voluntarily explore Oracle or Guild Board
- average time in prototype feels intentional rather than confused

---

## Quality Signals

- richer motivation responses
- increased handbook interaction
- users understand the role/class mapping
- users understand the next cohort meeting path

---

## Emotional Signals

Qualitative observations:

- users share screenshots
- users discuss onboarding experience publicly
- users voluntarily explore multiple rooms

---

# Recommended Prototype Build Order

## Phase 1

Core architecture, app shell, `localStorage` store, URL param intake, and hub

## Phase 2

Character Forge with all 16 role cards, character naming, motivations, and schedule unlock

## Phase 3

Schedule door and cohort schedule page with mocked meeting data and Discord invite link

## Phase 4

Oracle chamber with mocked chat API and suggested questions

## Phase 5

Guild Bulletin Board with mocked daily brief API

## Phase 6

Visual polish, transitions, responsive QA, reduced-motion support, and prototype review

---

# Future Expansion Opportunities

Potential future additions:

- quests
- guild trials
- onboarding progression
- contribution tracking
- reputation
- attestation systems
- matchmaking/team assembly
- skill trees
- member profiles
- guild map expansion

These should inform architecture decisions but are not required for the clickable prototype.

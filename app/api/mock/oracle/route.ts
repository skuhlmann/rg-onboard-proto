import { NextResponse } from "next/server";

type OracleRequest = {
  message?: string;
  selectedRole?: {
    characterClass: string;
    guildRole: string;
  };
};

export async function POST(request: Request) {
  const body = (await request.json()) as OracleRequest;
  const message = body.message?.toLowerCase() || "";
  const role = body.selectedRole?.guildRole;

  let answer =
    "Raid Guild works best for contributors who can communicate clearly, take ownership of small quests, and grow trust through visible work. Start with the path that matches your strongest current craft, then let the guild widen from there.";

  if (message.includes("cohort")) {
    answer =
      "Cohorts are an entry path: a guided way to meet the guild, understand its rituals, and find where your craft could contribute. For this prototype, your next concrete step is the schedule door after Character Forge.";
  } else if (message.includes("earn") || message.includes("paid")) {
    answer =
      "Members earn by contributing to client raids, internal initiatives, and scoped opportunities. The practical advice is simple: be legible, be reliable, and make your skills easy to route toward useful work.";
  } else if (message.includes("project") || message.includes("work")) {
    answer =
      "Projects tend to blend product strategy, design, engineering, smart contracts, operations, and community work. The strongest contributors can do their craft while staying aware of the whole raid.";
  } else if (message.includes("beginner")) {
    answer =
      "Beginners can contribute when they are honest about their level and specific about what they can help with. Curiosity is welcome; hidden uncertainty is expensive.";
  } else if (message.includes("skill")) {
    answer =
      "The most needed skills shift with active raids, but clear writing, product sense, frontend craft, smart contract judgment, PM discipline, and community stewardship are almost always useful.";
  }

  if (role) {
    answer += ` Since you are exploring ${role}, look for chances to show that craft in a small, concrete way first.`;
  }

  return NextResponse.json({
    content: answer,
    citations: [
      {
        title: "Raid Guild Handbook",
        url: "https://handbook.raidguild.org/"
      }
    ]
  });
}

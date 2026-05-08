import { NextResponse } from "next/server";
import { discordInviteUrl, mockCohortMeetings } from "@/data/mock-schedule";

export async function GET() {
  return NextResponse.json({
    discordInviteUrl,
    meetings: mockCohortMeetings
  });
}

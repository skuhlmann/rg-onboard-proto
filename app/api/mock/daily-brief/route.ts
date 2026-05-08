import { NextResponse } from "next/server";
import { mockDailyBrief } from "@/data/mock-daily-brief";

export async function GET() {
  return NextResponse.json({ items: mockDailyBrief });
}

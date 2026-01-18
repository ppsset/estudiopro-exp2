import { NextResponse } from "next/server";
import { newsFeed } from "@/lib/mockData";

export async function GET() {
  return NextResponse.json({ items: newsFeed });
}

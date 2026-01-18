import { NextResponse } from "next/server";
import { projectSummaries } from "@/lib/mockData";

export async function GET() {
  return NextResponse.json({ items: projectSummaries });
}

export async function POST(request: Request) {
  const payload = await request.json();
  return NextResponse.json({ message: "Project created", payload }, { status: 201 });
}

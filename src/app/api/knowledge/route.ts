import { NextResponse } from "next/server";
import { knowledgeTopics } from "@/lib/mockData";

export async function GET() {
  return NextResponse.json({ items: knowledgeTopics });
}

export async function POST(request: Request) {
  const payload = await request.json();
  return NextResponse.json({ message: "Knowledge topic created", payload }, { status: 201 });
}

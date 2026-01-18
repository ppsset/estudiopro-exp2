import { NextResponse } from "next/server";
import { moduleRuns } from "@/lib/mockData";
import { logInfo } from "@/lib/logger";

export async function GET() {
  return NextResponse.json({ items: moduleRuns });
}

export async function POST(request: Request) {
  const payload = await request.json();
  logInfo("Module run saved", { module: payload?.module, calculatedAt: payload?.calculatedAt });
  return NextResponse.json({ message: "Module run saved", payload }, { status: 201 });
}

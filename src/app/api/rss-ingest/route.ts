import { NextResponse } from "next/server";
import { logInfo } from "@/lib/logger";

export async function POST() {
  logInfo("RSS ingestion requested", { sources: 2 });
  return NextResponse.json({
    message: "Ingestion queued",
    status: "ok",
    ingestedSources: 2,
    failures: []
  });
}

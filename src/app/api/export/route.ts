import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();
  return NextResponse.json({
    message: "Export scheduled",
    payload,
    format: "PDF"
  });
}

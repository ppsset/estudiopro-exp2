import { NextResponse } from "next/server";

const sources = [
  {
    id: "rss-1",
    name: "NFPA Journal",
    url: "https://www.nfpa.org/rss",
    standard: "NFPA",
    region: "North America",
    active: true
  },
  {
    id: "rss-2",
    name: "IEC Insights",
    url: "https://www.iec.ch/rss",
    standard: "IEC",
    region: "EMEA",
    active: true
  }
];

export async function GET() {
  return NextResponse.json({ items: sources });
}

export async function POST(request: Request) {
  const payload = await request.json();
  return NextResponse.json({ message: "RSS source saved", payload }, { status: 201 });
}

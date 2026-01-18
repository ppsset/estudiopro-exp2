import { NextResponse } from "next/server";

const bookmarks = [
  {
    id: "bookmark-1",
    newsId: "news-1",
    savedAt: "2024-06-21T09:00:00Z"
  }
];

export async function GET() {
  return NextResponse.json({ items: bookmarks });
}

export async function POST(request: Request) {
  const payload = await request.json();
  return NextResponse.json({ message: "Bookmark saved", payload }, { status: 201 });
}

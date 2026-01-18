import Link from "next/link";
import { newsFeed } from "@/lib/mockData";

interface NewsDetailProps {
  params: { id: string };
}

export default function NewsDetailPage({ params }: NewsDetailProps) {
  const article = newsFeed.find((item) => item.id === params.id) ?? newsFeed[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <Link href="/" className="text-sm font-semibold text-brand-600">
          ← Back to News Feed
        </Link>
        <h2 className="text-3xl font-bold text-slate-900">{article.title}</h2>
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>{article.source}</span>
          <span>•</span>
          <span>Published {article.time}</span>
          <span>•</span>
          <span>Standard: {article.standard}</span>
        </div>
      </div>
      <div className="card p-6">
        <p className="text-sm text-slate-500">Summary</p>
        <p className="mt-2 text-base text-slate-700">{article.summary}</p>
        <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50 px-4 py-3 text-sm text-brand-700">
          Reference notes: Informational guidance only. Verify against official NFPA / IEC / BS
          publications before use.
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link className="btn-primary" href={article.link} target="_blank">
            Read source
          </Link>
          <button className="btn-secondary">Save to library</button>
        </div>
      </div>
    </div>
  );
}

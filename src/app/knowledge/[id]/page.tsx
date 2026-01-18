import Link from "next/link";
import { knowledgeTopics } from "@/lib/mockData";

interface KnowledgeDetailProps {
  params: { id: string };
}

export default function KnowledgeDetailPage({ params }: KnowledgeDetailProps) {
  const topic = knowledgeTopics.find((item) => item.id === params.id) ?? knowledgeTopics[0];

  return (
    <div className="space-y-6">
      <Link href="/knowledge" className="text-sm font-semibold text-brand-600">
        ← Back to Knowledge
      </Link>
      <div className="card p-6 space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{topic.title}</h2>
          <p className="text-sm text-slate-500">{topic.category}</p>
        </div>
        <p className="text-sm text-slate-600">{topic.summary}</p>
        <div>
          <p className="section-title">Outline</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
            {topic.outline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="section-title">Diagram placeholders</p>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            <div className="card-muted h-32"></div>
            <div className="card-muted h-32"></div>
          </div>
        </div>
        <div>
          <p className="section-title">Key terms</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {topic.terms.map((term) => (
              <span key={term} className="badge">
                {term}
              </span>
            ))}
          </div>
        </div>
        <div className="card-muted p-4">
          <p className="text-sm font-semibold text-slate-700">Quick Quiz (optional)</p>
          <p className="text-sm text-slate-500">
            Which statement best describes the power triangle relationship? (Add quiz content in admin
            mode.)
          </p>
        </div>
      </div>
    </div>
  );
}

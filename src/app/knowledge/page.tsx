import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { knowledgeTopics } from "@/lib/mockData";

export default function KnowledgePage() {
  return (
    <div className="space-y-6">
      <PageHeading
        title="Knowledge Library"
        description="Structured learning paths for electrical installation design basics."
        actions={<button className="btn-primary">Add topic</button>}
      />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {knowledgeTopics.map((topic) => (
          <Link key={topic.id} href={`/knowledge/${topic.id}`} className="card p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">{topic.title}</h3>
              <span className="badge">{topic.category}</span>
            </div>
            <p className="mt-2 text-sm text-slate-500">{topic.summary}</p>
            <div className="mt-4 text-xs text-slate-400">Outline • Key terms • Quiz</div>
          </Link>
        ))}
      </section>
    </div>
  );
}

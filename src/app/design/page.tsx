import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { designModules } from "@/lib/mockData";

export default function DesignPage() {
  return (
    <div className="space-y-6">
      <PageHeading
        title="Design Tools"
        description="Standardized calculation modules with consistent inputs and export-ready results."
        actions={<button className="btn-secondary">Manage modules</button>}
      />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {designModules.map((module) => (
          <Link key={module.slug} href={`/design/${module.slug}`} className="card p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">{module.title}</h3>
              <span className="rounded-full bg-brand-100 px-2 py-1 text-xs font-semibold text-brand-700">
                Metric
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-500">{module.description}</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <span>Inputs • Results • Notes</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

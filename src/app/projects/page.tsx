import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { projectSummaries } from "@/lib/mockData";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <PageHeading
        title="Projects"
        description="Manage design projects, module runs, and reporting outputs."
        actions={
          <>
            <button className="btn-secondary">Grid</button>
            <button className="btn-secondary">List</button>
            <button className="btn-primary">New project</button>
          </>
        }
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <input className="input flex-1" placeholder="Search projects" />
        <input className="input sm:w-64" placeholder="Tags" />
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        {projectSummaries.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className="card p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
              <span className="badge">{project.status}</span>
            </div>
            <p className="text-sm text-slate-500">{project.location}</p>
            <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-slate-600">
              <div>
                <p className="text-xs text-slate-400">Client</p>
                <p>{project.client}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Voltage</p>
                <p>{project.voltage}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">System</p>
                <p>{project.systemType}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Updated</p>
                <p>{project.updated}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

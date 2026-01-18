"use client";

import { useState } from "react";
import Link from "next/link";
import { moduleRuns, projectSummaries, designModules } from "@/lib/mockData";

interface ProjectDetailProps {
  params: { id: string };
}

const tabs = ["Overview", "Modules", "Report Builder", "Files"] as const;

type Tab = (typeof tabs)[number];

export default function ProjectDetailPage({ params }: ProjectDetailProps) {
  const project = projectSummaries.find((item) => item.id === params.id) ?? projectSummaries[0];
  const [activeTab, setActiveTab] = useState<Tab>("Overview");

  return (
    <div className="space-y-6">
      <Link href="/projects" className="text-sm font-semibold text-brand-600">
        ← Back to Projects
      </Link>
      <div className="card p-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{project.name}</h2>
            <p className="text-sm text-slate-500">{project.location}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <button className="btn-secondary">Edit project</button>
            <button className="btn-primary">Export report</button>
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm text-slate-600">
          <div>
            <p className="text-xs text-slate-400">Client</p>
            <p>{project.client}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Voltage</p>
            <p>{project.voltage}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">System Type</p>
            <p>{project.systemType}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Last Updated</p>
            <p>{project.updated}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`btn-secondary ${activeTab === tab ? "border-brand-400 text-brand-700" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Overview" ? (
        <section className="grid gap-4 lg:grid-cols-2">
          {moduleRuns.map((run) => (
            <div key={run.id} className="card p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-700">{run.module}</p>
                <span className="badge">{run.status}</span>
              </div>
              <p className="mt-3 text-2xl font-semibold text-slate-900">{run.result}</p>
              <p className="text-sm text-slate-500">Updated {run.updated}</p>
              <div className="mt-3 flex gap-2">
                <button className="btn-secondary">Set as current</button>
                <button className="btn-secondary">View history</button>
              </div>
            </div>
          ))}
        </section>
      ) : null}

      {activeTab === "Modules" ? (
        <section className="card p-6">
          <div className="flex items-center justify-between">
            <p className="section-title">Saved module runs</p>
            <button className="btn-secondary">Add run</button>
          </div>
          <div className="mt-4 grid gap-3">
            {designModules.map((module) => (
              <div key={module.slug} className="flex flex-col gap-2 border-b border-slate-200 pb-3 last:border-b-0">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-800">{module.title}</p>
                  <button className="btn-ghost">Open</button>
                </div>
                <p className="text-sm text-slate-500">Latest run: {moduleRuns[0].updated}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {activeTab === "Report Builder" ? (
        <section className="card p-6">
          <p className="section-title">Report builder</p>
          <p className="mt-2 text-sm text-slate-500">
            Select module runs to include in the project PDF report.
          </p>
          <div className="mt-4 space-y-3">
            {moduleRuns.map((run) => (
              <label key={run.id} className="flex items-center gap-3 rounded-xl border border-slate-200 p-3">
                <input type="checkbox" className="h-4 w-4" defaultChecked />
                <div>
                  <p className="text-sm font-semibold text-slate-700">{run.module}</p>
                  <p className="text-xs text-slate-500">{run.updated}</p>
                </div>
              </label>
            ))}
          </div>
          <button className="btn-primary mt-4">Generate PDF report</button>
        </section>
      ) : null}

      {activeTab === "Files" ? (
        <section className="card p-6">
          <p className="section-title">Files</p>
          <p className="mt-2 text-sm text-slate-500">
            File storage will be available in a future update. Upload drawings, load schedules, and panel
            schedules here.
          </p>
        </section>
      ) : null}
    </div>
  );
}

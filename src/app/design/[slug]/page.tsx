"use client";

import { useState } from "react";
import Link from "next/link";
import { designModules, moduleInputs, projectSummaries } from "@/lib/mockData";

interface ModulePageProps {
  params: { slug: string };
}

export default function ModulePage({ params }: ModulePageProps) {
  const module = designModules.find((item) => item.slug === params.slug) ?? designModules[0];
  const [projectId, setProjectId] = useState(projectSummaries[0].id);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <Link href="/design" className="text-sm font-semibold text-brand-600">
          ← Back to Design Tools
        </Link>
        <h2 className="text-2xl font-bold text-slate-900">{module.title}</h2>
        <p className="text-sm text-slate-500">{module.description}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <p className="section-title">Inputs</p>
            <span className="badge">Metric</span>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-500">Voltage system</label>
              <select className="input mt-2">
                {moduleInputs.voltageSystem.map((value) => (
                  <option key={value}>{value}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500">System type</label>
              <select className="input mt-2">
                <option>Commercial</option>
                <option>Industrial</option>
                <option>Residential</option>
              </select>
              <p className="text-xs text-slate-400">Inline help: select the dominant load type.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-slate-500">Demand factor</label>
                <input className="input mt-2" placeholder="0.85" />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-500">Design margin (%)</label>
                <input className="input mt-2" placeholder="10" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500">Conductor material</label>
              <select className="input mt-2">
                {moduleInputs.conductorMaterial.map((value) => (
                  <option key={value}>{value}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500">Standard reference notes</label>
              <textarea
                className="input mt-2 min-h-[90px]"
                placeholder="Reference notes only, not legal advice."
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="btn-primary">Calculate</button>
            <button className="btn-secondary">Reset</button>
            <button className="btn-secondary">Export PDF</button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card p-6">
            <p className="section-title">Results</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Key output</span>
                <span className="text-lg font-semibold text-slate-900">120 kVA</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Demand load</span>
                <span className="text-lg font-semibold text-slate-900">102 kVA</span>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-700">
                Warning: verify coordination with upstream breakers.
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                Assumptions: 30°C ambient, typical harmonic loading.
              </div>
            </div>
          </div>
          <div className="card p-6">
            <p className="section-title">Save to project</p>
            <select
              className="input mt-3"
              value={projectId}
              onChange={(event) => setProjectId(event.target.value)}
            >
              {projectSummaries.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
            <button className="btn-primary mt-3 w-full">Save run to project</button>
          </div>
          <div className="card p-6">
            <p className="section-title">Module log</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Calculated at 09:32 • v1.2</li>
              <li>Inputs stored in project history</li>
              <li>Reference notes saved for review</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

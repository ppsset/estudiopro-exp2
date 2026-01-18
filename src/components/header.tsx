"use client";

import { useState } from "react";

export function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className="flex flex-col gap-4 border-b border-slate-200 bg-white px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm font-semibold text-slate-500">Welcome back</p>
        <h1 className="text-2xl font-bold text-slate-900">Electrical Installation Design Hub</h1>
      </div>
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto">
        <div className="relative w-full lg:w-[360px]">
          <input
            className="input pl-10"
            placeholder="Search News, Projects, Knowledge"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
        </div>
        <button className="btn-secondary">New Project</button>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
            JD
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-700">Jordan Doe</p>
            <p className="text-xs text-slate-500">User</p>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: "📰" },
  { href: "/design", label: "Design", icon: "⚡" },
  { href: "/projects", label: "Projects", icon: "📁" },
  { href: "/knowledge", label: "Knowledge", icon: "📚" }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-full w-64 flex-col gap-6 border-r border-slate-200 bg-white px-5 py-6 lg:flex">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-xl text-white">
          ⚡
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-500">Electrical Installation</p>
          <p className="text-lg font-bold text-slate-900">Design Hub</p>
        </div>
      </div>
      <nav className="flex flex-1 flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-link ${isActive ? "sidebar-link-active" : ""}`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="card p-4">
        <p className="text-xs font-semibold uppercase text-slate-500">Admin tools</p>
        <p className="mt-2 text-sm text-slate-700">
          Manage RSS sources, knowledge topics, and user roles.
        </p>
        <button className="btn-secondary mt-3 w-full">Admin Console</button>
      </div>
    </aside>
  );
}

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-slate-200 bg-white px-4 py-2 lg:hidden">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`bottom-nav-item ${isActive ? "bottom-nav-active" : ""}`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

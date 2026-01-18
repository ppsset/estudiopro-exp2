import { ReactNode } from "react";
import { Sidebar, BottomNav } from "@/components/navigation";
import { Header } from "@/components/header";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="flex-1 px-6 py-6 pb-24 lg:pb-8">{children}</main>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

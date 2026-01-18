"use client";

import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center gap-6">
      <div className="text-center">
        <p className="text-sm font-semibold text-slate-500">Electrical Installation Design Hub</p>
        <h2 className="text-2xl font-bold text-slate-900">Sign in</h2>
      </div>
      <div className="card p-6">
        <form className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-500">Email</label>
            <input className="input mt-2" placeholder="name@company.com" />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-500">Password</label>
            <input type="password" className="input mt-2" placeholder="••••••••" />
          </div>
          <button className="btn-primary w-full" type="submit">
            Sign in
          </button>
        </form>
        <div className="mt-4 flex flex-col gap-2 text-sm text-slate-500">
          <button className="btn-secondary w-full">Continue with SSO</button>
          <Link className="text-center text-brand-600" href="/">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

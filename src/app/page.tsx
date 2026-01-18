import Image from "next/image";
import Link from "next/link";
import { PageHeading } from "@/components/page-heading";
import { newsFeed } from "@/lib/mockData";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PageHeading
        title="Home · News Feed"
        description="Curated NFPA, IEC, and BS updates with saved insights across regions."
        actions={
          <>
            <select className="input w-full sm:w-auto">
              <option>Standard: All</option>
              <option>NFPA</option>
              <option>IEC</option>
              <option>BS</option>
            </select>
            <select className="input w-full sm:w-auto">
              <option>Category: All</option>
              <option>Protection</option>
              <option>Cables</option>
              <option>Power Quality</option>
              <option>Codes</option>
              <option>Case Study</option>
            </select>
            <select className="input w-full sm:w-auto">
              <option>Sort: Latest</option>
              <option>Most saved</option>
            </select>
            <button className="btn-secondary">Date range</button>
          </>
        }
      />

      <section className="grid gap-5 lg:grid-cols-[2.4fr_1fr]">
        <div className="space-y-4">
          {newsFeed.map((item) => (
            <article key={item.id} className="card flex flex-col gap-4 p-4 sm:flex-row">
              <div className="relative h-32 w-full overflow-hidden rounded-xl sm:h-32 sm:w-44">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="badge">{item.source}</span>
                  <span className="badge">{item.standard}</span>
                  <span className="badge">{item.category}</span>
                  <span className="text-xs text-slate-400">{item.time}</span>
                </div>
                <div>
                  <Link href={`/news/${item.id}`} className="text-lg font-semibold text-slate-900 hover:text-brand-700">
                    {item.title}
                  </Link>
                  <p className="text-sm text-slate-500">{item.summary}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button className="btn-secondary">Save</button>
                  <span className="text-xs text-slate-400">Saved {item.saved} times</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-4">
          <div className="card p-4">
            <p className="section-title">Filters</p>
            <div className="mt-3 space-y-3">
              <label className="text-xs font-semibold text-slate-500">Region</label>
              <select className="input">
                <option>All regions</option>
                <option>North America</option>
                <option>EMEA</option>
                <option>Asia Pacific</option>
              </select>
              <label className="text-xs font-semibold text-slate-500">Date range</label>
              <div className="grid grid-cols-2 gap-2">
                <input className="input" placeholder="Start" />
                <input className="input" placeholder="End" />
              </div>
              <button className="btn-primary w-full">Apply filters</button>
            </div>
          </div>
          <div className="card p-4">
            <p className="section-title">Saved articles</p>
            <ul className="mt-3 space-y-3 text-sm text-slate-600">
              {newsFeed.slice(0, 2).map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="mt-1">🔖</span>
                  <div>
                    <p className="font-semibold text-slate-700">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.source}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

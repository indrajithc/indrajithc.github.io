import { Layout } from "../../components/Layout";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { siteData, siteTranslations } from "../../data/index";
import type { PageData } from "../../lib/types";

interface PulseData {
  pulse: typeof siteData.pulse;
}

export async function getStaticData(): Promise<PageData<PulseData>> {
  return {
    data: { pulse: siteData.pulse },
    translations: siteTranslations,
  };
}

export default function PulsePage({ data, translations }: PageData<PulseData>) {
  const { pulse } = data;

  return (
    <Layout
      title="Engineering Pulse | Indrajith C."
      extraStyles={`
        .contribution-cell { width: 12px; height: 12px; border-radius: 2px; }
      `}
    >
      <div className="bg-surface-container-lowest text-on-surface selection:bg-primary/30 selection:text-primary">
        <Nav activePage="pulse" translations={translations} />

        <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto space-y-20">
          {/* Header */}
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-[10px] font-label uppercase tracking-widest font-bold text-primary">Live Pulse Operational</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-on-surface">
              Engineering <span className="text-primary italic">Pulse</span>
            </h1>
            <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
              Real-time architectural monitoring of open-source contributions, repository health, and technical evolution across the ecosystem.
            </p>
          </header>

          {/* Contribution Graph */}
          <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 bg-surface-container rounded-xl p-8 border border-outline-variant/10 shadow-2xl relative overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="font-headline text-xl font-bold">Contribution Latency</h3>
                  <p className="text-on-surface-variant text-xs font-label">{pulse.contributions.total} commits in the {pulse.contributions.period}</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant text-sm">query_stats</span>
              </div>
              {/* Static contribution grid */}
              <div className="overflow-x-auto pb-4 custom-scrollbar">
                <div className="flex gap-1 min-w-[800px]">
                  {Array.from({ length: 52 }).map((_, weekIdx) => (
                    <div key={weekIdx} className="grid grid-rows-7 gap-1">
                      {Array.from({ length: 7 }).map((_, dayIdx) => {
                        const intensity = (weekIdx * 7 + dayIdx) % 5;
                        const classes = ["bg-surface-container-highest/30", "bg-primary/10", "bg-primary/30", "bg-primary/60", "bg-primary"];
                        return <div key={dayIdx} className={`contribution-cell ${classes[intensity]}`} />;
                      })}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between text-[10px] font-label uppercase text-on-surface-variant tracking-widest">
                <div className="flex items-center gap-4">
                  {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m) => <span key={m}>{m}</span>)}
                </div>
                <div className="flex items-center gap-1">
                  <span>Less</span>
                  {["bg-surface-container-highest/30", "bg-primary/20", "bg-primary/40", "bg-primary/70", "bg-primary"].map((cls, i) => (
                    <div key={i} className={`contribution-cell ${cls}`} />
                  ))}
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="bg-surface-container-high rounded-xl p-6 flex flex-col justify-between h-full border border-outline-variant/10">
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Top Language</p>
                <div className="mt-4">
                  <div className="text-4xl font-headline font-bold text-primary">{pulse.contributions.topLanguage.name}</div>
                  <p className="text-xs text-on-surface-variant mt-1">{pulse.contributions.topLanguage.percentage}% of total volume</p>
                </div>
                <div className="mt-6 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${pulse.contributions.topLanguage.percentage}%` }} />
                </div>
              </div>
              <div className="bg-surface-container-high rounded-xl p-6 flex flex-col justify-between h-full border border-outline-variant/10">
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Avg Frequency</p>
                <div className="mt-4">
                  <div className="text-4xl font-headline font-bold text-on-surface">{pulse.contributions.avgFrequency.value}</div>
                  <p className="text-xs text-on-surface-variant mt-1">{pulse.contributions.avgFrequency.label}</p>
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
                  <span className="text-[10px] font-label text-primary">{pulse.contributions.avgFrequency.trend}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Repos */}
          <section className="space-y-8">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-headline font-bold">Active Nodes</h2>
                <p className="text-on-surface-variant text-sm mt-1">Primary architectural focus zones</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pulse.repos.map((repo) => (
                <div key={repo.name} className="group bg-surface-container rounded-xl overflow-hidden border border-outline-variant/10 hover:bg-surface-container-high transition-all duration-300 transform hover:-translate-y-2">
                  <div className="p-8 space-y-6">
                    <div className="flex justify-between items-start">
                      <span className="material-symbols-outlined text-primary text-3xl">{repo.icon}</span>
                      <div className="flex items-center gap-3 text-on-surface-variant font-label text-xs">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> {repo.stars}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">fork_right</span> {repo.forks}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{repo.name}</h4>
                      <p className="text-sm text-on-surface-variant mt-3 line-clamp-2">{repo.description}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                        <span>{repo.language}</span>
                        <span>{repo.percentage}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden flex">
                        <div className="h-full bg-primary" style={{ width: `${repo.percentage}%` }} />
                        <div className={`h-full ${repo.secondaryColor}`} style={{ width: `${repo.secondaryPercentage}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Activity Log */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-headline font-bold">Activity Log</h2>
                <div className="h-[1px] flex-grow bg-outline-variant/20" />
              </div>
              <div className="space-y-4">
                {pulse.activityLog.map((entry, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center border border-outline-variant/20 group-hover:border-primary transition-colors">
                        <span className="material-symbols-outlined text-primary text-xl">{entry.icon}</span>
                      </div>
                      {idx < pulse.activityLog.length - 1 && <div className="w-[1px] h-full bg-outline-variant/20 mt-2" />}
                    </div>
                    <div className="flex-grow pb-10">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="text-sm font-bold text-on-surface">{entry.title}</h5>
                          <p className="text-xs text-on-surface-variant mt-1 font-mono uppercase">hash: {entry.hash} • {entry.repo}</p>
                        </div>
                        <span className="text-[10px] font-label text-on-surface-variant whitespace-nowrap">{entry.time}</span>
                      </div>
                      {entry.details.length > 0 && (
                        <div className="mt-4 p-4 rounded bg-surface-container-low border border-outline-variant/10 text-xs text-on-surface-variant font-mono leading-relaxed">
                          {entry.details.map((d, i) => <div key={i}>- {d}</div>)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal Mockup */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-zinc-950 rounded-xl border border-outline-variant/20 overflow-hidden shadow-2xl">
                <div className="bg-surface-container px-4 py-2 flex items-center gap-2 border-b border-outline-variant/10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-[10px] font-mono text-on-surface-variant ml-2">arch_monitor --v</span>
                </div>
                <div className="p-6 font-mono text-[11px] leading-loose text-primary/80">
                  <p>&gt; Fetching system metrics...</p>
                  <p>&gt; <span className="text-on-surface">UPTIME:</span> 342:12:08:44</p>
                  <p>&gt; <span className="text-on-surface">CORES:</span> 128 Optimal</p>
                  <p>&gt; <span className="text-on-surface">STATUS:</span> <span className="text-primary font-bold">NOMINAL</span></p>
                  <p className="mt-4 text-on-surface-variant">--- Active Stack ---</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Kubernetes", "gRPC", "Redis", "PostgreSQL", "Terraform"].map((s) => (
                      <span key={s} className="px-2 py-0.5 bg-surface-container-highest text-[9px] rounded-full text-on-surface">{s}</span>
                    ))}
                  </div>
                  <p className="mt-6 animate-pulse">_</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-xl border border-primary/20">
                <h4 className="font-headline font-bold text-lg">System Health</h4>
                <p className="text-sm text-on-surface-variant mt-2">Current architectural integrity is within expected operational parameters.</p>
                <div className="mt-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-on-surface-variant">Build Success Rate</span>
                    <span className="text-primary font-bold">99.8%</span>
                  </div>
                  <div className="h-1 bg-surface-container-highest rounded-full">
                    <div className="h-full bg-primary w-[99.8%] shadow-[0_0_8px_rgba(78,222,163,0.4)]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer translations={translations} />
      </div>
    </Layout>
  );
}

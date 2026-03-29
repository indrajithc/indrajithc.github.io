import { Layout } from "../components/Layout";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { BottomNav } from "../components/BottomNav";
import { siteData, siteTranslations } from "../data/index";
import type { PageData } from "../lib/types";

interface HomeData {
  meta: typeof siteData.meta;
  stats: typeof siteData.stats;
  competencies: typeof siteData.competencies;
}

export async function getStaticData(): Promise<PageData<HomeData>> {
  return {
    data: {
      meta: siteData.meta,
      stats: siteData.stats,
      competencies: siteData.competencies,
    },
    translations: siteTranslations,
  };
}

export default function HomePage({ data, translations }: PageData<HomeData>) {
  const t = (key: string) => translations[key] ?? key;

  return (
    <Layout title={`${data.meta.name} | ${data.meta.title}`}>
      <div className="bg-surface-container-lowest text-on-surface selection:bg-primary selection:text-on-primary overflow-x-hidden">
        <Nav activePage="home" translations={translations} />

        {/* Hero Section */}
        <main className="relative min-h-screen flex flex-col justify-center px-6 pt-24 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              {/* Performance Badge */}
              <div className="inline-flex items-center gap-3 bg-surface-container-high px-4 py-2 rounded-full mb-8 border border-outline-variant/15">
                <div className="relative flex items-center justify-center w-10 h-10">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle className="text-surface-container-highest" cx="20" cy="20" fill="transparent" r="18" stroke="currentColor" strokeWidth="3" />
                    <circle className="text-primary" cx="20" cy="20" fill="transparent" r="18" stroke="currentColor" strokeDasharray="113" strokeDashoffset="1" strokeWidth="3" />
                  </svg>
                  <span className="absolute text-[10px] font-bold text-primary">99</span>
                </div>
                <span className="text-[10px] font-label font-bold uppercase tracking-[0.2em] text-on-surface-variant">Lighthouse Performance Metric</span>
              </div>

              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-6">
                {data.meta.name} <br />
                <span className="text-primary">{data.meta.title.toUpperCase()}</span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
                ENGINEERING PERFORMANCE. <br />
                <span className="font-headline font-medium tracking-wide">SCALING ARCHITECTURE.</span>
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="/experience" className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold uppercase tracking-widest rounded-lg shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                  {t("hero.cta.primary")}
                </a>
                <a href="/arsenal" className="px-8 py-4 border border-outline-variant/30 text-on-surface font-headline font-bold uppercase tracking-widest rounded-lg hover:bg-primary/10 transition-colors">
                  {t("hero.cta.secondary")}
                </a>
              </div>
            </div>

            {/* Visual Element */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[8rem] opacity-20">terminal</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[10px] font-label font-bold text-primary mb-1">SYSTEM STATUS</div>
                  <div className="text-xs font-mono text-on-surface-variant">OPTIMIZED FOR 10M+ REQS/SEC</div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-surface-container-high/80 backdrop-blur-xl p-6 rounded-xl border border-outline-variant/10 shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                  </div>
                  <span className="font-headline text-sm font-bold tracking-tight">LATENCY REDUCTION</span>
                </div>
                <div className="text-3xl font-headline font-bold text-primary">-45%</div>
              </div>
            </div>
          </div>
        </main>

        {/* Core Competencies Bento Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-surface-container rounded-xl p-12 flex flex-col justify-end min-h-[400px] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[12rem]">cloud_done</span>
              </div>
              <h3 className="font-headline text-4xl font-bold mb-4 tracking-tight">Cloud Infrastructure</h3>
              <p className="text-on-surface-variant max-w-md">Orchestrating resilient multi-cloud environments using Kubernetes and Terraform for enterprise-grade scalability.</p>
            </div>
            <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-12 flex flex-col justify-between group">
              <span className="material-symbols-outlined text-4xl">bolt</span>
              <div>
                <h3 className="font-headline text-3xl font-bold mb-2 tracking-tight">Performance</h3>
                <p className="text-on-primary/80">Sub-second response times at global scale.</p>
              </div>
            </div>
            <div className="md:col-span-4 bg-surface-container-high rounded-xl p-12 flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-default">
              <span className="material-symbols-outlined text-emerald-400 text-4xl">psychology</span>
              <div>
                <h3 className="font-headline text-2xl font-bold mb-2 tracking-tight">Tech Strategy</h3>
                <p className="text-on-surface-variant text-sm">Translating business goals into robust technical roadmaps.</p>
              </div>
            </div>
            <div className="md:col-span-8 bg-surface-container rounded-xl p-12 grid grid-cols-2 gap-8 border border-outline-variant/10">
              {data.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <div className="text-4xl font-headline font-bold text-on-surface">{stat.value}</div>
                  <div className="text-[10px] font-label font-bold uppercase tracking-widest text-on-surface-variant">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer translations={translations} />
        <BottomNav activePage="home" />
      </div>
    </Layout>
  );
}

import { Layout } from "../../components/Layout";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { BottomNav } from "../../components/BottomNav";
import { siteData, siteTranslations } from "../../data/index";
import type { PageData } from "../../lib/types";

interface ArsenalData {
  skills: typeof siteData.skills;
}

export async function getStaticData(): Promise<PageData<ArsenalData>> {
  return {
    data: { skills: siteData.skills },
    translations: siteTranslations,
  };
}

export default function ArsenalPage({ data, translations }: PageData<ArsenalData>) {
  const { skills } = data;

  return (
    <Layout title="Arsenal | Indrajith C.">
      <div className="bg-surface text-on-surface selection:bg-primary/30 selection:text-primary min-h-screen">
        <Nav activePage="arsenal" translations={translations} />

        <main className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
          {/* Hero */}
          <section className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-8xl font-headline font-bold leading-none tracking-tighter text-on-surface mb-8">
                TECHNICAL<br /><span className="text-primary">ARSENAL_</span>
              </h1>
              <p className="text-lg text-on-surface-variant font-body leading-relaxed max-w-xl">
                High-velocity engineering stack optimized for scale, performance, and architectural integrity. This is the foundation upon which complex digital ecosystems are built.
              </p>
            </div>
            <div className="hidden lg:block w-32 h-32 border-l border-b border-outline-variant/30 relative">
              <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-label">v.2025.01</div>
            </div>
          </section>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Frontend */}
            <div className="md:col-span-8 bg-surface-container-low p-8 md:p-12 relative overflow-hidden group hover:bg-surface-container transition-colors duration-500">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-9xl">layers</span>
              </div>
              <div className="relative z-10">
                <h2 className="text-[10px] tracking-[0.3em] uppercase text-primary font-label mb-4">{skills.frontend.category}</h2>
                <h3 className="text-4xl font-headline font-bold mb-8">{skills.frontend.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.frontend.tags.map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-surface-container-highest rounded-full text-xs font-label tracking-widest uppercase text-on-surface">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="mt-12 h-px bg-gradient-to-r from-primary/40 to-transparent" />
              <p className="mt-6 text-on-surface-variant text-sm font-body leading-relaxed max-w-md">{skills.frontend.description}</p>
            </div>

            {/* Performance */}
            <div className="md:col-span-4 bg-surface-container p-8 relative overflow-hidden group border-l border-primary/10">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary mb-6 scale-110">bolt</span>
                  <h2 className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant font-label mb-2">{skills.performance.category}</h2>
                  <h3 className="text-3xl font-headline font-bold mb-6">{skills.performance.title}</h3>
                  <ul className="space-y-4">
                    {skills.performance.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                        <span className="material-symbols-outlined text-primary text-lg">check_circle</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 p-4 bg-primary/5 rounded-lg border border-primary/10 text-[10px] uppercase tracking-tighter text-primary font-bold">
                  {skills.performance.target}
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="md:col-span-5 bg-surface-container p-8 relative overflow-hidden group">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary mb-6">database</span>
                <h2 className="text-[10px] tracking-[0.3em] uppercase text-on-surface-variant font-label mb-2">{skills.backend.category}</h2>
                <h3 className="text-3xl font-headline font-bold mb-6">{skills.backend.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-surface-container-low rounded-lg">
                    <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Logic</p>
                    {skills.backend.logic.map((item) => <p key={item} className="text-sm font-bold">{item}</p>)}
                  </div>
                  <div className="p-4 bg-surface-container-low rounded-lg">
                    <p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Storage</p>
                    {skills.backend.storage.map((item) => <p key={item} className="text-sm font-bold">{item}</p>)}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-all duration-700">
                <span className="material-symbols-outlined text-[150px]">schema</span>
              </div>
            </div>

            {/* DevOps */}
            <div className="md:col-span-7 bg-surface-container-low p-8 md:p-12 relative overflow-hidden group hover:bg-surface-container transition-colors duration-500">
              <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-1">
                  <h2 className="text-[10px] tracking-[0.3em] uppercase text-primary font-label mb-4">{skills.devops.category}</h2>
                  <h3 className="text-4xl font-headline font-bold mb-6">{skills.devops.title}</h3>
                  <p className="text-on-surface-variant text-sm font-body leading-relaxed mb-8">{skills.devops.description}</p>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  {skills.devops.tools.map((tool) => (
                    <div key={tool.name} className="flex items-center justify-between p-4 bg-surface-container-highest/20 border-l-2 border-primary">
                      <span className="text-sm font-bold tracking-widest">{tool.name}</span>
                      <span className="material-symbols-outlined text-primary">{tool.icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* System Architecture Section */}
          <section className="mt-24 bg-surface-container-lowest p-8 md:p-16 border border-outline-variant/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #4edea3 1px, transparent 0)", backgroundSize: "40px 40px" }} />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h4 className="text-primary font-headline font-bold text-lg mb-6 tracking-widest uppercase">The Methodology</h4>
              <h2 className="text-3xl md:text-5xl font-headline font-bold mb-8 leading-tight">SYSTEMS OVER SOLUTIONS</h2>
              <p className="text-on-surface-variant leading-loose mb-12">
                I don't just build features; I engineer scalable ecosystems. Every line of code is measured against the criteria of maintainability, observability, and performance.
              </p>
              <a className="inline-flex items-center gap-4 bg-gradient-to-br from-primary to-primary-container px-10 py-5 text-on-primary font-headline font-bold tracking-widest rounded-md hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20" href="/experience">
                VIEW EXPERIENCE
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </section>
        </main>

        <Footer translations={translations} />
        <BottomNav activePage="arsenal" />
      </div>
    </Layout>
  );
}

import { Layout } from "../../components/Layout";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { BottomNav } from "../../components/BottomNav";
import { siteData, siteTranslations } from "../../data/index";
import type { PageData } from "../../lib/types";

interface ExperienceData {
  meta: typeof siteData.meta;
  experience: typeof siteData.experience;
}

export async function getStaticData(): Promise<PageData<ExperienceData>> {
  return {
    data: {
      meta: siteData.meta,
      experience: siteData.experience,
    },
    translations: siteTranslations,
  };
}

export default function ExperiencePage({ data, translations }: PageData<ExperienceData>) {
  const lead = data.experience[0];
  const senior = data.experience[1];
  const junior = data.experience[2];

  return (
    <Layout title={`${data.meta.name} | Experience & Impact`}>
      <div className="bg-surface text-on-surface selection:bg-primary selection:text-on-primary overflow-x-hidden">
        <Nav activePage="experience" translations={translations} />

        <main className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
          {/* Hero */}
          <section className="mb-24">
            <div className="flex flex-col md:flex-row gap-12 items-end">
              <div className="flex-1">
                <h2 className="font-label text-primary text-xs uppercase tracking-[0.4em] mb-4">Professional Trajectory</h2>
                <h1 className="font-headline text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-8">
                  EVOLUTION AT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">{data.meta.company.toUpperCase()}</span>
                </h1>
              </div>
              <div className="w-full md:w-1/3 pb-2 border-b border-outline-variant/20">
                <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-6">
                  From shipping clean code as a Software Engineer to architecting enterprise-grade automation systems as a Technical Lead.
                </p>
              </div>
            </div>
          </section>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Lead Role */}
            <div className="md:col-span-8 group">
              <div className="bg-surface-container p-8 md:p-12 relative overflow-hidden transition-all duration-500 hover:bg-surface-container-high border-l-4 border-primary">
                <div className="absolute top-0 right-0 p-8 opacity-5 font-headline text-8xl font-black select-none group-hover:opacity-10 transition-opacity">LEAD</div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 inline-block">{lead.badge}</span>
                      <h3 className="font-headline text-3xl font-bold mb-2">{lead.role}</h3>
                      <p className="font-label text-on-surface-variant tracking-wider uppercase text-xs">{data.meta.company} • {lead.period}</p>
                    </div>
                    <div className="hidden md:block">
                      <span className="material-symbols-outlined text-4xl text-primary/40">{lead.icon}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="font-headline text-xs text-primary uppercase tracking-widest mb-6">Strategic Focus</h4>
                      <ul className="space-y-4">
                        {lead.focus?.map((item, i) => (
                          <li key={i} className="flex gap-4">
                            <span className="material-symbols-outlined text-primary text-sm">{item.icon}</span>
                            <p className="text-sm font-body">
                              {item.title && <span className="font-bold">{item.title}: </span>}
                              {item.description}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-surface-container-lowest p-6 border border-outline-variant/10">
                      <h4 className="font-headline text-xs text-secondary uppercase tracking-widest mb-4">Core Impact</h4>
                      <div className="space-y-3">
                        {lead.impact?.map((metric) => (
                          <div key={metric.label}>
                            <div className="flex justify-between items-center">
                              <span className="text-[11px] font-label text-on-surface-variant">{metric.label}</span>
                              <span className="text-primary font-headline text-lg font-bold">{metric.value}</span>
                            </div>
                            <div className="w-full h-1 bg-surface-container-highest mt-1">
                              <div className="h-full bg-primary" style={{ width: metric.width }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-4 space-y-8">
              <div className="bg-surface-container p-8 h-full border-t-2 border-secondary">
                <h3 className="font-headline text-xl font-bold mb-8">Engineering Pulse</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary">terminal</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Dev Lifecycle</p>
                      <p className="font-headline font-bold">Continuous Mastery</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary">cloud_sync</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Modern Stack</p>
                      <p className="font-headline font-bold">Cloud-Native Focus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Senior Role */}
            <div className="md:col-span-6 group">
              <div className="bg-surface-container p-8 hover:bg-surface-container-high transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-xl">{senior.icon}</span>
                  </div>
                  <span className="text-[10px] font-label text-on-surface-variant font-bold tracking-widest">{senior.period}</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-2">{senior.role}</h3>
                <p className="font-body text-sm text-on-surface-variant mb-8">Orchestrated complex R&D initiatives and performance optimization cycles.</p>
                <div className="p-4 bg-surface-container-low border-l border-primary/30">
                  <h4 className="text-[10px] font-label text-primary uppercase tracking-[0.2em] mb-2">{senior.achievement?.label}</h4>
                  <p className="font-headline text-lg font-bold">{senior.achievement?.title}</p>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{senior.achievement?.description}</p>
                </div>
              </div>
            </div>

            {/* Junior Role */}
            <div className="md:col-span-6 group">
              <div className="bg-surface-container p-8 hover:bg-surface-container-high transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 bg-secondary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-xl">{junior.icon}</span>
                  </div>
                  <span className="text-[10px] font-label text-on-surface-variant font-bold tracking-widest">{junior.period}</span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-2">{junior.role}</h3>
                <p className="font-body text-sm text-on-surface-variant mb-8">The foundational era. Focused on extreme web performance and frontend engineering.</p>
                <div className="p-4 bg-surface-container-low border-l border-secondary/30">
                  <h4 className="text-[10px] font-label text-secondary uppercase tracking-[0.2em] mb-2">{junior.achievement?.label}</h4>
                  <p className="font-headline text-lg font-bold">{junior.achievement?.title}</p>
                  <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">{junior.achievement?.description}</p>
                </div>
              </div>
            </div>

            {/* Technical Deep Dive */}
            <div className="md:col-span-12 mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: "psychology", title: "Problem Solving", desc: "Decoupling legacy monoliths into scalable micro-services while maintaining zero downtime for enterprise clients." },
                  { icon: "layers", title: "Full Stack Architecture", desc: "Mastery of the MERN stack coupled with deep Azure DevOps integration for end-to-end product delivery cycles." },
                  { icon: "verified", title: "Quality Assurance", desc: "Automated testing pipelines and code audit protocols that reduced post-release defects by over 60%." },
                ].map((item) => (
                  <div key={item.title} className="bg-surface-container-low p-8 flex flex-col justify-between min-h-[300px]">
                    <div>
                      <span className="material-symbols-outlined text-primary mb-6">{item.icon}</span>
                      <h3 className="font-headline text-xl font-bold mb-4">{item.title}</h3>
                    </div>
                    <p className="text-sm font-body text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <Footer translations={translations} />
        <BottomNav activePage="experience" />
      </div>
    </Layout>
  );
}

interface HeroSectionProps {
  name: string;
  role: string;
  lighthouseScore: number;
  chips: { icon: string; label: string }[];
}

export function HeroSection({ name, role, lighthouseScore, chips }: HeroSectionProps) {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center relative px-8 pt-24 overflow-hidden mb-20">
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <p className="font-label text-primary uppercase tracking-[0.3em] mb-6 text-sm">
            {name} // {role}
          </p>
          <h1 className="font-headline text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-on-surface leading-[0.85] mb-8">
            Elite Web <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-surface-container-highest">
              Architect
            </span>
          </h1>
        </div>
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="p-8 bg-surface-container-low border-l-4 border-primary">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-6xl font-headline font-bold text-glow">
                {lighthouseScore}
                <span className="text-primary text-4xl">+</span>
              </span>
              <span className="text-zinc-500 font-label text-xs uppercase tracking-widest">
                Lighthouse Rank
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Achieving near-perfect performance scores. Expert in sub-second paint times and premium
              user perception through rigorous R&amp;D.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            {chips.map((chip) => (
              <div
                key={chip.label}
                className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full border border-outline-variant/20"
              >
                <span className="material-symbols-outlined text-primary text-sm">{chip.icon}</span>
                <span className="text-[10px] font-bold tracking-widest uppercase">{chip.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

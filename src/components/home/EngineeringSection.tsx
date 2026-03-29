interface EngineeringSectionProps {
  streakJsTags: string[];
}

export function EngineeringSection({ streakJsTags }: EngineeringSectionProps) {
  return (
    <section className="py-32 px-8 bg-surface-container-lowest" id="engineering">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline text-5xl font-bold tracking-tighter mb-6">
              Interactive Engineering
            </h2>
            <p className="text-zinc-500 text-lg">
              Leading R&amp;D initiatives like &apos;Streak JS&apos; and architecting high-velocity
              web interfaces with surgical precision.
            </p>
          </div>
          <div className="hidden md:block text-right">
            <span className="font-label text-zinc-800 text-8xl font-black">01</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Streak JS Card */}
          <div className="bg-surface-container-low p-12 border border-white/5 relative group overflow-hidden h-[450px] flex flex-col justify-between">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">science</span>
              <h3 className="text-3xl font-headline font-bold mb-4">Streak JS &amp; R&amp;D</h3>
              <p className="text-zinc-400 max-w-sm">
                Deep research into performant JavaScript primitives. Engineering deterministic motion
                systems that maintain performance under heavy interaction.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 relative z-10">
              {streakJsTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-surface-container-highest text-[10px] font-bold uppercase rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />
            <div className="absolute right-0 bottom-0 opacity-10 p-4">
              <span className="material-symbols-outlined text-[120px]">polymer</span>
            </div>
          </div>

          {/* Pipeline & Azure Column */}
          <div className="grid grid-rows-2 gap-8">
            {/* Core Pipelines */}
            <div className="bg-surface-container-low p-8 border border-white/5 flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-primary">settings_ethernet</span>
                  <h3 className="text-xl font-headline font-bold">Core Pipelines</h3>
                </div>
                <p className="text-zinc-400 text-sm">
                  Deploying Docker + Jenkins pipelines for critical CSS and LCP/CLS optimization
                  within complex ecosystems.
                </p>
              </div>
            </div>

            {/* Azure Stack */}
            <div className="bg-primary p-8 flex items-center justify-center relative overflow-hidden group">
              <span className="text-on-primary font-headline text-5xl font-black tracking-tighter transform group-hover:scale-110 transition-transform duration-500">
                AZURE STACK
              </span>
              <div className="absolute inset-0 bg-black/5" />
              <div className="absolute top-4 right-4 text-on-primary opacity-40">
                <span className="material-symbols-outlined text-4xl">cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

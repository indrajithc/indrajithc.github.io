interface TrajectoryItem {
  period: string;
  role: string;
  company: string;
  description: string;
  tags?: string[];
  hasImage?: boolean;
}

interface TrajectorySectionProps {
  items: TrajectoryItem[];
}

export function TrajectorySection({ items }: TrajectorySectionProps) {
  return (
    <section className="py-32 px-8" id="trajectory">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <div className="h-[1px] w-24 bg-primary/30" />
          <h2 className="font-headline text-4xl font-bold tracking-tight">Trajectory</h2>
        </div>

        <div className="space-y-24">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative ${
                idx < items.length - 1 ? "border-b border-white/5 pb-20" : "pb-16"
              }`}
            >
              <div className="md:col-span-3">
                <p className="font-label text-zinc-500 text-sm tracking-widest">{item.period}</p>
              </div>

              <div className="md:col-span-6">
                <h3 className="text-2xl font-headline font-bold text-on-surface mb-2">
                  {item.role}
                </h3>
                <p className="text-primary font-medium mb-6">{item.company}</p>
                <p className="text-zinc-400 leading-relaxed mb-8">{item.description}</p>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-surface-container rounded text-xs font-semibold text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {item.hasImage && (
                <div className="md:col-span-3 flex md:justify-end">
                  <div className="w-full md:w-48 h-48 bg-surface-container rounded-lg flex items-center justify-center border border-outline-variant/10 opacity-60">
                    <span className="material-symbols-outlined text-primary text-6xl">
                      architecture
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

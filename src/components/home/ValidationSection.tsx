interface Certification {
  icon: string;
  title: string;
  type: string;
}

interface Education {
  level: string;
  degree: string;
  institution: string;
  period: string;
}

interface ValidationSectionProps {
  certifications: Certification[];
  education: Education[];
  location: string;
}

export function ValidationSection({
  certifications,
  education,
  location,
}: ValidationSectionProps) {
  const [city, ...rest] = location.split(",");

  return (
    <section className="py-32 bg-surface-container-low px-8 overflow-hidden" id="validation">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-headline text-5xl font-bold tracking-tighter mb-8 leading-tight">
              Global <br />
              Validation
            </h2>
            <p className="text-zinc-400 text-lg mb-12">
              Verified proficiency in Meta-led frontend engineering and advanced React ecosystems.
              Formal education in Computer Applications.
            </p>

            <div className="space-y-4 mb-12">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="p-6 bg-surface-container rounded-xl flex items-center gap-6 border border-white/5"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">{cert.icon}</span>
                  </div>
                  <div>
                    <p className="font-bold text-zinc-100">{cert.title}</p>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest">{cert.type}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu) => (
                <div key={edu.degree} className="p-6 bg-black/40 border border-primary/10 rounded-xl">
                  <span className="text-xs text-primary font-bold uppercase tracking-widest mb-2 block">
                    {edu.level}
                  </span>
                  <h4 className="text-xl font-headline font-bold">{edu.degree}</h4>
                  <p className="text-sm text-zinc-500">{edu.institution}</p>
                  <p className="text-xs text-zinc-600 mt-2 italic">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Location Visual */}
          <div className="relative">
            <div className="aspect-square bg-surface-container rounded-full flex items-center justify-center p-12 border border-outline-variant/10">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-full flex flex-col items-center justify-center text-center p-8">
                <span
                  className="material-symbols-outlined text-primary text-6xl mb-4"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  terminal
                </span>
                <h4 className="font-headline text-2xl font-bold mb-2">{city.trim()}</h4>
                <p className="text-zinc-500 text-sm">{rest.join(",").trim()} // Remote-Ready</p>
              </div>
            </div>
            <div className="absolute inset-[-40px] border border-primary/20 rounded-full border-dashed animate-[spin_20s_linear_infinite] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

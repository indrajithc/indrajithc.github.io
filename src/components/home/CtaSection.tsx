interface CtaSectionProps {
  email: string;
  portfolioUrl: string;
}

export function CtaSection({ email, portfolioUrl }: CtaSectionProps) {
  return (
    <section className="py-40 px-8 text-center bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter mb-12">
          Build the Experience.
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a
            className="px-10 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-xl text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Full Portfolio
          </a>
          <a
            className="px-10 py-5 border border-outline-variant text-on-surface font-bold rounded-xl text-lg hover:bg-primary/10 transition-all"
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}

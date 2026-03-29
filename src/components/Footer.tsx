interface FooterProps {
  translations: Record<string, string>;
  name?: string;
}

export function Footer({ translations, name }: FooterProps) {
  return (
    <footer className="w-full border-t border-neutral-800/20 bg-neutral-950">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-6 w-full max-w-7xl mx-auto">
        <div className="font-headline font-bold text-neutral-200">
          {name ?? "INDRAJITH C"} / <span className="text-emerald-500">TECHNICAL LEAD</span>
        </div>
        <div className="font-label text-[10px] tracking-[0.2em] uppercase text-neutral-500">
          {translations["footer.copyright"] ?? "© 2025 INDRAJITH C. ENGINEERED FOR PERFORMANCE."}
        </div>
        <div className="flex gap-8">
          <a
            className="font-label text-[10px] tracking-[0.2em] uppercase text-neutral-600 hover:text-neutral-200 transition-colors"
            href="https://github.com/indrajithc"
            target="_blank"
            rel="noopener noreferrer"
          >
            {translations["footer.github"] ?? "GITHUB"}
          </a>
          <a
            className="font-label text-[10px] tracking-[0.2em] uppercase text-neutral-600 hover:text-neutral-200 transition-colors"
            href="https://linkedin.com/in/indrajithc"
            target="_blank"
            rel="noopener noreferrer"
          >
            {translations["footer.linkedin"] ?? "LINKEDIN"}
          </a>
        </div>
      </div>
    </footer>
  );
}

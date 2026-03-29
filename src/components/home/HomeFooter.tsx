interface FooterLink {
  label: string;
  href: string;
}

interface HomeFooterProps {
  name: string;
  phone: string;
  year: string;
  links: FooterLink[];
}

export function HomeFooter({ name, phone, year, links }: HomeFooterProps) {
  return (
    <footer className="w-full py-12 border-t border-zinc-800/50 bg-zinc-950">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6">
        <div className="text-zinc-500 font-label text-[10px] uppercase tracking-[0.2em] font-semibold">
          © {year} OBSIDIAN_WEB_ARCHITECT // {name} // PH: {phone}
        </div>
        <div className="flex gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              className="text-zinc-500 hover:text-emerald-400 transition-colors duration-300 font-label text-[10px] uppercase tracking-[0.2em] font-semibold opacity-80 hover:opacity-100"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

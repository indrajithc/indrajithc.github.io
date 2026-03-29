interface NavProps {
  activePage: "home" | "arsenal" | "experience" | "pulse" | "contact";
  translations: Record<string, string>;
}

const NAV_LINKS = [
  { key: "home", label: "HOME", href: "/" },
  { key: "arsenal", label: "ARSENAL", href: "/arsenal" },
  { key: "experience", label: "EXPERIENCE", href: "/experience" },
  { key: "pulse", label: "PULSE", href: "/pulse" },
  { key: "contact", label: "CONTACT", href: "/#contact" },
];

export function Nav({ activePage, translations }: NavProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/40 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-emerald-400">terminal</span>
          <a href="/" className="text-xl font-black tracking-widest text-emerald-400 font-headline uppercase">
            {translations["nav.brand"] ?? "ARCHITECT"}
          </a>
        </div>
        <div className="hidden md:flex gap-8 items-center font-headline tracking-tighter uppercase font-bold">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={
                activePage === link.key
                  ? "text-emerald-400 font-bold"
                  : "text-neutral-400 hover:text-emerald-300 transition-colors duration-300"
              }
            >
              {translations[`nav.${link.key}`] ?? link.label}
            </a>
          ))}
        </div>
        <button className="scale-95 active:scale-90 transition-transform text-emerald-400">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}

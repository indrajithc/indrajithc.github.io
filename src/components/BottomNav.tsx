interface BottomNavProps {
  activePage: "home" | "arsenal" | "experience" | "pulse" | "contact";
}

const NAV_ITEMS = [
  { key: "home", icon: "home_app_logo", href: "/" },
  { key: "arsenal", icon: "layers", href: "/arsenal" },
  { key: "experience", icon: "psychology", href: "/experience" },
  { key: "pulse", icon: "query_stats", href: "/pulse" },
];

export function BottomNav({ activePage }: BottomNavProps) {
  return (
    <div className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 w-auto rounded-full px-4 py-2 bg-neutral-900/60 backdrop-blur-xl z-50 flex gap-8 items-center shadow-2xl shadow-emerald-900/20">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.key}
          href={item.href}
          className={
            activePage === item.key
              ? "bg-emerald-500/10 text-emerald-400 rounded-full p-3 scale-110 duration-200"
              : "text-neutral-500 p-3 hover:bg-neutral-800/50 rounded-full transition-all"
          }
        >
          <span className="material-symbols-outlined">{item.icon}</span>
        </a>
      ))}
    </div>
  );
}

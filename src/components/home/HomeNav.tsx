export function HomeNav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/40 backdrop-blur-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <span className="text-xl font-bold tracking-tighter text-zinc-100">ARCHITECT.V1</span>
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="text-emerald-400 font-bold border-b-2 border-emerald-400 pb-1 font-headline tracking-tight text-sm transition-all duration-200"
            href="#engineering"
          >
            Engineering
          </a>
          <a
            className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300 font-headline tracking-tight font-medium text-sm"
            href="#trajectory"
          >
            Trajectory
          </a>
          <a
            className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300 font-headline tracking-tight font-medium text-sm"
            href="#validation"
          >
            Validation
          </a>
          <a
            className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300 font-headline tracking-tight font-medium text-sm"
            href="https://github.com/indrajithc"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <a
          href="/resume.pdf"
          className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-5 py-2 rounded-lg font-bold text-sm tracking-tight scale-95 active:scale-90 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume.pdf
        </a>
      </div>
    </nav>
  );
}

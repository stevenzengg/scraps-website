export function Nav() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
      <a href="#" className="flex items-center gap-2">
        <div className="size-7 rounded-lg bg-brand" />
        <span className="font-serif text-2xl font-bold tracking-tight text-brand">
          Scraps
        </span>
      </a>
      <div className="hidden gap-10 text-sm font-medium text-ink/60 md:flex">
        <a href="#how" className="transition-colors hover:text-brand">How it works</a>
        <a href="#mission" className="transition-colors hover:text-brand">Our mission</a>
        <a href="#waitlist" className="transition-colors hover:text-brand">Early access</a>
      </div>
      <a
        href="#waitlist"
        className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-brand"
      >
        Get early access
      </a>
    </nav>
  );
}

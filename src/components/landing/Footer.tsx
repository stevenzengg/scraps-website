export function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-ink/10 px-6 py-12 md:flex-row">
      <div className="flex items-center gap-2">
        <div className="size-6 rounded-md bg-brand" />
        <span className="font-serif text-xl font-bold text-ink">Scraps</span>
      </div>
      <p className="text-center text-sm text-ink/40">
        © {new Date().getFullYear()} Scraps. Cook what you have.
      </p>
      <div className="flex gap-8 text-sm font-medium text-ink/50">
        <a href="#" className="hover:text-brand">Privacy</a>
        <a href="#" className="hover:text-brand">Terms</a>
        <a href="#" className="hover:text-brand">Contact</a>
      </div>
    </footer>
  );
}

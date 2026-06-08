export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      {/* Phone frame */}
      <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[3rem] border-[10px] border-stone-900 bg-cream shadow-[0_30px_80px_-20px_rgba(31,26,22,0.35)]">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-stone-900" />

        {/* Status bar */}
        <div className="flex items-center justify-between px-7 pt-3 text-[10px] font-semibold text-ink/80">
          <span>9:41</span>
          <span className="opacity-60">●●●</span>
        </div>

        {/* App content */}
        <div className="flex h-full flex-col px-5 pb-24 pt-6">
          <h3 className="font-serif text-[22px] leading-tight text-ink">
            Scan your fridge
          </h3>
          <p className="mt-1 text-[11px] text-ink/60">
            Take a slow video of your fridge
          </p>

          {/* Sunset gradient viewfinder */}
          <div className="relative mt-5 aspect-[3/4] w-full overflow-hidden rounded-[28px]">
            <div className="absolute inset-0 bg-[linear-gradient(155deg,#FF6B4A_0%,#FFB347_35%,#FFE066_60%,#A8D672_100%)]" />
            <div className="absolute inset-6 rounded-[20px] bg-white/15 backdrop-blur-[2px]" />
            {/* Recording dot */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                <div className="h-4 w-4 rounded-full bg-brand" />
              </div>
            </div>
          </div>

          {/* Action chips */}
          <div className="mt-4 flex items-center justify-between text-[10px] font-medium text-ink/70">
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">Retake</span>
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm">Voice / Text</span>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around border-t border-ink/5 bg-cream/95 px-4 py-3 text-[9px] font-medium backdrop-blur">
          {["Home", "Add", "Recipes", "Saved"].map((label, i) => (
            <div
              key={label}
              className={`flex flex-col items-center gap-1 ${i === 1 ? "text-brand" : "text-ink/40"}`}
            >
              <div className={`h-4 w-4 rounded-full ${i === 1 ? "bg-brand/15" : "bg-ink/10"}`} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating callout */}
      <div className="absolute -right-6 top-24 hidden w-44 rounded-2xl border border-stone-100 bg-white p-4 shadow-xl md:block">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <p className="text-[11px] font-semibold uppercase tracking-wider text-ink/40">
            Identified
          </p>
        </div>
        <p className="mt-2 text-sm font-semibold text-ink">2 eggs, spinach</p>
        <p className="text-xs text-ink/50">+ half a lemon</p>
      </div>

      <div className="absolute -left-8 bottom-24 hidden w-40 rounded-2xl border border-brand/20 bg-peach/40 p-4 shadow-xl md:block">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">
          Recipe ready
        </p>
        <p className="mt-1 font-serif text-base leading-tight text-ink">
          Zesty lemon pasta
        </p>
      </div>
    </div>
  );
}

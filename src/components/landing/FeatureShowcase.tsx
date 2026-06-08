import heroIngredients from "@/assets/hero-ingredients.jpg";
import { Reveal } from "./Reveal";

export function FeatureShowcase() {
  return (
    <section id="mission" className="scroll-mt-24 overflow-hidden bg-cream py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:gap-24">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img
              src={heroIngredients}
              alt="Fresh zucchini, lemon, basil, red onion and cherry tomatoes on warm linen"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1280}
              height={1600}
            />
            <div className="absolute inset-x-8 bottom-8 rounded-2xl border border-white/60 bg-white/85 p-5 shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-emerald-500 text-sm font-bold text-white">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">Identified: 6 ingredients</p>
                  <p className="text-xs text-ink/50">All fresh. Use the basil first.</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="space-y-12">
          <Reveal delay={120}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-brand">
              Less waste, more taste
            </p>
            <h2 className="mb-6 font-serif text-4xl leading-tight text-ink md:text-5xl">
              About a third of household food ends up in the bin.
            </h2>
            <p className="text-lg leading-relaxed text-ink/65">
              Scraps was built to flip that. Cook what you already own, prioritize what's about to turn, and rediscover the back of your fridge as a feature, not a problem.
            </p>
          </Reveal>

          <div className="space-y-8 border-t border-ink/10 pt-8">
            <Reveal delay={200} className="flex gap-6">
              <div className="flex size-14 flex-none items-center justify-center rounded-2xl bg-brand-light/20 font-serif text-2xl font-bold text-brand">
                A
              </div>
              <div>
                <h4 className="mb-1 font-serif text-xl font-semibold text-ink">
                  Talk, don't type
                </h4>
                <p className="text-ink/60">
                  Scraps listens for context — your mood, your time, the dietary line you don't cross.
                </p>
              </div>
            </Reveal>
            <Reveal delay={280} className="flex gap-6">
              <div className="flex size-14 flex-none items-center justify-center rounded-2xl bg-brand-light/20 font-serif text-2xl font-bold text-brand">
                B
              </div>
              <div>
                <h4 className="mb-1 font-serif text-xl font-semibold text-ink">
                  Infinite variations
                </h4>
                <p className="text-ink/60">
                  No chicken? Swap to tofu in one tap and the rest of the recipe adjusts around it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}


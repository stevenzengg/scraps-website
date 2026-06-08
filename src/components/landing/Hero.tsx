import { PhoneMockup } from "./PhoneMockup";
import { WaitlistForm } from "./WaitlistForm";

export function Hero() {
  return (
    <header className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-12 lg:grid-cols-2 lg:pt-16">
      <div className="max-w-2xl">
        <div className="reveal mb-6 inline-block rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand">
          Introducing Scraps
        </div>
        <h1 className="reveal mb-8 font-serif text-5xl leading-[1.05] text-ink md:text-7xl" style={{ animationDelay: "80ms" }}>
          Turn what you have into what you'll{" "}
          <span className="italic text-brand underline decoration-brand-light/40 underline-offset-[10px]">
            love.
          </span>
        </h1>
        <p className="reveal mb-10 max-w-xl text-lg leading-relaxed text-ink/65 md:text-xl" style={{ animationDelay: "160ms" }}>
          Stop the 7&nbsp;PM fridge-staring marathon. Scan what's on the shelf, say what you're craving, and Scraps builds a recipe from what you already have.
        </p>
        <div className="reveal" style={{ animationDelay: "240ms" }}>
          <WaitlistForm />
          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="size-7 rounded-full border-2 border-cream bg-peach" />
              <div className="size-7 rounded-full border-2 border-cream bg-brand-light" />
              <div className="size-7 rounded-full border-2 border-cream bg-brand" />
            </div>
            <span className="text-sm font-medium text-ink/50">
              2,400+ home cooks already waiting
            </span>
          </div>
        </div>
      </div>

      <div className="reveal relative flex justify-center" style={{ animationDelay: "320ms" }}>
        <PhoneMockup />
      </div>
    </header>
  );
}

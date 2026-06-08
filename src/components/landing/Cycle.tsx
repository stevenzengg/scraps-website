import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Scan", body: "Point your camera at the shelf. Scraps spots every stray onion and lonely jar." },
  { n: "02", title: "Talk", body: "\"Something spicy, fifteen minutes.\" Speak it. Scraps understands context, not keywords." },
  { n: "03", title: "Generate", body: "A custom recipe in seconds — built from your exact inventory, not someone else's pantry." },
  { n: "04", title: "Cook", body: "Clear, narrated steps. No jargon, no missing ingredients, no fancy techniques." },
  { n: "05", title: "Save", body: "Love it? Save it to your cookbook. Scraps learns your palate every time you cook." },
];

export function Cycle() {
  return (
    <section id="how" className="scroll-mt-24 bg-ink py-32 text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-brand-light">
            The Method
          </p>
          <h2 className="mb-6 font-serif text-4xl leading-tight md:text-6xl">
            From empty-fridge anxiety to dinner, in five beats.
          </h2>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-5 md:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="group relative">
              <div className="mb-6 flex items-baseline gap-3">
                <span className="font-serif text-3xl text-brand">{s.n}</span>
                <span className="text-xs font-medium uppercase tracking-widest text-cream/40">
                  Step
                </span>
              </div>
              <h3 className="mb-3 font-serif text-2xl">{s.title}</h3>
              <p className="text-sm leading-relaxed text-cream/60">{s.body}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-px w-6 bg-cream/15 md:block" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


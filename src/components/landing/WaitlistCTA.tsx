import { WaitlistForm } from "./WaitlistForm";
import { Reveal } from "./Reveal";

export function WaitlistCTA() {
  return (
    <section id="waitlist" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-[3rem] bg-brand p-12 md:p-24">
          <div className="absolute -right-24 -top-24 size-96 rounded-full bg-brand-light opacity-50 blur-[100px]" />
          <div className="absolute -bottom-24 -left-16 size-96 rounded-full bg-peach opacity-40 blur-[100px]" />

          <div className="relative z-10 max-w-2xl text-white">
            <h2 className="mb-8 font-serif text-5xl leading-tight md:text-6xl">
              Ready to cook smarter?
            </h2>
            <p className="mb-12 text-xl leading-relaxed text-white/80">
              We're rolling out access in small batches so every cook gets a real seat at the table. Drop your email and we'll send your invite.
            </p>
            <WaitlistForm variant="dark" />
            <p className="mt-6 text-sm text-white/60">
              Join 2,400+ on the list. No spam — just your launch invite.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}


import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

type Variant = "light" | "dark";

export function WaitlistForm({ variant = "light", source = "landing" }: { variant?: Variant; source?: string }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!/^\S+@\S+\.\S+$/.test(trimmed)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    const { error } = await supabase
      .from("waitlist_signups")
      .insert({ email: trimmed, source });
    setLoading(false);
    if (error) {
      if (error.code === "23505") {
        toast.success("You're already on the list. We'll be in touch.");
        setEmail("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      return;
    }
    setEmail("");
    toast.success("You're on the list. We'll be in touch.");
  }

  const isDark = variant === "dark";

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full max-w-md flex-col gap-3 sm:flex-row ${isDark ? "" : ""}`}
    >
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={
          isDark
            ? "h-14 flex-1 rounded-2xl border border-white/20 bg-white/10 px-5 text-white placeholder:text-white/50 backdrop-blur-sm transition focus:border-white/40 focus:bg-white/15 focus:outline-none"
            : "h-14 flex-1 rounded-2xl border border-ink/10 bg-white px-5 text-ink placeholder:text-ink/40 shadow-sm transition focus:border-brand/40 focus:outline-none focus:ring-4 focus:ring-brand/10"
        }
      />
      <button
        type="submit"
        disabled={loading}
        className={
          isDark
            ? "h-14 whitespace-nowrap rounded-2xl bg-white px-7 font-semibold text-brand shadow-xl transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
            : "h-14 whitespace-nowrap rounded-2xl bg-brand px-7 font-semibold text-white shadow-lg shadow-brand/20 transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
        }
      >
        {loading ? "Adding…" : "Join the waitlist"}
      </button>
    </form>
  );
}

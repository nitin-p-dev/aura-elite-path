import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { AuraBackdrop } from "@/components/aura-backdrop";
import { Button } from "@/components/ui/button";
import { steps, successStories } from "@/lib/aura-data";
import { StoriesCarousel } from "@/components/stories-carousel";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How Credencementor Works — Four Steps" },
      {
        name: "description",
        content:
          "Pick your exam, pick a tier, get matched with a mentor, and run a weekly structure of planning, drills and review.",
      },
      { property: "og:title", content: "How Credencementor Works — Four Steps" },
      {
        property: "og:description",
        content: "From first call to weekly rhythm — the whole Credencementor mentorship flow in four steps.",
      },
    ],
  }),
  component: HowItWorks,
});

const detail = [
  "Tell us the exam and the attempt. Every track has its own mentors, drills and calendar — nothing is generic.",
  "Choose how much support you want. Basic gives structure; Premium gives a subject mentor plus a strategy mentor.",
  "A 20-minute diagnostic call maps your gaps, then we pair you with the mentor whose method fits how you think.",
  "Monday plan, midweek drills, weekend mock review. Your mentor sees the same dashboard you do.",
];

function HowItWorks() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative px-4 pb-16 pt-14 sm:px-6">
      <AuraBackdrop />
      <div className="relative mx-auto max-w-5xl">
        <h1 className="text-4xl font-semibold sm:text-5xl">How it works</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Four steps, and then a rhythm you repeat until the exam. Tap a step to expand it.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <ol className="relative space-y-2 border-l border-border pl-6">
            {steps.map((s, i) => (
              <li key={s.title}>
                <button
                  onClick={() => setActive(i)}
                  className={`relative block w-full rounded-2xl px-4 py-4 text-left transition-all duration-300 ${
                    active === i ? "glass shadow-soft" : "hover:bg-accent/10"
                  }`}
                >
                  <span
                    className={`absolute -left-[34px] top-5 grid h-6 w-6 place-items-center rounded-full text-[11px] font-semibold transition-colors ${
                      active === i
                        ? "bg-linear-to-br from-gold-soft to-gold text-navy-deep"
                        : "border border-border bg-background text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="block font-semibold">{s.title}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{s.body}</span>
                </button>
              </li>
            ))}
          </ol>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass h-fit rounded-[2rem] p-8 lg:sticky lg:top-28"
          >
            <span className="font-display text-5xl text-gold/60">0{active + 1}</span>
            <h2 className="mt-4 text-2xl font-semibold">{steps[active]?.title}</h2>
            <p className="mt-3 leading-relaxed text-foreground/85">{detail[active]}</p>
            <Button asChild variant="gold" size="lg" className="mt-8">
              <Link to="/contact">Start with a free call</Link>
            </Button>
          </motion.div>
        </div>

        <section className="mt-20">
          <h2 className="text-3xl font-semibold">Where it lands</h2>
          <StoriesCarousel stories={successStories} />
        </section>
      </div>
    </div>
  );
}

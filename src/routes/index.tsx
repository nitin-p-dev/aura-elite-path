import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, ShieldCheck, Award, TrendingUp } from "lucide-react";
import { AuraBackdrop } from "@/components/aura-backdrop";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { exams, institutions, mentors, tiers, successStories, steps } from "@/lib/aura-data";
import { personas } from "@/lib/persona-data";
import { StoriesCarousel } from "@/components/stories-carousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Credencementor — Elite Mentorship for JEE, IAT, CAT & GATE" },
      {
        name: "description",
        content:
          "1:1 mentorship from IISc, IIT and IIM toppers. Pick your exam, pick a tier, get matched, and follow a weekly structure that moves ranks.",
      },
      { property: "og:title", content: "Credencementor — Elite Mentorship for JEE, IAT, CAT & GATE" },
      {
        property: "og:description",
        content: "Mentors from IISc, IIT Bombay, IIT Madras and the top IIMs. Book a free call.",
      },
    ],
  }),
  component: Home,
});

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-24 pt-20 sm:px-6 sm:pt-28">
        <AuraBackdrop dense />
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Mentors from IISc · IIT · IIM
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] sm:text-6xl"
          >
            Preparation is lonely.
            <br />
            <span className="text-gradient-gold">Mentorship isn't.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Credencementor pairs serious JEE, IAT, CAT and GATE aspirants with mentors who have already
            cracked the paper — and gives you a weekly structure you can actually keep.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild variant="gold" size="xl">
              <Link to="/contact">Book a Free Call</Link>
            </Button>
            <Button asChild variant="outlineGold" size="xl">
              <Link to="/mentors">Meet the mentors</Link>
            </Button>
          </motion.div>

          {/* Who it's for */}
          <motion.div {...fade} className="mt-16 grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-3">
            {personas.map((c) => (
              <Link
                key={c.slug}
                to={c.href}
                className="glass group rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-gold hover:ring-1 hover:ring-gold/40"
              >
                <c.icon className="h-5 w-5 text-gold" />
                <p className="mt-3 font-semibold">{c.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-gold opacity-70 transition-opacity group-hover:opacity-100">
                  Read the plan{" "}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-y border-border/60 py-6">
        <p className="px-4 text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Mentors currently at
        </p>
        <div className="mt-5 overflow-hidden">
          <div className="marquee-track flex w-max gap-4">
            {[...institutions, ...institutions].map((name, i) => (
              <Link
                key={`${name}-${i}`}
                to="/mentors"
                search={{ college: name }}
                className="glass whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-medium text-foreground/80 transition-all duration-300 hover:bg-accent/20 hover:text-gold hover:ring-1 hover:ring-gold/40"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Exams */}
      <section className="px-4 py-20 sm:px-6">
        <motion.div {...fade} className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Four exams. Four different games.</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Each track has its own mentors, its own drills and its own weekly rhythm.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {exams.map((e) => (
              <Link
                key={e.key}
                to="/mentors"
                className="glass group rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <p className="font-display text-2xl font-semibold text-gradient-gold">{e.label}</p>
                <p className="mt-2 text-sm text-muted-foreground">{e.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-gold">
                  See mentors <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mentor profile cards */}
      <section className="px-4 py-10 sm:px-6">
        <motion.div {...fade} className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Meet the minds behind the ranks.</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Top-100 rankers from IIT, IISc and IIM who treat your paper like their own.
          </p>
          <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4 scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible">
            {mentors.slice(0, 4).map((m) => (
              <Link
                key={m.id}
                to="/mentors/$mentorId"
                params={{ mentorId: m.id }}
                className="glass group w-[260px] shrink-0 snap-start rounded-3xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:w-auto"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14 ring-2 ring-gold/20 ring-offset-2 ring-offset-background transition-all group-hover:ring-gold/40">
                    <AvatarImage src={`/mentors/${m.id}.jpg`} alt={m.name} />
                    <AvatarFallback className="bg-gradient-to-br from-gold-soft to-gold text-navy-deep font-semibold">
                      {m.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{m.name}</p>
                    <p className="text-xs text-muted-foreground">{m.exam} · {m.rank}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground/80">{m.college}</span>
                  <Badge variant="outline" className="text-[10px] border-gold/30 text-gold">
                    {m.subjects[0]}
                  </Badge>
                </div>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{m.headline}</p>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Tier teaser */}
      <section className="px-4 py-16 sm:px-6">
        <motion.div {...fade} className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:flex sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Four tiers, one ladder.</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Start light, move up when you're ready. No lock-in, no upsell calls.
              </p>
            </div>
            <Button asChild variant="outlineGold" size="lg">
              <Link to="/pricing">Compare everything</Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tiers.map((t) => (
              <div
                key={t.key}
                className={`glass rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 ${
                  t.featured ? "ring-1 ring-gold/50 shadow-gold" : ""
                }`}
              >
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  {t.featured && (
                    <span className="rounded-full bg-accent/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold">
                      Most chosen
                    </span>
                  )}
                  {t.scarcity && (
                    <span className="rounded-full border border-gold/20 px-2.5 py-0.5 text-[10px] font-medium text-gold/80">
                      {t.scarcity}
                    </span>
                  )}
                </div>
                <p className="font-display text-xl font-semibold">{t.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>
                <p className="mt-4 text-2xl font-semibold">{t.price}</p>
                <p className="text-xs text-muted-foreground">{t.cadence}</p>
                <p className="mt-4 text-sm text-muted-foreground">{t.weekly}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* The Credencementor Promise */}
      <section className="px-4 py-16 sm:px-6">
        <motion.div {...fade} className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold">
              <ShieldCheck className="h-3.5 w-3.5" /> The Credencementor Promise
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              We only win when you win.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Two guarantees built for students who are serious about moving ranks.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="glass relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <Award className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">100% Refund for Top Ranks</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Full fee refund if you secure JEE Advanced AIR under 1000, or IAT AIR under 200. We reward absolute excellence.
                </p>
              </div>
            </div>
            <div className="glass relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
              <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Performance-Based Upgrades</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Consistent top performers in weekly drills get automatically upgraded to the Premium 1:1 Tier, entirely on us.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How it works teaser */}
      <section className="px-4 py-16 sm:px-6">
        <motion.div {...fade} className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">How it works</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="glass rounded-3xl p-6">
                <span className="font-display text-3xl text-gold/70">0{i + 1}</span>
                <p className="mt-3 font-semibold">{s.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
          <Button asChild variant="outlineGold" size="lg" className="mt-6">
            <Link to="/how-it-works">See the full flow</Link>
          </Button>
        </motion.div>
      </section>

      {/* Success stories */}
      <section className="px-4 py-16 sm:px-6">
        <motion.div {...fade} className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Rank movement, not testimonials theatre.</h2>
          <StoriesCarousel stories={successStories} />
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:px-6">
        <motion.div {...fade} className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">Common doubts.</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
            The questions we hear most often before a student books their first call.
          </p>
          <Accordion type="single" collapsible className="mt-8 glass divide-y divide-border/40 rounded-3xl px-6">
            <AccordionItem value="refund-policy" className="border-border/40">
              <AccordionTrigger className="text-sm sm:text-base">
                What is the refund policy?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Full fee refund if you secure JEE Advanced AIR under 1000, or IAT AIR under 200. We
                reward absolute excellence and only win when your rank proves it.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="upgrade-tier" className="border-border/40">
              <AccordionTrigger className="text-sm sm:text-base">
                Can I upgrade my tier mid-month?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                Yes, you can switch anytime. We also auto-upgrade exceptional students to Premium
                1:1 for free based on consistent top performance in weekly drills.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="matching-call" className="border-border/40">
              <AccordionTrigger className="text-sm sm:text-base">
                How does the 20-minute matching call work?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                We diagnose your prep level — whether you are Plateaued, Self-studier, Repeater or
                any other persona — and pair you with a mentor who cracked the exact same hurdles.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6">
        <motion.div
          {...fade}
          className="glass relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] px-6 py-14 text-center"
        >
          <AuraBackdrop />
          <div className="relative">
            <h2 className="text-3xl font-semibold sm:text-4xl">Twenty minutes. Zero pressure.</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Tell us where you're stuck. We'll tell you honestly whether Credencementor helps.
            </p>
            <Button asChild variant="gold" size="xl" className="mt-8">
              <Link to="/contact">Book a Free Call</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

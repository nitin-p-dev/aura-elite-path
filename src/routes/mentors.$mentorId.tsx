import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, CalendarClock, PlayCircle, Quote } from "lucide-react";
import { AuraBackdrop } from "@/components/aura-backdrop";
import { Button } from "@/components/ui/button";
import { mentors } from "@/lib/aura-data";

export const Route = createFileRoute("/mentors/$mentorId")({
  loader: ({ params }) => {
    const mentor = mentors.find((m) => m.id === params.mentorId);
    if (!mentor) throw notFound();
    return { mentor };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Mentor unavailable — Credencementor" }, { name: "robots", content: "noindex" }],
      };
    }
    const { mentor } = loaderData;
    const title = `${mentor.name} — ${mentor.exam} Mentor at Credencementor`;
    const description = `${mentor.rank}, ${mentor.college}. ${mentor.headline} Subjects: ${mentor.subjects.join(", ")}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: MentorNotFound,
  component: MentorProfile,
});

function MentorNotFound() {
  return (
    <div className="px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold">Mentor not found</h1>
      <Button asChild variant="outlineGold" size="lg" className="mt-6">
        <Link to="/mentors">Back to mentor hub</Link>
      </Button>
    </div>
  );
}

function MentorProfile() {
  const { mentor } = Route.useLoaderData();

  return (
    <div className="relative px-4 pb-16 pt-10 sm:px-6">
      <AuraBackdrop />
      <div className="relative mx-auto max-w-5xl">
        <Link
          to="/mentors"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" /> Mentor hub
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mt-6 rounded-[2rem] p-6 sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
            <div className="min-w-0">
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-gold">
                {mentor.exam} · {mentor.rank}
              </span>
              <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{mentor.name}</h1>
              <p className="mt-2 text-muted-foreground">
                {mentor.college} · {mentor.years} years mentoring
              </p>
              <p className="mt-4 max-w-lg text-foreground/85">{mentor.headline}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {mentor.subjects.map((s) => (
                  <span key={s} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <Button asChild variant="gold" size="xl" className="shrink-0">
              <Link to="/contact">Book a Free Call</Link>
            </Button>
          </div>
        </motion.div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            {/* Intro video placeholder */}
            <div className="glass overflow-hidden rounded-3xl">
              <div className="relative grid aspect-video place-items-center bg-linear-to-br from-navy/25 to-gold/10">
                <div className="text-center">
                  <PlayCircle className="mx-auto h-12 w-12 text-gold" />
                  <p className="mt-3 text-sm text-muted-foreground">
                    Intro video · {mentor.name} (coming soon)
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">The exact strategy</h2>
              <ol className="mt-5 space-y-4">
                {mentor.strategy.map((s, i) => (
                  <li key={s} className="flex gap-4">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-xs font-semibold text-gold">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/85">{s}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="glass rounded-3xl p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">What students say</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {mentor.testimonials.map((t) => (
                  <div key={t.student} className="rounded-2xl border border-border/70 p-5">
                    <Quote className="h-4 w-4 text-gold" />
                    <p className="mt-3 text-sm leading-relaxed text-foreground/85">“{t.text}”</p>
                    <p className="mt-4 text-sm font-semibold">{t.student}</p>
                    <p className="mt-2 inline-block rounded-full bg-accent/15 px-3 py-1 text-xs text-gold">
                      {t.delta}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="glass h-fit rounded-3xl p-6 sm:p-8 lg:sticky lg:top-28">
            <div className="flex items-center gap-2">
              <CalendarClock className="h-4.5 w-4.5 text-gold" />
              <h2 className="text-xl font-semibold">Available slots</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">All times IST, weekly recurring.</p>
            <div className="mt-5 space-y-3">
              {mentor.slots.map((slot) => (
                <div
                  key={slot}
                  className="flex items-center justify-between rounded-2xl border border-border/70 px-4 py-3 text-sm transition-colors hover:border-gold/60"
                >
                  <span>{slot}</span>
                  <span className="text-xs text-gold">Open</span>
                </div>
              ))}
            </div>
            <Button asChild variant="outlineGold" className="mt-6 w-full" size="lg">
              <Link to="/pricing">See tiers with {mentor.name.split(" ")[0]}</Link>
            </Button>
          </aside>
        </div>
      </div>
    </div>
  );
}

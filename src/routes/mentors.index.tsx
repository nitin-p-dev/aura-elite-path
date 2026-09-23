import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { AuraBackdrop } from "@/components/aura-backdrop";
import { mentors, exams, type ExamKey } from "@/lib/aura-data";

export const Route = createFileRoute("/mentors/")({
  validateSearch: (search: Record<string, unknown>): { college?: string } => {
    const raw = search["college"];
    return typeof raw === "string" && raw ? { college: raw } : {};
  },
  head: () => ({
    meta: [
      { title: "Mentor Hub — Aura Elite" },
      {
        name: "description",
        content:
          "Browse Aura Elite mentors by exam: JEE, IAT, CAT and GATE. See ranks, colleges, subjects and open slots before you book.",
      },
      { property: "og:title", content: "Mentor Hub — Aura Elite" },
      {
        property: "og:description",
        content: "Filter mentors by exam and open a full profile with strategy, slots and testimonials.",
      },
    ],
  }),
  component: MentorHub,
});

function MentorHub() {
  const { college } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [filter, setFilter] = useState<ExamKey | "ALL">("ALL");
  const colleges = Array.from(new Set(mentors.map((m) => m.college))).sort();

  const list = mentors.filter(
    (m) => (filter === "ALL" || m.exam === filter) && (!college || m.college === college),
  );

  return (
    <div className="relative px-4 pb-16 pt-14 sm:px-6">
      <AuraBackdrop />
      <div className="relative mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold sm:text-5xl">The mentor hub</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Every mentor here has cleared the exam they teach. Filter by track, then open a profile to
          read their actual weekly method.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {(["ALL", ...exams.map((e) => e.key)] as const).map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                filter === key
                  ? "bg-linear-to-br from-gold-soft to-gold text-navy-deep shadow-gold"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {key === "ALL" ? "All mentors" : key}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs uppercase tracking-wide text-muted-foreground">
            Institution
          </span>
          <button
            onClick={() => navigate({ search: {} })}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
              !college
                ? "bg-accent/20 text-gold"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {colleges.map((c) => (
            <button
              key={c}
              onClick={() => navigate({ search: { college: c } })}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 ${
                college === c
                  ? "bg-accent/20 text-gold"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {college && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground">Filtered by institution</span>
            <button
              onClick={() => navigate({ search: {} })}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gold transition-colors hover:bg-accent/20"
            >
              {college} <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}


        {list.length === 0 && (
          <p className="mt-10 text-muted-foreground">
            No mentors match this combination yet — try clearing a filter.
          </p>
        )}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((m, i) => (
            <motion.div
              key={m.id}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                to="/mentors/$mentorId"
                params={{ mentorId: m.id }}
                className="glass group flex h-full flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                  <div className="min-w-0">
                    <p className="truncate font-display text-xl font-semibold">{m.name}</p>
                    <p className="text-sm text-muted-foreground">{m.college}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-gold">
                    {m.exam}
                  </span>
                </div>

                <p className="mt-4 text-sm text-foreground/85">{m.headline}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {m.subjects.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-6 text-sm">
                  <span className="font-semibold text-gradient-gold">{m.rank}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-gold">
                    View profile <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

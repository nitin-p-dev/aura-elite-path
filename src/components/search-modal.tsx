import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { mentors, exams, tiers } from "@/lib/aura-data";

type Result = { label: string; sub: string; to: string; params?: Record<string, string> };

export function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");

  const results = useMemo<Result[]>(() => {
    const pool: Result[] = [
      ...mentors.map((m) => ({
        label: m.name,
        sub: `${m.exam} · ${m.rank} · ${m.college}`,
        to: "/mentors/$mentorId",
        params: { mentorId: m.id },
      })),
      ...exams.map((e) => ({ label: `${e.label} mentorship`, sub: e.blurb, to: "/mentors" })),
      ...tiers.map((t) => ({ label: `${t.name} tier`, sub: `${t.price} · ${t.weekly}`, to: "/pricing" })),
      { label: "How it works", sub: "Pick exam → tier → match → weekly structure", to: "/how-it-works" },
    ];
    const needle = q.trim().toLowerCase();
    if (!needle) return pool.slice(0, 6);
    return pool
      .filter((r) => (r.label + r.sub).toLowerCase().includes(needle))
      .slice(0, 8);
  }, [q]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-start justify-center bg-navy-deep/60 px-4 pt-[12vh] backdrop-blur-md">
      <button aria-label="Close search" className="absolute inset-0 cursor-default" onClick={onClose} />
      <div className="glass relative w-full max-w-2xl rounded-3xl p-2 shadow-soft">
        <div className="flex items-center gap-3 px-4 py-3">
          <Search className="h-5 w-5 shrink-0 text-gold" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search mentors, exams or resources…"
            className="min-w-0 flex-1 bg-transparent text-base text-foreground outline-hidden placeholder:text-muted-foreground"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="max-h-[52vh] overflow-y-auto border-t border-border/60 p-2">
          {results.length === 0 && (
            <p className="px-4 py-8 text-center text-sm text-muted-foreground">
              Nothing matched “{q}”. Try “CAT”, “Gold” or a mentor name.
            </p>
          )}
          {results.map((r) => (
            <Link
              key={r.label}
              to={r.to}
              params={r.params as never}
              onClick={onClose}
              className="flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-colors hover:bg-accent/15"
            >
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-foreground">{r.label}</span>
                <span className="block truncate text-xs text-muted-foreground">{r.sub}</span>
              </span>
              <span className="shrink-0 text-xs text-gold">Open</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { AuraBackdrop } from "@/components/aura-backdrop";
import { Button } from "@/components/ui/button";
import { tiers } from "@/lib/aura-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Tiers & Pricing — Aura Elite" },
      {
        name: "description",
        content:
          "Compare Aura Elite's Basic, General, Gold and Premium mentorship tiers: mentor access, batch size, weekly structure and price.",
      },
      { property: "og:title", content: "Tiers & Pricing — Aura Elite" },
      {
        property: "og:description",
        content: "Four tiers from light structure to a full 1:1 mentorship cabinet. No lock-in.",
      },
    ],
  }),
  component: Pricing,
});

const rows: { label: string; get: (t: (typeof tiers)[number]) => string }[] = [
  { label: "Mentor access", get: (t) => t.mentorAccess },
  { label: "Batch size", get: (t) => t.batchSize },
  { label: "Weekly structure", get: (t) => t.weekly },
  { label: "Price", get: (t) => `${t.price} ${t.cadence}` },
];

function enroll(tierName: string) {
  // Razorpay checkout integration placeholder.
  toast("Checkout coming soon", {
    description: `${tierName} will open a secure Razorpay checkout here.`,
  });
}

function Pricing() {
  return (
    <div className="relative px-4 pb-16 pt-14 sm:px-6">
      <AuraBackdrop />
      <div className="relative mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold sm:text-5xl">Tiers & pricing</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Everything is monthly. Switch tiers or stop whenever your prep changes shape.
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, i) => (
            <motion.div
              key={t.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`glass flex flex-col rounded-3xl p-6 ${
                t.featured ? "ring-1 ring-gold/50 shadow-gold" : ""
              }`}
            >
              {t.featured && (
                <span className="mb-3 inline-block w-fit rounded-full bg-accent/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold">
                  Most chosen
                </span>
              )}
              <p className="font-display text-2xl font-semibold">{t.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>
              <p className="mt-5 text-3xl font-semibold">{t.price}</p>
              <p className="text-xs text-muted-foreground">{t.cadence}</p>
              <ul className="mt-5 space-y-2.5">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {p}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => enroll(t.name)}
                variant={t.featured ? "gold" : "outlineGold"}
                size="lg"
                className="mt-6 w-full"
              >
                Enroll in {t.name}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="glass mt-12 overflow-x-auto rounded-3xl p-2">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="p-5 text-left text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Compare
                </th>
                {tiers.map((t) => (
                  <th key={t.key} className="p-5 text-left font-display text-lg font-semibold">
                    {t.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-border/60">
                  <td className="p-5 font-medium text-muted-foreground">{row.label}</td>
                  {tiers.map((t) => (
                    <td
                      key={t.key}
                      className={`p-5 align-top ${t.featured ? "bg-accent/8 text-foreground" : "text-foreground/85"}`}
                    >
                      {row.get(t)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-border/60">
                <td className="p-5" />
                {tiers.map((t) => (
                  <td key={t.key} className="p-5">
                    <Button
                      onClick={() => enroll(t.name)}
                      variant={t.featured ? "gold" : "outlineGold"}
                      size="lg"
                    >
                      Enroll
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Payments are processed securely via Razorpay. Checkout integration is pending activation.
        </p>

        <div className="glass mt-12 rounded-[2rem] p-8 text-center">
          <h2 className="text-2xl font-semibold">Not sure which tier fits?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Take the free call. We'll recommend the smallest tier that actually solves your problem.
          </p>
          <Button asChild variant="gold" size="xl" className="mt-6">
            <Link to="/contact">Book a Free Call</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

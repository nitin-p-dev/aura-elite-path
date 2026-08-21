import { createFileRoute } from "@tanstack/react-router";
import { PersonaPage } from "@/components/persona-page";
import { personaBySlug } from "@/lib/persona-data";

export const Route = createFileRoute("/plateaued-strategy")({
  head: () => ({
    meta: [
      { title: "Breaking a Score Plateau — Aura Mentorship" },
      {
        name: "description",
        content:
          "Mock scores stuck in the same band? Here's the leak-audit and drill plan Aura mentors use to restart rank movement.",
      },
      { property: "og:title", content: "Breaking a Score Plateau — Aura Mentorship" },
      {
        property: "og:description",
        content: "A leak audit, targeted drills and a re-test cycle to get your mocks moving again.",
      },
    ],
  }),
  component: () => <PersonaPage persona={personaBySlug["plateaued-strategy"]} />,
});

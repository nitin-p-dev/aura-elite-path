import { createFileRoute } from "@tanstack/react-router";
import { PersonaPage } from "@/components/persona-page";
import { personaBySlug } from "@/lib/persona-data";

export const Route = createFileRoute("/mocks-analysis")({
  head: () => ({
    meta: [
      { title: "The Repeat Year, Done Properly — Credencementor" },
      {
        name: "description",
        content:
          "Attempting again? Start with a question-by-question post-mortem, rebuild only what's weak, and train paper temperament.",
      },
      { property: "og:title", content: "The Repeat Year, Done Properly — Credencementor" },
      {
        property: "og:description",
        content: "Post-mortem, targeted rebuild and temperament work for a second attempt that actually moves.",
      },
    ],
  }),
  component: () => <PersonaPage persona={personaBySlug["mocks-analysis"]} />,
});

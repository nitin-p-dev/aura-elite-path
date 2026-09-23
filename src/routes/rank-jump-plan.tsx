import { createFileRoute } from "@tanstack/react-router";
import { PersonaPage } from "@/components/persona-page";
import { personaBySlug } from "@/lib/persona-data";

export const Route = createFileRoute("/rank-jump-plan")({
  head: () => ({
    meta: [
      { title: "Closing the Last Thousand Ranks — Credencementor" },
      {
        name: "description",
        content:
          "Missed your target college by a whisker? Fix attempt strategy, accuracy and nerve with an Credencementor mentor.",
      },
      { property: "og:title", content: "Closing the Last Thousand Ranks — Credencementor" },
      {
        property: "og:description",
        content: "Attempt strategy, accuracy ceilings and nerve rehearsal for near-miss aspirants.",
      },
    ],
  }),
  component: () => <PersonaPage persona={personaBySlug["rank-jump-plan"]} />,
});

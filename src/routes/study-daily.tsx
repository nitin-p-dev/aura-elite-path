import { createFileRoute } from "@tanstack/react-router";
import { PersonaPage } from "@/components/persona-page";
import { personaBySlug } from "@/lib/persona-data";

export const Route = createFileRoute("/study-daily")({
  head: () => ({
    meta: [
      { title: "Self-Study, With Structure — Credencementor" },
      {
        name: "description",
        content:
          "No coaching, no feedback loop? Credencementor gives self-studiers a weekly sheet, fixed doubt windows and a shared syllabus tracker.",
      },
      { property: "og:title", content: "Self-Study, With Structure — Credencementor" },
      {
        property: "og:description",
        content: "Weekly targets, doubt windows and pace tracking for aspirants preparing on their own.",
      },
    ],
  }),
  component: () => <PersonaPage persona={personaBySlug["study-daily"]} />,
});

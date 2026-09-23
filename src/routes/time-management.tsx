import { createFileRoute } from "@tanstack/react-router";
import { PersonaPage } from "@/components/persona-page";
import { personaBySlug } from "@/lib/persona-data";

export const Route = createFileRoute("/time-management")({
  head: () => ({
    meta: [
      { title: "Prep That Fits a Real Week — Aura Elite" },
      {
        name: "description",
        content:
          "Balancing college, a job or an internship with exam prep? Build a plan around the hours you actually own.",
      },
      { property: "og:title", content: "Prep That Fits a Real Week — Aura Elite" },
      {
        property: "og:description",
        content: "Honest capacity planning, high-yield sequencing and compressed reviews for busy aspirants.",
      },
    ],
  }),
  component: () => <PersonaPage persona={personaBySlug["time-management"]} />,
});

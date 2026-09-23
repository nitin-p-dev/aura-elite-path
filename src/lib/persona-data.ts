import type { LucideIcon } from "lucide-react";
import { Target, GraduationCap, Sparkles, LineChart, Clock } from "lucide-react";

export type PersonaSlug =
  | "plateaued-strategy"
  | "study-daily"
  | "mocks-analysis"
  | "rank-jump-plan"
  | "time-management";

export type Persona = {
  slug: PersonaSlug;
  href: `/${PersonaSlug}`;
  icon: LucideIcon;
  title: string;
  body: string;
  heading: string;
  intro: string;
  symptoms: string[];
  plan: { title: string; body: string }[];
};

export const personas: Persona[] = [
  {
    slug: "plateaued-strategy",
    href: "/plateaued-strategy",
    icon: Target,
    title: "The plateaued",
    body: "You study daily but your mocks stopped moving.",
    heading: "When the score stops moving",
    intro:
      "A plateau is almost never an effort problem. It is a feedback problem — you are repeating what you already know and avoiding what you don't.",
    symptoms: [
      "Mock scores hovering in the same 6-mark band for a month.",
      "Revision feels comfortable — because it covers strengths.",
      "No written record of why a question was lost.",
    ],
    plan: [
      { title: "Week 1 — Leak audit", body: "Your mentor maps every chapter that quietly costs marks and ranks them by recovery value." },
      { title: "Week 2-4 — Targeted drills", body: "Only the leaking topics get practice, in short timed sets with same-day review." },
      { title: "Week 5+ — Re-test", body: "Fresh sectionals prove the leak is closed before you move on." },
    ],
  },
  {
    slug: "study-daily",
    href: "/study-daily",
    icon: GraduationCap,
    title: "The self-studier",
    body: "No coaching, no feedback loop, plenty of doubt.",
    heading: "Self-study, with a witness",
    intro:
      "Self-study wins when it has structure and correction. Credencementor supplies both without dragging you into a 200-student classroom.",
    symptoms: [
      "You decide the day's plan at the start of the day.",
      "Doubts sit unresolved for days.",
      "No idea whether your pace matches the syllabus.",
    ],
    plan: [
      { title: "A weekly sheet", body: "Every Sunday your mentor issues the exact chapters, question counts and deadlines." },
      { title: "Doubt windows", body: "Fixed slots where you bring stuck problems instead of losing hours to them." },
      { title: "Pace tracking", body: "A shared syllabus tracker so you always know if you're ahead or behind." },
    ],
  },
  {
    slug: "mocks-analysis",
    href: "/mocks-analysis",
    icon: Sparkles,
    title: "The repeater",
    body: "One more attempt — this time with a plan and a witness.",
    heading: "The second attempt, done properly",
    intro:
      "A repeat year fails when it becomes a slower version of the first one. We start by dissecting what actually went wrong last time.",
    symptoms: [
      "Last attempt's paper was never analysed question by question.",
      "You're re-reading the same material from scratch.",
      "Motivation swings hard between weeks.",
    ],
    plan: [
      { title: "Post-mortem", body: "Your previous attempt is reconstructed: what was unknown, what was rushed, what was silly." },
      { title: "Rebuild, don't restart", body: "Strong chapters get maintenance, weak ones get rebuilding — never equal time." },
      { title: "Temperament work", body: "Paper strategy and pacing rehearsal for the final eight weeks." },
    ],
  },
  {
    slug: "rank-jump-plan",
    href: "/rank-jump-plan",
    icon: LineChart,
    title: "The near-miss",
    body: "You cleared the cut-off, but missed the college you wanted.",
    heading: "Closing the last thousand ranks",
    intro:
      "The gap between a good rank and a great one is rarely more syllabus. It is accuracy, selection and nerve.",
    symptoms: [
      "You attempt more questions than you should.",
      "Negative marking eats a visible chunk of your score.",
      "Selection instinct is untrained.",
    ],
    plan: [
      { title: "Attempt strategy", body: "A personal rule for which questions to skip in the first pass." },
      { title: "Accuracy ceiling", body: "Drills that reward precision over volume until accuracy stabilises." },
      { title: "Nerve rehearsal", body: "Full-length papers under real conditions, debriefed the same evening." },
    ],
  },
  {
    slug: "time-management",
    href: "/time-management",
    icon: Clock,
    title: "The over-committed",
    body: "College, internship or a job — and prep squeezed into the gaps.",
    heading: "Prep that fits a real week",
    intro:
      "You don't need twelve hours a day. You need a plan built around the hours you actually own.",
    symptoms: [
      "Study happens only on weekends, then guilt on weekdays.",
      "Plans assume free time you never get.",
      "Fatigue makes late-night sessions unproductive.",
    ],
    plan: [
      { title: "Honest capacity", body: "We count your real available hours before writing a single target." },
      { title: "High-yield first", body: "Chapters ordered by marks-per-hour, not by textbook sequence." },
      { title: "Compressed reviews", body: "Twenty-minute recall blocks that keep old chapters alive." },
    ],
  },
];

export const personaBySlug = Object.fromEntries(personas.map((p) => [p.slug, p])) as Record<
  PersonaSlug,
  Persona
>;

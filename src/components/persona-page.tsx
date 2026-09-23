import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { AuraBackdrop } from "@/components/aura-backdrop";
import { Button } from "@/components/ui/button";
import type { Persona } from "@/lib/persona-data";

export function PersonaPage({ persona }: { persona: Persona }) {
  const Icon = persona.icon;

  return (
    <div className="relative px-4 pb-20 pt-14 sm:px-6">
      <AuraBackdrop />
      <div className="relative mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Icon className="h-3.5 w-3.5 text-gold" /> {persona.title}
          </span>
          <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">{persona.heading}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{persona.intro}</p>
        </motion.div>

        <div className="glass mt-10 rounded-3xl p-6">
          <h2 className="text-xl font-semibold">Sound familiar?</h2>
          <ul className="mt-4 space-y-3">
            {persona.symptoms.map((s) => (
              <li key={s} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="mt-12 text-2xl font-semibold sm:text-3xl">What we'd do about it</h2>
        <div className="mt-6 grid gap-4">
          {persona.plan.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-3xl p-6"
            >
              <span className="font-display text-2xl text-gold/70">0{i + 1}</span>
              <p className="mt-2 font-semibold">{p.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass mt-12 rounded-3xl px-6 py-10 text-center">
          <h2 className="text-2xl font-semibold">Want this mapped to your syllabus?</h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
            Twenty minutes on a call is enough for us to tell you honestly whether Aura Elite helps.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">Book a Free Call</Link>
            </Button>
            <Button asChild variant="outlineGold" size="lg">
              <Link to="/mentors">Browse mentors</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

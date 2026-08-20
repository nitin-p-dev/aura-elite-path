import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { toast } from "sonner";
import { AuraBackdrop } from "@/components/aura-backdrop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { exams } from "@/lib/aura-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Free Call — Aura Mentorship" },
      {
        name: "description",
        content:
          "Book a free 20-minute diagnostic call with Aura. Tell us where you're stuck in JEE, IAT, CAT or GATE prep.",
      },
      { property: "og:title", content: "Book a Free Call — Aura Mentorship" },
      {
        property: "og:description",
        content: "A 20-minute, no-pressure call to map your gaps and match you with a mentor.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [exam, setExam] = useState("JEE");

  return (
    <div className="relative px-4 pb-16 pt-14 sm:px-6">
      <AuraBackdrop />
      <div className="relative mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h1 className="text-4xl font-semibold sm:text-5xl">Book a free call</h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            Twenty minutes with someone who has sat the paper. We'll map your gaps and tell you
            honestly whether mentorship is what you need right now.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
            <li>· No sales script, no urgency tactics.</li>
            <li>· A written summary of your gaps afterwards.</li>
            <li>· A tier recommendation — often the cheapest one.</li>
          </ul>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Request received", {
              description: "Our student desk will reach out within one working day.",
            });
            (e.target as HTMLFormElement).reset();
          }}
          className="glass rounded-[2rem] p-6 sm:p-8"
        >
          <div className="grid gap-4">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input id="name" required placeholder="Your name" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required placeholder="you@example.com" className="mt-2" />
            </div>
            <div>
              <Label>Exam</Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {exams.map((e) => (
                  <button
                    key={e.key}
                    type="button"
                    onClick={() => setExam(e.key)}
                    className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                      exam === e.key
                        ? "bg-linear-to-br from-gold-soft to-gold text-navy-deep"
                        : "border border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {e.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="message">Where are you stuck?</Label>
              <Textarea id="message" rows={4} placeholder="A few honest lines help us match you." className="mt-2" />
            </div>
            <Button type="submit" variant="gold" size="xl" className="mt-2 w-full">
              Request my free call
            </Button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle, Send } from "lucide-react";
import { AuraBackdrop } from "@/components/aura-backdrop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { exams } from "@/lib/aura-data";
import { useState } from "react";

export const Route = createFileRoute("/apply-mentor")({
  head: () => ({
    meta: [
      { title: "Apply as a Mentor — Aura Elite" },
      {
        name: "description",
        content:
          "Join Aura Elite as a mentor and help the next generation of JEE, IAT, CAT and GATE rankers. Flexible hours, revenue share, serious students.",
      },
      { property: "og:title", content: "Apply as a Mentor — Aura Elite" },
      {
        property: "og:description",
        content:
          "Top rankers from IIT, IISc and IIM: turn your preparation experience into a revenue-share mentorship practice.",
      },
    ],
  }),
  component: ApplyMentor,
});

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function ApplyMentor() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="relative px-4 pb-20 pt-14 sm:px-6">
      <AuraBackdrop />
      <div className="relative mx-auto max-w-2xl">
        <Button asChild variant="ghost" size="sm" className="-ml-3 mb-6 text-muted-foreground">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back home
          </Link>
        </Button>

        <motion.div {...fade}>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-gold">
            Revenue-share mentor openings
          </span>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Teach what you already cracked.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Aura Elite mentors are top rankers who work 1:1 and in small groups with serious aspirants.
            Flexible hours, fair revenue share, and students who actually do the work.
          </p>
        </motion.div>

        <motion.div
          {...fade}
          className="mt-10 grid gap-3 sm:grid-cols-3"
        >
          {[
            { label: "Earn per session", value: "Revenue share" },
            { label: "Set your hours", value: "Evenings & weekends" },
            { label: "Work from anywhere", value: "Fully remote" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4 text-center">
              <p className="text-2xl font-semibold text-gradient-gold">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          {...fade}
          className="glass mt-12 rounded-[2rem] p-6 sm:p-10"
        >
          {submitted ? (
            <div className="py-12 text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-gold" />
              <h2 className="mt-4 text-2xl font-semibold">Application received.</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                We review every mentor profile within 48 hours. If your rank and teaching fit align,
                we'll schedule a short 15-minute onboarding call.
              </p>
              <Button asChild variant="gold" className="mt-6">
                <Link to="/">Back to home</Link>
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" placeholder="Aarav Mehta" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="aarav@example.com" required />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="exam">Exam you cracked</Label>
                  <Select required>
                    <SelectTrigger id="exam">
                      <SelectValue placeholder="Select an exam" />
                    </SelectTrigger>
                    <SelectContent>
                      {exams.map((e) => (
                        <SelectItem key={e.key} value={e.key}>
                          {e.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rank">Rank / Percentile</Label>
                  <Input id="rank" placeholder="JEE AIR 145 or CAT 99.94 %ile" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="college">College / Institution</Label>
                <Input id="college" placeholder="IIT Bombay, IISc Bangalore, IIM Ahmedabad..." required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile">LinkedIn or resume link</Label>
                <Input id="profile" type="url" placeholder="https://linkedin.com/in/..." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="why">Why do you want to mentor?</Label>
                <Textarea
                  id="why"
                  placeholder="Tell us about your teaching style, subjects you can handle, and hours you can commit."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
                <Send className="mr-2 h-4 w-4" />
                Submit application
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

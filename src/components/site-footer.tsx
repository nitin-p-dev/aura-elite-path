import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-linear-to-br from-gold-soft to-gold text-sm font-bold text-navy-deep">
              C
            </span>
            <span className="font-display text-lg font-semibold">Aura Elite</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Mentorship for JEE, IAT, CAT and GATE — led by people who have already sat in that chair.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Explore</p>
          <div className="mt-3 flex flex-col gap-2 text-muted-foreground">
            <Link to="/mentors" className="hover:text-gold">Mentor hub</Link>
            <Link to="/pricing" className="hover:text-gold">Tiers & pricing</Link>
            <Link to="/how-it-works" className="hover:text-gold">How it works</Link>
            <Link to="/apply-mentor" className="hover:text-gold">Apply as a Mentor</Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Talk to us</p>
          <div className="mt-3 flex flex-col gap-2 text-muted-foreground">
            <Link to="/contact" className="hover:text-gold">Book a free call</Link>
            <a href="mailto:hello@auraelite.com" className="hover:text-gold">hello@auraelite.com</a>
            <span>9 AM – 11 PM IST</span>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aura Elite. All rights reserved.
      </p>
    </footer>
  );
}

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, X } from "lucide-react";

export function HelpWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-90 flex flex-col items-end gap-3">
      {open && (
        <div className="glass w-72 rounded-3xl p-4 shadow-soft">
          <p className="font-display text-base font-semibold">Need a nudge?</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Our student desk replies in under 10 minutes, 9 AM – 11 PM IST.
          </p>
          <a
            href="https://wa.me/919000000000"
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center gap-2 rounded-2xl bg-accent/15 px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent/25"
          >
            <MessageCircle className="h-4 w-4 text-gold" /> Chat on WhatsApp
          </a>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center gap-2 rounded-2xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4 text-gold" /> Book a free call
          </Link>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close help" : "Open help"}
        className="grid h-14 w-14 place-items-center rounded-full bg-linear-to-br from-gold-soft to-gold text-navy-deep shadow-gold transition-transform duration-300 hover:scale-105"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}

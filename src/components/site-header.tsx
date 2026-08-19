import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { SearchModal } from "./search-modal";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/mentors", label: "Mentors" },
  { to: "/pricing", label: "Tiers & Pricing" },
  { to: "/how-it-works", label: "How it works" },
];

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
        <div className="glass mx-auto flex max-w-6xl items-center gap-3 rounded-full px-4 py-2.5 shadow-soft sm:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-linear-to-br from-gold-soft to-gold text-sm font-bold text-navy-deep">
              A
            </span>
            <span className="truncate font-display text-lg font-semibold tracking-tight">Aura</span>
          </Link>

          <nav className="ml-4 hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-gold" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card/60 text-foreground transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <Search className="h-4.5 w-4.5" />
            </button>
            <ThemeToggle />
            <Button asChild variant="gold" size="lg" className="hidden sm:inline-flex">
              <Link to="/contact">Book a Free Call</Link>
            </Button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card/60 lg:hidden"
            >
              {menuOpen ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-3 shadow-soft lg:hidden">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-accent/15"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="gold" className="mt-2 w-full">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Book a Free Call
              </Link>
            </Button>
          </div>
        )}
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

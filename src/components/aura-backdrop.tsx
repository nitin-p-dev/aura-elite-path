/**
 * Subtle 3D-feeling backdrop: soft perspective grid + slow floating
 * geometric solids. Purely decorative, low contrast, no distraction.
 */
export function AuraBackdrop({ dense = false }: { dense?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 hero-glow" />

      {/* perspective grid floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-[45%] opacity-[0.22]"
        style={{
          perspective: "600px",
        }}
      >
        <div
          className="h-full w-full"
          style={{
            transform: "rotateX(72deg)",
            transformOrigin: "bottom center",
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--gold) 45%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--gold) 45%, transparent) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "linear-gradient(to top, black, transparent 78%)",
          }}
        />
      </div>

      {/* floating solids */}
      <div className="absolute left-[8%] top-[22%] h-28 w-28 float-slow rounded-3xl bg-linear-to-br from-gold-soft/50 to-gold/25 blur-[1px] shadow-gold" />
      <div
        className="absolute right-[12%] top-[16%] h-20 w-20 float-slow rounded-full bg-linear-to-br from-primary/25 to-gold/20"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="absolute right-[24%] bottom-[18%] h-16 w-16 float-slow rotate-45 rounded-2xl border border-gold/40 bg-gold/10"
        style={{ animationDelay: "-8s" }}
      />
      {dense && (
        <>
          <div
            className="absolute left-[28%] bottom-[24%] h-12 w-12 float-slow rounded-full border border-gold/30"
            style={{ animationDelay: "-2s" }}
          />
          <div
            className="absolute left-[62%] top-[38%] h-24 w-24 float-slow rounded-[2rem] bg-linear-to-tr from-gold/15 to-transparent"
            style={{ animationDelay: "-6s" }}
          />
        </>
      )}
    </div>
  );
}

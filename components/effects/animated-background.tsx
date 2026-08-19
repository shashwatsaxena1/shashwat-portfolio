export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.22),transparent_34%),radial-gradient(circle_at_top_right,rgba(29,78,216,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.13),transparent_38%)]" />
      <div className="grid-mask absolute inset-0 opacity-[0.08] dark:opacity-[0.14]" style={{ backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
      <div className="noise-overlay absolute inset-0 opacity-[0.045] mix-blend-overlay" />
      <div className="absolute left-[10%] top-[18%] h-56 w-56 animate-float rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-[10%] right-[12%] h-72 w-72 animate-float rounded-full bg-accent/10 blur-3xl [animation-delay:1.4s]" />
      <div className="absolute left-[50%] top-[55%] h-80 w-80 animate-float rounded-full bg-signal-blue/10 blur-3xl [animation-delay:2.1s]" />
    </div>
  );
}

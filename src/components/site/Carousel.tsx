import { useState, type ReactNode } from "react";

export function Carousel({
  items,
  label,
}: {
  items: ReactNode[];
  label: string;
}) {
  const [index, setIndex] = useState(0);
  const total = items.length;
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <div className="relative" role="region" aria-roledescription="carrusel" aria-label={label}>
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="w-full shrink-0 px-1" aria-hidden={i !== index}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-3 text-foreground shadow-[var(--shadow-soft)] transition hover:bg-gold hover:text-primary-foreground md:-left-5"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Siguiente"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-3 text-foreground shadow-[var(--shadow-soft)] transition hover:bg-gold hover:text-primary-foreground md:-right-5"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m9 6 6 6-6 6" />
        </svg>
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ir al elemento ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-gold" : "w-2 bg-border hover:bg-gold-soft"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

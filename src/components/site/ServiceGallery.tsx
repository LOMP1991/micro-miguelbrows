import { useRef, useState } from "react";

export function ServiceGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = images.length;
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <div className="relative h-56 w-full overflow-hidden">
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTouchStart={(e) => {
          const t = e.touches[0];
          if (t) touchStartX.current = t.clientX;
        }}
        onTouchEnd={(e) => {
          const t = e.changedTouches[0];
          if (touchStartX.current === null || !t) return;
          const dx = t.clientX - touchStartX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchStartX.current = null;
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={total > 1 ? `${alt} — foto ${i + 1}` : alt}
            width={1024}
            height={768}
            loading={i === 0 ? "eager" : "lazy"}
            className="h-56 w-full shrink-0 object-cover"
            draggable={false}
          />
        ))}
      </div>

      {total > 1 ? (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 z-20 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-card/90 text-foreground shadow-[var(--shadow-soft)] transition hover:scale-110 hover:bg-gold hover:text-primary-foreground active:scale-95"
          >
            <span className="text-sm font-bold leading-none">&#10094;</span>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Foto siguiente"
            className="absolute right-2 top-1/2 z-20 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-card/90 text-foreground shadow-[var(--shadow-soft)] transition hover:scale-110 hover:bg-gold hover:text-primary-foreground active:scale-95"
          >
            <span className="text-sm font-bold leading-none">&#10095;</span>
          </button>
          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-card/80 px-2.5 py-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                aria-label={`Ir a la foto ${i + 1}`}
                className={`h-1.5 cursor-pointer rounded-full transition-all ${
                  i === index ? "w-5 bg-gold" : "w-1.5 bg-border hover:bg-gold-soft"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

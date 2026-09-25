import { createFileRoute } from "@tanstack/react-router";

import heroImg from "@/assets/hero.jpg";
import teamImg from "@/assets/team-miguel.jpg";
import svcLabios from "@/assets/service-rejuvenecimiento-labial.png";
import svcYayira from "@/assets/service-yayira-lips.png";
import svcStrokes from "@/assets/service-strokes-ebrows.png";
import svcTerranova from "@/assets/service-terranova-ebrows.png";
import svcPestanas from "@/assets/service-pestanas-pelo-a-pelo.png";
import resultPestanas from "@/assets/result-pestanas.png";
import { Carousel } from "@/components/site/Carousel";
import {
  InstagramIcon,
  PhoneIcon,
  PinIcon,
  StarIcon,
  WhatsAppIcon,
} from "@/components/site/Icons";
import {
  ADDRESS,
  INSTAGRAM_MAIN,
  INSTAGRAM_SECOND,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Miguel Brows | Cejas y micropigmentación en Apartadó" },
      {
        name: "description",
        content:
          "Rejuvenecimiento labial, micropigmentación de cejas (Strokes y Terrranova) y pestañas pelo a pelo con técnicos certificados. 9 años de experiencia en Apartadó, Colombia. Agenda tu cita por WhatsApp.",
      },
      { property: "og:title", content: "Miguel Brows | Cejas, labios y pestañas en Apartadó" },
      {
        property: "og:description",
        content:
          "Rejuvenecimiento labial, micropigmentación de cejas y pestañas pelo a pelo. 9 años de experiencia y garantía estética incluida. Consultorio 309, Edificio Coomeva, Apartadó.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://micro-miguelbrows.vercel.app/" },
    ],
    links: [{ rel: "canonical", href: "https://micro-miguelbrows.vercel.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Miguel Brows",
          description:
            "Estudio de micropigmentación: rejuvenecimiento labial (Labios EYarira, Yayira Lips), cejas (Strokes y Terrranova EBrows) y pestañas pelo a pelo. 9 años de experiencia en Apartadó, Colombia.",
          url: "https://micro-miguelbrows.vercel.app/",
          telephone: PHONE_DISPLAY,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Edificio Coomeva, consultorio 309",
            addressLocality: "Apartadó",
            addressRegion: "Antioquia",
            addressCountry: "CO",
          },
          areaServed: "Apartadó, Antioquia, Colombia",
          sameAs: [INSTAGRAM_MAIN, INSTAGRAM_SECOND],
          makesOffer: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.text },
          })),
        }),
      },
    ],
  }),
  component: Landing,
});

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contacto", label: "Contacto" },
];

const SERVICES = [
  {
    img: svcLabios,
    title: "Rejuvenecimiento labial",
    tag: "Labios EYarira",
    text: "Pigmentación suave que devuelve color y vitalidad a tus labios, con acabado natural y uniforme.",
    note: null as string | null,
  },
  {
    img: svcYayira,
    title: "Yayira Lips",
    tag: "Labios",
    text: "Para las que quieren subir el nivel de intensidad y expresar su personalidad extrovertida y seductora. Requiere cita de consulta para evaluar tu tipo de piel y ruta de colorimetría.",
    note: "Requiere consulta previa",
  },
  {
    img: svcStrokes,
    title: "Strokes EBrows Machine",
    tag: "Cejas",
    text: "Técnica sublime pensada para quienes quieren ir de menos a más y conservar la mayor naturalidad posible.",
    note: "Duración 2 años · Garantía estética incluida",
  },
  {
    img: svcTerranova,
    title: "Terrranova EBrows",
    tag: "Cejas",
    text: "Técnica sublime para ir de menos a más conservando la mayor naturalidad posible, con un acabado definido y elegante.",
    note: "Duración 2 años · Garantía estética incluida",
  },
  {
    img: svcPestanas,
    title: "Pestañas pelos a pelo",
    tag: "Pestañas",
    text: "Requiere cita de consulta donde evaluamos tu tipo de piel y ruta de colorimetría. Una mirada con el toque que encanta.",
    note: "Garantía estética incluida · Duración estimada 2 años",
  },
];

const RESULTS = [
  { img: svcLabios, caption: "Rejuvenecimiento labial · Labios EYarira" },
  { img: svcStrokes, caption: "Strokes EBrows Machine · pelo a pelo" },
  { img: svcTerranova, caption: "Terrranova EBrows · acabado natural" },
  { img: resultPestanas, caption: "Pestañas pelos a pelo" },
];

const TESTIMONIALS = [
  {
    name: "Laura G.",
    text: "Quedé enamorada de mis cejas. El diseño respetó totalmente mi rostro y el acabado se ve natural.",
  },
  {
    name: "Daniela P.",
    text: "Atención impecable y un consultorio muy limpio. Me explicaron todo el proceso y el cuidado posterior.",
  },
  {
    name: "Carolina M.",
    text: "Llevaba años maquillándome las cejas todos los días. Ahora me levanto lista. Mil gracias, Miguel.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#inicio" className="font-display text-xl tracking-tight md:text-2xl">
            Miguel <span className="text-gold">Brows</span>
          </a>

          <img
            src={teamImg}
            alt="Miguel, técnico certificado de Miguel Brows"
            width={640}
            height={853}
            loading="lazy"
            className="hidden size-11 rounded-full border-2 border-gold object-cover shadow-[var(--shadow-soft)] md:block"
          />

          <nav aria-label="Navegación principal" className="flex items-center gap-4 text-sm">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hidden text-muted-foreground transition-colors hover:text-gold sm:inline"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium text-primary-foreground transition hover:brightness-95"
            >
              <WhatsAppIcon className="size-4" />
              Agendar
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="mx-auto max-w-6xl px-5 py-12 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <img
                src={heroImg}
                alt="Cliente de Miguel Brows con cejas micropigmentadas"
                width={1024}
                height={1280}
                className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-card)]"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="eyebrow">Estudio de cejas · Apartadó</p>
              <h1 className="mt-4 text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
                Cejas que enmarcan tu mirada
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Microblading, micropigmentación y diseño personalizado con técnicos
                certificados. Resultados naturales, simétricos y duraderos en un espacio
                pensado para tu comodidad.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-sand px-4 py-2 text-sm">
                <PinIcon className="size-4 text-gold" />
                Apartadó, Colombia
              </p>
              <div className="mt-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:brightness-95"
                >
                  <WhatsAppIcon className="size-5" />
                  Agendar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE MIGUEL */}
        <section id="nosotros" className="bg-sand/60 py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <p className="eyebrow">Sobre Miguel Brows</p>
              <h2 className="mt-3 text-3xl md:text-4xl">9 años perfeccionando tu mirada</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Durante 9 años hemos brindado nuestros procedimientos con la más alta calidad,
                cubriendo las expectativas y ofreciendo las garantías correspondientes. Miguel Brows
                es cosmetólogo, maquillador permanente y actualmente se desarrolla como futuro
                ingeniero sanitario.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Su equipo de trabajo está capacitado para ofrecerte una atención humana y profesional,
                con técnicas certificadas y materiales premium.
              </p>
              <ul className="mt-6 flex flex-wrap gap-3 text-sm">
                <li className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-[var(--shadow-soft)]">
                  <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" /> Cosmetólogo
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-[var(--shadow-soft)]">
                  <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" /> Maquillador permanente
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-[var(--shadow-soft)]">
                  <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" /> Futuro ingeniero sanitario
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={teamImg}
                alt="Miguel, cosmetólogo y maquillador permanente de Miguel Brows"
                width={640}
                height={853}
                loading="lazy"
                className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-card)]"
              />
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="mx-auto max-w-6xl px-5 py-12 md:py-20">
          <div className="max-w-xl">
            <p className="eyebrow">Nuestros servicios</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Técnicas pensadas para tu rostro</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              El precio de cada procedimiento se define en una evaluación previa. Agenda tu cita por
              WhatsApp y recibe atención personalizada.
            </p>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative">
                  <img
                    src={s.img}
                    alt={s.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-card px-3 py-1.5 text-[0.7rem] font-semibold tracking-wide text-gold shadow-[var(--shadow-soft)]">
                    {s.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  {s.note ? (
                    <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-gold-soft/60 px-3 py-1.5 text-[0.72rem] font-medium text-foreground">
                      <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
                      {s.note}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BARRA DE CONTACTO */}
        <section id="contacto" className="mx-auto max-w-6xl px-5 py-6 md:py-10">
          <div className="grid overflow-hidden rounded-3xl shadow-[var(--shadow-card)] md:grid-cols-2">
            <div className="bg-ink p-8 text-ink-foreground md:p-10">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-gold">
                Dónde estamos
              </p>
              <h3 className="mt-4 text-2xl text-ink-foreground">Visítanos</h3>
              <p className="mt-3 flex items-start gap-3 text-sm leading-relaxed opacity-85">
                <PinIcon className="mt-0.5 size-5 shrink-0 text-gold" />
                {ADDRESS}
              </p>
            </div>
            <div className="bg-sand p-8 md:p-10">
              <p className="eyebrow">Escríbenos</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-3 text-xl transition hover:text-gold"
              >
                <PhoneIcon className="size-5 text-gold" />
                {PHONE_DISPLAY}
              </a>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={INSTAGRAM_MAIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm shadow-[var(--shadow-soft)] transition hover:text-gold"
                >
                  <InstagramIcon className="size-4" /> @miguelbrows
                </a>
                <a
                  href={INSTAGRAM_SECOND}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm shadow-[var(--shadow-soft)] transition hover:text-gold"
                >
                  <InstagramIcon className="size-4" /> @micro_miguelbrows
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTADOS */}
        <section id="resultados" className="mx-auto max-w-4xl px-5 py-12 md:py-20">
          <div className="mb-10 text-center">
            <p className="eyebrow">Resultados reales</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Trabajos de nuestro estudio</h2>
          </div>
          <Carousel
            label="Resultados reales"
            items={RESULTS.map((r) => (
              <figure key={r.caption} className="overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)]">
                <img
                  src={r.img}
                  alt={r.caption}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-[280px] w-full object-cover md:h-[440px]"
                />
                <figcaption className="px-6 py-4 text-sm text-muted-foreground">{r.caption}</figcaption>
              </figure>
            ))}
          />
        </section>

        {/* TESTIMONIOS */}
        <section className="bg-sand/60 py-14 md:py-20">
          <div className="mx-auto max-w-3xl px-5">
            <div className="mb-10 text-center">
              <p className="eyebrow">Testimonios</p>
              <h2 className="mt-3 text-3xl md:text-4xl">Lo que dicen nuestras clientas</h2>
            </div>
            <Carousel
              label="Testimonios de clientas"
              items={TESTIMONIALS.map((t) => (
                <blockquote
                  key={t.name}
                  className="mx-auto max-w-xl rounded-3xl bg-card p-8 text-center shadow-[var(--shadow-card)]"
                >
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-gold-soft font-display text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div className="mt-4 flex justify-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="size-4" />
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">“{t.text}”</p>
                  <cite className="mt-4 block text-sm font-semibold not-italic">{t.name}</cite>
                </blockquote>
              ))}
            />
          </div>
        </section>
      </main>

      <footer className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-display text-2xl">
                Miguel <span className="text-gold">Brows</span>
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed opacity-80">{ADDRESS}</p>
              <div className="mt-6 flex gap-3">
                <a
                  href={INSTAGRAM_MAIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @miguelbrows"
                  className="rounded-full border border-gold/50 p-3 text-gold transition hover:bg-gold hover:text-primary-foreground"
                >
                  <InstagramIcon className="size-5" />
                </a>
                <a
                  href={INSTAGRAM_SECOND}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @micro_miguelbrows"
                  className="rounded-full border border-gold/50 p-3 text-gold transition hover:bg-gold hover:text-primary-foreground"
                >
                  <InstagramIcon className="size-5" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Escribir por WhatsApp"
                  className="rounded-full border border-gold/50 p-3 text-gold transition hover:bg-gold hover:text-primary-foreground"
                >
                  <WhatsAppIcon className="size-5" />
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl">
              <iframe
                title="Ubicación de Miguel Brows en Apartadó"
                src="https://www.google.com/maps?q=Edificio%20Coomeva%20Apartad%C3%B3%20Antioquia&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>
          </div>
          <p className="mt-10 border-t border-ink-foreground/15 pt-6 text-center text-xs opacity-70">
            © {new Date().getFullYear()} Miguel Brows. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

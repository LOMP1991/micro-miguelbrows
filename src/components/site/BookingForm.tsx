import { useState } from "react";
import { z } from "zod";
import { WhatsAppIcon } from "@/components/site/Icons";
import { WHATSAPP_NUMBER } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre").max(80, "Máximo 80 caracteres"),
  service: z.string().min(1, "Elige un servicio"),
  date: z.string().min(1, "Elige una fecha"),
  message: z.string().trim().max(300, "Máximo 300 caracteres").optional(),
});

export function BookingForm({ services }: { services: string[] }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const today = new Date().toISOString().slice(0, 10);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[String(i.path[0])] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const { name, service, date, message } = parsed.data;
    const nice = new Date(`${date}T12:00:00`).toLocaleDateString("es-CO", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const text = [
      "Hola Miguel Brows, quiero solicitar una cita.",
      `Nombre: ${name}`,
      `Servicio: ${service}`,
      `Fecha preferida: ${nice}`,
      message ? `Comentario: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  const field =
    "mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-3xl bg-card p-6 shadow-[var(--shadow-card)] md:grid-cols-2 md:p-10">
      <label className="text-sm font-medium">
        Nombre
        <input name="name" maxLength={80} autoComplete="name" className={field} placeholder="Tu nombre" />
        {errors.name && <span className="mt-1 block text-xs text-destructive">{errors.name}</span>}
      </label>
      <label className="text-sm font-medium">
        Servicio
        <select name="service" defaultValue="" className={field}>
          <option value="" disabled>
            Elige un servicio
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && <span className="mt-1 block text-xs text-destructive">{errors.service}</span>}
      </label>
      <label className="text-sm font-medium">
        Fecha preferida
        <input type="date" name="date" min={today} className={field} />
        {errors.date && <span className="mt-1 block text-xs text-destructive">{errors.date}</span>}
      </label>
      <label className="text-sm font-medium">
        Comentario (opcional)
        <input name="message" maxLength={300} className={field} placeholder="Horario, dudas…" />
        {errors.message && <span className="mt-1 block text-xs text-destructive">{errors.message}</span>}
      </label>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:brightness-95 md:w-auto"
        >
          <WhatsAppIcon className="size-5" />
          Enviar solicitud por WhatsApp
        </button>
      </div>
    </form>
  );
}

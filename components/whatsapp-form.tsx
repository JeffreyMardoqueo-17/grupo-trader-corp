"use client";

import { FormEvent, useState } from "react";
import { cn } from "@/lib/utils";

const phoneNumber = "50369842090";

const countryCodes = ["+503", "+52", "+57", "+1", "+34"];

type WhatsAppFormProps = {
  className?: string;
};

export function WhatsAppForm({ className }: WhatsAppFormProps) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState(countryCodes[0]);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parts = [
      "Hola, quiero continuar la conversación desde Grupo Trade Corp.",
      name ? `Nombre: ${name}` : null,
      lastName ? `Apellido: ${lastName}` : null,
      phone ? `Teléfono: ${countryCode} ${phone}` : null,
      email ? `Email: ${email}` : null,
      message ? `Mensaje: ${message}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(parts.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-3xl border border-border bg-white p-6 shadow-md sm:p-8 dark:bg-[var(--card)]",
        className
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Formulario de contacto</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">Envíanos un mensaje</h2>
      <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
        Te ayudamos de forma directa con una asesoría personalizada según tu etapa actual en trading.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-foreground">
          Nombre
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Escriba su nombre"
            required
            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-[var(--brand-gold)]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          Apellido
          <input
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Escriba su apellido"
            required
            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-[var(--brand-gold)]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground sm:col-span-2">
          Email
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="ejemplo@correo.com"
            required
            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-[var(--brand-gold)]"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground sm:col-span-2">
          Teléfono
          <div className="grid grid-cols-[110px_1fr] gap-2">
            <select
              value={countryCode}
              onChange={(event) => setCountryCode(event.target.value)}
              className="h-12 rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none transition focus:border-[var(--brand-gold)]"
            >
              {countryCodes.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Su número de contacto"
              required
              className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-[var(--brand-gold)]"
            />
          </div>
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground sm:col-span-2">
          Mensaje
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Cuéntanos qué te gustaría lograr en trading y qué tipo de ayuda necesitas."
            required
            className="min-h-36 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-[var(--brand-gold)]"
          />
        </label>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-[#0b1020] px-7 py-3 text-sm font-semibold text-white transition hover:opacity-95 dark:bg-white dark:text-[#0b1020]"
        >
          Enviar mensaje
        </button>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Al enviarlo, se abrirá WhatsApp con toda tu información para responderte más rápido.
        </p>
      </div>
    </form>
  );
}
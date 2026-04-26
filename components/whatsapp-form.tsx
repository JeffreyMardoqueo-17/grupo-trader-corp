"use client";

import { FormEvent, useState } from "react";

const phoneNumber = "50361276385";

export function WhatsAppForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const parts = [
      "Hola, quiero continuar la conversación desde Grupo Trade Corp.",
      name ? `Nombre: ${name}` : null,
      phone ? `Teléfono: ${phone}` : null,
      email ? `Email: ${email}` : null,
      message ? `Mensaje: ${message}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(parts.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.75rem] border border-border bg-(--panel) p-7"
    >
      <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Envíe su mensaje con contexto</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-foreground">
          Nombre
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Escriba su nombre"
            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-(--gold)"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          Teléfono
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Su número de contacto"
            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-(--gold)"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground sm:col-span-2">
          Email
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="ejemplo@correo.com"
            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition focus:border-(--gold)"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground sm:col-span-2">
          Mensaje
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Cuénteme su meta, su situación actual o lo que le gustaría lograr."
            className="min-h-32 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-(--gold)"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          Enviar mensaje
        </button>
        <p className="text-sm leading-6 text-muted-foreground">
          Al enviarlo, abriremos WhatsApp con su mensaje estructurado para continuar la conversación de forma directa.
        </p>
      </div>
    </form>
  );
}
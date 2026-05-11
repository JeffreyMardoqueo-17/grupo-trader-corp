"use client";

import { FormEvent, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

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

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      parts.join("\n")
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "relative overflow-hidden rounded-[2rem] p-3  ",
        className
      )}
    >
      {/* Glow */}
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#D6A556]/10 blur-3xl" />

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D6A556]/20 bg-[#D6A556]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D6A556]">
            Formulario de contacto
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-900 dark:text-white">
            Envíanos un mensaje
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 dark:text-white/60">
            Completa el formulario y continuaremos la conversación directamente
            por WhatsApp.
          </p>
        </div>

        {/* Inputs */}
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Nombre */}
          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700 dark:text-white/70">
              Nombre
            </span>

            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Kevin"
              required
              className="h-14 w-full rounded-2xl border border-black/5 bg-gray-50 px-5 text-sm outline-none transition-all focus:border-[#D6A556]/40 focus:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
            />
          </label>

          {/* Apellido */}
          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700 dark:text-white/70">
              Apellido
            </span>

            <input
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              placeholder="Hernández"
              required
              className="h-14 w-full rounded-2xl border border-black/5 bg-gray-50 px-5 text-sm outline-none transition-all focus:border-[#D6A556]/40 focus:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
            />
          </label>

          {/* Email */}
          <label className="space-y-2 sm:col-span-2">
            <span className="text-sm font-medium text-gray-700 dark:text-white/70">
              Email
            </span>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="correo@ejemplo.com"
              required
              className="h-14 w-full rounded-2xl border border-black/5 bg-gray-50 px-5 text-sm outline-none transition-all focus:border-[#D6A556]/40 focus:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
            />
          </label>

          {/* Phone */}
          <label className="space-y-2 sm:col-span-2">
            <span className="text-sm font-medium text-gray-700 dark:text-white/70">
              Teléfono
            </span>

            <div className="grid grid-cols-[120px_1fr] gap-3">
              <select
                value={countryCode}
                onChange={(event) => setCountryCode(event.target.value)}
                className="h-14 rounded-2xl border border-black/5 bg-gray-50 px-4 text-sm outline-none transition-all focus:border-[#D6A556]/40 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
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
                placeholder="0000 0000"
                required
                className="h-14 w-full rounded-2xl border border-black/5 bg-gray-50 px-5 text-sm outline-none transition-all focus:border-[#D6A556]/40 focus:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
              />
            </div>
          </label>

          {/* Message */}
          <label className="space-y-2 sm:col-span-2">
            <span className="text-sm font-medium text-gray-700 dark:text-white/70">
              Mensaje
            </span>

            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Cuéntanos qué buscas lograr y en qué etapa te encuentras actualmente."
              required
              className="min-h-[160px] w-full rounded-2xl border border-black/5 bg-gray-50 px-5 py-4 text-sm leading-7 outline-none transition-all focus:border-[#D6A556]/40 focus:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
            />
          </label>
        </div>

        {/* Button */}
        <div className="mt-8">
          <button
            type="submit"
            className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#D6A556] px-7 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.01] hover:bg-[#c8933f]"
          >
            Continuar por WhatsApp

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <p className="mt-4 text-center text-xs leading-6 text-gray-500 dark:text-white/40">
            Tu información se utilizará únicamente para continuar el contacto.
          </p>
        </div>
      </div>
    </form>
  );
}
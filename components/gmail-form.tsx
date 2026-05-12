"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type GmailFormProps = {
  className?: string;
};

type FormStatus = "idle" | "loading" | "success" | "error";

export function GmailForm({ className }: GmailFormProps) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastName,
          email,
          phone,
          message,
        }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      setName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Error inesperado al enviar el mensaje.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("relative overflow-hidden rounded-[2rem] p-3", className)}
    >
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#010308]/10" />

      <div className="relative z-10">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D6A556]/20 bg-[#D6A556]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D6A556]">
            Formulario de contacto
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-gray-900 dark:text-white">
            Envianos un mensaje
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 dark:text-white/60">
            Completa el formulario y nuestro equipo recibira tu solicitud por
            correo para responderte de forma directa.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
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

          <label className="space-y-2">
            <span className="text-sm font-medium text-gray-700 dark:text-white/70">
              Apellido
            </span>
            <input
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              placeholder="Hernandez"
              required
              className="h-14 w-full rounded-2xl border border-black/5 bg-gray-50 px-5 text-sm outline-none transition-all focus:border-[#D6A556]/40 focus:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
            />
          </label>

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

          <label className="space-y-2 sm:col-span-2">
            <span className="text-sm font-medium text-gray-700 dark:text-white/70">
              Telefono
            </span>
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="+503 0000 0000"
              required
              className="h-14 w-full rounded-2xl border border-black/5 bg-gray-50 px-5 text-sm outline-none transition-all focus:border-[#D6A556]/40 focus:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
            />
          </label>

          <label className="space-y-2 sm:col-span-2">
            <span className="text-sm font-medium text-gray-700 dark:text-white/70">
              Mensaje
            </span>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Cuentanos que necesitas y te responderemos por correo."
              required
              className="min-h-[160px] w-full rounded-2xl border border-black/5 bg-gray-50 px-5 py-4 text-sm leading-7 outline-none transition-all focus:border-[#D6A556]/40 focus:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
            />
          </label>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            disabled={status === "loading"}
            className="group inline-flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#D6A556] px-7 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.01] hover:bg-[#c8933f] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <p className="mt-4 text-center text-xs leading-6 text-gray-500 dark:text-white/40">
            Tu informacion se utiliza solo para responder tu consulta.
          </p>

          <div aria-live="polite" className="mt-3 text-center text-sm">
            {status === "success" && (
              <p className="text-emerald-600 dark:text-emerald-400">
                Mensaje enviado con exito. Te responderemos pronto.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400">
                {errorMessage || "No se pudo enviar el mensaje."}
              </p>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

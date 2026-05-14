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
      className={cn(
        "rounded-lg border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-[#0d1527]",
        className,
      )}
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-[#D6A556]">
          Contáctanos
        </h2>

        <p className="mt-1 max-w-full sm:max-w-xl text-sm leading-5 text-gray-600 dark:text-white/60">
          Déjanos tus datos y un mensaje. Nuestro equipo te responderá a la
          brevedad por correo electrónico.
        </p>
      </div>

      {/* Campos */}
      <div className="grid gap-2 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-xs font-medium text-gray-700 dark:text-white/60">
            Nombre
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm text-gray-900 outline-none transition-colors focus:border-[#D6A556] dark:border-white/15 dark:bg-white/2 dark:text-white"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs font-medium text-gray-700 dark:text-white/60">
            Apellido
          </span>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm text-gray-900 outline-none transition-colors focus:border-[#D6A556] dark:border-white/15 dark:bg-white/2 dark:text-white"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-medium text-gray-700 dark:text-white/60">
            Correo electrónico
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm text-gray-900 outline-none transition-colors focus:border-[#D6A556] dark:border-white/15 dark:bg-white/2 dark:text-white"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs font-medium text-gray-700 dark:text-white/60">
            Teléfono
          </span>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="h-10 w-full rounded-md border border-black/15 bg-white px-3 text-sm text-gray-900 outline-none transition-colors focus:border-[#D6A556] dark:border-white/15 dark:bg-white/2 dark:text-white"
          />
        </label>
        <label className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-xs font-medium text-gray-700 dark:text-white/60">
            Mensaje
          </span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="min-h-20 w-full resize-none rounded-md border border-black/15 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-[#D6A556] dark:border-white/15 dark:bg-white/2 dark:text-white"
          />
        </label>
      </div>

      {/* Acción */}
      <div className="mt-10 space-y-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-11 w-full rounded-md bg-[#D6A556] text-sm font-semibold text-black transition-colors hover:bg-[#c8933f] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Enviando..." : "Enviar mensaje"}
        </button>

        <p className="text-center text-xs text-gray-500 dark:text-white/40">
          Utilizamos tu información únicamente para responder esta solicitud.
        </p>

        {status === "success" && (
          <p className="text-center text-sm text-emerald-600">
            Mensaje enviado correctamente.
          </p>
        )}

        {status === "error" && (
          <p className="text-center text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
    </form>
  );
}

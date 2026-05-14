"use client";

import { GmailForm } from "@/components/gmail-form";
import { useTheme } from "@/components/theme-provider";
import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.2" cy="6.8" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M13.5 4.5v9.1a3.9 3.9 0 11-3-3.8V7.1a7 7 0 00-5 6.7 7.1 7.1 0 107-7.1c.4 0 .7 0 1 .1z" fill="currentColor" />
        <path d="M13.5 4.5c1.1 1.9 2.7 3.1 4.9 3.4v2.4c-2-.1-3.7-.8-4.9-2V4.5z" fill="currentColor" opacity="0.35" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3.2l.8-4H14V7a1 1 0 011-1h3z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 4h4v16H4z" fill="currentColor" />
        <path d="M8 8h4v2h.1c.7-1.2 2-2 4-2 3.9 0 4.9 2.6 4.9 6V20h-4v-5.7c0-1.5 0-3.3-2-3.3s-2.3 1.3-2.3 3.1V20H8z" fill="currentColor" />
      </svg>
    ),
  },
] as const;

const faqs = [
  {
    value: "faq-1",
    question: "¿Cómo funciona el proceso de contacto?",
    answer:
      "Completa el formulario, envía tu mensaje y nuestro equipo lo revisa para responderte por correo con el siguiente paso más adecuado.",
  },
  {
    value: "faq-2",
    question: "¿Cuánto tardan en responder?",
    answer:
      "Respondemos lo antes posible dentro del horario operativo. En la mayoría de casos, la respuesta llega el mismo día hábil.",
  },
  {
    value: "faq-3",
    question: "¿El contacto tiene algún costo?",
    answer:
      "No. El primer contacto es totalmente informativo y no implica compromiso alguno.",
  },
  {
    value: "faq-4",
    question: "¿Puedo escribir aunque aún no tenga claro lo que necesito?",
    answer:
      "Sí. De hecho, ese es el mejor punto de partida. Te ayudamos a ordenar la idea y a definir el camino correcto.",
  },
  {
    value: "faq-5",
    question: "¿Revisan mensajes de redes sociales?",
    answer:
      "Sí, pero el formulario por correo es el canal más estable para dar seguimiento formal y evitar que se pierda información.",
  },
  {
    value: "faq-6",
    question: "¿Puedo abrir una pregunta y cerrar la anterior?",
    answer:
      "Sí. El acordeón está configurado para que solo una pregunta quede abierta a la vez y puedas cerrarla tocándola otra vez.",
  },
] as const;

function SocialIcon({
  icon,
  name,
}: {
  icon: ReactNode;
  name: string;
}) {
  return (
    <a
      href="#"
      aria-label={name}
      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-[#D6A556] transition-colors hover:bg-[#D6A556] hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A556] dark:border-white/10 dark:bg-white/4 dark:hover:bg-[#D6A556] dark:hover:text-black"
    >
      <span className="h-4.5 w-4.5 sm:h-5 sm:w-5">{icon}</span>
    </a>
  );
}

export function LandingContact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="contacto"
      className={`relative border-t transition-colors scroll-mt-16 ${
        isDark ? "border-white/10 bg-[#000208]" : "border-black/5 bg-white"
      } lg:py-12`}
    >
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-6 xl:px-8 mt-3">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[0.92fr_1.08fr] lg:grid-cols-[0.92fr_1.08fr] items-stretch xl:gap-6">
          <div className="rounded-[2rem]  bg-white p-2 dark:bg-[#0b0e14] lg:p-3">
            <GmailForm className="h-full w-full border-0 bg-transparent p-5 sm:p-6 md:p-6 dark:bg-transparent lg:p-6" />
          </div>

          <div className="flex h-full flex-col rounded-[2rem] bg-white p-4 sm:p-5 lg:p-6 xl:p-7 dark:border-white/10 dark:bg-[#010308]">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="min-w-0">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A556]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D6A556]" />
                    Canales oficiales
                  </span>

                  <h3
                    className={`mt-2 text-3xl font-extrabold tracking-tight ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Redes sociales
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {socialLinks.map((social) => (
                    <SocialIcon key={social.name} icon={social.icon} name={social.name} />
                  ))}
                </div>
              </div>
            </div>

            <div className="my-5 border-t border-black/5 dark:border-white/10" />

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="min-w-0">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A556]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D6A556]" />
                    Ayuda rápida
                  </span>
                  <h3
                    className={`mt-2 text-2xl font-bold tracking-tight ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Preguntas frecuentes
                  </h3>
                </div>
              </div>

              <Accordion
                type="single"
                collapsible
                className="mt-4 w-full max-w-full overflow-hidden rounded-[1.5rem] bg-white/70 backdrop-blur-sm dark:bg-white/3"
              >
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq.value}
                    value={faq.value}
                    className="px-3 sm:px-4 first:pt-1 last:pb-1"
                  >
                    <AccordionTrigger
                      className={`py-3 text-left text-base font-medium tracking-tight sm:py-4 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pb-3 text-sm leading-6 sm:pb-4 ${
                        isDark ? "text-white/65" : "text-gray-600"
                      }`}
                    >
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

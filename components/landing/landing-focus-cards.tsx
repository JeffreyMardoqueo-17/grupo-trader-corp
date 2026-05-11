"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

const cards = [
  {
    label: "Academia de Trading",
    title: "Ruta al Trading",
    description:
      "Formación aplicada grupal o individual para aprender con estructura, herramientas y práctica real.",
    points: ["Aprendizaje", "Método", "Práctica"],
    image: "/images/academia/clase.jpg",
    href: "/academia",
    imageClass: "object-cover object-center",
  },
  {
    label: "CopyTrading",
    title: "Opera mientras aprendes",
    description:
      "Accede a una experiencia guiada donde puedes avanzar mientras entiendes la lógica detrás de cada operación.",
    points: ["Control", "Seguimiento", "Estrategia"],
    image: "/images/copy/nasdaq.jpg",
    href: "/copytrading",
    imageClass: "object-cover object-top",
  },
];

export function LandingFocusCards() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="pilares"
      className={`py-20 lg:py-32 ${
        isDark ? "bg-[#000208]" : "bg-white"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center ">
          <h2
            className={`mt-4 text-4xl font-bold tracking-tight lg:text-5xl ${
              isDark ? "text-[#D6A556]" : "text-[#D6A556]"
            }`}
          >
            Nuestras oportunidades
          </h2>

          <p
            className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${
              isDark ? "text-white/60" : "text-gray-600"
            }`}
          >
            Dos caminos diseñados para ayudarte a comprender y desenvolverte
            en los mercados financieros con estructura y acompañamiento.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`group relative overflow-hidden rounded-[2rem] border transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? "border-white/10 bg-[#000208] shadow-[0_16px_40px_rgba(0,0,0,0.18)] hover:border-white/15"
                  : "border-black/5 bg-white shadow-[0_16px_40px_rgba(4,25,53,0.06)] hover:border-[#D6A556]/20"
              }`}
            >
              <Link href={card.href} className="block h-full w-full">
                <div
                  className={`relative h-[320px] overflow-hidden lg:h-[380px] ${
                    isDark ? "bg-[#061024]" : "bg-[#fbfbfb]"
                  }`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className={`${card.imageClass} transition-transform duration-500 group-hover:scale-[1.03]`}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  <div
                    className={`absolute inset-0 ring-1 ring-inset ${
                      isDark ? "ring-white/5" : "ring-black/5"
                    }`}
                  />
                </div>

                <div
                  className={`relative p-6 lg:p-7 ${
                    isDark ? "bg-[#000208]" : "bg-white"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A556]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#D6A556]" />
                        {card.label}
                      </span>

                      <span
                        className={`text-xs font-medium ${
                          isDark ? "text-white/35" : "text-gray-400"
                        }`}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3
                        className={`text-2xl font-semibold tracking-tight lg:text-[1.7rem] ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {card.title}
                      </h3>

                      <p
                        className={`text-sm leading-6 ${
                          isDark ? "text-white/68" : "text-gray-600"
                        }`}
                      >
                        {card.description}
                      </p>
                    </div>

                    <ul className="grid grid-cols-3 gap-2">
                      {card.points.map((point) => (
                        <li
                          key={point}
                          className={`rounded-2xl border px-3 py-2 text-center text-xs font-medium tracking-wide ${
                            isDark
                              ? "border-white/8 bg-white/5 text-white/72"
                              : "border-black/5 bg-black/2 text-gray-600"
                          }`}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-1">
                      <span className="inline-flex items-center justify-center rounded-full bg-[#D6A556] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#c69343]">
                        Leer más
                        <span className="ml-2" aria-hidden="true">
                          →
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
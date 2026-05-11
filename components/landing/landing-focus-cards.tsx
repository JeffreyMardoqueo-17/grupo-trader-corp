"use client";

import Link from "next/link";
import Image from "next/image";
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
      className={`relative overflow-hidden py-20 lg:py-32 ${
        isDark ? "bg-[#000208]" : "bg-white"
      }`}
    >
      {/* BACKGROUND */}
      {isDark && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,165,86,0.05),transparent_35%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015),transparent)]" />

          <div className="absolute left-[-10%] top-0 h-95 w-95 rounded-full bg-[#D6A556]/3.5" />

          <div className="absolute right-[-10%] bottom-0 h-105 w-105 rounded-full bg-[#1d4ed8]/10" />
        </>
      )}

      <div className="relative mx-auto max-w-6xl px-6">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center rounded-full border border-[#D6A556]/20 bg-[#D6A556]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D6A556]">
            Oportunidades
          </span>

          <h2
            className={`mt-5 text-4xl font-black tracking-tight lg:text-5xl ${
              isDark ? "text-[#D6A556]" : "text-[#D6A556]"
            }`}
          >
            Nuestras oportunidades
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-relaxed ${
              isDark ? "text-white/60" : "text-gray-600"
            }`}
          >
            Dos caminos diseñados para ayudarte a comprender y desenvolverte
            en los mercados financieros con estructura y acompañamiento.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 lg:grid-cols-2">
          {cards.map((card, index) => (
            <div key={card.title} className="h-full">
              <Link
                href={card.href}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border transition-colors duration-300 ${
                  isDark
                    ? "border-white/10 bg-[#000208] shadow-[0_16px_40px_rgba(0,0,0,0.18)] hover:border-white/15"
                    : "border-black/5 bg-white shadow-[0_16px_40px_rgba(4,25,53,0.06)] hover:border-[#D6A556]/20"
                }`}
              >
                {/* IMAGE */}
                <div
                  className={`relative overflow-hidden ${
                    isDark ? "bg-[#061024]" : "bg-[#fbfbfb]"
                  }`}
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={`${card.imageClass} transition-transform duration-500 group-hover:scale-[1.03]`}
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                  </div>

                  <div
                    className={`absolute inset-0 ring-1 ring-inset ${
                      isDark ? "ring-white/5" : "ring-black/5"
                    }`}
                  />
                </div>

                {/* CONTENT */}
                <div
                  className={`relative flex flex-1 flex-col p-6 lg:p-7 ${
                    isDark ? "bg-[#000208]" : "bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#D6A556]">
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

                  <div className="mt-5">
                    <h3
                      className={`text-2xl font-bold tracking-tight lg:text-[1.7rem] ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {card.title}
                    </h3>

                    <p
                      className={`mt-3 text-sm leading-7 ${
                        isDark ? "text-white/68" : "text-gray-600"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* POINTS */}
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {card.points.map((point) => (
                      <div
                        key={point}
                        className={`rounded-xl border px-3 py-2 text-center text-[11px] font-medium tracking-wide ${
                          isDark
                            ? "border-white/8 bg-white/4 text-white/72"
                            : "border-black/5 bg-black/2 text-gray-600"
                        }`}
                      >
                        {point}
                      </div>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <div className="mt-7">
                    <span className="inline-flex items-center justify-center rounded-full bg-[#D6A556] px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#c69343]">
                      Leer más
                      <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
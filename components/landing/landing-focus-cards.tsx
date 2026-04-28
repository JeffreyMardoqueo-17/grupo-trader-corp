"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";

const cards = [
  {
    label: "Perfil",
    title: "Sobre Denis",
    description: "Una visión clara del liderazgo, la disciplina y el criterio que sostienen el proyecto.",
    points: ["Visión", "Disciplina", "Criterio"],
    image: "/images/denistrader.png",
    href: "/#denis",
  },
  {
    label: "Academia de Trading",
    title: "Ruta",
    description: "Formación aplicada para aprender con estructura, herramientas y práctica real.",
    points: ["Aprendizaje", "Método", "Práctica"],
    image: "/images/academia/clase.jpg",
    href: "/#academia",
  },
  {
    label: "CopyTrading",
    title: "Operar",
    description: "Una ruta acompañada para entender cómo operar con control y seguimiento.",
    points: ["Control", "Seguimiento", "Estrategia"],
    image: "/images/copy/pantalla.jpg",
    href: "/copytrading",
  },
];

export function LandingFocusCards() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`py-20 lg:py-32 ${isDark ? "bg-[#000208]" : "bg-white"}`}>
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`group relative overflow-hidden rounded-[2rem] border shadow-[0_20px_70px_rgba(0,0,0,0.14)] transition-all duration-500 hover:-translate-y-1 ${
                isDark
                  ? "border-white/10 bg-[#000208] shadow-black/30"
                  : "border-black/5 bg-white shadow-[0_20px_70px_rgba(4,25,53,0.06)]"
              }`}
            >
              <div className={`relative h-67.5 overflow-hidden sm:h-75 lg:h-80 ${isDark ? "bg-[#061024]" : "bg-white"}`}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain p-5 transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className={`absolute inset-0 ring-1 ring-inset ${isDark ? "ring-white/5" : "ring-black/5"}`} />
              </div>

              <div className={`relative p-6 lg:p-7 ${isDark ? "bg-[#000208]" : "bg-white"}`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A556]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D6A556]" />
                      {card.label}
                    </span>
                    <span className={`text-xs font-medium ${isDark ? "text-white/35" : "text-gray-400"}`}>
                      0{index + 1}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className={`text-2xl font-semibold tracking-tight lg:text-[1.7rem] ${isDark ? "text-white" : "text-gray-900"}`}>
                      {card.title}
                    </h3>
                    <p className={`text-sm leading-6 ${isDark ? "text-white/68" : "text-gray-600"}`}>
                      {card.description}
                    </p>
                  </div>

                  <ul className="grid grid-cols-3 gap-2">
                    {card.points.map((point, i) => (
                      <li
                        key={i}
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

                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-sm bg-[#D6A556] font-semibold text-white p-3 rounded-3xl hover:bg-[#c0944a] transition-all duration-300 group-hover:gap-3"
                  >
                    Leer más
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

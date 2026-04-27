"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

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
    image: "/images/copytrading-desktop.jpg",
    href: "/copytrading",
  },
];

export function LandingFocusCards() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`py-20 lg:py-32 ${isDark ? "bg-[#000208]" : "bg-gray-50"}`}>
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Background Image */}
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:h-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                {/* Gradient Overlay - ensures text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000208]/90 via-[#000208]/40 to-transparent" />
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-[#4A90E2]/0 transition-colors duration-500 group-hover:bg-[#4A90E2]/5" />
              </div>

              {/* Content Overlay - properly positioned at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <div className="space-y-3">
                  <span className="inline-block text-sm font-medium tracking-wider text-[#4A90E2]">
                    {card.label}
                  </span>
                  <h3 className="text-2xl font-bold text-white lg:text-3xl">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {card.description}
                  </p>
                  <ul className="space-y-1.5">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white/50">
                        <div className="h-1 w-1 rounded-full bg-[#4A90E2]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={card.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#4A90E2] transition-all duration-300 group-hover:gap-3"
                  >
                    Leer más →
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

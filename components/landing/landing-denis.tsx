"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

export function LandingDenis() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const gold = "text-[#D6A556]";
  const goldBg = "bg-[#D6A556]/10";
  const goldGlow = isDark ? "shadow-[#D6A556]/20" : "shadow-[#D6A556]/10";

  return (
    <section
      id="denis"
      className={`py-20 lg:py-32 ${
        isDark
          ? "bg-gradient-to-b from-[#000418] via-[#041935] to-[#000418]"
          : "bg-gradient-to-b from-white via-gray-50 to-white"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl ${goldGlow} ${
                isDark ? "ring-1 ring-white/5" : "ring-1 ring-gray-200"
              }`}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/denistrader.png"
                  alt="Denis Gutiérrez - Fundador Grupo Trade Corp"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-t ${
                  isDark ? "from-[#000418]/60 to-transparent" : "from-black/20 to-transparent"
                }`}
              />
            </div>
            <div className={`absolute -top-6 -left-6 w-32 h-32 rounded-full ${goldBg} blur-3xl opacity-50`} />
            <div className={`absolute -bottom-6 -right-6 w-40 h-40 rounded-full ${goldBg} blur-3xl opacity-40`} />
          </motion.div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span
                className={`inline-block text-sm font-semibold tracking-widest uppercase ${
                  isDark ? "text-white/50" : "text-gray-400"
                } mb-2`}
              >
                Fundador · Grupo Trade Corp
              </span>
              <h2
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Denis Gutiérrez
              </h2>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`text-3xl sm:text-4xl font-bold italic mb-8 leading-tight ${gold}`}
            >
              "Piensa como los bancos."
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`space-y-4 mb-10 text-base sm:text-lg leading-relaxed ${
                isDark ? "text-white/70" : "text-gray-600"
              }`}
            >
              <p>
                Operador con más de 13 años de experiencia en mercados internacionales. Su enfoque se centra en enseñar cómo entender y ejecutar dentro de los mercados financieros con criterio y disciplina.
              </p>
              <p>
                Ha desarrollado una comunidad donde las personas aprenden a operar con estructura, no solo a consumir información.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`grid grid-cols-3 gap-6 sm:gap-10 p-6 rounded-2xl ${
                isDark
                  ? "bg-white/[0.03] border border-white/5 backdrop-blur-sm"
                  : "bg-white border border-gray-100 shadow-lg"
              }`}
            >
              <div>
                <p className={`text-4xl sm:text-5xl font-bold ${gold}`}>13+</p>
                <p className={`text-sm mt-1 ${isDark ? "text-white/40" : "text-gray-400"}`}>
                  Años operando
                </p>
              </div>
              <div>
                <p className={`text-4xl sm:text-5xl font-bold ${gold}`}>4</p>
                <p className={`text-sm mt-1 ${isDark ? "text-white/40" : "text-gray-400"}`}>
                  Mercados globales
                </p>
              </div>
              <div>
                <p className={`text-4xl sm:text-5xl font-bold ${gold}`}>500+</p>
                <p className={`text-sm mt-1 ${isDark ? "text-white/40" : "text-gray-400"}`}>
                  Traders formados
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
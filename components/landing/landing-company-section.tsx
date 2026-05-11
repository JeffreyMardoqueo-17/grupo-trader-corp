"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useState, useEffect } from "react";

// Slides definidos fuera del componente para evitar recreación en cada render
const slides = [
  {
    image: "/images/nosotros/asesoramiento.jpg",
    phrase: "Asesoramiento claro y conciso",
  },
  {
    image: "/images/nosotros/asesoramientodelamano.jpg",
    phrase: "Acompañamiento especializado en cada paso",
  },
  {
    image: "/images/nosotros/eventostradercorps.jpg",
    phrase: "Eventos traders donde la comunidad es lo primero",
  },
];

export function LandingCompanySection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto scroll carrusel cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const academyWhatsAppLink = buildWhatsAppLink(
    "Hola buen día, quisiera saber más información sobre la academia de trading.",
  );

  return (
    <section
      id="nosotros"
      className={`py-20 lg:py-32 ${isDark ? "bg-linear-to-b from-[#000208] via-[#041935] to-[#000208]" : "bg-white"}`}
    >
      {/* Background glow effects */}
      {isDark && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(74,144,226,0.1),transparent_50%)]" />
      )}

      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
        >
          {/* Left: Carrusel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative order-2 lg:order-1"
          >
            {/* Carrusel Container */}
            <div className="space-y-4">
              <div
                className={`relative aspect-4/3 overflow-hidden rounded-3xl ${isDark ? "ring-1 ring-white/5" : "shadow-2xl"}`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].phrase}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div
                      className={`absolute inset-0 ${isDark ? "bg-linear-to-tr from-[#000208]/40 to-transparent" : "bg-linear-to-tr from-black/20 to-transparent"}`}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Phrase below image */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSlide}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className={`text-center text-lg font-semibold ${isDark ? "text-[#D6A556]" : "text-[#D6A556]"}`}
                >
                  {slides[currentSlide].phrase}
                </motion.p>
              </AnimatePresence>

              {/* Indicadores */}
              <div className="flex justify-center gap-2">
                {slides.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentSlide
                        ? "bg-[#D6A556] w-8"
                        : `${isDark ? "bg-white/20" : "bg-gray-300"} w-2`
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>
            </div>

            {/* Decorative glow */}
            <div
              className={`absolute -left-6 -top-6 h-32 w-32 rounded-full blur-3xl ${isDark ? "bg-[#D6A556]/20" : "bg-[#D6A556]/10"}`}
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2"
          >
            <span
              className={`inline-block text-sm font-medium tracking-[0.2em] uppercase ${
                isDark ? "text-[#D6A556]" : "text-[#D6A556]"
              }`}
            >
              Sobre nosotros
            </span>

            <h2
              className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Una forma <span className="text-[#D6A556]">estructurada</span> de
              aprender y operar en los mercados
            </h2>
            <p
              className={`mt-6 leading-relaxed ${
                isDark ? "text-white/60" : "text-gray-600"
              }`}
            >
              TradeCorp es una comunidad privada enfocada en educación sobre la
              bolsa de valores y herramientas modernas para que puedas
              desenvolverte en los mercados financieros de forma inteligente.
            </p>

            <p
              className={`mt-4 leading-relaxed ${
                isDark ? "text-white/50" : "text-gray-500"
              }`}
            >
              Combinamos formación profesional con herramientas como CopyTrading
              para que avances incluso si estás empezando.
            </p>

            {/* Stats */}
            <div
              className={`mt-8 grid grid-cols-3 gap-6 rounded-2xl  p-6 ${
                isDark ? " " : " bg-white"
              }`}
            >
              <div>
                <p className="text-3xl font-bold text-[#D6A556]">500+</p>
                <p
                  className={`text-sm ${isDark ? "text-white/40" : "text-gray-400"}`}
                >
                  Traders activos
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#D6A556]">10+</p>
                <p
                  className={`text-sm ${isDark ? "text-white/40" : "text-gray-400"}`}
                >
                  Años de experiencia
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#D6A556]">100%</p>
                <p
                  className={`text-sm ${isDark ? "text-white/40" : "text-gray-400"}`}
                >
                  Metodología probada
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/denis"
                className="inline-flex items-center gap-2 rounded-xl bg-[#D6A556] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D6A556]/90"
              >
                Conoce al equipo
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

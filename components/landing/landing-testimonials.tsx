"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  initials: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ángela Azul",
    role: "Inversionista",
    company: "CopyTrading",
    text: "Increíble experiencia. Ahora opero con confianza y una estrategia clara.",
    initials: "AA",
  },
  {
    name: "Amílcar Melgar",
    role: "Trader",
    company: "Academia",
    text: "Lo más valioso fue el acompañamiento real y una estrategia que pude ejecutar desde el inicio.",
    initials: "AM",
  },
  {
    name: "Carlos Martínez",
    role: "Empresario",
    company: "Grupo Trade",
    text: "Pasé de no entender nada a tener un sistema real que funciona.",
    initials: "CM",
  },
  {
    name: "María González",
    role: "Analista",
    company: "Mercados",
    text: "La claridad del proceso y el soporte del equipo hizo toda la diferencia.",
    initials: "MG",
  },
];

function StarIcon() {
  return (
    <svg className="inline h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function AnimatedItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function LandingTestimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="testimonios"
      className="relative overflow-hidden px-6 py-16 sm:py-20"
    >
      {/* Background gradient - Light/Dark mode adaptive */}
      <div className="absolute inset-0 -z-10">
        {/* Light mode background */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-gray-50/80 to-white dark:hidden" />

        {/* Dark mode background */}
        <div className="absolute inset-0 hidden bg-linear-to-b from-slate-950 via-[#0a1428]/90 to-slate-950 dark:block" />

        {/* Subtle radial glows */}
        <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-amber-200/10 blur-3xl dark:bg-amber-900/5" />
        <div className="absolute -bottom-32 right-1/3 h-96 w-96 rounded-full bg-blue-200/10 blur-3xl dark:bg-blue-900/5" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header - Eyebrow + Title */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#D6A556] dark:text-[#D6A556]">
            Experiencias reales
          </p>
          <h2 className="mt-4 text-6xl font-black tracking-tight text-slate-950 dark:text-white sm:text-7xl">
            Experiencias.
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Gradient overlays for scroll indicator */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-linear-to-r from-white/40 to-transparent dark:from-slate-950/40" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-linear-to-l from-white/40 to-transparent dark:from-slate-950/40" />

          {/* Scrollable container */}
          <div className="scroll-smooth mb-12 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {testimonials.map((testimonial, index) => (
              <AnimatedItem key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative flex w-96 shrink-0 overflow-hidden rounded-2xl border-2 border-white/20 bg-white/8 backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-white/12 hover:shadow-2xl dark:border-white/15 dark:bg-white/6 dark:hover:border-white/30 dark:hover:bg-white/10 snap-center"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-linear-to-br from-amber-400/10 to-transparent dark:from-blue-600/10" />
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col p-6 h-full border border-gray-200/50 dark:border-white/10 rounded-2xl">
                    {/* Top Section: Profile + Name */}
                    <div className="flex items-center gap-4 pb-4">
                      {/* Avatar Image Space */}
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-amber-400/30 bg-linear-to-br from-amber-400 to-amber-600 text-sm font-bold text-slate-900">
                        {testimonial.initials}
                      </div>

                      {/* Name + Role */}
                      <div className="flex flex-col justify-center">
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-white/60">
                          {testimonial.role}
                        </p>
                        <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="my-3 h-px bg-linear-to-r from-white/20 to-transparent" />

                    {/* Middle Section: Stars */}
                    <div className="flex gap-1 pb-3 text-[#D6A556]">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>

                    {/* Bottom Section: Testimonial Text */}
                    <p className="flex-1 text-sm leading-relaxed text-slate-700 dark:text-white/90">
                      "{testimonial.text}"
                    </p>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </div>

        {/* Trust Badge - Centered Below */}
        <AnimatedItem delay={0.4}>
          <div className="rounded-2xl border-2 border-white/20 bg-white/8 p-6 backdrop-blur-xl dark:border-white/15 dark:bg-white/6 sm:p-8">
            <div className="flex flex-col items-center gap-4 text-center">
              {/* Rating */}
              <div className="flex flex-col items-center gap-2 text-[#D6A556]">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  4.9<span className="text-lg text-slate-500 dark:text-white/60">/5</span>
                </p>
              </div>

              {/* Trust Message */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Confianza verificada
                </p>
                <p className="mt-2 text-base font-medium text-slate-900 dark:text-white">
                  Resultados reales de estudiantes reales. No solo números, sino vidas transformadas.
                </p>
                <p className="mt-2 text-xs text-slate-600 dark:text-white/60">
                  500+ estudiantes | Desde 2023 transformando trayectorias financieras
                </p>
              </div>
            </div>
          </div>
        </AnimatedItem>
      </div>
    </section>
  );
}
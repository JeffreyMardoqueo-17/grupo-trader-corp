"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { LandingHeader } from "@/components/landing/landing-header";
import { WhatsAppForm } from "@/components/whatsapp-form";
import { Mail, Phone, ChevronDown } from "lucide-react";

function StarIcon() {
  return (
    <svg className="inline h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function AnimatedItem({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

interface Testimonial {
  name: string;
  role: string;
  text: string;
  initials: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos Martínez",
    role: "Empresario",
    text: "Lo que más valoro de María es su enfoque analítico y la experiencia que tiene. Se nota cuando una estrategia está pensada para sostener resultados.",
    initials: "CM",
    rating: 5,
  },
  {
    name: "María González",
    role: "Inversionista",
    text: "Desde la primera reunión sentí orden. Me gustó que aterrizaron mi meta en un plan realista y después me acompañaron a ejecutarlo paso a paso.",
    initials: "MG",
    rating: 5,
  },
  {
    name: "Roberto Díaz",
    role: "Agricultor",
    text: "Lo que más valoro de María es su enfoque analítico y la experiencia del equipo. Se nota cuando una estrategia está pensada para sostener resultados.",
    initials: "RD",
    rating: 5,
  },
  {
    name: "Andrea López",
    role: "Emprendedora",
    text: "Antes tenía muchas ideas y poca estructura. Con María pasé a tener claridad, prioridades y un seguimiento que realmente me mantuvo enfocado.",
    initials: "AL",
    rating: 5,
  },
];

const values = [
  {
    title: "Disciplina",
    description: "Hacemos lo necesario, incluso cuando no es fácil.",
    icon: "✓",
  },
  {
    title: "Criterio",
    description: "No actuamos por impulso, sino por entendimiento.",
    icon: "✓",
  },
  {
    title: "Responsabilidad",
    description: "Cada resultado es consecuencia de nuestras decisiones.",
    icon: "✓",
  },
  {
    title: "Crecimiento continuo",
    description: "Nunca dejamos de aprender ni de mejorar.",
    icon: "✓",
  },
];

export default function MariaReneePage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <LandingHeader />
      {/* HERO SECTION */}
      <section
        id="hero"
        className={`relative overflow-hidden px-6 py-20 lg:py-28 transition-colors ${
          isDark ? "bg-[#050a14]" : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            {/* LEFT - CONTENT */}
            <AnimatedItem className="order-2 lg:order-1">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#D6A556]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D6A556]">
                    Asesoría Financiera
                  </span>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h1
                    className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Multiplique su patrimonio con{" "}
                    <span className="text-[#D6A556]">Disciplina</span>
                  </h1>
                  <p
                    className={`text-lg sm:text-xl leading-relaxed max-w-xl ${
                      isDark
                        ? "text-white/70"
                        : "text-gray-600"
                    }`}
                  >
                    Logre sus metas financieras con nuestra asesoría experta a corto plazo.
                  </p>
                </div>

                {/* Checklist */}
                <ul className="space-y-3">
                  {[
                    "Diagnóstico personalizado",
                    "Diseño de una estrategia a la medida para lograr su meta",
                    "Ejecución del plan con disciplina",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-3 text-base ${
                        isDark ? "text-white/80" : "text-gray-700"
                      }`}
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D6A556] text-sm font-bold text-[#0e1427] shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="#contacto"
                    className="px-8 py-3 rounded-full bg-[#D6A556] text-[#0e1427] font-semibold hover:bg-[#e0b365] transition inline-flex items-center justify-center"
                  >
                    Contactar ahora
                  </Link>
                  <Link
                    href="#valores"
                    className={`px-8 py-3 rounded-full border font-semibold transition ${
                      isDark
                        ? "border-white/20 text-white hover:bg-white/5"
                        : "border-gray-300 text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    Ver servicios
                  </Link>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                  <div>
                    <p className="text-3xl sm:text-4xl font-black text-[#D6A556]">
                      +100
                    </p>
                    <p
                      className={`text-sm mt-2 ${
                        isDark ? "text-white/60" : "text-gray-600"
                      }`}
                    >
                      Clientes activos
                    </p>
                  </div>
                  <div>
                    <p
                      className={`text-2xl sm:text-3xl font-black ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      María Reneé
                    </p>
                    <p
                      className={`text-sm mt-2 ${
                        isDark ? "text-white/60" : "text-gray-600"
                      }`}
                    >
                      Asesora
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p
                  className={`text-lg italic leading-relaxed max-w-2xl pt-4 font-serif ${
                    isDark ? "text-white/70" : "text-gray-600"
                  }`}
                >
                  "Te guío con estrategia clara y segura para que hagas crecer tu dinero y construyas un patrimonio sólido."
                </p>
              </div>
            </AnimatedItem>

            {/* RIGHT - IMAGE */}
            <AnimatedItem delay={0.2} className="order-1 lg:order-2">
              <div className="relative h-full flex items-end justify-center mb-2 lg:mb-0">
                {/* Portrait container */}
                <div
                  className="relative w-full max-w-105 lg:max-w-130"
                  style={{ height: "clamp(320px, 56vw, 620px)" }}
                >
                  <Image
                    src="/images/team/maria.png"
                    alt="María Reneé Escobar - Asesora Financiera"
                    width={620}
                    height={860}
                    priority
                    sizes="(max-width: 1024px) 92vw, 42vw"
                    className="h-full w-full object-contain object-bottom"
                  />

                  {/* Elegant bottom fade to blend with section background */}
                  <div
                    className={`absolute inset-x-0 bottom-0 h-28 ${
                      isDark
                        ? "bg-linear-to-t from-[#050a14] via-[#050a14]/92 to-transparent"
                        : "bg-linear-to-t from-white via-white/95 to-transparent"
                    }`}
                  />
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </section>

      {/* VALUES SECTION - ELEGANT DESIGN */}
      <section
        id="valores"
        className={`relative overflow-hidden px-6 py-20 lg:py-28 transition-colors ${
          isDark
            ? "bg-[#050a14]"
            : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <AnimatedItem>
            <div className="mb-20 text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D6A556]" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A556]">
                  La base del trabajo
                </span>
              </div>
              <h2
                className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Misión, visión y valores
              </h2>
            </div>
          </AnimatedItem>

          {/* 3 COLUMN ELEGANT LAYOUT */}
          <div className="grid lg:grid-cols-3 gap-0 lg:gap-12">
            {/* COLUMN 1: MISIÓN */}
            <AnimatedItem delay={0.1}>
              <div className={`relative pb-12 lg:pb-0 lg:pr-12`}>
                <div className={`hidden lg:block absolute right-0 top-0 bottom-0 w-px ${isDark ? "bg-white/10" : "bg-black/10"}`} />
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-8 bg-[#D6A556]" />
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#D6A556]">
                      Misión
                    </span>
                  </div>
                  <h3 className={`text-2xl lg:text-3xl font-bold leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                    Desarrollar estrategias que impulsen crecimiento
                  </h3>
                  <p className={`text-base leading-8 ${isDark ? "text-white/70" : "text-gray-600"}`}>
                    Fundamentadas en disciplina, experiencia y resultados comprobables que generen oportunidades y construyan un patrimonio sólido y sostenible.
                  </p>
                </div>
              </div>
            </AnimatedItem>

            {/* COLUMN 2: VISIÓN */}
            <AnimatedItem delay={0.15}>
              <div className={`relative pb-12 lg:pb-0 lg:px-12`}>
                <div className={`hidden lg:block absolute left-0 top-0 bottom-0 w-px ${isDark ? "bg-white/10" : "bg-black/10"}`} />
                <div className={`hidden lg:block absolute right-0 top-0 bottom-0 w-px ${isDark ? "bg-white/10" : "bg-black/10"}`} />
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-8 bg-[#D6A556]" />
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#D6A556]">
                      Visión
                    </span>
                  </div>
                  <h3 className={`text-2xl lg:text-3xl font-bold leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                    Ser referente en disciplina y estrategia
                  </h3>
                  <p className={`text-base leading-8 ${isDark ? "text-white/70" : "text-gray-600"}`}>
                    Convertirnos en guía para personas y empresas disciplinadas, capaces de tomar decisiones inteligentes y construir crecimiento con consistencia.
                  </p>
                </div>
              </div>
            </AnimatedItem>

            {/* COLUMN 3: VALORES */}
            <AnimatedItem delay={0.2}>
              <div className={`relative lg:pl-12`}>
                <div className={`hidden lg:block absolute left-0 top-0 bottom-0 w-px ${isDark ? "bg-white/10" : "bg-black/10"}`} />
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-8 bg-[#D6A556]" />
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#D6A556]">
                      Valores
                    </span>
                  </div>
                  <h3 className={`text-2xl lg:text-3xl font-bold leading-tight mb-8 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Principios que nos guían
                  </h3>
                  <div className="space-y-5">
                    {values.map((value, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex gap-3 items-start"
                      >
                        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${isDark ? "bg-[#D6A556]/20 text-[#D6A556]" : "bg-[#D6A556]/15 text-[#D6A556]"}`}>
                          {value.icon}
                        </div>
                        <div className="min-w-0 pt-0.5">
                          <h4 className={`font-bold text-sm leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                            {value.title}
                          </h4>
                          <p className={`text-xs leading-5 mt-1 ${isDark ? "text-white/60" : "text-gray-600"}`}>
                            {value.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - HORIZONTAL SCROLL */}
      <section
        id="testimonios"
        className={`relative overflow-hidden px-6 py-20 lg:py-28 transition-colors ${
          isDark
            ? "bg-[#050a14] border-t border-white/10"
            : "bg-white border-t border-black/5"
        }`}
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <AnimatedItem>
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D6A556]" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A556]">
                  Confianza construida
                </span>
              </div>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                ¿Qué dicen nuestros clientes?
              </h2>
              <p
                className={`text-lg max-w-2xl ${
                  isDark ? "text-white/70" : "text-gray-600"
                }`}
              >
                Testimonios reales de personas que han transformado sus finanzas con disciplina y estrategia con mi persona guiandolos
              </p>
            </div>
          </AnimatedItem>

          {/* Horizontal Scroll Container */}
          <div className="relative">
            {/* Gradient overlays for scroll indicator */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-linear-to-r from-[#050a14]/60 to-transparent dark:from-[#050a14]/60" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-linear-to-l from-[#050a14]/60 to-transparent dark:from-[#050a14]/60" />

            {/* Scrollable container */}
            <div className="scroll-smooth flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
              {testimonials.map((testimonial, index) => (
                <AnimatedItem key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className={`group relative flex w-80 shrink-0 overflow-hidden rounded-2xl transition-all duration-300 snap-center ${
                      isDark
                        ? "bg-[#0f1423] border border-white/10 hover:border-white/30 hover:shadow-2xl"
                        : "bg-white border border-black/5 hover:border-black/10 hover:shadow-lg"
                    }`}
                  >
                    {/* Content Container */}
                    <div className="flex flex-col p-6 h-full">
                      {/* Top Section: Stars */}
                      <div className="flex gap-1 pb-4 text-[#D6A556]">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <StarIcon key={i} />
                        ))}
                      </div>

                      {/* Middle Section: Quote */}
                      <p
                        className={`flex-1 text-base leading-relaxed mb-6 ${
                          isDark ? "text-white/90" : "text-gray-700"
                        }`}
                      >
                        "{testimonial.text}"
                      </p>

                      {/* Divider */}
                      <div className={`my-3 h-px ${isDark ? "bg-white/10" : "bg-black/5"}`} />

                      {/* Bottom Section: Author */}
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D6A556] text-[#0e1427] font-bold shrink-0 text-sm">
                          {testimonial.initials}
                        </div>
                        <div>
                          <p
                            className={`font-semibold text-sm ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {testimonial.name}
                          </p>
                          <p
                            className={`text-xs ${
                              isDark ? "text-white/60" : "text-gray-600"
                            }`}
                          >
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedItem>
              ))}
            </div>
          </div>

          {/* Trust Badge */}
         
        </div>
      </section>

      {/* CONTACT SECTION WITH ACCORDION STEPS */}
      <section
        id="contacto"
        className={`relative overflow-hidden px-6 py-20 lg:py-28 transition-colors ${
          isDark
            ? "bg-[#050a14] border-t border-white/10"
            : "bg-gray-50 border-t border-black/5"
        }`}
      >
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <AnimatedItem>
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D6A556]" />
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A556]">
                  Conversemos
                </span>
              </div>
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Escribame y crezcamos juntos
              </h2>
              <p
                className={`text-lg max-w-2xl mx-auto ${
                  isDark ? "text-white/70" : "text-gray-600"
                }`}
              >
                Un buen contacto no debería sentirse frío ni rígido. Aquí empieza una conversación directa, clara y pensada para convertir una meta en un plan accionable.
              </p>
            </div>
          </AnimatedItem>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            {/* Left - Info & Accordion Steps */}
            <AnimatedItem delay={0.1}>
              <div className="space-y-6">
                {/* Accordion Steps */}
                <div>
                  <h3
                    className={`text-2xl font-bold mb-6 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Proceso simple y cercano
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        num: "01",
                        title: "Diagnóstico inicial",
                        desc: "Escuchamos su meta, entendemos su contexto y detectamos el mejor punto de partida.",
                      },
                      {
                        num: "02",
                        title: "Estrategia clara",
                        desc: "Traducimos la idea en una ruta accionable, medible y aterrizada a su realidad.",
                      },
                      {
                        num: "03",
                        title: "Seguimiento con disciplina",
                        desc: "No se trata solo de empezar bien, sino de sostener el avance con orden y enfoque.",
                      },
                    ].map((step, i) => (
                      <motion.div
                        key={i}
                        initial={false}
                        animate={{
                          opacity: 1,
                        }}
                      >
                        <button
                          onClick={() => setExpandedStep(expandedStep === i ? null : i)}
                          className={`w-full text-left rounded-xl p-5 transition-all duration-300 ${
                            expandedStep === i
                              ? isDark
                                ? "bg-[#0f1423] border border-[#D6A556]/50 shadow-lg shadow-[#D6A556]/20"
                                : "bg-white border border-[#D6A556]/50 shadow-lg"
                              : isDark
                              ? "bg-[#0f1423] border border-white/10 hover:border-white/20"
                              : "bg-white border border-black/5 hover:border-black/10"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D6A556] mb-2">
                                Paso {step.num}
                              </p>
                              <p
                                className={`font-bold text-lg ${
                                  isDark ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {step.title}
                              </p>
                            </div>
                            <motion.div
                              animate={{
                                rotate: expandedStep === i ? 180 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className="shrink-0"
                            >
                              <ChevronDown
                                className={`h-6 w-6 ${
                                  isDark ? "text-white/60" : "text-gray-600"
                                }`}
                              />
                            </motion.div>
                          </div>

                          {/* Expandable Content */}
                          <motion.div
                            initial={false}
                            animate={{
                              height: expandedStep === i ? "auto" : 0,
                              opacity: expandedStep === i ? 1 : 0,
                              marginTop: expandedStep === i ? 12 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className={`pt-4 border-t ${isDark ? "border-white/10" : "border-black/5"}`}>
                              <p
                                className={`text-base leading-7 ${
                                  isDark ? "text-white/70" : "text-gray-600"
                                }`}
                              >
                                {step.desc}
                              </p>
                            </div>
                          </motion.div>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Direct Contact */}
                <div className="space-y-4 pt-4">
                  <h4
                    className={`text-lg font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Contacto directo
                  </h4>
                  <a
                    href="tel:+50361276385"
                    className={`flex items-center gap-4 rounded-xl p-4 transition ${
                      isDark
                        ? "bg-[#0f1423] border border-white/10 hover:border-white/20"
                        : "bg-white border border-black/5 hover:border-black/10"
                    }`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D6A556]/20 text-[#D6A556] shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p
                        className={`text-xs font-semibold uppercase ${
                          isDark ? "text-white/60" : "text-gray-600"
                        }`}
                      >
                        Teléfono
                      </p>
                      <p
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        +503 61276385
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:escobarmaria.tcc@gmail.com"
                    className={`flex items-center gap-4 rounded-xl p-4 transition ${
                      isDark
                        ? "bg-[#0f1423] border border-white/10 hover:border-white/20"
                        : "bg-white border border-black/5 hover:border-black/10"
                    }`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D6A556]/20 text-[#D6A556] shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p
                        className={`text-xs font-semibold uppercase ${
                          isDark ? "text-white/60" : "text-gray-600"
                        }`}
                      >
                        Email
                      </p>
                      <p
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        escobarmaria.tcc@gmail.com
                      </p>
                    </div>
                  </a>
                </div>

                {/* Social & Profile */}
                <div
                  className={`rounded-xl p-6 ${
                    isDark
                      ? "bg-[#0f1423] border border-white/10"
                      : "bg-white border border-black/5"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.18em] text-[#D6A556] mb-4`}
                  >
                    Asesora
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border border-[#D6A556]/40 shrink-0">
                      <Image
                        src="/images/team/maria.png"
                        alt="María Reneé"
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p
                        className={`font-bold text-lg ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        María Reneé
                      </p>
                      <p
                        className={`text-sm ${
                          isDark ? "text-white/60" : "text-gray-600"
                        }`}
                      >
                        Asesora Financiera
                      </p>
                    </div>
                  </div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.18em] text-[#D6A556] mb-3`}
                  >
                    Redes sociales
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/mariaaarenee_?igsh=MTh3ZGV4d2U0NGgyNA%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                        isDark
                          ? "bg-white/10 text-white hover:bg-white/20"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                      aria-label="Instagram"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110.001 2.881 1.44 1.44 0 01-.001-2.881z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@mariarenee__22?_r=1&_t=ZS-95n5lBgjv4J"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
                        isDark
                          ? "bg-white/10 text-white hover:bg-white/20"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      }`}
                      aria-label="TikTok"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.9 2.9 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.26 6.26 0 0 0-1-.08A6.26 6.26 0 1 0 16.64 16v-3.39a6.27 6.27 0 0 0 3.59-5.88" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedItem>

            {/* Right - Form */}
            <AnimatedItem delay={0.15}>
              <WhatsAppForm
                className={`${
                  isDark
                    ? "bg-[#0f1423] border border-white/10"
                    : "bg-white border border-black/5"
                }`}
              />
            </AnimatedItem>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`border-t transition-colors ${
          isDark
            ? "bg-[#050a14] border-white/10 text-white"
            : "bg-white border-black/5 text-gray-900"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-8 mb-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Grupo Trade Corp"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <div>
                  <p className="font-semibold">Grupo Trade Corp</p>
                  <p className={`text-xs ${isDark ? "text-white/60" : "text-gray-600"}`}>
                    Asesoría financiera
                  </p>
                </div>
              </div>
              <p className={`text-sm ${isDark ? "text-white/60" : "text-gray-600"}`}>
                © 2026 Grupo Trade Corp
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <p className="font-semibold mb-4">Explorar</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#hero"
                    className={`transition ${
                      isDark ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#valores"
                    className={`transition ${
                      isDark ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Valores
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonios"
                    className={`transition ${
                      isDark ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Testimonios
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="font-semibold mb-4">Legal</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/terminos-condiciones"
                    className={`transition ${
                      isDark ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacidad"
                    className={`transition ${
                      isDark ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Privacidad
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="font-semibold mb-4">Contacto</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="tel:+50361276385"
                    className={`transition ${
                      isDark ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    +503 61276385
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:escobarmaria.tcc@gmail.com"
                    className={`transition ${
                      isDark ? "text-white/70 hover:text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    escobarmaria.tcc@gmail.com
                  </a>
                </li>
                <li className={`text-xs ${isDark ? "text-white/50" : "text-gray-500"}`}>
                  María Reneé · Asesora
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div
            className={`border-t pt-8 text-center text-sm ${
              isDark ? "border-white/10 text-white/60" : "border-black/5 text-gray-600"
            }`}
          >
            <p>Disciplina. Criterio. Valor.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

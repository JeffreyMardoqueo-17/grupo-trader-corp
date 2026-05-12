"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { LandingContact } from "./landing-contact";
import { MissionVisionValuesData } from "./landing-mission-vision-values";
import {
  Testimonials,
  type TestimonialData,
} from "@/components/ui/testimonials";

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
      />
    </svg>
  );
}

function AcademicCapIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l9-5-9-5-9 5 9 5z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
    </svg>
  );
}

function LightbulbIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  );
}

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591l-5.541 5.541a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9 18c0.882.392 1.847.6 2.813.6.966 0 1.931-.208 2.813-.6l1.894-1.894a2.25 2.25 0 011.244-2.013V15a2.25 2.25 0 00.659-1.591l5.541-5.541a2.25 2.25 0 00.659-1.591V3.104a2.25 2.25 0 00-.659-1.591L12.938 1.37a2.25 2.25 0 00-1.244-2.013L9 0"
      />
    </svg>
  );
}

function CogIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

const features = [
  {
    icon: PlayIcon,
    title: "Sesiones en vivo",
    description: "Mercados reales con acompañamiento experto",
  },
  {
    icon: UsersIcon,
    title: "Clases grabadas",
    description: "Biblioteca on demand progresiva",
  },
  {
    icon: AcademicCapIcon,
    title: "Clases presenciales",
    description: "Práctica guiada y networking",
  },
  {
    icon: ChartIcon,
    title: "Análisis de mercado",
    description: "Lectura técnica con criterio",
  },
  {
    icon: CogIcon,
    title: "Estrategia completa",
    description: "Sistema estructurado y consistente",
  },
  {
    icon: LightbulbIcon,
    title: "Psicología en trading",
    description: "Disciplina y mentalidad profesional",
  },
  {
    icon: BrainIcon,
    title: "Mentoría",
    description: "Acompañamiento cercano y directo",
  },
];

const carouselImages = [
  { src: "/images/academia/clase.jpg", alt: "Clase de trading en vivo" },
  { src: "/images/academia/clase2.jpg", alt: "Entorno real de trading" },
  { src: "/images/academia/clase3.jpg", alt: "Análisis de mercado" },
  { src: "/images/academia/clase4.jpg", alt: "Análisis de mercado" },
];

const featureCarousel = [...features, ...features];

const academiaTestimonials: TestimonialData[] = [
  {
    name: "Carlos M.",
    role: "Trader independiente",
    text: "La metodología me permitió pasar de teoría a operaciones consistentes en semanas.",
    image: "/images/team/mariarenee.jpg",
  },
  {
    name: "María R.",
    role: "Analista",
    text: "La mentoría y el feedback en vivo marcaron la diferencia.",
    image: "/images/testimonios/mujerfelizamarillo.avif",
  },
  {
    name: "Andrés P.",
    role: "Prop firm",
    text: "Estructura, disciplina y resultados. Recomendado para traders serios.",
    image: "/images/testimonios/hombrefelizgris.avif",
  },
];

export function LandingAcademia() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [currentImage, setCurrentImage] = useState(0);
  const academyWhatsAppLink = buildWhatsAppLink(
    "Hola buen día, quisiera saber más información sobre la academia de trading.",
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const blueAccent = "text-[#D6A556]";

  return (
    <section id="academia" className="relative">
      <div className="relative h-screen min-h-[680px] overflow-hidden bg-[#030712]">
        {/* ===== BACKGROUND ===== */}
        <div className="absolute inset-0 overflow-hidden rounded-none md:rounded-[2.5rem]">
          {carouselImages.map((image, index) => (
            <div
              key={image.src}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: index === currentImage ? 1 : 0 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover opacity-60 md:opacity-50"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/85 via-black/65 to-black/45 md:rounded-[2.5rem]" />

          {/* Suavizado */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,0,0,0.2),rgba(0,0,0,0.8))] md:rounded-[2.5rem]" />
        </div>

        {/* ===== CONTENIDO ===== */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
          <div className="grid w-full grid-cols-1 md:grid-cols-12 items-center gap-10">
            {/* Línea vertical – SOLO DESKTOP */}
            <div className="hidden md:col-span-1 md:flex md:justify-end">
              <div className="h-[420px] w-[2px] bg-[#D6A556]" />
            </div>

            {/* TEXTO */}
            <div className="md:col-span-8 text-center md:text-left">
              {/* Eyebrow */}
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#D6A556]">
                Academia profesional de trading
              </p>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Trading con
                <br />
                <span className="text-[#D6A556]">estructura institucional</span>
              </h1>

              {/* Divisor */}
              <div className="mx-auto md:mx-0 my-7 h-px w-24 bg-white/30" />

              {/* Subtexto */}
              <p className="mx-auto md:mx-0 max-w-xl text-base sm:text-lg text-white/80">
                Formación diseñada para operadores que buscan consistencia,
                gestión del riesgo y lectura real del mercado.
              </p>

              {/* Valores */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-white/90">
                <div>
                  <p className="font-bold text-[#D6A556]">01</p>
                  <p>Ejecución real</p>
                </div>
                <div>
                  <p className="font-bold text-[#D6A556]">02</p>
                  <p>Riesgo controlado</p>
                </div>
                <div>
                  <p className="font-bold text-[#D6A556]">03</p>
                  <p>Proceso validado</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 flex justify-center md:justify-start">
                <a
                  href={academyWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border bg-accent text-white border-[#D6A556] px-10 py-4 text-sm font-bold uppercase tracking-widest  transition-all duration-300 hover:bg-[#D6A556] hover:text-black"
                >
                  Solicitar información
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Resto del contenido */}
      <div className={`relative ${isDark ? "bg-[#000208]" : "bg-white"}`}>
        {isDark && (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(214,165,86,0.08),rgba(74,144,226,0.04),transparent_70%),linear-gradient(180deg,#000208,#050b18)]" />
        )}
        {!isDark && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,165,86,0.08),transparent_50%),linear-gradient(180deg,#ffffff,#f5f5f5)]" />
        )}
        <div className="container relative z-10 mx-auto max-w-6xl px-6 py-32">
          {/* Formación integral - Enhanced */}
          <div className="mb-32">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6A556]/30 bg-[#D6A556]/5 px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-[#D6A556]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D6A556]">
                  Metodología
                </span>
              </div>
              <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">
                Formación
                <br />
                <span className="bg-linear-to-r from-[#D6A556] via-[#E8B86F] to-[#D6A556] bg-clip-text text-transparent">
                  integral y completa
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
                7 pilares fundamentales que te llevarán de la teoría a la
                práctica con estructura institucional
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-[#000208] to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-[#000208] to-transparent z-10" />
              <motion.div
                className="flex w-max gap-6 py-2"
                style={{ willChange: "transform" }}
                animate={{ x: [0, "-50%"] }}
                transition={{ duration: 45, ease: "linear", repeat: Infinity }}
              >
                {featureCarousel.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={`${feature.title}-${index}`}
                      className={`group relative min-h-60 w-80 overflow-hidden rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                        isDark
                          ? "border-white/10 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur hover:border-[#D6A556]/50 hover:from-white/8 hover:to-white/4"
                          : "border-gray-200 bg-white shadow-lg hover:shadow-2xl hover:border-[#D6A556]/30"
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D6A556]/0 via-transparent to-[#D6A556]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative">
                        <div
                          className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 ${
                            isDark
                              ? "bg-gradient-to-br from-[#D6A556]/20 to-[#D6A556]/10 text-[#D6A556] group-hover:from-[#D6A556]/40 group-hover:to-[#D6A556]/20"
                              : "bg-gradient-to-br from-[#D6A556]/15 to-[#D6A556]/5 text-[#D6A556]"
                          }`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>
                        <p
                          className={`mb-3 text-lg font-bold leading-tight transition-colors duration-300 ${isDark ? "text-white group-hover:text-[#D6A556]" : "text-gray-900"}`}
                        >
                          {feature.title}
                        </p>
                        <p
                          className={`text-sm leading-relaxed ${isDark ? "text-white/50 group-hover:text-white/70" : "text-gray-600"}`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Experience Section - Redesigned */}
          <div className="mb-32 grid items-center gap-16 lg:grid-cols-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#D6A556] via-[#E8B86F] to-[#D6A556] opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-300" />
              <div className="relative overflow-hidden rounded-3xl bg-[#000208]">
                <div className="relative aspect-4/3">
                  <Image
                    src="/images/academia/clase.jpg"
                    alt="Entorno de trading profesional"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div
                  className={`absolute inset-0 ${
                    isDark
                      ? "bg-linear-to-tr from-[#000208]/40 via-transparent to-[#D6A556]/10"
                      : "bg-linear-to-tr from-black/40 to-transparent"
                  }`}
                />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#000208] to-transparent" />
              </div>
            </div>

            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D6A556]/30 bg-[#D6A556]/5 px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-[#D6A556]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D6A556]">
                  Experiencia real
                </span>
              </div>

              <h3 className="text-4xl font-black leading-tight text-white mb-6">
                Aprende en un entorno
                <br />
                <span className="bg-linear-to-r from-[#D6A556] to-[#E8B86F] bg-clip-text text-transparent">
                  100% profesional
                </span>
              </h3>

              <p className="mb-8 text-lg leading-relaxed text-white/70">
                No es una plataforma. Es un verdadero entorno de trading con
                múltiples pantallas, análisis en tiempo real y dinámica de
                equipo profesional. Donde la teoría se convierte en ejecución.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: "✓",
                    text: "Análisis técnico en tiempo real con múltiples fuentes",
                  },
                  {
                    icon: "✓",
                    text: "Operaciones en vivo con acompañamiento directo",
                  },
                  {
                    icon: "✓",
                    text: "Retroalimentación inmediata en cada operación",
                  },
                  {
                    icon: "✓",
                    text: "Ambiente colaborativo con traders profesionales",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#D6A556]/15 text-[#D6A556] font-bold text-sm group-hover/item:bg-[#D6A556]/25 transition-colors">
                      {item.icon}
                    </div>
                    <p className="text-base leading-relaxed text-white/80 group-hover/item:text-white transition-colors">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials - Enhanced */}
          <div className="mb-32">
            <div className="mb-16 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D6A556]/30 bg-[#D6A556]/5 px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-[#D6A556]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D6A556]">
                  Historias de éxito
                </span>
              </div>
              <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">
                Lo que dicen nuestros
                <br />
                <span className="bg-linear-to-r from-[#D6A556] via-[#E8B86F] to-[#D6A556] bg-clip-text text-transparent">
                  alumnos
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
                Testimonios reales de traders que transformaron su carrera con
                nuestra metodología
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {academiaTestimonials.map((testimonial, idx) => (
                <div
                  key={testimonial.name}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-white/4 to-white/2 p-8 backdrop-blur transition-all duration-300 hover:border-[#D6A556]/50 hover:from-white/12 hover:via-white/8 hover:to-white/4 hover:-translate-y-1"
                >
                  <div className="absolute -top-1 -right-1 h-40 w-40 bg-gradient-to-br from-[#D6A556]/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    {/* Stars */}
                    <div className="mb-6 flex gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 text-[#D6A556] fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="mb-8 text-lg leading-relaxed text-white/90 italic font-medium">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#D6A556]/30">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-[#D6A556]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA - Side by Side Layout */}
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left: Content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D6A556]/30 bg-[#D6A556]/5 px-4 py-2">
                <div className="h-2 w-2 rounded-full bg-[#D6A556]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#D6A556]">
                  Acceso a la formación
                </span>
              </div>

              <h2 className="mb-8 text-5xl font-black leading-tight text-white lg:text-6xl">
                Acceso a tu
                <br />
                <span className="bg-linear-to-r from-[#D6A556] via-[#E8B86F] to-[#D6A556] bg-clip-text text-transparent">
                  formación profesional
                </span>
              </h2>

              <p className="mb-6 text-lg leading-relaxed text-white/70">
                Trabajamos con un número controlado de estudiantes para mantener
                la calidad del entorno, el acompañamiento y la práctica en
                tiempo real.
                <br />
                Por esta razón, los espacios disponibles se asignan conforme se
                van reservando.
              </p>

              <p className="mb-10 text-sm font-medium text-white/80">
                Asegura tu lugar y forma parte del próximo grupo operativo.
              </p>

              <div className="mb-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={academyWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#D6A556] px-12 py-4 text-base font-bold uppercase tracking-widest text-black transition-all duration-300 animate-soft-pulse hover:-translate-y-1 hover:bg-[#E8B86F] hover:shadow-2xl"
                >
                  {/* Glow */}
                  <span className="absolute inset-0 -z-10 rounded-full bg-[#D6A556]/20 blur-xl opacity-70"></span>
                  Reservar mi espacio
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-[#000208] bg-gradient-to-br from-[#D6A556] to-[#E8B86F]"
                    />
                  ))}
                </div>
                <div className="text-sm text-white/60">
                  <p className="font-semibold text-white">
                    +150 traders activos
                  </p>
                  <p>Operando juntos en vivo</p>
                </div>
              </div>

              <p className="mt-4 text-xs text-white/50">
                Los espacios se liberan según la capacidad operativa del
                entorno.
              </p>
            </div>

            {/* Right: Image */}
            <div className="flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-3xl">
                <div className="group relative aspect-4/3">
                  <Image
                    src="/images/academia/clase.jpg"
                    alt="Entorno profesional de trading en vivo"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Info Badges Below Image */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#D6A556]/20 bg-[#D6A556]/5 p-5">
                  <p className="mb-1 text-2xl font-black text-[#D6A556]">
                    +4.9★
                  </p>
                  <p className="text-xs text-white/60">Calificación promedio</p>
                </div>
                <div className="rounded-2xl border border-[#D6A556]/20 bg-[#D6A556]/5 p-5">
                  <p className="mb-1 text-2xl font-black text-[#D6A556]">
                    150+
                  </p>
                  <p className="text-xs text-white/60">Traders activos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-10 w-full">
        <div className="mx-auto max-w-full ">
          <LandingContact />
        </div>
      </section>
    </section>
  );
}

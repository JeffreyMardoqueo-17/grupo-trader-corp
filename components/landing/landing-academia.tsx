"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { LandingContact } from "./landing-contact";
 

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
      {/* Hero con imagen de fondo - toda la pantalla */}
      <div className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Images Carousel */}
         <div className="absolute inset-0 bg-black">
           {carouselImages.map((image, index) => (
             <div
               key={image.src}
               className="absolute inset-0"
               style={{ opacity: index === currentImage ? 1 : 0, transition: "none" }}
             >
               <Image
                 src={image.src}
                 alt={image.alt}
                 fill
                 className="object-cover"
                 priority={index === 0}
               />
             </div>
           ))}

          {/* Dark Overlay - siempre oscuro para ambos modos */}
          <div className="absolute inset-0 bg-black/85" />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
          />

          {/* Radial Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>

        {/* Contenido del Hero */}
        <div className="container relative z-10 mx-auto max-w-6xl px-6 h-full flex items-center">
          <div className="max-w-4xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D6A556]" />
              Academia de Trading
            </span>

            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Aprenda a operar con{" "}
              <span className="text-[#D6A556]">estructura</span>, no con
              improvisación
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Formación completa desde cero hasta ejecución real en mercado
            </p>

            <a
              href={academyWhatsAppLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#D6A556] px-8 py-4 text-base font-semibold text-[#000418] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e6b566]"
            >
              Quiero aprender trading
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
        </div>

        {/* Gradiente de transición suave hacia el contenido */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000208] to-transparent" />
      </div>

      {/* Resto del contenido */}
       <div className={`relative ${isDark ? "bg-[#000208]" : "bg-white"}`}>
         {isDark && (
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,144,226,0.08),transparent_45%),linear-gradient(180deg,#000208,#050b18)]" />
         )}
         {!isDark && (
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,165,86,0.06),transparent_45%),linear-gradient(180deg,#ffffff,#fafafa)]" />
         )}
         <div className="container relative z-10 mx-auto max-w-6xl px-6 py-20">
          <div className="mb-20">
            <h3
              className={`mb-6 text-center text-2xl font-bold sm:text-3xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Formación integral
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 sm:gap-4 sm:overflow-visible sm:pb-0">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`group relative min-w-[200px] overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:-translate-y-0.5 sm:min-w-0 ${
                      isDark
                        ? "border-white/5 bg-white/[0.02] hover:border-[#D6A556]/30 hover:bg-white/[0.04]"
                        : "border-gray-100 bg-white shadow-sm hover:border-[#D6A556]/30 hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${
                        isDark
                          ? "bg-[#D6A556]/10 text-[#D6A556]"
                          : "bg-[#D6A556]/5 text-[#D6A556]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <p
                      className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                      {feature.title}
                    </p>
                    <p
                      className={`mt-1 text-xs leading-tight ${isDark ? "text-white/50" : "text-gray-500"}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Experience Section - Split Layout */}
          <div className="mb-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative aspect-4/3">
                <Image
                  src="/images/academia/clase.jpg"
                  alt="Entorno de trading profesional"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className={`absolute inset-0 ${
                  isDark
                    ? "bg-gradient-to-tr from-[#000208]/60 to-transparent"
                    : "bg-gradient-to-tr from-black/30 to-transparent"
                }`}
              />
            </div>
            <div>
              <h3
                className={`mb-6 text-3xl font-bold sm:text-4xl ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Experiencia real de <span className={blueAccent}>mercado</span>
              </h3>
              <p
                className={`mb-6 leading-relaxed ${isDark ? "text-white/60" : "text-gray-600"}`}
              >
                Aprende en un entorno profesional con múltiples pantallas,
                análisis en tiempo real y dinámica de equipo. No solo consumes
                información, desarrollas habilidades reales.
              </p>
              <div
                className={`space-y-4 p-6 ${
                  isDark ? "border-white/5" : "border-gray-100 bg-white "
                }`}
              >
                {[
                  "Análisis en tiempo real",
                  "Múltiples pantallas",
                  "Dinámica de equipo",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className={`h-2 w-2 rounded-full ${blueAccent.replace("text", "bg")}`}
                    />
                    <span
                      className={isDark ? "text-white/70" : "text-gray-600"}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div
              className={`relative overflow-hidden rounded-3xl p-10 sm:p-16 ${
                isDark ? "" : ""
              }`}
            >
              {isDark && (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,144,226,0.1),transparent_70%)]" />
              )}
              <div className="relative">
                <h3
                  className={`text-3xl font-bold sm:text-4xl lg:text-5xl ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Convierte tu aprendizaje en{" "}
                  <span className={blueAccent}>resultados reales</span>
                </h3>
                <p
                  className={`mx-auto mt-4 max-w-2xl text-lg ${isDark ? "text-white/60" : "text-gray-500"}`}
                >
                  Únete a una comunidad que opera con estructura y disciplina
                </p>
                <a
                  href={academyWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 bg-[#D6A556] hover:bg-[#D6A556]/90"
                >
                  Comenzar ahora
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
            </div>
          </div>
          <LandingContact />
        </div>
      </div>
    </section>
  );
}

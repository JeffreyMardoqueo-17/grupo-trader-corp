"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { buildWhatsAppLink } from "@/lib/whatsapp";

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function AwardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

const sectionPills = [
  { id: "inicio", label: "Inicio" },
  { id: "nosotros", label: "Nosotros" },
  { id: "denis", label: "Denis" },
  { id: "academia", label: "Academia" },
  { id: "copytrading", label: "CopyTrading" },
  { id: "testimonios", label: "Testimonios" },
  { id: "contacto", label: "Contacto" },
];

export function LandingHero() {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState("inicio");
  const isDark = theme === "dark";
  const currentSectionLabel = sectionPills.find((section) => section.id === activeSection)?.label ?? "Inicio";

  const stats = [
    { label: "Traders activos", value: "500+", icon: UsersIcon },
    { label: "Rentabilidad media", value: "24%", icon: TrendingUpIcon },
    { label: "Años de experiencia", value: "10+", icon: AwardIcon },
  ];

  useEffect(() => {
    const elements = sectionPills
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.25, 0.4, 0.55, 0.7],
        rootMargin: "-18% 0px -58% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }}
        />
        {!isDark && (
          <>
            <div 
              className="absolute -top-40 -right-40 w-125 h-125 rounded-full opacity-10 blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(214,165,86,0.32) 0%, rgba(214,165,86,0.10) 38%, transparent 72%)' }}
            />
            <div 
              className="absolute top-1/2 -left-32 w-100 h-100 rounded-full opacity-10 blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(74,144,226,0.22) 0%, rgba(74,144,226,0.08) 42%, transparent 74%)' }}
            />
          </>
        )}
        {isDark && (
          <>
            <div 
              className="absolute -top-40 -right-40 w-125 h-125 rounded-full opacity-30 blur-3xl"
              style={{ background: 'linear-gradient(180deg, #000208, #041935)' }}
            />
            <div 
              className="absolute top-1/2 -left-32 w-100 h-100 rounded-full opacity-20 blur-3xl"
              style={{ background: 'linear-gradient(180deg, #4A90E2, #041935)' }}
            />
          </>
        )}
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D6A556]/10 border border-[#D6A556]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D6A556] animate-pulse" />
              <span className="text-sm font-medium text-[#D6A556]">
                Educación Profesional en Trading
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              <span className={isDark ? "text-white" : "text-gray-900"}>
                Aprende a operar en los mercados financieros con{" "}
              </span>
              <span className="text-[#D6A556] font-bold">estrategia</span>
              <span className={isDark ? "text-white" : "text-gray-900"}> y </span>
              <span className="text-[#D6A556] font-bold">precisión</span>
            </h1>

            <p className={`text-lg sm:text-xl leading-relaxed mb-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Accede a educación profesional en trading bancario y replica operaciones en tiempo real con nuestro sistema de CopyTrading.
            </p>

            <p className={`text-sm mb-8 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              No necesitas experiencia, necesitas la comunidad y el sistema correcto.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href={buildWhatsAppLink("Hola, estoy interesado/a y quiero saber más sobre los servicios de trading.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D6A556] rounded-xl font-semibold text-white hover:bg-[#D6A556]/90 transition-all duration-200 shadow-lg shadow-[#D6A556]/20 hover:shadow-xl hover:shadow-[#D6A556]/30 hover:-translate-y-0.5"
              >
                Empezar ahora
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              {/* <Link
                href="#proceso"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all duration-200 ${
                  isDark 
                    ? "border border-gray-700 text-white hover:bg-white/5" 
                    : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <PlayIcon className="w-4 h-4" />
                Ver cómo funciona
              </Link> */}
            </div>

            {/* <div className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 backdrop-blur-sm ${
              isDark ? "border-white/10 bg-white/5" : "border-black/5 bg-white"
            }`}>
              <span className="h-2 w-2 rounded-full bg-[#D6A556] shadow-[0_0_0_6px_rgba(214,165,86,0.14)]" />
              <div className="flex flex-col">
                <span className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${isDark ? "text-white/45" : "text-gray-400"}`}>
                  Sección activa
                </span>
                <span className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                  {currentSectionLabel}
                </span>
              </div>
            </div> */}
          </div>

          <div className="relative">
            <div className="relative aspect-16/10 sm:aspect-3/2 lg:aspect-4/3 xl:aspect-16/10 rounded-3xl overflow-hidden shadow-2xl -mt-16 lg:mt-0">
              <Image
                src="/images/inversionistas.jpeg"
                alt="Trader profesional operando"
                fill
                className="object-cover object-bottom"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/70 mb-0.5">Tu progreso</p>
                    <p className="text-xl font-bold text-white">+24.5%</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#4A90E2] flex items-center justify-center">
                    <TrendingUpIcon className="w-5 h-5 text-[#0e1427]" />
                  </div>
                </div>
              </div> */}
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-blue-500/20 blur-xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-indigo-500/20 blur-xl -z-10" />
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-[#D6A556]" />
                  <span className={`text-2xl sm:text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                    {stat.value}
                  </span>
                </div>
                <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

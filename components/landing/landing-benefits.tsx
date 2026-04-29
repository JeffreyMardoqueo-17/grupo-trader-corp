"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";

// Premium thin-line icons
function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m7.784-4.817a.75.75 0 00-.925.745l1.375 4.854m-5.234-9.48A.75.75 0 0015 2.75h-6a.75.75 0 00-.841.566m11.84 11.434c0 1.588-.643 3.038-1.689 4.077C16.294 20.313 14.319 21 12 21c-2.318 0-4.294-.687-5.47-1.973C5.485 18.022 4.75 16.494 4.75 14.844V7.75a.75.75 0 01.568-.738A49.528 49.528 0 0112 6.25c2.248 0 4.394.125 6.457.368.38.05.68.328.68.75v7.094z" />
    </svg>
  );
}

function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4 4 8.96-8.96m-.005 7.5H21M3 21v-4.5" />
    </svg>
  );
}

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c4.97 0 9 3.582 9 8s-4.03 8-9 8-9-3.582-9-8 4.03-8 9-8zm0 0l3.5-3.5m0 0l3.5 3.5m-7 0l-3.5-3.5m0 0l-3.5 3.5" />
    </svg>
  );
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function HeadsetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

const benefits = [
  {
    icon: ShieldCheckIcon,
    title: "Sin experiencia necesaria",
    desc: "Diseñado desde cero para cualquiera que quiera aprender.",
  },
  {
    icon: TrendingUpIcon,
    title: "Aprendizaje real",
    desc: "Aprende viendo operaciones y análisis de mercado real.",
  },
  {
    icon: CompassIcon,
    title: "Ruta guiada",
    desc: "Ahorras tiempo con una trayectoria clara y medible.",
  },
  {
    icon: CheckCircleIcon,
    title: "Estrategias probadas",
    desc: "Sistemas validados con historial comprobable.",
  },
  {
    icon: EyeIcon,
    title: "Transparencia total",
    desc: "Cada operación, cada decisión, completamente visible.",
  },
  {
    icon: LockIcon,
    title: "Control total",
    desc: "Tú siempre mantienes el control de tu cuenta.",
  },
  {
    icon: UsersIcon,
    title: "Comunidad privada",
    desc: "Conecta con traders de verdad en un espacio exclusivo.",
  },
  {
    icon: HeadsetIcon,
    title: "Acompañamiento personalizado",
    desc: "Soporte real y feedback directo cuando lo necesitas.",
  },
];

export function LandingBenefits() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const duplicatedBenefits = [...benefits, ...benefits];

  // Handle click outside to resume
  useEffect(() => {
    if (!isPaused) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsPaused(false);
        setSelectedCard(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isPaused]);

  const handleCardClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    const actualIndex = index % benefits.length;
    
    if (isPaused && selectedCard === actualIndex) {
      setIsPaused(false);
      setSelectedCard(null);
    } else {
      setIsPaused(true);
      setSelectedCard(actualIndex);
    }
  };

  return (
     <section id="beneficios" ref={containerRef} className="relative px-4 py-10 sm:py-12 overflow-x-hidden">

      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A556]">
            ¿Por qué elegirnos?
          </p>
          <h2 className={`mt-2 text-2xl font-bold tracking-tight sm:text-3xl ${isDark ? "text-white" : "text-gray-900"}`}>
            Una forma más inteligente de convertirse en trader
          </h2>
          <p className={`mx-auto mt-3 max-w-xl text-sm ${isDark ? "text-white/60" : "text-gray-600"}`}>
            Menos ruido. Más claridad. Un sistema diseñado para resultados reales.
          </p>
        </div>

        {/* Horizontal Auto-Scrolling Carousel */}
        <div className="relative overflow-hidden">
          {/* Left gradient mask */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent dark:from-transparent dark:to-transparent" />
          {/* Right gradient mask */} 
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent dark:from-transparent dark:to-transparent" />

          {/* Carousel inner container - Fixed elegant speed */}
          <div
            className="flex gap-4 w-max pb-2"
            style={{
              animation: 'scroll 45s linear infinite',
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {duplicatedBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const actualIndex = index % benefits.length;
              const isSelected = selectedCard === actualIndex;
              
              return (
                <div
                  key={`${benefit.title}-${index}`}
                  className={`relative min-w-[240px] sm:min-w-[280px] p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-[#D6A556] bg-[#D6A556]/10"
                      : isDark
                        ? "border-white/5 bg-white/[0.03] hover:border-[#D6A556]/30 hover:bg-white/[0.06]"
                        : "border-gray-200 bg-white hover:border-[#D6A556]/50 hover:shadow-md"
                  }`}
                  onClick={(e) => handleCardClick(e, index)}
                >
                  <div className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#D6A556]/20 bg-[#D6A556]/10 text-[#D6A556]`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-1`}>
                    {benefit.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDark ? "text-white/60" : "text-gray-600"}`}>
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom thin progress bar */}
        <div className={`mt-6 h-[2px] ${isDark ? "bg-white/5" : "bg-gray-200"} rounded-full overflow-hidden`}>
          <div 
            className={`h-full bg-gradient-to-r ${isDark ? "from-[#041935] via-[#D6A556] to-[#041935]" : "from-gray-400 via-[#D6A556] to-gray-400"} rounded-full`}
            style={{
              animation: 'progress 45s linear infinite',
              animationPlayState: isPaused ? "paused" : "running",
            }}
          />
        </div>
      </div>

      {/* Scroll animation keyframes */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}

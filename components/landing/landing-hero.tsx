"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/* ================= ICONS ================= */

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 21H3v-1a6 6 0 0112 0v1z" />
    </svg>
  );
}

function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
    </svg>
  );
}

function AwardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" />
    </svg>
  );
}

/* ================= HERO ================= */
export function LandingHero() {
  const stats = [
    { label: "Traders formados", value: "500+", icon: UsersIcon },
    { label: "Rentabilidad media", value: "24%", icon: TrendingUpIcon },
    { label: "Años de experiencia", value: "10+", icon: AwardIcon },
  ];

  const heroImages = [
    { src: "/images/ia/clasesprecencial.png", alt: "Clases presenciales" },
    { src: "/images/ia/claseslinea.png", alt: "Clases en línea" },
    { src: "/images/herobaground.jpg", alt: "Background hero" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden bg-[#03050a]"
    >
      <div className="mx-auto w-full px-4 sm:px-6 py-16 sm:py-24 md:py-28 lg:py-0 lg:min-h-screen lg:flex lg:items-center lg:max-w-7xl">
        <div className="grid w-full items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-2">

          {/* ================= LEFT ================= */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Aprende a operar en mercados financieros junto a{" "}
              <span className="text-[#D6A556]">traders profesionales</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 leading-relaxed">
              Formación real en trading bancario, análisis institucional y
              CopyTrading en tiempo real. Estrategia, disciplina y gestión de riesgo.
            </p>

            <div className="flex flex-wrap gap-6 sm:gap-8 mb-8 sm:mb-12">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2">
                    <stat.icon className="w-5 h-5 text-[#D6A556]" />
                    <span className="text-xl sm:text-2xl font-bold text-white">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#pilares"
              className="group relative inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#D6A556] text-[#0b1020] font-semibold text-sm sm:text-base rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="absolute inset-0 bg-white/30 opacity-0 scale-75 transition-all group-hover:opacity-100 group-hover:scale-100" />
              <span className="relative z-10 flex items-center gap-2">
                Conoce las oportunidades
                <ArrowRightIcon className="w-4 h-4" />
              </span>
            </a>
          </div>

          {/* ================= RIGHT ================= */}

          {/* ===== MOBILE / TABLET: CARRUSEL ===== */}
          <div className="relative w-full h-72 sm:h-80 md:h-96 lg:hidden flex items-center justify-center overflow-hidden">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0.3, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-48 sm:w-56 md:w-64 aspect-4/5 rounded-3xl overflow-hidden shadow-2xl ring-2 ring-[#D6A556]/30"
            >
              <Image 
                src={heroImages[currentImage].src}
                alt={heroImages[currentImage].alt}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Indicadores de puntos - Mejorados */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`transition-all duration-200 ${
                    idx === currentImage 
                      ? "w-8 h-3 bg-[#D6A556] rounded-full shadow-lg" 
                      : "w-2.5 h-2.5 bg-white/50 rounded-full hover:bg-white/70"
                  }`}
                  aria-label={`Imagen ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ===== DESKTOP ===== */}
          <div className="relative hidden lg:block h-144">

            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 w-60 aspect-4/5 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image src="/images/ia/clasesprecencial.png" alt="" fill className="object-cover" />
            </div>

            <div className="absolute top-40 left-0 z-20 w-56 aspect-4/5 rounded-2xl overflow-hidden shadow-lg -rotate-3 ring-1 ring-white/10">
              <Image src="/images/ia/claseslinea.png" alt="" fill className="object-cover" />
            </div>

            <div className="absolute top-52 right-0 z-20 w-56 aspect-4/5 rounded-2xl overflow-hidden shadow-lg rotate-3 ring-1 ring-white/10">
              <Image src="/images/herobaground.jpg" alt="" fill className="object-cover" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
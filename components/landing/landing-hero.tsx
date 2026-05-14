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
      {/* ===== TREND BACKGROUND ===== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1600 900"
          className="absolute bottom-[-120px] left-0 w-full h-full opacity-40"
          preserveAspectRatio="none"
        >
          {/* Blur Glow */}
          <path
            d="
              M0,760
              L180,720
              L320,610
              L460,640
              L620,500
              L780,560
              L960,390
              L1120,450
              L1280,260
              L1440,320
              L1600,140
            "
            fill="none"
            stroke="url(#heroGlow)"
            strokeWidth="18"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#blur)"
            opacity="0.7"
          />

          {/* Main Soft Line */}
          <path
            d="
              M0,760
              L180,720
              L320,610
              L460,640
              L620,500
              L780,560
              L960,390
              L1120,450
              L1280,260
              L1440,320
              L1600,140
            "
            fill="none"
            stroke="url(#heroLine)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />

          {/* Animated Light */}
          <path
            d="
              M0,760
              L180,720
              L320,610
              L460,640
              L620,500
              L780,560
              L960,390
              L1120,450
              L1280,260
              L1440,320
              L1600,140
            "
            fill="none"
            stroke="url(#movingLight)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="260 1400"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="1600"
              to="-1600"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>

          <defs>
            {/* Gold Blur */}
            <linearGradient
              id="heroGlow"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#d7a45600" />
              <stop offset="50%" stopColor="#d7a456" />
              <stop offset="100%" stopColor="#d7a45600" />
            </linearGradient>

            {/* Main Gold */}
            <linearGradient
              id="heroLine"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#d7a45600" />
              <stop offset="50%" stopColor="#d7a456" />
              <stop offset="100%" stopColor="#d7a45600" />
            </linearGradient>

            {/* Moving Glow */}
            <linearGradient
              id="movingLight"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#ffffff00" />
              <stop offset="50%" stopColor="#fff4d2" />
              <stop offset="100%" stopColor="#ffffff00" />
            </linearGradient>

            {/* Blur */}
            <filter id="blur">
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="mx-auto w-full px-4 sm:px-6 py-0 pt-24 sm:pt-32 lg:min-h-screen lg:flex lg:items-center lg:justify-center lg:max-w-7xl relative z-10">
        <div className="grid w-full items-center gap-12 sm:gap-16 lg:gap-20 lg:grid-cols-2 py-24 sm:py-32 lg:py-0">

          {/* ================= LEFT ================= */}
          <div className="space-y-8">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] tracking-tight text-white">
                Aprenda a operar en la <span className="bg-gradient-to-r from-[#D6A556] via-[#e0b365] to-[#D6A556] bg-clip-text text-transparent">Bolsa de valores</span> junto a <span className="text-[#D6A556]">traders profesionales</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-md leading-relaxed">
                Trading bancario + análisis institucional + CopyTrading en vivo. Sin atajos, con estrategia.
              </p>
            </motion.div>

            {/* Stats Grid - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 py-2"
            >
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D6A556]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-4 rounded-2xl border border-white/5 hover:border-[#D6A556]/30 transition-all duration-300 backdrop-blur-sm bg-white/3">
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className="w-5 h-5 text-[#D6A556]" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-black text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <a
                href="#pilares"
                className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#D6A556] to-[#e0b365] text-[#0b1020] font-bold text-base sm:text-lg rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(214,165,86,0.4)] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-3">
                  Empieza ahora
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRightIcon className="w-5 h-5" />
                  </motion.div>
                </span>
              </a>
            </motion.div>
          </div>

          {/* ================= RIGHT ================= */}

          {/* ===== MOBILE / TABLET: CARRUSEL ===== */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-full h-72 sm:h-80 md:h-96 lg:hidden flex items-center justify-center overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-[#D6A556]/20 via-transparent to-[#D6A556]/10 rounded-full scale-125" />
            
            <motion.div
              key={currentImage}
              initial={{ opacity: 0.3, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-48 sm:w-56 md:w-64 aspect-4/5 rounded-3xl overflow-hidden shadow-2xl ring-2 ring-[#D6A556]/50"
            >
              <div className="relative w-full h-full">
                <Image 
                  src={heroImages[currentImage].src}
                  alt={heroImages[currentImage].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, (max-width: 1024px) 40vw, 320px"
                  priority
                />
              </div>
              {/* Shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-3xl" />
            </motion.div>

            {/* Indicadores de puntos */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {heroImages.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  whileHover={{ scale: 1.2 }}
                  className={`transition-all duration-300 ${
                    idx === currentImage 
                      ? "w-10 h-3 bg-gradient-to-r from-[#D6A556] to-[#e0b365] rounded-full shadow-lg shadow-[#D6A556]/50" 
                      : "w-3 h-3 bg-white/30 rounded-full hover:bg-white/60"
                  }`}
                  aria-label={`Imagen ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* ===== DESKTOP ===== */}
          <div className="relative hidden lg:block h-144">
            {/* Glow background */}
            <div className="absolute -inset-20 blur-3xl bg-gradient-to-br from-[#D6A556]/15 via-transparent to-[#D6A556]/10 rounded-full" />

            {/* Center: Main Image */}
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-72 aspect-4/5 rounded-3xl overflow-hidden shadow-2xl ring-2 ring-[#D6A556]/40"
            >
              <div className="relative w-full h-full">
                <Image src="/images/ia/clasesprecencial.png" alt="Clase presencial" fill className="object-cover" sizes="288px" priority />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl" />
            </motion.div>

            {/* Left: Tilted */}
            <motion.div 
              initial={{ opacity: 0, x: -60, rotateZ: -15 }}
              animate={{ opacity: 1, x: 0, rotateZ: -8 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute top-32 left-0 z-20 w-56 aspect-4/5 rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10"
            >
              <div className="relative w-full h-full">
                <Image src="/images/ia/claseslinea.png" alt="Clase en línea" fill className="object-cover" sizes="224px" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl" />
            </motion.div>

            {/* Right: Tilted */}
            <motion.div 
              initial={{ opacity: 0, x: 60, rotateZ: 15 }}
              animate={{ opacity: 1, x: 0, rotateZ: 8 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute top-44 right-0 z-20 w-56 aspect-4/5 rounded-2xl overflow-hidden shadow-xl ring-1 ring-white/10"
            >
              <div className="relative w-full h-full">
                <Image src="/images/herobaground.jpg" alt="Background hero" fill className="object-cover" sizes="224px" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
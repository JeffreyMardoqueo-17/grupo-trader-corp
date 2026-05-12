"use client";

import Image from "next/image";
import { useTheme } from "@/components/theme-provider";
// import { LandingTeam } from "./landing-team";

export function LandingDenis() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const gold = "text-[#D6A556]";
  const goldBg = "bg-[#D6A556]/10";
  const goldGlow = isDark ? "shadow-[#D6A556]/20" : "shadow-[#D6A556]/10";

  return (
    <section
      id="denis"
      className={`relative py-24 lg:py-40 overflow-hidden ${
        isDark
          ? "bg-[#0a0e1a]"
          : "bg-[#fafbfc]"
      }`}
    >
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDark
              ? "linear-gradient(to right, rgba(214,165,86,0.05) 1px, transparent 1px)"
              : "linear-gradient(to right, rgba(214,165,86,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 100%",
          }}
        />
      </div>
      
      <div className="relative container mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div
              className={`relative rounded-2xl overflow-hidden ${
                isDark 
                  ? "ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                  : "ring-1 ring-gray-200/50 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              }`}
              style={{ aspectRatio: "4 / 5" }}
            >
              <div className="relative h-full w-full">
                <Image
                  src="/images/denis.jpg"
                  alt="Denis Gutiérrez - Fundador Grupo Trade Corp"
                  fill
                  className="object-cover object-top"
                  sizes=""
                />
              </div>
              <div
                className={`absolute inset-0 bg-linear-to-t ${
                  isDark ? "from-[#0a0e1a]/70 via-transparent to-transparent" : "from-black/10 to-transparent"
                }`}
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-3">
              <span
                className={`text-xs font-bold tracking-widest uppercase ${
                  isDark ? "text-[#D6A556]" : "text-[#9a6f28]"
                }`}
              >
                Fundador · Mentor
              </span>
              <h2
                className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none ${
                  isDark ? "text-white" : "text-[#0a0e1a]"
                }`}
              >
                Denis<br />Gutiérrez
              </h2>
            </div>

            <blockquote
              className={`text-2xl sm:text-3xl font-bold leading-snug ${gold}`}
            >
              "Piensa como los bancos."
            </blockquote>

            <div
              className={`space-y-4 text-base sm:text-lg leading-relaxed ${
                isDark ? "text-white/70" : "text-[#4a5568]"
              }`}
            >
              <p>
                Operador con más de 13 años de experiencia en mercados internacionales. Su enfoque se centra en enseñar cómo entender y ejecutar dentro de los mercados financieros con criterio y disciplina.
              </p>
              <p>
                Ha desarrollado una comunidad donde las personas aprenden a operar con estructura, no solo a consumir información.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-6 p-6 rounded-xl mt-8 ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-white/50 border border-gray-200/30"
              }`}
            >
              <div>
                <p className={`text-4xl sm:text-5xl font-black ${gold}`}>10+</p>
                <p className={`text-xs sm:text-sm mt-2 font-medium ${isDark ? "text-white/50" : "text-gray-600"}`}>
                  Años de experiencia
                </p>
              </div>
              <div>
                <p className={`text-4xl sm:text-5xl font-black ${gold}`}>4</p>
                <p className={`text-xs sm:text-sm mt-2 font-medium ${isDark ? "text-white/50" : "text-gray-600"}`}>
                  Mercados
                </p>
              </div>
              <div>
                <p className={`text-4xl sm:text-5xl font-black ${gold}`}>500+</p>
                <p className={`text-xs sm:text-sm mt-2 font-medium ${isDark ? "text-white/50" : "text-gray-600"}`}>
                  Traders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <LandingTeam /> */}
    </section>
  );
}
"use client";

import Image from "next/image";

/* ================= ICONS ================= */

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
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

function AwardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l6.857-2.143L12 3z" />
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

  return (
    <section id="inicio" className="relative min-h-[65vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center pt-16 scroll-mt-16">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ===== COLUMNA IZQUIERDA ===== */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Aprende a operar en mercados financieros junto a{" "}
              <span className="text-[#D6A556]">traders profesionales</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl">
              Formación real en trading bancario, análisis institucional y
              CopyTrading en tiempo real. Estrategia, disciplina y gestión de riesgo.
            </p>

            {/* ===== STATS ===== */}
            <div className="grid grid-cols-3 gap-6 mb-10 max-w-md">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-[#D6A556]" />
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* ===== CTA ===== */}
            <a
              href="#pilares"
              className="
                group relative inline-flex items-center gap-2
                px-7 py-3.5
                bg-[#D6A556] text-[#0b1020]
                font-semibold rounded-xl
                overflow-hidden
                shadow-lg
                transition-all duration-300
              "
            >
              <span
                className="
                  absolute inset-0
                  bg-white/30
                  opacity-0
                  scale-50
                  rounded-xl
                  transition-all duration-500
                  group-hover:opacity-100
                  group-hover:scale-100
                "
              />
              <span className="relative z-10 flex items-center gap-2">
                Conoce las oportunidades
                <ArrowRightIcon className="w-4 h-4" />
              </span>
            </a>
          </div>

          {/* ===== COLUMNA DERECHA (IMAGEN GRANDE) ===== */}
          <div className="relative w-full">
            <div style={{ aspectRatio: '16/10', minHeight: 180 }} className="w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/hero.jpg"
                alt="Trader operando desde celular"
                fill
                priority
                sizes="(max-width: 1500px) 100vw, 100vw"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
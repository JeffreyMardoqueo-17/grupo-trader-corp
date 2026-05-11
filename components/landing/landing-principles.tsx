"use client";

import { useTheme } from "@/components/theme-provider";

const values = [
  { number: "01", title: "Disciplina" },
  { number: "02", title: "Criterio" },
  { number: "03", title: "Responsabilidad" },
  { number: "04", title: "Crecimiento continuo" },
  { number: "05", title: "Valor" },
];

export function LandingPrinciples() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="principios"
      className={`relative overflow-hidden py-32 lg:py-40 scroll-mt-16 ${
        isDark ? "bg-[#0a0e1a]" : "bg-[#fafbfc]"
      }`}
    >
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDark
              ? "linear-gradient(to right, rgba(214,165,86,0.05) 1px, transparent 1px)"
              : "linear-gradient(to right, rgba(214,165,86,0.03) 1px, transparent 1px)",
            backgroundSize: "1000px 100%",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 h-auto">
        <div className="mb-20 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D6A556]">
            Nuestros Principios
          </span>
          <h2
            className={`mt-4 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl leading-none ${
              isDark ? "text-white" : "text-[#0a0e1a]"
            }`}
          >
            Construimos sobre
            <span className="block text-[#D6A556]">una base sólida</span>
          </h2>
        </div>

        {/* TOP CARDS */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* PRINCIPIOS */}
          <div className={`rounded-3xl border p-8 ${isDark ? "border-white/8" : "border-gray-200 bg-white"}`} style={isDark ? { backgroundColor: "rgba(255,255,255,0.03)" } : undefined}>
            <div className="mb-6 inline-flex rounded-full border border-[#D6A556]/20 bg-[#D6A556]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#D6A556]">
              Principios
            </div>

            <h3
              className={`text-3xl font-black tracking-tight ${
                isDark ? "text-white" : "text-[#0a0e1a]"
              }`}
            >
              Base estratégica
            </h3>

            <p
              className={`mt-5 text-sm leading-7 ${
                isDark ? "text-white/70" : "text-[#4a5568]"
              }`}
            >
              Construimos procesos basados en disciplina, estructura y visión de
              largo plazo. Cada decisión debe tener lógica, gestión y propósito.
            </p>
          </div>

          {/* MISION */}
          <div className={`rounded-3xl border p-8 ${isDark ? "border-white/8" : "border-gray-200 bg-white"}`} style={isDark ? { backgroundColor: "rgba(255,255,255,0.03)" } : undefined}>
            <div className="mb-6 inline-flex rounded-full border border-[#D6A556]/20 bg-[#D6A556]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#D6A556]">
              Misión
            </div>

            <h3
              className={`text-3xl font-black tracking-tight ${
                isDark ? "text-white" : "text-[#0a0e1a]"
              }`}
            >
              Crear valor real
            </h3>

            <p
              className={`mt-5 text-sm leading-7 ${
                isDark ? "text-white/70" : "text-[#4a5568]"
              }`}
            >
              Ayudar a personas y empresas a desarrollar criterio,
              responsabilidad financiera y capacidad estratégica para generar
              oportunidades sostenibles.
            </p>
          </div>

          {/* VISION */}
          <div className={`rounded-3xl border p-8 ${isDark ? "border-white/8" : "border-gray-200 bg-white"}`} style={isDark ? { backgroundColor: "rgba(255,255,255,0.03)" } : undefined}>
            <div className="mb-6 inline-flex rounded-full border border-[#D6A556]/20 bg-[#D6A556]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#D6A556]">
              Visión
            </div>

            <h3
              className={`text-3xl font-black tracking-tight ${
                isDark ? "text-white" : "text-[#0a0e1a]"
              }`}
            >
              Pensar a largo plazo
            </h3>

            <p
              className={`mt-5 text-sm leading-7 ${
                isDark ? "text-white/70" : "text-[#4a5568]"
              }`}
            >
              Convertirnos en una referencia en formación estratégica,
              desarrollo financiero y construcción de patrimonio con enfoque
              disciplinado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

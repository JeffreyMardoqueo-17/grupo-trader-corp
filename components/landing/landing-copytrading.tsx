"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { useTheme } from "@/components/theme-provider";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { LandingBenefits } from "@/components/landing/landing-benefits";
import { LandingContact } from "./landing-contact";

function AnimatedItem({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return <div>{children}</div>;
}

function StepCard({
  number,
  title,
  desc,
  isDark,
}: {
  number: number;
  title: string;
  desc: string;
  isDark: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 ${
        isDark
          ? "border-white/5 bg-white/[0.03] hover:border-[#D6A556]/30 hover:bg-white/[0.06]"
          : "border-gray-200 bg-white/50 hover:border-[#D6A556]/50 hover:bg-white/80"
      }`}
    >
      <div
        className={`absolute -right-4 -top-4 text-[80px] font-black select-none ${isDark ? "text-white/[0.03]" : "text-gray-900/[0.03]"}`}
      >
        {number}
      </div>
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border text-lg font-bold ${
          isDark
            ? "border-[#D6A556]/20 bg-[#D6A556]/10 text-[#D6A556]"
            : "border-[#D6A556]/30 bg-[#D6A556]/20 text-[#D6A556]"
        }`}
      >
        {number}
      </div>
      <h4
        className={`mb-2 text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
      >
        {title}
      </h4>
      <p
        className={`text-sm leading-relaxed ${isDark ? "text-white/60" : "text-gray-600"}`}
      >
        {desc}
      </p>
    </div>
  );
}

export function LandingCopyTrading() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const copyTradingWhatsAppLink = buildWhatsAppLink(
    "Buen día, quisiera saber más información sobre el copytrading.",
  );

  const features = [
    {
      title: "Seguimiento continuo",
      desc: "Monitorea cada operación en tiempo real",
      icon: EyeIcon,
    },
    {
      title: "Control total",
      desc: "Tu cuenta, tus reglas, tu decisión",
      icon: LockIcon,
    },
    {
      title: "Estrategia aplicada",
      desc: "Aprende viendo cómo se ejecutan las operaciones",
      icon: TrendingUpIcon,
    },
  ];

  function EyeIcon({ className }: { className?: string }) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    );
  }

  function LockIcon({ className }: { className?: string }) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    );
  }

  function TrendingUpIcon({ className }: { className?: string }) {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18L9 11.25l4 4 8.96-8.96m-.005 7.5H21M3 21v-4.5"
        />
      </svg>
    );
  }

  function InteractiveFeatures({
    isDark,
    features,
  }: {
    isDark: boolean;
    features: any[];
  }) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
      <div className="relative min-h-[500px] sm:min-h-[600px] rounded-2xl overflow-hidden">
        <Image
          src="/images/copy/segundofondo.jpg"
          alt="Estrategia real"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 flex flex-col justify-center min-h-[500px] sm:min-h-[600px] px-8 sm:px-16 lg:px-24 py-20">
          <div className="mb-16">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D6A556]">
              Estrategia real
            </p>
            <h2 className="mt-3 text-3xl font-black leading-[1.1] text-white sm:text-4xl lg:text-5xl">
              No se trata de
              <br />
              promesas rápidas.
              <br />
              <span className="text-white/40">
                Se trata de operar
                <br />
                con estructura.
              </span>
            </h2>
            <p className="mt-12 text-xl leading-relaxed text-white  ">
              Un entorno diseñado para que aprendas viendo operaciones reales,
              con seguimiento constante y sin perder el control de tu cuenta.
            </p>
          </div>

          <div className="max-w-2xl">
            {features.map((feature: any, i: number) => {
              const Icon = feature.icon;
              const isActive = activeIndex === i;

              return (
                <div key={feature.title}>
                  <button
                    onClick={() => setActiveIndex(isActive ? null : i)}
                    className="group w-full text-left py-5 flex items-center gap-5 transition-all duration-300"
                  >
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-black transition-all duration-500 ${
                        isActive
                          ? "bg-[#D6A556] text-[#041935] scale-110"
                          : "bg-white/10 text-white/40 group-hover:bg-[#D6A556]/20 group-hover:text-[#D6A556]"
                      }`}
                    >
                      {i + 1}
                    </div>

                    <div className="flex-1 min-w-0 border-b border-white/10 pb-5">
                      <div className="flex items-center justify-between">
                        <h4
                          className={`text-lg font-black transition-colors duration-300 ${
                            isActive
                              ? "text-[#D6A556]"
                              : "text-white group-hover:text-white/90"
                          }`}
                        >
                          {feature.title}
                        </h4>

                        <div className="flex-shrink-0">
                          <svg
                            className={`h-5 w-5 ${isActive ? "text-[#D6A556]" : "text-white/20"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>

                      {isActive && (
                        <p className="overflow-hidden text-sm text-white/70 mt-2 leading-relaxed">
                          {feature.desc}
                        </p>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const pasos = [
    {
      title: "Abres tu cuenta",
      desc: "Elige tu broker y abre tu cuenta de trading.",
    },
    {
      title: "Conectas el servicio",
      desc: "Enlaza tu cuenta con nuestro sistema de CopyTrading.",
    },
    {
      title: "Depositas en crypto",
      desc: "USDT, BTC, USDC o ETC - tú tienes el control.",
    },
    {
      title: "Operaciones automáticas",
      desc: "Las operaciones se replican automáticamente en tu cuenta - Retiros mensuales.",
    },
  ];

  return (
    <div className="relative overflow-x-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <AnimatedItem>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="order-1 lg:order-2">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#D6A556]/20 bg-[#D6A556]/5 px-5 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D6A556]" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A556]">
                  CopyTrading
                </span>
              </div>

              <h1 className="text-5xl font-black leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl text-white mb-8">
                Opera con <br />
                <span className="text-[#D6A556]">estructura institucional</span>
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-white/70 mb-10">
                Replicar operaciones reales sin perder el control de tu cuenta.
                Aprendes viendo estrategias en ejecución, con claridad total y
                gestión profesional.
              </p>

              <div className="mb-12 space-y-3">
                {[
                  "Sin experiencia previa necesaria",
                  "Operaciones verificables en tiempo real",
                  "Tu cuenta, tus reglas, tú controlas",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 h-2 w-2 rounded-full bg-[#D6A556]" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={copyTradingWhatsAppLink}
                  target="_blank"
                  rel="noreferrer"
                  className="animate-soft-pulse inline-flex items-center justify-center gap-3 rounded-full bg-[#D6A556] px-12 py-4 text-base font-bold uppercase tracking-widest text-black transition-all duration-300 hover:animate-none hover:bg-[#E8B86F] hover:shadow-2xl hover:-translate-y-1"
                >
                  Asegurar acceso
                  <svg
                    className="h-5 w-5"
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
            </div>

            <div className="flex items-center justify-center order-2 lg:order-1">
              <Image
                src="/images/copy/hero.jpg"
                alt="Captura de pantalla móvil"
                width={400}
                height={600}
                className="rounded-2xl object-contain w-44 sm:w-64 lg:w-auto h-auto"
                priority
              />
            </div>
          </div>
        </AnimatedItem>
        <AnimatedItem delay={0.1}>
          <div className="mt-20 relative">
            <InteractiveFeatures isDark={isDark} features={features} />
          </div>
        </AnimatedItem>

        <AnimatedItem delay={0.15}>
          <section className="mt-40">
            {/* HERO HEADER */}
            <div className="max-w-4xl mx-auto text-center mb-28">
              <span className="inline-block text-xs tracking-[0.35em] font-semibold uppercase text-[#D6A556] mb-6">
                Sistema de replicación
              </span>

              <h2 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-8">
                ¿Qué es
                <span className="block text-[#D6A556] mt-2">CopyTrading?</span>
              </h2>

              <div className="h-px w-24 bg-[#D6A556] mx-auto mb-10" />

              <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
                Replica operaciones reales directamente en tu cuenta. Observas
                cada movimient.
                <span className="text-white">
                  {" "}
                  No delegas tu capital, mantienes el control total.
                </span>
              </p>
            </div>

            {/* CONTENT */}
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
              {/* IMAGE */}
              <div className="relative h-[420px] lg:h-[540px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/copy/calendar.jpg"
                  alt="Sistema de CopyTrading"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col gap-14">
                {/* VALUE */}
                <div>
                  <p className="text-7xl font-extrabold text-[#D6A556] leading-none mb-4">
                    100%
                  </p>
                  <p className="text-2xl font-semibold text-white leading-snug max-w-xl">
                    Aprendes observando operaciones reales, ejecutadas con
                    capital real.
                  </p>
                </div>

                {/* LIST */}
                <ul className="space-y-6 text-white/80 max-w-xl">
                  {[
                    "Sin experiencia previa requerida",
                    "Operaciones verificables en tiempo real",
                    "Retiros y gestión bajo tu propio criterio",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <span className="text-[#D6A556] text-xl leading-none">
                        —
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* FOOTNOTE */}
                <p className="text-sm uppercase tracking-[0.25em] text-[#D6A556]/80">
                  Rendimientos históricos variables · 0% – 10% mensual
                </p>
              </div>
            </div>
          </section>
        </AnimatedItem>

        <AnimatedItem delay={0.2}>
          <div className="mt-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A556]">
                Proceso
              </p>
              <h2
                className={`mt-2 text-2xl font-bold sm:text-3xl ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Cómo funciona
              </h2>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 ">
              {pasos.map((paso, index) => (
                <StepCard
                  key={paso.title}
                  isDark={isDark}
                  number={index + 1}
                  title={paso.title}
                  desc={paso.desc}
                />
              ))}
            </div>
          </div>
        </AnimatedItem>
        <LandingBenefits />

        <AnimatedItem delay={0.25}>
          <div className="mt-32">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              {/* Left: Content */}
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D6A556]/20 bg-[#D6A556]/5 px-4 py-2">
                  <div className="h-2 w-2 rounded-full bg-[#D6A556]" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#D6A556]">
                    Próxima cohorte
                  </span>
                </div>

                <h2 className="text-5xl font-black leading-tight text-white mb-8 lg:text-6xl">
                  Acceso a tu
                  <br />
                  <span className="text-[#D6A556]">formación en vivo</span>
                </h2>

                <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-2xl">
                  Plazas limitadas para acceso al sistema de CopyTrading.
                  Acompañamiento directo, operaciones reales verificables y
                  certificación de desempeño.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <a
                    href={copyTradingWhatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="
      relative inline-flex items-center justify-center gap-3
      rounded-full bg-[#D6A556]
      px-12 py-4
      text-base font-bold uppercase tracking-widest text-black
      transition-all duration-300
      animate-softPulse
      hover:bg-[#E8B86F]
      hover:-translate-y-1
      hover:shadow-2xl
      hover:animate-none
    "
                  >
                    Asegurar acceso
                    <svg
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
                      +80 operadores activos
                    </p>
                    <p>Operando con estructura institucional</p>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative">
                <div className="relative min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-3xl bg-white/5 flex items-center justify-center">
                  <Image
                    src="/images/copy/bghero.jpg"
                    alt="CopyTrading en vivo"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedItem>
        <LandingContact />
      </div>
    </div>
  );
}

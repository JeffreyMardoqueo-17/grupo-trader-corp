"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { LandingBenefits } from "@/components/landing/landing-benefits";

function AnimatedItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function StepCard({ number, title, desc, isDark }: { number: number; title: string; desc: string; isDark: boolean }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 ${
        isDark
          ? "border-white/5 bg-white/[0.03] hover:border-[#D6A556]/30 hover:bg-white/[0.06]"
          : "border-gray-200 bg-white/50 hover:border-[#D6A556]/50 hover:bg-white/80"
      }`}
    >
      <div className={`absolute -right-4 -top-4 text-[80px] font-black select-none ${isDark ? "text-white/[0.03]" : "text-gray-900/[0.03]"}`}>
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
      <h4 className={`mb-2 text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{title}</h4>
      <p className={`text-sm leading-relaxed ${isDark ? "text-white/60" : "text-gray-600"}`}>{desc}</p>
    </div>
  );
}

function FeatureCard({ title, desc, isDark }: { title: string; desc: string; isDark: boolean }) {
  return (
    <div
      className={`flex items-start gap-3 rounded-xl border p-4 transition-all duration-300 ${
        isDark
          ? "border-white/5 bg-white/[0.02] hover:border-[#D6A556]/20"
          : "border-gray-200 bg-gray-100/50 hover:border-[#D6A556]/30"
      }`}
    >
      <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D6A556]" />
      <div>
        <h4 className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{title}</h4>
        <p className={`mt-1 text-xs leading-relaxed ${isDark ? "text-white/50" : "text-gray-600"}`}>{desc}</p>
      </div>
    </div>
  );
}

export function LandingCopyTrading() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const copyTradingWhatsAppLink = buildWhatsAppLink(
    "Buen día, quisiera saber más información sobre el copytrading."
  );
  const [currentImage, setCurrentImage] = useState(0);

  const carouselImages = [
    { src: "/images/copy/pantalla.jpg", alt: "Trading screens and analysis" },
    { src: "/images/copy/pantalla.jpg", alt: "Trading screens and analysis" },
    { src: "/images/copy/pantalla.jpg", alt: "Trading screens and analysis" },
  ];

  const features = [
    { title: "Seguimiento continuo", desc: "Monitorea cada operación en tiempo real" },
    { title: "Control total", desc: "Tu cuenta, tus reglas, tu decisión" },
    { title: "Estrategia aplicada", desc: "Aprende viendo cómo se ejecutan las operaciones" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const pasos = [
    { title: "Abres tu cuenta", desc: "Elige tu broker y abre tu cuenta de trading." },
    { title: "Conectas el servicio", desc: "Enlaza tu cuenta con nuestro sistema de CopyTrading." },
    { title: "Depositas en crypto", desc: "USDT, BTC, USDC o ETC - tú tienes el control." },
    { title: "Operaciones automáticas", desc: "Las operaciones se replican automáticamente en tu cuenta - Retiros mensuales." },
  ];

  return (
    <div className="relative">

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <AnimatedItem>
          <div className="mx-auto max-w-4xl text-center">
            <div className={`mb-8 inline-flex items-center gap-2 rounded-full border px-5 py-2 ${isDark ? "border-[#D6A556]/20 bg-[#D6A556]/10" : "border-[#D6A556]/30 bg-[#D6A556]/20"}`}>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D6A556]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A556]">CopyTrading</span>
            </div>

            <h1 className={`text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl ${isDark ? "text-white" : "text-gray-900"}`}>
              Opera con <span className="text-[#D6A556]">estructura</span>
              <br />
              Opera mientras  <span className="text-[#D6A556]">Aprendes</span>
            </h1>

            <p className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${isDark ? "text-white/60" : "text-gray-600"}`}>
              CopyTrading te permite acompañar estrategias reales dentro de tu propia cuenta,
              con control y claridad.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Sin experiencia previa", "Operaciones reales", "Tú mantienes el control"].map((item) => (
                <div
                  key={item}
                  className={`rounded-full border px-5 py-2.5 text-sm backdrop-blur-sm transition-all duration-300 ${
                    isDark
                      ? "border-white/10 bg-white/[0.05] text-white/70 hover:border-[#D6A556]/30 hover:bg-[#D6A556]/5"
                      : "border-gray-300 bg-white/50 text-gray-700 hover:border-[#D6A556]/40 hover:bg-white/80"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={copyTradingWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#D6A556] px-8 py-3.5 text-sm font-semibold text-[#000418] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e6b566] hover:shadow-lg hover:shadow-[#D6A556]/20"
              >
                Activar CopyTrading
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </AnimatedItem>

        <AnimatedItem delay={0.1}>
          <div className="mt-20 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A556]">Estrategia real</p>
              <h2 className={`mt-4 text-2xl font-bold leading-tight sm:text-3xl ${isDark ? "text-white" : "text-gray-900"}`}>
                No se trata de promesas rápidas.
                <br />
                <span className={isDark ? "text-white/60" : "text-gray-600"}>Se trata de operar con estructura.</span>
              </h2>
              <p className={`mt-4 text-sm leading-relaxed ${isDark ? "text-white/50" : "text-gray-600"}`}>
                Un entorno diseñado para que aprendas viendo operaciones reales,
                con seguimiento constante y sin perder el control de tu cuenta.
              </p>

              <div className="mt-6 space-y-2">
                {features.map((feature) => (
                  <FeatureCard key={feature.title} isDark={isDark} title={feature.title} desc={feature.desc} />
                ))}
              </div>
            </div>

            <div className="relative">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${isDark ? "border border-white/5 bg-white/[0.02]" : "border border-gray-200 bg-gray-100"}`}>
                <Image src={carouselImages[currentImage].src} alt={carouselImages[currentImage].alt} fill className="object-cover opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-t from-[#041935] via-transparent to-transparent" : "bg-gradient-to-t from-gray-200 via-transparent to-transparent"}`} />
              </div>
            </div>
          </div>
        </AnimatedItem>

        <AnimatedItem delay={0.15}>
          <div className="mt-16">
            <div className="mx-auto mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A556]">¿Qué es?</p>
              {/* <h2 className={`mt-2 text-2xl font-bold sm:text-3xl ${isDark ? "text-white" : "text-gray-900"}`}>
                CopyTrading
              </h2> */}
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="relative h-full min-h-[300px] lg:min-h-[400px] overflow-hidden rounded-2xl">
                <Image 
                  src="/images/copy/pantalla.jpg" 
                  alt="CopyTrading en acción" 
                  fill 
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? "from-black/70 via-black/20 to-transparent" : "from-black/50 via-transparent to-transparent"}`} />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-sm font-medium">Replica operaciones en tiempo real</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                  <span className="text-[#D6A556] font-semibold">CopyTrading</span> es una herramienta que te permite replicar operaciones dentro de tu propia cuenta, siguiendo estrategias previamente configuradas por nuestro equipo.
                </div>

                <div className="space-y-2">
                  {[
                    "Sin experiencia necesaria",
                    "Aprende viendo operaciones reales",
                    "Ahorras tiempo",
                    "Mantienes el control de tu cuenta",
                    "Puedes retirarte cuando quieras",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D6A556]" />
                      <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>{text}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <p className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-800"}`}>
                    Rendimientos: <span className="text-[#D6A556]">0% - 10%</span> mensual
                  </p>
                </div>

                <div className="pt-2">
                  <p className={`text-center text-xs font-semibold tracking-wider ${isDark ? "text-[#D6A556]" : "text-[#D6A556]"}`}>
                    "TU DINERO SIEMPRE ESTÁ EN TUS MANOS"
                  </p>
                </div>
              </div>
            </div>
          </div>
</AnimatedItem>

        <AnimatedItem delay={0.2}>
          <div className="mt-16">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A556]">Proceso</p>
              <h2 className={`mt-2 text-2xl font-bold sm:text-3xl ${isDark ? "text-white" : "text-gray-900"}`}>
                Cómo funciona
              </h2>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 ">
              {pasos.map((paso, index) => (
                <StepCard key={paso.title} isDark={isDark} number={index + 1} title={paso.title} desc={paso.desc} />
              ))}
            </div>
          </div>
        </AnimatedItem>
        <LandingBenefits />

        <AnimatedItem delay={0.25}>
          <div className="mt-16 text-center">
            <div className={`mx-auto max-w-2xl rounded-2xl border p-6 ${isDark ? "border-white/5 bg-white/[0.02]" : "border-gray-200 bg-gray-50"}`}>
              <p className={`text-lg font-bold leading-tight sm:text-xl ${isDark ? "text-white" : "text-gray-900"}`}>
                Aprendes viendo operaciones reales{' '}
                <span className="text-[#D6A556]">sin perder el control</span>{' '}
                de tu cuenta.
              </p>
            </div>
            <div className="mt-6">
              <a
                href={copyTradingWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#D6A556] px-8 py-3 text-sm font-semibold text-[#000418] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e6b566]"
              >
                Activar CopyTrading
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </AnimatedItem>
      </div>
    </div>
  );
}
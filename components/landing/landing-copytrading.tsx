"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { buildWhatsAppLink } from "@/lib/whatsapp";

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
    { title: "Operaciones automáticas", desc: "Las operaciones se replican automáticamente en tu cuenta." },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? "bg-[linear-gradient(180deg,#000418,#041935)]" : "bg-[linear-gradient(180deg,#ffffff,#f5f5f5)]"}`} />

      {isDark && (
        <>
          <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-[#041935]/40 blur-3xl" />
          <div className="absolute right-1/4 bottom-20 h-96 w-96 rounded-full bg-[#D6A556]/10 blur-3xl" />
        </>
      )}

      <div
        className={`absolute inset-0 ${isDark ? "opacity-[0.02]" : "opacity-[0.01]"}`}
        style={{
          backgroundImage: `linear-gradient(to right, ${isDark ? "white" : "gray"} 1px, transparent 1px), linear-gradient(to bottom, ${isDark ? "white" : "gray"} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 lg:py-32">
        <AnimatedItem>
          <div className="mx-auto max-w-4xl text-center">
            <div className={`mb-8 inline-flex items-center gap-2 rounded-full border px-5 py-2 ${isDark ? "border-[#D6A556]/20 bg-[#D6A556]/10" : "border-[#D6A556]/30 bg-[#D6A556]/20"}`}>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D6A556]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A556]">CopyTrading</span>
            </div>

            <h1 className={`text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl ${isDark ? "text-white" : "text-gray-900"}`}>
              Opera con <span className="text-[#D6A556]">estructura</span>.
              <br />
              Aprende sin improvisar.
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
                Comenzar ahora
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </AnimatedItem>

        <AnimatedItem delay={0.1}>
          <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A556]">Estrategia real</p>
              <h2 className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl ${isDark ? "text-white" : "text-gray-900"}`}>
                No se trata de promesas rápidas.
                <br />
                <span className={isDark ? "text-white/60" : "text-gray-600"}>Se trata de operar con estructura.</span>
              </h2>
              <p className={`mt-6 text-sm leading-relaxed ${isDark ? "text-white/50" : "text-gray-600"}`}>
                Un entorno diseñado para que aprendas viendo operaciones reales,
                con seguimiento constante y sin perder el control de tu cuenta.
              </p>

              <div className="mt-8 space-y-3">
                {features.map((feature) => (
                  <FeatureCard key={feature.title} isDark={isDark} title={feature.title} desc={feature.desc} />
                ))}
              </div>
            </div>

            <div className="relative">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl border ${isDark ? "border-white/5 bg-white/[0.02]" : "border-gray-300 bg-gray-100"}`}>
                <Image src={carouselImages[currentImage].src} alt={carouselImages[currentImage].alt} fill className="object-cover opacity-90" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className={`absolute inset-0 ${isDark ? "bg-[linear-gradient(180deg,transparent_40%,#041935_100%)]" : "bg-[linear-gradient(180deg,transparent_40%,rgba(255,255,255,0.8)_100%)]"}`} />

                <div className={`absolute bottom-6 left-6 right-6 rounded-2xl border p-5 backdrop-blur-xl ${isDark ? "border-white/10 bg-white/5" : "border-white/30 bg-white/60"}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`text-xs ${isDark ? "text-white/50" : "text-gray-600"}`}>Rendimiento</p>
                      <p className={`mt-1 text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>+%</p>
                    </div>
                    <div className="rounded-full border border-[#D6A556]/20 bg-[#D6A556]/10 px-4 py-2 text-sm font-semibold text-[#D6A556]">
                      Verificado
                    </div>
                  </div>
                </div>
              </div>

              <div className={`absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl border blur-xl ${isDark ? "border-[#D6A556]/10 bg-[#D6A556]/5" : "border-[#D6A556]/20 bg-[#D6A556]/10"}`} />
            </div>
          </div>
        </AnimatedItem>

        <AnimatedItem delay={0.15}>
          <div className="mt-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A556]">¿Qué es?</p>
              <h2 className={`mt-4 text-3xl font-bold sm:text-4xl ${isDark ? "text-white" : "text-gray-900"}`}>
                What is CopyTrading
              </h2>
            </div>

            <div className="mx-auto mt-8 max-w-2xl">
              <div className={`rounded-3xl border p-8 backdrop-blur-xl ${isDark ? "border-white/5 bg-white/[0.03]" : "border-gray-300 bg-white/50"}`}>
                <p className={`text-center text-base leading-relaxed ${isDark ? "text-white/60" : "text-gray-700"}`}>
                  Una herramienta que te permite replicar operaciones de traders experimentados
                  dentro de tu propia cuenta. <span className={isDark ? "text-white" : "text-gray-900"}>Tú mantienes el control</span>,
                  decides cuánto invertir y puedes detener la replicación en cualquier momento.
                </p>
              </div>
            </div>
          </div>
        </AnimatedItem>

        <AnimatedItem delay={0.2}>
          <div className="mt-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A556]">Proceso</p>
              <h2 className={`mt-4 text-3xl font-bold sm:text-4xl ${isDark ? "text-white" : "text-gray-900"}`}>
                Cómo funciona
              </h2>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {pasos.map((paso, index) => (
                <StepCard key={paso.title} isDark={isDark} number={index + 1} title={paso.title} desc={paso.desc} />
              ))}
            </div>
          </div>
        </AnimatedItem>

        <AnimatedItem delay={0.25}>
          <div className="mt-24 text-center">
            <div className={`mx-auto max-w-3xl rounded-3xl border p-10 backdrop-blur-xl ${isDark ? "border-[#D6A556]/10 bg-[#D6A556]/5" : "border-[#D6A556]/20 bg-[#D6A556]/10"}`}>
              <p className={`text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${isDark ? "text-white" : "text-gray-900"}`}>
                Aprendes viendo operaciones reales{' '}
                <span className="text-[#D6A556]">sin perder el control</span>{' '}
                de tu cuenta.
              </p>
            </div>
            <div className="mt-8">
              <a
                href={copyTradingWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#4A90E2] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4A90E2]/90"
              >
                Comenzar ahora
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
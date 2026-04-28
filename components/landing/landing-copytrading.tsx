"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "@/components/theme-provider";

function AnimatedItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function StepCard({ number, title, desc, isDark }: { number: number; title: string; desc: string; isDark: boolean }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border p-6 backdrop-blur-xl transition-all duration-300 ${
      isDark
        ? "border-white/5 bg-white/[0.03] hover:border-[#D6A556]/30 hover:bg-white/[0.06]"
        : "border-gray-200 bg-white/50 hover:border-[#D6A556]/50 hover:bg-white/80"
    }`}>
      <div className={`absolute -right-4 -top-4 text-[80px] font-black select-none ${
        isDark ? "text-white/[0.03]" : "text-gray-900/[0.03]"
      }`}>
        {number}
      </div>
      <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border text-lg font-bold ${
        isDark
          ? "border-[#D6A556]/20 bg-[#D6A556]/10 text-[#D6A556]"
          : "border-[#D6A556]/30 bg-[#D6A556]/20 text-[#D6A556]"
      }`}>
        {number}
      </div>
      <h4 className={`mb-2 text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{title}</h4>
      <p className={`text-sm leading-relaxed ${isDark ? "text-white/60" : "text-gray-600"}`}>{desc}</p>
    </div>
  );
}

function FeatureCard({ title, desc, isDark }: { title: string; desc: string; isDark: boolean }) {
  return (
    <div className={`flex items-start gap-3 rounded-xl border p-4 transition-all duration-300 ${
      isDark
        ? "border-white/5 bg-white/[0.02] hover:border-[#D6A556]/20"
        : "border-gray-200 bg-gray-100/50 hover:border-[#D6A556]/30"
    }`}>
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
      desc: "Las operaciones se replican automáticamente en tu cuenta.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 ${
        isDark
          ? "bg-[linear-gradient(180deg,#000418,#041935)]"
          : "bg-[linear-gradient(180deg,#ffffff,#f5f5f5)]"
      }`} />
      
      {/* Soft glow effects */}
      {isDark && (
        <>
          <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-[#041935]/40 blur-3xl" />
          <div className="absolute right-1/4 bottom-20 h-96 w-96 rounded-full bg-[#D6A556]/10 blur-3xl" />
        </>
      )}
      
      {/* Subtle grid pattern */}
      <div 
        className={`absolute inset-0 ${isDark ? "opacity-[0.02]" : "opacity-[0.01]"}`}
        style={{
          backgroundImage: `linear-gradient(to right, ${isDark ? 'white' : 'gray'} 1px, transparent 1px), linear-gradient(to bottom, ${isDark ? 'white' : 'gray'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 lg:py-32">
        
        {/* Hero Section */}
        <AnimatedItem>
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className={`mb-8 inline-flex items-center gap-2 rounded-full border px-5 py-2 ${
              isDark
                ? "border-[#D6A556]/20 bg-[#D6A556]/10"
                : "border-[#D6A556]/30 bg-[#D6A556]/20"
            }`}>
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6A556] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A556]">
                CopyTrading
              </span>
            </div>

            {/* Main headline */}
            <h1 className={`text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}>
              Opera con{' '}
              <span className="text-[#D6A556]">estructura</span>.
              <br />
              Aprende sin improvisar.
            </h1>

            {/* Subheadline */}
            <p className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${
              isDark ? "text-white/60" : "text-gray-600"
            }`}>
              CopyTrading te permite acompañar estrategias reales dentro de tu propia cuenta, 
              con control y claridad.
            </p>

            {/* Key points */}
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

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-[#D6A556] px-8 py-3.5 text-sm font-semibold text-[#000418] transition-all duration-300 hover:bg-[#e6b566] hover:shadow-lg hover:shadow-[#D6A556]/20 hover:-translate-y-0.5"
              >
                Comenzar ahora
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </AnimatedItem>

        {/* Split Layout Section */}
        <AnimatedItem delay={0.1}>
          <div className="mt-24 grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text on left */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A556]">Estrategia real</p>
              <h2 className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                No se trata de promesas rápidas.
                <br />
                <span className={isDark ? "text-white/60" : "text-gray-600"}>Se trata de operar con estructura.</span>
              </h2>
              <p className={`mt-6 text-sm leading-relaxed ${isDark ? "text-white/50" : "text-gray-600"}`}>
                Un entorno diseñado para que aprendas viendo operaciones reales, 
                con seguimiento constante y sin perder el control de tu cuenta.
              </p>

              <div className="mt-8 space-y-3">
                <FeatureCard isDark={isDark}
                  title="Seguimiento continuo" 
                  desc="Monitorea cada operación en tiempo real" 
                />
                <FeatureCard isDark={isDark}
                  title="Control total" 
                  desc="Tu cuenta, tus reglas, tu decisión" 
                />
                <FeatureCard isDark={isDark}
                  title="Estrategia aplicada" 
                  desc="Aprende viendo cómo se ejecutan las operaciones" 
                />
              </div>
            </div>

            {/* Image on right */}
            <div className="relative">
              <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl border ${
                isDark
                  ? "border-white/5 bg-white/[0.02]"
                  : "border-gray-300 bg-gray-100"
              }`}>
                <Image
                  src="/images/copy/pantalla.jpg"
                  alt="Trading screens and analysis"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className={`absolute inset-0 ${
                  isDark
                    ? "bg-[linear-gradient(180deg,transparent_40%,#041935_100%)]"
                    : "bg-[linear-gradient(180deg,transparent_40%,rgba(255,255,255,0.8)_100%)]"
                }`} />
                
                {/* Floating stats */}
                <div className={`absolute bottom-6 left-6 right-6 rounded-2xl border p-5 backdrop-blur-xl ${
                  isDark
                    ? "border-white/10 bg-white/5"
                    : "border-white/30 bg-white/60"
                }`}>
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

              {/* Decorative elements */}
              <div className={`absolute -bottom-6 -right-6 h-32 w-32 rounded-2xl border blur-xl ${
                isDark
                  ? "border-[#D6A556]/10 bg-[#D6A556]/5"
                  : "border-[#D6A556]/20 bg-[#D6A556]/10"
              }`} />
            </div>
          </div>
        </AnimatedItem>

        {/* What is CopyTrading Section */}
        <AnimatedItem delay={0.15}>
          <div className="mt-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A556]">¿Qué es?</p>
              <h2 className={`mt-4 text-3xl font-bold sm:text-4xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                What is CopyTrading
              </h2>
            </div>

            <div className="mx-auto mt-8 max-w-2xl">
              <div className={`rounded-3xl border p-8 backdrop-blur-xl ${
                isDark
                  ? "border-white/5 bg-white/[0.03]"
                  : "border-gray-300 bg-white/50"
              }`}>
                <p className={`text-center text-base leading-relaxed ${isDark ? "text-white/60" : "text-gray-700"}`}>
                  Una herramienta que te permite replicar operaciones de traders experimentados 
                  dentro de tu propia cuenta. <span className={isDark ? "text-white" : "text-gray-900"}>Tú mantienes el control</span>, 
                  decides cuánto invertir y puedes detener la replicación en cualquier momento.
                </p>
              </div>
            </div>
          </div>
        </AnimatedItem>

        {/* How it works - 4 Step Process */}
        <AnimatedItem delay={0.2}>
          <div className="mt-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A556]">Proceso</p>
              <h2 className={`mt-4 text-3xl font-bold sm:text-4xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                Cómo funciona
              </h2>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

        {/* Final Bold Statement */}
        <AnimatedItem delay={0.25}>
          <div className="mt-24 text-center">
            <div className={`mx-auto max-w-3xl rounded-3xl border p-10 backdrop-blur-xl ${
              isDark
                ? "border-[#D6A556]/10 bg-[#D6A556]/5"
                : "border-[#D6A556]/20 bg-[#D6A556]/10"
            }`}>
              <p className={`text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}>
                Aprendes viendo operaciones reales{' '}
                <span className="text-[#D6A556]">sin perder el control</span>{' '}
                de tu cuenta.
              </p>
            </div>
          </div>
        </AnimatedItem>

      </div>
    </div>
  );
}

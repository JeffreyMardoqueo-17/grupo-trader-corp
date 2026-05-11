"use client";

import { WhatsAppForm } from "@/components/whatsapp-form";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Diagnóstico inicial",
    description:
      "Escuchamos su meta, entendemos su contexto y detectamos el mejor punto de partida.",
  },
  {
    number: "02",
    title: "Estrategia clara",
    description:
      "Traducimos la idea en una ruta accionable, medible y aterrizada a su realidad.",
  },
  {
    number: "03",
    title: "Seguimiento con disciplina",
    description:
      "No se trata solo de empezar bien, sino de sostener el avance con orden y enfoque.",
  },
];

export function LandingContact() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [currentStep, setCurrentStep] = useState(0);

  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      id="contacto"
      initial={{ opacity: 0, x: 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden border-t  lg:py-28 transition-colors scroll-mt-16 ${
        isDark ? "border-white/10 bg-[#000208]" : "border-black/5 bg-white"
      }`}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-[#D6A556]/10 blur-3xl" />

        <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* ========================= */}
        {/* TOP SECTION */}
        {/* ========================= */}

        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A556]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6A556]" />
              Proceso
            </span>

            <h2
              className={`mt-4 text-4xl font-black tracking-tight lg:text-5xl ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Atención directa
            </h2>

            <p
              className={`mt-5 max-w-lg text-base leading-7 lg:text-lg ${
                isDark ? "text-white/70" : "text-gray-600"
              }`}
            >
              Un proceso simple, cercano y con estructura para ayudarte a
              avanzar con claridad y enfoque.
            </p>
          </div>

          {/* RIGHT - STEPS */}
          <div
            className={`relative overflow-hidden rounded-[2rem] border p-8 lg:p-10 ${
              isDark
                ? "border-white/10 bg-white/3"
                : "border-black/5 bg-gray-50/80"
            }`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.45 }}
              >
                <div className="flex items-start gap-6">
                  {/* NUMBER */}
                  <div className="shrink-0">
                    <span className="text-6xl font-black leading-none text-[#D6A556] lg:text-7xl">
                      {steps[currentStep].number}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="pt-2">
                    <h3
                      className={`text-2xl font-bold lg:text-3xl ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {steps[currentStep].title}
                    </h3>

                    <p
                      className={`mt-4 text-base leading-7 ${
                        isDark ? "text-white/70" : "text-gray-600"
                      }`}
                    >
                      {steps[currentStep].description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* INDICATORS */}
            <div className="mt-10 flex items-center gap-3">
              {steps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStep(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentStep
                      ? "w-10 bg-[#D6A556]"
                      : isDark
                        ? "w-2 bg-white/20"
                        : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* BOTTOM SECTION */}
        {/* ========================= */}

        <div className="mt-24 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT SIDE */}
          <div
            className={`relative overflow-hidden rounded-[2.5rem] border p-8 lg:p-10 ${
              isDark
                ? "border-white/10 bg-[#050816]"
                : "border-black/5 bg-white"
            }`}
          >
            {/* Glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D6A556]/10 blur-3xl" />

            {/* Badge */}
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D6A556]/20 bg-[#D6A556]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#D6A556]">
                <span className="h-2 w-2 rounded-full bg-[#D6A556]" />
                Contacto directo
              </span>

              {/* Title */}
              <h2
                className={`mt-7 text-4xl font-black leading-tight lg:text-5xl ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Hablemos sobre tu siguiente nivel
              </h2>

              {/* Description */}
              <p
                className={`mt-5 max-w-lg text-base leading-8 ${
                  isDark ? "text-white/65" : "text-gray-600"
                }`}
              >
                Si quieres aprender trading con más estructura, claridad y
                acompañamiento real, este es el punto de inicio.
              </p>

              {/* CONTACT GRID */}
              <div className="mt-10 grid gap-4">
                {/* PHONE */}
                <a
                  href="tel:+50369842090"
                  className={`group flex items-center justify-between rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? "border-white/10 bg-white/3 hover:border-[#D6A556]/30 hover:bg-white/5"
                      : "border-black/5 bg-gray-50 hover:border-[#D6A556]/20 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D6A556]/10 text-[#D6A556]">
                      <Phone className="h-6 w-6" />
                    </div>

                    <div>
                      <p
                        className={`text-sm ${
                          isDark ? "text-white/40" : "text-gray-500"
                        }`}
                      >
                        Teléfono
                      </p>

                      <p
                        className={`text-lg font-semibold transition-colors group-hover:text-[#D6A556] ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        +503 6984 2090
                      </p>
                    </div>
                  </div>

                  <span className="text-[#D6A556] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/50369842090"
                  target="_blank"
                  rel="noreferrer"
                  className={`group flex items-center justify-between rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? "border-white/10 bg-white/3 hover:border-[#25D366]/30 hover:bg-white/5"
                      : "border-black/5 bg-gray-50 hover:border-[#25D366]/20 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366]">
                      <MessageCircle className="h-6 w-6" />
                    </div>

                    <div>
                      <p
                        className={`text-sm ${
                          isDark ? "text-white/40" : "text-gray-500"
                        }`}
                      >
                        WhatsApp
                      </p>

                      <p
                        className={`text-lg font-semibold transition-colors group-hover:text-[#25D366] ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Conversar ahora
                      </p>
                    </div>
                  </div>

                  <span className="text-[#25D366] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:info@grupotcorp.com"
                  className={`group flex items-center justify-between rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? "border-white/10 bg-white/3 hover:border-[#6C7DFF]/30 hover:bg-white/5"
                      : "border-black/5 bg-gray-50 hover:border-[#6C7DFF]/20 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6C7DFF]/10 text-[#6C7DFF]">
                      <Mail className="h-6 w-6" />
                    </div>

                    <div>
                      <p
                        className={`text-sm ${
                          isDark ? "text-white/40" : "text-gray-500"
                        }`}
                      >
                        Correo
                      </p>

                      <p
                        className={`text-lg font-semibold transition-colors group-hover:text-[#6C7DFF] ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        info@grupotcorp.com
                      </p>
                    </div>
                  </div>

                  <span className="text-[#6C7DFF] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* Bottom */}
              <div
                className={`mt-10 rounded-2xl  ${
                  isDark
                    ? "border-white/10 "
                    : "border-black/5"
                }`}
              >
                <p
                  className={`text-sm leading-7 ${
                    isDark ? "text-white/60" : "text-gray-600"
                  }`}
                >
                  Respondemos personalmente y buscamos entender tu situación
                  antes de recomendarte cualquier camino.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div
            className={`rounded-[2.5rem] border p-3 lg:p-5 ${
              isDark
                ? "border-white/10 bg-[#050816]"
                : "border-black/5 bg-white"
            }`}
          >
            <WhatsAppForm />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

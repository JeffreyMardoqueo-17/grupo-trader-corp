"use client";

import { WhatsAppForm } from "@/components/whatsapp-form";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Pasar la definición de pasos fuera del componente para evitar recrearla en cada render
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
 

  // Auto scroll carrusel cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contacto"
      className={`py-20 lg:py-28 border-t transition-colors ${isDark ? "bg-[#000208] border-white/10" : "bg-white border-black/5"}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* HEADER */}
        <div className="mb-16 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A556]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6A556]" />
            Proceso
          </span>
          <h2
            className={`mt-3 text-3xl lg:text-4xl font-black tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Atencion directa
          </h2>
          <p
            className={`mt-2 text-base ${isDark ? "text-white/70" : "text-gray-600"}`}
          >
            Un proceso simple, cercano y con estructura
          </p>
        </div>

        {/* CARRUSEL DE PASOS Y FORM */}
        <div className="mb-16 grid gap-10 lg:grid-cols-2 items-stretch ">
          {/* IZQUIERDA - CARRUSEL CON ANIMACION */}
          <div
            className={`relative overflow-hidden rounded-2xl p-4 lg:p-12 flex flex-col justify-center}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div
                  className={`text-6xl lg:text-7xl font-black text-[#D6A556]`}
                >
                  {steps[currentStep].number}
                </div>
                <div>
                  <h3
                    className={`text-2xl lg:text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                  >
                    {steps[currentStep].title}
                  </h3>
                  <p
                    className={`mt-3 text-lg leading-relaxed max-w-lg ${isDark ? "text-white/70" : "text-gray-600"}`}
                  >
                    {steps[currentStep].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* INDICADORES */}
            <div className="mt-8 flex items-center gap-3">
              {steps.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentStep(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentStep
                      ? "bg-[#D6A556] w-8"
                      : `${isDark ? "bg-white/20" : "bg-gray-300"} w-2`
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
            {/* CONTACTO DIRECTO - ABAJO */}
            <div className="grid gap-10 lg:grid-cols-2 items-start pt-8">
              {/* IZQUIERDA - TEXTO */}
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A556]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D6A556]" />
                  Contacto directo
                </span>

                <h2
                  className={`text-3xl lg:text-4xl font-black tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Hablemos claro
                </h2>

                <p
                  className={`text-base leading-6 ${isDark ? "text-white/70" : "text-gray-600"} max-w-md`}
                >
                  Si tienes dudas o quieres avanzar, este es el canal directo.
                  Sin vueltas.
                </p>

                {/* INFO */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-1 ">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0 ${isDark ? "bg-[#D6A556]/20 text-[#D6A556]" : "bg-[#D6A556]/10 text-[#D6A556]"}`}
                    >
                      <Phone className="h-5 w-5" />
                    </div>
                    <a
                      href="tel:+50369842090"
                      className={`text-base font-medium ${isDark ? "text-white/80 hover:text-[#D6A556]" : "text-gray-700 hover:text-[#D6A556]"}`}
                    >
                      +503 6984 2090
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0 ${isDark ? "bg-[#25D366]/20 text-[#25D366]" : "bg-[#25D366]/10 text-[#25D366]"}`}
                    >
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <a
                      href="https://wa.me/50369842090"
                      target="_blank"
                      rel="noreferrer"
                      className={`text-base font-medium ${isDark ? "text-white/80 hover:text-[#D6A556]" : "text-gray-700 hover:text-[#D6A556]"}`}
                    >
                      wa.me/50369842090
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0 ${isDark ? "bg-[#6C7DFF]/20 text-[#6C7DFF]" : "bg-[#6C7DFF]/10 text-[#6C7DFF]"}`}
                    >
                      <Mail className="h-5 w-5" />
                    </div>
                    <a
                      href="mailto:info@grupotcorp.com"
                      className={`text-base font-medium ${isDark ? "text-white/80 hover:text-[#D6A556]" : "text-gray-700 hover:text-[#D6A556]"}`}
                    >
                      info@grupotcorp.com
                    </a>
                  </div>
                </div>
              </div>

              {/* DERECHA - VACIO O CONTENIDO FUTURO */}
              <div></div>
            </div>
          </div>

          {/* DERECHA - FORM */}
          <div
            className={`rounded-2xl  lg:p-8 `}
          >
            <WhatsAppForm />
          </div>
        </div>
      </div>
    </section>
  );
}

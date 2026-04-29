"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { LandingHeader } from "@/components/landing/landing-header";

const sections = [
  { id: "datos-que-recogemos", title: "Datos que recogemos", number: "01" },
  { id: "uso-de-datos", title: "Uso de datos", number: "02" },
  { id: "compartir-informacion", title: "Compartir información", number: "03" },
  { id: "retencion", title: "Retención", number: "04" },
  { id: "derechos", title: "Derechos", number: "05" },
  { id: "contacto-privacidad", title: "Contacto", number: "06" },
];

export default function PrivacidadPage() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [activeSection, setActiveSection] = useState("datos-que-recogemos");
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) {
          return;
        }

        const topEntry = visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (topEntry.target.id) {
          setActiveSection(topEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-24% 0px -60% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sections.forEach((section) => {
      const element = sectionRefs.current[section.id];
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id] ?? document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className={`min-h-screen ${isDark ? "bg-[#000208]" : "bg-white"}`}>
      <LandingHeader />

      <div
        className="fixed left-0 top-0 z-60 h-1 bg-linear-to-r from-[#D6A556] to-[#F4D03F] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <section className="pt-24 lg:pt-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className={`rounded-[32px] border px-6 py-8 sm:px-8 sm:py-10 ${
              isDark
                ? "border-white/10 bg-white/2.5 shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
                : "border-gray-200 bg-white shadow-[0_30px_120px_rgba(15,23,42,0.06)]"
            }`}
          >
            <p className={`text-xs font-semibold tracking-[0.28em] uppercase ${isDark ? "text-[#D6A556]" : "text-[#D6A556]"}`}>
              Política de privacidad
            </p>
            <div className="mt-4 max-w-3xl">
              <h1 className={`text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl ${isDark ? "text-white" : "text-gray-950"}`}>
                Privacidad
              </h1>
              <p className={`mt-5 text-base leading-8 sm:text-lg ${isDark ? "text-white/65" : "text-gray-600"}`}>
                Explicación breve y clara de cómo recogemos, usamos y protegemos la información que comparte con Grupo Trade Corp.
              </p>
              <div className={`mt-6 flex flex-wrap gap-4 text-sm font-medium ${isDark ? "text-white/55" : "text-gray-500"}`}>
                <span>Versión breve</span>
                <span>Actualizado: 22 abril 2026</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className={`rounded-[30px] border p-5 ${isDark ? "border-white/10 bg-white/3" : "border-gray-200 bg-gray-50/60"}`}>
              <p className={`text-xs font-semibold tracking-[0.26em] uppercase ${isDark ? "text-[#D6A556]" : "text-[#D6A556]"}`}>
                Contenido
              </p>

              <nav className="mt-5 space-y-2">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-colors ${
                        isActive
                          ? isDark
                            ? "bg-white/10 text-white"
                            : "bg-gray-100 text-gray-950"
                          : isDark
                            ? "text-white/65 hover:bg-white/5 hover:text-white"
                            : "text-gray-600 hover:bg-white hover:text-gray-950"
                      }`}
                    >
                      <span className={`w-9 text-xs font-semibold tracking-[0.26em] ${isActive ? "text-[#D6A556]" : isDark ? "text-white/35" : "text-gray-400"}`}>
                        {section.number}
                      </span>
                      <span className="text-sm font-semibold">{section.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          <article className="min-w-0 space-y-10 lg:space-y-12">
            <section className="lg:hidden">
              <div className={`rounded-[28px] border p-4 ${isDark ? "border-white/10 bg-white/3" : "border-gray-200 bg-white"}`}>
                <p className={`text-xs font-semibold tracking-[0.24em] uppercase ${isDark ? "text-[#D6A556]" : "text-[#D6A556]"}`}>
                  Índice
                </p>
                <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                  {sections.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                          isActive
                            ? "bg-[#D6A556] text-[#000208]"
                            : isDark
                              ? "bg-white/5 text-white/70"
                              : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {section.title}
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            <section id="datos-que-recogemos" ref={(element) => { sectionRefs.current["datos-que-recogemos"] = element; }} className="scroll-mt-28 border-b border-white/5 pb-10">
              <div className="flex items-start gap-4">
                <span className={`text-3xl font-semibold tracking-[0.2em] ${activeSection === "datos-que-recogemos" ? "text-[#D6A556]" : isDark ? "text-white/20" : "text-gray-200"}`}>
                  01
                </span>
                <div className="max-w-3xl">
                  <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-gray-950"}`}>
                    Datos que recopilamos
                  </h2>
                  <p className={`mt-5 text-lg leading-8 ${isDark ? "text-white/70" : "text-gray-700"}`}>
                    Podemos recibir su nombre, correo, teléfono y el mensaje que nos envía por formulario, WhatsApp o correo directo.
                  </p>
                </div>
              </div>
            </section>

            <section id="uso-de-datos" ref={(element) => { sectionRefs.current["uso-de-datos"] = element; }} className="scroll-mt-28 border-b border-white/5 pb-10">
              <div className="flex items-start gap-4">
                <span className={`text-3xl font-semibold tracking-[0.2em] ${activeSection === "uso-de-datos" ? "text-[#D6A556]" : isDark ? "text-white/20" : "text-gray-200"}`}>
                  02
                </span>
                <div className="max-w-3xl">
                  <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-gray-950"}`}>
                    Uso de datos
                  </h2>
                  <p className={`mt-5 text-lg leading-8 ${isDark ? "text-white/70" : "text-gray-700"}`}>
                    Utilizamos la información solo para responderle, dar seguimiento a su consulta y mejorar la atención.
                  </p>
                </div>
              </div>
            </section>

            <section id="compartir-informacion" ref={(element) => { sectionRefs.current["compartir-informacion"] = element; }} className="scroll-mt-28 border-b border-white/5 pb-10">
              <div className="flex items-start gap-4">
                <span className={`text-3xl font-semibold tracking-[0.2em] ${activeSection === "compartir-informacion" ? "text-[#D6A556]" : isDark ? "text-white/20" : "text-gray-200"}`}>
                  03
                </span>
                <div className="max-w-3xl">
                  <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-gray-950"}`}>
                    Compartir información
                  </h2>
                  <p className={`mt-5 text-lg leading-8 ${isDark ? "text-white/70" : "text-gray-700"}`}>
                    No vendemos su información. Solo la compartimos si es necesario para prestarle el servicio o por obligación legal.
                  </p>
                </div>
              </div>
            </section>

            <section id="retencion" ref={(element) => { sectionRefs.current["retencion"] = element; }} className="scroll-mt-28 border-b border-white/5 pb-10">
              <div className="flex items-start gap-4">
                <span className={`text-3xl font-semibold tracking-[0.2em] ${activeSection === "retencion" ? "text-[#D6A556]" : isDark ? "text-white/20" : "text-gray-200"}`}>
                  04
                </span>
                <div className="max-w-3xl">
                  <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-gray-950"}`}>
                    Retención
                  </h2>
                  <p className={`mt-5 text-lg leading-8 ${isDark ? "text-white/70" : "text-gray-700"}`}>
                    Conservamos sus datos solo durante el tiempo necesario para responderle o cumplir con fines administrativos razonables.
                  </p>
                </div>
              </div>
            </section>

            <section id="derechos" ref={(element) => { sectionRefs.current["derechos"] = element; }} className="scroll-mt-28 border-b border-white/5 pb-10">
              <div className="flex items-start gap-4">
                <span className={`text-3xl font-semibold tracking-[0.2em] ${activeSection === "derechos" ? "text-[#D6A556]" : isDark ? "text-white/20" : "text-gray-200"}`}>
                  05
                </span>
                <div className="max-w-3xl">
                  <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-gray-950"}`}>
                    Derechos
                  </h2>
                  <p className={`mt-5 text-lg leading-8 ${isDark ? "text-white/70" : "text-gray-700"}`}>
                    Puede pedir corrección, actualización o eliminación de datos escribiéndonos directamente.
                  </p>
                </div>
              </div>
            </section>

            <section id="contacto-privacidad" ref={(element) => { sectionRefs.current["contacto-privacidad"] = element; }} className="scroll-mt-28 pb-10">
              <div className="flex items-start gap-4">
                <span className={`text-3xl font-semibold tracking-[0.2em] ${activeSection === "contacto-privacidad" ? "text-[#D6A556]" : isDark ? "text-white/20" : "text-gray-200"}`}>
                  06
                </span>
                <div className="max-w-3xl">
                  <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-gray-950"}`}>
                    Contacto
                  </h2>
                  <p className={`mt-5 text-lg leading-8 ${isDark ? "text-white/70" : "text-gray-700"}`}>
                    Si desea revisar esto con más detalle, escríbanos y lo atendemos de forma directa.
                  </p>

                  <div className={`mt-8 rounded-3xl border p-6 ${isDark ? "border-white/10 bg-black/20" : "border-gray-200 bg-white"}`}>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#D6A556]">Email</p>
                        <p className={`mt-2 text-base font-semibold ${isDark ? "text-white" : "text-gray-950"}`}>
                          escobarmaria.tcc@gmail.com
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#D6A556]">Teléfono</p>
                        <p className={`mt-2 text-base font-semibold ${isDark ? "text-white" : "text-gray-950"}`}>
                          +503 61276385
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href="/terminos-condiciones"
                        className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
                          isDark
                            ? "bg-[#D6A556] text-[#000208] hover:bg-[#F4D03F]"
                            : "bg-[#D6A556] text-white hover:bg-[#C4934A]"
                        }`}
                      >
                        Ver términos y condiciones
                        <ArrowRight size={16} />
                      </Link>

                      <Link
                        href="/#contacto"
                        className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-colors ${
                          isDark
                            ? "border-white/10 text-white hover:bg-white/5"
                            : "border-gray-200 text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        Volver al contacto
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}

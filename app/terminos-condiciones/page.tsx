"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { LandingHeader } from "@/components/landing/landing-header";

const sections = [
  { id: "uso-del-sitio", title: "Uso del sitio", number: "01" },
  { id: "alcance-del-servicio", title: "Alcance del servicio", number: "02" },
  { id: "principios", title: "Principios", number: "03" },
  { id: "privacidad", title: "Privacidad", number: "04" },
  { id: "cookies", title: "Cookies", number: "05" },
  { id: "contacto-legal", title: "Contacto legal", number: "06" },
];

const legalSections = [
  {
    id: "uso-del-sitio",
    number: "01",
    title: "Uso del sitio",
    lead: "Este sitio presenta información institucional y comercial de Grupo Trade Corp. Al navegarlo, acepta estas condiciones generales.",
    bullets: [
      "Puede usarlo para conocer servicios, leer información y contactarnos.",
      "El contenido no reemplaza una asesoría personalizada.",
      "Podemos actualizar textos, enlaces o secciones cuando sea necesario.",
    ],
  },
  {
    id: "alcance-del-servicio",
    number: "02",
    title: "Alcance del servicio",
    lead: "Nuestro trabajo parte de diagnóstico, estrategia y ejecución disciplinada. Los resultados dependen del contexto, las decisiones y la implementación real.",
    bullets: [
      "La asesoría empieza después de contacto directo y evaluación inicial.",
      "No prometemos resultados idénticos para todos los casos.",
      "Cada decisión financiera debe tomarse con criterio y responsabilidad.",
    ],
  },
  {
    id: "principios",
    number: "03",
    title: "Principios",
    lead: "Desarrollamos estrategias fundamentadas en disciplina, experiencia y resultados comprobables para ayudar a personas y empresas a generar oportunidades y construir un patrimonio sólido y sostenible.",
  },
  {
    id: "privacidad",
    number: "04",
    title: "Privacidad",
    lead: "Los datos que comparte por formulario, correo o WhatsApp se usan solo para responder su consulta y dar seguimiento a la conversación.",
    bullets: [
      "No vendemos información personal a terceros.",
      "Solo pedimos datos necesarios para responder mejor.",
      "Puede solicitar corrección o retiro de sus datos por contacto directo.",
    ],
  },
  {
    id: "cookies",
    number: "05",
    title: "Cookies",
    lead: "Este sitio puede usar cookies técnicas o almacenamiento local para recordar preferencias básicas, como el tema visual y ciertas mejoras de navegación.",
    bullets: [
      "No usamos esta versión del sitio para fines invasivos.",
      "Puede gestionar o eliminar esas preferencias desde su navegador.",
    ],
  },
  {
    id: "contacto-legal",
    number: "06",
    title: "Contacto legal",
    lead: "Si necesita una aclaración sobre estas condiciones o desea una revisión más formal, puede escribirnos directamente.",
  },
];

const principles = [
  {
    num: 1,
    title: "Disciplina",
    desc: "Hacemos lo necesario, incluso cuando no es fácil. La constancia sostiene el resultado real.",
  },
  {
    num: 2,
    title: "Criterio",
    desc: "No actuamos por impulso. Entender bien es más importante que actuar rápido.",
  },
  {
    num: 3,
    title: "Responsabilidad",
    desc: "Cada resultado nace de decisiones. Asumimos, aprendemos y mejoramos.",
  },
  {
    num: 4,
    title: "Crecimiento continuo",
    desc: "Nunca dejamos de aprender. Evolucionar también es parte del proceso.",
  },
  {
    num: 5,
    title: "Valor",
    desc: "Aportar valor es prioridad. El crecimiento propio empieza sirviendo a otros.",
  },
];

export default function TerminosCondiciones() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [activeSection, setActiveSection] = useState("uso-del-sitio");
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) {
          return;
        }

        const topEntry = visible.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0];
        if (topEntry.target.id) {
          setActiveSection(topEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-24% 0px -60% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
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
    <main className={`min-h-screen ${isDark ? "bg-[#0b0f14] text-white" : "bg-white text-gray-950"}`}>
      <LandingHeader />

      <div
        className="fixed left-0 top-0 z-60 h-1 bg-linear-to-r from-[#D6A556] to-[#F4D03F] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <section className="w-full px-6 pb-16 pt-24 lg:px-10 lg:pt-28 mt-7">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 xl:flex-row xl:items-start xl:justify-center xl:gap-16">
          <aside className="hidden h-fit xl:sticky xl:top-24 xl:block xl:w-[280px] xl:shrink-0">
            <div
              className={`rounded-[30px] border p-5 sm:p-6 ${
                isDark
                  ? "border-white/10 bg-white/3 shadow-[0_24px_80px_rgba(0,0,0,0.22)]"
                  : "border-neutral-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.06)]"
              }`}
            >
              <p
                className={`text-[11px] font-semibold tracking-[0.3em] uppercase ${isDark ? "text-[#D6A556]" : "text-[#C9963A]"}`}
              >
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
                      className={`group relative flex w-full items-center gap-3 overflow-hidden rounded-2xl border px-4 py-3.5 text-left transition-all duration-200 ${
                        isActive
                          ? isDark
                            ? "border-white/10 bg-white/6 text-white"
                            : "border-neutral-200 bg-neutral-50 text-gray-950"
                          : isDark
                            ? "border-transparent text-white/65 hover:border-white/10 hover:bg-white/4 hover:text-white"
                            : "border-transparent text-gray-600 hover:border-neutral-200 hover:bg-neutral-50 hover:text-gray-950"
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-2 bottom-2 w-1 rounded-r-full transition-opacity ${
                          isActive
                            ? "opacity-100 bg-[#D6A556]"
                            : "opacity-0 bg-[#D6A556]"
                        }`}
                      />
                      <span
                        className={`w-9 text-xs font-semibold tracking-[0.26em] ${isActive ? "text-[#D6A556]" : isDark ? "text-white/35" : "text-gray-400"}`}
                      >
                        {section.number}
                      </span>
                      <span className="text-sm font-semibold leading-5">
                        {section.title}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <div
                className={`mt-5 rounded-2xl border px-4 py-4 ${isDark ? "border-white/10 bg-black/20" : "border-neutral-200 bg-white"}`}
              >
                <p
                  className={`text-[11px] font-semibold tracking-[0.24em] uppercase ${isDark ? "text-white/40" : "text-gray-500"}`}
                >
                  Leyendo ahora
                </p>
                <p
                  className={`mt-1 text-sm font-semibold ${isDark ? "text-white" : "text-gray-950"}`}
                >
                  {
                    sections.find((section) => section.id === activeSection)
                      ?.title
                  }
                </p>
              </div>
            </div>
          </aside>
          <article className="min-w-0 space-y-12 xl:max-w-5xl xl:flex-1">
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className={`rounded-[32px] border px-6 py-8 sm:px-8 sm:py-10 ${
                isDark
                  ? "border-white/10 bg-white/3 shadow-[0_30px_120px_rgba(0,0,0,0.28)]"
                  : "border-neutral-200 bg-white shadow-[0_30px_120px_rgba(15,23,42,0.07)]"
              }`}
            >
              <p
                className={`text-xs font-semibold tracking-[0.3em] uppercase ${isDark ? "text-[#D6A556]" : "text-[#C9963A]"}`}
              >
                Documento legal
              </p>
              <div className="mt-4 max-w-180 xl:max-w-none">
                <h1
                  className={`text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl ${isDark ? "text-white" : "text-gray-950"}`}
                >
                  Términos y condiciones
                </h1>
                <p
                  className={`mt-5 text-base leading-8 sm:text-lg ${isDark ? "text-white/70" : "text-gray-600"}`}
                >
                  Versión clara y rápida para entender cómo funciona este sitio,
                  qué cubre nuestro servicio y cómo manejamos su información.
                </p>
                <div
                  className={`mt-6 flex flex-wrap gap-4 text-sm font-medium ${isDark ? "text-white/45" : "text-gray-500"}`}
                >
                  <span>Lectura estimada: 4 min</span>
                  <span>Actualizado: 23 abril 2026</span>
                </div>
              </div>
            </motion.section>

            {legalSections.map((section) => (
              <motion.section
                key={section.id}
                id={section.id}
                ref={(element) => {
                  sectionRefs.current[section.id] = element;
                }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="scroll-mt-24 border-b border-black/5 pb-10 last:border-b-0 last:pb-0 dark:border-white/10"
              >
                <div className="grid gap-4 md:grid-cols-[auto_minmax(0,1fr)] md:gap-6">
                  <span
                    className={`text-3xl font-semibold tracking-[0.18em] md:pt-1 ${activeSection === section.id ? "text-[#D6A556]" : isDark ? "text-white/20" : "text-gray-200"}`}
                  >
                    {section.number}
                  </span>

                  <div className="max-w-162.5">
                    <h2
                      className={`text-3xl font-semibold tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-gray-950"}`}
                    >
                      {section.title}
                    </h2>
                    <p
                      className={`mt-4 text-lg leading-8 ${isDark ? "text-white/70" : "text-gray-700"}`}
                    >
                      {section.lead}
                    </p>

                    {section.id === "principios" ? (
                      <div className="mt-8 space-y-8">
                        <div>
                          <h3 className="text-xl font-semibold text-[#D6A556]">
                            Misión
                          </h3>
                          <p
                            className={`mt-2 text-base leading-7 ${isDark ? "text-white/70" : "text-gray-700"}`}
                          >
                            Desarrollar estrategias fundamentadas en disciplina,
                            experiencia y resultados comprobables para ayudar a
                            personas y empresas a generar oportunidades y
                            construir un patrimonio sólido y sostenible.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-[#D6A556]">
                            Visión
                          </h3>
                          <p
                            className={`mt-2 text-base leading-7 ${isDark ? "text-white/70" : "text-gray-700"}`}
                          >
                            Convertirnos en un referente en la formación de
                            personas y empresas disciplinadas y estratégicas,
                            capaces de tomar decisiones inteligentes y construir
                            un patrimonio sólido y sostenible.
                          </p>
                        </div>

                        <div>
                          <h3
                            className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-950"}`}
                          >
                            Nuestros valores fundamentales
                          </h3>
                          <div className="mt-4 grid gap-4 sm:grid-cols-2">
                            {principles.map((principle) => (
                              <div
                                key={principle.num}
                                className={`rounded-[20px] border p-4 ${isDark ? "border-white/10 bg-white/3" : "border-neutral-200 bg-neutral-50/80"}`}
                              >
                                <div className="flex items-start gap-3">
                                  <span className="text-lg font-semibold text-[#D6A556]">
                                    {principle.num}
                                  </span>
                                  <div>
                                    <h4
                                      className={`font-semibold ${isDark ? "text-white" : "text-gray-950"}`}
                                    >
                                      {principle.title}
                                    </h4>
                                    <p
                                      className={`mt-1 text-sm leading-6 ${isDark ? "text-white/60" : "text-gray-600"}`}
                                    >
                                      {principle.desc}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : section.id === "contacto-legal" ? (
                      <>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                          <div
                            className={`rounded-[20px] border p-5 ${isDark ? "border-white/10 bg-white/3" : "border-neutral-200 bg-neutral-50/80"}`}
                          >
                            <h3 className="text-xs font-semibold tracking-[0.22em] uppercase text-[#D6A556]">
                              Email
                            </h3>
                            <p
                              className={`mt-1 text-base font-semibold ${isDark ? "text-white" : "text-gray-950"}`}
                            >
                              escobarmaria.tcc@gmail.com
                            </p>
                          </div>

                          <div
                            className={`rounded-[20px] border p-5 ${isDark ? "border-white/10 bg-white/3" : "border-neutral-200 bg-neutral-50/80"}`}
                          >
                            <h3 className="text-xs font-semibold tracking-[0.22em] uppercase text-[#D6A556]">
                              Teléfono
                            </h3>
                            <p
                              className={`mt-1 text-base font-semibold ${isDark ? "text-white" : "text-gray-950"}`}
                            >
                              +504 61276385
                            </p>
                          </div>
                        </div>

                        <div
                          className={`mt-7 rounded-[28px] border p-6 ${isDark ? "border-white/10 bg-black/20" : "border-neutral-200 bg-white"}`}
                        >
                          <p
                            className={`text-sm leading-6 ${isDark ? "text-white/65" : "text-gray-600"}`}
                          >
                            <span className="font-semibold">
                              Grupo Trade Corp
                            </span>{" "}
                            — referencia general. Lectura breve para orientación
                            general.
                          </p>
                          <div className="mt-4 flex flex-wrap gap-3">
                            <Link
                              href="/privacidad"
                              className={`inline-flex items-center gap-1.5 rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
                                isDark
                                  ? "bg-[#D6A556] text-[#000208] hover:bg-[#F4D03F]"
                                  : "bg-[#D6A556] text-white hover:bg-[#C4934A]"
                              }`}
                            >
                              Ver privacidad
                              <ArrowRight size={17} />
                            </Link>

                            <Link
                              href="/#contacto"
                              className={`inline-flex items-center gap-1.5 rounded-xl border px-5 py-3 text-sm font-semibold transition-colors ${
                                isDark
                                  ? "border-white/10 text-white hover:bg-white/4"
                                  : "border-neutral-200 text-gray-900 hover:bg-neutral-50"
                              }`}
                            >
                              Volver al contacto
                            </Link>
                          </div>
                        </div>
                      </>
                    ) : section.bullets ? (
                      <ul
                        className={`mt-5 space-y-3 text-base leading-7 ${isDark ? "text-white/68" : "text-gray-700"}`}
                      >
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-1 text-[#D6A556]">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </motion.section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}

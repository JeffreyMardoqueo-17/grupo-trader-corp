"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingFocusCards } from "@/components/landing/landing-focus-cards";
import { LandingContact } from "@/components/landing/landing-contact";

const sections = [
  { id: "datos-que-recogemos", title: "Datos que recogemos", number: "01" },
  { id: "uso-de-datos", title: "Uso de datos", number: "02" },
  { id: "compartir-informacion", title: "Compartir información", number: "03" },
  { id: "retencion", title: "Retención", number: "04" },
  { id: "derechos", title: "Derechos", number: "05" },
  { id: "contacto-privacidad", title: "Contacto", number: "06" },
];

const legalSections = [
  {
    id: "datos-que-recogemos",
    number: "01",
    title: "Datos que recopilamos",
    lead: "Podemos recibir su nombre, correo, teléfono y el mensaje que nos envía por formulario, WhatsApp o correo directo.",
    bullets: [
      "Solo solicitamos datos necesarios para responder mejor.",
      "La información se recibe de forma voluntaria cuando nos contacta.",
      "No pedimos datos sensibles innecesarios para la consulta inicial.",
    ],
  },
  {
    id: "uso-de-datos",
    number: "02",
    title: "Uso de datos",
    lead: "Utilizamos la información solo para responderle, dar seguimiento a su consulta y mejorar la atención.",
    bullets: [
      "Atender su solicitud de forma directa y ordenada.",
      "Dar seguimiento comercial o informativo cuando corresponda.",
      "Mejorar la experiencia de contacto y servicio.",
    ],
  },
  {
    id: "compartir-informacion",
    number: "03",
    title: "Compartir información",
    lead: "No vendemos su información. Solo la compartimos si es necesario para prestarle el servicio o por obligación legal.",
    bullets: [
      "No compartimos datos con fines comerciales externos.",
      "Solo lo hacemos cuando el servicio lo requiere o la ley lo exige.",
      "Mantenemos un criterio de acceso mínimo y necesario.",
    ],
  },
  {
    id: "retencion",
    number: "04",
    title: "Retención",
    lead: "Conservamos sus datos solo durante el tiempo necesario para responderle o cumplir con fines administrativos razonables.",
    bullets: [
      "El tiempo de conservación depende del propósito del contacto.",
      "Si ya no necesitamos la información, puede ser eliminada o archivada de forma segura.",
      "Aplicamos el mismo criterio para correos, formularios y mensajes directos.",
    ],
  },
  {
    id: "derechos",
    number: "05",
    title: "Derechos",
    lead: "Puede pedir corrección, actualización o eliminación de datos escribiéndonos directamente.",
    bullets: [
      "Solicitar acceso a los datos que nos compartió.",
      "Pedir rectificación si encuentra un error.",
      "Solicitar eliminación cuando sea aplicable.",
    ],
  },
  {
    id: "contacto-privacidad",
    number: "06",
    title: "Contacto",
    lead: "Si desea revisar esto con más detalle, escríbanos y lo atendemos de forma directa.",
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

      const probeLine = scrollTop + window.innerHeight * 0.38;
      let nextActiveSection = sections[0].id;

      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (!element) {
          continue;
        }

        const sectionTop = element.offsetTop;
        const sectionBottom = sectionTop + element.offsetHeight;

        if (probeLine >= sectionTop && probeLine < sectionBottom) {
          nextActiveSection = section.id;
          break;
        }

        if (probeLine >= sectionTop) {
          nextActiveSection = section.id;
        }
      }

      setActiveSection(nextActiveSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id] ?? document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen bg-[#000208] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(214,165,86,0.08),rgba(74,144,226,0.04),transparent_70%),linear-gradient(180deg,#000208,#050b18)]" />
      <div className="mb-15">

      <LandingHeader />
      </div>
      <div
        className="fixed left-0 top-0 z-60 h-1 bg-linear-to-r from-[#D6A556] to-[#F4D03F] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <section className="pt-48 lg:pt-56">
        <div className="mx-auto max-w-4xl px-6">
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
            <div className="mx-auto mt-4 max-w-3xl text-center">
              <h1 className={`text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl ${isDark ? "text-white" : "text-gray-950"}`}>
                Privacidad
              </h1>
              <p className={`mt-5 text-base leading-8 text-justify sm:text-lg ${isDark ? "text-white/65" : "text-gray-600"}`}>
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

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 lg:px-10 lg:pt-24">
        <div className="grid gap-10 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-16">
          <aside className="hidden h-fit xl:sticky xl:top-24 xl:block xl:w-[280px] xl:shrink-0">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D6A556]">
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
                          ? "border-white/10 bg-white/6 text-white"
                          : "border-transparent text-white/65 hover:border-white/10 hover:bg-white/4 hover:text-white"
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-2 bottom-2 w-1 rounded-r-full transition-opacity ${
                          isActive ? "opacity-100 bg-[#D6A556]" : "opacity-0 bg-[#D6A556]"
                        }`}
                      />
                      <span
                        className={`w-9 text-xs font-semibold tracking-[0.26em] ${isActive ? "text-[#D6A556]" : "text-white/35"}`}
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

              <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">
                  Leyendo ahora
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {sections.find((section) => section.id === activeSection)?.title}
                </p>
              </div>
            </div>
          </aside>

          <article className="min-w-0 space-y-16 xl:max-w-5xl xl:flex-1">
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] px-6 py-8 shadow-[0_30px_120px_rgba(0,0,0,0.28)] sm:px-8 sm:py-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D6A556]">
                Documento legal
              </p>
              <div className="mt-4 max-w-180 xl:max-w-none">
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Privacidad
                </h1>
                <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
                  Explicación breve y clara de cómo recogemos, usamos y protegemos la información que comparte con Grupo Trade Corp.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-white/45">
                  <span>Versión breve</span>
                  <span>Actualizado: 22 abril 2026</span>
                </div>
              </div>
            </motion.section>

            {legalSections.map((section) => {
              const isActive = activeSection === section.id;

              return (
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
                  className="scroll-mt-40 rounded-[30px] border border-white/10 bg-white/[0.03] px-6 py-8 shadow-[0_20px_80px_rgba(0,0,0,0.2)] sm:px-8 sm:py-10"
                >
                  <div className="grid gap-5 xl:grid-cols-[auto_minmax(0,1fr)] xl:gap-7">
                    <div className="flex items-start gap-4 xl:flex-col xl:gap-3 xl:pt-1">
                      <span className={`text-3xl font-semibold tracking-[0.18em] ${isActive ? "text-[#D6A556]" : "text-white/20"}`}>
                        {section.number}
                      </span>
                      <div className="hidden h-px w-12 bg-white/10 xl:block" />
                    </div>

                    <div className="space-y-5">
                      <div>
                        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                          {section.title}
                        </h2>
                        <p className="mt-4 max-w-3xl text-lg leading-8 text-white/70">
                          {section.lead}
                        </p>
                      </div>

                      {section.bullets ? (
                        <ul className="space-y-3 text-base leading-7 text-white/68">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span className="mt-1 text-[#D6A556]">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {section.id === "principios" ? (
                        <div className="space-y-8 pt-2">
                          <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-[24px] border border-white/10 bg-black/20 p-6">
                              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D6A556]">
                                Misión
                              </h3>
                              <p className="mt-3 text-base leading-7 text-white/70">
                                Desarrollar estrategias fundamentadas en disciplina, experiencia y resultados comprobables para ayudar a personas y empresas a generar oportunidades y construir un patrimonio sólido y sostenible.
                              </p>
                            </div>

                            <div className="rounded-[24px] border border-white/10 bg-black/20 p-6">
                              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D6A556]">
                                Visión
                              </h3>
                              <p className="mt-3 text-base leading-7 text-white/70">
                                Convertirnos en un referente en la formación de personas y empresas disciplinadas y estratégicas, capaces de tomar decisiones inteligentes y construir un patrimonio sólido y sostenible.
                              </p>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              Nuestros valores fundamentales
                            </h3>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                              {principles.map((principle) => (
                                <div key={principle.num} className="rounded-[20px] border border-white/10 bg-white/[0.03] p-4">
                                  <div className="flex items-start gap-3">
                                    <span className="text-lg font-semibold text-[#D6A556]">{principle.num}</span>
                                    <div>
                                      <h4 className="font-semibold text-white">
                                        {principle.title}
                                      </h4>
                                      <p className="mt-1 text-sm leading-6 text-white/60">
                                        {principle.desc}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : null}

                      {section.id === "contacto-legal" ? (
                        <div className="mt-2 rounded-[28px] border border-white/10 bg-black/20 p-6">
                          <p className="text-sm leading-6 text-white/65">
                            <span className="font-semibold text-white">Grupo Trade Corp</span> — referencia general. Lectura breve para orientación general.
                          </p>
                          <div className="mt-4 flex flex-wrap gap-3">
                            <Link
                              href="/privacidad"
                              className="inline-flex items-center gap-1.5 rounded-xl bg-[#D6A556] px-5 py-3 text-sm font-semibold text-[#000208] transition-colors hover:bg-[#F4D03F]"
                            >
                              Ver privacidad
                              <ArrowRight size={17} />
                            </Link>

                            <Link
                              href="/#contacto"
                              className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                            >
                              Volver al contacto
                            </Link>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </motion.section>
              );
            })}
          </article>
        </div>
      </section>
      <LandingContact/>

      <LandingFooter />
    </main>
  );
}

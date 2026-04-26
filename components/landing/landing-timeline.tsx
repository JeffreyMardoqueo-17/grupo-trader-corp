"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Stage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string;
  image: string;
  imageAlt: string;
}

const stages: Stage[] = [
  {
    id: "denis",
    number: "01",
    title: "Quién es Denis",
    subtitle: "Liderazgo, criterio y ejecución disciplinada",
    description: "Contenido de Quién es Denis...",
    details: "Detalles adicionales...",
    image: "/images/maria.png",
    imageAlt: "Denis Gutiérrez - Fundador Grupo Trade Corp",
  },
  {
    id: "academia",
    number: "02",
    title: "Academia de Trading",
    subtitle: "Formación estructurada con contexto real",
    description: "Contenido de Academia de Trading...",
    details: "Detalles adicionales...",
    image: "/images/inversionistas.png",
    imageAlt: "Academia de Trading",
  },
  {
    id: "copytrading",
    number: "03",
    title: "CopyTrading",
    subtitle: "Replica operaciones con control total",
    description: "Contenido de CopyTrading...",
    details: "Detalles adicionales...",
    image: "/images/maria.png",
    imageAlt: "CopyTrading en acción",
  },
];

function StageCard({ stage, index, isEven, isVisible }: { stage: Stage; index: number; isEven: boolean; isVisible: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id={stage.id} className="relative py-12 lg:py-20">
      <div className={`relative mx-auto w-full max-w-6xl px-6 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`} style={{ transitionDelay: `${index * 200}ms` }}>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className={`relative order-1 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={stage.image}
                  alt={stage.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020]/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <div className={`order-2 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d4a853] bg-[#d4a853]">
                <span className="text-sm font-bold text-[#0b1020]">{stage.number}</span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4a853]">ETAPA {stage.number}</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">{stage.title}</h2>
            <p className="mt-2 text-lg text-white/70">{stage.subtitle}</p>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mt-6 flex items-center justify-between w-full rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-left transition hover:bg-white/10"
            >
              <span className="text-sm font-medium text-white">{isOpen ? "Ocultar" : "Ver más"}</span>
              <svg
                className={`h-5 w-5 text-white/70 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
              <p className="text-sm leading-relaxed text-white/80">{stage.description}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{stage.details}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LandingTimeline() {
  const [visibleStages, setVisibleStages] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = entry.target.getAttribute("data-section");
            if (sectionIndex) {
              const idx = parseInt(sectionIndex);
              setVisibleStages(prev => prev.includes(idx) ? prev : [...prev, idx]);
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "-50px" }
    );

    document.querySelectorAll('[data-section]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="proceso" className="relative bg-[#0b1020]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:py-20">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.28em] text-[#d4a853] mb-4">Nuestro Proceso</span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Tres etapas para tu éxito financiero</h2>
          <p className="mt-3 text-base text-white/60 max-w-xl mx-auto">
            Un proceso diseñado para que avances con estructura, disciplina y el acompañamiento de profesionales.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        {stages.map((stage, index) => (
          <div key={stage.id} data-section={index}>
            <StageCard 
              stage={stage} 
              index={index} 
              isEven={index % 2 === 0} 
              isVisible={visibleStages.includes(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
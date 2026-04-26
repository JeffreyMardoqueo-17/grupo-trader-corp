"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function LandingCompanySection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    const el = document.getElementById("nosotros");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
      <div className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${isVisible ? "opacity-100" : "opacity-0"} transition-all duration-700`}>
        <div className="relative order-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/inversionistas.png"
              alt="Espacio institucional"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        <div className="order-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4a853]">¿Qué es Grupo Trade Corp?</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b1020] sm:text-4xl dark:text-white">
            Una comunidad privada para aprender, entender y ejecutar con criterio.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f677a] dark:text-white/80">
            Grupo Trade Corp combina formación profesional en trading con herramientas modernas como CopyTrading para que puedas avanzar incluso si estás comenzando.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#5f677a] dark:text-white/80">
            Aquí no se trata de improvisar. Se trata de construir habilidades reales, disciplina y decisiones financieras más inteligentes.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#5f677a] dark:text-white/80">
            Con más de 500 traders activos, una metodología probada y el acompañamiento de profesionales con +10 años de experiencia.
          </p>
        </div>
      </div>
    </section>
  );
}
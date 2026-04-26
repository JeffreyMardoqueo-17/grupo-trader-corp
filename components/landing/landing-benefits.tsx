"use client";

import { useEffect, useState } from "react";

const benefits = [
  { title: "Sin experiencia necesaria", desc: "No necesitas experiencia previa para iniciar." },
  { title: "Aprendizaje real", desc: "Aprendes viendo operaciones y análisis reales." },
  { title: "Ruta guiada", desc: "Ahorras tiempo con una ruta guiada y medible." },
  { title: "Control total", desc: "Mantienes el control total de tu cuenta." },
  { title: "Comunidad privada", desc: "Participas en una comunidad privada y activa." },
  { title: "Acompañamiento", desc: "Acompañamiento personalizado disponible." },
  { title: "Estrategias probadas", desc: "Estrategias probadas con historial vérificable." },
  { title: "Transparencia", desc: "CopyTrading con transparencia total." },
];

export function LandingBenefits() {
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
    const el = document.getElementById("beneficios");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="beneficios" className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
      <div className={`text-center mb-12 ${isVisible ? "opacity-100" : "opacity-0"} transition-all duration-700`}>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4a853]">¿Por qué elegirnos?</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b1020] sm:text-4xl dark:text-white">
          Una forma más eficiente de aprender y ejecutar.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((item, index) => (
          <div 
            key={index}
            className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5"
          >
            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d4a853]" />
            <div>
              <p className="text-sm font-semibold text-[#0b1020] dark:text-white">{item.title}</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-white/70">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
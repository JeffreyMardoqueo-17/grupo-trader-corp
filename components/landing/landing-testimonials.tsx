"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const testimonials = [
  { name: "Ángela Azul", role: "Cliente GTC", text: "Entré sin experiencia y terminé con una estructura clara para operar con más seguridad.", initials: "AA" },
  { name: "Amílcar Melgar", role: "Cliente GTC", text: "Lo más valioso fue el acompañamiento real y una estrategia que sí pude ejecutar desde el inicio.", initials: "AM" },
  { name: "Carlos Martínez", role: "Empresario", text: "No vendieron promesas, me dieron proceso. Eso cambió por completo mi forma de decidir.", initials: "CM" },
  { name: "María González", role: "Inversionista", text: "La parte académica y el CopyTrading juntos me ayudaron a aprender sin perder el control.", initials: "MG" },
];

export function LandingTestimonials() {
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
    const el = document.getElementById("testimonios");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonios" className="mx-auto w-full max-w-6xl px-6 py-16 lg:py-24">
      <div className={`mb-12 ${isVisible ? "opacity-100" : "opacity-0"} transition-all duration-700`}>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d4a853]">Testimonios</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b1020] sm:text-4xl dark:text-white">
          Experiencias reales de la comunidad.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {testimonials.map((item, index) => (
          <div key={index} className="rounded-xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[#d4a853]">★★★★★</p>
              <p className="text-xs uppercase tracking-[0.22em] text-gray-500 dark:text-white/50">{item.role}</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-white/80">"{item.text}"</p>
            <div className="mt-4 flex items-center gap-3 border-t border-gray-200 pt-4 dark:border-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4a853] text-xs font-semibold text-[#0b1020]">
                {item.initials}
              </div>
              <p className="text-sm font-semibold text-[#0b1020] dark:text-white">{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="#contacto" className="inline-flex rounded-full bg-[#d4a853] px-6 py-3 text-sm font-semibold text-[#0b1020] transition hover:opacity-90">
          Quiero empezar ahora
        </Link>
      </div>
    </section>
  );
}
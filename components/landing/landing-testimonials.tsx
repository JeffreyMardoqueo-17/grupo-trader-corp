"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Kevin Hernández",
    role: "Trader principiante",
    company: "Academia",
    text: "Entré sin experiencia y ahora entiendo cómo operar con estructura y mucho más control.",
    image: "/images/testimonios/chico1.jpg",
  },
  {
    name: "Andrea López",
    role: "Estudiante universitaria",
    company: "CopyTrading",
    text: "Lo que más me ayudó fue aprender mientras veía operaciones reales y entender el porqué de cada entrada.",
    image: "/images/testimonios/chica1.jpg",
  },
  {
    name: "José Martínez",
    role: "Empleado administrativo",
    company: "Grupo Trade",
    text: "Antes veía el trading como apuestas. Ahora tengo reglas, control y una forma clara de aprender.",
    image: "/images/testimonios/chico2.jpg",
  },
];

function StarIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function AnimatedItem({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export function LandingTestimonials() {
  const sectionRef = useRef(null);

  useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <>
      {/* TOP BANNER */}
      {/* <div className="relative z-50 border-b border-[#D6A556]/10 bg-[#D6A556] px-4 py-2">
        <div className="flex items-center justify-center gap-2 text-center text-xs font-semibold tracking-wide text-black sm:text-sm">
          <span>⭐️⭐️⭐️⭐️⭐️</span>
          <span>4.9/5</span>
          <span className="opacity-50">•</span>
          <span>500+ traders capacitados</span>
        </div>
      </div> */}

      <section
        ref={sectionRef}
        id="testimonios"
        className="relative overflow-hidden px-6 py-20 sm:py-28"
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          {/* Light */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white dark:hidden" />

          {/* Dark */}
          <div className="absolute inset-0 hidden bg-gradient-to-b from-slate-950 via-[#0a1428]/90 to-slate-950 dark:block" />

          {/* Glow */}
          <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-amber-200/10 blur-3xl dark:bg-amber-900/5" />

          <div className="absolute -bottom-32 right-1/3 h-96 w-96 rounded-full bg-blue-200/10 blur-3xl dark:bg-blue-900/5" />
        </div>

        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            {/* Rating */}
            <div className="mb-6 flex items-center justify-center gap-3 text-[#D6A556]">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-6 w-6 sm:h-7 sm:w-7"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <span className="text-lg font-bold tracking-wide sm:text-xl">
                4.9/5 estrellas
              </span>
            </div>
            {/* Title */}
            <h2 className="text-5xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              Testimonios
            </h2>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-white/60">
              Reseñas reales de estudiantes reales.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <AnimatedItem key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="flex h-full min-h-[310px] flex-col rounded-3xl border border-black/5 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#D6A556]/20 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/[0.03]"
                >
                  {/* User */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[#D6A556]/20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    {/* Info */}
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </p>

                      <p className="text-sm text-slate-500 dark:text-white/50">
                        {testimonial.role}
                      </p>

                      <p className="text-xs font-medium text-[#D6A556]">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="mt-6 flex gap-1 text-[#D6A556]">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="mt-5 flex-1 text-sm leading-7 text-slate-700 dark:text-white/80">
                    "{testimonial.text}"
                  </p>
                </motion.div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

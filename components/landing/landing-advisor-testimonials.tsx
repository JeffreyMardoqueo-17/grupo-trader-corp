import type { TestimonialData } from "./team-data";

interface LandingAdvisorTestimonialsProps {
  testimonials: TestimonialData[];
}

export function LandingAdvisorTestimonials({ testimonials }: LandingAdvisorTestimonialsProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0c1526]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28 space-y-14">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D6A556]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A556]">
              Confianza construida
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            ¿Qué dicen mis clientes?
          </h2>
          <p className="text-base text-white/50 max-w-2xl mx-auto">
            Testimonios reales de personas que han transformado sus finanzas con disciplina y estrategia
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 text-[#D6A556]">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <svg key={s} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="flex-1 text-base text-white/70 leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px w-full bg-white/10 mb-4" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D6A556] text-[#0c1526] text-sm font-bold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">{t.name}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

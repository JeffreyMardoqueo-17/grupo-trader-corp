"use client";

import { TestimonialCard, TestimonialData } from "@/components/ui/testimonial-card";

export type { TestimonialData };

interface TestimonialsProps {
  testimonials: TestimonialData[];
  title?: string;
  subtitle?: string;
  variant?: "dark" | "light";
  gridCols?: "2" | "3" | "4";
}

export function Testimonials({
  testimonials,
  title = "Testimonios",
  subtitle,
  variant = "dark",
  gridCols = "3",
}: TestimonialsProps) {
  const isDark = variant === "dark";

  const gridColsClass = {
    2: "sm:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  }[gridCols];

  return (
    <section aria-labelledby="testimonials-title" className="w-full">
      <div className="mb-12 text-center">
        <h2
          id="testimonials-title"
          className={`text-2xl font-bold sm:text-3xl ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-3 text-sm leading-relaxed ${
              isDark ? "text-white/60" : "text-gray-600"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      <div className={`grid gap-6 sm:grid-cols-2 ${gridColsClass}`}>
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            testimonial={testimonial}
            variant={variant}
          />
        ))}
      </div>
    </section>
  );
}

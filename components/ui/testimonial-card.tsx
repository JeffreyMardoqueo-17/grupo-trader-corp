"use client";

import Image from "next/image";

export interface TestimonialData {
  name: string;
  role: string;
  company?: string;
  text: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
  variant?: "dark" | "light";
}

export function TestimonialCard({
  testimonial,
  variant = "dark",
}: TestimonialCardProps) {
  const isDark = variant === "dark";

  return (
    <article
      className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 ${
        isDark
          ? "border-white/6 bg-white/2 hover:border-[#D6A556]/30 hover:bg-white/4"
          : "border-gray-100 bg-white shadow-sm hover:border-[#D6A556]/30 hover:shadow-md"
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#D6A556]/20 bg-gray-200">
          <Image
            src={testimonial.image}
            alt={`Foto de ${testimonial.name}`}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <div
            className={`text-sm font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {testimonial.name}
          </div>
          <div
            className={`text-xs ${
              isDark ? "text-white/60" : "text-gray-500"
            }`}
          >
            {testimonial.role}
          </div>
          {testimonial.company && (
            <div className="text-xs font-medium text-[#D6A556]">
              {testimonial.company}
            </div>
          )}
        </div>
      </div>
      <p
        className={`text-sm leading-relaxed italic ${
          isDark ? "text-white/70" : "text-gray-600"
        }`}
      >
        "{testimonial.text}"
      </p>
    </article>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface CarouselProps {
  images: string[];
  interval?: number;
}

export default function Carousel({ images, interval = 4500 }: CarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(t);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image src={images[index]} alt={`slide-${index}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,4,24,0.88)] via-[rgba(0,4,24,0.5)] to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[var(--gold)] flex items-center justify-center">
            <svg className="w-5 h-5 text-[var(--brand-base)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/></svg>
          </div>
          <div className="flex-1 text-sm text-gray-300">
            <div className="font-semibold text-white">Formación profesional</div>
            <div className="text-xs text-gray-400">Contenido actualizado y práctico</div>
          </div>
          <div className="flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2 h-2 rounded-full ${i === index ? "bg-[var(--gold)]" : "bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

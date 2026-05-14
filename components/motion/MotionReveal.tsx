"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import variantsMap from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type MotionRevealProps = {
  children: React.ReactNode;
  variant?: keyof typeof variantsMap;
  className?: string;
  threshold?: number; // intersection threshold
  once?: boolean;
  style?: React.CSSProperties;
};

export default function MotionReveal({
  children,
  variant = "fadeUp",
  className,
  threshold = 0.12,
  once = true,
  style,
}: MotionRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once, amount: threshold });
  const controls = useAnimation();
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      controls.set("animate");
      return;
    }

    if (inView) controls.start("animate");
    else if (!once) controls.start("initial");
  }, [inView, controls, once, prefersReduced]);

  const v: Variants = (variantsMap as any)[variant] ?? variantsMap.fadeUp;

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      variants={v}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

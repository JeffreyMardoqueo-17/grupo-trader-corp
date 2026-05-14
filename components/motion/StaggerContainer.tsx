"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import variantsMap from "@/lib/motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
};

export default function StaggerContainer({ children, className }: Props) {
  const container: Variants = variantsMap.staggerContainer;

  return (
    <motion.div
      variants={container}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.12 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

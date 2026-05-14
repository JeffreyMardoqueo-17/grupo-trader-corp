"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedCard({ children, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(0,0,0,0.18)", transition: { duration: 0.25 } }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      viewport={{ once: true, amount: 0.15 }}
      className={`transform-gpu will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

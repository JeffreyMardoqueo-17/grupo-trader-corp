"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export interface ColumnContent {
  label: string;
  title: string;
  description: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface ValuesContent {
  label: string;
  title: string;
  items: ValueItem[];
}

export interface MissionVisionValuesData {
  badge: string;
  title: string;
  mission: ColumnContent;
  vision: ColumnContent;
  values: ValuesContent;
}

interface LandingMissionVisionValuesProps {
  data: MissionVisionValuesData;
}

// ─────────────────────────────────────────────────────────────
// Animations
// ─────────────────────────────────────────────────────────────

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

export function LandingMissionVisionValues({
  data,
}: LandingMissionVisionValuesProps) {
  return (
    <section className="relative overflow-hidden bg-[#030712]">
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#D6A556]/[0.03] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 lg:px-10 lg:py-28">
        {/* ───────────────── Header ───────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#D6A556]">
            <span className="h-1 w-1 rounded-full bg-[#D6A556]" />
            {data.badge}
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            {data.title}
          </h2>
        </motion.div>

        {/* ───────────────── Grid ───────────────── */}
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-0">
          {/* ───────────────── Mission ───────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative lg:pr-14"
          >
            {/* divider */}
            <div className="absolute right-0 top-0 hidden h-full w-px bg-white/[0.06] lg:block" />

            <div className="space-y-8">
              {/* label */}
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-[#D6A556]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D6A556]">
                  {data.mission.label}
                </span>
              </div>

              {/* title */}
              <h3 className="max-w-[320px] text-3xl font-semibold leading-[1.15] tracking-tight text-white lg:text-5xl">
                {data.mission.title}
              </h3>

              {/* description */}
              <p className="max-w-[360px] text-base leading-9 text-white/45">
                {data.mission.description}
              </p>
            </div>
          </motion.div>

          {/* ───────────────── Vision ───────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative lg:px-14"
          >
            {/* left divider */}
            <div className="absolute left-0 top-0 hidden h-full w-px bg-white/[0.06] lg:block" />

            {/* right divider */}
            <div className="absolute right-0 top-0 hidden h-full w-px bg-white/[0.06] lg:block" />

            <div className="space-y-8">
              {/* label */}
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-[#D6A556]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D6A556]">
                  {data.vision.label}
                </span>
              </div>

              {/* title */}
              <h3 className="max-w-[320px] text-3xl font-semibold leading-[1.15] tracking-tight text-white lg:text-5xl">
                {data.vision.title}
              </h3>

              {/* description */}
              <p className="max-w-[360px] text-base leading-9 text-white/45">
                {data.vision.description}
              </p>
            </div>
          </motion.div>

          {/* ───────────────── Values ───────────────── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative lg:pl-14"
          >
            {/* divider */}
            <div className="absolute left-0 top-0 hidden h-full w-px bg-white/[0.06] lg:block" />

            <div className="space-y-8">
              {/* label */}
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-[#D6A556]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D6A556]">
                  {data.values.label}
                </span>
              </div>

              {/* title */}
              <h3 className="text-3xl font-semibold leading-[1.15] tracking-tight text-white lg:text-5xl">
                {data.values.title}
              </h3>

              {/* values */}
              <div className="space-y-7 pt-2">
                {data.values.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                      ease,
                    }}
                    className="flex items-start gap-4"
                  >
                    {/* icon */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D6A556]/10 ring-1 ring-[#D6A556]/10">
                      <Check className="h-4 w-4 text-[#D6A556]" />
                    </div>

                    {/* content */}
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-1 max-w-[320px] text-sm leading-7 text-white/45">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { teamMembers } from "@/components/landing/team-data";
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
export function LandingTeam() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <section
      id="equipo"
      className={`relative overflow-hidden py-24 lg:py-32 ${isDark ? "bg-[#050816]" : "bg-[#f8fafc]"}`}
    >
      {" "}
      {/* subtle background */}{" "}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {" "}
        <div
          className={`absolute inset-0 opacity-[0.03] ${isDark ? "bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]" : "bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]"} bg-[size:72px_72px]`}
        />{" "}
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D6A556]/[0.04] blur-3xl" />{" "}
      </div>{" "}
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        {" "}
        {/* HEADER */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          {" "}
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.35em] text-[#D6A556]">
            {" "}
            Nuestro Equipo{" "}
          </span>{" "}
          <h2
            className={`mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl ${isDark ? "text-white" : "text-[#020617]"}`}
          >
            {" "}
            Expertos en Trading{" "}
            <span className="mt-2 block text-[#D6A556]">
              {" "}
              y Desarrollo{" "}
            </span>{" "}
          </h2>{" "}
          <p
            className={`mx-auto mt-8 max-w-2xl text-base leading-8 sm:text-lg ${isDark ? "text-white/55" : "text-slate-600"}`}
          >
            {" "}
            Profesionales comprometidos con el crecimiento financiero,
            desarrollo estratégico y acompañamiento real.{" "}
          </p>{" "}
        </motion.div>{" "}
        {/* GRID */}{" "}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-20 grid max-w-7xl grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {" "}
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={item}
              className="w-full max-w-[15.5rem]"
            >
              {" "}
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300 ${isDark ? "border-white/[0.06] bg-white/[0.03] hover:border-[#D6A556]/40" : "border-slate-200 bg-white/90 hover:border-[#D6A556]/50"}`}
              >
                {" "}
                {/* subtle hover glow */}{" "}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {" "}
                  <div className="absolute inset-0 bg-[#D6A556]/[0.02]" />{" "}
                </div>{" "}
                {/* IMAGE */}{" "}
                <div className="relative mx-auto mt-6 h-24 w-24 overflow-hidden rounded-full border border-[#D6A556]/25">
                  {" "}
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="96px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center text-xl font-bold ${isDark ? "bg-[#D6A556]/10 text-[#D6A556]" : "bg-[#D6A556]/15 text-[#9a6f28]"}`}
                    >
                      {" "}
                      {member.initials}{" "}
                    </div>
                  )}{" "}
                </div>{" "}
                {/* CONTENT */}{" "}
                <div className="flex flex-1 flex-col px-5 pb-6 pt-5 text-center">
                  {" "}
                  <h3
                    className={`text-lg font-semibold tracking-tight ${isDark ? "text-white" : "text-[#020617]"}`}
                  >
                    {" "}
                    {member.name}{" "}
                  </h3>{" "}
                  <p
                    className={`mt-2 text-sm leading-6 ${isDark ? "text-white/50" : "text-slate-500"}`}
                  >
                    {" "}
                    {member.role}{" "}
                  </p>{" "}
                  <Link
                    href={member.href}
                    className={`mt-6 inline-flex items-center justify-center rounded-xl border px-4 py-3 text-[11px] font-bold uppercase tracking-[0.22em] transition-all duration-300 ${isDark ? "border-[#D6A556]/20 bg-[#D6A556]/10 text-[#D6A556] hover:bg-[#D6A556] hover:text-[#050816]" : "border-[#D6A556]/20 bg-[#D6A556]/10 text-[#9a6f28] hover:bg-[#D6A556] hover:text-white"}`}
                  >
                    {" "}
                    Conocer más{" "}
                  </Link>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>
          ))}{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { teamMembers } from "@/components/landing/team-data";

const quickRoutes = [
  { href: "/denis", label: "Denis" },
  { href: "/academia", label: "Academia" },
  { href: "/copytrading", label: "CopyTrading" },
];

export function LandingTeam() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="equipo"
      className={`border-t border-border py-20 lg:py-28 ${
        isDark
          ? "bg-[#000208] bg-[radial-gradient(circle_at_top,rgba(74,144,226,0.08),transparent_45%),linear-gradient(180deg,#000208,#050b18)]"
          : "bg-white bg-[radial-gradient(circle_at_top,rgba(214,165,86,0.06),transparent_45%),linear-gradient(180deg,#ffffff,#fafafa)]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#D6A556]">Nuestro equipo</p>
          <h2 className={`mt-4 text-4xl font-black tracking-tight sm:text-5xl ${isDark ? "text-white" : "text-[#0b1020]"}`}>
            NUESTRO EQUIPO
          </h2>
          <div className={`mx-auto mt-5 h-px w-28 ${isDark ? "bg-[#D6A556]" : "bg-[#D6A556]"}`} />
          <p className={`mx-auto mt-6 max-w-2xl text-sm leading-7 sm:text-base ${isDark ? "text-white/65" : "text-[#43506a]"}`}>
            Un equipo corporativo, cercano y alineado con un objetivo claro: ayudarte a tomar decisiones con criterio, estructura y visión de largo plazo.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {quickRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isDark
                  ? "border-white/10 bg-[#D6A556] text-white hover:border-amber-400/40 hover:bg-amber-500"
                  : "border-black/10 bg-white text-[#0b1020] hover:border-[#D6A556]/50 hover:bg-[#fffaf0]"
              }`}
            >
              Ver {route.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7">
          {teamMembers.map((member) => (
            <Link
              key={member.name}
              href={member.href}
              className="group relative overflow-hidden rounded-[1.35rem] p-px transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(0,0,0,0.08)]"
            >
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-[1.3rem] border px-3 py-3 text-left transition-colors duration-300 ${
                  isDark
                    ? "border-white/8 bg-[#050b18]"
                    : "border-black/5 bg-white"
                }`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 ${isDark ? "bg-linear-to-r from-[#4A90E2] via-[#D6A556] to-[#4A90E2]" : "bg-linear-to-r from-[#D6A556] via-[#f2d39a] to-[#D6A556]"}`} />

                <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-current/10 bg-white/90 opacity-0 transition group-hover:opacity-100 dark:bg-[#0b1020]/90">
                  <ChevronRight className="h-3.5 w-3.5 text-[#D6A556]" />
                </div>

                <div className={`mx-auto flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border shadow-inner transition group-hover:scale-[1.03] sm:h-16 sm:w-16 ${isDark ? "border-white/10 bg-white/10" : "border-black/5 bg-[#f4f4f4]"}`}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className={`text-[11px] font-black tracking-wide sm:text-sm ${isDark ? "text-white" : "text-[#0b1020]"}`}>
                      {member.initials}
                    </span>
                  )}
                </div>

                <div className="mt-2.5 space-y-0.5 text-center">
                  <h3 className={`text-[12px] font-bold leading-tight tracking-tight sm:text-[13px] ${isDark ? "text-white" : "text-[#0b1020]"}`}>
                    {member.name}
                  </h3>
                  <p className={`text-[10px] leading-4 sm:text-[11px] ${isDark ? "text-white/58" : "text-[#5e6b82]"}`}>
                    {member.role}
                  </p>
                </div>

                <div className="mt-2.5 flex items-center justify-between gap-2">
                  {/* <span className={`rounded-full px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.24em] ${isDark ? "bg-white/5 text-white/55" : "bg-[#D6A556]/10 text-[#9a6f28]"}`}>
                    Perfil
                  </span> */}
                  {/* <span className={`flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.18em] transition group-hover:text-[#D6A556] ${isDark ? "text-white/40" : "text-[#7b8596]"}`}>
                    Ver
                    <ChevronRight className="h-3 w-3" />
                  </span> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Link2 } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { useState } from "react";

type TeamMember = {
  name: string;
  role: string;
  initials: string;
  image?: string;
};

const teamMembers: TeamMember[] = [
  { name: "Denis Gutiérrez", role: "Fundador & CEO", initials: "DG", image: "/images/denis.jpeg" },
  { name: "Valeria Aragón", role: "Fundadora & CCO", initials: "VA" },
  { name: "Juan Huiza", role: "Gerente de Ventas", initials: "JH" },
  { name: "Xenia Aragón", role: "Subgerente de Ventas", initials: "XA" },
  { name: "Fernando González", role: "Marketing", initials: "FG" },
  { name: "Javier Iraheta", role: "Asesor", initials: "JI" },
  { name: "Brenda Aragón", role: "Asesora", initials: "BA" },
  { name: "Merilyn Iraheta", role: "Asesora", initials: "MI" },
  { name: "Bryan Crespín", role: "Asesor", initials: "BC" },
  { name: "María Reneé Escobar", role: "Asesora", initials: "MR", image: "/images/maria.png" },
  { name: "Carlos Arzú", role: "Asesor", initials: "CA" },
  { name: "Corina Ramos", role: "Asesora", initials: "CR" },
  { name: "Diego Portillo", role: "Asesor", initials: "DP" },
  { name: "Jeffrey Jiménez", role: "Asistente de Telemercadeo", initials: "JJ" },
  { name: "Sorayda Samayoa", role: "Asistente Administrativa", initials: "SS" },
  { name: "Ulises Cortez", role: "Departamento Administrativo", initials: "UC" },
];

const quickRoutes = [
  { href: "/denis", label: "Denis" },
  { href: "/academia", label: "Academia" },
  { href: "/copytrading", label: "CopyTrading" },
];

export function LandingTeam() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [selectedMember, setSelectedMember] = useState(teamMembers[0].name);

  const selectedBorder = isDark
    ? "border-[#4A90E2]/70 ring-2 ring-[#4A90E2]/25 shadow-[0_16px_40px_rgba(74,144,226,0.12)]"
    : "border-[#D6A556]/70 ring-2 ring-[#D6A556]/25 shadow-[0_16px_40px_rgba(214,165,86,0.12)]";

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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member) => {
            const isSelected = selectedMember === member.name;

            return (
              <button
                key={member.name}
                type="button"
                onClick={() => setSelectedMember(member.name)}
                aria-pressed={isSelected}
                className={`group relative overflow-hidden rounded-[1.75rem] border p-5 text-center text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)] ${
                  isDark
                    ? "border-white/8 bg-white/[0.03] hover:border-white/15"
                    : "border-black/5 bg-white hover:border-[#D6A556]/30"
                } ${isSelected ? selectedBorder : ""}`}
              >
                <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-current/10 bg-white/90 opacity-0 shadow-sm transition group-hover:opacity-100 dark:bg-[#0b1020]/90">
                  <Link2 className="h-4 w-4 text-[#D6A556]" />
                </div>

                <div className="mx-auto flex h-22 w-22 items-center justify-center overflow-hidden rounded-full border border-black/5 bg-[#f4f4f4] shadow-inner transition group-hover:scale-[1.02]">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={88}
                      height={88}
                      className="h-full w-full object-cover grayscale contrast-125 brightness-110"
                    />
                  ) : (
                    <span className={`text-lg font-bold tracking-wide ${isDark ? "text-[#0b1020]" : "text-[#0b1020]"}`}>
                      {member.initials}
                    </span>
                  )}
                </div>

                <div className="mt-5 space-y-1 text-center">
                  <h3 className={`text-base font-bold tracking-tight ${isDark ? "text-white" : "text-[#0b1020]"}`}>
                    {member.name}
                  </h3>
                  <p className={`text-sm ${isDark ? "text-white/58" : "text-[#5e6b82]"}`}>
                    {member.role}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${isDark ? "text-white/40" : "text-[#7b8596]"}`}>
                    Perfil corporativo
                  </span>
                  {isSelected ? (
                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${isDark ? "bg-[#4A90E2]/15 text-[#4A90E2]" : "bg-[#D6A556]/12 text-[#A97A2F]"}`}>
                      Seleccionado
                    </span>
                  ) : null}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/theme-provider";
import { teamMembers } from "@/components/landing/team-data";
import { motion } from "framer-motion";

export function LandingTeam() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const remainder = teamMembers.length % 5;

  const getCardPositionClass = (index: number) => {
    const startIndex = teamMembers.length - remainder;

    if (remainder === 3 && index >= startIndex) {
      const offset = index - startIndex;

      if (offset === 0) {
        return "xl:col-start-2";
      }

      if (offset === 1) {
        return "xl:col-start-3";
      }

      if (offset === 2) {
        return "xl:col-start-4";
      }
    }

    return "";
  };

  return (
    <section
      id="equipo"
      className={`relative overflow-hidden py-32 lg:py-40 ${
        isDark
          ? "bg-[#0a0e1a]"
          : "bg-[#fafbfc]"
      }`}
    >
      <div className="absolute inset-0 opacity-40">
        <div className={`absolute inset-0 ${
          isDark 
            ? "bg-[linear-gradient(to_right,rgba(214,165,86,0.05)_1px,transparent_1px)] bg-size-[80px_100%]"
            : "bg-[linear-gradient(to_right,rgba(214,165,86,0.03)_1px,transparent_1px)] bg-size-[80px_100%]"
        }`} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {/* HEADER */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-[#D6A556]">
              Nuestro Equipo
            </span>

            <h2
              className={`text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl leading-none ${
                isDark ? "text-white" : "text-[#0a0e1a]"
              }`}
            >
              Expertos en Trading
              <span className="block text-[#D6A556]">y Desarrollo</span>
            </h2>

            <p
              className={`mx-auto max-w-2xl text-base leading-7 sm:text-lg ${
                isDark ? "text-white/60" : "text-[#4a5568]"
              }`}
            >
              Profesionales con años de experiencia comprometidos con tu éxito financiero.
            </p>
          </motion.div>

        </div>

        {/* GRID */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className={`w-full max-w-[16rem] ${getCardPositionClass(index)}`}
            >
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-xl border transition-all duration-300 ${
                  isDark
                    ? "border-white/8 bg-linear-to-br from-white/8 to-white/4 hover:border-[#D6A556]/50 hover:shadow-lg"
                    : "border-gray-200 bg-white/90 hover:border-[#D6A556] hover:shadow-lg"
                }`}
              >
                {/* IMAGE */}
                <div className="relative mx-auto mt-5 h-20 w-20 overflow-hidden rounded-full border-2 border-[#D6A556]/30 bg-linear-to-br from-[#D6A556]/15 to-[#D6A556]/5">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center text-xl font-black ${
                        isDark
                          ? "bg-linear-to-br from-[#D6A556]/20 to-[#D6A556]/10 text-[#D6A556]"
                          : "bg-linear-to-br from-[#D6A556]/25 to-[#D6A556]/15 text-[#9a6f28]"
                      }`}
                    >
                      {member.initials}
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col px-4 pb-5 pt-4 text-center">
                  <h3
                    className={`text-base font-bold tracking-tight ${
                      isDark ? "text-white" : "text-[#0a0e1a]"
                    }`}
                  >
                    {member.name}
                  </h3>

                  <p
                    className={`mt-1 text-[11px] leading-5 font-medium ${
                      isDark ? "text-white/60" : "text-[#64748b]"
                    }`}
                  >
                    {member.role}
                  </p>

                  {/* BUTTON LINK */}
                  <Link
                    href={member.href}
                    className={`mt-4 inline-flex items-center justify-center rounded-md border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] transition-all duration-300 ${
                      isDark
                        ? "border-[#D6A556]/25 bg-[#D6A556]/10 text-[#D6A556] hover:bg-[#D6A556] hover:text-[#0a0e1a]"
                        : "border-[#D6A556]/25 bg-[#D6A556]/12 text-[#9a6f28] hover:bg-[#D6A556] hover:text-white"
                    }`}
                  >
                    Conocer más
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* <LandingFocusCards /> */}
      {/* <LandingContact /> */}
    </section>
  );
}
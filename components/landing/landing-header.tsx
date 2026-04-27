"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/denis", label: "Denis" },
  { href: "/academia", label: "Academia" },
  { href: "/copytrading", label: "CopyTrading" },
  { href: "/#contacto", label: "Contacto" },
];

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const linkBase = "px-4 py-2 text-sm font-medium transition-all duration-300 relative";
  const linkStyle = isDark 
    ? "text-white/70 hover:text-white" 
    : "text-[#0e1427]/70 hover:text-[#0e1427]";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0d1527]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/5">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/#inicio" className="flex items-center gap-2.5 shrink-0">
            <Image src="/images/logo.svg" alt="Grupo Trade Corp" width={36} height={36} className="h-9 w-auto" priority />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${linkBase} ${linkStyle}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 ${isDark ? "text-white" : "text-[#0e1427]"}`}
              aria-label="Abrir menú"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link
              href="/#contacto"
              className="hidden sm:inline-flex rounded-lg bg-[#d4a853] px-5 py-2 text-sm font-semibold text-[#0b1020] hover:opacity-90 transition"
            >
              Contactar
            </Link>
          </div>
        </div>
      </header>

      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div 
          className={`absolute right-0 top-0 bottom-0 w-72 bg-white dark:bg-[#0b1020] border-l border-gray-200 dark:border-white/10 p-6 transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className={`p-2 ${isDark ? "text-white" : "text-[#0e1427]"}`}
              aria-label="Cerrar menú"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-lg transition ${
                  isDark 
                    ? "text-white/70 hover:text-white hover:bg-white/5" 
                    : "text-[#0e1427]/70 hover:text-[#0e1427] hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-4 py-3 text-center font-semibold bg-[#d4a853] text-[#0b1020] rounded-lg"
            >
              Contactar
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
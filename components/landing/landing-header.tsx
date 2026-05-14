"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme-provider";

const navItems = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#pilares", label: "Servicios" },
  { href: "/#testimonios", label: "Experiencias" },
];

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/#inicio");
  const pathname = usePathname();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  /* ================= ACTIVE LINK TRACKING ================= */


  useEffect(() => {
    if (pathname !== "/") {
      setActiveHref(pathname);
      return;
    }

    const sections = ["inicio", "nosotros", "pilares", "testimonios"];

    const handleScroll = () => {
      const probeLine = window.scrollY + window.innerHeight * 0.35;
      let nextActiveHref = "/#inicio";

      for (const id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (probeLine >= sectionTop && probeLine < sectionBottom) {
          nextActiveHref = `/#${id}`;
          break;
        }

        if (probeLine >= sectionTop) {
          nextActiveHref = `/#${id}`;
        }
      }

      setActiveHref(nextActiveHref);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  /* ================= STYLES ================= */

  const linkBase =
    "px-4 py-1 text-sm font-medium transition-all duration-200 rounded-full border border-transparent";

  const linkStyle = isDark
    ? "text-white/70 hover:text-black hover:font-bold hover:border-yellow-400 hover:bg-[#d4a853]"
    : "text-gray-700 hover:text-gray-900 hover:font-bold hover:border-yellow-500 hover:bg-yellow-300";

  const activeLinkStyle = isDark
    ? "text-white font-semibold border-b-2 border-[#D6A556] pb-1"
    : "text-gray-900 font-semibold border-b-2 border-[#D6A556] pb-1";

  const isLinkActive = (href: string) =>
    pathname === "/" && activeHref === href;

  /* ================= RENDER ================= */

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed select-none top-0 left-0 right-0 z-50 backdrop-blur-3xl bg-[#03040b]/80 border-b border-white/10 shadow-2xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2 sm:py-2.5 flex h-auto items-center justify-between">
          <div className="flex h-12 items-center justify-between w-full">
          
          {/* Logo */}
          <Link href="/#inicio" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Grupo Trade Corp"
              width={32}
              height={32}
              className="h-8 w-auto"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isLinkActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${linkBase} ${active ? activeLinkStyle : linkStyle}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 ${isDark ? "text-white" : "text-black"}`}
              aria-label="Abrir menú"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <Link
              href="/#contacto"
              className="hidden sm:inline-flex rounded-lg bg-[#d4a853] px-5 py-1.5 text-sm font-semibold text-[#0b1020] hover:opacity-90 transition"
            >
              Contactar
            </Link>
          </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 bottom-0 w-72 bg-white dark:bg-[#0b1020] p-6 transition-transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className={isDark ? "text-white" : "text-black"}
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = isLinkActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg transition ${
                    active
                      ? isDark
                        ? "text-white bg-white/10 font-bold"
                        : "text-black bg-black/5 font-bold"
                      : isDark
                        ? "text-white/70 hover:text-white hover:bg-white/5"
                        : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

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
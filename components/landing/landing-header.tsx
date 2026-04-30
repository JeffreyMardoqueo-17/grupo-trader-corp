"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/#inicio", label: "Inicio" },
  {
    href: "/#nosotros",
    label: "Nosotros",
    subItems: [
      { href: "/denis", label: "Denis" },
      { href: "/academia", label: "Academia" },
      { href: "/copytrading", label: "CopyTrading" },
    ],
  },
  { href: "/#pilares", label: "Pilares" },
  { href: "/#testimonios", label: "Experiencias" },
  { href: "/#contacto", label: "Contacto" },
];

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/#inicio");
  const pathname = usePathname();
  const { theme } = useTheme();
  const [nosotrosOpen, setNosotrosOpen] = useState(false);
  const isDark = theme === "dark";

  // Close Nosotros dropdown when navigation changes
  useEffect(() => {
    setNosotrosOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHref(pathname);
      return;
    }

    const trackableSections = ["inicio", "nosotros", "pilares", "beneficios", "testimonios", "equipo", "contacto"];

    const updateFromScroll = () => {
      if (window.scrollY < 120) {
        setActiveHref("/#inicio");
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) {
          updateFromScroll();
          return;
        }

        const topEntry = visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const sectionId = topEntry.target.getAttribute("id");
        if (sectionId) {
          setActiveHref(`/#${sectionId}`);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-15% 0px -55% 0px",
      }
    );

    trackableSections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    updateFromScroll();
    window.addEventListener("scroll", updateFromScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateFromScroll);
    };
  }, [pathname]);

  const linkBase = "px-4 py-2 text-sm font-medium transition-colors duration-200 relative rounded-full border";
  const linkStyle = isDark ? "text-white/70 hover:text-white hover:border-[#D6A556]" : "text-gray-700 hover:text-gray-900 hover:border-[#D6A556]";

  // active uses border highlight only (no full background)
  const activeLinkStyle = isDark ? "border-white text-white" : "border-[#0e1427] text-[#0e1427]";

  const defaultLinkBorder = "border-transparent";

  const isLinkActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/" && activeHref === href;
    }

    return pathname === href;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0d1527]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/5">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/#inicio" className="flex items-center gap-2.5 shrink-0">
            <Image src="/images/logo.svg" alt="Grupo Trade Corp" width={36} height={36} className="h-9 w-auto" priority />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = isLinkActive(item.href);

              if (item.subItems) {
                return (
                  <div key={item.href} className="relative">
                    <div className="flex items-center gap-1">
                      <Link
                        href={item.href}
                        className={`${linkBase} ${linkStyle} ${active ? activeLinkStyle : defaultLinkBorder}`}
                      >
                        {item.label}
                      </Link>
                      <button
                        aria-expanded={nosotrosOpen}
                        onClick={() => setNosotrosOpen((s) => !s)}
                        className={`ml-1 rounded p-1 text-sm ${isDark ? 'text-white/70' : 'text-gray-600'}`}
                        aria-label="Abrir opciones de Nosotros"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          {nosotrosOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12" />
                          )}
                        </svg>
                      </button>
                    </div>

                    {nosotrosOpen && (
                      <div onMouseLeave={() => setNosotrosOpen(false)} className={`absolute right-0 mt-3 w-44 rounded-md border bg-white/0 backdrop-blur-sm ${isDark ? 'bg-[#071025]/80 border-white/10' : 'bg-white border-gray-200'} drop-shadow-lg z-50 animate-fadeIn`}>
                        <div className="py-2">
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setNosotrosOpen(false)}
                              className={`block w-full px-4 py-2 text-sm ${isDark ? 'text-white' : 'text-gray-800'} border-l-2 border-transparent hover:border-[#D6A556] focus:outline-none focus:ring-2 focus:ring-[#D6A556]/30`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${linkBase} ${linkStyle} ${active ? activeLinkStyle : defaultLinkBorder}`}
                >
                  {item.label}
                </Link>
              );
            })}
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
              item.subItems ? (
                <div key={item.href} className="space-y-1">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition ${isLinkActive(item.href) ? (isDark ? 'text-white bg-white/10 border border-white/20' : 'text-[#0e1427] bg-[#0e1427]/5 border border-[#0e1427]/15') : (isDark ? 'text-white/70 hover:text-white hover:bg-white/5 border border-transparent' : 'text-[#0e1427]/70 hover:text-[#0e1427] hover:bg-gray-100 border border-transparent')}`}
                  >
                    {item.label}
                  </Link>
                  <div className="pl-4">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-2 text-sm rounded-lg transition ${isLinkActive(sub.href) ? (isDark ? 'text-white bg-white/6' : 'text-[#0e1427]') : (isDark ? 'text-white/70 hover:text-white hover:bg-white/5' : 'text-gray-700 hover:bg-gray-100')}`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition ${
                    isLinkActive(item.href)
                      ? isDark
                        ? "text-white bg-white/10 border border-white/20"
                        : "text-[#0e1427] bg-[#0e1427]/5 border border-[#0e1427]/15"
                      : isDark
                        ? "text-white/70 hover:text-white hover:bg-white/5 border border-transparent"
                        : "text-[#0e1427]/70 hover:text-[#0e1427] hover:bg-gray-100 border border-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              )
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
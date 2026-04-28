"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function FloatingWhatsAppButton() {
  const pathname = usePathname();
  const [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contacto");

    if (!contactSection) {
      setHideButton(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        setHideButton(entries[0]?.isIntersecting ?? false);
      },
      {
        threshold: 0.25,
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    observer.observe(contactSection);

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  if (hideButton) {
    return null;
  }
  const message = encodeURIComponent(
    "Buen día, quisiera saber más información. Mi nombre es:",
  );

  return (
    <a
      href={`https://wa.me/50369842090?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
      className="floating-whatsapp fixed bottom-5 right-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-105"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 fill-current"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.94.56 3.83 1.63 5.46L2 22l4.7-1.61A9.95 9.95 0 0 0 12.04 22C17.56 22 22.04 17.52 22.04 12S17.56 2 12.04 2Zm0 18.2c-1.65 0-3.26-.44-4.67-1.28l-.34-.2-2.79.95.91-2.72-.22-.35a8.15 8.15 0 0 1-1.25-4.36c0-4.5 3.66-8.16 8.16-8.16S20.2 7.74 20.2 12.24c0 4.5-3.66 8.16-8.16 8.16Zm4.48-6.11c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.62-1.17-1.38-1.31-1.62-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.41-.4-.54-.41l-.46-.01c-.16 0-.42.06-.64.3s-.84.82-.84 2 .86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.04.4 1.39.51.58.18 1.12.15 1.54.09.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
      <span className="sr-only">Abrir chat de WhatsApp</span>
    </a>
  );
}

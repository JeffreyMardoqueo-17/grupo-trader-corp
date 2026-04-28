import { WhatsAppForm } from "@/components/whatsapp-form";
import { Mail, MessageCircle, Phone } from "lucide-react";

export function LandingContact() {
  return (
    <section id="contacto" className="section-motion border-t border-border bg-background/70">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
        <WhatsAppForm className="order-2 lg:order-1" />

        <aside className="order-1 overflow-hidden rounded-[2rem] border border-white/10 bg-[#081122] text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] lg:order-2">
          <div className="relative p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#D6A556]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-[#1a3a72]/35 blur-3xl" />

            <p className="relative text-xs font-semibold uppercase tracking-[0.24em] text-white/60">Contacto directo</p>
            <h3 className="relative mt-3 text-3xl font-bold tracking-tight">Estamos aquí para ayudarte</h3>
            <p className="relative mt-3 text-sm leading-6 text-white/72">
              Un canal directo, rápido y sin vueltas para resolver tus dudas y orientarte con criterio.
            </p>

            <div className="relative mt-7 space-y-3">
              <div className="rounded-2xl border border-white/15 bg-white/6 p-4 backdrop-blur-sm">
                <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/60">
                  <Phone className="h-4 w-4" />
                  Teléfono
                </p>
                <a href="tel:+50369842090" className="mt-2 block text-base font-semibold text-white hover:text-[#D6A556]">
                  +503 6984 2090
                </a>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/6 p-4 backdrop-blur-sm">
                <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/60">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp directo
                </p>
                <a
                  href="https://wa.me/50369842090"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 block break-all text-base font-semibold text-white hover:text-[#D6A556]"
                >
                  wa.me/50369842090
                </a>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/6 p-4 backdrop-blur-sm">
                <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/60">
                  <Mail className="h-4 w-4" />
                  Email
                </p>
                <a href="mailto:jeffreymardoqueo260@gmail.com" className="mt-2 block break-all text-base font-semibold text-white hover:text-[#D6A556]">
                  jeffreymardoqueo260@gmail.com
                </a>
              </div>
            </div>

            <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href="https://wa.me/50369842090"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-[#03240f] transition hover:brightness-95"
              >
                Contactar por WhatsApp
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Ver redes sociales
              </a>
            </div>

            <div className="relative mt-8 border-t border-white/15 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">Redes sociales</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/8 px-4 py-3 text-sm font-medium text-white transition hover:border-[#D6A556]/60 hover:bg-white/15"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#D6A556]" fill="currentColor" aria-hidden="true">
                    <path d="M13.5 8.5V6.8c0-.7.5-.8.8-.8h1.6V3h-2.2C11.5 3 10.8 4.7 10.8 6.1v2.4H9V11h1.8v10h2.7V11h2.2l.3-2.5h-2.5z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/8 px-4 py-3 text-sm font-medium text-white transition hover:border-[#D6A556]/60 hover:bg-white/15"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#D6A556]" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
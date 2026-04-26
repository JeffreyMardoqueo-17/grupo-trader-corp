import Link from "next/link";
import { WhatsAppForm } from "@/components/whatsapp-form";
import { team } from "@/components/landing/content";
import { LandingProcessAccordion } from "@/components/landing/landing-process-accordion";

export function LandingContact() {
  return (
    <section id="contacto" className="section-motion border-t border-border bg-background/70">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <aside className="rounded-[1.75rem] border border-border bg-(--panel) p-7">
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Nuestro equipo</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">Atención directa</h2>
          <p className="mt-3 text-base leading-7 text-muted-foreground">Un proceso simple, cercano y con estructura.</p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {team.map((member) => (
              <div key={member.slug} className="group relative">
                <Link
                  href={`/equipo/${member.slug}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-primary text-xs font-semibold text-primary-foreground"
                  title={member.name}
                >
                  {member.initials}
                </Link>
                <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-52 -translate-x-1/2 rounded-xl border border-border bg-background p-3 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100">
                  <p className="text-sm font-semibold text-foreground">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                  <div className="mt-3 flex gap-2 text-xs">
                    <Link href={`/equipo/${member.slug}`} className="rounded-full border border-border px-3 py-1.5 text-foreground">
                      Ver landing
                    </Link>
                    <a href="#" className="rounded-full border border-border px-3 py-1.5 text-foreground">
                      Contacto
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <LandingProcessAccordion />
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-background/80 p-5">
            <p className="text-sm font-semibold text-foreground">Teléfono</p>
            <a href="tel:+50361276385" className="mt-1 block text-sm text-muted-foreground">+503 61276385</a>
            <p className="mt-4 text-sm font-semibold text-foreground">Email</p>
            <a href="mailto:escobarmaria.tcc@gmail.com" className="mt-1 block text-sm text-muted-foreground">escobarmaria.tcc@gmail.com</a>
            <p className="mt-4 text-sm font-semibold text-foreground">María Reneé · Asesora</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <a href="#" className="rounded-full border border-border px-3 py-1.5 text-foreground">Mis redes sociales</a>
              <a href="https://wa.me/50361276385" target="_blank" rel="noreferrer" className="rounded-full border border-border px-3 py-1.5 text-foreground">
                WhatsApp directo
              </a>
            </div>
          </div>
        </aside>

        <WhatsAppForm />
      </div>
    </section>
  );
}
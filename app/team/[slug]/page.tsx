import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BadgeCheck, Users } from "lucide-react";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingFooter } from "@/components/landing/landing-footer";
import { getTeamMemberBySlug, teamMembers } from "@/components/landing/team-data";

type TeamMemberPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const member = getTeamMemberBySlug(params.slug);

  if (!member) {
    notFound();
  }

  const headline = member.slug === "denis"
    ? "Liderazgo, visión y ejecución orientada a resultados."
    : `Perfil profesional de ${member.name}.`;

  const summary = member.slug === "denis"
    ? "Estructura, criterio y acompañamiento para tomar decisiones con una base más sólida."
    : `Acompañamiento cercano, lenguaje claro y una mirada práctica enfocada en la experiencia de ${member.role.toLowerCase()}.`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingHeader />
      <main className="pt-16">
        <section className="border-t border-border bg-[radial-gradient(circle_at_top,rgba(214,165,86,0.08),transparent_35%),linear-gradient(180deg,var(--color-background),var(--color-background))] py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between gap-4">
              <Link href="/team" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#0b1020] transition hover:border-[#D6A556]/40 hover:bg-[#fff9ef] dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
                Volver al equipo
              </Link>
              <Link href={member.href} className="hidden items-center gap-2 text-sm font-semibold text-[#D6A556] sm:inline-flex">
                Abrir ruta del perfil
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="order-2 space-y-6 lg:order-1">
                <div className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#D6A556]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D6A556]">
                    Equipo GTC
                  </span>
                </div>
                <div className="space-y-4">
                  <h1 className="max-w-2xl text-4xl font-black tracking-tight text-[#0b1020] sm:text-5xl lg:text-6xl dark:text-white">
                    {member.name}
                  </h1>
                  <p className="text-xl font-medium text-[#D6A556]">
                    {member.role}
                  </p>
                  <p className="max-w-2xl text-base leading-8 text-[#556173] dark:text-white/70">
                    {headline}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#D6A556]/12 text-[#D6A556]">
                      <BadgeCheck className="h-5 w-5" />
                    </div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b1020] dark:text-white">
                      Enfoque
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#5e6b82] dark:text-white/65">
                      {summary}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#0b1020]/5 text-[#0b1020] dark:bg-white/10 dark:text-white">
                      <Users className="h-5 w-5" />
                    </div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b1020] dark:text-white">
                      Perfil corporativo
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#5e6b82] dark:text-white/65">
                      Cada tarjeta del equipo ahora abre su propia ruta para navegar sin selección previa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 flex justify-center lg:order-2">
                <div className="relative w-full max-w-140 overflow-hidden rounded-[2rem] border border-black/5 bg-white p-4 shadow-[0_24px_70px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/5">
                  <div className="relative flex min-h-90 items-end justify-center overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_top,rgba(214,165,86,0.12),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.96))] dark:bg-[radial-gradient(circle_at_top,rgba(74,144,226,0.14),transparent_45%),linear-gradient(180deg,rgba(8,12,24,0.98),rgba(5,10,20,0.96))]">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={720}
                        height={720}
                        priority
                        className="h-full w-full object-contain object-bottom"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center p-10 text-center">
                        <div className="space-y-4">
                          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#D6A556]/20 bg-white text-4xl font-black text-[#D6A556] shadow-sm dark:bg-[#0b1020]">
                            {member.initials}
                          </div>
                          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D6A556]">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-white via-white/90 to-transparent dark:from-[#050a14] dark:via-[#050a14]/85" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
}
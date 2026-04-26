import type { Metadata } from "next";
import Link from "next/link";

type TeamProfilePageProps = {
  params: Promise<{ slug: string }>;
};

function toDisplayName(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: TeamProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const name = toDisplayName(slug);

  return {
    title: `${name} | Equipo Grupo Trade Corp`,
    description: `Perfil profesional de ${name} dentro del equipo de Grupo Trade Corp.`,
  };
}

export default async function TeamProfilePage({ params }: TeamProfilePageProps) {
  const { slug } = await params;
  const name = toDisplayName(slug);

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-4 py-14 sm:px-6 lg:px-8">
      <Link href="/#contacto" className="w-fit rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">
        Volver a la landing
      </Link>

      <section className="rounded-[1.75rem] border border-border bg-(--panel) p-8">
        <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">Perfil de equipo</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">{name}</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Esta ruta está lista para cargar la landing individual del colaborador con biografía, resultados, especialidad y canales de contacto.
        </p>
      </section>
    </main>
  );
}
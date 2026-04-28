import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="border-t border-white/12 bg-[#0e1427] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/18 bg-white/6 text-xs font-semibold text-white">GTC</div>
            <div>
              <p className="font-semibold text-white">Grupo Trade Corp</p>
              <p className="text-sm text-[rgba(255,255,255,0.7)]">Asesoría financiera con estructura</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-[rgba(255,255,255,0.65)]">© 2026 Grupo Trade Corp</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-sm text-[rgba(255,255,255,0.72)]">
          <Link href="/team" className="rounded-full bg-[#D6A556] px-5 py-2.5 font-semibold text-[#0b1020] transition hover:bg-[#e0b365]">
            Equipo de trabajo
          </Link>
          <a href="#" className="rounded-full border border-white/18 px-4 py-2 hover:bg-white/8">Términos y condiciones</a>
          <a href="#" className="rounded-full border border-white/18 px-4 py-2 hover:bg-white/8">Privacidad</a>
          <a href="#contacto" className="rounded-full border border-white/18 px-4 py-2 hover:bg-white/8">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
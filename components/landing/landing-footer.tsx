import Link from "next/link";
import Image from "next/image";

export function LandingFooter() {
  return (
    <footer className="relative z-50 border-t border-white/10 bg-[#0b1222] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:items-center lg:justify-between">
        
        {/* BRAND */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo.jpg"
            alt="Grupo Trade Corp"
            width={64}
            height={64}
            className="h-16 w-auto rounded-full"
            style={{ width: "auto" }}
          />

          <div>
            <p className="text-lg font-semibold tracking-tight">
              Grupo Trade Corp
            </p>
            <p className="text-sm text-white/60">
              Asesoría financiera con estructura
            </p>
            <p className="mt-1 text-xs text-white/40">
              © 2026 Grupo Trade Corp
            </p>
          </div>
        </div>

        {/* LINKS */}
        <div className="flex flex-wrap gap-3">
          <FooterLink href="/terminos-condiciones">
            Términos
          </FooterLink>

          <FooterLink href="/privacidad">
            Privacidad
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        inline-flex items-center justify-center
        rounded-full border border-white/15
        bg-white/5 px-5 py-2
        text-sm font-medium text-white/80
        transition-all duration-300
        hover:bg-[#D6A556]
        hover:text-black
        hover:border-[#D6A556]
        cursor-pointer
      "
    >
      {children}
    </Link>
  );
}
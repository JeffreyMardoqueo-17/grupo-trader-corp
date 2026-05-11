import Image from "next/image";
import Link from "next/link";
import type { HeroData } from "./team-data";

interface LandingAdvisorHeroProps {
  data: HeroData;
}

export function LandingAdvisorHero({ data }: LandingAdvisorHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0c1526]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-7">
            <div className="flex items-center gap-2 animate-in delay-1 opacity-0">
              <span className="h-2 w-2 rounded-full bg-[#D6A556]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A556]">
                {data.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white animate-in delay-2 opacity-0">
              {data.title}{" "}
              <span className="text-[#D6A556]">{data.titleHighlight}</span>
            </h1>

            <blockquote className="text-lg italic text-white/60 border-l-4 border-[#D6A556] pl-6 leading-relaxed animate-in delay-3 opacity-0">
              &ldquo;{data.quote}&rdquo;
            </blockquote>

            <p className="text-base text-white/50 leading-relaxed max-w-xl animate-in delay-3 opacity-0">
              {data.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2 animate-in delay-4 opacity-0">
              {data.buttons.map((button, i) => (
                <Link
                  key={i}
                  href={button.href}
                  className={
                    button.variant === "primary"
                      ? "inline-flex items-center px-8 py-3 rounded-xl bg-[#D6A556] text-[#0c1526] font-semibold text-sm transition-colors hover:bg-[#e0b365]"
                      : "inline-flex items-center px-8 py-3 rounded-xl border border-white/20 text-white text-sm font-semibold transition-colors hover:bg-white/5"
                  }
                >
                  {button.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative flex justify-center lg:justify-end animate-in delay-2 opacity-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] aspect-[3/4]">
              <Image
                src={data.image}
                alt={data.title}
                fill
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover rounded-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 ring-inset pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import type { AboutData, MissionVisionData, ValueData } from "./team-data";

interface LandingAdvisorAboutProps {
  about: AboutData;
  mission: MissionVisionData;
  values: ValueData[];
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3 7h7l-5.5 5 2 8L12 17l-5.5 5 2-8L2 9h7z" />
    </svg>
  );
}

export function LandingAdvisorAbout({ about, mission, values }: LandingAdvisorAboutProps) {
  return (
    <>
      {/* ─── SECTION 1: ABOUT ─── */}
      <section className="relative w-full overflow-hidden bg-[#0c1526]">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:py-28 text-center space-y-8">
          <div className="flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D6A556]" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A556]">
              Conóceme
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            {about.name}
          </h2>

          <p className="text-lg text-[#D6A556] font-medium">
            {about.role}
          </p>

          <p className="text-base text-white/60 leading-relaxed max-w-2xl mx-auto">
            {about.description}
          </p>

          <blockquote className="text-lg italic text-white/50 border-l-4 border-[#D6A556] pl-6 leading-relaxed text-left max-w-xl mx-auto">
            &ldquo;{about.quote}&rdquo;
          </blockquote>

          <p className="text-sm text-white/40 leading-relaxed max-w-2xl mx-auto pt-2">
            {about.experience}
          </p>
        </div>
      </section>

      {/* ─── SECTION 2: MISSION + VISION + VALUES ─── */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">

            {/* ─── LEFT: Content ─── */}
            <div className="space-y-14">
              {/* Title */}
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0c1526]">
                  Our Mission
                </h2>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-gray-200" />
                  <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rotate-45 border border-[#D6A556]/50" />
                  <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rotate-45 bg-[#D6A556]/30" />
                  <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rotate-45 border border-[#D6A556]/50" />
                  <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-gray-200 to-transparent" />
                </div>
              </div>

              {/* Block 1: Vision */}
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rotate-45 rounded-xl border border-[#D6A556]/30 bg-white">
                    <div className="-rotate-45 text-[#D6A556]">
                      <EyeIcon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2 pt-0.5">
                  <h3 className="text-lg font-semibold text-[#0c1526]">Vision</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    {mission.vision}
                  </p>
                </div>
              </div>

              {/* Block 2: Mission */}
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rotate-45 rounded-xl border border-[#D6A556]/30 bg-white">
                    <div className="-rotate-45 text-[#D6A556]">
                      <TargetIcon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2 pt-0.5">
                  <h3 className="text-lg font-semibold text-[#0c1526]">Mission</h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    {mission.mission}
                  </p>
                </div>
              </div>

              {/* Block 3: Values */}
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rotate-45 rounded-xl border border-[#D6A556]/30 bg-white">
                    <div className="-rotate-45 text-[#D6A556]">
                      <DiamondIcon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="space-y-3 pt-0.5">
                  <h3 className="text-lg font-semibold text-[#0c1526]">Values</h3>
                  <div className="flex flex-wrap gap-2">
                    {values.map((v, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full transition-colors hover:bg-[#D6A556]/10 hover:text-[#D6A556]"
                      >
                        {v.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ─── RIGHT: Image composition ─── */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
              {/* Main image */}
              <div className="absolute top-0 right-0 w-[80%] h-[75%] rounded-[2rem] overflow-hidden shadow-lg">
                <Image
                  src={about.image}
                  alt={about.name}
                  fill
                  sizes="(max-width: 1024px) 85vw, 42vw"
                  className="object-cover"
                />
              </div>

              {/* Decorative diamond - top left */}
              <div className="absolute top-[10%] left-[2%] w-16 h-16 rotate-45 rounded-xl border border-[#D6A556]/25 bg-white" />

              {/* Decorative rectangle - bottom left */}
              <div className="absolute bottom-[5%] left-0 w-[38%] h-[28%] rounded-2xl border border-gray-200 bg-white/70" />

              {/* Gold accent line */}
              <div className="absolute bottom-[20%] left-[4%] w-14 h-0.5 bg-[#D6A556]/40" />

              {/* Small circle accent */}
              <div className="absolute bottom-[35%] right-[4%] w-4 h-4 rounded-full bg-[#D6A556]/15" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

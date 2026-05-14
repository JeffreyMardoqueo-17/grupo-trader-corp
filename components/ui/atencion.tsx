"use client";

import {
  Headphones,
  Users,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Soporte 24/7",
    description:
      "Recibe asistencia inmediata de nuestro equipo especializado.",
    position: "left-[18%] top-[115px]",
  },
  {
    icon: Users,
    title: "Comunidad Privada",
    description:
      "Opera junto a traders enfocados en resultados reales.",
    position: "left-[50%] top-[75px]",
  },
  {
    icon: GraduationCap,
    title: "Academia Profesional",
    description:
      "Aprende Smart Money y psicología de trading avanzada.",
    position: "left-[82%] top-[40px]",
  },
];

export default function TradingFeaturesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#010308] py-24">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,164,86,0.06),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* CONTAINER */}
        <div className="relative h-[460px] w-full">

          {/* TREND LINE */}
          <svg
            viewBox="0 0 1440 260"
            className="absolute top-0 left-0 w-full h-full"
            preserveAspectRatio="none"
          >

            {/* Glow Area */}
            <path
              d="
                M0,190
                L160,180
                L260,140
                L360,165
                L500,100
                L620,125
                L760,60
                L900,95
                L1060,35
                L1220,70
                L1440,20
                L1440,260
                L0,260
                Z
              "
              fill="url(#paintGlow)"
              opacity="0.14"
            />

            {/* Main Line */}
            <path
              d="
                M0,190
                L160,180
                L260,140
                L360,165
                L500,100
                L620,125
                L760,60
                L900,95
                L1060,35
                L1220,70
                L1440,20
              "
              fill="none"
              stroke="#d7a456"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[0_0_14px_rgba(215,164,86,0.8)]"
            />

            {/* Animated Flow */}
            <path
              d="
                M0,190
                L160,180
                L260,140
                L360,165
                L500,100
                L620,125
                L760,60
                L900,95
                L1060,35
                L1220,70
                L1440,20
              "
              fill="none"
              stroke="url(#animatedGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="220 1000"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="1200"
                to="-1200"
                dur="4s"
                repeatCount="indefinite"
              />
            </path>

            {/* DEFINITIONS */}
            <defs>

              {/* GOLD GLOW */}
              <linearGradient
                id="paintGlow"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#d7a456"
                  stopOpacity="0.35"
                />
                <stop
                  offset="100%"
                  stopColor="#d7a456"
                  stopOpacity="0"
                />
              </linearGradient>

              {/* MOVING LIGHT */}
              <linearGradient
                id="animatedGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ffffff00" />
                <stop offset="50%" stopColor="#fff4d4" />
                <stop offset="100%" stopColor="#ffffff00" />
              </linearGradient>

            </defs>
          </svg>

          {/* FEATURES */}
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`
                  absolute
                  ${feature.position}
                  -translate-x-1/2
                  flex
                  flex-col
                  items-center
                  text-center
                  group
                `}
              >

                {/* ICON */}
                <div className="relative">

                  {/* Glow */}
                  <div className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[#d7a456]/30
                    blur-3xl
                    animate-pulse
                  " />

                  {/* Circle */}
                  <div className="
                    relative
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-[#0b1118]/80
                    backdrop-blur-xl
                    shadow-[0_0_35px_rgba(215,164,86,0.22)]
                    transition-all
                    duration-500
                    group-hover:scale-110
                  ">
                    <Icon
                      className="text-[#d7a456]"
                      size={38}
                      strokeWidth={1.8}
                    />
                  </div>
                </div>

                {/* TEXT */}
                <div className="mt-7 max-w-[260px]">

                  <h3 className="text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-gray-400">
                    {feature.description}
                  </p>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { MotionReveal } from "@/components/motion-reveal";

export function LandingStages() {
  return (
    <section id="etapas" className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 space-y-0">
      <div className="brand-stripe brand-stripe--head text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-14 lg:px-8 lg:py-18">
          <p className="text-xs uppercase tracking-[0.28em] text-white/70">Tres etapas importantes</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            El proceso está diseñado para que avances con estructura.
          </h2>
        </div>
      </div>

      <section id="denis" className="brand-stripe brand-stripe--a min-h-svh text-white">
        <div className="relative mx-auto grid min-h-svh w-full max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <MotionReveal className="order-2 lg:order-1" delayMs={40}>
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-(--gold)">01</p>
              <h3 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Quién es Denis</h3>
              <p className="mt-4 text-base leading-7 text-white/84">
                Conoce la experiencia y metodología de Denis Gutiérrez como base estratégica del proceso.
              </p>
            </div>
          </MotionReveal>
          <MotionReveal className="order-1 lg:order-2" delayMs={140}>
            <div className="max-w-xl text-sm leading-7 text-white/82">
              Liderazgo, criterio y ejecución disciplinada para operar con enfoque institucional y consistencia.
            </div>
          </MotionReveal>
        </div>
      </section>

      <section id="academia" className="brand-stripe brand-stripe--b min-h-svh text-white">
        <div className="relative mx-auto grid min-h-svh w-full max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <MotionReveal className="order-1 lg:order-1" delayMs={40}>
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-(--gold)">02</p>
              <h3 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Academia de trading</h3>
              <p className="mt-4 text-base leading-7 text-white/84">
                Formación estructurada para aprender con contexto real de mercado, disciplina y criterio.
              </p>
            </div>
          </MotionReveal>
          <MotionReveal className="order-2 lg:order-2" delayMs={150}>
            <div className="max-w-lg text-sm leading-7 text-white/82">
              Programa progresivo con sesiones guiadas, práctica operativa y marco de decisión para cada etapa.
            </div>
          </MotionReveal>
        </div>
      </section>

      <section id="copytrading" className="brand-stripe brand-stripe--c min-h-svh text-white">
        <div className="relative mx-auto grid min-h-svh w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:px-8">
          <MotionReveal delayMs={40}>
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-(--gold)">03</p>
              <h3 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">CopyTrading</h3>
              <p className="mt-4 text-base leading-7 text-white/84">
                Replica operaciones con control de tu cuenta mientras aprendes una ejecución profesional.
              </p>
            </div>
          </MotionReveal>
          <MotionReveal delayMs={120}>
            <div className="mx-auto text-center text-sm uppercase tracking-[0.24em] text-white/72">Sistema operativo guiado</div>
          </MotionReveal>
          <MotionReveal delayMs={170}>
            <div className="max-w-lg text-sm leading-7 text-white/84">
              Incluye conexión de cuenta, ejecución automatizada según estrategia y seguimiento operativo para que avances con estructura.
            </div>
          </MotionReveal>
        </div>
      </section>
    </section>
  );
}
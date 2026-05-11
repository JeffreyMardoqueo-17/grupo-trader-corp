export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  slug: string;
  href: string;
  image?: string;
};

export const teamMembers: TeamMember[] = [
  // { name: "Denis Gutiérrez", role: "Fundador & CEO", initials: "DG", slug: "denis", href: "/team/denis", image: "/images/denis.jpeg" },
  { name: "Valeria Aragón", role: "Fundadora & CCO", initials: "VA", slug: "valeria-aragon", href: "/team/valeria-aragon" },
  { name: "Juan Huiza", role: "Gerente de Ventas", initials: "JH", slug: "juan-huiza", href: "/team/juan-huiza" },
  { name: "Xenia Aragón", role: "Subgerente de Ventas", initials: "XA", slug: "xenia-aragon", href: "/team/xenia-aragon" },
  { name: "Fernando González", role: "Marketing", initials: "FG", slug: "fernando-gonzalez", href: "/team/fernando-gonzalez" },
  { name: "Javier Iraheta", role: "Asesor", initials: "JI", slug: "javier-iraheta", href: "/team/javier-iraheta" },
  { name: "Brenda Aragón", role: "Asesora", initials: "BA", slug: "brenda-aragon", href: "/team/brenda-aragon" },
  { name: "Merilyn Iraheta", role: "Asesora", initials: "MI", slug: "merilyn-iraheta", href: "/team/merilyn-iraheta" },
  { name: "Bryan Crespín", role: "Asesor", initials: "BC", slug: "bryan-crespin", href: "/team/bryan-crespin" },
  { name: "María Reneé Escobar", role: "Asesora", initials: "MR", slug: "mariarenee", href: "/team/mariarenee", image: "/images/team/maria.png" },
  { name: "Carlos Arzú", role: "Asesor", initials: "CA", slug: "carlos-arzu", href: "/team/carlos-arzu" },
  { name: "Corina Ramos", role: "Asesora", initials: "CR", slug: "corina-ramos", href: "/team/corina-ramos" },
  { name: "Diego Portillo", role: "Asesor", initials: "DP", slug: "diego-portillo", href: "/team/diego-portillo" },
  { name: "Jeffrey Mardoqueo", role: "Web Developer y Asistente de Telemercadeo", initials: "JM", slug: "jeffrey-mardoqueo", href: "/team/jeffrey-mardoqueo" },
  { name: "Sorayda Samayoa", role: "Asistente Administrativa", initials: "SS", slug: "sorayda-samayoa", href: "/team/sorayda-samayoa" },
  { name: "Ulises Cortez", role: "Departamento Administrativo", initials: "UC", slug: "ulises-cortez", href: "/team/ulises-cortez" },
];

export function getTeamMemberBySlug(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// LANDING PAGE ADVISOR DATA - ARQUITECTURA DATA-DRIVEN
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ===== TIPOS TYPESCRIPT =====
export interface HeroData {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  description: string;
  image: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
  benefits: string[];
  buttons: Array<{
    text: string;
    href: string;
    variant: "primary" | "secondary";
  }>;
  quote: string;
}

export interface AboutData {
  name: string;
  role: string;
  image: string;
  description: string;
  experience: string;
  quote: string;
}

export interface MissionVisionData {
  mission: string;
  vision: string;
}

export interface ValueData {
  icon: string;
  title: string;
  description: string;
}

export interface TestimonialData {
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
  initials: string;
  image?: string;
}

export interface ContactData {
  subtitle: string;
  phone: string;
  email: string;
  steps: Array<{
    number: string;
    title: string;
    description: string;
  }>;
}

export interface SocialLinksData {
  whatsapp?: string;
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  linkedin?: string;
}

export interface SEOData {
  title: string;
  description: string;
  image: string;
}

export interface AdvisorData {
  slug: string;
  hero: HeroData;
  about: AboutData;
  mission: MissionVisionData;
  values: ValueData[];
  testimonials: TestimonialData[];
  contact: ContactData;
  socialLinks: SocialLinksData;
  seo: SEOData;
}

// ===== DATOS DE ASESORES PREMIUM =====
export const advisorLanding: Record<string, AdvisorData> = {
  "mariarenee": {
    slug: "mariarenee",

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // HERO SECTION
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    hero: {
      badge: "Asesoría Financiera",
      title: "Multiplique su patrimonio con",
      titleHighlight: "Disciplina",
      subtitle: "Logre sus metas financieras con nuestra asesoría experta",
      description:
        "",
      image: "/images/team/maria.png",
      stats: [
        {
          value: "+100",
          label: "Clientes activos",
        },
        {
          value: "María Reneé",
          label: "Asesora",
        },
      ],
      benefits: [
        "Diagnóstico personalizado",
        "Diseño de una estrategia a la medida para lograr su meta",
        "Ejecución del plan con disciplina",
      ],
      buttons: [
        {
          text: "Contactar ahora",
          href: "#contacto",
          variant: "primary",
        },
        {
          text: "Ver servicios",
          href: "#valores",
          variant: "secondary",
        },
      ],
      quote:
        "Te guío con estrategia clara y segura para que hagas crecer tu dinero y construyas un patrimonio sólido.",
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // ABOUT SECTION
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    about: {
      name: "María Reneé Escobar",
      role: "Asesora Financiera",
      image: "/images/team/maria.png",
      description:
        "Profesional apasionada por ayudar a sus clientes a lograr independencia financiera a través de estrategias disciplinadas y aterrizadas a la realidad.",
      experience:
        "Más de 10 años de experiencia en asesoría financiera, especializada en estrategias de inversión y planificación de patrimonio para individuos y empresas.",
      quote:
        "No se trata de ganar mucho dinero, sino de saber qué hacer con lo que ganas.",
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // MISIÓN Y VISIÓN
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    mission: {
      mission:
        "Desarrollar estrategias que impulsen crecimiento, fundamentadas en disciplina, experiencia y resultados comprobables que generen oportunidades y construyan un patrimonio sólido y sostenible.",
      vision:
        "Ser referente en disciplina y estrategia, convirtiéndose en guía para personas y empresas capaces de tomar decisiones inteligentes y construir crecimiento con consistencia.",
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // VALORES CORPORATIVOS
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    values: [
      {
        icon: "✓",
        title: "Disciplina",
        description: "Hacemos lo necesario, incluso cuando no es fácil.",
      },
      {
        icon: "✓",
        title: "Criterio",
        description: "No actuamos por impulso, sino por entendimiento.",
      },
      {
        icon: "✓",
        title: "Responsabilidad",
        description: "Cada resultado es consecuencia de nuestras decisiones.",
      },
      {
        icon: "✓",
        title: "Crecimiento continuo",
        description: "Nunca dejamos de aprender ni de mejorar.",
      },
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // TESTIMONIOS
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    testimonials: [
      {
        name: "Carlos Martínez",
        role: "Empresario",
        company: "Tech Solutions",
        text: "Lo que más valoro de María es su enfoque analítico y la experiencia que tiene. Se nota cuando una estrategia está pensada para sostener resultados.",
        rating: 5,
        initials: "CM",
      },
      {
        name: "María González",
        role: "Inversionista",
        company: "Real Estate Ventures",
        text: "Desde la primera reunión sentí orden. Me gustó que aterrizaron mi meta en un plan realista y después me acompañaron a ejecutarlo paso a paso.",
        rating: 5,
        initials: "MG",
      },
      {
        name: "Roberto Díaz",
        role: "Agricultor",
        company: "Agronegocios El Triunfo",
        text: "Lo que más valoro de María es su enfoque analítico y la experiencia del equipo. Se nota cuando una estrategia está pensada para sostener resultados.",
        rating: 5,
        initials: "RD",
      },
      {
        name: "Andrea López",
        role: "Emprendedora",
        company: "López Consultores",
        text: "Antes tenía muchas ideas y poca estructura. Con María pasé a tener claridad, prioridades y un seguimiento que realmente me mantuvo enfocado.",
        rating: 5,
        initials: "AL",
      },
    ],

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // CONTACTO
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    contact: {
      subtitle: "Un buen contacto no debería sentirse frío ni rígido. Aquí empieza una conversación directa, clara y pensada para convertir una meta en un plan accionable.",
      phone: "+503 61276385",
      email: "escobarmaria.tcc@gmail.com",
      steps: [
        {
          number: "01",
          title: "Diagnóstico inicial",
          description:
            "Escuchamos su meta, entendemos su contexto y detectamos el mejor punto de partida.",
        },
        {
          number: "02",
          title: "Estrategia clara",
          description:
            "Traducimos la idea en una ruta accionable, medible y aterrizada a su realidad.",
        },
        {
          number: "03",
          title: "Seguimiento con disciplina",
          description:
            "No se trata solo de empezar bien, sino de sostener el avance con orden y enfoque.",
        },
      ],
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // REDES SOCIALES
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    socialLinks: {
      whatsapp: "50361276385",
      instagram: "https://www.instagram.com/mariaaarenee_",
      tiktok: "https://www.tiktok.com/@mariarenee__22",
      facebook: "https://www.facebook.com/mariarenee",
      linkedin: "https://www.linkedin.com/in/mariarenee",
    },

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // SEO METADATA
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    seo: {
      title: "María Reneé - Asesora Financiera Premium | Grupo Trade Corp",
      description:
        "Asesoría financiera profesional con disciplina y estrategia. Multiplica tu patrimonio con María Reneé Escobar.",
      image: "/images/team/maria.png",
    },
  },

  // ===== PLANTILLA PARA PRÓXIMOS ASESORES =====
  // Duplica esta estructura para agregar más asesores:
  // "nombreadvisor": { ... }
};

// ===== FUNCIONES HELPER =====
/**
 * Obtiene los datos de landing de un asesor por slug
 */
export function getAdvisorLandingData(slug: string): AdvisorData | null {
  return advisorLanding[slug] || null;
}

/**
 * Obtiene lista de slugs disponibles para landing
 */
export function getAdvisorLandingSlugs(): string[] {
  return Object.keys(advisorLanding);
}
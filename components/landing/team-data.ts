export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  slug: string;
  href: string;
  image?: string;
};

export const teamMembers: TeamMember[] = [
  { name: "Denis Gutiérrez", role: "Fundador & CEO", initials: "DG", slug: "denis", href: "/team/denis", image: "/images/denis.jpeg" },
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
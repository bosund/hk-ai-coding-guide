export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  items?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    title: "Hjem",
    href: "/",
    icon: "home",
  },
  {
    title: "Kom i Gang",
    href: "/kom-i-gang",
    icon: "book-open",
    items: [
      {
        title: "Hvad er Vibe-Coding?",
        href: "/kom-i-gang/vibe-coding",
      },
      {
        title: "At Prompte",
        href: "/kom-i-gang/at-prompte",
      },
      {
        title: "Ordforklaring",
        href: "/kom-i-gang/ordforklaring",
      },
    ],
  },
  {
    title: "Processen",
    href: "/processen",
    icon: "rocket",
    items: [
      {
        title: "Fase 1: Undersøgelse",
        href: "/processen/undersogelse",
      },
      {
        title: "Fase 2: MVP",
        href: "/processen/mvp",
      },
      {
        title: "Fase 3: Teknisk Design",
        href: "/processen/teknisk-design",
      },
      {
        title: "Fase 4: Agents",
        href: "/processen/agents",
      },
    ],
  },
  {
    title: "Best Practices",
    href: "/best-practices",
    icon: "lightbulb",
    items: [
      {
        title: "God Vibecoding",
        href: "/best-practices/god-vibecoding",
      },
      {
        title: "Funktioner i Henosia",
        href: "/best-practices/henosia",
      },
      {
        title: "Hyppige Fejl",
        href: "/best-practices/hyppige-fejl",
      },
    ],
  },
  {
    title: "Ressourcer",
    href: "/ressourcer",
    icon: "link",
    items: [
      {
        title: "Links & Værktøjer",
        href: "/ressourcer/links",
      },
      {
        title: "Om Bo Sundgaard",
        href: "/ressourcer/om",
      },
    ],
  },
];

export const phases = [
  {
    number: 1,
    title: "Undersøgelse",
    slug: "undersogelse",
    description: "Definer din idé og lav grundig research",
    icon: "search",
  },
  {
    number: 2,
    title: "MVP",
    slug: "mvp",
    description: "Opret en Produktkravspecifikation (PRD)",
    icon: "file-text",
  },
  {
    number: 3,
    title: "Teknisk Design",
    slug: "teknisk-design",
    description: "Vælg teknologi og planlæg arkitekturen",
    icon: "code",
  },
  {
    number: 4,
    title: "Agents",
    slug: "agents",
    description: "Generer AI-agent instruktionsfiler",
    icon: "bot",
  },
];

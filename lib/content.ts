export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  items?: NavItem[];
}

export interface NavGroup {
  label?: string;
  items: NavItem[];
}

export const navigation: NavGroup[] = [
  {
    label: "Om Kurset",
    items: [
      {
        title: "Vibe Coding",
        href: "/om-kurset/vibe-coding",
        icon: "zap",
      },
      {
        title: "Undervisere",
        href: "/om-kurset/undervisere",
        icon: "rocket",
      },
    ],
  },
  {
    label: "Læring",
    items: [
      {
        title: "At prompte",
        href: "/laering/at-prompte",
        icon: "brain-circuit",
      },
      {
        title: "God Vibe Coding",
        href: "/laering/god-vibe-coding",
        icon: "lightbulb",
      },
      {
        title: "Hyppige fejl",
        href: "/laering/hyppige-fejl",
        icon: "wrench",
      },
      {
        title: "Ordforklaring",
        href: "/laering/ordforklaring",
        icon: "book-open",
      },
    ],
  },
  {
    label: "Processen",
    items: [
      {
        title: "Undersøgelse",
        href: "/processen/undersogelse",
        icon: "1",
      },
      {
        title: "MVP",
        href: "/processen/mvp",
        icon: "2",
      },
      {
        title: "Teknisk Design",
        href: "/processen/teknisk-design",
        icon: "3",
      },
      {
        title: "Agents",
        href: "/processen/agents",
        icon: "4",
      },
    ],
  },
  {
    label: "Værktøjer & Links",
    items: [
      {
        title: "Links",
        href: "/vaerktojer/links",
        icon: "link",
      },
      {
        title: "Henosia",
        href: "/vaerktojer/henosia",
        icon: "wrench",
      },
      {
        title: "HK-Arrangementer",
        href: "/vaerktojer/hk-arrangementer",
        icon: "calendar",
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

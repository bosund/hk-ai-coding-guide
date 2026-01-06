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
    label: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/introduction",
        icon: "rocket",
      },
      {
        title: "Quick Start",
        href: "/quick-start",
        icon: "zap",
      },
    ],
  },
  {
    items: [
      {
        title: "AI Concepts",
        href: "#",
        icon: "brain-circuit",
        items: [
          { title: "Large Language Models", href: "/ai-concepts/llm" },
          { title: "Prompt Engineering", href: "/ai-concepts/prompt-engineering" },
          { title: "Context Windows", href: "/ai-concepts/context-windows" },
        ],
      },
      {
        title: "Tools & Setup",
        href: "#",
        icon: "wrench",
        items: [
          { title: "VS Code Extensions", href: "/tools/vscode" },
          { title: "GitHub Copilot", href: "/tools/copilot" },
          { title: "ChatGPT Setup", href: "/tools/chatgpt" },
        ],
      },
      {
        title: "Best Practices",
        href: "#",
        icon: "book-open",
        items: [
          { title: "Code Security", href: "/best-practices/security" },
          { title: "Ethical AI Use", href: "/best-practices/ethics" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        title: "Cheat Sheets",
        href: "/resources/cheatsheets",
        icon: "file-text",
      },
      {
        title: "Video Tutorials",
        href: "/resources/videos",
        icon: "video",
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

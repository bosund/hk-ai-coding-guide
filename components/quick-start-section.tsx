// components/quick-start-section.tsx
import Link from "next/link";
import { Icon } from "@/components/ui/icon";

const quickStartItems = [
  {
    icon: "terminal",
    title: "Setup & Værktøjer",
    description: "Få styr på IDE-plugins, API-nøgler og de nødvendige AI-værktøjer.",
    link: { href: "#", text: "Gå til guide" },
  },
  {
    icon: "psychology",
    title: "Prompt Engineering",
    description: "Lær at skrive præcise prompts der giver bedre kode og færre fejl.",
    link: { href: "#", text: "Lær teknikken" },
  },
  {
    icon: "bug_report",
    title: "Debugging med AI",
    description: "Brug AI til hurtigt at identificere fejl, forklare legacy kode og skrive tests.",
    link: { href: "#", text: "Se eksempler" },
  },
];

export function QuickStartSection() {
  return (
    <div className="py-20 bg-white dark:bg-surface-dark/50" id="quick-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Kom godt fra start</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Hvad vil du lære i dag?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickStartItems.map((item) => (
            <div
              key={item.title}
              className="group relative bg-surface-light dark:bg-surface-dark rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 hover:shadow-xl hover:ring-primary dark:hover:ring-primary transition-all duration-300"
            >
              <div className="absolute top-8 right-8 text-primary/20 group-hover:text-primary transition-colors">
                <Icon className="text-6xl">{item.icon}</Icon>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pr-12">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6 min-h-[3rem]">{item.description}</p>
              <Link
                href={item.link.href}
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark"
              >
                {item.link.text} <Icon className="text-sm ml-1">arrow_forward</Icon>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

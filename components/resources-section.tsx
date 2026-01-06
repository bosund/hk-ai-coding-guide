// components/resources-section.tsx
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';

const resources = [
  {
    category: 'E-Bog',
    title: 'Den Store Prompt Guide',
    description: 'En samling af over 100 afprøvede prompts til JavaScript, Python og SQL udvikling.',
    icon: 'library_books',
    href: '#',
  },
  {
    category: 'Video Kursus',
    title: 'GitHub Copilot i Dybden',
    description: '45 minutters gennemgang af avancerede features i GitHub Copilot til erfarne udviklere.',
    icon: 'ondemand_video',
    href: '#',
  },
  {
    category: 'Artikel',
    title: 'Etiske Overvejelser',
    description: 'Hvad skal du være opmærksom på ift. ophavsret og datasikkerhed når du bruger AI?',
    icon: 'article',
    href: '#',
  },
  {
    category: 'Community',
    title: 'HK Dev Discord',
    description: 'Deltag i samtalen med andre medlemmer. Del dine bedste prompts og få hjælp.',
    icon: 'forum',
    href: '#',
  },
];

export function ResourcesSection() {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ressourcer</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Dyk dybere ned i materialet.</p>
          </div>
          <Link href="#" className="hidden sm:inline-flex items-center font-medium text-primary hover:text-primary-dark">
            Se alle ressourcer <Icon className="ml-1">arrow_forward</Icon>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <Link
              key={resource.title}
              href={resource.href}
              className="flex flex-col sm:flex-row bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
            >
              <div className="h-48 sm:h-auto sm:w-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0">
                <Icon className="text-5xl text-gray-400 group-hover:text-primary transition-colors">
                  {resource.icon}
                </Icon>
              </div>
              <div className="p-6 flex flex-col justify-center">
                <div className="uppercase tracking-wide text-xs text-primary font-semibold mb-1">
                  {resource.category}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{resource.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link href="#" className="inline-flex items-center font-medium text-primary hover:text-primary-dark">
            Se alle ressourcer <Icon className="ml-1">arrow_forward</Icon>
          </Link>
        </div>
      </div>
    </div>
  );
}

// components/stats-section.tsx
const stats = [
  { value: "500+", label: "Medlemmer trænet" },
  { value: "40+", label: "Templates" },
  { value: "24/7", label: "Ressource adgang" },
  { value: "100%", label: "HK Kvalitet" },
];

export function StatsSection() {
  return (
    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-2 gap-8 md:grid-cols-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

// components/process-section.tsx

const processSteps = [
    {
      number: 1,
      title: "Planlægning & Kontekst",
      description: "Definer opgaven klart. Giv AI'en den nødvendige kontekst om din kodebase, arkitektur og mål før du starter.",
    },
    {
      number: 2,
      title: "Iterativ Generering",
      description: "Generer kode i små bidder. Valider hver del. Bed om forklaringer, hvis koden er kompleks eller uforståelig.",
    },
    {
      number: 3,
      title: "Review & Refactoring",
      description: "AI-kode er ikke perfekt. Gennemgå koden manuelt for sikkerhedshuller, performanceproblemer og stil.",
    },
    {
      number: 4,
      title: "Test & Implementering",
      description: "Bed AI'en om at generere unit tests. Kør tests før du committer til din repository.",
    },
  ];

  export function ProcessSection() {
    return (
      <div className="py-20" id="processen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:text-center">
            <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Metodikken</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">4-Trins Processen</p>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Vores anbefalede workflow for at sikre kvalitet og effektivitet når du koder med AI-støtte.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl text-primary select-none pointer-events-none -mr-8 -mt-8">
                  {step.number}
                </div>
                <div className="flex items-center gap-4 mb-4 z-10">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-primary font-bold text-xl">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 z-10 pl-16">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

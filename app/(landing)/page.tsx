import Link from "next/link";

export default function LandingPage() {
    return (
        <>
            <div className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
                <div className="absolute inset-0 hero-pattern [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 bg-primary/5 mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                        Opdateret Guide 2024
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                        Mester AI-drevet
                        <br />
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                            Kodning med HK
                        </span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 mb-10">
                        Lær hvordan du effektivt integrerer kunstig intelligens i din
                        udviklingsproces. Fra prompt engineering til kodeoptimering – din
                        komplette guide.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-dark md:text-lg transition-all shadow-lg hover:shadow-primary/25"
                            href="#quick-start"
                        >
                            Kom i gang
                            <span className="material-icons ml-2 text-xl">rocket_launch</span>
                        </Link>
                        <Link
                            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-surface-light dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 md:text-lg transition-all"
                            href="#processen"
                        >
                            Se processen
                            <span className="material-icons ml-2 text-xl">arrow_downward</span>
                        </Link>
                    </div>
                    {/* Stats removed */}
                </div>
            </div>

            <div id="quick-start" className="py-20 bg-white dark:bg-surface-dark/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-base font-semibold text-primary uppercase tracking-wide">
                            Kom godt fra start
                        </h2>
                        <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                            Hvad vil du lære i dag?
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group relative bg-surface-light dark:bg-surface-dark rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 hover:shadow-xl hover:ring-primary dark:hover:ring-primary transition-all duration-300">
                            <div className="absolute top-8 right-8 text-primary/20 group-hover:text-primary transition-colors">
                                <span className="material-icons text-6xl">terminal</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pr-12">
                                Setup & Værktøjer
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6 min-h-[3rem]">
                                Få styr på IDE-plugins, API-nøgler og de nødvendige AI-værktøjer.
                            </p>
                            <Link
                                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark"
                                href="#"
                            >
                                Gå til guide{" "}
                                <span className="material-icons text-sm ml-1">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="group relative bg-surface-light dark:bg-surface-dark rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 hover:shadow-xl hover:ring-primary dark:hover:ring-primary transition-all duration-300">
                            <div className="absolute top-8 right-8 text-primary/20 group-hover:text-primary transition-colors">
                                <span className="material-icons text-6xl">psychology</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pr-12">
                                Prompt Engineering
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6 min-h-[3rem]">
                                Lær at skrive præcise prompts der giver bedre kode og færre
                                fejl.
                            </p>
                            <Link
                                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark"
                                href="#"
                            >
                                Lær teknikken{" "}
                                <span className="material-icons text-sm ml-1">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="group relative bg-surface-light dark:bg-surface-dark rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 hover:shadow-xl hover:ring-primary dark:hover:ring-primary transition-all duration-300">
                            <div className="absolute top-8 right-8 text-primary/20 group-hover:text-primary transition-colors">
                                <span className="material-icons text-6xl">bug_report</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pr-12">
                                Debugging med AI
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-6 min-h-[3rem]">
                                Brug AI til hurtigt at identificere fejl, forklare legacy kode
                                og skrive tests.
                            </p>
                            <Link
                                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark"
                                href="#"
                            >
                                Se eksempler{" "}
                                <span className="material-icons text-sm ml-1">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div id="processen" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 md:text-center">
                        <h2 className="text-base font-semibold text-primary uppercase tracking-wide">
                            Metodikken
                        </h2>
                        <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                            4-Trins Processen
                        </p>
                        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            Vores anbefalede workflow for at sikre kvalitet og effektivitet
                            når du koder med AI-støtte.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl text-primary select-none pointer-events-none -mr-8 -mt-8">
                                1
                            </div>
                            <div className="flex items-center gap-4 mb-4 z-10">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-primary font-bold text-xl">
                                    1
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Planlægning & Kontekst
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 z-10 pl-16">
                                Definer opgaven klart. Giv AI'en den nødvendige kontekst om din
                                kodebase, arkitektur og mål før du starter.
                            </p>
                        </div>
                        <div className="flex flex-col p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl text-primary select-none pointer-events-none -mr-8 -mt-8">
                                2
                            </div>
                            <div className="flex items-center gap-4 mb-4 z-10">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-primary font-bold text-xl">
                                    2
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Iterativ Generering
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 z-10 pl-16">
                                Generer kode i små bidder. Valider hver del. Bed om
                                forklaringer, hvis koden er kompleks eller uforståelig.
                            </p>
                        </div>
                        <div className="flex flex-col p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl text-primary select-none pointer-events-none -mr-8 -mt-8">
                                3
                            </div>
                            <div className="flex items-center gap-4 mb-4 z-10">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-primary font-bold text-xl">
                                    3
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Review & Refactoring
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 z-10 pl-16">
                                AI-kode er ikke perfekt. Gennemgå koden manuelt for
                                sikkerhedshuller, performanceproblemer og stil.
                            </p>
                        </div>
                        <div className="flex flex-col p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl text-primary select-none pointer-events-none -mr-8 -mt-8">
                                4
                            </div>
                            <div className="flex items-center gap-4 mb-4 z-10">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-primary font-bold text-xl">
                                    4
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Test & Implementering
                                </h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 z-10 pl-16">
                                Bed AI'en om at generere unit tests. Kør tests før du committer
                                til din repository.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-20 bg-gray-50 dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Ressourcer
                            </h2>
                            <p className="mt-2 text-gray-500 dark:text-gray-400">
                                Dyk dybere ned i materialet.
                            </p>
                        </div>
                        <Link
                            className="hidden sm:inline-flex items-center font-medium text-primary hover:text-primary-dark"
                            href="#"
                        >
                            Se alle ressourcer{" "}
                            <span className="material-icons ml-1">arrow_forward</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Link
                            className="flex flex-col sm:flex-row bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
                            href="#"
                        >
                            <div className="h-48 sm:h-auto sm:w-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0">
                                <span className="material-icons text-5xl text-gray-400 group-hover:text-primary transition-colors">
                                    library_books
                                </span>
                            </div>
                            <div className="p-6 flex flex-col justify-center">
                                <div className="uppercase tracking-wide text-xs text-primary font-semibold mb-1">
                                    E-Bog
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                    Den Store Prompt Guide
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                    En samling af over 100 afprøvede prompts til JavaScript,
                                    Python og SQL udvikling.
                                </p>
                            </div>
                        </Link>
                        <Link
                            className="flex flex-col sm:flex-row bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
                            href="#"
                        >
                            <div className="h-48 sm:h-auto sm:w-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0">
                                <span className="material-icons text-5xl text-gray-400 group-hover:text-primary transition-colors">
                                    ondemand_video
                                </span>
                            </div>
                            <div className="p-6 flex flex-col justify-center">
                                <div className="uppercase tracking-wide text-xs text-primary font-semibold mb-1">
                                    Video Kursus
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                    GitHub Copilot i Dybden
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                    45 minutters gennemgang af avancerede features i GitHub
                                    Copilot til erfarne udviklere.
                                </p>
                            </div>
                        </Link>
                        <Link
                            className="flex flex-col sm:flex-row bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
                            href="#"
                        >
                            <div className="h-48 sm:h-auto sm:w-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0">
                                <span className="material-icons text-5xl text-gray-400 group-hover:text-primary transition-colors">
                                    article
                                </span>
                            </div>
                            <div className="p-6 flex flex-col justify-center">
                                <div className="uppercase tracking-wide text-xs text-primary font-semibold mb-1">
                                    Artikel
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                    Etiske Overvejelser
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                    Hvad skal du være opmærksom på ift. ophavsret og datasikkerhed
                                    når du bruger AI?
                                </p>
                            </div>
                        </Link>
                        <Link
                            className="flex flex-col sm:flex-row bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
                            href="#"
                        >
                            <div className="h-48 sm:h-auto sm:w-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0">
                                <span className="material-icons text-5xl text-gray-400 group-hover:text-primary transition-colors">
                                    forum
                                </span>
                            </div>
                            <div className="p-6 flex flex-col justify-center">
                                <div className="uppercase tracking-wide text-xs text-primary font-semibold mb-1">
                                    Community
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                    HK Dev Discord
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                                    Deltag i samtalen med andre medlemmer. Del dine bedste prompts
                                    og få hjælp.
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="mt-8 text-center sm:hidden">
                        <Link
                            className="inline-flex items-center font-medium text-primary hover:text-primary-dark"
                            href="#"
                        >
                            Se alle ressourcer{" "}
                            <span className="material-icons ml-1">arrow_forward</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-primary">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        <span className="block">Klar til at effektivisere din kode?</span>
                        <span className="block text-blue-200">
                            Start din læringsrejse i dag.
                        </span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <Link
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
                                href="#"
                            >
                                Opret gratis konto
                            </Link>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <Link
                                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
                                href="#"
                            >
                                Læs mere om HK
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

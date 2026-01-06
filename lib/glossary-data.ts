export interface GlossaryTerm {
    term: string;
    definition: string;
    category?: "AI & Vibe Coding" | "Værktøjer & Miljø" | "Webudvikling & Stack" | "Data & Drift";
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
    // AI & Vibe Coding Begreber
    {
        term: "Vibe Coding",
        definition: 'At programmere ved at beskrive "stemningen" eller resultatet til en AI, uden nødvendigvis at røre koden selv.',
        category: "AI & Vibe Coding"
    },
    {
        term: "MVP",
        definition: "Minimum Viable Product. Den mindste/simpleste udgave af dit produkt, der kan løse problemet.",
        category: "AI & Vibe Coding"
    },
    {
        term: "LLM",
        definition: '"Hjernen" bag AI\'en (f.eks. GPT-4, Claude 3.5). Den model, der forstår din tekst og skriver kode retur.',
        category: "AI & Vibe Coding"
    },
    {
        term: "Context",
        definition: "Den mængde info (chat, åbne filer, dokumentation), AI'en \"ser\" lige nu. God context giver bedre svar.",
        category: "AI & Vibe Coding"
    },
    {
        term: "MCP",
        definition: "Model Context Protocol. Linker AI sikkert til dine data (f.eks. læse filer, database).",
        category: "AI & Vibe Coding"
    },
    {
        term: "Prompt Engineering",
        definition: "Kunsten at formulere sine instrukser præcist, så AI'en gør nøjagtigt det, man ønsker.",
        category: "AI & Vibe Coding"
    },
    {
        term: "Hallucination",
        definition: "Når AI'en selvsikkert finder på noget, der ikke passer (f.eks. opfinder en funktion, der ikke findes).",
        category: "AI & Vibe Coding"
    },
    {
        term: "Token",
        definition: 'Enheden AI tæller i. Et ord er ca. 0.75 tokens. Det bruges til at måle, hvor meget "hukommelse" du bruger.',
        category: "AI & Vibe Coding"
    },
    {
        term: "Composer",
        definition: "En funktion i Cursor IDE, hvor du kan skrive krav til flere filer på én gang, og AI'en bygger hele features.",
        category: "AI & Vibe Coding"
    },

    // Værktøjer & Miljø
    {
        term: "IDE",
        definition: "Integrated Development Environment. Din digitale arbejdsplads/skriveprogram til kode (f.eks. VS Code).",
        category: "Værktøjer & Miljø"
    },
    {
        term: "Cursor",
        definition: "En populær IDE bygget specifikt til AI/Vibe coding. Den kender hele din kodebase.",
        category: "Værktøjer & Miljø"
    },
    {
        term: "Terminal / CLI",
        definition: 'Den "sorte skærm" hvor du skriver tekstkommandoer for at starte servere eller installere pakker.',
        category: "Værktøjer & Miljø"
    },
    {
        term: "Localhost",
        definition: 'Din egen computer. Når du kører en hjemmeside på "localhost", kan kun du se den i din browser.',
        category: "Værktøjer & Miljø"
    },
    {
        term: "Git",
        definition: 'Versionstyring. Tænk på det som en "fortryd-knap" og backup i skyen.',
        category: "Værktøjer & Miljø"
    },
    {
        term: "Vercel",
        definition: 'En tjeneste til at "hoste" din hjemmeside, så den kommer ud på internettet.',
        category: "Værktøjer & Miljø"
    },
    {
        term: "GitHub",
        definition: "En platform til at gemme og dele din kode online. Bruges sammen med Git til versionsstyring og backup i skyen.",
        category: "Værktøjer & Miljø"
    },
    {
        term: "Repository",
        definition: "En 'mappe' i skyen (fx på GitHub), der indeholder alle filerne til dit projekt og gemmer hele dets historik.",
        category: "Værktøjer & Miljø"
    },
    {
        term: "Hosting",
        definition: "En tjeneste (fx Vercel eller Koyeb), der stiller en server til rådighed, så din hjemmeside er tændt og kan besøges af alle på internettet.",
        category: "Værktøjer & Miljø"
    },

    // Webudvikling & Stack
    {
        term: "Framework",
        definition: "Et skelet af kode, du bygger videre på (f.eks. Next.js).",
        category: "Webudvikling & Stack"
    },
    {
        term: "Tech Stack",
        definition: "En samling af teknologier (sprog, frameworks, databaser), der arbejder sammen for at drive din app.",
        category: "Webudvikling & Stack"
    },
    {
        term: "React",
        definition: 'Bibliotek til at bygge brugergrænseflader med "komponenter".',
        category: "Webudvikling & Stack"
    },
    {
        term: "Props",
        definition: 'Forkortelse for "properties". Data eller indstillinger, du sender ind i en komponent for at ændre dens udseende eller indhold.',
        category: "Webudvikling & Stack"
    },
    {
        term: "Frontend/Backend",
        definition: "Frontend er det brugeren ser. Backend er motoren bagved (logik, data).",
        category: "Webudvikling & Stack"
    },
    {
        term: "Server Actions",
        definition: "Funktioner i Next.js, der kører på serveren men kaldes direkte fra din frontend. Giver nem adgang til data.",
        category: "Webudvikling & Stack"
    },
    {
        term: "Tailwind CSS",
        definition: "Design-system hvor du styler direkte i koden (eks. 'text-red-500').",
        category: "Webudvikling & Stack"
    },
    {
        term: "shadcn/ui",
        definition: "Lækre, færdige komponenter, du kopierer direkte ind. Perfekt til AI-genereret UI.",
        category: "Webudvikling & Stack"
    },

    // Data & Drift
    {
        term: "NPM",
        definition: "Node Package Manager. Bibliotek af gratis kode-pakker.",
        category: "Data & Drift"
    },
    {
        term: "API",
        definition: 'En "tjener" der lader to programmer tale sammen.',
        category: "Data & Drift"
    },
    {
        term: "Environment Variables",
        definition: 'Hemmelige nøgler (f.eks. API-keys), som gemmes i en .env-fil, så de ikke ligger åbent i din kode.',
        category: "Data & Drift"
    },
    {
        term: "Database",
        definition: "Et digitalt arkivskab til permanente data.",
        category: "Data & Drift"
    },
    {
        term: "Schema",
        definition: 'En "plantegning" over din database. Beskriver hvilke tabeller du har, og hvilke data (kolonner) der skal være i dem.',
        category: "Data & Drift"
    },
    {
        term: "Auth",
        definition: "Authentication. Systemet der tjekker, hvem brugeren er (login), og hvad de må (adgangskontrol).",
        category: "Data & Drift"
    },
    {
        term: "Deployment",
        definition: "At flytte koden fra computer til server (live).",
        category: "Data & Drift"
    },
    {
        term: "Serverless",
        definition: 'En teknologi hvor du ikke skal tænke på servere. Koden "vågner" kun, når der er brug for den, hvilket sparer strøm og penge.',
        category: "Data & Drift"
    },
    {
        term: "DNS",
        definition: "Domain Name System. En 'telefonbog' for internettet, der oversætter menneskelige adresser (som google.dk) til serveres IP-adresser.",
        category: "Data & Drift"
    },
    {
        term: "CI/CD",
        definition: "Continuous Integration / Continuous Deployment. En automatiseret proces, der tester og udgiver din kode hver gang du laver ændringer.",
        category: "Data & Drift"
    },
    {
        term: "Domæne",
        definition: "Din unikke adresse på internettet (fx google.dk). Det er det navn, folk skriver i browseren for at finde din side.",
        category: "Data & Drift"
    },
    {
        term: "CNAME",
        definition: "En DNS-indstilling (record), der fortæller internettet, at dit domæne skal pege videre til en anden adresse (fx din Vercel-adresse).",
        category: "Data & Drift"
    }
];

export const getDefinition = (term: string) => {
    return GLOSSARY_TERMS.find(t => t.term.toLowerCase() === term.toLowerCase())?.definition;
};

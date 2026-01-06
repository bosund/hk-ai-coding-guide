import { ChevronRight } from "lucide-react";
import { CodeBlock } from "@/components/code-block";

export default function TekniskDesignPage() {
  const promptContent = `# Tech Design Generator (MVP Edition)

Du fungerer som **Senior Software Arkitekt** (CTO). Din opgave er at interviewe brugeren (Vibe-coderen) for at anbefale den **simpleste, hurtigste og mest robuste** tech-stack til deres MVP.

Målet er at generere et "Technical Design Document", så en AI-kodningsagent (f.eks. i Cursor eller Windsurf) ved præcis, hvordan appen skal bygges.

---

## 1. Interview-Fase (1 Svar ad gangen!)

Du skal stille spørgsmålene nedenfor **ÉT AD GANGEN**. Vent på brugerens svar, før du stiller næste spørgsmål.

**Q1:** "Hvilke platforme bygger vi til? (Web, iOS, Android, Desktop eller 'Bare det nemmeste')?"
*(Vent på svar)*

**Q2:** "Har du præferencer for specifikke sprog eller frameworks? (F.eks. 'Jeg kender lidt Python' eller 'Jeg er ligeglad, bare det virker')."
*(Vent på svar)*

**Q3:** "Skal brugere logge ind? Hvis ja, hvordan? (Email, Google, ingen login?)"
*(Vent på svar)*

**Q4:** "Hvordan skal data gemmes? (Database i skyen, lokalt i browseren, Google Sheets, eller ingen data gemmes?)"
*(Vent på svar)*

**Q5:** "Er der eksterne tjenester, vi skal tale med? (F.eks. OpenAI API, vejrtjenester, betaling?)"
*(Vent på svar)*

**Q6:** "Hosting: Hvor skal det leve? (Vercel, Netlify, 'Ved ikke' - jeg anbefaler Vercel til web)."
*(Vent på svar)*

**Q7:** "Hvad er dit tekniske ambitionsniveau? (1: 'Det skal bare kunne vises frem', 5: 'Skal kunne skalere til 10.000 brugere i morgen')."
*(Vent på svar)*

---

## 2. Genererings-Fase (TECH DESIGN DOCUMENT)

Når alle 7 spørgsmål er besvaret, analyserer du svarene og genererer nedenstående dokument.

**Vigtigt:** Vælg altid "Boring Technology" (gennemprøvet teknologi) over "Hype", medmindre brugeren specifikt beder om andet.
- For Web MVP'er: Anbefal ofte Next.js + TailwindCSS + Supabase (eller Firebase).
- For simpel data: Supabase.
- For AI integration: Vercel AI SDK.

**Output Format:**

\`\`\`markdown
# Technical Design Document: [Projekt Navn]

## 1. Executive Summary
Kort beskrivelse af den valgte arkitektur og hvorfor den passer bedst til denne MVP.

## 2. Tech Stack Selection
- **Frontend:** [Sprog/Framework + begrundelse]
- **Backend:** [Service/Framework + begrundelse]
- **Database:** [Type + begrundelse]
- **Authentication:** [Provider + begrundelse]
- **Hosting:** [Provider + begrundelse]

## 3. Data Model (Schema)
*(Lav et simpelt udkast til databasestrukturen)*
- **Users Table:** id, email, created_at...
- **[Main Entity] Table:** ...

## 4. API Endpoints & Server Actions
Liste over de vigtigste funktioner, systemet skal kunne udføre.
- \`createUser()\`
- \`fetchData()\`
- ...

## 5. Security & Environement Variables
Hvilke hemmeligheder skal vi bruge?
- \`DATABASE_URL\`
- \`OPENAI_API_KEY\`
- ...

## 6. Implementation Plan
1. Project Setup
2. Database Setup & Auth
3. Core Feature 1 Implementation
4. UI Polish
5. Deployment
\`\`\`

Spørg til sidst: "Ser dette tekniske design fornuftigt ud, eller skal vi justere valg af teknologi?"`;

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 pt-0">
      <header className="pb-8 border-b border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span>Processen</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary font-medium">3 - Teknisk Design</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Fase 3: Teknisk Design</h1>
        <p className="text-lg text-muted-foreground">
          Vælg den rette teknologi. Målet er at generere et "Technical Design Document", så din AI-agent ved præcis, hvordan appen skal bygges.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <h2 className="text-2xl font-bold">Tech Design Generator</h2>
        <p>
          Denne prompt hjælper dig med at tage kritiske teknologivalg, selvom du ikke er teknisk ekspert.
          Kopier prompten ind i din foretrukne LLM.
        </p>

        <CodeBlock code={promptContent} language="markdown" filename="tech-design-generator.md" />

      </div>
    </div>
  );
}

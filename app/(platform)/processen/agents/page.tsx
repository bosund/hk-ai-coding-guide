import { ChevronRight } from "lucide-react";
import { CodeBlock } from "@/components/code-block";

export default function AgentsPage() {
  const generatorPrompt = `# Rolle: AI Coding Agent Configurator

Din opgave er at generere "Instruktions-filer" til en AI-kodningsagent baseret på brugerens PRD og Tekniske Design.
Disse filer sikrer, at AI'en husker reglerne, stilen og tech-stacken gennem hele projektet.

## Input (Hvad brugeren giver dig)
1. **PRD** (Produktkrav)
2. **Tech Design** (Teknologivalg)

## Output (Hvad du skal generere)
Du skal generere indholdet til en fil kaldet \`AGENTS.md\` (eller \`.cursorrules\` / \`.windsurfrules\`).

Generer filen med følgende struktur, tilpasset brugerens projekt:

\`\`\`markdown
# Project Context
[Kort beskrivelse af projektet fra PRD]

# Tech Stack
- Frontend: [Valgt framework]
- Backend: [Valgt backend]
- Styling: [Valgt styling]
- Database: [Valgt DB]

# Coding Rules
1. **Functional Components:** Brug altid funktionelle komponenter + hooks.
2. **TypeScript:** Brug TypeScript, men hold det simpelt (ingen \`any\`).
3. **Styling:** Brug [Valgt Styling] (f.eks. Tailwind classes). Ingen inline styles.
4. **Error Handling:** Pak API-kald ind i try/catch.
5. **Comments:** Skriv kommentarer for kompleks logik på Dansk.

# Project Structure
(Anbefal en mappestruktur baseret på tech stacken, f.eks.:)
- /app
- /components
- /lib
- /hooks
\`\`\`

---

Start med at spørge: "Indsæt venligst din PRD og dit Tekniske Design, så genererer jeg din AGENTS.md fil."`;

  const ruleFileContent = `# Project Context
Dette projekt er en [Beskrivelse af appen]. Målet er at [Målet med appen].

# Tech Stack
- **Frontend**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Backend/Auth**: Supabase

# Coding Rules
- Brug **TypeScript** til alle filer (.tsx / .ts).
- Brug **"use client"** i toppen af komponenter, der bruger hooks (useState, useEffect).
- Følg **kebab-case** for filnavne (f.eks. \`my-component.tsx\`).
- Implementer **responsive design** med Tailwind (sm:, md:, lg:).
- Hold komponenter små og genbrugelige.

# Mappestruktur
- \`/app\`: Sider og routes
- \`/components\`: Genbrugelige UI komponenter
- \`/lib\`: Hjælpefunktioner og konfiguration`;

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 pt-0">
      <header className="pb-8 border-b border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span>Processen</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary font-medium">4 - Agents</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Fase 4: Agents</h1>
        <p className="text-lg text-muted-foreground">
          Nu skal vi i gang med at bygge. Men først skal vi instruere din AI-agent, så den bygger det rigtige.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <h2 className="text-2xl font-bold">1. Generer dine instruktioner</h2>
        <p>
          Brug denne prompt til at få din AI til at skrive en <code>AGENTS.md</code> fil baseret på dit design fra de forrige faser.
        </p>

        <CodeBlock code={generatorPrompt} language="markdown" filename="agent-config-generator.md" />

        <h2 className="text-2xl font-bold mt-12">2. Opret AGENTS.md</h2>
        <p>
          Når du har genereret indholdet, skal du oprette en fil i roden af dit projekt kaldet <code>AGENTS.md</code> (eller <code>.cursorrules</code> hvis du bruger Cursor).
          Her er et eksempel på, hvordan sådan en fil kan se ud:
        </p>

        <CodeBlock code={ruleFileContent} language="markdown" filename="AGENTS.md (Eksempel)" />

      </div>
    </div>
  );
}

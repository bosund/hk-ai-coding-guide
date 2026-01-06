import { ChevronRight } from "lucide-react";

export default function AgentsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 pt-0">
      <header className="pb-8 border-b border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span>Processen</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary font-medium">4 - Agents</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Fase 4: Agent Instruktioner</h1>
        <p className="text-lg text-muted-foreground">
          Det sidste og vigtigste trin. Her genererer vi `AGENTS.md` og konfigurationsfiler, der guider din AI-assistent.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <h2 className="text-2xl font-bold">Agents Configuration Generator</h2>
        <p>
          Denne prompt tager din PRD og dit Tekniske Design og omdanner dem til krystalklare instruktioner (Master Plan) til din AI.
        </p>

        <div className="relative">
          <pre className="p-4 rounded-lg bg-muted overflow-x-auto text-sm">
            {`# Del IV - Generer AGENTS.md og AI Agent-konfigurationsfiler

Jeg hjælper dig med at oprette instruktionsfilerne, der skal guide din AI-kodeassistent til at bygge din MVP.

**Påkrævede filer:**
1. PRD Dokument (fra Del II)
2. Teknisk Design Dokument (fra Del III)

Når du har vedhæftet dine filer, skal du bekræfte dit setup:

**A) Teknisk Niveau:** (Vibe-coder, etc.)

**B) Hvilke(t) AI-værktøj(er) vil du bruge?**
1. Claude Code
2. Gemini CLI
3. Google Antigravity
4. Cursor
5. Windsurf
6. Cline
7. GitHub Copilot
8. Bolt.new / Lovable
9. Aider

---

## Instruktioner til AI-Assistenten

Du er en ekspert Tech Lead.
1. Opret **AGENTS.md** (Master Plan)
2. Opret **agent_docs/** mappe med detaljer
3. Opret værktøjs-specifikke config filer (f.eks. .cursorrules, CLAUDE.md)
`}
          </pre>
        </div>

      </div>
    </div>
  );
}

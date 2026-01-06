import { ChevronRight } from "lucide-react";

export default function TekniskDesignPage() {
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
          Nu ved vi HVAD vi skal bygge. Nu skal vi finde ud af HVORDAN. Dette dokument definerer din tekniske arkitektur.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <h2 className="text-2xl font-bold">Tech Design Generator</h2>
        <p>
          Denne prompt hjælper dig med at vælge de rigtige værktøjer og platforme baseret på din PRD og dit budget.
        </p>

        <div className="relative">
          <pre className="p-4 rounded-lg bg-muted overflow-x-auto text-sm">
            {`# Del III - Generator af Teknisk Design Dokument til MVP

Jeg hjælper dig med at lave et Teknisk Design Dokument til din MVP. Dette dokument definerer HVORDAN det, du skitserede i din PRD, skal bygges.

**Påkrævede filer:**
1. PRD Dokument (fra Del II)

## Instrukser til AI-assistenten

Vent på at brugeren vedhæfter deres PRD-dokument. Læs det grundigt igennem.

Stil derefter følgende spørgsmål **ÉT AD GANGEN**:

**Q1:** "Baseret på din PRD for [App Navn], hvor skal folk bruge den? (Web, Mobil, Desktop)"
*[Vent på svar]*

**Q2:** "Hvad er din kodesituation? (Kun no-code, AI skriver koden, Learning by doing)"
*[Vent på svar]*

**Q3:** "Hvad er budgettet til værktøjer og services? (Gratis, <350kr, <1400kr, Fleksibelt)"
*[Vent på svar]*

**Q4:** "Hvor hurtigt har du brug for at lancere? (ASAP, 1 mdr, 2-3 mdr, Ingen hast)"
*[Vent på svar]*

**Q5:** "Hvad bekymrer dig mest ved byggeprocessen?"
*[Vent på svar]*

**Q6:** "Har du prøvet nogle værktøjer endnu?"
*[Vent på svar]*

**Q7:** "For din [hovedfunktion fra PRD], hvad er vigtigst? (Simplicitet, Fejlfrihed, Udseende, Skalering)"
*[Vent på svar]*`}
          </pre>
        </div>

      </div>
    </div>
  );
}

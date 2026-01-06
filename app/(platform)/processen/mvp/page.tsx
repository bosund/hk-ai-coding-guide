import { ChevronRight } from "lucide-react";

export default function MVPPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 pt-0">
      <header className="pb-8 border-b border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span>Processen</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary font-medium">2 - MVP</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Fase 2: Produktkravspecifikation (PRD)</h1>
        <p className="text-lg text-muted-foreground">
          Definer HVAD du bygger, HVEM det er til, og HVORFOR det er vigtigt. En MVP (Minimum Viable Product) handler om at skære ind til benet.
        </p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <h2 className="text-2xl font-bold">PRD Generator (Interview Mode)</h2>
        <p>
          Brug denne prompt til at lade AI'en interviewe dig og generere en professionel kravspecifikation.
        </p>

        <div className="relative">
          <pre className="p-4 rounded-lg bg-muted overflow-x-auto text-sm">
            {`# Del II - Produktkravspecifikation (PRD) Generator (Interview Mode)

Jeg hjælper dig med at oprette en Produktkravspecifikation (PRD) til din MVP. Dette dokument vil definere HVAD du bygger, HVEM det er til, og HVORFOR det er vigtigt.

Da du er en **Vibe-coder** (gode idéer, bruger AI til at bygge), tager vi det trin-for-trin for at sikre, at vi får alle detaljerne på plads uden teknisk jargon.

---

## Instruktioner til AI-assistenten (System Prompt)

**Rolle:** Du er en ekspert Product Manager, der hjælper en "Vibe-coder" (en person med visioner, men begrænset kodeerfaring) med at definere deres app.

**Proces:**

1. **Interview-tilgang:** Du må **IKKE** stille alle spørgsmål på én gang. Du skal stille **ÉT spørgsmål ad gangen**.
2. **Vent på svar:** Vent altid på brugerens input, før du går videre til næste spørgsmål.
3. **Brug kontekst:** Hvis brugeren har uploadet en fil, skal du bruge den information.

### Interview-flow (Stil ét ad gangen):

**Q1:** "Lad os starte! Hvad er navnet på dit produkt/app? (Hvis du ikke har besluttet dig, kan vi brainstorme!)"
*[Vent på svar]*

**Q2:** "Godt navn! Med én sætning, hvilket problem løser appen? (Eksempel: 'Hjælper freelancere med at registrere tid automatisk')"
*[Vent på svar]*

**Q3:** "Hvad er dit primære mål med lanceringen? (Eksempler: 'Få 100 brugere', 'Tjene min første krone', 'Lave noget sjovt til mine venner')"
*[Vent på svar]*

**Q4:** "Lad os tale om brugerne. Beskriv din ideelle bruger, som om du forklarer det til en ven."
*[Vent på svar]*

**Q5:** "Fortæl mig en kort historie om brugerrejsen."
*[Vent på svar]*

**Q6:** "Nu til det vigtigste: Hvad er de **3-5 funktioner**, der SKAL være med i den allerførste version (MVP)? Vi skal skære helt ind til benet her."
*[Vent på svar]*

**Q7:** "Hvilke funktioner gemmer vi bevidst til version 2?"
*[Vent på svar]*

**Q8:** "Hvordan ved vi, om lanceringen er en succes? Vælg 1-2 simple målinger."
*[Vent på svar]*

**Q9:** "Hvad er 'viben' eller stemningen i appen?"
*[Vent på svar]*

**Q10:** "Sidste spørgsmål: Har du nogen faste begrænsninger? (F.eks. 'Skal være færdig om 2 uger', 'Må ikke koste penge i drift')."
*[Vent på svar]*`}
          </pre>
        </div>

      </div>
    </div>
  );
}

import { ChevronRight } from "lucide-react";

export default function UndersogelsePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 pt-0">
      <header className="pb-8 border-b border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span>Processen</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary font-medium">1 - Undersøgelse</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Fase 1: Undersøgelse</h1>
        <p className="text-lg text-muted-foreground">Før du bygger, skal du forstå. Brug denne prompt til at afdække din idé.</p>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">

        <h2 className="text-2xl font-bold">Deep Research Prompt-Architect</h2>
        <p>
          Kopier nedenstående prompt ind i din AI (ChatGPT, Claude, etc.) for at starte et interview om din idé.
          AI'en vil fungere som en arkitekt der hjælper dig med at afdække blinde vinkler.
        </p>

        <div className="relative">
          <pre className="p-4 rounded-lg bg-muted overflow-x-auto text-sm">
            {`# Rolle: Deep Research Prompt-Architect
Du er en ekspert i at designe "Deep Research Prompts" for Vibe-coders og iværksættere. Dit mål er at interviewe brugeren for at forstå deres app-idé til bunds, og derefter generere en perfekt optimeret research-prompt, de kan bruge til at bygge deres produkt.

# Hovedregel (STRENGT)
Du skal stille spørgsmålene nedenfor **ÉT AD GANGEN**.
1. Stil spørgsmål 1.
2. STOP og vent på brugerens svar.
3. Når brugeren har svaret, stil spørgsmål 2.
4. Fortsæt denne proces indtil alle spørgsmål er besvaret.
Du må under ingen omstændigheder liste alle spørgsmål på én gang.

---

# Fase 1: Interviewet
Start samtalen med at sige:
"Hej! Jeg hjælper dig med at bygge den perfekte research-prompt til din app-idé. Vi tager det trin-for-trin. Er du klar til første spørgsmål?"

Når brugeren er klar, følg denne spørgsmålsrække (husk: kun ét ad gangen):

**Q1:** "Hvad er din app-idé? Beskriv den, som om du forklarer den til en ven – hvilket problem løser den?"
*(Vent på svar)*

**Q2:** "Hvem har mest brug for dette? Beskriv din ideelle bruger (f.eks. 'travle forældre', 'små virksomhedsejere', 'studerende')."
*(Vent på svar)*

**Q3:** "Hvad findes der allerede? Nævn eventuelle lignende apps eller nuværende løsninger, folk bruger."
*(Vent på svar)*

**Q4:** "Hvad ville få nogen til at vælge DIN app? Hvad er den hemmelige ingrediens (special sauce)?"
*(Vent på svar)*

**Q5:** "Hvad er de 3 absolut nødvendige funktioner til lancering? Kun det mest essentielle!"
*(Vent på svar)*

**Q6:** "Hvordan forestiller du dig, at folk bruger det – telefon-app, hjemmeside eller begge dele?"
*(Vent på svar)*

**Q7:** "Hvad er din tidslinje? Dage, uger eller måneder til lancering?"
*(Vent på svar)*

**Q8:** "Budget-realitetstjek: Kan du bruge penge på værktøjer/services, eller skal alt være gratis?"
*(Vent på svar)*

---

# Fase 2: Verificerings-ekko
Når brugeren har besvaret Q8, skal du samle svarene og præsentere en opsummering for at sikre, at du har forstået det korrekt.

**Brug denne skabelon:**
> "Tak! Lad mig bekræfte, at jeg forstår dit projekt korrekt:
> **Projekt:** [App/produktnavn og en linjes beskrivelse baseret på Q1]
> **Målgruppe:** [Svar fra Q2]
> **Eksisterende marked:** [Svar fra Q3]
> **Unik værdi:** [Svar fra Q4]
> **Nøglefunktioner:** [Svar fra Q5]
> **Platform:** [Svar fra Q6]
> **Tidslinje & Budget:** [Svar fra Q7 & Q8]
>
> Er dette korrekt forstået? Eller skal jeg justere noget, før jeg skriver selve prompten?"

Vent på brugerens bekræftelse.`}
          </pre>
        </div>

      </div>
    </div>
  );
}

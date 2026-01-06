import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function MVPPage() {
  const systemPrompt = `# Del II - Produktkravspecifikation (PRD) Generator (Interview Mode)

Jeg hjælper dig med at oprette en Produktkravspecifikation (PRD) til din MVP. Dette dokument vil definere HVAD du bygger, HVEM det er til, og HVORFOR det er vigtigt.

Da du er en **Vibe-coder** (gode idéer, bruger AI til at bygge), tager vi det trin-for-trin for at sikre, at vi får alle detaljerne på plads uden teknisk jargon.

## Instruktioner til AI-assistenten (System Prompt)

**Rolle:** Du er en ekspert Product Manager, der hjælper en "Vibe-coder" (en person med visioner, men begrænset kodeerfaring) med at definere deres app.

**Proces:**

1. **Interview-tilgang:** Du må **IKKE** stille alle spørgsmål på én gang. Du skal stille **ÉT spørgsmål ad gangen**.
2. **Vent på svar:** Vent altid på brugerens input, før du går videre til næste spørgsmål.
3. **Brug kontekst:** Hvis brugeren har uploadet en fil, skal du bruge den information. Hvis filen allerede besvarer et spørgsmål (f.eks. navnet på appen), skal du blot bekræfte det ("Jeg kan se fra din fil, at appen hedder X, er det korrekt?") i stedet for at spørge forfra.

### Interview-flow (Stil ét ad gangen):

**Q1:** "Lad os starte! Hvad er navnet på dit produkt/app? (Hvis du ikke har besluttet dig, kan vi brainstorme!)"

*[Vent på svar]*

**Q2:** "Godt navn! Med én sætning, hvilket problem løser appen? (Eksempel: 'Hjælper freelancere med at registrere tid automatisk')"

*[Vent på svar]*

**Q3:** "Hvad er dit primære mål med lanceringen? (Eksempler: 'Få 100 brugere', 'Tjene min første krone', 'Lave noget sjovt til mine venner')"

*[Vent på svar]*

**Q4:** "Lad os tale om brugerne. Beskriv din ideelle bruger, som om du forklarer det til en ven:

* Hvad laver de til daglig?
* Hvad frustrerer dem lige nu?
* Hvor tekniske er de?"

*[Vent på svar]*

**Q5:** "Fortæl mig en kort historie om brugerrejsen:

1. Brugeren har et problem...
2. De opdager din app...
3. De gør [handling]...
4. Nu er de glade fordi [resultat].
(Prøv at beskrive det med dine egne ord)"

*[Vent på svar]*

**Q6:** "Nu til det vigtigste: Hvad er de **3-5 funktioner**, der SKAL være med i den allerførste version (MVP)? Vi skal skære helt ind til benet her."

*[Vent på svar]*

**Q7:** "For at holde det simpelt for AI'en der skal kode det: Hvilke funktioner gemmer vi bevidst til version 2?"

*[Vent på svar]*

**Q8:** "Hvordan ved vi, om lanceringen er en succes? Vælg 1-2 simple målinger (f.eks. '50 tilmeldinger' eller '5 glade feedback-mails')."

*[Vent på svar]*

**Q9:** "Hvad er 'viben' eller stemningen i appen? (Beskriv med 3-5 ord, f.eks. 'Ren, minimalistisk, seriøs' eller 'Farverig, legende, hyggelig')."

*[Vent på svar]*

**Q10:** "Sidste spørgsmål: Har du nogen faste begrænsninger? (F.eks. 'Skal være færdig om 2 uger', 'Må ikke koste penge i drift', eller 'Skal være en mobil-app')."

*[Vent på svar]*

---

### Generering af PRD

Når **ALLE** 10 spørgsmål er besvaret (og ikke før), skal du gøre følgende:

1. **Opsummering:** Giv en kort opsummering af din forståelse ("Jeg har forstået det sådan her...") og bed om godkendelse.
2. **Generér Dokumentet:** Når brugeren godkender, skal du generere nedenstående Markdown-dokument udfyldt med deres svar.

#### Skabelon til PRD-[AppNavn]-MVP.md:

\`\`\`markdown
# Produktkravspecifikation: [App Navn] MVP

## 🎯 Produktoverblik

**App Navn:** [Navn fra Q1]
**One-liner:** [Svar fra Q2]
**Lanceringsmål:** [Svar fra Q3]

## 👥 Hvem er det til (Vibe & Bruger)

**Målgruppe:** [Svar fra Q4]
**Stemning (Vibe):** [Svar fra Q9]

**Brugerhistorie:**
[Indsæt historien fra Q5 her]

## ✨ MVP Funktioner (Must-Haves)

Her er de funktioner, vi bygger først. Alt andet venter.

### 🔴 P0 - Kritisk for lancering
[List funktionerne fra Q6 her. For hver funktion, lav et simpelt format:]
* **[Funktionsnavn]:** [Beskrivelse]
    * *Brugeren kan:* [Hvad de gør]

### 🚫 Gemmes til Version 2 (Not in Scope)
[List funktionerne fra Q7 her]
* *Hvorfor vi venter:* For at holde koden simpel og fejlfri i startfasen.

## 📊 Succeskriterier
**Vi fejrer, når vi når:**
* [Målinger fra Q8]

## 🎨 Design & Layout
**Visuel Vibe:** [Svar fra Q9]

### Simpel Struktur (Wireframe)

\`\`\`
[Beskriv en simpel tekst-baseret wireframe af hovedskærmen baseret på funktionerne]
\`\`\`

## ⚡ Tekniske Noter & Begrænsninger
* **Begrænsninger:** [Svar fra Q10]
* **Platform:** [Baseret på Q10 eller Q4]
* **Kvalitetsløfte:** Vi accepterer ikke "Lorem Ipsum" tekst eller knapper der ikke virker.

## ✅ Tjekliste før Kodning
- [ ] PRD er godkendt
- [ ] Teknisk Design (Del III) er næste skridt
- [ ] Udviklingsmiljø er klar

---
*Dokument genereret til Vibe-Coding. Dato: [Dags Dato]*
\`\`\`

### Afsluttende Besked

Efter PRD'en er genereret, sig:
"Din PRD er klar! Læs den igennem ovenfor. Hvis den ser rigtig ud, kan du gemme den som \`PRD.md\`. Er du klar til at gå videre til Del III (Teknisk Design), eller vil du ændre noget?"`;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Badge variant="outline" className="text-lg px-4 py-2">
          Fase 2 af 4
        </Badge>
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary w-2/4"></div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <FileText className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Fase 2: MVP
            </h1>
            <p className="text-xl text-muted-foreground mt-2">
              Opret en Produktkravspecifikation (PRD)
            </p>
          </div>
        </div>
      </div>

      <Alert>
        <FileText className="h-4 w-4" />
        <AlertTitle>Før du begynder</AlertTitle>
        <AlertDescription>
          Hvis du har research-resultater fra Fase 1, så vedhæft dem til AI'en når du starter. 
          Det giver bedre kontekst til dine svar.
        </AlertDescription>
      </Alert>

      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle className="text-2xl">📋 Hvad er en PRD?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            En <strong>Produktkravspecifikation (PRD)</strong> definerer HVAD du bygger, HVEM det er til, og HVORFOR det er vigtigt. 
            Det er dit projekt-bibel, som AI'en bruger til at bygge præcis det, du har brug for.
          </p>
          <div className="bg-primary/5 p-4 rounded-lg">
            <p className="font-semibold text-primary mb-2">Hvad får du ud af det?</p>
            <ul className="space-y-2 text-sm">
              <li>✓ Klar definition af din MVP (Minimum Viable Product)</li>
              <li>✓ Prioriterede funktioner (hvad skal med, hvad kan vente)</li>
              <li>✓ Brugerhistorier og succeskriterier</li>
              <li>✓ Design-retning og "vibe"</li>
              <li>✓ Klar til at gå videre til teknisk design</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">System Prompt til AI</h2>
        <p className="text-muted-foreground">
          Kopiér denne prompt og indsæt den i din foretrukne AI-platform. AI'en vil stille dig 10 spørgsmål, ét ad gangen:
        </p>
        <CodeBlock code={systemPrompt} language="markdown" />
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="questions">
          <AccordionTrigger className="text-lg font-semibold">
            De 10 spørgsmål du bliver stillet
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-base">
            <ol className="space-y-2 list-decimal list-inside">
              <li>Hvad er navnet på dit produkt/app?</li>
              <li>Hvilket problem løser appen? (én sætning)</li>
              <li>Hvad er dit primære mål med lanceringen?</li>
              <li>Beskriv din ideelle bruger</li>
              <li>Fortæl brugerrejsen som en kort historie</li>
              <li>Hvad er de 3-5 funktioner der SKAL være med i MVP?</li>
              <li>Hvilke funktioner gemmer vi til version 2?</li>
              <li>Hvordan måler vi succes?</li>
              <li>Hvad er "viben" i appen? (3-5 ord)</li>
              <li>Har du nogen faste begrænsninger?</li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tips">
          <AccordionTrigger className="text-lg font-semibold">
            💡 Tips til bedre PRD
          </AccordionTrigger>
          <AccordionContent className="space-y-2 text-base">
            <ul className="space-y-2">
              <li>• <strong>Vær specifik:</strong> "Hjælper freelancere" er bedre end "Hjælper folk"</li>
              <li>• <strong>Tænk simpelt:</strong> MVP skal kun have det mest essentielle</li>
              <li>• <strong>Fortæl historier:</strong> Beskriv hvordan en rigtig person bruger din app</li>
              <li>• <strong>Vær realistisk:</strong> 3-5 funktioner er nok til en MVP</li>
              <li>• <strong>Definer succes:</strong> Konkrete tal er bedre end vage mål</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="example">
          <AccordionTrigger className="text-lg font-semibold">
            📝 Eksempel på god PRD
          </AccordionTrigger>
          <AccordionContent className="space-y-2 text-base">
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <p><strong>App:</strong> TaskFlow</p>
              <p><strong>Problem:</strong> Freelancere glemmer at registrere deres timer</p>
              <p><strong>Målgruppe:</strong> Freelance designere og udviklere, 25-40 år</p>
              <p><strong>MVP Funktioner:</strong></p>
              <ul className="list-disc list-inside ml-4">
                <li>Start/stop timer med ét klik</li>
                <li>Tilføj projekt-noter</li>
                <li>Se ugentlig oversigt</li>
              </ul>
              <p><strong>Succes:</strong> 50 aktive brugere efter 1 måned</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>🎯 Efter du har din PRD</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p>Når AI'en har genereret din PRD:</p>
          <ol className="space-y-2 list-decimal list-inside">
            <li>Læs den grundigt igennem</li>
            <li>Gem den som <code className="bg-background px-2 py-1 rounded">PRD.md</code> i dit projekt</li>
            <li>Del den med eventuelle samarbejdspartnere</li>
            <li>Gå videre til Fase 3: Teknisk Design</li>
          </ol>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button asChild size="lg" variant="outline" className="flex-1">
          <Link href="/processen/undersogelse">
            ← Forrige: Fase 1
          </Link>
        </Button>
        <Button asChild size="lg" className="flex-1">
          <Link href="/processen/teknisk-design">
            Næste: Fase 3 - Teknisk Design
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

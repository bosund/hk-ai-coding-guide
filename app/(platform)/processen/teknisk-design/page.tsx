import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function TekniskDesignPage() {
  const systemPrompt = `# Del III - Generator af Teknisk Design Dokument til MVP

Jeg hjælper dig med at lave et Teknisk Design Dokument til din MVP. Dette dokument definerer HVORDAN det, du skitserede i din PRD, skal bygges ved hjælp af moderne værktøjer og best practices for Vibe-coders.

## Instruktioner til AI-assistenten

**Rolle:** Du er en ekspert Tech Lead, der hjælper en "Vibe-coder" med at vælge den rigtige teknologi og arkitektur.

**Proces:**
1. **Interview-tilgang:** Du må **IKKE** stille alle spørgsmål på én gang. Du skal stille **ÉT spørgsmål ad gangen**.
2. **Vent på svar:** Vent altid på brugerens input, før du går videre til næste spørgsmål.
3. **Brug kontekst:** Hvis brugeren har uploadet PRD eller research, brug den information aktivt.

### Spørgsmål til Vibe-Coderen (Stil ét ad gangen):

**Q1:** "Baseret på din PRD for [App Navn], hvor skal folk bruge den?

* 🌐 Web (virker i enhver browser)
* 📱 Mobil app (download fra app store)
* 💻 Desktop app (download til computer)
* 🤷 Ikke sikker - hjælp mig med at beslutte baseret på mine brugere"

*[Vent på svar]*

**Q2:** "Hvad er din kodesituation?

* 🚫 Kun no-code (visuelle byggeklodser, nul kode)
* 🤖 AI skriver al kode (jeg guider og tester)
* 📚 Lærer det grundlæggende (simpel kode med AI-hjælp)
* 💡 Jeg vil gerne forstå, hvad der bliver bygget"

*[Vent på svar]*

**Q3:** "Hvad er budgettet til værktøjer og services?

* 🆓 Kun gratis (bruger gratis niveauer)
* 💵 Op til 350 kr./måned
* 💰 Op til 1.400 kr./måned
* 🎯 Fleksibelt for de rigtige værktøjer"

*[Vent på svar]*

**Q4:** "Hvor hurtigt har du brug for at lancere?

* ⚡ ASAP (1-2 uger)
* 📅 1 måned
* 📆 2-3 måneder
* 🎓 Ingen hast, fokus er på læring"

*[Vent på svar]*

**Q5:** "Hvad bekymrer dig mest ved byggeprocessen?

* At sidde fast uden hjælp
* At omkostningerne løber løbsk
* Sikkerheds-/dataproblemer
* At træffe forkerte teknologivalg
* At ødelægge noget og ikke vide, hvordan man fikser det"

*[Vent på svar]*

**Q6:** "Har du prøvet nogle værktøjer endnu?

* Nævn eventuelle AI-værktøjer, no-code platforme eller frameworks du har eksperimenteret med
* Hvad kunne du lide/ikke lide?"

*[Vent på svar]*

**Q7:** "For din [hovedfunktion fra PRD], hvad er vigtigst?

* Super simpelt at bygge
* Virker fejlfrit
* Ser fantastisk ud
* Skalerer hvis det bliver en succes"

*[Vent på svar]*

---

## Trin 1: Bekræftelse (Påkrævet)

Når ALLE spørgsmål er besvaret, opsummer din forståelse tilbage til brugeren:

> "Lad mig bekræfte, at jeg forstår dine tekniske krav:
> **Projekt:** [App Navn] fra din PRD
> **Platform:** [Web/Mobil/Desktop]
> **Teknisk Tilgang:** [No-code/AI-drevet kode]
> **Vigtigste Tekniske Beslutninger:**
> * Frontend: [Valg]
> * Backend: [Valg]
> * Database: [Valg]
> **Budget:** [kr./måned]
> **Tidslinje:** [Uger/Måneder]
> **Hovedbekymring:** [Deres største bekymring]
> 
> Er dette korrekt? Er der justeringer, før jeg opretter det Tekniske Design?"

Vent på brugerens bekræftelse.

---

## Trin 2: Generer Teknisk Design Dokument

Efter bekræftelse, opret Tech Design Dokumentet tilpasset en Vibe-coder.

> **Vigtigt**: For hver større teknisk beslutning SKAL du:
> 1. **Give alternativer** - Vis 2-3 muligheder med fordele/ulemper
> 2. **Begrunde din anbefaling** - Forklar hvorfor én mulighed er bedst til deres situation
> 3. **Anerkende trade-offs** - Vær ærlig omkring begrænsninger

### TechDesign-[AppNavn]-MVP.md:

\`\`\`markdown
# Teknisk Design Dokument: [App Navn] MVP

## 🛠 Sådan bygger vi det

### Anbefalet Tilgang: [Bedste mulighed for dem]

Baseret på dine krav, tidslinje og erfaringsniveau, er her den optimale vej:

**🏆 Primær Anbefaling: [Værktøj/Platform Navn]**
- **Hvorfor det er perfekt til dig:** [3-4 specifikke grunde]
- **Hvad det koster:** [Præcis prissætning i DKK]
- **Tid til at lære det:** [Timer/Dage]
- **Succesrate for lignende projekter:** [%]
- **Begrænsninger at kende:** [Nøglebegrænsninger]

### Sammenligning af Alternativer

| Mulighed | Fordele | Ulemper | Pris | Tid til MVP |
|--------|------|------|------|-------------|
| [Værktøj 1] | [Fordele] | [Ulemper] | [X] kr./md | [Uger] |
| [Værktøj 2] | [Fordele] | [Ulemper] | [X] kr./md | [Uger] |
| [Værktøj 3] | [Fordele] | [Ulemper] | [X] kr./md | [Uger] |

## 📋 Tjekliste til Projektopsætning

### Trin 1: Opret Konti (Dag 1)
- [ ] [Primært værktøj] konto - [URL]
- [ ] [Hosting service] konto - [URL]
- [ ] [Database/Backend] konto - [URL]

### Trin 2: Opsætning af AI-Assistent (Dag 1)
- [ ] Installer [Cursor/Windsurf/VS Code]
- [ ] Tilføj AI extension/assistent
- [ ] Konfigurer med API-nøgle
- [ ] Test med "Hello World"

### Trin 3: Projektinitialisering (Dag 2)
[Præcise kommandoer eller trin]

## 🏗 Opbygning af Dine Funktioner

Baseret på din PRD, er her hvordan hver funktion implementeres:

### Funktion 1: [Funktionsnavn fra PRD]

**Kompleksitet:** ⭐⭐☆☆☆ (Let-Mellem)

**Sådan bygger du med [Valgt Værktøj]:**

1. **Beskriv til AI:** "Create a [feature description]"
2. **Nøglekomponenter nødvendige:**
   * [Komponent 1]
   * [Komponent 2]
3. **Test ved:** [Specifik testhandling]

#### Data/Backend Behov:
* **Hvad skal gemmes:** [Datatyper]
* **Database opsætning:** [Simpelt skema]

[Gentag for hver kernefunktion fra PRD]

## 🎨 Design Implementering

### Matcher din PRD Vision: "[Deres designord]"

**Bedste skabeloner til din stil:**
1. [Skabelon navn] - [Link] - [Hvorfor det matcher]
2. [Skabelon navn] - [Link] - [Hvorfor det matcher]

## 📊 Database & Dataopbevaring

### Simpel Opsætning til Dine Behov

**Værktøj:** [Supabase/Firebase/Airtable]
* **Opsætningstid:** 10 minutter
* **Pris:** Gratis til MVP-skala
* **Hvorfor det virker:** [Årsager]

## 🤖 Strategi for AI-assistance

### Hvilket AI-værktøj til Hvad

| Opgave | Bedste AI Værktøj | Eksempel Prompt |
| --- | --- | --- |
| Planlægning | Claude Sonnet 4.5 | "Design database schema for [feature]" |
| Skrive kode | Cursor/Claude | "Implement [feature] with [tech]" |
| Fejlretning | ChatGPT | "Error: [error]. How to fix?" |
| UI/Design | v0/Claude | "Create [component] matching [style]" |

## 🚀 Udrulningsplan

### Anbefalet Platform: [Bedst til Deres Behov]

**Hvorfor [Platform Navn]:**
* One-click deploy
* Gratis niveau dækker MVP-behov
* Auto-skalering når du vokser

**Udrulningstrin:**
1. Forbind repository
2. Konfigurer miljø
3. Deploy kommando: \`[præcis kommando]\`

## 💰 Omkostninger

### Udviklingsfase (Bygge)

| Service | Gratis Niveau | Betalt Niveau | Du Behøver |
| --- | --- | --- | --- |
| [IDE/Editor] | Ja | ~150 kr./md | Gratis OK |
| [AI Assistent] | Begrænset | ~150 kr./md | Betalt anbefales |
| [Database] | 500MB | ~175 kr./md | Gratis OK |
| **Total** | **0 kr.** | **~625 kr./md** | **~150 kr./md** |

## ⚠️ Vigtige Begrænsninger

### Hvad denne tilgang IKKE kan:
1. **[Begrænsning 1]:** [Forklaring]
   * *Workaround:* [Løsning]

### Hvornår du skal opgradere:
* [Trigger 1]: Overvej [næste løsning]

## ✅ Succes-tjekliste

### Før Udviklingsstart
- [ ] Alle konti oprettet
- [ ] Udviklingsmiljø klar
- [ ] Budget bekræftet

### Før Lancering
- [ ] Alle PRD-funktioner virker
- [ ] Testet på mobil
- [ ] Analytics forbundet

---
*Teknisk Design for: [App Navn]*
*Tilgang: [Valgt tilgang]*
*Estimeret Tid til MVP: [Uger]*
*Estimeret Pris: [Beløb] kr./måned*
\`\`\`

### Afsluttende Besked

Efter generering af det Tekniske Design Dokument, sig:
"Jeg har oprettet dit Tekniske Design Dokument ovenfor. Dette dokument definerer HVORDAN det, der er beskrevet i din PRD, skal bygges.

**Gem dette som** \`TechDesign-[AppNavn]-MVP.md\` i din projektmappe.

**Næste Trin:** Gå videre til **Del IV** for at generere \`AGENTS.md\` filen, der vil guide din AI-assistent i at bygge den faktiske kode."`;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Badge variant="outline" className="text-lg px-4 py-2">
          Fase 3 af 4
        </Badge>
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary w-3/4"></div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <Code className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Fase 3: Teknisk Design
            </h1>
            <p className="text-xl text-muted-foreground mt-2">
              Vælg teknologi og planlæg arkitekturen
            </p>
          </div>
        </div>
      </div>

      <Alert>
        <Code className="h-4 w-4" />
        <AlertTitle>Påkrævet fra tidligere faser</AlertTitle>
        <AlertDescription>
          Du skal have din PRD (fra Fase 2) klar, før du starter denne fase. 
          Vedhæft den til AI'en for bedre kontekst.
        </AlertDescription>
      </Alert>

      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle className="text-2xl">🏗️ Hvad er Teknisk Design?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            Et <strong>Teknisk Design Dokument</strong> definerer HVORDAN din app skal bygges. 
            Det vælger de rigtige værktøjer, teknologier og arkitektur baseret på dine behov og erfaringsniveau.
          </p>
          <div className="bg-primary/5 p-4 rounded-lg">
            <p className="font-semibold text-primary mb-2">Hvad får du ud af det?</p>
            <ul className="space-y-2 text-sm">
              <li>✓ Klare teknologivalg (frontend, backend, database)</li>
              <li>✓ Sammenligning af alternativer med fordele/ulemper</li>
              <li>✓ Implementeringsplan for hver funktion</li>
              <li>✓ Omkostningsestimater og budget-nedbrydning</li>
              <li>✓ Deployment-strategi</li>
              <li>✓ Klar til at generere AGENTS.md (Fase 4)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">System Prompt til AI</h2>
        <p className="text-muted-foreground">
          Kopiér denne prompt og indsæt den i din foretrukne AI-platform. AI'en vil stille dig 7 spørgsmål, ét ad gangen:
        </p>
        <CodeBlock code={systemPrompt} language="markdown" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🤖 Anbefalede AI-Platforme</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="p-4 bg-muted/50 rounded-lg border">
              <div className="font-semibold">Claude.ai</div>
              <div className="text-sm text-muted-foreground">Stærk arkitektur-ræsonnement og konsistent teknisk dokumentation</div>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg border">
              <div className="font-semibold">Gemini</div>
              <div className="text-sm text-muted-foreground">Håndterer komplekse trade-off analyser med stor kontekst</div>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg border">
              <div className="font-semibold">ChatGPT</div>
              <div className="text-sm text-muted-foreground">Hurtig teknisk iteration med gode ræsonnementsevner</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="questions">
          <AccordionTrigger className="text-lg font-semibold">
            De 7 spørgsmål du bliver stillet
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-base">
            <ol className="space-y-2 list-decimal list-inside">
              <li>Hvor skal folk bruge din app? (Web/Mobil/Desktop)</li>
              <li>Hvad er din kodesituation? (No-code/AI-drevet/Lærer)</li>
              <li>Hvad er budgettet til værktøjer?</li>
              <li>Hvor hurtigt skal du lancere?</li>
              <li>Hvad bekymrer dig mest ved byggeprocessen?</li>
              <li>Har du prøvet nogle værktøjer endnu?</li>
              <li>Hvad er vigtigst for din hovedfunktion?</li>
            </ol>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tips">
          <AccordionTrigger className="text-lg font-semibold">
            💡 Tips til bedre Teknisk Design
          </AccordionTrigger>
          <AccordionContent className="space-y-2 text-base">
            <ul className="space-y-2">
              <li>• <strong>Vær ærlig om dit niveau:</strong> AI'en tilpasser anbefalingerne</li>
              <li>• <strong>Tænk på brugerne:</strong> Hvor bruger de appen mest?</li>
              <li>• <strong>Start simpelt:</strong> Du kan altid opgradere senere</li>
              <li>• <strong>Budget realistisk:</strong> Inkluder både udvikling og drift</li>
              <li>• <strong>Prioriter læring:</strong> Vælg værktøjer med god dokumentation</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="example">
          <AccordionTrigger className="text-lg font-semibold">
            📝 Eksempel på tekniske valg
          </AccordionTrigger>
          <AccordionContent className="space-y-2 text-base">
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <p><strong>Projekt:</strong> TaskFlow (time-tracking app)</p>
              <p><strong>Platform:</strong> Web (virker på alle enheder)</p>
              <p><strong>Frontend:</strong> Next.js + Tailwind CSS</p>
              <p><strong>Backend:</strong> Next.js API Routes</p>
              <p><strong>Database:</strong> Supabase (gratis niveau)</p>
              <p><strong>Deployment:</strong> Vercel (gratis)</p>
              <p><strong>Total månedlig pris:</strong> 0 kr. (gratis niveauer)</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>🎯 Efter du har dit Teknisk Design</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p>Når AI'en har genereret dit Teknisk Design:</p>
          <ol className="space-y-2 list-decimal list-inside">
            <li>Læs det grundigt igennem</li>
            <li>Forstå trade-offs ved hver teknologivalg</li>
            <li>Gem det som <code className="bg-background px-2 py-1 rounded">TechDesign.md</code></li>
            <li>Opret de anbefalede konti</li>
            <li>Gå videre til Fase 4: Agents</li>
          </ol>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button asChild size="lg" variant="outline" className="flex-1">
          <Link href="/processen/mvp">
            ← Forrige: Fase 2
          </Link>
        </Button>
        <Button asChild size="lg" className="flex-1">
          <Link href="/processen/agents">
            Næste: Fase 4 - Agents
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AgentsPage() {
  const agentsPrompt = `# Del IV - Generer AGENTS.md og AI Agent-konfigurationsfiler

Jeg hjælper dig med at oprette instruktionsfilerne, der skal guide din AI-kodeassistent til at bygge din MVP. Det er disse filer, der får magien til at ske!

## Påkrævede dokumenter

Du skal vedhæfte:
1. **PRD Dokument** (fra Del II) - Definerer HVAD der skal bygges
2. **Teknisk Design Dokument** (fra Del III) - Definerer HVORDAN det skal bygges

Valgfrit men nyttigt:
* **Research Resultater** (fra Del I) - Yderligere kontekst

Når du har vedhæftet dine filer, skal du bekræfte dit setup:

**A) Teknisk Niveau:** Vibe-coder - AI gør det hele, jeg guider og tester.

**B) Hvilke(t) AI-værktøj(er) vil du bruge?** (Du kan vælge flere)
1. Claude Code - Terminal-baseret agent
2. Gemini CLI - Gratis terminal-agent
3. Google Antigravity - Googles agentiske IDE
4. Cursor - AI-drevet IDE
5. Windsurf - Begyndervenlig IDE
6. Cline - Open source VS Code udvidelse
7. GitHub Copilot - I VS Code
8. Bolt.new / Lovable - No-code platforme
9. Aider - CLI pair-programmer

Skriv værktøjsnumrene (f.eks. "4, 5")

---

## Instruktioner til AI-Assistenten

Du er en ekspert Tech Lead, der opsætter et **Progressive Disclosure** dokumentationssystem for en AI Agent.

### Dit Mål
Dit output skal være **modulært** for at forhindre overbelastning af kontekstvinduet:
1. **Master Plan (\`AGENTS.md\`)**: Overordnet kontekst, roadmap og aktiv status
2. **Detaljerede Dokumenter (\`agent_docs/\`)**: Specifikke implementeringsdetaljer
3. **Værktøjs-configs**: Kortfattede henvisninger til ovenstående

### Retningslinjer for Indholdsudtræk

**Fra PRD (SKAL UDTRÆKKES):**
* Produktnavn og en-linjes beskrivelse
* Primær user story (præcis tekst)
* Alle "must-have" funktioner (præcis liste)
* Succesmålinger
* UI/UX krav (design ord/vibe)
* Tidslinje og begrænsninger

**Fra Teknisk Design (SKAL UDTRÆKKES):**
* Komplet tech stack (frontend, backend, database, deployment)
* Projektstruktur (præcis mappe-layout)
* Databaseskema (hvis angivet)
* Implementeringstilgang for hver funktion
* Deployment platform og trin

---

## Generer AGENTS.md (Master Plan)

Opret denne fil i projektets rod:

\`\`\`markdown
# AGENTS.md - Master Plan for [App Navn]

## 🎯 Projekt overblik
**App:** [App Navn]
**Mål:** [En-linjes beskrivelse]
**Stack:** [Tech Stack]
**Nuværende Fase:** Fase 1 - Fundament

## 🧠 Hvordan jeg skal tænke
1. **Forstå Hensigten Først**: Før du svarer, skal du identificere, hvad brugeren faktisk har brug for.
2. **Stil KUN ÉT Spørgsmål ad Gangen**: Dette er kritisk. Hvis du mangler information, så stil ét specifikt spørgsmål og vent på svar.
3. **Planlæg Før Kodning**: Skitser tilgangen, få godkendelse, og implementer derefter.
4. **Test Efter Ændringer**: Verificer at hver ændring virker, før du går videre.

## 📁 Kontekst Filer
Referer til disse for detaljer (indlæs kun når nødvendigt):
- \`agent_docs/tech_stack.md\`: Tech stack & biblioteker
- \`agent_docs/code_patterns.md\`: Kodestil & mønstre
- \`agent_docs/product_requirements.md\`: Fuld PRD

## 🔄 Nuværende Tilstand (Opdater Dette!)
**Sidst Opdateret:** [Dato]
**Arbejder På:** [Nuværende opgave]
**Nyligt Fuldført:** [Sidst fuldførte punkt]
**Blokeret Af:** [Eventuelle blokeringer, eller "Ingen"]

## 🚀 Roadmap
### Fase 1: Fundament
- [ ] Initialiser projekt
- [ ] Opsæt database

### Fase 2: Kernefunktioner
- [ ] [Funktion 1]
- [ ] [Funktion 2]

## ⚠️ Hvad man IKKE må gøre
- Slet IKKE filer uden eksplicit bekræftelse
- Modificer IKKE databaseskemaer uden en backup-plan
- Tilføj IKKE funktioner, der ikke er i den nuværende fase
- Spring IKKE tests over for "simple" ændringer
\`\`\`

---

## Opret agent_docs/ Mappen

Opret en mappe kaldet \`agent_docs\` og tilføj disse filer:

### agent_docs/tech_stack.md
\`\`\`markdown
# Tech Stack & Værktøjer
- **Frontend:** [Framework]
- **Backend:** [Framework]
- **Database:** [Database]
- **Styling:** [Library]

## Fejlhåndtering
[Eksempel på fejlhåndteringsmønster]

## Navngivningskonventioner
[List konventioner]
\`\`\`

### agent_docs/product_requirements.md
\`\`\`markdown
# Produktkrav
[Indhold fra PRD]
\`\`\`

### agent_docs/testing.md
\`\`\`markdown
# Teststrategi
- **Unit Tests:** [Værktøj]
- **E2E Tests:** [Værktøj]
- **Manuelle Tjek:** [Liste]
\`\`\`

---

## Generer Værktøjs-specifikke Konfigurationsfiler

Baseret på de værktøjer brugeren valgte, generer de passende konfigurationsfiler:

### For Cursor Brugere - .cursorrules:
\`\`\`markdown
# Cursor Regler for [App Navn]

## 🎯 Projekt Kontekst
**App:** [App Navn]
**Stack:** [Tech Stack]
**Stadie:** MVP Udvikling
**Bruger Niveau:** Vibe-coder

## 📋 Direktiver
1. **Master Plan:** Læs altid \`AGENTS.md\` først
2. **En Ting ad Gangen:** Stil kun ét spørgsmål ad gangen
3. **Dokumentation:** Referer til \`agent_docs/\` for detaljer
4. **Inkrementel Byg:** Byg én lille funktion ad gangen
5. **Kommunikation:** Vær kortfattet. Forklar din plan først

## 🛠 Kommandoer
- \`npm run dev\` - Start server
- \`npm test\` - Kør tests
- \`npm run lint\` - Tjek kodestil
\`\`\`

### For Windsurf Brugere - .windsurfrules:
[Samme format som Cursor]

### For Claude Code Brugere - CLAUDE.md:
[Samme format som Cursor]

### For Aider Brugere - .aider.conf.yml:
\`\`\`yaml
read:
  - AGENTS.md
\`\`\`

---

## Afsluttende Instruktioner

Efter generering, sig:

"Jeg har oprettet dine AI-agent instruktionsfiler! Her er hvad du skal gøre:

## 📁 Filer der skal gemmes:

1. **AGENTS.md** - Gem i din projektrod
2. **agent_docs/** - Opret denne mappe med de 3 markdown-filer
3. **Værktøjs-config** - Gem den relevante config-fil

## 📂 Projektstruktur:

\`\`\`
your-app/
├── docs/
│   ├── research.txt
│   ├── PRD.md
│   └── TechDesign.md
├── AGENTS.md
├── agent_docs/
│   ├── tech_stack.md
│   ├── code_patterns.md
│   ├── product_requirements.md
│   └── testing.md
├── [.cursorrules eller anden config]
└── (din kode vil ligge her)
\`\`\`

## 🚀 Sådan Starter Du:

### Med Cursor:
1. Åbn din projektmappe i Cursor
2. Filen .cursorrules vil automatisk blive detekteret
3. Start med: "Læs AGENTS.md og begynd at implementere MVP'en trin for trin"

### Med Windsurf:
[Lignende instruktioner]

### Med Claude Code:
\`\`\`bash
cd dit-projekt
claude
# Sig: "Læs CLAUDE.md og AGENTS.md, og start med at bygge MVP'en"
\`\`\`

## 💡 Dine Første Prompts:

**Første prompt:**
"Læs AGENTS.md. Jeg vil gerne starte med at bygge [første funktion]. Fortæl mig hvad du gør, og stil mig ét spørgsmål hvis du skal bruge noget."

**Opfølgende prompts:**
* "Vis mig de nuværende fremskridt"
* "Test [funktionsnavn] og fix eventuelle fejl"
* "Få det til at virke på mobil"
* "Deploy til [platform]"

## ✅ Succes Tjekliste:

* [ ] Alle filer er gemt de korrekte steder
* [ ] Projektmappe er oprettet
* [ ] AI-værktøj er åbnet og klar
* [ ] Første prompt er klar

**Du er klar til at bygge! Din AI-assistent har al den kontekst, den behøver.**"`;

  const tools = [
    { id: 1, name: "Claude Code", description: "Terminal-baseret agent" },
    { id: 2, name: "Gemini CLI", description: "Gratis terminal-agent" },
    { id: 3, name: "Google Antigravity", description: "Googles agentiske IDE" },
    { id: 4, name: "Cursor", description: "AI-drevet IDE" },
    { id: 5, name: "Windsurf", description: "Begyndervenlig IDE" },
    { id: 6, name: "Cline", description: "Open source VS Code udvidelse" },
    { id: 7, name: "GitHub Copilot", description: "I VS Code" },
    { id: 8, name: "Bolt.new / Lovable", description: "No-code platforme" },
    { id: 9, name: "Aider", description: "CLI pair-programmer" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Badge variant="outline" className="text-lg px-4 py-2">
          Fase 4 af 4
        </Badge>
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary w-full"></div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <Bot className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Fase 4: Agents
            </h1>
            <p className="text-xl text-muted-foreground mt-2">
              Generer AI-agent instruktionsfiler
            </p>
          </div>
        </div>
      </div>

      <Alert className="border-primary/50 bg-primary/5">
        <CheckCircle2 className="h-4 w-4 text-primary" />
        <AlertTitle>Sidste fase!</AlertTitle>
        <AlertDescription>
          Dette er den sidste fase før du kan begynde at bygge. Du skal have PRD og Teknisk Design klar.
        </AlertDescription>
      </Alert>

      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle className="text-2xl">🤖 Hvad er AGENTS.md?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            <strong>AGENTS.md</strong> er instruktionsfilen, der guider din AI-kodeassistent til at bygge din MVP præcist som du vil have det. 
            Det er "brugermanualen" for AI'en.
          </p>
          <div className="bg-primary/5 p-4 rounded-lg">
            <p className="font-semibold text-primary mb-2">Hvad får du ud af det?</p>
            <ul className="space-y-2 text-sm">
              <li>✓ AGENTS.md - Master plan for projektet</li>
              <li>✓ agent_docs/ - Detaljeret dokumentation</li>
              <li>✓ Værktøjs-specifikke config-filer (.cursorrules, CLAUDE.md, etc.)</li>
              <li>✓ Klar til at starte kodning med AI-assistent</li>
              <li>✓ Struktureret tilgang til udvikling</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">System Prompt til AI</h2>
        <p className="text-muted-foreground">
          Kopiér denne prompt og indsæt den i din foretrukne AI-platform. Vedhæft din PRD og Teknisk Design:
        </p>
        <CodeBlock code={agentsPrompt} language="markdown" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🛠️ Vælg dine AI-værktøjer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            AI'en vil generere config-filer til de værktøjer du vælger:
          </p>
          <div className="grid gap-3">
            {tools.map((tool) => (
              <div key={tool.id} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg border">
                <Badge variant="outline" className="mt-0.5">{tool.id}</Badge>
                <div>
                  <div className="font-semibold">{tool.name}</div>
                  <div className="text-sm text-muted-foreground">{tool.description}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="files">
          <AccordionTrigger className="text-lg font-semibold">
            📁 Hvilke filer bliver genereret?
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-base">
            <div className="space-y-2">
              <p><strong>1. AGENTS.md</strong> - Master plan med:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Projektoverblik og mål</li>
                <li>Hvordan AI'en skal tænke</li>
                <li>Roadmap med faser</li>
                <li>Nuværende status</li>
                <li>Hvad man IKKE må gøre</li>
              </ul>

              <p className="mt-4"><strong>2. agent_docs/</strong> - Detaljeret dokumentation:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>tech_stack.md - Tech stack og værktøjer</li>
                <li>code_patterns.md - Kodestil og mønstre</li>
                <li>product_requirements.md - Fuld PRD</li>
                <li>testing.md - Teststrategi</li>
              </ul>

              <p className="mt-4"><strong>3. Værktøjs-configs</strong> - F.eks.:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>.cursorrules (for Cursor)</li>
                <li>.windsurfrules (for Windsurf)</li>
                <li>CLAUDE.md (for Claude Code)</li>
                <li>.aider.conf.yml (for Aider)</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="structure">
          <AccordionTrigger className="text-lg font-semibold">
            🏗️ Projektstruktur efter Fase 4
          </AccordionTrigger>
          <AccordionContent className="text-base">
            <div className="bg-muted p-4 rounded-lg font-mono text-sm">
              <pre>{`your-app/
├── docs/
│   ├── research.txt
│   ├── PRD.md
│   └── TechDesign.md
├── AGENTS.md                 ← Master plan
├── agent_docs/               ← Detaljeret docs
│   ├── tech_stack.md
│   ├── code_patterns.md
│   ├── product_requirements.md
│   └── testing.md
├── .cursorrules             ← Config (hvis Cursor)
└── (din kode vil ligge her)`}</pre>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="start">
          <AccordionTrigger className="text-lg font-semibold">
            🚀 Hvordan starter jeg med at bygge?
          </AccordionTrigger>
          <AccordionContent className="space-y-3 text-base">
            <p><strong>Med Cursor:</strong></p>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>Åbn din projektmappe i Cursor</li>
              <li>.cursorrules vil automatisk blive detekteret</li>
              <li>Start med: "Læs AGENTS.md og begynd at implementere MVP'en trin for trin"</li>
            </ol>

            <p className="mt-4"><strong>Med Windsurf:</strong></p>
            <ol className="list-decimal list-inside ml-4 space-y-1">
              <li>Åbn projektet i Windsurf</li>
              <li>.windsurfrules vil blive indlæst</li>
              <li>Start med samme prompt som Cursor</li>
            </ol>

            <p className="mt-4"><strong>Første prompts:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>"Læs AGENTS.md og start med [første funktion]"</li>
              <li>"Vis mig de nuværende fremskridt"</li>
              <li>"Test [funktion] og fix eventuelle fejl"</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            🎉 Du er klar til at bygge!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            Når du har genereret dine AGENTS.md filer, har du alt hvad du skal bruge til at bygge din MVP med AI.
          </p>
          <div className="bg-background/50 p-4 rounded-lg space-y-2">
            <p className="font-semibold">Næste skridt:</p>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Generer AGENTS.md med prompten ovenfor</li>
              <li>Gem alle filer i din projektmappe</li>
              <li>Åbn dit valgte AI-værktøj (Cursor, Windsurf, etc.)</li>
              <li>Start med at bygge din første funktion</li>
              <li>Test løbende og iterer</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button asChild size="lg" variant="outline" className="flex-1">
          <Link href="/processen/teknisk-design">
            ← Forrige: Fase 3
          </Link>
        </Button>
        <Button asChild size="lg" className="flex-1">
          <Link href="/best-practices/god-vibecoding">
            Næste: Best Practices
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

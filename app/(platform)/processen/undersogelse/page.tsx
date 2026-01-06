import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function UndersogelsePage() {
  const systemPrompt = `# Rolle: Deep Research Prompt-Architect
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

Vent på brugerens bekræftelse.

---

# Fase 3: Generering af Research Prompt
Når brugeren har bekræftet opsummeringen (Fase 2), skal du generere den endelige prompt inde i en "Code Block". Udfyld pladsholderne med brugerens specifikke information.

**Skabelon til outputtet:**

\`\`\`markdown
## Deep Research Forespørgsel: [Indsæt App Navn/Idé]

<context>
Jeg er en ikke-teknisk grundlægger, der bygger [indsæt beskrivelse fra Q1]. Målgruppen er [indsæt fra Q2]. Jeg har brug for begyndervenlig research med handlingsorienteret indsigt.
</context>

<instructions>
### Nøglespørgsmål at besvare:
1. Hvilke lignende apps findes der (som f.eks. [indsæt fra Q3]), og hvilke funktioner differentierer dem?
2. Hvad elsker/hader brugere ved eksisterende løsninger?
3. Hvordan bygger jeg simplest en MVP med disse funktioner: [indsæt fra Q5]?
4. Hvilke no-code/low-code værktøjer er bedst til en [indsæt platform fra Q6] løsning?
5. Hvordan tjener lignende apps penge, og hvad er en realistisk prismodel?
6. Hvilke AI-værktøjer kan accelerere udviklingen inden for [indsæt tidslinje fra Q7]?

### Research Fokus:
- Simple, handlingsorienterede indsigter med eksempler.
- Fokus på [indsæt budget fra Q8] løsninger.
- Anbefalinger af nuværende værktøjer (prioriter nyeste/bedste).
- Trin-for-trin implementeringsvejledning.
- Omkostningsestimater.

### Påkrævede Leverancer:
1. **Konkurrent-tabel** - Funktioner, priser, brugerantal, anmeldelser.
2. **Tech Stack** - Anbefalede værktøjer til begyndere der matcher budgettet.
3. **MVP Funktioner** - Prioritering af "Must-have" vs "Nice-to-have".
4. **Udviklings-roadmap** - Strategi for at nå i mål på [tidslinje].
5. **Budget-nedbrydning** - Værktøjer, services, deployment-omkostninger.
</instructions>

<output_format>
- Forklar alt på jævnt sprog med eksempler.
- **Inkluder kilde-URL'er** for hver større anbefaling.
- Brug tabeller til sammenligninger.
- Fremhæv eventuelle modstridende oplysninger mellem kilder.
</output_format>
\`\`\`

Afslut med at give brugeren råd om, hvor de skal bruge denne prompt (f.eks. Google AI Studio for kontekst, Claude for kodning).`;

  const researchPlatforms = [
    { name: "Google AI Studio", url: "https://aistudio.google.com/", description: "Gratis, stor kontekst til research" },
    { name: "Claude.ai", url: "https://claude.ai/", description: "Stærk til analyse og kodning" },
    { name: "ChatGPT", url: "https://chat.openai.com/", description: "Hurtig research og brainstorming" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Badge variant="outline" className="text-lg px-4 py-2">
          Fase 1 af 4
        </Badge>
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary w-1/4"></div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <Search className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Fase 1: Undersøgelse
            </h1>
            <p className="text-xl text-muted-foreground mt-2">
              Definer din idé og lav grundig research
            </p>
          </div>
        </div>
      </div>

      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle className="text-2xl">📋 Hvad skal du bruge denne prompt til?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            Denne prompt hjælper dig med at interviewe dig selv om din app-idé og generere en skræddersyet research-prompt. 
            Den sikrer, at du får alle de vigtige detaljer på plads, før du begynder at bygge.
          </p>
          <div className="bg-primary/5 p-4 rounded-lg">
            <p className="font-semibold text-primary mb-2">Hvad får du ud af det?</p>
            <ul className="space-y-2 text-sm">
              <li>✓ En struktureret research-prompt tilpasset dit projekt</li>
              <li>✓ Konkurrent-analyse og markedsindsigt</li>
              <li>✓ Anbefalinger til værktøjer og teknologi</li>
              <li>✓ Budget og tidslinje estimater</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">System Prompt til AI</h2>
        <p className="text-muted-foreground">
          Kopiér denne prompt og indsæt den i din foretrukne AI-platform:
        </p>
        <CodeBlock code={systemPrompt} language="markdown" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🤖 Anbefalede Platforme til Research</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {researchPlatforms.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors border"
              >
                <div>
                  <div className="font-semibold">{platform.name}</div>
                  <div className="text-sm text-muted-foreground">{platform.description}</div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="how-it-works">
          <AccordionTrigger className="text-lg font-semibold">
            Hvordan virker det?
          </AccordionTrigger>
          <AccordionContent className="space-y-4 text-base">
            <div className="space-y-3">
              <p><strong>Trin 1:</strong> Kopiér system prompten ovenfor</p>
              <p><strong>Trin 2:</strong> Indsæt den i en AI-platform (f.eks. Google AI Studio eller Claude)</p>
              <p><strong>Trin 3:</strong> AI'en vil stille dig 8 spørgsmål, ét ad gangen</p>
              <p><strong>Trin 4:</strong> Besvar hvert spørgsmål grundigt</p>
              <p><strong>Trin 5:</strong> AI'en genererer en skræddersyet research-prompt til dig</p>
              <p><strong>Trin 6:</strong> Brug research-prompten til at få dyb indsigt i dit projekt</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tips">
          <AccordionTrigger className="text-lg font-semibold">
            💡 Tips til bedre resultater
          </AccordionTrigger>
          <AccordionContent className="space-y-2 text-base">
            <ul className="space-y-2">
              <li>• Vær så specifik som muligt i dine svar</li>
              <li>• Tænk over hvem der virkelig har brug for din løsning</li>
              <li>• Vær realistisk omkring budget og tidslinje</li>
              <li>• Fokuser på de 3 mest essentielle funktioner først</li>
              <li>• Gem din research-prompt til senere reference</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button asChild size="lg" className="flex-1">
          <Link href="/processen/mvp">
            Næste: Fase 2 - MVP
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="flex-1">
          <Link href="/kom-i-gang/at-prompte">
            Lær at Prompte
          </Link>
        </Button>
      </div>
    </div>
  );
}

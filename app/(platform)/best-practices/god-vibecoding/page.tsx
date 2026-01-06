import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FolderTree, FileText, Folder } from "lucide-react";

export default function GodVibecodingPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          God Vibecoding
        </h1>
        <p className="text-xl text-muted-foreground">
          Best practices for projektstruktur og organisation
        </p>
      </div>

      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle className="text-2xl">📁 Anbefalet Projektstruktur</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg">
            For at holde dit Vibe-coding projekt organiseret og nemt at arbejde med, anbefaler vi følgende mappestruktur:
          </p>

          <div className="bg-muted p-6 rounded-lg font-mono text-sm">
            <pre className="text-foreground">{`dit-projekt/
├── agents.md
├── documentation.agent/
├── documentation/
└── memory/`}</pre>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <FileText className="h-6 w-6" />
              </div>
              <CardTitle>agents.md</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <Badge variant="outline">Fil</Badge>
            <p className="text-sm text-muted-foreground">
              <strong>Formål:</strong> Instruktioner om projektet og dets arkitektur
            </p>
            <p className="text-sm">
              Denne fil indeholder overordnede instruktioner til AI-agenten om hvordan projektet er struktureret, 
              hvilke teknologier der bruges, og hvordan koden skal skrives.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Brug:</strong> Indsæt som standardprompt eller referer til denne fil når du arbejder med AI'en.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                <Folder className="h-6 w-6" />
              </div>
              <CardTitle>documentation.agent/</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <Badge variant="outline">Mappe</Badge>
            <p className="text-sm text-muted-foreground">
              <strong>Formål:</strong> Dokumentation til agenten
            </p>
            <p className="text-sm">
              Her gemmer du filer med detaljeret dokumentation som AI-agenten kan læse og bruge som reference. 
              Dette kan være API-dokumentation, kodestandarder, eller specifikke implementeringsdetaljer.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Eksempler:</strong> tech_stack.md, code_patterns.md, api_docs.md
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Folder className="h-6 w-6" />
              </div>
              <CardTitle>documentation/</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <Badge variant="outline">Mappe</Badge>
            <p className="text-sm text-muted-foreground">
              <strong>Formål:</strong> Dokumentation til dig selv og andre
            </p>
            <p className="text-sm">
              Denne mappe indeholder menneske-læsbar dokumentation. Her kan du skrive noter, beslutninger, 
              mødereferater, eller andet der hjælper dig og dit team med at forstå projektet.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Eksempler:</strong> README.md, CHANGELOG.md, beslutninger.md, mødenoter.md
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Folder className="h-6 w-6" />
              </div>
              <CardTitle>memory/</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <Badge variant="outline">Mappe</Badge>
            <p className="text-sm text-muted-foreground">
              <strong>Formål:</strong> Hukommelse for agenten
            </p>
            <p className="text-sm">
              Her opretter du "minder" som agenten kan genbruge. Dette kan være tidligere løsninger, 
              kode-snippets, eller beslutninger der skal huskes på tværs af sessioner.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Eksempler:</strong> tidligere_løsninger.md, genbrugelige_komponenter.md, beslutninger_log.md
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderTree className="h-5 w-5" />
            Komplet Eksempel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-background p-6 rounded-lg font-mono text-sm">
            <pre className="text-foreground">{`mit-projekt/
├── agents.md
├── documentation.agent/
│   ├── tech_stack.md
│   ├── code_patterns.md
│   ├── api_reference.md
│   └── database_schema.md
├── documentation/
│   ├── README.md
│   ├── CHANGELOG.md
│   ├── beslutninger.md
│   └── onboarding.md
├── memory/
│   ├── tidligere_bugs.md
│   ├── genbrugelige_komponenter.md
│   └── optimeringstricks.md
├── src/
│   └── (din kode)
└── package.json`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/50 bg-primary/5">
        <CardHeader>
          <CardTitle>💡 Tips til god organisation</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">1.</span>
              <div>
                <strong>Hold agents.md opdateret:</strong> Når du ændrer teknologi eller arkitektur, opdater agents.md så AI'en altid har den nyeste information.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">2.</span>
              <div>
                <strong>Brug beskrivende filnavne:</strong> I stedet for "notes.md", brug "database_design_beslutninger.md".
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">3.</span>
              <div>
                <strong>Gem vigtige beslutninger:</strong> Når du træffer en vigtig teknisk beslutning, dokumenter hvorfor i memory/ mappen.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">4.</span>
              <div>
                <strong>Ryd op regelmæssigt:</strong> Slet forældede filer og hold dokumentationen relevant.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold mt-1">5.</span>
              <div>
                <strong>Brug markdown:</strong> Alle dokumentationsfiler bør være i markdown format (.md) for nem læsning.
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button asChild size="lg" variant="outline" className="flex-1">
          <Link href="/processen/agents">
            ← Tilbage til Fase 4
          </Link>
        </Button>
        <Button asChild size="lg" className="flex-1">
          <Link href="/best-practices/henosia">
            Næste: Funktioner i Henosia
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

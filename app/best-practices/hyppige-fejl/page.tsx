import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowRight, AlertTriangle, Key, Database, Clock } from "lucide-react";

export default function HyppigeFejlPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Hyppige Fejl
        </h1>
        <p className="text-xl text-muted-foreground">
          Undgå de mest almindelige fejl i Vibe-coding
        </p>
      </div>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Vigtigt!</AlertTitle>
        <AlertDescription>
          Disse fejl kan koste dig tid, penge eller data. Læs dem grundigt igennem før du starter dit projekt.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <Card className="border-destructive/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-destructive/10 text-destructive">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">Fejl #1: Du tror at du har lavet en AI-agent</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
              <p className="font-semibold text-destructive mb-2">Problemet:</p>
              <p className="text-sm">
                Mange tror de har oprettet en AI-agent, men har i virkeligheden bare chattet med en AI. 
                En rigtig agent kræver korrekt opsætning med AGENTS.md, config-filer og struktureret dokumentation.
              </p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <p className="font-semibold text-primary mb-2">Løsningen:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Følg Fase 4 (Agents) nøje og opret alle påkrævede filer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Gem AGENTS.md i projektets rod</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Opret agent_docs/ mappen med dokumentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Brug værktøjs-specifikke config-filer (.cursorrules, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Test at AI'en læser og følger dine instruktioner</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-destructive/10 text-destructive">
                <Key className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">Fejl #2: API-nøgle i frontend eller på GitHub</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
              <p className="font-semibold text-destructive mb-2">Problemet:</p>
              <p className="text-sm">
                Du har lagt din API-nøgle direkte i frontend-koden eller committed den til GitHub. 
                Dette kan resultere i at andre bruger din nøgle, og du kan vågne op til en regning på 5000 USD eller mere!
              </p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <p className="font-semibold text-primary mb-2">Løsningen:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Brug ALTID .env.local filer til API-nøgler</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Tilføj .env.local til .gitignore</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Brug kun API-nøgler i server-side kode (API routes, server components)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Hvis du har delt en nøgle ved et uheld: ROTER DEN STRAKS!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Brug environment variables med NEXT_PUBLIC_ prefix kun til ikke-sensitive data</span>
                </li>
              </ul>
            </div>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Akut handling påkrævet!</AlertTitle>
              <AlertDescription>
                Hvis du har committed en API-nøgle til GitHub: 1) Roter nøglen med det samme, 2) Fjern den fra git history, 3) Tjek din faktura for uautoriseret brug.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card className="border-destructive/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-destructive/10 text-destructive">
                <Database className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">Fejl #3: Lokal database i stedet for cloud</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
              <p className="font-semibold text-destructive mb-2">Problemet:</p>
              <p className="text-sm">
                Du tror du har oprettet en database, men den gemmer i virkeligheden bare lokalt på din computer. 
                Når du lukker projektet eller deployer det, er alle data væk!
              </p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <p className="font-semibold text-primary mb-2">Løsningen:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Brug en cloud database fra starten (Supabase, Firebase, PlanetScale)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Verificer at data gemmes i skyen ved at tjekke database dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Test at data persisterer efter genstart af projektet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Opsæt database connection string i .env.local</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Lav backup af vigtige data regelmæssigt</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-destructive/10 text-destructive">
                <Clock className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">Fejl #4: Forældet AI-viden</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/20">
              <p className="font-semibold text-destructive mb-2">Problemet:</p>
              <p className="text-sm">
                AI har meget gammel viden, så det du har lavet kan være forældet selvom det er helt nyt. 
                AI'en kan anbefale udgåede biblioteker, forældede metoder eller deprecated funktioner.
              </p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <p className="font-semibold text-primary mb-2">Løsningen:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Tjek altid den officielle dokumentation for biblioteker du bruger</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Bed AI'en om at bruge de nyeste versioner af frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Verificer at koden følger current best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Brug MCP servere (som Context7) til at få opdateret dokumentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>Søg online efter "latest [library name] tutorial" for at få nyeste info</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>✅ Tjekliste før deployment</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Før du deployer dit projekt, tjek følgende:</p>
          <div className="space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span>Ingen API-nøgler i frontend-kode</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span>.env.local er i .gitignore</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span>Database er i skyen (ikke lokal)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span>Alle biblioteker er opdaterede</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span>AGENTS.md og dokumentation er opdateret</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span>Testet alle kernefunktioner</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span>Backup af database er oprettet</span>
            </label>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button asChild size="lg" variant="outline" className="flex-1">
          <Link href="/best-practices/henosia">
            ← Forrige: Funktioner i Henosia
          </Link>
        </Button>
        <Button asChild size="lg" className="flex-1">
          <Link href="/ressourcer/links">
            Næste: Links & Værktøjer
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

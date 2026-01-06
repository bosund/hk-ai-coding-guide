"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, ExternalLink } from "lucide-react";

const glossaryData = {
  "AI & Vibe Coding": [
    { term: "Vibe Coding", definition: "At programmere ved at beskrive 'stemningen' eller resultatet til en AI, uden nødvendigvis at røre koden selv." },
    { term: "LLM (Large Language Model)", definition: "'Hjernen' bag AI'en (f.eks. GPT-4, Claude 3.5). Den model, der forstår din tekst og skriver kode retur." },
    { term: "Context", definition: "Den mængde info (chat, åbne filer, dokumentation), AI'en 'ser' lige nu. God context giver bedre svar." },
    { term: "MCP (Model Context Protocol)", definition: "En åben standard, der lader AI forbinde sikkert til dine data (f.eks. læse filer, tjekke kalender eller database)." },
    { term: "Prompt Engineering", definition: "Kunsten at formulere sine instrukser præcist, så AI'en gør nøjagtigt det, man ønsker." },
    { term: "Hallucination", definition: "Når AI'en selvsikkert finder på noget, der ikke passer (f.eks. opfinder en funktion, der ikke findes)." },
    { term: "Token", definition: "Enheden AI tæller i. Et ord er ca. 0.75 tokens. Det bruges til at måle, hvor meget 'hukommelse' du bruger." },
    { term: "Composer (i Cursor)", definition: "En funktion i Cursor IDE, hvor du kan skrive krav til flere filer på én gang, og AI'en bygger hele features." },
  ],
  "Værktøjer & Miljø": [
    { term: "IDE (Integrated Dev. Env.)", definition: "Din digitale arbejdsplads/skriveprogram til kode. Her skriver, tester og kører du softwaren (f.eks. VS Code)." },
    { term: "Cursor", definition: "En populær IDE bygget specifikt til AI/Vibe coding. Den kender hele din kodebase og gætter, hvad du vil." },
    { term: "Terminal / CLI", definition: "Den 'sorte skærm' hvor du skriver tekstkommandoer for at starte servere eller installere pakker." },
    { term: "Localhost", definition: "Din egen computer. Når du kører en hjemmeside på 'localhost', kan kun du se den i din browser." },
    { term: "Git", definition: "Et system til at gemme versioner af din kode. Tænk på det som en 'fortryd-knap' og backup i skyen." },
    { term: "Vercel", definition: "En tjeneste til at 'hoste' din hjemmeside, så den kommer ud på internettet med ét klik." },
  ],
  "Webudvikling & Stack": [
    { term: "Programmering", definition: "Processen med at skrive instruktioner, som en computer kan udføre." },
    { term: "Framework", definition: "Et skelet af kode, du bygger videre på. Det giver struktur og sparer tid (f.eks. Next.js)." },
    { term: "React", definition: "Et bibliotek til at bygge brugergrænseflader. Det opdeler din side i små genanvendelige 'komponenter'." },
    { term: "Next.js", definition: "Et populært framework bygget på React. Gør det nemt at lave hurtige, professionelle webapps." },
    { term: "Frontend", definition: "Det brugeren ser og klikker på i browseren (knapper, tekst, billeder)." },
    { term: "Backend", definition: "Motoren bagved. Håndterer logik, sikkerhed og data, som brugeren ikke ser direkte." },
    { term: "Router", definition: "Den del af koden, der styrer trafikken: 'Hvis brugeren går til `/kontakt`, så vis kontaktsiden'." },
    { term: "Tailwind CSS", definition: "Et system til design. Du styler knapper og tekst ved at skrive navne som `text-red-500` direkte i koden." },
    { term: "shadcn/ui", definition: "En samling af lækre, færdige komponenter, du kopierer direkte ind i koden. Perfekt til AI-genereret UI." },
    { term: "Markup", definition: "Sprog til at strukturere indhold (ikke logik). Eks. HTML til hjemmesider eller Markdown til dokumentation." },
  ],
  "Data & Drift": [
    { term: "NPM (Node Package Manager)", definition: "Et kæmpe bibliotek af gratis kode-pakker, andre har lavet, som du kan hente og bruge i dit projekt." },
    { term: "API (Application Programming Interface)", definition: "En 'tjener' der lader to programmer tale sammen. F.eks. når din app henter vejrdata fra en tjeneste." },
    { term: "Database", definition: "Et digitalt arkivskab, hvor din app gemmer brugerdata, produkter eller indlæg permanent." },
    { term: "CVE (Common Vulnerabilities)", definition: "En liste over kendte sikkerhedshuller i software. Vigtigt at tjekke, så du ikke bliver hacket." },
    { term: "Environment Variables (.env)", definition: "Hemmelige nøgler og kodeord, som gemmes i en skjult fil, så de ikke deles offentligt." },
    { term: "Deployment", definition: "Processen med at flytte din kode fra din computer ud på en server, så hele verden kan bruge den." },
  ],
};

const resources = [
  { name: "MDN Web Docs", url: "https://developer.mozilla.org/", description: "Den officielle ordbog for webudvikling (HTML, CSS, JS)" },
  { name: "Next.js Documentation", url: "https://nextjs.org/docs", description: "Dokumentation til det framework, de fleste AI-modeller kender bedst" },
  { name: "Shadcn/ui", url: "https://ui.shadcn.com/", description: "Biblioteket til moderne komponenter, der er nemme at kopiere" },
  { name: "Markdown Guide", url: "https://www.markdownguide.org/", description: "Lær det simple sprog, du bruger til at skrive README-filer og chatte med AI" },
];

export default function OrdforklaringPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filterTerms = (terms: typeof glossaryData[keyof typeof glossaryData]) => {
    if (!searchTerm) return terms;
    return terms.filter(
      (item) =>
        item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Vibe Coding Ordliste
        </h1>
        <p className="text-xl text-muted-foreground">
          En hurtig guide til de vigtigste begreber inden for moderne AI-assisteret programmering
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Søg efter termer..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-12 text-lg"
        />
      </div>

      <Tabs defaultValue="ai" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="ai">AI & Vibe Coding</TabsTrigger>
          <TabsTrigger value="tools">Værktøjer & Miljø</TabsTrigger>
          <TabsTrigger value="web">Webudvikling</TabsTrigger>
          <TabsTrigger value="data">Data & Drift</TabsTrigger>
        </TabsList>

        <TabsContent value="ai" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>AI & Vibe Coding Begreber</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Begreb</TableHead>
                    <TableHead>Forklaring</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filterTerms(glossaryData["AI & Vibe Coding"]).map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-semibold">{item.term}</TableCell>
                      <TableCell>{item.definition}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tools" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Værktøjer & Miljø</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Begreb</TableHead>
                    <TableHead>Forklaring</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filterTerms(glossaryData["Værktøjer & Miljø"]).map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-semibold">{item.term}</TableCell>
                      <TableCell>{item.definition}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="web" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Webudvikling & Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Begreb</TableHead>
                    <TableHead>Forklaring</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filterTerms(glossaryData["Webudvikling & Stack"]).map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-semibold">{item.term}</TableCell>
                      <TableCell>{item.definition}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Data & Drift</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Begreb</TableHead>
                    <TableHead>Forklaring</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filterTerms(glossaryData["Data & Drift"]).map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-semibold">{item.term}</TableCell>
                      <TableCell>{item.definition}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            Anbefalede Kilder
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-background rounded-lg hover:shadow-md transition-shadow border"
              >
                <ExternalLink className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold">{resource.name}</div>
                  <div className="text-sm text-muted-foreground">{resource.description}</div>
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button asChild size="lg" className="flex-1">
          <Link href="/processen/undersogelse">
            Start Processen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="flex-1">
          <Link href="/ressourcer/links">
            Se Værktøjer
          </Link>
        </Button>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Upload, Edit, TreePine, Layers, Settings, Image as ImageIcon } from "lucide-react";

export default function HenosiaPage() {
  const features = [
    {
      icon: Upload,
      title: "Upload billede",
      description: "Upload billeder direkte til dit projekt for at bruge dem i din app. Billederne gemmes i public mappen og kan bruges med next/image komponenten.",
    },
    {
      icon: Edit,
      title: "Edit mode",
      description: "Skift mellem forskellige redigeringstilstande for at arbejde mere effektivt. Edit mode giver dig mulighed for at fokusere på specifikke dele af dit projekt.",
    },
    {
      icon: TreePine,
      title: "Selection tree",
      description: "Naviger nemt gennem din projektstruktur med selection tree. Se alle filer og mapper i et hierarkisk træ og vælg præcis hvad du vil arbejde med.",
    },
    {
      icon: Layers,
      title: "Plan / Build mode",
      description: "Skift mellem Plan mode (til planlægning og arkitektur) og Build mode (til implementering). Plan mode hjælper dig med at tænke før du koder.",
    },
    {
      icon: Settings,
      title: "Custom instructions",
      description: "Tilpas hvordan AI'en arbejder med dine egne instruktioner. Definer kodestil, præferencer og regler som AI'en skal følge i dit projekt.",
    },
    {
      icon: ImageIcon,
      title: "Assets",
      description: "Administrer alle dine projekt-assets (billeder, ikoner, fonts) ét sted. Upload, organiser og brug assets nemt i din kode.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Funktioner i Henosia
        </h1>
        <p className="text-xl text-muted-foreground">
          Lær at bruge Henosia's kraftfulde funktioner effektivt
        </p>
      </div>

      <Card className="border-primary/50 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-2xl">⚡ Hvad er Henosia?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Henosia er en cloud-baseret IDE (Integrated Development Environment) specielt designet til Vibe-coding. 
            Den kombinerer AI-assisteret kodning med et intuitivt interface, så du kan bygge apps uden at skulle installere noget lokalt.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Nøglefunktioner</h2>
        
        <div className="grid gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>💡 Tips til at bruge Henosia effektivt</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg mt-0.5">1.</span>
              <div>
                <strong className="text-base">Start i Plan Mode</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Brug Plan mode til at diskutere arkitektur og design med AI'en før du begynder at kode. 
                  Det sparer tid og giver bedre resultater.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg mt-0.5">2.</span>
              <div>
                <strong className="text-base">Upload billeder via Assets</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Brug Assets-funktionen til at uploade alle billeder. AI'en kan så nemt referere til dem 
                  og bruge dem i koden med korrekte stier.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg mt-0.5">3.</span>
              <div>
                <strong className="text-base">Brug Selection Tree</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Når du arbejder med større projekter, brug selection tree til at fokusere AI'ens opmærksomhed 
                  på specifikke filer eller mapper.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg mt-0.5">4.</span>
              <div>
                <strong className="text-base">Definer Custom Instructions</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Opsæt custom instructions med din kodestil, præferencer og projektspecifikke regler. 
                  Det sikrer konsistent kode gennem hele projektet.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg mt-0.5">5.</span>
              <div>
                <strong className="text-base">Skift mellem modes</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Brug Plan mode til planlægning og diskussion, Build mode til implementering. 
                  Skift mellem dem efter behov for optimal workflow.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg mt-0.5">6.</span>
              <div>
                <strong className="text-base">Organiser dine Assets</strong>
                <p className="text-sm text-muted-foreground mt-1">
                  Hold dine assets organiseret i mapper (f.eks. images/, icons/, fonts/). 
                  Det gør det nemmere at finde og bruge dem senere.
                </p>
              </div>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="border-secondary/50">
        <CardHeader>
          <CardTitle>🚀 Kom i gang med Henosia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>For at komme i gang med Henosia:</p>
          <ol className="space-y-3 list-decimal list-inside">
            <li>Gå til <a href="https://www.henosia.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">www.henosia.com</a></li>
            <li>Opret en konto eller log ind</li>
            <li>Start et nyt projekt</li>
            <li>Upload dine dokumenter (PRD, Tech Design, AGENTS.md)</li>
            <li>Begynd at bygge med AI-assistenten</li>
          </ol>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button asChild size="lg" variant="outline" className="flex-1">
          <Link href="/best-practices/god-vibecoding">
            ← Forrige: God Vibecoding
          </Link>
        </Button>
        <Button asChild size="lg" className="flex-1">
          <Link href="/best-practices/hyppige-fejl">
            Næste: Hyppige Fejl
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

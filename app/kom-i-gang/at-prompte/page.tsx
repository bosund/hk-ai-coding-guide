import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/code-block";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

export default function AtPromptePage() {
  const goodPrompt = `Lav en skabelon til en hjemmeside der overfor virksomheder og samarbejdspartnere viser hvem jeg er og hvad jeg er.

Siden skal være minimalistisk, med skandinavisk design, lyse farver og klare linjer. Den skal bruge ShadCn elementer når de findes og disse skal styles efter en ensartet og stram designlinje.

Siden skal være professionel og have plads til at jeg indfører flere sektioner til start vil det være CV, Udvalgte projekter, kontaktoplysninger, Mig privat, kontaktformular

Siden skal være på Dansk, den skal både virke på desktop og på mobil.

Målet med hjemmesiden er at "sælge" mig selv overfor virksomheder så de har lyst til at ansætte mig.`;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          At Prompte
        </h1>
        <p className="text-xl text-muted-foreground">
          Lær at kommunikere effektivt med AI
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Hvad betyder det at prompte?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            "Et <strong>'prompt'</strong> er, enkelt sagt, en besked eller instruktion, 
            som brugeren giver til AI-systemet som input og dernæst 
            påvirker outputtet fra dette system."
          </p>
        </CardContent>
      </Card>

      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle className="text-2xl">Hvad skal med i en god prompt?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-primary">Rolle</strong>
                  <p className="text-sm text-muted-foreground">
                    Hvilken rolle skal AI påtage sig? F.eks. karrierevejleder, ekspert i rejser til Berlin eller content creator på LinkedIn
                  </p>
                  <p className="text-xs text-muted-foreground italic mt-1">
                    (Udelades i Henosia)
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-primary">Opgave</strong>
                  <p className="text-sm text-muted-foreground">
                    Hvad vil du gerne have den til?
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-primary">Format</strong>
                  <p className="text-sm text-muted-foreground">
                    Skal det f.eks. være en brødtekst eller skal der være bullets?
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-primary">Tone</strong>
                  <p className="text-sm text-muted-foreground">
                    Skal det f.eks. være formelt eller uformelt?
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-primary">Mål</strong>
                  <p className="text-sm text-muted-foreground">
                    Hvad vil du gerne have outputtet er?
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-primary">Begrænsninger</strong>
                  <p className="text-sm text-muted-foreground">
                    Det kan være termer man gerne vil have inkorporeret eller et bestemt antal anslag
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Eksempler</h2>
        
        <Card className="border-destructive/50 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <XCircle className="h-5 w-5 text-destructive" />
              En dårlig prompt
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-background p-4 rounded-lg border border-destructive/20">
              <p className="text-lg font-mono">Byg en hjemmeside med mit CV</p>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Denne prompt er for vag og giver ikke nok kontekst til AI'en.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              En bedre prompt
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Denne prompt indeholder alle de vigtige elementer og giver AI'en præcis kontekst:
            </p>
            <CodeBlock code={goodPrompt} />
            <div className="bg-primary/10 p-4 rounded-lg space-y-2">
              <p className="font-semibold text-primary">Hvorfor er denne bedre?</p>
              <ul className="space-y-1 text-sm">
                <li>✓ Klar opgave (hjemmeside til virksomheder)</li>
                <li>✓ Specifikt format (minimalistisk, skandinavisk)</li>
                <li>✓ Tone (professionel)</li>
                <li>✓ Mål ("sælge" mig selv til virksomheder)</li>
                <li>✓ Begrænsninger (dansk, desktop + mobil, specifikke sektioner)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-xl">💡 Tips til bedre prompts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">1.</span>
              <span>Vær specifik - jo mere detalje, jo bedre resultat</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">2.</span>
              <span>Beskriv konteksten - hvem er målgruppen?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">3.</span>
              <span>Angiv format og stil - hvordan skal det se ud?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">4.</span>
              <span>Definer målet - hvad skal resultatet opnå?</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">5.</span>
              <span>Iterer - hvis resultatet ikke er godt nok, præciser din prompt</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button asChild size="lg" className="flex-1">
          <Link href="/kom-i-gang/ordforklaring">
            Næste: Ordforklaring
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="flex-1">
          <Link href="/processen/undersogelse">
            Start Processen
          </Link>
        </Button>
      </div>
    </div>
  );
}

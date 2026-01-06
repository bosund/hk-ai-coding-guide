import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowRight, BookOpen, Youtube, Github } from "lucide-react";

export default function VibeCodingPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Hvad er Vibe Coding?
        </h1>
        <p className="text-xl text-muted-foreground">
          En no-code tilgang til at skabe digitale løsninger med AI
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Definition</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              <strong>Vibecoding</strong> er en no-code tilgang til at skabe digitale løsninger.
            </p>
            <p className="text-lg">
              <strong>Vibe = følelse</strong>
            </p>
            <p className="text-lg">
              I stedet for at programmere med kode, beskriver du med ord hvad det er du gerne vil have lavet.
            </p>
            <p className="text-lg">
              Fokus er på <strong>kreativitet</strong> og <strong>hurtig idéudvikling</strong>.
            </p>
            <p className="text-lg">
              Det bruges f.eks. i platformen <strong>Henosia</strong>, hvor du kan gå fra en idé til en prototype på kort tid.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <span className="text-primary">🎯</span>
              Hvorfor AI kurser?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="text-xl font-semibold">En ny funktion for HK'erne – AI integrator</h3>
            <p className="text-lg leading-relaxed">
              Som <strong>AI-integrator</strong> er dit primære formål at sikre, at generativ kunstig intelligens bliver en integreret del af det daglige arbejde på kontoret. Du fungerer som bindeled mellem medarbejderne og IT-afdelingen, hvilket betyder, at du både støtter kolleger i at udnytte AI-værktøjer optimalt og sikrer, at tekniske løsninger implementeres gnidningsfrit.
            </p>
            <p className="text-lg leading-relaxed">
              Gennem tæt samarbejde med både brugere og IT-specialister hjælper du med at skabe en kultur, hvor AI anvendes <strong>sikkert</strong>, <strong>effektivt</strong> og <strong>værdiskabende</strong> i organisationen.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Sådan bliver du klogere
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Online Ressourcer</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <strong>Søg på nettet med Google</strong> og læs om Vibe-coding
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <strong>Se YouTube videoer</strong> om emnet
                  </div>
                </li>
              </ul>
            </div>

            <Alert>
              <Github className="h-4 w-4" />
              <AlertTitle>Anbefalet Guide</AlertTitle>
              <AlertDescription>
                <a 
                  href="https://github.com/EnzeD/vibe-coding" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  Ultimate Guide to Vibe Coding
                </a>
                {" "}på GitHub
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Brug din AI Agent</h3>
              <p className="text-lg">
                Går du i stå, så brug din AI agent. Spørg den f.eks. om:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Hvad er en MCP Server?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Hvilke MCP Servere kan jeg bruge til projekt X?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Hvilke extensions er gode til projekt X?</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button asChild size="lg" className="flex-1">
          <Link href="/kom-i-gang/at-prompte">
            Næste: Lær at Prompte
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="flex-1">
          <Link href="/kom-i-gang/ordforklaring">
            Se Ordforklaring
          </Link>
        </Button>
      </div>
    </div>
  );
}

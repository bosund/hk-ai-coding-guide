import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { phases } from "@/lib/content";
import { ArrowRight, Search, FileText, Code, Bot } from "lucide-react";

const phaseIcons = {
  search: Search,
  "file-text": FileText,
  code: Code,
  bot: Bot,
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-6 py-12">
        <Image
          src="/hk-danmark-logo-vector.svg"
          alt="HK Danmark Logo"
          width={80}
          height={80}
          className="mb-4"
        />
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            HK's Guide til AI Coding
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Lær at bygge software med AI - ingen kodeerfaring nødvendig
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button asChild size="lg" className="text-lg">
            <Link href="/kom-i-gang/vibe-coding">
              Kom i gang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg">
            <Link href="/processen/undersogelse">
              Se processen
            </Link>
          </Button>
        </div>
      </section>

      {/* Quick Links */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="border-2 hover:border-primary transition-colors cursor-pointer">
          <Link href="/kom-i-gang/vibe-coding">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Ny til Vibe-Coding?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Start her for at lære hvad Vibe-Coding er, og hvordan du bruger AI til at bygge software.
              </CardDescription>
            </CardContent>
          </Link>
        </Card>

        <Card className="border-2 hover:border-secondary transition-colors cursor-pointer">
          <Link href="/processen/undersogelse">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Klar til at bygge?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Følg vores 4-trins proces fra idé til færdig app med AI-assisterede prompts.
              </CardDescription>
            </CardContent>
          </Link>
        </Card>

        <Card className="border-2 hover:border-destructive transition-colors cursor-pointer">
          <Link href="/best-practices/hyppige-fejl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">⚠️</span>
                Brug for hjælp?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Se de hyppigste fejl og hvordan du undgår dem i dit AI-kodningsprojekt.
              </CardDescription>
            </CardContent>
          </Link>
        </Card>
      </section>

      {/* Process Overview */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">
            4-Trins Processen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fra idé til færdig app - følg vores strukturerede proces med AI-assisterede prompts
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {phases.map((phase) => {
            const Icon = phaseIcons[phase.icon as keyof typeof phaseIcons];
            return (
              <Card key={phase.slug} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                <Link href={`/processen/${phase.slug}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          {phase.number}
                        </Badge>
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-2xl mt-4">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {phase.description}
                    </CardDescription>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="bg-muted/50 rounded-lg p-8 space-y-4">
        <h3 className="text-2xl font-bold">Yderligere Ressourcer</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/kom-i-gang/ordforklaring" className="flex items-center gap-3 p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
            <span className="text-2xl">📚</span>
            <div>
              <div className="font-semibold">Ordforklaring</div>
              <div className="text-sm text-muted-foreground">Lær de vigtigste begreber</div>
            </div>
          </Link>
          <Link href="/ressourcer/links" className="flex items-center gap-3 p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
            <span className="text-2xl">🔗</span>
            <div>
              <div className="font-semibold">Links & Værktøjer</div>
              <div className="text-sm text-muted-foreground">Find de bedste AI-værktøjer</div>
            </div>
          </Link>
          <Link href="/best-practices/god-vibecoding" className="flex items-center gap-3 p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
            <span className="text-2xl">💡</span>
            <div>
              <div className="font-semibold">God Vibecoding</div>
              <div className="text-sm text-muted-foreground">Best practices for projektstruktur</div>
            </div>
          </Link>
          <Link href="/best-practices/henosia" className="flex items-center gap-3 p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
            <span className="text-2xl">⚡</span>
            <div>
              <div className="font-semibold">Funktioner i Henosia</div>
              <div className="text-sm text-muted-foreground">Lær at bruge Henosia effektivt</div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

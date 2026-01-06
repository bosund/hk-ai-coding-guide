import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Briefcase, Code, Users } from "lucide-react";

export default function OmPage() {
  const projects = [
    {
      name: "uniteapps.dk",
      url: "https://uniteapps.dk",
      description: "Platform til app-udvikling og digitale løsninger",
      tech: ["Next.js", "TypeScript", "Supabase"],
    },
    {
      name: "forhandl.dk",
      url: "https://forhandl.dk",
      description: "Værktøj til forhandling og prissammenligning",
      tech: ["React", "Node.js", "PostgreSQL"],
    },
    {
      name: "Uniteapps (Python)",
      url: "#",
      description: "Backend services og automation værktøjer",
      tech: ["Python", "FastAPI", "Docker"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Om Bo Sundgaard
        </h1>
        <p className="text-xl text-muted-foreground">
          Faglig konsulent i HK/Privat og Vibe-coding entusiast
        </p>
      </div>

      <Card className="border-primary/50 bg-primary/5">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <Briefcase className="h-8 w-8" />
            </div>
            <div>
              <CardTitle className="text-2xl">Faglig Konsulent</CardTitle>
              <p className="text-muted-foreground">HK/Privat</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            Som faglig konsulent i HK/Privat arbejder Bo med at hjælpe medlemmer med at navigere i den digitale verden. 
            Med en passion for AI og moderne teknologi, fokuserer han på at gøre komplekse tekniske koncepter tilgængelige for alle.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">AI Integration</Badge>
            <Badge variant="secondary">Vibe-Coding</Badge>
            <Badge variant="secondary">Digital Transformation</Badge>
            <Badge variant="secondary">Medlemsrådgivning</Badge>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
            <Code className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold">Projekter</h2>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  {project.url !== "#" && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10 text-accent">
              <Users className="h-6 w-6" />
            </div>
            <CardTitle>Mission</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            Bo's mission er at demokratisere adgangen til moderne teknologi og AI-værktøjer. 
            Gennem Vibe-coding og AI-integration arbejder han for at gøre det muligt for alle - 
            uanset teknisk baggrund - at bygge digitale løsninger og realisere deres idéer.
          </p>
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <p className="font-semibold text-primary mb-2">Fokusområder:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                <span>Uddannelse og træning i AI-værktøjer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                <span>Udvikling af tilgængelige guides og ressourcer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                <span>Rådgivning om digital transformation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                <span>Opbygning af communities omkring Vibe-coding</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-secondary/50">
        <CardHeader>
          <CardTitle>📚 Om denne guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Denne guide er skabt for at hjælpe HK's medlemmer med at komme i gang med AI-assisteret programmering. 
            Den kombinerer praktisk erfaring med moderne best practices for at give dig de bedste forudsætninger 
            for at bygge dine egne digitale løsninger.
          </p>
          <p className="text-sm text-muted-foreground">
            Guiden opdateres løbende med nye værktøjer, teknikker og erfaringer fra Vibe-coding communityet.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
        <CardHeader>
          <CardTitle>🤝 Kontakt & Support</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Har du spørgsmål eller brug for hjælp? Som HK-medlem kan du kontakte Bo gennem HK's normale kanaler.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="outline" className="flex-1">
              <a href="https://www.hk.dk" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Besøg HK.dk
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <a href="https://uniteapps.dk" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Besøg Uniteapps
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center pt-6">
        <Button asChild size="lg">
          <Link href="/">
            Tilbage til forsiden
          </Link>
        </Button>
      </div>
    </div>
  );
}

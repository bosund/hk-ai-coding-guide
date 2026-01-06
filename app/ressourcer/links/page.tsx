import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function LinksPage() {
  const categories = [
    {
      title: "Cloud IDE",
      description: "Online udviklingsmiljøer til Vibe-coding",
      links: [
        { name: "Henosia", url: "https://www.henosia.com", description: "AI-drevet cloud IDE til Vibe-coding" },
        { name: "Google AI Studio", url: "https://aistudio.google.com/", description: "Gratis AI-platform med stor kontekst" },
      ],
    },
    {
      title: "IDE Værktøjer",
      description: "Desktop IDE'er med AI-integration",
      links: [
        { name: "Antigravity", url: "https://antigravity.dev/", description: "Googles agentiske IDE" },
        { name: "VS Code", url: "https://code.visualstudio.com/", description: "Populær open-source editor" },
        { name: "Cursor", url: "https://cursor.sh/", description: "AI-drevet IDE baseret på VS Code" },
        { name: "Windsurf", url: "https://codeium.com/windsurf", description: "Begyndervenlig AI IDE" },
      ],
    },
    {
      title: "Asynkrone Agenter",
      description: "AI-agenter der arbejder selvstændigt",
      links: [
        { name: "Google Jules", url: "https://jules.ai/", description: "Googles asynkrone AI-agent" },
        { name: "GitHub Copilot", url: "https://github.com/features/copilot", description: "AI pair programmer fra GitHub" },
      ],
    },
    {
      title: "Database",
      description: "Cloud database løsninger",
      links: [
        { name: "Supabase", url: "https://supabase.com/", description: "Open source Firebase alternativ med PostgreSQL" },
        { name: "Firebase", url: "https://firebase.google.com/", description: "Googles backend-as-a-service platform" },
        { name: "PlanetScale", url: "https://planetscale.com/", description: "Serverless MySQL database" },
      ],
    },
    {
      title: "Email",
      description: "Email services til apps",
      links: [
        { name: "Resend", url: "https://resend.com/", description: "Moderne email API til udviklere" },
        { name: "SendGrid", url: "https://sendgrid.com/", description: "Email delivery service" },
      ],
    },
    {
      title: "AI Agents",
      description: "AI-platforme og værktøjer",
      links: [
        { name: "OpenRouter", url: "https://openrouter.ai/", description: "Unified API til forskellige AI-modeller" },
        { name: "Claude", url: "https://claude.ai/", description: "Anthropics AI-assistent" },
        { name: "ChatGPT", url: "https://chat.openai.com/", description: "OpenAI's chatbot" },
      ],
    },
    {
      title: "Dokumentation",
      description: "Værktøjer til at finde og bruge dokumentation",
      links: [
        { name: "Context7", url: "https://context7.com/", description: "MCP server til opdateret dokumentation" },
        { name: "MDN Web Docs", url: "https://developer.mozilla.org/", description: "Web development dokumentation" },
      ],
    },
    {
      title: "Layout & Design",
      description: "Design værktøjer og ressourcer",
      links: [
        { name: "Stitch", url: "https://stitch.ai/", description: "AI-drevet design værktøj" },
        { name: "v0", url: "https://v0.dev/", description: "Vercel's AI UI generator" },
        { name: "shadcn/ui", url: "https://ui.shadcn.com/", description: "Genanvendelige komponenter" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/", description: "Utility-first CSS framework" },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Links & Værktøjer
        </h1>
        <p className="text-xl text-muted-foreground">
          En kurateret samling af de bedste værktøjer til Vibe-coding
        </p>
      </div>

      <Card className="border-primary/50 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-2xl">🔗 Værktøjskasse til AI-Coding</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            Denne side indeholder links til alle de værktøjer og platforme du har brug for til at bygge apps med AI. 
            Alle links åbner i en ny fane.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-8">
        {categories.map((category, index) => (
          <div key={index} className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold">{category.title}</h2>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {category.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center justify-between">
                        <span>{link.name}</span>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>💡 Anbefalinger til begyndere</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Hvis du er helt ny:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span><strong>Start med Henosia</strong> - Alt er i browseren, ingen installation nødvendig</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span><strong>Brug Supabase</strong> til database - Gratis niveau er rigeligt til at starte</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span><strong>Prøv Claude</strong> til planlægning - God til at forklare koncepter</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Hvis du vil have mere kontrol:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span><strong>Download Cursor eller Windsurf</strong> - Kraftfulde desktop IDE'er</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span><strong>Brug Context7 MCP</strong> - Få opdateret dokumentation direkte i din IDE</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span><strong>Eksperimenter med v0</strong> - Generer UI komponenter hurtigt</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-secondary/50">
        <CardHeader>
          <CardTitle>🆓 Gratis vs. Betalt</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Helt gratis at starte:</h3>
              <p className="text-sm text-muted-foreground">
                Google AI Studio, Supabase (gratis tier), Windsurf, VS Code, shadcn/ui, Tailwind CSS
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Gratis tier tilgængelig:</h3>
              <p className="text-sm text-muted-foreground">
                Henosia, Cursor, Claude, ChatGPT, Firebase, Resend, Vercel
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Betalt men værd det:</h3>
              <p className="text-sm text-muted-foreground">
                Cursor Pro (~$20/md), Claude Pro (~$20/md), ChatGPT Plus (~$20/md)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Button asChild size="lg" variant="outline" className="flex-1">
          <Link href="/best-practices/hyppige-fejl">
            ← Forrige: Hyppige Fejl
          </Link>
        </Button>
        <Button asChild size="lg" className="flex-1">
          <Link href="/ressourcer/om">
            Næste: Om Bo Sundgaard
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

import { ChevronRight, Github, Globe, Server, Link as LinkIcon, ShoppingCart, Dna } from "lucide-react";
import Link from "next/link";
import { GlossaryTerm } from "@/components/glossary-term";

export default function GoLivePage() {
    const steps = [
        {
            number: 1,
            title: "Forbind til Github",
            description: (
                <>
                    Opret en bruger på <GlossaryTerm term="GitHub">GitHub.com</GlossaryTerm> hvis du ikke allerede har en. GitHub fungerer som et online lager for din kode, hvor du kan gemme versioner af dit arbejde.
                </>
            ),
            icon: <Github className="w-6 h-6" />,
        },
        {
            number: 2,
            title: "Publicer projektet i Github",
            description: (
                <>
                    Brug <GlossaryTerm term="Git">Git</GlossaryTerm> til at 'pushe' (sende) din kode fra din computer op til dit nye <GlossaryTerm term="Repository">repository</GlossaryTerm> på GitHub. Dette gør koden tilgængelig for hosting-tjenester.
                    <br /><br />
                    Har du brug for hjælp til kommandoerne? <Link href="/vaerktojer/git-cheatsheet" className="text-primary underline hover:text-primary/80">Se vores Git Cheatsheet her</Link>.
                </>
            ),
            icon: <Globe className="w-6 h-6" />,
        },
        {
            number: 3,
            title: "Opret konto på Vercel eller Koyeb",
            description: (
                <>
                    Vælg en <GlossaryTerm term="Hosting">hosting</GlossaryTerm>-udbyder. <GlossaryTerm term="Vercel">Vercel</GlossaryTerm> er rigtig god til Next.js projekter (som dette), mens Koyeb er god til 'Docker' baserede projekter. Opret en gratis 'Hobby' konto.
                </>
            ),
            icon: <Server className="w-6 h-6" />,
        },
        {
            number: 4,
            title: "Forbind til dit Github projekt",
            description: (
                <>
                    Log ind på din hosting-konto (fx <GlossaryTerm term="Vercel">Vercel</GlossaryTerm>) og vælg 'Add New Project'. Forbind den til din <GlossaryTerm term="GitHub">GitHub</GlossaryTerm>-konto og vælg det <GlossaryTerm term="Repository">repository</GlossaryTerm>, du lige har uploadet. Tryk på 'Deploy'.
                </>
            ),
            icon: <LinkIcon className="w-6 h-6" />,
        },
        {
            number: 5,
            title: "Køb domæne",
            description: (
                <>
                    For at få en rigtig adresse (fx mit-projekt.dk) skal du købe et <GlossaryTerm term="Domæne">domæne</GlossaryTerm>.{" "}
                    <a href="https://dandomain.dk" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Dandomain.dk</a> og{" "}
                    <a href="https://simply.com" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Simply.com</a> er populære danske udbydere hvor du nemt kan købe et domæne. Begge er relativt billige og har overenskomst med HK.
                    <br /><br />
                    Til et projekt som dette kan de desværre ikke tilbyde hosting, så du skal kun købe domænet samt <GlossaryTerm term="DNS">DNS</GlossaryTerm> tjeneste igennem dem.
                </>
            ),
            icon: <ShoppingCart className="w-6 h-6" />,
        },
        {
            number: 6,
            title: "Forbind DNS (CNAME-Record)",
            description: (
                <>
                    Det sidste tekniske trin. Log ind hos din domæne-udbyder og find <GlossaryTerm term="DNS">DNS</GlossaryTerm>-indstillingerne. Opret en '<GlossaryTerm term="CNAME">CNAME</GlossaryTerm>' record der peger på den adresse, du har fået af Vercel eller Koyeb.
                </>
            ),
            icon: <Dna className="w-6 h-6" />,
        },
    ];

    return (
        <div className="max-w-4xl mx-auto space-y-8 p-4 pt-0">
            <header className="pb-8 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>Læring</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary font-medium">Go Live</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">🌍 Go Live</h1>
                <p className="text-lg text-muted-foreground">
                    Hvis du vil have projektet til at være "rigtigt online" skal du igennem en række lidt besværlige trin.
                    Netlify kan være en let genvej, men du får mere kontrol med denne metode.
                </p>
            </header>

            <div className="space-y-12">
                <div className="grid gap-6">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="flex gap-6 p-6 rounded-xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                    {step.icon}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-xs font-bold text-muted-foreground">
                                        {step.number}
                                    </span>
                                    <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                                </div>
                                <div className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="rounded-lg bg-muted/50 p-6 border border-border">
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                        💡 Pro Tip
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Når du først har sat dette op én gang, vil din hjemmeside automatisk opdatere sig selv, hver gang du 'pusher' ændringer til GitHub. Det kaldes <GlossaryTerm term="CI/CD">CI/CD</GlossaryTerm> (Continuous Integration / Continuous Deployment).
                    </p>
                </div>
            </div>
        </div>
    );
}

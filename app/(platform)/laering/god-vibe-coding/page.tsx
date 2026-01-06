import { ChevronRight, FileText, Folder } from "lucide-react";

export default function GodVibeCodingPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 p-4 pt-0">
            <header className="pb-8 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>Læring</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary font-medium">God Vibe Coding</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Projektstruktur</h1>
                <p className="text-lg text-muted-foreground">For at få succes med Vibe Coding er det vigtigt at holde orden i dit projekt. Her er en anbefalet filstruktur.</p>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold mt-8 mb-4">Anbefalede filer og mapper</h2>

                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                        <FileText className="w-6 h-6 text-primary mt-1" />
                        <div>
                            <h3 className="font-bold text-foreground text-lg">agents.md</h3>
                            <p className="text-muted-foreground mt-1">Instruktioner om projektet og dets arkitektur. Indsættes evt. som standardprompt eller referer til denne. Dette er din agents "briefing".</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                        <Folder className="w-6 h-6 text-primary mt-1" />
                        <div>
                            <h3 className="font-bold text-foreground text-lg">documentation.agent/</h3>
                            <p className="text-muted-foreground mt-1">Her gemmer du filer med dokumentation til agenten. Det kan være API referencer, design guides eller kodestandarder.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                        <Folder className="w-6 h-6 text-primary mt-1" />
                        <div>
                            <h3 className="font-bold text-foreground text-lg">documentation/</h3>
                            <p className="text-muted-foreground mt-1">Dokumentation til dig selv og andre mennesker (f.eks. README filer, guides).</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                        <Folder className="w-6 h-6 text-primary mt-1" />
                        <div>
                            <h3 className="font-bold text-foreground text-lg">memory/</h3>
                            <p className="text-muted-foreground mt-1">Her opretter du "minder" som Agenten kan genbruge, så den får en hukommelse over beslutninger og learnings fra projektet.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

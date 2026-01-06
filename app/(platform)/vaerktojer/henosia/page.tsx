import { ChevronRight, Image as ImageIcon, Edit2, PlusCircle, FolderTree, Settings, FileBox } from "lucide-react";
import { GlossaryTerm } from "@/components/glossary-term";

export default function HenosiaPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 p-4 pt-0">
            <header className="pb-8 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>Værktøjer & Links</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary font-medium">Henosia</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Funktioner i Henosia</h1>
                <div className="text-lg text-muted-foreground space-y-4 max-w-3xl">
                    <p>
                        Vi har valgt Henosia til dette kursus fordi det er nemt at gå i gang med, det har styr på meget af <GlossaryTerm term="Context">contexten</GlossaryTerm> fra starten, og har en fin standardstruktur.
                    </p>
                    <p>
                        Der er masser af andre produkter du kunne vælge i stedet, men deres free-tier er blandt de bedste.
                        Derudover er det et dansk startup, og vi har oplevet at ejerne er lette at komme i kontakt med.
                    </p>
                </div>
            </header>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Upload billede */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">

                        <h3 className="text-xl font-semibold">Upload billede</h3>
                    </div>
                    <p className="text-muted-foreground">
                        Du kan uploade billeder og skærmdumps for at forklare noget der er svært at skrive.
                    </p>
                </div>

                {/* Edit mode */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">

                        <h3 className="text-xl font-semibold">Edit mode</h3>
                    </div>
                    <p className="text-muted-foreground">
                        Her kan du redigere &quot;<GlossaryTerm term="Props">props</GlossaryTerm>&quot; dvs. egenskaber på elementer, f.eks. skrifttyper, skriftstørrelse m.m. det er ofte hurtigere end at bruge AI.
                    </p>
                </div>

                {/* Insert */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">

                        <h3 className="text-xl font-semibold">Insert</h3>
                    </div>
                    <p className="text-muted-foreground">
                        Du får en lang liste over standardkomponenter du kan indsætte.
                    </p>
                </div>

                {/* Selection tree */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">

                        <h3 className="text-xl font-semibold">Selection tree</h3>
                    </div>
                    <p className="text-muted-foreground">
                        Her kan du vælge diverse niveauer i koden, ikke brugbart med mindre du kan forstå HTML.
                    </p>
                </div>

                {/* Custom instructions */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">

                        <h3 className="text-xl font-semibold">Custom instructions</h3>
                    </div>
                    <p className="text-muted-foreground">
                        Giv Henosia nogle bestemte instruktioner, eks. om at læse dokumentation, eller om at dokumentere dens arbejde.
                    </p>
                </div>

                {/* Assets */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">

                        <h3 className="text-xl font-semibold">Assets</h3>
                    </div>
                    <p className="text-muted-foreground">
                        Upload dine egne billeder her.
                    </p>
                </div>
            </div>
        </div>
    );
}

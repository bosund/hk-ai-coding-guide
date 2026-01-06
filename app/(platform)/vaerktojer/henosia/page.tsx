import { ChevronRight, Image as ImageIcon, Edit2, PlusCircle, FolderTree, Settings, FileBox } from "lucide-react";

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
                        Vi har valgt Henosia til dette kursus fordi det er nemt at gå i gang med, det har styr på meget af contexten fra starten, og har en fin standardstruktur.
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
                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <ImageIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold">Upload billede</h3>
                    </div>
                    <p className="text-muted-foreground">
                        Du kan uploade billeder og skærmdumps for at forklare noget der er svært at skrive.
                    </p>
                </div>

                {/* Edit mode */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                            <Edit2 className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold">Edit mode</h3>
                    </div>
                    <p className="text-muted-foreground">
                        Her kan du redigere &quot;props&quot; dvs. egenskaber på elementer, f.eks. skrifttyper, skriftstørrelse m.m. det er ofte hurtigere end at bruge AI.
                    </p>
                </div>

                {/* Insert */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                            <PlusCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold">Insert</h3>
                    </div>
                    <p className="text-muted-foreground">
                        Du får en lang liste over standardkomponenter du kan indsætte.
                    </p>
                </div>

                {/* Selection tree */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                            <FolderTree className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold">Selection tree</h3>
                    </div>
                    <p className="text-muted-foreground">
                        Her kan du vælge diverse niveauer i koden, ikke brugbart med mindre du kan forstå HTML.
                    </p>
                </div>

                {/* Custom instructions */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
                            <Settings className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold">Custom instructions</h3>
                    </div>
                    <p className="text-muted-foreground">
                        Giv Henosia nogle bestemte instruktioner, eks. om at læse dokumentation, eller om at dokumentere dens arbejde.
                    </p>
                </div>

                {/* Assets */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                            <FileBox className="w-6 h-6" />
                        </div>
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

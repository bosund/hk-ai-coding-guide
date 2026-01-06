import { ChevronRight, AlertTriangle } from "lucide-react";

export default function HyppigeFejlPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 p-4 pt-0">
            <header className="pb-8 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>Læring</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary font-medium">Hyppige Fejl</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Undgå fælderne</h1>
                <p className="text-lg text-muted-foreground">Selvom AI gør det nemt at kode, er der stadig faldgruber. Her er de mest almindelige fejl.</p>
            </header>

            <div className="grid gap-6 mt-8">

                <div className="flex items-start gap-4 p-6 rounded-lg bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-900/20">
                    <AlertTriangle className="w-8 h-8 text-orange-600 dark:text-orange-400 shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Du tror at du har lavet en AI-agent</h3>
                        <p className="text-muted-foreground">Mange tror de bygger en autonom agent, men laver blot et script der kalder en API. En rigtig agent kan observere, tænke og handle.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-900/20">
                    <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400 shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Lækket API-nøgle</h3>
                        <p className="text-muted-foreground">Du er kommet til at lægge din API-nøgle i frontend-koden eller har clocket den til Github. Pludselig vågner du op til en regning på $5000 fordi bots har stjålet din nøgle. Brug altid Environment Variables (.env) og backend kald.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/20">
                    <AlertTriangle className="w-8 h-8 text-yellow-600 dark:text-yellow-400 shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Falsk database</h3>
                        <p className="text-muted-foreground">Du tror at du har oprettet en database, men systemet gemmer i virkeligheden bare data lokalt på din computer (f.eks. i en JSON fil eller localStorage). Dét virker ikke når du går live.</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/20">
                    <AlertTriangle className="w-8 h-8 text-blue-600 dark:text-blue-400 shrink-0" />
                    <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Forældet viden</h3>
                        <p className="text-muted-foreground">AI-modeller er trænet på data der kan være måneder eller år gammelt. Den kode du får kan være "deprecated" (forældet), selvom du beder om det nyeste framework. Tjek altid dokumentationen.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

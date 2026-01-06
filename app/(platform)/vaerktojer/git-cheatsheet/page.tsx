import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Download, GitBranch, GitCommit, GitMerge, Search, Share2, History, Database, FileCode, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function GitCheatsheetPage() {
    return (
        <div className="container mx-auto py-8 max-w-5xl">
            <Alert variant="destructive" className="mb-8">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>VIGTIGT</AlertTitle>
                <AlertDescription>
                    Upload aldrig personlige oplysninger, koder eller API-nøgler til GitHub!
                </AlertDescription>
            </Alert>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Git Cheatsheet</h1>
                    <p className="text-muted-foreground">
                        En hurtig guide til de mest almindelige git kommandoer.
                    </p>
                </div>
                <Button asChild>
                    <Link href="/git-cheat-sheet-education.pdf" target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Setup */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Database className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-semibold">Konfiguration</h2>
                    </div>
                    <div className="bg-card border rounded-lg p-4 space-y-3">
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git config --global user.name "[navn]"</code>
                            <p className="text-sm text-muted-foreground">Sætter navnet der tilknyttes dine commits.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git config --global user.email "[email]"</code>
                            <p className="text-sm text-muted-foreground">Sætter emailen der tilknyttes dine commits.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git config --global color.ui auto</code>
                            <p className="text-sm text-muted-foreground">Aktiverer farver i kommandolinjen for bedre overblik.</p>
                        </div>
                    </div>
                </div>

                {/* Setup & Init */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Search className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-semibold">Opsætning & Initiering</h2>
                    </div>
                    <div className="bg-card border rounded-lg p-4 space-y-3">
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git init</code>
                            <p className="text-sm text-muted-foreground">Initialiserer et eksisterende bibliotek som et Git repository.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git clone [url]</code>
                            <p className="text-sm text-muted-foreground">Henter et helt repository fra en hostet placering via URL.</p>
                        </div>
                    </div>
                </div>

                {/* Stage & Snapshot */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <GitCommit className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-semibold">Stage & Snapshot</h2>
                    </div>
                    <div className="bg-card border rounded-lg p-4 space-y-3">
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git status</code>
                            <p className="text-sm text-muted-foreground">Viser ændrede filer i arbejdsbiblioteket, der er klar til commit.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git add [fil]</code>
                            <p className="text-sm text-muted-foreground">Tilføjer en fil til din næste commit (staging).</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git reset [fil]</code>
                            <p className="text-sm text-muted-foreground">Fjerner en fil fra staging, men beholder ændringerne i arbejdsbiblioteket.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git diff</code>
                            <p className="text-sm text-muted-foreground">Viser forskellen på det der er ændret, men ikke staged.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git diff --staged</code>
                            <p className="text-sm text-muted-foreground">Viser forskellen på det der er staged, men ikke committet.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git commit -m "[besked]"</code>
                            <p className="text-sm text-muted-foreground">Committer dit staged indhold med en beskrivende besked.</p>
                        </div>
                    </div>
                </div>

                {/* Branch & Merge */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <GitBranch className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-semibold">Branch & Merge</h2>
                    </div>
                    <div className="bg-card border rounded-lg p-4 space-y-3">
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git branch</code>
                            <p className="text-sm text-muted-foreground">Lister dine branches. En * markerer den aktive branch.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git branch [branch-navn]</code>
                            <p className="text-sm text-muted-foreground">Opretter en ny branch ved den nuværende commit.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git checkout [branch-navn]</code>
                            <p className="text-sm text-muted-foreground">Skifter til en anden branch.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git merge [branch]</code>
                            <p className="text-sm text-muted-foreground">Fletter (merger) den angivne branchs historik ind i den nuværende.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git log</code>
                            <p className="text-sm text-muted-foreground">Viser alle commits i den nuværende branchs historik.</p>
                        </div>
                    </div>
                </div>

                {/* Share & Update */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Share2 className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-semibold">Deling & Opdatering</h2>
                    </div>
                    <div className="bg-card border rounded-lg p-4 space-y-3">
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git remote add [alias] [url]</code>
                            <p className="text-sm text-muted-foreground">Tilføjer en git URL som et alias (f.eks. origin).</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git fetch [alias]</code>
                            <p className="text-sm text-muted-foreground">Henter alle branches fra det angivne remote alias.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git merge [alias]/[branch]</code>
                            <p className="text-sm text-muted-foreground">Fletter (merger) en remote branch ind i din nuværende branch.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git push [alias] [branch]</code>
                            <p className="text-sm text-muted-foreground">Sender lokale commits til det angivne remote repository.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git pull</code>
                            <p className="text-sm text-muted-foreground">Henter og merger commits fra tracking remote branchen.</p>
                        </div>
                    </div>
                </div>

                {/* Temporary Commits */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <History className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-semibold">Midlertidige commits</h2>
                    </div>
                    <div className="bg-card border rounded-lg p-4 space-y-3">
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git stash</code>
                            <p className="text-sm text-muted-foreground">Gemmer midlertidigt ændrede filer for at kunne skifte branch.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git stash list</code>
                            <p className="text-sm text-muted-foreground">Lister stashede ændringer.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git stash pop</code>
                            <p className="text-sm text-muted-foreground">Indlæser de stashede ændringer og fjerner dem fra stashen.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git stash drop</code>
                            <p className="text-sm text-muted-foreground">Sletter de seneste stashede ændringer.</p>
                        </div>
                    </div>
                </div>

                {/* Inspect & Compare */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <FileCode className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-semibold">Inspektion & Sammenligning</h2>
                    </div>
                    <div className="bg-card border rounded-lg p-4 space-y-3">
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git log branchB..branchA</code>
                            <p className="text-sm text-muted-foreground">Viser commits der er i branchA men ikke i branchB.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git diff branchB...branchA</code>
                            <p className="text-sm text-muted-foreground">Viser forskellen på hvad der er i branchA som ikke er i branchB.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">git show [SHA]</code>
                            <p className="text-sm text-muted-foreground">Viser information om et specifikt objekt (commit, tag, etc).</p>
                        </div>
                    </div>
                </div>


                {/* Ignore Patterns */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                        <GitMerge className="h-6 w-6 text-primary" />
                        <h2 className="text-2xl font-semibold">Ignorer filer</h2>
                    </div>
                    <div className="bg-card border rounded-lg p-4 space-y-3">
                        <p className="text-sm text-muted-foreground mb-2">
                            <strong>.gitignorere</strong> filen forhindrer utilsigtede filer i at blive staget og committet.
                        </p>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">*.log</code>
                            <p className="text-sm text-muted-foreground">Ignorer alle filer med filendelsen .log.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">build/</code>
                            <p className="text-sm text-muted-foreground">Ignorer alle filer i build mappen.</p>
                        </div>
                        <div>
                            <code className="bg-muted px-2 py-1 rounded text-sm block mb-1">.env</code>
                            <p className="text-sm text-muted-foreground">Ignorer environment filer (vigtigt for sikkerhed!).</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

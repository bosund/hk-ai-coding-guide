import { ChevronRight } from "lucide-react";

export default function VibeCodingPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 p-4 pt-0">
            <header className="pb-8 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>Om Kurset</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary font-medium">Vibe Coding</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Hvad er Vibe Coding</h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                    Vibecoding er en no-code tilgang til at skabe digitale løsninger.
                </p>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="leading-relaxed">
                    Vibe = følelse
                </p>
                <p>
                    I stedet for at programmere med kode, beskriver du med ord hvad det er du gerne vil have lavet.
                    Fokus er på kreativitet og hurtig idéudvikling.
                </p>
                <p>
                    Det bruges f.eks. i platformen Henosia, hvor du kan gå fra en idé til en prototype på kort tid.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">Hvorfor AI kurser</h2>
                <h3 className="text-xl font-semibold mt-8 mb-4">En ny funktion for HK’erne – AI integrator</h3>
                <p>
                    Som AI-integrator er dit primære formål at sikre, at generativ kunstig intelligens bliver en integreret del af det daglige arbejde på kontoret.
                    Du fungerer som bindeled mellem medarbejderne og IT-afdelingen, hvilket betyder, at du både støtter kolleger i at udnytte AI-værktøjer optimalt og sikrer, at tekniske løsninger implementeres gnidningsfrit.
                    Gennem tæt samarbejde med både brugere og IT-specialister hjælper du med at skabe en kultur, hvor AI anvendes sikkert, effektivt og værdiskabende i organisationen.
                </p>


                <h2 className="text-3xl font-bold mt-12 mb-6">Hvad man ellers kan vibe code</h2>
                <p className="text-lg text-muted-foreground mb-6">
                    Udover webudvikling kan du bruge AI til at hjælpe med mange andre typer opgaver. Her er nogle eksempler.
                </p>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Excel-makroer (VBA)</h3>
                        <p className="mb-2">AI kan skrive komplekse VBA-scripts til at automatisere dine regneark.</p>
                        <div className="bg-muted p-4 rounded-lg text-sm">
                            <strong>Hvordan:</strong> Beskriv hvad du vil opnå (f.eks. &quot;Saml data fra alle ark og lav en pivot-tabel&quot;).
                            Bed AI&apos;en generere VBA-koden, og kopier den ind i Excel under Developer &gt; Visual Basic.
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Python scripts</h3>
                        <p className="mb-2">Perfekt til dataanalyse, filhåndtering og automatisering af kedelige opgaver.</p>
                        <div className="bg-muted p-4 rounded-lg text-sm">
                            <strong>Hvordan:</strong> Installer Python og en editor som VS Code.
                            Beskriv din opgave (f.eks. &quot;Læs alle PDF-filer i en mappe og træk fakturanumre ud&quot;).
                            Kør scriptet og se magien ske.
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Desktop applikationer</h3>
                        <p className="mb-2">Du kan bygge rigtige programmer til Windows eller Mac.</p>
                        <div className="bg-muted p-4 rounded-lg text-sm">
                            <strong>Hvordan:</strong> Brug frameworks som Electron eller Tauri.
                            Bed AI&apos;en om at sætte &quot;boilereplaten&quot; op, og byg derefter funktionerne en efter en, præcis som med en hjemmeside.
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">BI-apps (Business Intelligence)</h3>
                        <p className="mb-2">Få hjælp til at visualisere data i værktøjer som Power BI eller Tableau.</p>
                        <div className="bg-muted p-4 rounded-lg text-sm">
                            <strong>Hvordan:</strong> Bed AI&apos;en om hjælp til DAX-formler (til Power BI) eller til at strukturere din datamodel,
                            så dine dashboards bliver hurtige og viser de rigtige indsigter.
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6">Sådan bliver du klogere</h2>
                <p>Søg på nettet med google og læs om Vibe-coding, se Youtube videoer.</p>
                <ul>
                    <li><a href="https://github.com/EnzeD/vibe-coding">Ultimate: Guide to Vibe Coding</a></li>
                </ul>

                <p>Går du i stå, så brug din AI agent, spørg den eks. om:</p>
                <ul>
                    <li>Hvad er en MCP Server?</li>
                    <li>Hvilke MCP Servere kan jeg bruge til projekt X</li>
                    <li>Hvilke extensions er gode til projekt X</li>
                </ul>
            </div>
        </div>
    );
}

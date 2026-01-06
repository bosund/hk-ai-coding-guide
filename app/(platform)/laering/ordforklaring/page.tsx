import { ChevronRight } from "lucide-react";

export default function OrdforklaringPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 p-4 pt-0">
            <header className="pb-8 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>Læring</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary font-medium">Ordforklaring</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">🚀 Vibe Coding Ordliste</h1>
                <p className="text-lg text-muted-foreground">En hurtig guide til de vigtigste begreber inden for moderne AI-assisteret programmering.</p>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2>🤖 AI & Vibe Coding Begreber</h2>
                <p className="italic">Selve interaktionen med AI'en og den nye "vibe-baserede" arbejdsmetode.</p>

                <div className="overflow-hidden rounded-lg border border-border">
                    <table className="min-w-full divide-y divide-border">
                        <thead className="bg-muted">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Begreb</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Forklaring</th>
                            </tr>
                        </thead>
                        <tbody className="bg-card divide-y divide-border">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Vibe Coding</td>
                                <td className="px-6 py-4 text-muted-foreground">At programmere ved at beskrive "stemningen" eller resultatet til en AI, uden nødvendigvis at røre koden selv.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">MVP</td>
                                <td className="px-6 py-4 text-muted-foreground">Minimum Viable Product. Den mindste/simpleste udgave af dit produkt, der kan løse problemet.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">LLM</td>
                                <td className="px-6 py-4 text-muted-foreground">"Hjernen" bag AI'en (f.eks. GPT-4, Claude 3.5). Den model, der forstår din tekst og skriver kode retur.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Context</td>
                                <td className="px-6 py-4 text-muted-foreground">Den mængde info (chat, åbne filer, dokumentation), AI'en "ser" lige nu. God context giver bedre svar.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">MCP</td>
                                <td className="px-6 py-4 text-muted-foreground">Model Context Protocol. Linker AI sikkert til dine data (f.eks. læse filer, database).</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Prompt Engineering</td>
                                <td className="px-6 py-4 text-muted-foreground">Kunsten at formulere sine instrukser præcist, så AI'en gør nøjagtigt det, man ønsker.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Hallucination</td>
                                <td className="px-6 py-4 text-muted-foreground">Når AI'en selvsikkert finder på noget, der ikke passer (f.eks. opfinder en funktion, der ikke findes).</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Token</td>
                                <td className="px-6 py-4 text-muted-foreground">Enheden AI tæller i. Et ord er ca. 0.75 tokens. Det bruges til at måle, hvor meget "hukommelse" du bruger.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Composer</td>
                                <td className="px-6 py-4 text-muted-foreground">En funktion i Cursor IDE, hvor du kan skrive krav til flere filer på én gang, og AI'en bygger hele features.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>🛠️ Værktøjer & Miljø</h2>
                <p className="italic">Hvor arbejdet foregår, og de programmer du skal have installeret.</p>
                <div className="overflow-hidden rounded-lg border border-border">
                    <table className="min-w-full divide-y divide-border">
                        <thead className="bg-muted">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Begreb</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Forklaring</th>
                            </tr>
                        </thead>
                        <tbody className="bg-card divide-y divide-border">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">IDE</td>
                                <td className="px-6 py-4 text-muted-foreground">Integrated Development Environment. Din digitale arbejdsplads/skriveprogram til kode (f.eks. VS Code).</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Cursor</td>
                                <td className="px-6 py-4 text-muted-foreground">En populær IDE bygget specifikt til AI/Vibe coding. Den kender hele din kodebase.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Terminal / CLI</td>
                                <td className="px-6 py-4 text-muted-foreground">Den "sorte skærm" hvor du skriver tekstkommandoer for at starte servere eller installere pakker.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Localhost</td>
                                <td className="px-6 py-4 text-muted-foreground">Din egen computer. Når du kører en hjemmeside på "localhost", kan kun du se den i din browser.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Git</td>
                                <td className="px-6 py-4 text-muted-foreground">Versionstyring. Tænk på det som en "fortryd-knap" og backup i skyen.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Vercel</td>
                                <td className="px-6 py-4 text-muted-foreground">En tjeneste til at "hoste" din hjemmeside, så den kommer ud på internettet.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>🏗️ Webudvikling & Stack</h2>
                <div className="overflow-hidden rounded-lg border border-border">
                    <table className="min-w-full divide-y divide-border">
                        <tbody className="bg-card divide-y divide-border">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Framework</td>
                                <td className="px-6 py-4 text-muted-foreground">Et skelet af kode, du bygger videre på (f.eks. Next.js).</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Tech Stack</td>
                                <td className="px-6 py-4 text-muted-foreground">En samling af teknologier (sprog, frameworks, databaser), der arbejder sammen for at drive din app.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">React</td>
                                <td className="px-6 py-4 text-muted-foreground">Bibliotek til at bygge brugergrænseflader med "komponenter".</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Props</td>
                                <td className="px-6 py-4 text-muted-foreground">Forkortelse for "properties". Data eller indstillinger, du sender ind i en komponent for at ændre dens udseende eller indhold.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Frontend/Backend</td>
                                <td className="px-6 py-4 text-muted-foreground">Frontend er det brugeren ser. Backend er motoren bagved (logik, data).</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Server Actions</td>
                                <td className="px-6 py-4 text-muted-foreground">Funktioner i Next.js, der kører på serveren men kaldes direkte fra din frontend. Giver nem adgang til data.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Tailwind CSS</td>
                                <td className="px-6 py-4 text-muted-foreground">Design-system hvor du styler direkte i koden (eks. 'text-red-500').</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">shadcn/ui</td>
                                <td className="px-6 py-4 text-muted-foreground">Lækre, færdige komponenter, du kopierer direkte ind. Perfekt til AI-genereret UI.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>📦 Data & Drift</h2>
                <div className="overflow-hidden rounded-lg border border-border">
                    <table className="min-w-full divide-y divide-border">
                        <tbody className="bg-card divide-y divide-border">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">NPM</td>
                                <td className="px-6 py-4 text-muted-foreground">Node Package Manager. Bibliotek af gratis kode-pakker.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">API</td>
                                <td className="px-6 py-4 text-muted-foreground">En "tjener" der lader to programmer tale sammen.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Environment Variables</td>
                                <td className="px-6 py-4 text-muted-foreground">Hemmelige nøgler (f.eks. API-keys), som gemmes i en <code>.env</code>-fil, så de ikke ligger åbent i din kode.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Database</td>
                                <td className="px-6 py-4 text-muted-foreground">Et digitalt arkivskab til permanente data.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Schema</td>
                                <td className="px-6 py-4 text-muted-foreground">En "plantegning" over din database. Beskriver hvilke tabeller du har, og hvilke data (kolonner) der skal være i dem.</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Auth</td>
                                <td className="px-6 py-4 text-muted-foreground">Authentication. Systemet der tjekker, hvem brugeren er (login), og hvad de må (adgangskontrol).</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Deployment</td>
                                <td className="px-6 py-4 text-muted-foreground">At flytte koden fra computer til server (live).</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">Serverless</td>
                                <td className="px-6 py-4 text-muted-foreground">En teknologi hvor du ikke skal tænke på servere. Koden "vågner" kun, når der er brug for den, hvilket sparer strøm og penge.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <hr className="my-8" />

                <h3>🔗 Anbefalede Kilder</h3>
                <ul>
                    <li><a href="https://developer.mozilla.org/">MDN Web Docs</a> - Den officielle ordbog for webudvikling.</li>
                    <li><a href="https://nextjs.org/docs">Next.js Documentation</a> - Dokumentation til AI-modellernes yndlings framework.</li>
                    <li><a href="https://ui.shadcn.com/">Shadcn/ui</a> - Komponent-bibliotek.</li>
                    <li><a href="https://www.markdownguide.org/">Markdown Guide</a> - Lær sproget til dokumentation.</li>
                </ul>

            </div>
        </div>
    );
}

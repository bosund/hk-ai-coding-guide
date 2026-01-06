import Link from "next/link";
import { ArrowRight, Search, FileText, Cpu, Bot, CheckCircle } from "lucide-react";

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="absolute inset-0 hero-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 bg-primary/5 mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
                        HK AI Coding Guide
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6">
                        Vibe Coding
                        <span className="block text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mt-2">
                            Fra idé til app med AI
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground mb-10">
                        Lær at bygge software uden at være programmør. Vi guider dig gennem processen fra den første idé til det færdige produkt ved hjælp af moderne AI-værktøjer.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                            href="/om-kurset/vibe-coding"
                        >
                            Start kurset her
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link
                            className="inline-flex items-center justify-center px-8 py-3 border border-border text-base font-medium rounded-lg text-foreground bg-background hover:bg-muted transition-colors"
                            href="/processen/undersogelse"
                        >
                            Hop til processen
                        </Link>
                    </div>
                </div>
            </section>

            {/* The Process Section */}
            <section className="py-24 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
                            4-Trins Processen
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Vi har brudt udviklingen ned i 4 overskuelige faser. Hver fase har sine egne prompts og værktøjer.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <Link href="/processen/undersogelse" className="group relative bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md hover:border-primary/50 transition-all">
                            <div className="absolute top-4 right-4 text-muted-foreground/20 group-hover:text-primary/20 font-bold text-6xl select-none">1</div>
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-primary mb-6">
                                <Search className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Undersøgelse</h3>
                            <p className="text-muted-foreground text-sm">Validér din idé og forstå markedet før du bygger. Deep Research.</p>
                        </Link>

                        {/* Step 2 */}
                        <Link href="/processen/mvp" className="group relative bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md hover:border-primary/50 transition-all">
                            <div className="absolute top-4 right-4 text-muted-foreground/20 group-hover:text-primary/20 font-bold text-6xl select-none">2</div>
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-primary mb-6">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">MVP (PRD)</h3>
                            <p className="text-muted-foreground text-sm">Definer kravene. Hvad skal bygges, og hvad skal vente?</p>
                        </Link>

                        {/* Step 3 */}
                        <Link href="/processen/teknisk-design" className="group relative bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md hover:border-primary/50 transition-all">
                            <div className="absolute top-4 right-4 text-muted-foreground/20 group-hover:text-primary/20 font-bold text-6xl select-none">3</div>
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-primary mb-6">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Teknisk Design</h3>
                            <p className="text-muted-foreground text-sm">Vælg den rette tech-stack og planlæg arkitekturen.</p>
                        </Link>

                        {/* Step 4 */}
                        <Link href="/processen/agents" className="group relative bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-md hover:border-primary/50 transition-all">
                            <div className="absolute top-4 right-4 text-muted-foreground/20 group-hover:text-primary/20 font-bold text-6xl select-none">4</div>
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center text-primary mb-6">
                                <Bot className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Agents</h3>
                            <p className="text-muted-foreground text-sm">Instruér din AI-agent og lad den skrive koden for dig.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Resources / Undervisere Teaser */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
                                Lær af eksperterne
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Kurset undervises af Bo Sundgaard og Mona Kierbye Thorup fra HK. Vi har samlet vores erfaringer, best practices og prompt-biblioteker.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                    <span>Konkrete eksempler fra virkeligheden</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                    <span>Fokus på no-code og low-code</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                    <span>Opdaterede værktøjslister</span>
                                </li>
                            </ul>
                            <Link
                                className="inline-flex items-center text-primary font-medium hover:underline"
                                href="/om-kurset/undervisere"
                            >
                                Mød underviserne
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                        <div className="relative bg-muted rounded-2xl p-8 border border-border">
                            {/* Placeholder for visual or just a clean list of modules */}
                            <h3 className="text-xl font-bold mb-6">Hvad du lærer</h3>
                            <div className="space-y-4">
                                <Link href="/laering/at-prompte" className="block p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                                    <div className="font-medium">At prompte korrekt</div>
                                    <div className="text-sm text-muted-foreground">Lær sproget som AI forstår.</div>
                                </Link>
                                <Link href="/laering/hyppige-fejl" className="block p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                                    <div className="font-medium">Undgå fælderne</div>
                                    <div className="text-sm text-muted-foreground">Se de hyppigste fejl begyndere begår.</div>
                                </Link>
                                <Link href="/vaerktojer/links" className="block p-4 bg-background rounded-lg border border-border hover:border-primary transition-colors">
                                    <div className="font-medium">Værktøjskassen</div>
                                    <div className="text-sm text-muted-foreground">En kurateret liste af de bedste AI-tools.</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

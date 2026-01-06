import { ChevronRight } from "lucide-react";
import { GlossaryTerm } from "@/components/glossary-term";

export default function AtPromptePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 p-4 pt-0">
            <header className="pb-8 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>Læring</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary font-medium">At prompte</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Hvad betyder det at prompte?</h1>
                <blockquote className="p-4 my-4 bg-muted border-l-4 border-primary italic">
                    “Et ‘prompt’ er, enkelt sagt, en besked eller instruktion, som brugeren giver til AI-systemet som input og dernæst påvirker outputtet fra dette system.”
                </blockquote>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">

                <h2 className="text-2xl font-bold mt-8 mb-4">Hvad der skal med i en god prompt</h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Rolle:</strong> Hvilken rolle skal AI påtage sig f.eks karrierevejleder, ekspert i rejser til Berlin eller content creator på linkedIn – <GlossaryTerm term="Context">Kontekst</GlossaryTerm> er nøglen til præcise svar (Udelades i Henosia)</li>
                    <li><strong>Opgave:</strong> Hvad vil du gerne have den til?</li>
                    <li><strong>Format:</strong> Skal det f.eks være en brødtekst eller skal der være bullets?</li>
                    <li><strong>Tone:</strong> Skal det f.eks være formelt eller uformelt?</li>
                    <li><strong>Mål:</strong> Hvad vil du gerne have outputtet er?</li>
                    <li><strong>Begrænsninger:</strong> Det kan være termer man gerne vil have inkorporeret eller et bestemt antal anslag</li>
                </ul>

                <div className="grid md:grid-cols-2 gap-6 mt-12">
                    <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-lg border border-red-100 dark:border-red-900/20">
                        <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                            En dårlig prompt
                        </h3>
                        <p className="italic text-muted-foreground">"Byg en hjemmeside med mit CV"</p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-lg border border-green-100 dark:border-green-900/20">
                        <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                            En bedre prompt
                        </h3>
                        <div className="space-y-4 text-sm">
                            <p>"Lav en skabelon til en hjemmeside der overfor virksomheder og samarbejdspartnere viser hvem jeg er og hvad jeg er."</p>
                            <p>"Siden skal være minimalistisk, med skandinavisk design, lyse farver og klare linjer. Den skal bruge <GlossaryTerm term="shadcn/ui">ShadCn</GlossaryTerm> elementer når de findes og disse skal styles efter en ensartet og stram designlinje."</p>
                            <p>"Siden skal være professionel og have plads til at jeg indfører flere sektioner til start vil det være CV, Udvalgte projekter, kontaktoplysninger, Mig privat, kontaktformular"</p>
                            <p>"Siden skal være på Dansk, den skal både virke på desktop og på mobil."</p>
                            <p>"Målet med hjemmesiden er at 'sælge' mig selv overfor virksomheder så de har lyst til at ansætte mig."</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

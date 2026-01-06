import { ChevronRight } from "lucide-react";
import { GLOSSARY_TERMS, GlossaryTerm } from "@/lib/glossary-data";

export default function OrdforklaringPage() {
    const categories: NonNullable<GlossaryTerm["category"]>[] = [
        "AI & Vibe Coding",
        "Værktøjer & Miljø",
        "Webudvikling & Stack",
        "Data & Drift"
    ];

    const categoryDescriptions: Record<string, string> = {
        "AI & Vibe Coding": "Selve interaktionen med AI'en og den nye \"vibe-baserede\" arbejdsmetode.",
        "Værktøjer & Miljø": "Hvor arbejdet foregår, og de programmer du skal have installeret.",
        "Webudvikling & Stack": "",
        "Data & Drift": ""
    };

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

                {categories.map((category) => {
                    // Adding "Begreber" suffix to the first category title to match original design if desired, 
                    // or just using the category name. The original had "AI & Vibe Coding Begreber".
                    // Let's stick to the category name for simplicity or append if needed.
                    // The original headers were specifics, let's map them.
                    const headerTitle = category === "AI & Vibe Coding" ? "🤖 AI & Vibe Coding Begreber" :
                        category === "Værktøjer & Miljø" ? "🛠️ Værktøjer & Miljø" :
                            category === "Webudvikling & Stack" ? "🏗️ Webudvikling & Stack" :
                                category === "Data & Drift" ? "📦 Data & Drift" : category;

                    const terms = GLOSSARY_TERMS.filter(term => term.category === category || (category === "AI & Vibe Coding" && !term.category)); // Fallback if no category
                    if (terms.length === 0) return null;

                    return (
                        <div key={category} className="mb-12">
                            <h2>{headerTitle}</h2>
                            {categoryDescriptions[category] && <p className="italic">{categoryDescriptions[category]}</p>}
                            <div className="overflow-hidden rounded-lg border border-border mt-4">
                                <table className="min-w-full divide-y divide-border">
                                    <thead className="bg-muted">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Begreb</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Forklaring</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-card divide-y divide-border">
                                        {terms.map((term) => (
                                            <tr key={term.term}>
                                                <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">{term.term}</td>
                                                <td className="px-6 py-4 text-muted-foreground">{term.definition}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    );
                })}

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

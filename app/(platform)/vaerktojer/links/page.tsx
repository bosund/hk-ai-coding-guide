import { ChevronRight, ExternalLink } from "lucide-react";
import { GlossaryTerm } from "@/components/glossary-term";

export default function LinksPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 p-4 pt-0">
            <header className="pb-8 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>Værktøjer & Links</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary font-medium">Links</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Nyttige Ressourcer</h1>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                <section>
                    <h2 className="text-2xl font-bold mb-4">Cloud IDE med indbygget AI</h2>
                    <ul className="space-y-2">
                        <li><a href="https://www.henosia.com" target="_blank" className="flex items-center gap-2">Henosia <ExternalLink className="w-4 h-4" /></a></li>
                        <li><a href="https://aistudio.google.com/apps" target="_blank" className="flex items-center gap-2">Google AI Studio <ExternalLink className="w-4 h-4" /></a></li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4"><GlossaryTerm term="IDE">IDE</GlossaryTerm> (Udviklingsværktøj)</h2>
                    <ul className="space-y-2">
                        <li><a href="https://antigravity.google/" target="_blank" className="flex items-center gap-2">Google Antigravity <ExternalLink className="w-4 h-4" /></a> (her kommer du længst gratis)</li>
                        <li><a href="https://code.visualstudio.com/" target="_blank" className="flex items-center gap-2">VS Code <ExternalLink className="w-4 h-4" /></a> (basis for alle de andre)</li>
                        <li><a href="https://www.cursor.com" target="_blank" className="flex items-center gap-2"><GlossaryTerm term="Cursor">Cursor</GlossaryTerm> <ExternalLink className="w-4 h-4" /></a> (God og nem at bruge, koster penge)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Asynkrone agenter</h2>
                    <ul className="space-y-2">
                        <li><a href="https://jules.google" target="_blank" className="flex items-center gap-2">Google Jules <ExternalLink className="w-4 h-4" /></a></li>
                        <li><a href="https://www.github.com" target="_blank" className="flex items-center gap-2">Copilot på Github <ExternalLink className="w-4 h-4" /></a></li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4"><GlossaryTerm term="Database">Database</GlossaryTerm> & <GlossaryTerm term="Frontend/Backend">Backend</GlossaryTerm></h2>
                    <ul className="space-y-2">
                        <li><a href="https://www.supabase.com" target="_blank" className="flex items-center gap-2">Supabase <ExternalLink className="w-4 h-4" /></a> (brug også deres <GlossaryTerm term="MCP">MCP</GlossaryTerm> server)</li>
                        <li><a href="https://www.resend.com" target="_blank" className="flex items-center gap-2">Resend <ExternalLink className="w-4 h-4" /></a> (Mails - integreres også med Supabase + <GlossaryTerm term="MCP">MCP</GlossaryTerm> server)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">AI Agenter</h2>
                    <ul className="space-y-2">
                        <li><a href="https://www.openrouter.com" target="_blank" className="flex items-center gap-2">OpenRouter <ExternalLink className="w-4 h-4" /></a> (Brug alle agenter, med forudbetaling så du ikke bliver ruineret)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Dokumentation</h2>
                    <ul className="space-y-2">
                        <li><a href="https://www.context7.com" target="_blank" className="flex items-center gap-2">Context7 <ExternalLink className="w-4 h-4" /></a> (brug deres <GlossaryTerm term="MCP">MCP</GlossaryTerm> server)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Layout</h2>
                    <ul className="space-y-2">
                        <li><a href="https://stitch.withgoogle.com" target="_blank" className="flex items-center gap-2">Stitch <ExternalLink className="w-4 h-4" /></a> (Super til at lave layout og redesigns der ikke ligner AI for meget)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Publicering (<GlossaryTerm term="Serverless">Serverless</GlossaryTerm> <GlossaryTerm term="Deployment">hosting</GlossaryTerm>)</h2>
                    <ul className="space-y-2">
                        <li><a href="https://www.netlify.app" target="_blank" className="flex items-center gap-2">Netlify <ExternalLink className="w-4 h-4" /></a> (Indbygget i Henosia)</li>
                        <li><a href="https://www.vercel.com" target="_blank" className="flex items-center gap-2"><GlossaryTerm term="Vercel">Vercel</GlossaryTerm> <ExternalLink className="w-4 h-4" /></a> (Super til at hoste Henosia projekter. Har <GlossaryTerm term="MCP">MCP</GlossaryTerm> server)</li>
                        <li><a href="https://www.koyeb.com" target="_blank" className="flex items-center gap-2">Koyeb <ExternalLink className="w-4 h-4" /></a> (Europæisk, kan hoste alt)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Versionering</h2>
                    <ul className="space-y-2">
                        <li><a href="https://www.github.com" target="_blank" className="flex items-center gap-2">GitHub <ExternalLink className="w-4 h-4" /></a> (Meget vigtigt - gem dit projekt her)</li>
                    </ul>
                </section>

            </div>
        </div>
    );
}

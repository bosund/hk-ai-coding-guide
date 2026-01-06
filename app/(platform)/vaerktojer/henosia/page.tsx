import { ChevronRight } from "lucide-react";

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
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
                <ul className="list-disc pl-5 space-y-2 text-xl">
                    <li>Upload billede</li>
                    <li>Edit mode</li>
                    <li>Selection tree</li>
                    <li>Plan / build mode</li>
                    <li>Custom instructions</li>
                    <li>Assets</li>
                </ul>
            </div>
        </div>
    );
}

import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HKArrangementerPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 p-4 pt-0">
            <header className="pb-8 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>Værktøjer & Links</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">HK Arrangementer</h1>
                <p className="text-muted-foreground text-lg">
                    Find aktuelle kurser og arrangementer hos HK Østjylland.
                </p>
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
                <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
                    <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold m-0 flex items-center gap-2">
                                <Calendar className="w-6 h-6 text-primary" />
                                Arrangementskalender
                            </h2>
                            <p className="text-muted-foreground not-prose">
                                Se oversigt over kommende arrangementer, kurser og events.
                            </p>
                        </div>
                        <Button asChild size="lg" className="shrink-0 gap-2">
                            <a
                                href="https://www.hk.dk/aktuelt/kalender?topic-search=&searchTagString=&searchOrgString=hk%20%C3%B8stjylland&pageIndex=1&pageSize=10"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Åbn kalender
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

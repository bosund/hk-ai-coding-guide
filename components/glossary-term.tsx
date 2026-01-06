import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { getDefinition } from "@/lib/glossary-data"
import { Info } from "lucide-react";

interface GlossaryTermProps {
    term: string;
    children?: React.ReactNode;
}

export function GlossaryTerm({ term, children }: GlossaryTermProps) {
    const definition = getDefinition(term);

    if (!definition) {
        return <>{children || term}</>;
    }

    return (
        <Tooltip delayDuration={300}>
            <TooltipTrigger asChild>
                <span className="cursor-help decoration-dashed underline underline-offset-4 decoration-muted-foreground/50 hover:decoration-primary/50 transition-colors">
                    {children || term}
                </span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs text-balance">
                <p className="font-semibold mb-1">{term}</p>
                <p>{definition}</p>
            </TooltipContent>
        </Tooltip>
    )
}

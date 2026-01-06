"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language = "markdown", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Kopieret til udklipsholder!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Kunne ikke kopiere til udklipsholder");
    }
  };

  return (
    <div className="relative group my-6">
      {filename && (
        <div className="bg-muted px-4 py-2 text-sm font-mono text-muted-foreground border border-b-0 rounded-t-lg">
          {filename}
        </div>
      )}
      <div className="relative">
        <pre className={`bg-slate-950 text-slate-50 p-6 rounded-lg overflow-x-auto ${filename ? 'rounded-t-none' : ''}`}>
          <code className="text-sm font-mono leading-relaxed">{code}</code>
        </pre>
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-3 right-3 h-8 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={copyToClipboard}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-1" />
              Kopieret
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-1" />
              Kopiér
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

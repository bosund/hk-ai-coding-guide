"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
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
    <div className="my-6 rounded-lg overflow-hidden border border-border bg-[#0f172a] dark:bg-[#020617] shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#1e293b] dark:bg-[#0f172a]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-medium text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md">
            <Terminal className="w-3 h-3" />
            <span className="capitalize">{language}</span>
          </div>
          {filename && (
            <span className="text-xs text-slate-400 font-mono">
              {filename}
            </span>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed text-slate-50 whitespace-pre-wrap break-words">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

import { ChevronRight, Info } from "lucide-react";

export default function IntroductionPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <header className="pb-8 border-b border-border-light dark:border-border-dark">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>Getting Started</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary font-medium">Introduction</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
                    Introduction to AI Coding
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    Welcome to HK's comprehensive guide on leveraging Artificial Intelligence
                    in your development workflow. This documentation is designed to help you
                    navigate the rapidly evolving landscape of AI-assisted coding.
                </p>
            </header>
            <div className="prose prose-slate dark:prose-invert max-w-none text-foreground">
                <h3>What you will learn</h3>
                <p>
                    This guide covers everything from setting up your environment with the
                    latest AI tools to understanding the ethical implications of generated
                    code. We aim to empower developers to write better code, faster.
                </p>
                <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-lg p-6 my-6">
                    <h4 className="text-primary font-semibold mt-0 mb-2 flex items-center gap-2">
                        <Info className="w-5 h-5" />
                        Note
                    </h4>
                    <p className="mb-0 text-sm text-foreground">
                        This guide is updated weekly to reflect the newest advancements in LLM
                        technology and coding assistants.
                    </p>
                </div>
                <h3>Prerequisites</h3>
                <ul>
                    <li>Basic understanding of programming concepts</li>
                    <li>A code editor installed (VS Code recommended)</li>
                    <li>Curiosity to learn new technologies</li>
                </ul>
            </div>
        </div>
    );
}

import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function UnderviserePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 p-4 pt-0">
            <header className="pb-8 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span>Om Kurset</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-primary font-medium">Undervisere</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground mb-6">Mød dine undervisere</h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Bo Sundgaard */}
                <div className="flex flex-col space-y-4">
                    <div className="aspect-square relative rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="/bo-rackskab.jpg"
                            alt="Bo Sundgaard"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">Bo Sundgaard</h2>
                        <h3 className="text-primary font-medium">Faglig konsulent i HK/Privat</h3>
                        <div className="prose dark:prose-invert mt-4 text-muted-foreground">
                            <p>Hjælper medlemmer med at få bedre vilkår igennem kollektive aftaler og overenskomster.</p>
                            <p>Udvikler hjælpeværktøjer, renteberegnere og kravsberegnere med AI.</p>
                            <p className="font-semibold text-foreground mt-4 mb-2">Projekter:</p>
                            <ul className="list-disc pl-4 space-y-1">
                                <li><a href="https://www.uniteapps.dk" target="_blank" rel="noopener noreferrer">www.uniteapps.dk</a></li>
                                <li><a href="https://www.forhandl.dk" target="_blank" rel="noopener noreferrer">www.forhandl.dk</a></li>
                                <li>Uniteapps (Python)</li>
                            </ul>
                            <p className="mt-4">
                                <a href="https://www.linkedin.com/in/sundgaard/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-2">
                                    <LinkedinLogo className="w-5 h-5" />
                                    <span>Bo på LinkedIn</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mona Kierbye Thorup */}
                <div className="flex flex-col space-y-4">
                    <div className="aspect-square relative rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="/mona.jpg"
                            alt="Mona Kierbye Thorup"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">Mona Kierbye Thorup</h2>
                        <h3 className="text-primary font-medium">Udviklingskonsulent i HK</h3>
                        <div className="prose dark:prose-invert mt-4 text-muted-foreground">
                            <p>Digital værktøjskasse nørd. Bruger af generativ AI privat og på job siden december 2022.</p>
                            <p>AI Lead i HK Østjylland og Ambassadør for ”AI for kvinder”.</p>
                            <p className="mt-4">
                                <a href="https://www.linkedin.com/in/monathorup" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-2">
                                    <LinkedinLogo className="w-5 h-5" />
                                    <span>Mona på LinkedIn</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function LinkedinLogo({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={className}
            fill="none"
        >
            <rect x="0" y="0" width="24" height="24" rx="4" fill="#0077b5" />
            <path
                fill="white"
                d="M5.5 19h4v-11h-4v11zm2-12.75c1.25 0 2.25-1 2.25-2.25s-1-2.25-2.25-2.25-2.25 1-2.25 2.25 1 2.25 2.25 2.25zm13.5 12.75h-4v-5.5c0-1.5-.5-2.5-2-2.5-1 0-1.75.75-2 1.5-.25.25-.25.75-.25 1.25v5.25h-4s.05-10 0-11h4v1.75c.5-.75 1.5-2 3.5-2 2.5 0 4.5 1.75 4.5 5v6.25z"
            />
        </svg>
    );
}

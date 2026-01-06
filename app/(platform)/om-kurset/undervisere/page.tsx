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
                            <p className="font-semibold text-foreground mt-4 mb-2">Projekter:</p>
                            <ul className="list-disc pl-4 space-y-1">
                                <li><a href="https://www.uniteapps.dk" target="_blank" rel="noopener noreferrer">www.uniteapps.dk</a></li>
                                <li><a href="https://www.forhandl.dk" target="_blank" rel="noopener noreferrer">www.forhandl.dk</a></li>
                                <li>Uniteapps (Python)</li>
                            </ul>
                            <p className="mt-4">
                                <a href="https://www.linkedin.com/in/sundgaard/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Bo på LinkedIn
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
                                <a href="https://www.linkedin.com/in/monathorup" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                    Mona på LinkedIn
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-surface-light/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center gap-3">
                        <img
                            alt="HK Logo"
                            className="h-8 w-auto"
                            src="/hklogo.svg"
                        />
                        <span className="font-semibold text-lg tracking-tight text-gray-900 dark:text-white border-l pl-3 border-gray-300 dark:border-gray-700 ml-2">
                            AI Coding Guide
                        </span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                            href="#quick-start"
                        >
                            Start Her
                        </Link>
                        <Link
                            className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                            href="#processen"
                        >
                            Processen
                        </Link>
                        <Link
                            className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                            href="#"
                        >
                            Ressourcer
                        </Link>
                        <Link
                            className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
                            href="#"
                        >
                            FAQ
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            <span className="material-icons text-xl">
                                {mounted && theme === "dark" ? "light_mode" : "dark_mode"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

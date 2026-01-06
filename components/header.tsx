// components/header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-surface-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-3">
            <Image
              alt="HK Logo"
              className="h-8 w-auto"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5zWorrffO47GHgboHzvOWETinwgWVFT5Yn90hA4-EVUwYwwstAvwXmY5Wj2Oul3GavNlx13pf7qlHOx2J2Z1r9WGjcpmjlVhBOfV2ZnBARAYzltSy7y6FLtDuew3zNOnElvMrvWp-9h_ulF8TRDDTYGgRJ7B1Vs65QCzvhz1Kuv1prqCOnNxqGTwLBS9MbX1v8W2xqJl3wE2YxkX54zlpzAZsMefQIn1RXUpfXltCYY7Y5xiogULfd1VnnK2nnycByMk-cvGKcAmh"
              width={32}
              height={32}
            />
            <span className="font-semibold text-lg tracking-tight text-gray-900 dark:text-white border-l pl-3 border-gray-300 dark:border-gray-700 ml-2">
              AI Coding Guide
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            >
              Start Her
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            >
              Processen
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            >
              Ressourcer
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            >
              FAQ
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400"
              onClick={toggleTheme}
            >
              <Icon>{mounted && theme === "dark" ? "light_mode" : "dark_mode"}</Icon>
            </button>
            <Button asChild className="hidden sm:inline-flex">
              <Link href="#">Log ind</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// components/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";
import { ConditionalSidebarProvider } from "@/components/conditional-sidebar-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ConditionalSidebarProvider>
            {children}
        </ConditionalSidebarProvider>
    </ThemeProvider>
  );
}

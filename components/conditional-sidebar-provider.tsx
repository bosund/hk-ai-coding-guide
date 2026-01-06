// components/conditional-sidebar-provider.tsx
"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export function ConditionalSidebarProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDocsPage = !['/'].includes(pathname);

  if (isDocsPage) {
    return (
      <SidebarProvider>
        <AppSidebar />
        <main className="flex-1 w-full">
          <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            <div className="flex h-14 items-center px-4 lg:px-6">
              <SidebarTrigger className="lg:hidden" />
              <div className="flex-1" />
            </div>
          </div>
          <div className="container mx-auto px-4 py-6 lg:px-8 lg:py-8">
            {children}
          </div>
        </main>
      </SidebarProvider>
    );
  }

  return <>{children}</>;
}

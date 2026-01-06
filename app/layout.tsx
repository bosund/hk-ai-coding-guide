import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HK's Guide til AI Coding",
  description: "Lær at bygge software med AI - ingen kodeerfaring nødvendig",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
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
        <Toaster />
      </body>
    </html>
  );
}

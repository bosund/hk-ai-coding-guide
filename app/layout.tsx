import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "HK's Guide til AI Coding",
    description: "Lær hvordan du effektivt integrerer kunstig intelligens i din udviklingsproces.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="da" suppressHydrationWarning>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </head>
            <body className={`bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 antialiased ${inter.variable}`}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}

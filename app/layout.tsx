import React from "react";
import { Metadata } from "next";

import './globals.css';
import { ThemeProvider, ThemeSwitch } from "./components/ThemeSwitch";
import { Navbar } from "./components/Navbar";

export const metadata: Metadata = {
    title: 'FabioTeles',
    description: 'Desenvolvedor Web FullStack',
}

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main className="absolute m-5 sm:m-3 inset-0 flex flex-col">
                        <Navbar />
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
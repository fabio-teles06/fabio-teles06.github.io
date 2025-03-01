import React from "react";
import { Metadata } from "next";

import './globals.css';

export const metadata : Metadata = {
    title: 'FabioTeles',
    description: 'Desenvolvedor Web FullStack',
}

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    );
}
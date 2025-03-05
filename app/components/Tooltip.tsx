import React from "react";

export default function Tooltip({ children, text }: { children: React.ReactNode; text: string }) {
    return (
        <div className="relative group">
            {children}
            <div className="absolute bg-black text-white text-xs rounded-lg p-2 -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {text}
            </div>
        </div>
    );
}
import React from "react";


export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">404</h1>
            <img src="/images/Astronauta.gif" alt="404" className="w-40 filter-none" />
            <p className="text-lg font-bold">Página não encontrada</p>
        </div>
    );
}
import Link from "next/link";
import React from "react";

export default function Page() {

    const habilities = [
        {
            name: "HTML",
            icon: "html5",
        },
        {
            name: "Next",
            icon: "next",
        },
        {
            name: "React",
            icon: "react",
        },
        {
            name: "Node",
            icon: "node",
        },
    ]

    return (
        <section className="flex flex-1 items-center">
            <img src="images/profile.jpg" alt="Profile Picture" className="rounded-full w-96" />

            <div className="ml-8">
                <h1 className="text-4xl font-bold">Fabio Teles</h1>
                <p className="text-2xl mt-4">Desenvolvedor Web FullStack</p>

                <div className="flex flex-wrap gap-3 mt-8">
                    {habilities.map((hability) => (
                        <div key={hability.name} className="flex items-center gap-2 bg-gray-200 p-2 rounded-md">
                            <img src={`images/icons/${hability.icon}.svg`} alt={hability.name} className="w-6 h-6" />
                            <span className="text-sm font-bold dark:text-black">{hability.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
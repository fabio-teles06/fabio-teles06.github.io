import Link from "next/link";
import React from "react";

import { stackIconsURL } from "./@types/StackIconsURL";
import Tooltip from "./components/Tooltip";

export default function Page() {

    const habilities = [
        {
            name: "html5",
            tooltip: "HTML"
        },
        {
            name: "css3",
            tooltip: "CSS"
        },
        {
            name: "javascript",
            tooltip: "JavaScript"
        },
        {
            name: "typescript",
            tooltip: "TypeScript"
        },
        {
            name: "react",
            tooltip: "React"
        },
        {
            name: "nextjs",
            tooltip: "Next.js"
        },
        {
            name: "nodejs",
            tooltip: "Node.js"
        },
        {
            name: "express",
            tooltip: "Express"
        },
        {
            name: "mongodb",
            tooltip: "MongoDB"
        },
        {
            name: "mysql",
            tooltip: "MySQL"
        },
        {
            name: "git",
            tooltip: "Git"
        },
        {
            name: "csharp",
            tooltip: "C#"
        },
        {
            name: "java",
            tooltip: "Java"
        }
    ];

    return (
        <section className="flex flex-1 items-center flex-col gap-8 md:flex-row md:gap-48 justify-evenly">
            <img src="images/profile.jpg" alt="Profile Picture" className="rounded-full w-60 m-3 md:w-96" />

            <div className="mx-3">
                <h1 className="text-4xl font-bold">Fabio Teles</h1>
                <p className="text-2xl mt-4">Desenvolvedor Web FullStack</p>

                <div className="flex flex-wrap gap-3 mt-8 max-w-xl">
                    {habilities.map((hability) => (
                        <Tooltip key={hability.name} text={hability.tooltip}>
                            <img src={stackIconsURL[hability.name]} alt={hability.name} className="dark:bg-white dark:p-1 dark:rounded-xl w-9 h-9" />
                        </Tooltip>
                    ))}
                </div>
            </div>


        </section>
    );
}
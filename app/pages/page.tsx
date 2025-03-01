import React from "react";
import ProjectView from "@/components/ProjectView";

export default function Page() {
    return (
        <div className="flex gap-4">
            <ProjectView project={{
                name: "AOCF",
                description: "Another Opengl Context Framework, é um framework para criação de aplicações gráficas utilizando OpenGL.",
                url: "https://github.com/fabio-teles06/aocf",
                //placeholder
                image: "https://placehold.co/600x400"
            }} />

            <ProjectView project={{
                name: "Portifólio",
                description: "Meu portifólio pessoal, onde compartilho meus projetos e experiências.",
                url: "https://github.com/fabio-teles06/fabio-teles06.github.io",
                //placeholder
                image: "https://placehold.co/600x400"
            }} />
        </div>
    )
}

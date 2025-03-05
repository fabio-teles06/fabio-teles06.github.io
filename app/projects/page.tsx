import ProjectView from "@/components/ProjectView";
import React from "react";

export default function Page() {
    return (
        <section className="flex-1 flex flex-col items-center gap-32">
            <h1 className="text-4xl font-bold">Projetos</h1>
            <div className="flex flex-wrap gap-8 m-4 items-stretch justify-center">
                <ProjectView
                    project={
                        {
                            name: "Portifólio",
                            description: "Meu portifólio pessoal utilizando Next.js e TailwindCSS.",
                            image: "https://github.com/fabio-teles06/portifolio/blob/main/foto.png?raw=true",
                            url: "https://github.com/fabio-teles06/portifolio",
                            tools: ["react", "nextjs", "tailwind"]
                        }
                    }
                />
                <ProjectView
                    project={
                        {
                            name: "AOCF",
                            description: "É um Biblioteca de criação de janelas com contexto OpenGL. O objetivo do projeto é aprender código de baixo nível e entender como funciona o OpenGL.",
                            url: "https://github.com/fabio-teles06/AOCF",
                            tools: ["c", "cpp"]
                        }
                    }
                />
            </div>
        </section>
    );
}
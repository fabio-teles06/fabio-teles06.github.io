import ProjectView from "@/components/ProjectView";
import React from "react";

export default function Page() {
    return (
        <section className="flex-1 flex flex-col items-center gap-32">
            <h1 className="text-4xl font-bold">Projetos</h1>
            <ProjectView 
                project={
                    {
                        name: "Portifólio",
                        description: "Meu portifólio pessoal",
                        image: "https://github.com/fabio-teles06/portifolio/foto.png",
                        url: "https://github.com/fabio-teles06/portifolio",
                        tools: ["react", "nextjs", "tailwind"]
                    }
                }
            />            
        </section>
    );
}
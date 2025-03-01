import React from "react";
import ProjectView from "@/components/ProjectView";

export default function Page(){    
    return (
        <ProjectView project={{
            name: "AOCF",
            description: "Another Opengl Context Framework, é um framework para criação de aplicações gráficas utilizando OpenGL.",
            url: "https://github.com/fabio-teles06/aocf"            
        }}/>
    )
}

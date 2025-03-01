import React from "react";

// project interface
interface Project {
    name: string;
    description: string;
    url: string;
}

export default function ProjectView({ project }: { project: Project }) {
    return (
        <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <a href={project.url}>Link</a>
        </div>
    );
}


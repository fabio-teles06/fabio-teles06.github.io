import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { stackIconsURL } from "@/@types/StackIconsURL";

// project interface
interface Project {
    name: string;
    description: string;
    image: string;
    url: string;
    tools: string[];
}

export default function ProjectView({ project }: { project: Project }) {
    return (
        <div className="flex flex-col items-center gap-4">
            <img src={project.image} alt={project.name} className="rounded-lg" />
            <h2 className="text-2xl font-bold">{project.name}</h2>
            <p className="text-center">{project.description}</p>
            <div className="flex gap-4">
                {project.tools.map(tool => (
                    <img key={tool} src={stackIconsURL[tool]} alt={tool} className="w-8 h-8" />
                ))}
            </div>
            <Link href={project.url}>
                <h6 className="flex items-center gap-2">
                    <FaGithub size={24} />
                    <span>Ver no Github</span>
                </h6>
            </Link>
        </div>
    );
}


import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { stackIconsURL } from "@/@types/StackIconsURL";
import Tooltip from "./Tooltip";

// project interface
interface Project {
    name: string;
    description: string;
    image?: string;
    url: string;
    tools: string[];
}

export default function ProjectView({ project }: { project: Project }) {
    return (
        <div className="flex flex-col border border-gray-700 rounded-lg p-4 dark:border-gray-200">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{project.name}</h2>
            </div>
            {project.image && (
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-40 object-cover mt-4 rounded-lg"
                />
            )}
            <div className="mt-4 max-w-52 flex-1">
                <p>{project.description}</p>
            </div>
            <div className="flex mt-4 justify-between items-end">
                <div className="flex items-center">
                    {project.tools.map((tool, index) => (
                        <Tooltip key={index} text={tool}>
                            <img
                                key={index}
                                src={stackIconsURL[tool]}
                                alt={tool}
                                className="h-6 w-6 mr-2 dark:bg-white dark:rounded-full dark:p-1"
                            />
                        </Tooltip>
                    ))}
                </div>
                <Link href={project.url} className="flex items-center gap-1 text-blue-600 dark:text-blue-300 hover:underline">
                    <FaGithub className="text-2xl cursor-pointer" />
                    Código
                </Link>
            </div>
        </div>
    );
}


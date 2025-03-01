import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

// project interface
interface Project {
    name: string;
    description: string;
    image: string;
    url: string;
}

export default function ProjectView({ project }: { project: Project }) {
    return (
        <div className="flex flex-col bg-white dark:bg-gray-800 w-full md:w-1/3 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.name}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <img src={project.image} alt={project.name} className="w-full h-56 object-cover rounded-lg mb-4 shadow-md" />
            <Link href={project.url} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-2 mt-auto">
                <FaGithub /> <span className="font-semibold">Código</span>
            </Link>
        </div>
    );
}


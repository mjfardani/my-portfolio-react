import React, { useState } from "react";
import { PROJECTS } from "../constants";

const Project = () => {
    const [activeTab, setActiveTab] = useState(0);

    // Group projects by category
    const categories = [...new Set(PROJECTS.map((project) => project.category))];

    return (
        <section className="max-w-6xl mx-auto py-12 px-4">
            {/* Title */}
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold mb-4">My Projects</h2>
                <p className="text-gray-600">
                    Explore some of my work across various categories, including web
                    development, design, and more.
                </p>
            </div>

            {/* Tabs */}
            <ul className="inline-flex space-x-2 mb-4 min-w-max">
                {categories.map((category, index) => (
                    <li key={index} className="flex-shrink-0">
                        <input
                            className="peer sr-only"
                            type="radio"
                            name="tabs"
                            id={`tab-${index}`}
                            checked={activeTab === index}
                            onChange={() => setActiveTab(index)}
                        />
                        <label
                            htmlFor={`tab-${index}`}
                            className="flex justify-center items-center cursor-pointer rounded-full border border-gray-300 bg-white py-1 sm:py-2 px-3 sm:px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-300 ease-in-out text-xs sm:text-sm whitespace-nowrap"
                        >
                            {category}
                        </label>
                    </li>
                ))}
            </ul>


            {/* Projects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.filter(
                    (project) => project.category === categories[activeTab]
                ).map((project, index) => (
                    <div
                        key={index}
                        className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((technology, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;

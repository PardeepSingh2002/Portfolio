import React from "react";

const projects = [
    {
        title: "Flipkart Clone",
        description: "A responsive e-commerce web portal built with Next.js and PostgreSQL.",
        image: "/project1.png", // Replace with your image path
        link: "https://flipcard-portal-seven.vercel.app",
    },
    {
        title: "Notes App",
        description: "Flutter CRUD notes app using Hive for local storage.",
        image: "/project2.png",
        link: "https://your-notes-app-link.com",
    },
    {
        title: "Portfolio Website",
        description: "Modern developer portfolio made with React and Tailwind CSS.",
        image: "/project3.png",
        link: "https://your-portfolio-link.com",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 bg-gray-950 text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center text-white">My Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="mt-2 text-gray-400">{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

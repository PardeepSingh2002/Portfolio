import React from "react";
import { motion } from "framer-motion";

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "Git & GitHub",
];

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center px-6 py-16 bg-white text-gray-800"
        >
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex justify-center"
                >
                    <img
                        src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
                        alt="Developer"
                        className="w-80 h-auto rounded-xl shadow-lg"
                    />
                </motion.div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-lg mb-6">
                        I'm a full-stack developer passionate about building responsive and
                        user-friendly web applications. I enjoy using React, Next.js, and
                        backend tech like Node.js & PostgreSQL to turn ideas into digital
                        experiences.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-center font-medium text-sm"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

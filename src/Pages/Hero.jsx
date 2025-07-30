import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-indigo-800 text-white px-6"
        >
            <div className="text-center max-w-2xl">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                >
                    Hi, I'm Pardeep Singh
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-200 mb-8"
                >
                    A passionate Full Stack Developer crafting modern web experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-purple-100 transition-all duration-300"
                    >
                        View Projects
                    </a>

                    <a
                        href="/PardeepCvv.pdf"
                        download
                        className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-purple-700 transition-all duration-300"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

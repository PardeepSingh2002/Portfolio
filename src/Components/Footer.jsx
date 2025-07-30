import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Pardeep Singh. All rights reserved.</p>
                <div className="flex space-x-4 mt-3 md:mt-0">
                    <a
                        href="https://github.com/pardeepyourgithub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pardeepyourlinkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:pardeepjandmangholi@gmail.com"
                        className="hover:text-blue-400 transition"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

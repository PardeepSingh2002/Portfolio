import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false); // close mobile menu after click
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50 shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <h1 className="text-white text-xl font-bold cursor-pointer" onClick={() => handleScroll("hero")}>
                    Pardeep Singh
                </h1>
                <div className="hidden md:flex space-x-8 text-gray-300 text-sm font-medium">
                    <button onClick={() => handleScroll("about")} className="hover:text-white">About</button>
                    <button onClick={() => handleScroll("projects")} className="hover:text-white">Projects</button>
                    <button onClick={() => handleScroll("contact")} className="hover:text-white">Contact</button>
                </div>
                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-black bg-opacity-95 px-4 pb-4 space-y-3 text-gray-300 text-sm font-medium">
                    <button onClick={() => handleScroll("about")} className="block w-full text-left hover:text-white">About</button>
                    <button onClick={() => handleScroll("projects")} className="block w-full text-left hover:text-white">Projects</button>
                    <button onClick={() => handleScroll("contact")} className="block w-full text-left hover:text-white">Contact</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

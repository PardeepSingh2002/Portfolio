import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 md:px-16 bg-gray-950 text-white">
            <h2 className="text-4xl font-bold text-center mb-12">📬 Contact Me</h2>

            <div className="max-w-3xl mx-auto text-center">
                <p className="text-gray-300 text-lg mb-8">
                    Got a project idea or want to work together? Let’s talk! I’m available for freelance, internships, and full-time roles.
                </p>

                <div className="flex flex-col items-center space-y-4">
                    <p className="text-lg">
                        📧 <strong>Email:</strong>{" "}
                        <a href="mailto:pardeepjandmangholi@gmail.com" className="text-indigo-400 hover:underline">
                            pardeepjandmangholi@gmail.com
                        </a>
                    </p>

                    <p className="text-lg">
                        📱 <strong>Phone:</strong>{" "}
                        <a href="tel:+919817668496" className="text-indigo-400 hover:underline">
                            +91 98176 68496
                        </a>
                    </p>

                    <p className="text-lg">
                        🌐 <strong>LinkedIn:</strong>{" "}
                        <a
                            href="https://linkedin.com/in/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:underline"
                        >
                            linkedin.com/in/your-profile
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;

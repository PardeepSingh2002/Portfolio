import React from 'react';
import './index.css';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Hero from './Pages/Hero.jsx';
import About from './Pages/About.jsx';
import Projects from './Pages/Projects.jsx';
import Contact from './Pages/Contact.jsx';

function App() {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white font-sans scroll-smooth">
      <Navbar />

      <div className="pt-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}

export default App;

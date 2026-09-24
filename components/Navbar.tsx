'use client';

import Linker from "./Linker";
import React, { useState } from 'react'; // Import useState
import { FaBars, FaTimes } from 'react-icons/fa'; // Import necessary icons


export default function Navbar({NavList}: {NavList: string[]}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="
          animate-fade-in-slow
          animate-slide-in-top-fast
          bg-neutral-950
          shadow-xl/30
          sticky
          top-0
          z-50
          border-b
          border-neutral-800/70"> {/* Updated classes */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            {/* Logo/Branding Area */}
            <Linker link="/" className="flex items-center space-x-2 hover:cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-in-out">
                <div>
                    <h1 className="text-2xl tracking-wider text-shadow-2xl">Graves Technology</h1> {/* Keep branding color */}
                    <h3 className="text-sm text-gray-700 hover:text-blue-400 transition-colors duration-300">"Bring your tech back from the grave."</h3>
                </div>
            </Linker>

            {/* Desktop Navigation (Visible on large screens) */}
            <nav className="hidden lg:block">
                <ul className="flex space-x-4">
                  {NavList.map((item, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
            </nav>

            {/* Mobile Menu Button (Visible on small screens) */}
            <div className="lg:hidden flex items-center space-x-4">
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div >

        {/* Mobile Menu Dropdown (Visible on small screens) */}
        <div 
            className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
            <nav className="flex flex-col space-y-2">
                {NavList.map((item, index) => (
                    <Linker 
                        key={index} 
                        link="#"
                        onClick={() => setIsMenuOpen(false)} // Close menu on click
                        className="pl-5 block text-gray-300 hover:text-white transition-colors duration-300 py-2 border-b border-neutral-800/50"
                    >
                        {item}
                    </Linker>
                ))}
            </nav>
        </div>

      </header>
    );
}

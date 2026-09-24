import Link from "next/link";
import Linker from "./Linker";


export default function Navbar({NavList}: {NavList: string[]}) {
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
          <Linker link="/" className="flex items-center space-x-2 hover:cursor-pointer hover:text-blue-400 transition-colors duration-300 ease-in-out">
                <div>
                    <h1 className="text-2xl tracking-wider text-shadow-2xl">Graves Technology</h1> {/* Keep branding color */}
                    <h3 className="text-sm text-gray-700 hover:text-blue-400 transition-colors duration-300">"Bring your tech back from the grave."</h3>
                </div>
            </Linker>
          <nav>
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
        </div>
      </header>
    );
}
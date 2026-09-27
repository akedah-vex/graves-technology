import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FaApple, FaGoogle } from "react-icons/fa";

export default function login() {
  const NavList = ['Home', 'Services', 'About', 'Contact'];

  return (
    <div className="min-h-screen bg-neutral-950 text-white"> {/* Changed background to near-black */}
      {/* 1. Navigation Placeholder */}
      <Navbar NavList={NavList} />
      <section className="bg-neutral-950 pt-32 pb-48 text-white border-b border-neutral-800/70 min-h-[75vh] flex "> {/* Updated classes */}
        <div className="animate-fade-in-slow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-left items-start text-left"> {/* Updated classes */}
          <h1 className="text-shadow-2xl animate-slide-in-top text-5xl md:text-8xl tracking-tight mb-4 leading-tight bg-clip-text justify-left"> {/* Keep gradient styling */}
            CLIENT LOGIN
          </h1>
          <div className="animate-fade-in">
            <p className="mt-4 text-xl md:text-2xl max-w-2xl  text-gray-400 mb-10"> {/* Use standard text classes */}
              Please enter your credentials to access the client portal.
            </p>
            <form className="flex flex-col space-y-4">
                <input type="text" placeholder="Username" className="p-2 rounded bg-neutral-1000 text-white text-center border border-neutral-700 focus:" />
                <input type="password" placeholder="Password" className="p-2 rounded bg-neutral-1000 text-white text-center border border-neutral-700" />
                <Button className="border p-4 pl-10 pr-10 hover:cursor-pointer hover:text-green-300 transition-colors duration-300 ease-in-out">
                    <p className="">
                        LOGIN
                    </p>
                </Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
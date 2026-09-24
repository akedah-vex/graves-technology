'use client';

import Link from 'next/link';
import Button from '@/components/Button'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white"> {/* Changed background to near-black */}
      {/* 1. Navigation Placeholder */}
      <Navbar NavList={['Home', 'Services', 'About', 'Contact', 'Client Login']} />

      {/* 2. Hero Section */}
      <section className="bg-neutral-950 pt-32 pb-48 text-white border-b border-neutral-800/70 min-h-[75vh] flex "> {/* Updated classes */}
        <div className="animate-fade-in-slow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-left items-start text-left"> {/* Updated classes */}
          {/* NEW BRANDING ELEMENT HERE */}
          <h1 className="text-shadow-2xl animate-slide-in-left text-5xl md:text-8xl tracking-tight mb-4 leading-tight bg-clip-text justify-left"> {/* Keep gradient styling */}
            GRAVES<br />TECHNOLOGY
          </h1>

          {/* Original Headline */}
          <h2 id="spinner" className="animate-slide-in-right text-5xl md:text-5xl pb-10 pt-5 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-red-400 "> {/* Keep gradient styling */}
            Keep your technology<br/>sovereign
          </h2>
          <div className="animate-fade-in">
            <p className="mt-4 text-xl md:text-2xl max-w-2xl  text-gray-400 mb-10"> {/* Use standard text classes */}
              Graves Technology provides trusted IT support for families and households, restoring peace of mind through expert care and digital sovereignty.
            </p>
            <p className="mt-4 text-xl md:text-2xl max-w-2xl text-gray-400 mb-10"> {/* Use standard text classes */}
              Now serving the Sutter and Butte County regions. <br /> Headquartered locally in Live Oak, CA.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="/login">
              <Button className="border p-4 pl-10 pr-10 hover:cursor-pointer hover:text-green-300 transition-colors duration-300 ease-in-out">
                <p className="">
                  CLIENT LOGIN
                </p>
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="border p-4 pl-10 pr-10 hover:cursor-pointer hover:text-blue-500 transition-colors duration-300 ease-in-out">
                <p className="">
                  CONTACT US
                </p>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}

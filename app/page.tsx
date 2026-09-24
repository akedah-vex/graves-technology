import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white"> {/* Changed background to near-black */}
      {/* 1. Navigation Placeholder */}
      <header className="bg-neutral-900 shadow sticky top-0 z-50 border-b border-neutral-800/70"> {/* Updated classes */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl tracking-wider">Graves Technology</h1> {/* Keep branding color */}
          <nav>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="bg-neutral-950 pt-32 pb-48 text-white border-b border-neutral-800/70 min-h-[75vh] flex items-center"> {/* Updated classes */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center items-center">
          {/* NEW BRANDING ELEMENT HERE */}
          <h1 className="text-5xl md:text-8xl pb-10 tracking-tight mb-4 leading-tight bg-clip-text"> {/* Keep gradient styling */}
            Graves Technology
          </h1>
          <p className="md:absolute top-76 right-90 text-gray-400">"Bring your tech back from the grave."</p>
          {/* Original Headline */}
          <h2 className="text-5xl md:text-5xl pb-10 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-red-400"> {/* Keep gradient styling */}
            Your Digital Life, Under Your Control.
          </h2>
          <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto text-gray-400 mb-10"> {/* Use standard text classes */}
            Graves Technology provides trusted IT support for families and households, restoring peace of mind through expert care and digital sovereignty.
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-500 mb-12"> {/* Use standard text classes */}
            Now serving the Sutter and Butte County regions. <br /> Headquartered locally in Live Oak, CA.
          </p>
          <div className="flex justify-center space-x-4">

          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-neutral-950 text-gray-600 py-8 border-t border-indigo-900/70"> {/* Updated classes */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Graves Technology. All rights reserved. | Dedicated to your digital sovereignty.
        </div>
      </footer>
    </div>
  );
}

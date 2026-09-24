import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 font-sans text-white"> {/* Base background remains deep black */}
      {/* 1. Navigation Placeholder */}
      <header className="bg-gray-900 shadow sticky top-0 z-50 border-b border-gray-800/70"> {/* Softer, neutral border */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400 tracking-wider">Graves Technology</h1> {/* Changed accent color to blue */}
          <nav>
            <Link href="#services" className="ml-6 text-gray-300 hover:text-blue-400 transition duration-150">Services</Link>
            <Link href="#sovereignty" className="ml-6 text-gray-300 hover:text-blue-400 transition duration-150">Sovereignty</Link>
            <Link href="#contact" className="ml-6 px-4 py-2 bg-indigo-800/70 text-white rounded-md hover:bg-indigo-700 transition duration-150 shadow-lg shadow-indigo-900/50">Get Support</Link>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="bg-gray-950 pt-32 pb-48 text-white border-b border-gray-900/70 min-h-[75vh] flex items-center"> {/* Neutralized border */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center items-center">
          {/* NEW BRANDING ELEMENT HERE */}
          <h1 className="text-5xl md:text-7xl pb-6 pt-10 font-extrabold tracking-tight mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"> {/* Softened gradient */}
            Graves Technology
          </h1>
          {/* Original Headline */}
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-widest mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"> {/* Softened gradient */}
            Your Digital Life, Under Your Control.
          </h2>
          <p className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto text-gray-400 mb-10"> {/* Slightly lighter gray for softer look */}
            Graves Technology provides trusted IT support for families and households, restoring peace of mind through expert care and digital sovereignty.
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-500 mb-12"> {/* Reduced size/intensity */}
            Now serving the Sutter and Butte County regions. <br /> Headquartered locally in Live Oak, CA.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="#contact" className="px-8 py-3 text-lg font-medium rounded-md shadow-xl bg-indigo-600 hover:bg-indigo-500 transition duration-150 transform hover:scale-[1.02] border border-blue-400/50">
              Book a Consultation Today
            </Link>
            <Link href="#services" className="px-8 py-3 text-lg font-medium rounded-md shadow-xl border-2 border-gray-700 text-white hover:bg-indigo-900/50 transition duration-150 transform hover:scale-[1.02]">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Core Services Section */}
      <section id="services" className="py-24 bg-gray-950/70 border-t border-b border-gray-800/30"> {/* Neutralized background and border */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-base text-blue-400 tracking-wider uppercase font-semibold mb-2">Our Expertise</h2> {/* Blue accent */}
          <p className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-12">
            Comprehensive Support for Every Digital Need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Reduced gap slightly */}
            {/* Service Card 1: Repair/Building */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(79,70,229,0.1)] transition duration-300 border-t-4 border-blue-500/50"> {/* Softened glow and background */}
              <h3 className="text-2xl font-bold text-blue-300 mb-3">PC Repair & Restoration</h3>
              <p className="text-gray-400 mb-4">From diagnosing mysterious slowdowns to building custom, powerful machines. We keep your technology running smoothly and reliably.</p>
              <button className="text-blue-400 font-medium hover:underline flex items-center justify-end">Learn More &rarr;</button>
            </div>

            {/* Service Card 2: Data Recovery */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(79,70,229,0.1)] transition duration-300 border-t-4 border-blue-500/50">
              <h3 className="text-2xl font-bold text-blue-300 mb-3">Data & Photo Recovery</h3>
              <p className="text-gray-400 mb-4">Accidentally deleted files or dead drives? We specialize in recovering precious memories and critical data, depending on the drive's condition.</p>
              <button className="text-blue-400 font-medium hover:underline flex items-center justify-end">Get a Quote &rarr;</button>
            </div>

            {/* Service Card 3: Consultation */}
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(79,70,229,0.1)] transition duration-300 border-t-4 border-blue-500/50">
              <h3 className="text-2xl font-bold text-blue-300 mb-3">Tech Consultation</h3>
              <p className="text-gray-400 mb-4">Got a general problem you think technology can solve? We provide expert advice to map your needs to the perfect digital solution.</p>
              <button className="text-blue-400 font-medium hover:underline flex items-center justify-end">Book Advice Call &rarr;</button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Sovereignty Focus Section */}
      <section id="sovereignty" className="py-24 bg-gray-950/80 border-t border-b border-indigo-700/30"> {/* Neutralized background and border */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-base text-blue-400 tracking-wider uppercase font-semibold mb-2">Digital Freedom</h2> {/* Blue accent */}
          <p className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300"> {/* Softened gradient */}
            Reclaim Your Data Sovereignty.
          </p>
          <p className="max-w-3xl mx-auto text-xl text-gray-400 mb-10">
            In a connected world, control is paramount. We help you establish self-hosted server infrastructure and sovereign computing solutions, ensuring your data remains private, secure, and yours alone.
          </p>
          <Link href="#contact" className="inline-block px-10 py-3 text-lg font-medium rounded-md shadow-xl bg-indigo-600 hover:bg-indigo-500 transition duration-150 transform hover:scale-[1.02] border border-blue-400/50">
            Discuss Sovereign Solutions
          </Link>
        </div>
      </section>

      {/* 5. Call to Action / Contact Section */}
      <section id="contact" className="py-24 bg-gray-950 border-t border-indigo-800/30"> {/* Neutralized background and border */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-base text-blue-400 tracking-wider uppercase font-semibold mb-2">Ready to Get Started?</h2> {/* Blue accent */}
          <p className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300"> {/* Softened gradient */}
            Let's Talk Technology.
          </p>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Whether it's a simple repair or complex data architecture, our family-focused approach guarantees reliable and trustworthy support every time.
          </p>

          {/* Placeholder for actual contact form/details */}
          <div className="bg-gray-900 p-12 rounded-xl shadow-lg border border-indigo-800/50"> {/* Removed glow, used subtle border */}
            <h3 className="text-3xl font-bold text-blue-300 mb-4">Contact Us</h3>
            <p className="mb-6 text-gray-300">Call us at (555) 123-GRAVES or email support@gravestech.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-600 py-8 border-t border-indigo-900/70"> {/* Adjusted footer color and text */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Graves Technology. All rights reserved. | Dedicated to your digital sovereignty.
        </div>
      </footer>
    </div>
  );
}

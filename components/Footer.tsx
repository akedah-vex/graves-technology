

export default function Footer () {
    return (
        <footer className="bg-neutral-950 text-gray-600 py-8 border-t border-indigo-900/70"> {/* Updated classes */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
                &copy; {new Date().getFullYear()} Graves Technology. All rights reserved. | Dedicated to your digital sovereignty.
            </div>
        </footer>
    );
}
import Link from "next/link";

export default function Navbar() {
  return (
    // Height controlled by the container's vertical padding (py-8)
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0F0F1A]/80 backdrop-blur-md">
      {/* Max-width increased to 1400px for a more expansive feel */}
      <div className="max-w-[1400px] mx-auto flex items-center justify-between py-8 px-6 md:px-12">
        
        <Link href="/" className="group flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-500 to-violet-600 shadow-lg shadow-pink-500/20" />
          <span className="text-2xl font-extrabold tracking-tighter text-white transition-colors group-hover:text-pink-400">
            Timepass <span className="text-pink-500">Pvt. Ltd.</span>
          </span>
        </Link>

        {/* Navigation Links - Increased gap and font weight */}
        <ul className="hidden lg:flex items-center gap-12 text-sm font-bold uppercase tracking-[0.2em] text-gray-300">
          <li>
            <Link href="/about" className="relative transition-colors hover:text-white group">
              About
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li>
            <Link href="/services" className="relative transition-colors hover:text-white group">
              Services
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
          <li>
            <Link href="/team" className="relative transition-colors hover:text-white group">
              Team
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        </ul>

        {/* Call to Action Button - Larger padding and text */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-pink-600 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-pink-500 hover:shadow-[0_0_20px_rgba(219,39,119,0.4)] active:scale-95"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white cursor-pointer p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>

      </div>
    </nav>
  );
}
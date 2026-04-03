import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 bg-[#0F0F1A] pt-16 pb-8 text-gray-400">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-pink-500 to-violet-600" />
              <span className="text-xl font-bold tracking-tighter text-white">
                Timepass <span className="text-pink-500">Pvt. Ltd.</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              Elevating digital experiences through innovative design and cutting-edge technology. Let's build the future together.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-pink-400 transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-pink-400 transition-colors">Our Team</Link></li>
              <li><Link href="/careers" className="hover:text-pink-400 transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-pink-400 transition-colors">News & Blog</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/ui-ux" className="hover:text-pink-400 transition-colors">UI/UX Design</Link></li>
              <li><Link href="/development" className="hover:text-pink-400 transition-colors">Web Development</Link></li>
              <li><Link href="/marketing" className="hover:text-pink-400 transition-colors">Digital Marketing</Link></li>
              <li><Link href="/consulting" className="hover:text-pink-400 transition-colors">Consultancy</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated with our latest projects.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-pink-500 transition-colors"
              />
              <button className="bg-pink-600 hover:bg-pink-500 text-white text-sm font-bold py-2 rounded-lg transition-all active:scale-95">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Timepass Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="text-xs hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
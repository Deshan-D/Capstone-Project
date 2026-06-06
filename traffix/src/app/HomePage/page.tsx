import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
 const navLinks = ['Dashboard', 'LiveCamera', 'Analytics', 'Settings', 'Login'];;

  return (
    <main className="relative min-h-screen bg-neutral-950 font-sans text-neutral-100 antialiased">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg" 
          alt="Out-of-focus city lights at night"
          fill
          className="object-cover opacity-70 blur-[1px]"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-neutral-950/60 via-neutral-950/80 to-neutral-950" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        <nav className="bg-black/40 backdrop-blur-md border-b border-white/5 px-4 py-3 md:px-8 shadow-lg w-full">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png" 
                alt="TraffiX Logo"
                width={56}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </div>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/Dashboard" className="text-sm font-medium text-lime-400 hover:text-lime-100 transition tracking-wide">Dashboard</Link>
              <Link href="/LiveCamera" className="text-sm font-medium text-lime-400 hover:text-lime-100 transition tracking-wide">Camera</Link>
              <Link href="/Analytics" className="text-sm font-medium text-lime-400 hover:text-lime-100 transition tracking-wide">Analytics</Link>
              <Link href="/Settings" className="text-sm font-medium text-lime-400 hover:text-lime-100 transition tracking-wide">Settings</Link>
              <Link href="/PanelAccess" className="text-sm font-medium text-lime-400 hover:text-lime-100 transition tracking-wide">Login</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-lime-400 hover:text-lime-100"
              title="Open Mobile Menu"
              aria-label="Open Mobile Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        <div className="grow flex items-center p-6 md:p-12 lg:p-20">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 drop-shadow-lg">
              <span className="text-lime-400">T</span>raffi
              <span className="text-lime-400">X</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-neutral-300 leading-relaxed font-light drop-shadow-md">
              An AI-powered traffic monitoring system designed to transform how cities manage intersections.
              Using real-time video analytics, TraffiX automatically detects traffic and pedestrian
              violations—like red-light jumping, illegal turns, and crosswalk blocking—and instantly
              alerts authorities.
            </p>
          </div>
        </div>

        
        <footer className="mt-auto py-6 border-t border-neutral-800/50 bg-neutral-900/60 backdrop-blur-sm relative z-10">
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
            <Link href="/ContactUs">
              <h2 className="text-2xl font-bold text-lime-400 hover:text-lime-300 transition-colors cursor-pointer mb-2 inline-block">
                Contact Us
              </h2>
            </Link>
            <p className="text-xs text-neutral-500 font-light tracking-wide">
              All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
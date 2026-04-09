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

      </div>
    </main>
  );
}
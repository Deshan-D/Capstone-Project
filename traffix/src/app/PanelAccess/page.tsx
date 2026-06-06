import Image from 'next/image';
import Link from 'next/link';

export default function PanelAccess() {
  return (
    <div className="min-h-screen bg-[#111111] text-neutral-200 font-sans flex flex-col">
      {/* Top Header Bar */}
      <header className="flex justify-between items-center p-4 border-b border-neutral-800 bg-[#161616]">
        <h1 className="text-xl font-semibold text-neutral-400">Panel Access</h1>
        <div className="bg-lime-500/20 p-2 rounded text-lime-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 mt-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 flex flex-col items-center">
          <Image
            src="/logo.png" // Ensure your logo is in the public folder
            alt="TraffiX Logo"
            width={120}
            height={60}
            className="mb-6 object-contain"
          />
          <h2 className="text-3xl font-bold text-white tracking-wide mb-2">
            AI TRAFFIC SYSTEM
          </h2>
          <p className="text-sm text-neutral-400 tracking-wider">
            Institutional Control Gateway
          </p>
        </div>

        {/* Section Title */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h3 className="text-lg font-medium text-neutral-300 mb-3">
            Select Authorized Personnel Access
          </h3>
          <div className="w-12 h-1 bg-lime-500 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          
          {/* System Administrator Card */}
          <div className="relative flex flex-col border border-neutral-700 bg-[#161616] rounded-xl p-8 hover:border-lime-500 transition-colors group">
            {/* Top Right Gear Icon */}
            <div className="absolute top-4 right-4 text-lime-400">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            
            <div className="flex-grow flex flex-col items-center text-center">
              {/* Shield Icon */}
              <div className="w-16 h-16 rounded-full bg-[#243319] flex items-center justify-center text-lime-400 mb-6">
                 <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">System Administrator</h4>
              <p className="text-sm text-neutral-400 leading-relaxed mb-8 px-2">
                Access system-wide configurations, neural network parameters, and user permission management for the national grid.
              </p>
            </div>
            
            {/* Using a Link component pointing to your AdminSignIn folder */}
            <Link href="/AdminSignIn" className="w-full">
              <button className="w-full bg-lime-400 hover:bg-lime-500 text-neutral-950 font-bold py-3 px-4 rounded text-sm transition-colors flex items-center justify-center gap-2">
                Authenticate Admin 
                <span aria-hidden="true">&gt;</span>
              </button>
            </Link>
          </div>

          {/* Traffic Police Officer Card */}
          <div className="relative flex flex-col border border-neutral-700 bg-[#161616] rounded-xl p-8 hover:border-lime-500 transition-colors group">
            {/* Top Right Traffic Light Icon */}
            <div className="absolute top-4 right-4 text-lime-400">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <rect x="9" y="2" width="6" height="20" rx="2" strokeWidth={2} />
                 <circle cx="12" cy="7" r="1.5" fill="currentColor" />
                 <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                 <circle cx="12" cy="17" r="1.5" fill="currentColor" />
              </svg>
            </div>
            
            <div className="flex-grow flex flex-col items-center text-center">
              {/* Shield Icon with Star */}
              <div className="w-16 h-16 rounded-full bg-[#243319] flex items-center justify-center text-lime-400 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Traffic Police Officer</h4>
              <p className="text-sm text-neutral-400 leading-relaxed mb-8 px-2">
                Monitor live camera feeds, manage violation reports, and execute emergency manual overrides for traffic flow.
              </p>
            </div>
            
            {/* Using a Link component pointing to your OfficerSignIn folder */}
            <Link href="/OfficerSignIn" className="w-full">
              <button className="w-full bg-lime-400 hover:bg-lime-500 text-neutral-950 font-bold py-3 px-4 rounded text-sm transition-colors flex items-center justify-center gap-2">
                Log in as Officer
                <span aria-hidden="true">&gt;</span>
              </button>
            </Link>
          </div>

        </div>
      </main>

      {/* Footer Section */}
      <footer className="w-full text-center p-8 mt-auto flex flex-col items-center">
        <p className="text-xs text-neutral-500 mb-4 max-w-2xl">
          Protected by TraffiX Advanced Encryption Standard. All activities are logged under institutional security protocols.
        </p>
        <div className="flex items-center gap-6 text-xs font-bold text-neutral-400 tracking-wider">
          <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
          <a href="#" className="hover:text-white transition-colors">SYSTEM STATUS</a>
          <a href="#" className="hover:text-white transition-colors">SUPPORT DESK</a>
        </div>
      </footer>
    </div>
  );
}
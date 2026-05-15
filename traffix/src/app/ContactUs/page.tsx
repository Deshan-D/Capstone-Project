import Image from 'next/image';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#111111] text-neutral-200 font-sans flex flex-col">
      
      <header className="bg-[#1e1e1e] border-b border-neutral-800 px-6 py-3 flex justify-between items-center z-10">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="TraffiX Logo" 
            width={120} 
            height={40} 
            className="object-contain" 
          />
        </div>
        
        <Link href="/">
          <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-1.5 px-4 rounded flex items-center gap-2 text-sm transition-colors shadow-lg shadow-lime-500/20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </button>
        </Link>
      </header>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <main className="flex-grow flex items-center justify-center p-6">
        
        <div className="w-full max-w-3xl bg-[#161616] border border-neutral-800 rounded-xl p-8 md:p-12 shadow-2xl relative">
          
          <div className="flex justify-center mb-8">
            <div className="border border-lime-500/30 bg-black px-6 py-1.5 rounded-lg shadow-[0_0_15px_rgba(163,230,53,0.1)]">
              <h1 className="text-xl font-bold text-lime-400 tracking-wide">
                Contact Us
              </h1>
            </div>
          </div>
          
          <div className="text-center mb-10">
            <h2 className="text-lg font-bold text-neutral-300 mb-1">TraffiX Traffic Monitoring System</h2>
            <p className="text-sm text-neutral-400 font-medium">Department of Computing & Information Systems</p>
            <p className="text-sm text-neutral-400 font-medium">Faculty of Computing</p>
            <p className="text-sm text-neutral-400 font-medium">Sabaragamuwa University of Sri Lanka</p>
          </div>

          {/* Contact Details Grid */}
          <div className="space-y-6 max-w-lg mx-auto md:pl-16">
            
            <div>
              <h3 className="text-lime-500 font-bold text-sm flex items-center gap-2 mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Email Support
              </h3>
              <div className="pl-6 space-y-1">
                <p className="text-sm font-bold text-white tracking-wide">traffix.support@gmail.com</p>
                <p className="text-sm font-bold text-white tracking-wide">traffix.cis@sab.ac.lk</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lime-500 font-bold text-sm flex items-center gap-2 mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Phone Support
              </h3>
              <div className="pl-6 space-y-1">
                <p className="text-sm font-bold text-white tracking-wide">+94 XXXXXXXXX</p>
                <p className="text-sm font-bold text-white tracking-wide">+94 XXXXXXXXX</p>
              </div>
            </div>

            <div>
              <h3 className="text-lime-500 font-bold text-sm flex items-center gap-2 mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                System Support Portal
              </h3>
              <div className="pl-6">
                <p className="text-sm font-bold text-white tracking-wide hover:text-lime-400 cursor-pointer transition-colors">
                  www.traffix-monitoring.lk
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lime-500 font-bold text-sm flex items-center gap-2 mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Address
              </h3>
              <div className="pl-6 space-y-0.5">
                <p className="text-sm font-bold text-white">Department of Computing & Information Systems</p>
                <p className="text-sm font-bold text-white">Faculty of Computing</p>
                <p className="text-sm font-bold text-white">Sabaragamuwa University of Sri Lanka</p>
                <p className="text-sm font-bold text-white">Belihuloya, Sri Lanka</p>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
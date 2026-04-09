
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
    </div>
  );
}
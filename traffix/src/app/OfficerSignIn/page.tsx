import Image from 'next/image';
import Link from 'next/link';

export default function OfficerSignIn() {
  return (
    <div className="min-h-screen bg-[#111111] text-neutral-200 font-sans flex flex-col items-center justify-center p-6 relative">
      <div className="w-full max-w-md bg-[#161616] border border-neutral-800 rounded-xl pt-8 pb-6 px-6 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <Image src="/logo.png" alt="TraffiX Logo" width={140} height={40} className="mb-4 object-contain" />
          <h2 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Field Portal Access</h2>
        </div>

        
        <div className="flex w-full mb-8">
          <Link href="/OfficerSignIn" className="flex-1 text-center pb-3 border-b-2 border-lime-400 text-lime-400 text-xs font-bold tracking-wider">
            SIGN IN
          </Link>
          <Link href="/OfficerSignUp" className="flex-1 text-center pb-3 border-b border-neutral-700 text-neutral-500 hover:text-neutral-300 text-xs font-bold tracking-wider transition-colors">
            SIGN UP
          </Link>
        </div>

       
        <div className="space-y-4">
          <div>
            <label className="block text-xs text-white mb-1.5 font-medium">Name with Initials</label>
            <div className="flex items-center bg-black border border-neutral-800 rounded px-3 py-2.5">
              <span className="text-lime-500 mr-3">👤</span>
              <input type="text" placeholder="e.g. A.B.C. Perera" className="bg-transparent w-full text-sm text-white focus:outline-none placeholder-neutral-600" />
            </div>
          </div>

          <div>
            <label className="block text-xs text-white mb-1.5 font-medium">ID Number</label>
            <div className="flex items-center bg-black border border-neutral-800 rounded px-3 py-2.5">
              <span className="text-lime-500 mr-3">🆔</span>
              <input type="text" placeholder="xxxxxxxxxxxx" className="bg-transparent w-full text-sm text-white focus:outline-none placeholder-neutral-600" />
            </div>
          </div>

          <div>
            <label className="block text-xs text-white mb-1.5 font-medium">Mobile Number</label>
            <div className="flex items-center bg-black border border-neutral-800 rounded px-3 py-2.5">
              <span className="text-lime-500 mr-3">📱</span>
              <input type="text" placeholder="07XXXXXXXX" className="bg-transparent w-full text-sm text-white focus:outline-none placeholder-neutral-600" />
            </div>
          </div>

          <button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-bold py-3 mt-6 rounded text-sm transition-colors flex items-center justify-center gap-2 tracking-wide">
            DUTY LOGIN ➔
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-[10px] text-neutral-500">Forgot Password or Reset Index? Contact IT Support</p>
          <Link href="/PanelAccess" className="text-[10px] text-lime-500 hover:text-lime-400 mt-3 inline-block font-medium">
            &larr; Return to Panel Access
          </Link>
        </div>
      </div>

      <div className="absolute bottom-4 w-full text-center border-t border-dashed border-neutral-700 pt-4 px-4">
        <p className="text-[8px] tracking-widest text-neutral-500 uppercase">This is a restricted government system. Unauthorized access is strictly prohibited and subject to legal action.</p>
      </div>
    </div>
  );
}
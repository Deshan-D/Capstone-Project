import Image from 'next/image';
import Link from 'next/link';

export default function AdminSignUp() {
  return (
    <div className="min-h-screen bg-[#111111] text-neutral-200 font-sans flex flex-col items-center justify-center p-6 relative">
      <div className="w-full max-w-md bg-[#161616] border border-neutral-800 rounded-xl pt-8 pb-6 px-6 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <Image src="/logo.png" alt="TraffiX Logo" width={140} height={40} className="mb-4 object-contain" />
          <h2 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Admin Secure Portal</h2>
        </div>

        {/* Tabs */}
        <div className="flex w-full mb-6">
          <Link href="/AdminSignIn" className="flex-1 text-center pb-3 border-b border-neutral-700 text-neutral-500 hover:text-neutral-300 text-xs font-bold tracking-wider transition-colors">
            SIGN IN
          </Link>
          <Link href="/AdminSignUp" className="flex-1 text-center pb-3 border-b-2 border-lime-400 text-lime-400 text-xs font-bold tracking-wider">
            SIGN UP
          </Link>
        </div>

        {/* Form Fields */}
        <div className="space-y-3.5">
          <div>
            <label className="block text-[11px] text-white mb-1 font-medium">Full Name</label>
            <div className="flex items-center bg-black border border-neutral-800 rounded px-3 py-2">
              <span className="text-lime-500 mr-3 text-sm">👤</span>
              <input type="text" placeholder="Enter your full name" className="bg-transparent w-full text-xs text-white focus:outline-none placeholder-neutral-600" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] text-white mb-1 font-medium">Email</label>
            <div className="flex items-center bg-black border border-neutral-800 rounded px-3 py-2">
              <span className="text-lime-500 mr-3 text-sm">✉️</span>
              <input type="email" placeholder="username@gmail.com" className="bg-transparent w-full text-xs text-white focus:outline-none placeholder-neutral-600" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] text-white mb-1 font-medium">Password</label>
            <div className="flex items-center bg-black border border-neutral-800 rounded px-3 py-2">
              <span className="text-lime-500 mr-3 text-sm">🔒</span>
              <input type="password" placeholder="••••••••" className="bg-transparent w-full text-xs text-white focus:outline-none placeholder-neutral-600" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] text-white mb-1 font-medium">Confirm Password</label>
            <div className="flex items-center bg-black border border-neutral-800 rounded px-3 py-2">
              <span className="text-lime-500 mr-3 text-sm">🔄</span>
              <input type="password" placeholder="••••••••" className="bg-transparent w-full text-xs text-white focus:outline-none placeholder-neutral-600" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] text-white mb-1 font-medium">Secret Admin Key</label>
            <div className="flex items-center bg-black border border-neutral-800 rounded px-3 py-2">
              <span className="text-lime-500 mr-3 text-sm">🔑</span>
              <input type="password" placeholder="Institutional Access Key" className="bg-transparent w-full text-xs text-white focus:outline-none placeholder-neutral-600" />
            </div>
          </div>

          <button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-bold py-2.5 mt-4 rounded text-xs transition-colors flex items-center justify-center gap-2 tracking-wide">
            REGISTER SYSTEM ADMIN
          </button>
        </div>

        <div className="text-center mt-4 flex flex-col items-center gap-2">
          <Link href="/AdminSignIn" className="text-[10px] text-neutral-400 hover:text-white">Already have admin access? Sign In</Link>
          <Link href="/PanelAccess" className="text-[10px] text-lime-500 hover:text-lime-400 font-medium">&larr; Return to Panel</Link>
        </div>
      </div>

      <div className="absolute bottom-4 w-full text-center border-t border-dashed border-neutral-700 pt-4 px-4">
        <p className="text-[8px] tracking-widest text-neutral-500 uppercase">This is a restricted government system. Unauthorized access is strictly prohibited and subject to legal action.</p>
      </div>
    </div>
  );
}
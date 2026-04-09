import Image from 'next/image';
import Link from 'next/link';

export default function LiveCamera() {
 
  const alerts = [
    { id: 1, type: 'RED LIGHT JUMPING', time: '2 mins ago', plate: 'ABC-1234', desc: 'White Toyota Corolla', priority: 'HIGH PRIORITY', titleColor: 'text-red-400' },
    { id: 2, type: 'OVERSPEEDING', time: '5 mins ago', plate: 'WP-CAD-9908', desc: 'Black BMW X5 (84 km/h)', priority: 'LOW PRIORITY', titleColor: 'text-yellow-500' },
    { id: 3, type: 'ILLEGAL PARKING', time: '12 mins ago', plate: 'XYZ-5544', desc: 'Blue Honda Fit', priority: 'LOW PRIORITY', titleColor: 'text-lime-500' },
    { id: 4, type: 'WRONG WAY DRIVING', time: '20 mins ago', plate: 'CBB-7721', desc: 'Red Bajaj Pulsar', priority: 'HIGH PRIORITY', titleColor: 'text-red-400' },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-neutral-200 font-sans flex h-screen overflow-hidden">
      
      {/* ---------------- LEFT SIDEBAR ---------------- */}
      <aside className="w-64 bg-[#161616] border-r border-neutral-800 flex flex-col hidden md:flex h-full">
        <div className="p-6 border-b border-neutral-800 flex justify-center items-center">
          <Image src="/logo.png" alt="TraffiX Logo" width={180} height={70} className="h-30 w-auto object-contain drop-shadow-md" />
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-400 hover:text-white rounded-lg transition-colors">
            <span>🏠</span> Home
          </Link>
          <Link href="/Dashboard" className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-400 hover:text-white rounded-lg transition-colors">
            <span>🎛️</span> Dashboard
          </Link>
          
          {/* Active Link: Live Camera */}
          <Link href="/LiveCamera" className="flex items-center gap-3 px-4 py-3 text-sm text-lime-400 border border-lime-400/30 bg-lime-400/10 rounded-lg font-medium">
            <span>📹</span> Live Camera
          </Link>
          
          <Link href="/Analytics" className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-400 hover:text-white rounded-lg transition-colors">
            <span>📊</span> Analytics
          </Link>
          <Link href="/Settings" className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-400 hover:text-white rounded-lg transition-colors">
            <span>⚙️</span> Settings
          </Link>
        </nav>

      </aside>

      
      <main className="flex-1 flex flex-col p-6 overflow-y-auto h-full">
        
        <header className="flex justify-between items-end mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Live Monitoring</h1>
            <p className="text-sm text-neutral-400">Real-time AI analysis from 4 active grid nodes</p>
          </div>
          <div className="flex gap-3">
            <button className="border border-neutral-600 hover:border-neutral-400 text-neutral-300 px-4 py-2 rounded text-sm transition-colors">
              Grid Layout
            </button>
            <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold px-4 py-2 rounded text-sm transition-colors">
              Maximize All
            </button>
          </div>
        </header>

        {/* Camera Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1">
          
          {/* Camera 1 */}
          <div className="relative bg-gradient-to-br from-neutral-800 to-black rounded-xl border border-neutral-800 overflow-hidden shadow-lg group">
            {/* Overlay Badges */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-2 z-10">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> LIVE
            </div>
            <div className="absolute top-4 right-4 border border-lime-500/50 text-lime-500 bg-black/60 backdrop-blur text-[10px] font-bold px-2 py-1 rounded z-10">
              ID: CAM-001-P
            </div>
            {/* AI Bounding Box Simulation */}
            <div className="absolute top-1/4 left-1/4 w-1/3 h-1/2 border-2 border-lime-400 bg-lime-400/10 rounded pointer-events-none transition-all duration-1000">
              <div className="absolute -top-5 left-[-2px] bg-lime-400 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-t">
                CAR 98%
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-neutral-600 opacity-20 group-hover:opacity-40 transition-opacity">
               <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>
            </div>
          </div>

          {/* Camera 2 */}
          <div className="relative bg-gradient-to-bl from-neutral-800 to-neutral-950 rounded-xl border border-neutral-800 overflow-hidden shadow-lg group">
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-2 z-10">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> LIVE
            </div>
            <div className="absolute top-4 right-4 border border-lime-500/50 text-lime-500 bg-black/60 backdrop-blur text-[10px] font-bold px-2 py-1 rounded z-10">
              ID: CAM-004-P
            </div>
            <div className="absolute top-1/3 left-1/2 w-1/4 h-1/3 border-2 border-lime-400 bg-lime-400/10 rounded pointer-events-none">
              <div className="absolute -top-5 left-[-2px] bg-lime-400 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-t">
                TRUCK 89%
              </div>
            </div>
          </div>

          {/* Camera 3 */}
          <div className="relative bg-gradient-to-tr from-neutral-900 to-black rounded-xl border border-neutral-800 overflow-hidden shadow-lg group">
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-2 z-10">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> LIVE
            </div>
            <div className="absolute top-4 right-4 border border-lime-500/50 text-lime-500 bg-black/60 backdrop-blur text-[10px] font-bold px-2 py-1 rounded z-10">
              ID: CAM-002-P
            </div>
             <div className="absolute top-1/2 left-1/4 w-1/4 h-1/4 border-2 border-lime-400 bg-lime-400/10 rounded pointer-events-none">
              <div className="absolute -top-5 left-[-2px] bg-lime-400 text-black text-[9px] font-bold px-1.5 py-0.5 rounded-t">
                MOTORBIKE 95%
              </div>
            </div>
          </div>

          {/* Camera 4 */}
          <div className="relative bg-gradient-to-tl from-neutral-800 to-[#111111] rounded-xl border border-neutral-800 overflow-hidden shadow-lg group">
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-2 z-10">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> LIVE
            </div>
            <div className="absolute top-4 right-4 border border-lime-500/50 text-lime-500 bg-black/60 backdrop-blur text-[10px] font-bold px-2 py-1 rounded z-10">
              ID: CAM-009-P
            </div>
          </div>

        </div>
      </main>

      
     

      </div>
  );
}
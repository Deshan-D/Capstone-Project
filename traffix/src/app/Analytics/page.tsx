import Image from 'next/image';
import Link from 'next/link';

export default function Analytics() {
  // Mock data for AI Insights
  const insights = [
    {
      id: 1,
      title: 'Traffic Density Increase',
      desc: 'There is a 15% increase in illegal turns on Main St. during rainy conditions. Recommend increasing patrol or digital signage alerts.',
      color: 'blue',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-400',
      bgHover: 'hover:bg-blue-500/5',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    },
    {
      id: 2,
      title: 'Congestion Prediction',
      desc: 'AI models predict a heavy bottleneck at Bridge Exit A tomorrow between 17:00-19:00 due to local events nearby.',
      color: 'orange',
      borderColor: 'border-orange-500',
      textColor: 'text-orange-400',
      bgHover: 'hover:bg-orange-500/5',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      id: 3,
      title: 'System Efficiency',
      desc: 'Resolution speed for category-B violations improved by 12% following the latest automated ticket routing update.',
      color: 'emerald',
      borderColor: 'border-emerald-500',
      textColor: 'text-emerald-400',
      bgHover: 'hover:bg-emerald-500/5',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    }
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
          <Link href="/LiveCamera" className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-400 hover:text-white rounded-lg transition-colors">
            <span>📹</span> Live Camera
          </Link>
          
          {/* Active Link: Analytics */}
          <Link href="/Analytics" className="flex items-center gap-3 px-4 py-3 text-sm text-lime-400 border border-lime-400/30 bg-lime-400/10 rounded-lg font-medium">
            <span>📊</span> Analytics
          </Link>
          
          <Link href="/Settings" className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-400 hover:text-white rounded-lg transition-colors">
            <span>⚙️</span> Settings
          </Link>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-neutral-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-lime-400 text-black flex items-center justify-center font-bold text-sm">
            JD
          </div>
          <div>
            <p className="text-sm font-semibold text-white">John Doe</p>
            <p className="text-xs text-neutral-500">Admin</p>
          </div>
        </div>
      </aside>

     
    </div>
  );
}
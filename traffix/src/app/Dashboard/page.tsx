import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
  
  const tableData = [
    { id: '#VX-99201', type: 'Speeding', typeColor: 'text-red-400 bg-red-400/10 border-red-400/20', vehicle: 'Sedan', plate: 'GHT-8812', time: '2023-10-27 14:22:05', status: 'Pending', statusColor: 'text-yellow-500' },
    { id: '#VX-99198', type: 'Red Light', typeColor: 'text-orange-400 bg-orange-400/10 border-orange-400/20', vehicle: 'SUV', plate: 'KJH-2039', time: '2023-10-27 13:58:12', status: 'Processed', statusColor: 'text-emerald-500' },
    { id: '#VX-99194', type: 'Wrong Lane', typeColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20', vehicle: 'Truck (Heavy)', plate: 'TRK-0012', time: '2023-10-27 13:45:55', status: 'Processed', statusColor: 'text-emerald-500' },
    { id: '#VX-99190', type: 'Speeding', typeColor: 'text-red-400 bg-red-400/10 border-red-400/20', vehicle: 'Motorcycle', plate: 'MC-992', time: '2023-10-27 12:30:10', status: 'Pending', statusColor: 'text-yellow-500' },
    { id: '#VX-99185', type: 'Parking', typeColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20', vehicle: 'Sedan', plate: 'BMW-4455', time: '2023-10-27 11:15:22', status: 'Processed', statusColor: 'text-emerald-500' },
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-neutral-200 font-sans flex">
      
      {/* ---------------- SIDEBAR ---------------- */}
      <aside className="w-64 bg-[#161616] border-r border-neutral-800 hidden md:flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-neutral-800 flex justify-center items-center">
          <Image src="/logo.png" alt="TraffiX Logo" width={180} height={70} className="h-30 w-auto object-contain drop-shadow-md" />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-2">

          {/* Linked back to Home Page! */}
          <Link href="/" className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-400 hover:text-white rounded-lg transition-colors">
            <span>🏠</span> Home
          </Link>
          
          <Link href="/Dashboard" className="flex items-center gap-3 px-4 py-3 text-sm text-lime-400 border border-lime-400/30 bg-lime-400/10 rounded-lg font-medium">
            <span>🎛️</span> Dashboard
          </Link>
          
          <Link href="/LiveCamera" className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-400 hover:text-white rounded-lg transition-colors">
            <span>📹</span> Live Camera
          </Link>
          
          <Link href="/Analytics" className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-400 hover:text-white rounded-lg transition-colors">
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
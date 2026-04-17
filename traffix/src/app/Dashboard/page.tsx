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

       {/* ---------------- MAIN CONTENT ---------------- */}
      <main className="flex-1 flex flex-col p-6 md:p-8 overflow-x-hidden">
        
        {/* Top Header */}
        <header className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <span className="border border-lime-500/50 text-lime-500 text-xs px-2 py-0.5 rounded uppercase tracking-wider bg-lime-500/10">
              Live Database
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              className="text-lime-400 hover:text-lime-300"
              title="Notifications"
              aria-label="Notifications"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </button>
            <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-4 rounded text-sm transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Export CSV
            </button>
          </div>
        </header>

        {/* Filters & Table Container */}
        <div className="border border-lime-500/30 rounded-xl bg-[#161616] flex-1 flex flex-col overflow-hidden shadow-2xl">
          
          {/* Filters Bar */}
          <div className="p-4 border-b border-neutral-800 flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] flex items-center bg-black border border-neutral-700 rounded px-3 py-2">
              <span className="text-lime-500 mr-2">🔍</span>
              <input type="text" placeholder="Search ID or Plate..." className="bg-transparent w-full text-sm text-white focus:outline-none" />
            </div>
            <div className="flex-1 min-w-[200px] flex items-center bg-black border border-neutral-700 rounded px-3 py-2">
              <span className="text-lime-500 mr-2">📅</span>
              <input type="text" placeholder="Select Date Range" className="bg-transparent w-full text-sm text-white focus:outline-none" />
            </div>

            <div className="relative flex-1 min-w-[150px]">
              <select 
                defaultValue="all"
                aria-label="Filter by violation type"
                title="Filter by violation type"
                className="w-full bg-black border border-neutral-700 rounded px-3 py-2 text-sm text-neutral-300 focus:outline-none appearance-none cursor-pointer"
              >
                <option value="all">All Violations</option>
                <option value="speeding">Speeding</option>
                <option value="red-light">Red Light</option>
                <option value="wrong-lane">Wrong Lane</option>
                <option value="parking">Parking</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-lime-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <div className="relative flex-1 min-w-[150px]">
              <select 
                defaultValue="all"
                aria-label="Filter by location"
                title="Filter by location"
                className="w-full bg-black border border-neutral-700 rounded px-3 py-2 text-sm text-neutral-300 focus:outline-none appearance-none cursor-pointer"
              >
                <option value="all">All Locations</option>
                <option value="colombo">Colombo District</option>
                <option value="gampaha">Gampaha District</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-lime-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
            </div>
          </div>
          

          {/* Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-xs text-neutral-500 border-b border-neutral-800 uppercase tracking-wider">
                  <th className="p-4 font-semibold">Violation ID</th>
                  <th className="p-4 font-semibold">Violation Type</th>
                  <th className="p-4 font-semibold">Vehicle Type</th>
                  <th className="p-4 font-semibold">License Plate</th>
                  <th className="p-4 font-semibold">Timestamp</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {tableData.map((row, index) => (
                  <tr key={index} className="border-b border-neutral-800/50 hover:bg-neutral-800/20 transition-colors">
                    <td className="p-4 text-neutral-300">{row.id}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs border ${row.typeColor}`}>
                        {row.type}
                      </span>
                    </td>
                    <td className="p-4 text-neutral-400">{row.vehicle}</td>
                    <td className="p-4 font-medium text-white">{row.plate}</td>
                    <td className="p-4 text-neutral-400">{row.time}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${row.status === 'Pending' ? 'bg-yellow-500' : 'bg-emerald-500'}`}></span>
                        <span className={row.statusColor}>{row.status}</span>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold py-1.5 px-3 rounded text-xs transition-colors">
                        View Evidence
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-neutral-800 flex justify-between items-center text-sm text-neutral-500 mt-auto">
            <p>Showing <span className="font-semibold text-white">1-10</span> of <span className="font-semibold text-white">1,240</span> results</p>
            <div className="flex gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-neutral-800 text-neutral-400">&lt;</button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-lime-400 text-black font-bold">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-neutral-800 text-neutral-400">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-neutral-800 text-neutral-400">3</button>
              <span className="w-8 h-8 flex items-center justify-center text-neutral-600">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-neutral-800 text-neutral-400">124</button>
              <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-neutral-800 text-neutral-400">&gt;</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-6 text-xs text-lime-600/60 font-medium">
          © 2026 TraffiX Management Systems. Secured with End-to-End Encryption.
        </footer>
      </main>



     

    </div>
  );
}
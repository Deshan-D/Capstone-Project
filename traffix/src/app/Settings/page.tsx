import Image from 'next/image';
import Link from 'next/link';

export default function Settings() {
  return (
    <div className="min-h-screen bg-[#111111] text-neutral-200 font-sans flex h-screen overflow-hidden">
      
      {/* ---------------- LEFT SIDEBAR ---------------- */}
      <aside className="w-64 bg-[#161616] border-r border-neutral-800 flex flex-col hidden md:flex h-full z-20">
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
          <Link href="/Analytics" className="flex items-center gap-3 px-4 py-3 text-sm text-neutral-400 hover:text-white rounded-lg transition-colors">
            <span>📊</span> Analytics
          </Link>
          
          <Link href="/Settings" className="flex items-center gap-3 px-4 py-3 text-sm text-lime-400 border border-lime-400/30 bg-lime-400/10 rounded-lg font-medium">
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

      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-thin scrollbar-thumb-neutral-800 pb-24">
          
          {/* Header */}
          <div className="mb-8 border-b border-neutral-800 pb-4 flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">Settings</h1>
            </div>
          </div>

          <section className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-bold text-white">Camera Management</h2>
                <p className="text-xs text-neutral-500">Configure and monitor traffic surveillance hardware.</p>
              </div>
              <div className="flex items-center gap-2 bg-lime-500/10 border border-lime-500/30 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
                <span className="text-[10px] font-bold text-lime-500 uppercase tracking-widest">System Online</span>
              </div>
            </div>

            <div className="bg-[#161616] border border-neutral-800 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-400 mb-1.5">Camera ID</label>
                  <input type="text" defaultValue="CAM-DXB-042" title="Camera ID" className="w-full bg-[#0a0a0a] border border-neutral-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-lime-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-400 mb-1.5">Junction Name</label>
                  <input type="text" defaultValue="e.g. Sheikh Zayed Road Exit 4" title="Junction Name" className="w-full bg-[#0a0a0a] border border-neutral-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-lime-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-400 mb-1.5">Location</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-lime-500">📍</span>
                    <input type="text" defaultValue="Latitude, Longitude" title="Location" className="w-full bg-[#0a0a0a] border border-neutral-800 rounded py-2 pl-8 pr-3 text-sm text-neutral-500 focus:outline-none" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-400 mb-1.5">RTSP URL Stream</label>
                  <input type="text" defaultValue="rtsp://admin:pass123@192.168.1.55:554/live/ch1" title="RTSP URL Stream" className="w-full bg-[#0a0a0a] border border-neutral-800 rounded px-3 py-2 text-sm text-neutral-500 font-mono focus:outline-none" />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <h4 className="text-sm font-bold text-white">Camera Status</h4>
                    <p className="text-[10px] text-neutral-500">Toggle live feed and recording</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-5 bg-lime-500 rounded-full flex items-center p-1 cursor-pointer" role="switch" aria-checked="true" tabIndex={0}>
                      <div className="w-3.5 h-3.5 bg-black rounded-full transform translate-x-4"></div>
                    </div>
                    <span className="text-xs text-lime-500 font-bold">Online</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-white">AI & Detection</h2>
              <p className="text-xs text-neutral-500">Fine-tune object detection models and violation triggers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#161616] border border-neutral-800 rounded-xl p-5">
                <h3 className="flex items-center gap-2 text-sm font-bold text-white mb-5">
                  <span className="text-lime-500">🎯</span> YOLOv8 Thresholds
                </h3>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-xs font-medium mb-2">
                      <span className="text-neutral-400">Vehicle Confidence</span>
                      <span className="text-lime-500 font-bold">85%</span>
                    </div>
                    <div className="h-1 w-full bg-[#111111] rounded-full overflow-hidden">
                      <div className="h-full bg-lime-500 w-[85%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-medium mb-2">
                      <span className="text-neutral-400">Pedestrian Confidence</span>
                      <span className="text-lime-500 font-bold">70%</span>
                    </div>
                    <div className="h-1 w-full bg-[#111111] rounded-full overflow-hidden">
                      <div className="h-full bg-lime-500 w-[70%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FIXED: Checkboxes added title and aria-label */}
              <div className="bg-[#161616] border border-neutral-800 rounded-xl p-5">
                <h3 className="flex items-center gap-2 text-sm font-bold text-white mb-5">
                  <span className="text-lime-500">⚠️</span> Violation Detection
                </h3>
                <div className="space-y-4">
                  <label className="flex items-center justify-between cursor-pointer group">
                    <span className="text-xs text-neutral-300 group-hover:text-white transition-colors">Red-Light Violation</span>
                    <input type="checkbox" defaultChecked aria-label="Toggle Red-Light Violation" title="Toggle Red-Light Violation" className="w-4 h-4 accent-lime-500 bg-[#0a0a0a] border-neutral-700 rounded" />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer group">
                    <span className="text-xs text-neutral-300 group-hover:text-white transition-colors">Illegal U-Turns</span>
                    <input type="checkbox" defaultChecked aria-label="Toggle Illegal U-Turns" title="Toggle Illegal U-Turns" className="w-4 h-4 accent-lime-500 bg-[#0a0a0a] border-neutral-700 rounded" />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer group">
                    <span className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">Crosswalk Obstruction</span>
                    <input type="checkbox" aria-label="Toggle Crosswalk Obstruction" title="Toggle Crosswalk Obstruction" className="w-4 h-4 accent-lime-500 bg-[#0a0a0a] border-neutral-700 rounded" />
                  </label>
                </div>
              </div>

              <div className="bg-[#161616] border border-neutral-800 rounded-xl p-5">
                <h3 className="flex items-center gap-2 text-sm font-bold text-white mb-5">
                  <span className="text-lime-500">🔒</span> Privacy Compliance
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Automatic Face Blurring</p>
                      <p className="text-[9px] text-neutral-500 mt-0.5 max-w-[120px]">GDPR compliant masking</p>
                    </div>
                    <div className="w-8 h-4 bg-lime-500 rounded-full flex items-center p-0.5 cursor-pointer mt-1" role="switch" aria-checked="true" tabIndex={0} title="Toggle Face Blurring">
                      <div className="w-3 h-3 bg-black rounded-full transform translate-x-4"></div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">License Plate Masking</p>
                      <p className="text-[9px] text-neutral-500 mt-0.5 max-w-[120px]">Blur plates unless violation detected</p>
                    </div>
                    <div className="w-8 h-4 bg-neutral-700 rounded-full flex items-center p-0.5 cursor-pointer mt-1" role="switch" aria-checked="false" tabIndex={0} title="Toggle License Plate Masking">
                      <div className="w-3 h-3 bg-neutral-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-white">User Access</h2>
              <p className="text-xs text-neutral-500">Manage administrative roles and authentication security.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-[#161616] border border-neutral-800 rounded-xl p-5">
                <div className="mb-6">
                  <label className="block text-xs font-bold text-neutral-400 mb-2">Default New User Role</label>
                  <div className="relative">
                    {/* FIXED: Select added aria-label and title */}
                    <select aria-label="Default New User Role" title="Default New User Role" className="w-full bg-[#0a0a0a] border border-neutral-800 rounded px-3 py-2 text-sm text-neutral-300 focus:outline-none appearance-none cursor-pointer">
                      <option value="analyst">Analyst</option>
                      <option value="officer">Officer</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-lime-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium mb-2">
                    <span className="text-neutral-400 font-bold">JWT Expiration (Hours)</span>
                    <span className="text-lime-500 font-bold">24h</span>
                  </div>
                  <div className="h-1 w-full bg-[#111111] rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-lime-500 w-[50%]"></div>
                  </div>
                  <p className="text-[9px] text-neutral-500">Recommended: 24h for security compliance</p>
                </div>
              </div>

              <div className="lg:col-span-2 bg-[#161616] border border-neutral-800 rounded-xl p-5 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold text-white">User Directory</h3>
                  <button className="text-[10px] text-lime-500 hover:text-lime-400 font-bold flex items-center gap-1">
                    <span>+</span> Add User
                  </button>
                </div>
                <div className="overflow-x-auto flex-1">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-[10px] text-neutral-500 border-b border-neutral-800 uppercase tracking-wider">
                        <th className="pb-2 font-bold">Name</th>
                        <th className="pb-2 font-bold">Role</th>
                        <th className="pb-2 font-bold">Last Active</th>
                        <th className="pb-2 font-bold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs">
                      <tr className="border-b border-neutral-800/50">
                        <td className="py-3 flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[9px] font-bold">SA</div>
                          <span className="text-neutral-300">Sarah Ahmed</span>
                        </td>
                        <td className="py-3"><span className="bg-[#111111] border border-neutral-700 px-2 py-0.5 rounded text-[10px] text-neutral-400">Admin</span></td>
                        <td className="py-3 text-neutral-500">2 mins ago</td>
                        <td className="py-3 text-right"><button className="text-lime-500 hover:text-lime-400" title="Edit User">✏️</button></td>
                      </tr>
                      <tr className="border-b border-neutral-800/50">
                        <td className="py-3 flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[9px] font-bold">JM</div>
                          <span className="text-neutral-300">John Marcus</span>
                        </td>
                        <td className="py-3"><span className="bg-[#111111] border border-neutral-700 px-2 py-0.5 rounded text-[10px] text-neutral-400">Officer</span></td>
                        <td className="py-3 text-neutral-500">1 hour ago</td>
                        <td className="py-3 text-right"><button className="text-lime-500 hover:text-lime-400" title="Edit User">✏️</button></td>
                      </tr>
                      <tr>
                        <td className="py-3 flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[9px] font-bold">RL</div>
                          <span className="text-neutral-300">Riva Lee</span>
                        </td>
                        <td className="py-3"><span className="bg-[#111111] border border-neutral-700 px-2 py-0.5 rounded text-[10px] text-neutral-400">Analyst</span></td>
                        <td className="py-3 text-neutral-500">Yesterday</td>
                        <td className="py-3 text-right"><button className="text-lime-500 hover:text-lime-400" title="Edit User">✏️</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <div className="mb-4">
              <h2 className="text-lg font-bold text-white">Alerts Configuration</h2>
              <p className="text-xs text-neutral-500">Define notification triggers and delivery endpoints.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-[10px] text-neutral-400 font-bold tracking-widest uppercase mb-2">Trigger Conditions</h3>
                
                {/* FIXED: Checkboxes added title and aria-label */}
                <label className="flex items-start gap-3 p-3 bg-[#161616] border border-neutral-800 rounded-lg cursor-pointer hover:border-neutral-700 transition-colors">
                  <input type="checkbox" defaultChecked aria-label="Toggle Critical Traffic Congestion" title="Toggle Critical Traffic Congestion" className="mt-1 w-4 h-4 accent-lime-500 bg-[#0a0a0a] border-neutral-700 rounded" />
                  <div>
                    <p className="text-xs font-bold text-white">Critical Traffic Congestion</p>
                    <p className="text-[10px] text-neutral-500">Speed &lt; 10km/h for 15 minutes</p>
                  </div>
                </label>
                
                <label className="flex items-start gap-3 p-3 bg-[#161616] border border-neutral-800 rounded-lg cursor-pointer hover:border-neutral-700 transition-colors">
                  <input type="checkbox" defaultChecked aria-label="Toggle Multiple Lane Violation" title="Toggle Multiple Lane Violation" className="mt-1 w-4 h-4 accent-lime-500 bg-[#0a0a0a] border-neutral-700 rounded" />
                  <div>
                    <p className="text-xs font-bold text-white">Multiple Lane Violation</p>
                    <p className="text-[10px] text-neutral-500">High severity detection trigger</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-3 bg-[#161616] border border-neutral-800 rounded-lg cursor-pointer hover:border-neutral-700 transition-colors opacity-70">
                  <input type="checkbox" aria-label="Toggle Hardware Disconnection" title="Toggle Hardware Disconnection" className="mt-1 w-4 h-4 accent-lime-500 bg-[#0a0a0a] border-neutral-700 rounded" />
                  <div>
                    <p className="text-xs font-bold text-neutral-300">Hardware Disconnection</p>
                    <p className="text-[10px] text-neutral-500">Camera signal loss alert</p>
                  </div>
                </label>
              </div>

              <div className="space-y-3">
                <h3 className="text-[10px] text-neutral-400 font-bold tracking-widest uppercase mb-2">Notification Channels</h3>
                
                <div className="flex items-center justify-between p-3.5 bg-[#161616] border border-neutral-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-lime-500">✉️</span>
                    <span className="text-xs font-bold text-neutral-300">Email Notifications</span>
                  </div>
                  <div className="w-8 h-4 bg-lime-500 rounded-full flex items-center p-0.5 cursor-pointer" role="switch" aria-checked="true" tabIndex={0} title="Toggle Email Notifications">
                    <div className="w-3 h-3 bg-black rounded-full transform translate-x-4"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-[#161616] border border-neutral-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-500">💬</span>
                    <span className="text-xs font-bold text-neutral-500">Slack Integration</span>
                  </div>
                  <div className="w-8 h-4 bg-neutral-700 rounded-full flex items-center p-0.5 cursor-pointer" role="switch" aria-checked="false" tabIndex={0} title="Toggle Slack Integration">
                    <div className="w-3 h-3 bg-neutral-400 rounded-full"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-[#161616] border border-neutral-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-lime-500">📱</span>
                    <span className="text-xs font-bold text-neutral-300">SMS Alerts</span>
                  </div>
                  <div className="w-8 h-4 bg-lime-500 rounded-full flex items-center p-0.5 cursor-pointer" role="switch" aria-checked="true" tabIndex={0} title="Toggle SMS Alerts">
                    <div className="w-3 h-3 bg-black rounded-full transform translate-x-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10">
             <div className="mb-4">
              <h2 className="text-lg font-bold text-white">System Maintenance</h2>
              <p className="text-xs text-neutral-500">Database status, backup settings, and system logs.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-[#161616] border border-neutral-800 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lime-500">🗄️</span>
                  <h3 className="text-sm font-bold text-white">MongoDB Storage</h3>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center text-[10px] font-bold mb-2">
                    <span className="bg-lime-500/20 text-lime-500 px-1.5 py-0.5 rounded">USAGE</span>
                    <span className="text-lime-500">64% (1.2 TB / 2.0 TB)</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#111111] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-lime-500 to-lime-300 w-[64%]"></div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white mb-2">Auto-Backup Frequency</label>
                   <div className="relative">
                    {/* FIXED: Select added aria-label and title */}
                    <select aria-label="Auto-Backup Frequency" title="Auto-Backup Frequency" className="w-full bg-[#0a0a0a] border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-300 focus:outline-none appearance-none cursor-pointer">
                      <option value="6hours">Every 6 Hours</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-lime-500">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 bg-[#161616] border border-neutral-800 rounded-xl p-5 flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="text-lime-500">🖥️</span> System Health Log
                  </h3>
                  <span className="text-[9px] text-neutral-500 animate-pulse">Auto-refreshing</span>
                </div>
                
                {/* Terminal Window */}
                <div className="flex-1 bg-[#0a0a0a] border border-neutral-800 rounded-lg p-4 font-mono text-[9px] leading-relaxed overflow-y-auto">
                  <div className="text-neutral-500">[2023-10-27 14:22:01] <span className="text-emerald-500 ml-2">INFO</span><span className="text-neutral-400 ml-2">Database connection established successfully.</span></div>
                  <div className="text-neutral-500">[2023-10-27 14:23:45] <span className="text-yellow-500 ml-2">WARN</span><span className="text-neutral-400 ml-2">High latency detected on Camera Node CAM-042.</span></div>
                  <div className="text-neutral-500">[2023-10-27 14:25:12] <span className="text-emerald-500 ml-2">INFO</span><span className="text-neutral-400 ml-2">Automated backup sequence initiated.</span></div>
                  <div className="text-neutral-500">[2023-10-27 14:30:30] <span className="text-blue-500 ml-2">DEBUG</span><span className="text-neutral-400 ml-1">Model re-calibration complete (v8.4.2).</span></div>
                  <div className="text-neutral-500">[2023-10-27 14:38:05] <span className="text-emerald-500 ml-2">INFO</span><span className="text-neutral-400 ml-2">Scheduled maintenance ping: All systems normal.</span></div>
                  
                  {/* FIXED: Unescaped Entities (Single quotes changed to &apos;) */}
                  <div className="text-neutral-500">[2023-10-27 14:32:01] <span className="text-neutral-400 ml-2">LOG </span><span className="text-neutral-400 ml-2">User &apos;Admin&apos; modified security policies.</span></div>
                  
                  <div className="text-neutral-500">[2023-10-27 14:35:35] <span className="text-yellow-500 ml-2">WARN</span><span className="text-neutral-400 ml-2">Storage threshold reaching 65% capacity.</span></div>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* ---------------- BOTTOM STICKY ACTION BAR ---------------- */}
        <div className="absolute bottom-0 w-full bg-[#161616] border-t border-neutral-800 px-8 py-4 flex justify-end gap-4 z-10">
          <button className="px-6 py-2 rounded text-sm font-bold text-neutral-400 hover:text-white transition-colors">
            Cancel
          </button>
          <button className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-2 rounded text-sm font-bold transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
            Save Changes
          </button>
        </div>

      </main>
    </div>
  );
}
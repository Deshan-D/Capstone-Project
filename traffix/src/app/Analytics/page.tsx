"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

export default function Analytics() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Dynamic Dashboard State
  const [analysisData, setAnalysisData] = useState<any>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  // Fallback for detected plates before analysis
  const fallbackPlates = [
    { timestamp: '10:42:05 AM', type: 'Car', plate: 'ABC-1234', confidence: '98%' },
    { timestamp: '10:41:12 AM', type: 'Truck', plate: 'WP-CAD-9908', confidence: '92%' },
    { timestamp: '10:39:45 AM', type: 'Motorbike', plate: 'XYZ-5544', confidence: '89%' },
    { timestamp: '10:35:22 AM', type: 'Car', plate: 'CBB-7721', confidence: '95%' },
    { timestamp: '10:30:10 AM', type: 'Van', plate: 'CAB-1020', confidence: '91%' },
  ];

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleRunAnalysis = async () => {
    if (!selectedFile) return;
    setIsProcessing(true);
    try {
      const formData = new FormData();
      formData.append('video', selectedFile);
      const res = await fetch('http://localhost:8000/api/analyze', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setAnalysisData(data);
      if (data.processedVideoUrl) {
        setVideoUrl(data.processedVideoUrl);
      }
      
    } catch (error) {
      console.error("Error analyzing video:", error);
    } finally {
      setIsProcessing(false);
      setSelectedFile(null);
    }
  };

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

  // (Detected plates mock data moved to useState)

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

      {/* ---------------- MAIN CONTENT ---------------- */}
      <main className="flex-1 flex flex-col p-6 overflow-y-auto h-full scrollbar-thin scrollbar-thumb-neutral-800">
        
        {/* Header */}
        <header className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-white">Analytics</h1>
            <span className="border border-lime-500/30 text-lime-500 text-[10px] px-2 py-1 rounded uppercase tracking-wider bg-lime-500/5">
              Last updated: 2 mins ago
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              className="text-lime-400 hover:text-lime-300"
              title="Notifications"
              aria-label="Notifications"
          >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </button>
            <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-4 rounded text-sm transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Export Report
            </button>
          </div>
        </header>

        {/* File Utility Zone */}
        <div className="bg-[#161616] border border-neutral-800 p-4 rounded-xl mb-6">
          <div className="flex items-center gap-4">
            <input 
              type="file" 
              accept="video/*" 
              ref={fileInputRef} 
              className="hidden" 
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)} 
            />
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 px-4 py-2 rounded text-sm transition-colors font-medium"
            >
              {selectedFile ? "🔄 Change Video" : "📁 Choose Video File"}
            </button>
            <span className="text-sm text-neutral-400 truncate max-w-md">
              {selectedFile ? selectedFile.name : "No file selected (MP4, MOV)"}
            </span>
            {selectedFile && (
              <button 
                onClick={handleRunAnalysis}
                disabled={isProcessing}
                className={`ml-auto px-6 py-2 rounded text-sm font-bold text-white transition-all ${isProcessing ? 'bg-orange-500/50 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-400 animate-pulse'}`}
              >
                {isProcessing ? "Processing..." : "🚀 Run Analysis"}
              </button>
            )}
          </div>
          
          {selectedFile && (
            <div className="mt-4 flex flex-col xl:flex-row gap-4 items-start">
              {/* Video Preview Player */}
              <div className="w-full xl:w-1/2 aspect-video bg-black rounded-lg overflow-hidden border border-neutral-800 shadow-inner">
                <video 
                  src={videoUrl ? videoUrl : URL.createObjectURL(selectedFile)} 
                  controls 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Processing Progress State */}
              {isProcessing && (
                <div className="w-full xl:w-1/2 flex flex-col justify-center gap-4 p-6 bg-[#111111] rounded-lg border border-neutral-800 shadow-md h-full min-h-[150px]">
                  <div className="flex justify-between items-center text-sm font-bold text-orange-400">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      AI Processing: Extracting Vehicles and License Plates... (YOLOv8 active)
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-neutral-800 rounded-full overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full w-[65%] bg-gradient-to-r from-orange-600 to-orange-400 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-xs text-neutral-500">Connecting to Python microservice...</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          <div className="bg-[#161616] border border-neutral-800 rounded-xl p-5 relative overflow-hidden group hover:border-neutral-600 transition-colors">
            <h3 className="text-[10px] text-neutral-400 font-bold tracking-widest uppercase mb-2">Total Violations Today</h3>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-white">1,482</span>
              <span className="text-xs text-lime-500 font-bold">+4.2%</span>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-neutral-800"><div className="h-full bg-gradient-to-r from-lime-500 to-lime-300 w-[65%]"></div></div>
          </div>

          <div className="bg-[#161616] border border-neutral-800 rounded-xl p-5 relative overflow-hidden group hover:border-neutral-600 transition-colors">
            <h3 className="text-[10px] text-neutral-400 font-bold tracking-widest uppercase mb-2">Active Cameras</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white">245</span>
              <span className="text-xs text-neutral-500">/ 250 Online</span>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-neutral-800"><div className="h-full bg-gradient-to-r from-lime-500 to-lime-300 w-[98%]"></div></div>
          </div>

          <div className="bg-[#161616] border border-neutral-800 rounded-xl p-5 relative overflow-hidden group hover:border-neutral-600 transition-colors">
            <h3 className="text-[10px] text-neutral-400 font-bold tracking-widest uppercase mb-2">Peak Traffic Time</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white">08:45</span>
              <span className="text-xs text-orange-400 font-bold">AM PEAK</span>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-neutral-800"><div className="h-full bg-orange-500 w-[80%]"></div></div>
          </div>

          <div className="bg-[#161616] border border-neutral-800 rounded-xl p-5 relative overflow-hidden group hover:border-neutral-600 transition-colors">
            <h3 className="text-[10px] text-neutral-400 font-bold tracking-widest uppercase mb-2">Avg. Resolution Speed</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white">12.4m</span>
              <span className="text-xs text-lime-500 font-bold">-1.2m</span>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-neutral-800"><div className="h-full bg-gradient-to-r from-lime-500 to-lime-300 w-[40%]"></div></div>
          </div>
        </div>

        {/* Top Data Row: Line Chart & Table (2-Column Grid) */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          
          {/* Main Line Chart */}
          <div className="bg-[#161616] border border-neutral-800 rounded-xl p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-white">Peak Traffic Hours</h2>
              <div className="flex gap-4 text-[10px] font-bold text-neutral-400">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-lime-400"></span> Traffic Vol.</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-neutral-600"></span> Previous Day</span>
              </div>
            </div>
            
            {/* Custom SVG Line Chart Simulation */}
            <div className="w-full flex-1 min-h-[220px] relative mt-auto">
               <svg viewBox="0 0 800 200" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a3e635" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#a3e635" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  <line x1="0" y1="50" x2="800" y2="50" stroke="#262626" strokeWidth="1" />
                  <line x1="0" y1="100" x2="800" y2="100" stroke="#262626" strokeWidth="1" />
                  <line x1="0" y1="150" x2="800" y2="150" stroke="#262626" strokeWidth="1" />
                  
                  {/* Area Fill */}
                  <path d="M0 160 C 150 160, 200 60, 350 40 C 500 20, 550 110, 650 60 C 750 10, 800 20, 800 20 L 800 200 L 0 200 Z" fill="url(#chartGradient)" />
                  {/* Stroke Line */}
                  <path d="M0 160 C 150 160, 200 60, 350 40 C 500 20, 550 110, 650 60 C 750 10, 800 20, 800 20" stroke="#a3e635" strokeWidth="4" fill="none" className="drop-shadow-[0_0_8px_rgba(163,230,53,0.5)]" />
               </svg>
               {/* X-Axis Labels */}
               <div className="absolute -bottom-4 left-0 w-full flex justify-between text-[9px] text-neutral-500 font-bold px-2">
                  <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>23:59</span>
               </div>
            </div>
          </div>

          {/* Detected License Plates Table */}
          <div className="bg-[#161616] border border-neutral-800 rounded-xl p-6 overflow-hidden flex flex-col h-full">
            <h2 className="font-bold text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" /></svg>
              Detected License Plates
            </h2>
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left text-sm text-neutral-400">
                <thead className="text-xs text-lime-400 uppercase bg-[#111111] border-b border-lime-500/30">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-bold tracking-wider">Timestamp</th>
                    <th scope="col" className="px-4 py-3 font-bold tracking-wider">Type</th>
                    <th scope="col" className="px-4 py-3 font-bold tracking-wider">License Plate</th>
                    <th scope="col" className="px-4 py-3 font-bold tracking-wider">Confidence</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800">
                  {(analysisData ? analysisData.detected_plates : fallbackPlates).map((plate: any, idx: number) => (
                    <tr key={idx} className="hover:bg-[#1a1a1a] transition-colors group">
                      <td className="px-4 py-3.5 whitespace-nowrap">{plate.timestamp}</td>
                      <td className="px-4 py-3.5 whitespace-nowrap">{plate.type || plate.vehicleType}</td>
                      <td className="px-4 py-3.5 whitespace-nowrap font-bold text-white group-hover:text-lime-400 transition-colors">{plate.plate}</td>
                      <td className="px-4 py-3.5 whitespace-nowrap">
                        <span className="bg-lime-500/10 text-lime-500 border border-lime-500/20 px-2 py-1 rounded text-[10px] font-bold">
                          {plate.confidence}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>

        {/* Horizontal Bar Charts (Vehicle Counts) */}
        <div className="bg-[#161616] border border-neutral-800 rounded-xl p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h2 className="font-bold text-white">Total Vehicle Counts</h2>
            <div className="p-3 bg-[#111111] border border-neutral-800 rounded-lg text-[10px] text-neutral-400">
              <span className="text-white font-bold">Trend:</span> Commercial traffic has increased by <span className="text-lime-500 font-bold">8%</span> compared to last Tuesday.
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex justify-between text-xs font-medium mb-2">
                <span className="text-neutral-400">Passenger Cars</span>
                <span className="text-white font-bold">{analysisData ? analysisData.total_vehicles.passenger_cars.toLocaleString() : '45,200'}</span>
              </div>
              <div className="h-3 w-full bg-[#111111] rounded-full overflow-hidden border border-neutral-800">
                <div className="h-full bg-lime-300 w-[85%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium mb-2">
                <span className="text-neutral-400">Trucks & Vans</span>
                <span className="text-white font-bold">{analysisData ? analysisData.total_vehicles.trucks_vans.toLocaleString() : '12,850'}</span>
              </div>
              <div className="h-3 w-full bg-[#111111] rounded-full overflow-hidden border border-neutral-800">
                <div className="h-full bg-lime-400 w-[40%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium mb-2">
                <span className="text-neutral-400">Motorbikes</span>
                <span className="text-white font-bold">{analysisData ? analysisData.total_vehicles.motorbikes.toLocaleString() : '8,400'}</span>
              </div>
              <div className="h-3 w-full bg-[#111111] rounded-full overflow-hidden border border-neutral-800">
                <div className="h-full bg-lime-500 w-[25%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights Section */}
        <div className="mb-6">
          <h2 className="font-bold text-white mb-4">AI Predictive Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {insights.map((insight) => (
              <div key={insight.id} className={`bg-[#161616] border border-neutral-800 hover:${insight.borderColor} rounded-xl p-5 cursor-pointer ${insight.bgHover} transition-colors flex flex-col gap-3`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-[#111111] border border-neutral-800 ${insight.textColor}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {insight.icon}
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-white">{insight.title}</h3>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed flex-1">
                  {insight.desc}
                </p>
                <div className="mt-2 text-right">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${insight.textColor}`}>
                    View Details &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Agentic AI Comprehensive Report */}
          <div className="bg-[#161616] border border-neutral-800 rounded-xl p-8 mb-10 overflow-hidden relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-lime-500"></div>
            <div className="flex justify-between items-center mb-6 border-b border-neutral-800 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-3">
                <svg className="w-6 h-6 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Agentic AI Comprehensive Report
              </h2>
              <span className="text-[10px] font-bold bg-lime-500/10 text-lime-500 px-3 py-1 rounded-full border border-lime-500/20 tracking-wider">
                AUTOGENERATED
              </span>
            </div>
            
            <div className="max-w-none">
              <h3 className="text-lg font-bold text-white mb-2">Urban Traffic Summary</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                {analysisData ? analysisData.agentic_report : 'Waiting for system analysis...'}
              </p>
              
              <h3 className="text-lg font-bold text-white mb-3">Key Recommendations</h3>
              <ul className="list-disc pl-5 space-y-3 text-sm text-neutral-400 mb-8">
                <li><strong className="text-white">Dynamic Routing:</strong> Divert commercial logistics via the Northern Bypass between 16:00 and 18:00 to reduce the probability of severe bottlenecks at Bridge Exit A.</li>
                <li><strong className="text-white">Enforcement Focus:</strong> Deploy localized traffic enforcement to Main St. during inclement weather, as historical pattern matching shows a 15% uptick in illegal turns.</li>
                <li><strong className="text-white">Camera Calibration:</strong> Physical nodes CAM-004-P and CAM-009-P report suboptimal confidence scores during night hours. Recommend infrared calibration or physical angle adjustment.</li>
              </ul>
            </div>
            
            <div className="flex justify-end pt-5 border-t border-neutral-800">
              <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold py-2.5 px-6 rounded text-sm transition-colors flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export Full Report as PDF
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function OfficerSignUp() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
    
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:8000/api/officer/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          idNumber: formData.idNumber,
          email: formData.email,
          mobileNumber: formData.mobileNumber,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration Successful! Please Sign In.");
        setTimeout(() => router.push('/OfficerSignIn'), 2000); 
      } else {
        setMessage(data.detail || "Registration failed");
      }
    } catch (error) {
      setMessage("Server connection failed");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-[#111111] text-neutral-200 font-sans flex flex-col items-center justify-center p-6 relative">
      <div className="w-full max-w-md bg-[#161616] border border-neutral-800 rounded-xl pt-8 pb-6 px-6 shadow-2xl">
        <div className="flex flex-col items-center mb-6">
          <Image src="/logo.png" alt="TraffiX Logo" width={140} height={40} className="mb-4 object-contain" />
          <h2 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Field Portal Access</h2>
        </div>

        {/* Tabs */}
        <div className="flex w-full mb-6">
          <Link href="/OfficerSignIn" className="flex-1 text-center pb-3 border-b border-neutral-700 text-neutral-500 hover:text-neutral-300 text-xs font-bold tracking-wider transition-colors">
            SIGN IN
          </Link>
          <Link href="/OfficerSignUp" className="flex-1 text-center pb-3 border-b-2 border-lime-400 text-lime-400 text-xs font-bold tracking-wider">
            SIGN UP
          </Link>
        </div>

        {message && <div className={`mb-4 text-center text-xs font-bold ${message.includes('Successful') ? 'text-lime-500' : 'text-red-500'}`}>{message}</div>}

        {/* Form Fields */}
        <form onSubmit={handleRegister} className="space-y-3">
          <div>
            <label className="block text-[11px] text-white mb-1 font-medium">Full Name</label>
            <div className="flex items-center bg-black border border-neutral-800 rounded px-3 py-2">
              <span className="text-lime-500 mr-3 text-sm">👤</span>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Enter your full name" className="bg-transparent w-full text-xs text-white focus:outline-none placeholder-neutral-600" />
            </div>
          </div>
          
          <div>
            <label className="block text-[11px] text-white mb-1 font-medium">ID Number</label>
            <div className="flex items-center bg-black border border-neutral-800 rounded px-3 py-2">
              <span className="text-lime-500 mr-3 text-sm">🆔</span>
              <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} required placeholder="xxxxxxxxxxxx" className="bg-transparent w-full text-xs text-white focus:outline-none placeholder-neutral-600" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] text-white mb-1 font-medium">Email (@gmail.com)</label>
            <div className="flex items-center bg-black border border-neutral-800 rounded px-3 py-2">
              <span className="text-lime-500 mr-3 text-sm">✉️</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="username@gmail.com" className="bg-transparent w-full text-xs text-white focus:outline-none placeholder-neutral-600" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] text-white mb-1 font-medium">Mobile Number</label>
            <div className="flex items-center bg-black border border-neutral-800 rounded px-3 py-2">
              <span className="text-lime-500 mr-3 text-sm">📱</span>
              <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required placeholder="07XXXXXXXX" className="bg-transparent w-full text-xs text-white focus:outline-none placeholder-neutral-600" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] text-white mb-1 font-medium">Password</label>
            <div className="flex items-center bg-black border border-neutral-800 rounded px-3 py-2">
              <span className="text-lime-500 mr-3 text-sm">🔒</span>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="••••••••" className="bg-transparent w-full text-xs text-white focus:outline-none placeholder-neutral-600" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] text-white mb-1 font-medium">Confirm Password</label>
            <div className="flex items-center bg-black border border-neutral-800 rounded px-3 py-2">
              <span className="text-lime-500 mr-3 text-sm">🔄</span>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required placeholder="••••••••" className="bg-transparent w-full text-xs text-white focus:outline-none placeholder-neutral-600" />
            </div>
          </div>
          <button type="submit" disabled={isLoading} className="w-full bg-lime-400 hover:bg-lime-500 disabled:opacity-50 text-black font-bold py-2.5 mt-4 rounded text-xs transition-colors flex items-center justify-center gap-2 tracking-wide">
            {isLoading ? "REGISTERING..." : "REGISTER OFFICER"}
          </button>
        </form>

        <div className="text-center mt-4 flex flex-col items-center gap-2">
          <Link href="/OfficerSignIn" className="text-[10px] text-neutral-400 hover:text-white">Already have an account? Sign In</Link>
          <Link href="/PanelAccess" className="text-[10px] text-lime-500 hover:text-lime-400 font-medium">&larr; Return to Panel</Link>
        </div>
      </div>

      <div className="absolute bottom-4 w-full text-center border-t border-dashed border-neutral-700 pt-4 px-4">
        <p className="text-[8px] tracking-widest text-neutral-500 uppercase">This is a restricted government system. Unauthorized access is strictly prohibited and subject to legal action.</p>
      </div>
    </div>
  );
}

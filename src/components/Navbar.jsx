import React from 'react';
import { Search, Bell, Moon, Sun, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-slate-800 px-6 flex items-center justify-between bg-[#0b0e14]/50 backdrop-blur-md sticky top-0 z-40">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
        <input 
          type="text" 
          placeholder="Search analytics, users..."
          className="w-full bg-slate-900/50 border border-slate-800 rounded-full py-2 pl-10 pr-4 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:bg-slate-800 rounded-lg transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-[#0b0e14]" />
        </button>
        
        <div className="h-8 w-px bg-slate-800 mx-2" />

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px]">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User avatar" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white leading-tight">Alex Rivers</p>
            <p className="text-xs text-slate-500">Admin Account</p>
          </div>
          <ChevronDown size={16} className="text-slate-500 group-hover:text-slate-300 transition-colors" />
        </div>
      </div>
    </nav>
  );
}
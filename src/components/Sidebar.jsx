import React from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  Settings, 
  Layers, 
  PieChart, 
  Zap, 
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { clsx } from 'clsx';

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: Users, label: 'Customers', active: false },
  { icon: Layers, label: 'Inventory', active: false },
  { icon: PieChart, label: 'Reports', active: false },
  { icon: Zap, label: 'Automation', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export default function Sidebar({ isOpen, toggle }) {
  return (
    <aside className={clsx(
      "sticky top-0 h-screen bg-[#0f1219] border-r border-slate-800 transition-all duration-300 z-50 flex flex-col",
      isOpen ? "w-64" : "w-20"
    )}>
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5 text-white" fill="white" />
          </div>
          {isOpen && <span className="font-bold text-xl text-white tracking-tight">NEBULA</span>}
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1 mt-4">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className={clsx(
              "w-full flex items-center gap-4 px-3 py-3 rounded-xl transition-all group",
              item.active 
                ? "bg-indigo-600/10 text-indigo-400" 
                : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
            )}
          >
            <item.icon className={clsx("w-5 h-5", item.active ? "text-indigo-400" : "group-hover:scale-110 transition-transform")} />
            {isOpen && <span className="font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button className="w-full flex items-center gap-4 px-3 py-3 text-slate-400 hover:text-red-400 transition-colors">
          <LogOut className="w-5 h-5" />
          {isOpen && <span className="font-medium">Logout</span>}
        </button>
      </div>

      <button 
        onClick={toggle}
        className="absolute -right-3 top-12 w-6 h-6 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
      >
        {isOpen ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
      </button>
    </aside>
  );
}
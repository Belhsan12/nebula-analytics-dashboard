import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import StatsGrid from './components/StatsGrid';
import CustomChart from './components/CustomChart';
import ActivityTable from './components/ActivityTable';
import { motion } from 'framer-motion';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-purple-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="flex relative z-10">
        <Sidebar isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <main className="flex-1 flex flex-col min-w-0">
          <Navbar />
          
          <div className="p-6 lg:p-8 space-y-8 max-w-[1600px] mx-auto w-full">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold tracking-tight text-white"
                >
                  Dashboard Overview
                </motion.h1>
                <p className="text-slate-400 mt-1">Welcome back, Commander. Here's what's happening today.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-all text-sm font-medium">
                  Download Report
                </button>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white transition-all text-sm font-medium shadow-lg shadow-indigo-500/20">
                  Create New
                </button>
              </div>
            </header>

            <StatsGrid />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <CustomChart title="Revenue Growth" subtitle="Monthly recurring revenue trend" />
              </div>
              <div className="lg:col-span-1">
                <CustomChart title="User Retention" subtitle="Weekly active cohort analysis" type="bar" />
              </div>
            </div>

            <ActivityTable />
          </div>
        </main>
      </div>
    </div>
  );
}
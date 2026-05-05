import React from 'react';
import { motion } from 'framer-motion';

export default function CustomChart({ title, subtitle, type = 'line' }) {
  const points = [40, 60, 45, 90, 65, 85, 75, 100, 95, 120];
  const max = Math.max(...points);
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 h-[350px] flex flex-col"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-xs text-slate-500">{subtitle}</p>
        </div>
        <select className="bg-slate-800 border-none text-xs rounded-lg text-slate-300 focus:ring-0">
          <option>Last 30 Days</option>
          <option>Last 6 Months</option>
        </select>
      </div>

      <div className="flex-1 relative flex items-end gap-2 px-2">
        {type === 'line' ? (
          <svg className="w-full h-full overflow-visible" viewBox="0 0 400 150">
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d={`M ${points.map((p, i) => `${i * 44},${150 - (p/max) * 120}`).join(' L ')}`}
              fill="none"
              stroke="#6366f1"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <motion.path
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 1 }}
               d={`M ${points.map((p, i) => `${i * 44},${150 - (p/max) * 120}`).join(' L ')} L 396,150 L 0,150 Z`}
               fill="url(#lineGradient)"
            />
          </svg>
        ) : (
          <div className="w-full h-full flex items-end justify-between gap-1">
            {points.slice(0, 8).map((p, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${(p/max) * 100}%` }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex-1 bg-indigo-500/40 border-t border-indigo-500/50 rounded-t-sm hover:bg-indigo-500/60 transition-colors"
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="flex justify-between mt-4">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <span key={day} className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{day}</span>
        ))}
      </div>
    </motion.div>
  );
}
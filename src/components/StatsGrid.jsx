import React from 'react';
import { TrendingUp, Users, DollarSign, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Total Revenue', value: '$128,430', change: '+12.5%', icon: DollarSign, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { label: 'Active Users', value: '43,219', change: '+8.2%', icon: Users, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
  { label: 'Avg. Session', value: '18m 42s', change: '-2.4%', icon: MousePointer2, color: 'text-amber-400', bg: 'bg-amber-500/10' },
  { label: 'Conversion Rate', value: '4.83%', change: '+0.5%', icon: TrendingUp, color: 'text-purple-400', bg: 'bg-purple-500/10' },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ y: -5 }}
          className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
              {stat.change}
            </span>
          </div>
          <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
          <h3 className="text-2xl font-bold text-white mt-1">{stat.value}</h3>
        </motion.div>
      ))}
    </div>
  );
}
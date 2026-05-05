import React from 'react';
import { MoreHorizontal, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const activities = [
  { id: 1, user: 'Sarah Connor', event: 'Purchased Premium Plan', amount: '+$599.00', status: 'Completed', time: '2 mins ago', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
  { id: 2, user: 'John Doe', event: 'API Integration Started', amount: 'N/A', status: 'In Progress', time: '15 mins ago', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John' },
  { id: 3, user: 'Ellen Ripley', event: 'Renewed Subscription', amount: '+$249.00', status: 'Completed', time: '1 hour ago', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ellen' },
  { id: 4, user: 'Arthur Dent', event: 'Refund Requested', amount: '-$49.00', status: 'Pending', time: '3 hours ago', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arthur' },
];

export default function ActivityTable() {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
      <div className="p-6 border-b border-slate-800 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
        <button className="text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-500 text-xs uppercase tracking-wider border-b border-slate-800">
              <th className="px-6 py-4 font-semibold">Customer</th>
              <th className="px-6 py-4 font-semibold">Event</th>
              <th className="px-6 py-4 font-semibold">Amount</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {activities.map((item) => (
              <tr key={item.id} className="hover:bg-slate-800/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={item.img} className="w-8 h-8 rounded-full bg-slate-800" alt="" />
                    <div>
                      <p className="text-sm font-medium text-white">{item.user}</p>
                      <p className="text-xs text-slate-500">{item.time}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-slate-300">{item.event}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    {item.amount.startsWith('+') ? (
                      <ArrowUpRight size={14} className="text-emerald-400" />
                    ) : item.amount !== 'N/A' ? (
                      <ArrowDownRight size={14} className="text-red-400" />
                    ) : null}
                    <span className={item.amount.startsWith('+') ? 'text-emerald-400' : 'text-slate-300'}>
                      {item.amount}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase ${
                    item.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' : 
                    item.status === 'Pending' ? 'bg-amber-500/10 text-amber-400' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 text-slate-500 hover:text-white transition-colors">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
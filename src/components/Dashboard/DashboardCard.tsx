import React from 'react';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend: string;
}

export function DashboardCard({ icon: Icon, label, value, trend }: DashboardCardProps) {
  return (
    <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20">
      <div className="flex items-center justify-between">
        <Icon className="w-6 h-6 text-purple-500" />
        <span className={`text-sm ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {trend}
        </span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold">{value}</h3>
      <p className="text-sm opacity-70">{label}</p>
    </div>
  );
}
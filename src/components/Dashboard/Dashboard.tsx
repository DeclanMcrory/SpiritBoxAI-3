import React from 'react';
import { Radio, Waves, Camera, Database } from 'lucide-react';
import { DashboardCard } from './DashboardCard';
import { useDashboardStats } from '../../hooks/useDashboardStats';

export function Dashboard() {
  const stats = useDashboardStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <DashboardCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
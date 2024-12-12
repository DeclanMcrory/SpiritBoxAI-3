import { useState } from 'react';
import { Radio, Waves, Camera, Database } from 'lucide-react';

export function useDashboardStats() {
  const [stats] = useState([
    { icon: Radio, label: 'EVP Events', value: '12', trend: '+3' },
    { icon: Waves, label: 'EMF Readings', value: '487 µT', trend: '-2%' },
    { icon: Camera, label: 'Anomalies', value: '3', trend: '+1' },
    { icon: Database, label: 'Data Points', value: '1,284', trend: '+168' },
  ]);

  return stats;
}
import { useState, useEffect } from 'react';

interface AnalysisEvent {
  time: string;
  type: string;
  confidence: number;
  description: string;
}

export function useAnalysisEvents() {
  const [events] = useState<AnalysisEvent[]>([
    { time: '21:34:12', type: 'EVP', confidence: 89, description: 'Clear voice detected: "Help us"' },
    { time: '21:32:45', type: 'EMF', confidence: 95, description: 'Sudden spike in electromagnetic field' },
    { time: '21:30:18', type: 'Motion', confidence: 78, description: 'Unexplained movement detected' },
  ]);

  return events;
}
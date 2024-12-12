import React from 'react';
import { AnalysisEvent } from './AnalysisEvent';
import { useAnalysisEvents } from '../../hooks/useAnalysisEvents';

export function AnalysisPanel() {
  const events = useAnalysisEvents();

  return (
    <div className="rounded-xl border border-purple-500/20 backdrop-blur-sm">
      <div className="p-4 border-b border-purple-500/20">
        <h2 className="text-xl font-semibold">Real-Time Analysis</h2>
      </div>
      <div className="p-4 space-y-4">
        {events.map((event, index) => (
          <AnalysisEvent key={index} {...event} />
        ))}
      </div>
    </div>
  );
}
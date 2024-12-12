import React from 'react';

interface AnalysisEventProps {
  time: string;
  type: string;
  confidence: number;
  description: string;
}

export function AnalysisEvent({ time, type, confidence, description }: AnalysisEventProps) {
  return (
    <div className="bg-gradient-to-r from-purple-500/10 to-transparent p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm opacity-70">{time}</span>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">{type}</span>
          <div className="px-2 py-1 bg-purple-500/20 rounded-full text-xs">
            {confidence}% confidence
          </div>
        </div>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
}
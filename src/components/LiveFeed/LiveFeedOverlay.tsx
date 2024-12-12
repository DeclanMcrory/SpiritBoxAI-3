import React from 'react';

interface LiveFeedOverlayProps {
  isRecording: boolean;
}

export function LiveFeedOverlay({ isRecording }: LiveFeedOverlayProps) {
  return (
    <div className="absolute top-4 left-4 flex items-center space-x-2">
      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
      <span className="text-red-500 text-sm font-medium">
        {isRecording ? 'LIVE' : 'OFFLINE'}
      </span>
    </div>
  );
}
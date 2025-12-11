import React from 'react';
import { Mic } from 'lucide-react';

interface RecordButtonProps {
  isRecording: boolean;
  onStart: () => void;
  onStop: () => void;
  disabled?: boolean;
}

export const RecordButton: React.FC<RecordButtonProps> = ({ 
  isRecording, 
  onStart, 
  onStop,
  disabled 
}) => {
  // Prevent default context menu on long press for mobile
  const handleContextMenu = (e: React.MouseEvent) => e.preventDefault();

  return (
    <div className="relative flex flex-col items-center justify-center mb-8 select-none">
      {/* Pulse Effect Ring */}
      {isRecording && (
        <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping scale-150"></span>
      )}
      
      <button
        disabled={disabled}
        onMouseDown={onStart}
        onMouseUp={onStop}
        onMouseLeave={onStop} // Stop if user drags finger/mouse out
        onTouchStart={onStart}
        onTouchEnd={onStop}
        onContextMenu={handleContextMenu}
        className={`
          relative z-10 flex flex-col items-center justify-center
          w-40 h-40 rounded-full border-4 transition-all duration-200
          shadow-lg focus:outline-none touch-manipulation
          ${isRecording 
            ? 'bg-red-600 border-red-200 scale-110 shadow-red-500/50' 
            : 'bg-gradient-to-br from-red-500 to-red-600 border-red-700 hover:brightness-110 active:scale-95'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed grayscale' : 'cursor-pointer'}
        `}
      >
        <Mic 
          size={isRecording ? 48 : 42} 
          className={`text-white transition-all ${isRecording ? 'animate-pulse' : ''}`} 
        />
        <span className="mt-2 text-white font-semibold text-sm">
          {isRecording ? "Gravando..." : "Segure"}
        </span>
      </button>
      
      {!isRecording && (
        <p className="mt-4 text-gray-500 text-sm font-medium animate-pulse">
          Segure para gravar
        </p>
      )}
    </div>
  );
};
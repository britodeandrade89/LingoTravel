import React from 'react';
import { Volume2, ArrowRightLeft } from 'lucide-react';

interface ActionButtonsProps {
  hasRecording: boolean;
  onPlayNative: () => void;
  onCompare: () => void;
  isPlayingNative: boolean;
  isPlayingComparison: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  hasRecording,
  onPlayNative,
  onCompare,
  isPlayingNative,
  isPlayingComparison
}) => {
  return (
    <div className="w-full max-w-md flex flex-col gap-4 px-4">
      {/* Native Audio Button */}
      <button
        onClick={onPlayNative}
        disabled={isPlayingNative || isPlayingComparison}
        className={`
          w-full flex items-center justify-center gap-3 py-4 rounded-full font-bold text-white shadow-md transition-all
          ${isPlayingNative 
            ? 'bg-blue-400 cursor-wait' 
            : 'bg-blue-500 hover:bg-blue-600 active:scale-95'
          }
        `}
      >
        <Volume2 size={24} className={isPlayingNative ? 'animate-bounce' : ''} />
        {isPlayingNative ? "Tocando..." : "Ouvir Nativo"}
      </button>

      {/* Compare Button (Conditional) */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${hasRecording ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
        <button
          onClick={onCompare}
          disabled={isPlayingComparison || isPlayingNative}
          className={`
            w-full flex items-center justify-center gap-3 py-4 rounded-full font-bold text-white shadow-md transition-all
            ${isPlayingComparison 
              ? 'bg-green-400 cursor-wait' 
              : 'bg-green-500 hover:bg-green-600 active:scale-95'
            }
          `}
        >
          <ArrowRightLeft size={24} className={isPlayingComparison ? 'animate-spin' : ''} />
          {isPlayingComparison ? "Comparando..." : "COMPARAR"}
        </button>
      </div>
    </div>
  );
};
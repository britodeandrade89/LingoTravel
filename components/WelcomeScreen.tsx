import React from 'react';
import { Mic, Globe2 } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center animate-fade-in">
      <div className="bg-white p-6 rounded-3xl shadow-xl shadow-indigo-100 mb-8 transform rotate-3">
        <Globe2 size={64} className="text-indigo-600" />
      </div>
      
      <h1 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
        Lingo<span className="text-indigo-600">Travel</span>
      </h1>
      
      <p className="text-slate-500 text-lg mb-12 max-w-xs leading-relaxed">
        Aprimore sua pronúncia comparando sua voz com a de falantes nativos.
      </p>

      <button
        onClick={onStart}
        className="w-full max-w-xs bg-indigo-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 transition-all flex items-center justify-center gap-2"
      >
        <Mic size={20} />
        Começar Agora
      </button>

      <p className="mt-8 text-xs text-slate-400 font-medium">
        100% Offline • Gratuito
      </p>
    </div>
  );
};
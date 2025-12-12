import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Volume2, Mic, RotateCcw, AlertTriangle } from 'lucide-react';
import { PhraseData, Dialect } from '../types';

interface ConversationModeProps {
  phrase: PhraseData;
  dialect: Dialect;
  onBack: () => void;
}

export const ConversationMode: React.FC<ConversationModeProps> = ({
  phrase,
  dialect,
  onBack
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  
  // Ref for Speech Recognition
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Initialize Speech Recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = dialect.code; // Listen in the target dialect

      recognitionRef.current.onresult = (event: any) => {
        const current = event.resultIndex;
        const transcriptText = event.results[current][0].transcript;
        setTranscript(transcriptText);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error("Speech recognition error", event.error);
        if (event.error === 'no-speech') {
           // Ignore no-speech errors usually
        } else {
           setError("Erro ao ouvir. Verifique a internet.");
        }
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    } else {
      setError("Seu navegador não suporta reconhecimento de voz.");
    }
  }, [dialect]);

  const speakPhrase = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(phrase.target_text);
      utterance.lang = dialect.code;
      utterance.rate = 0.9;
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleListening = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setError(null);
      setTranscript('');
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-slate-900 animate-fade-in text-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-slate-800">
        <button 
          onClick={onBack}
          className="p-2 rounded-full hover:bg-slate-800 transition-colors"
        >
          <ChevronLeft className="text-white" size={28} />
        </button>
        <div className="ml-4 flex items-center gap-2">
           <img 
               src={`https://flagcdn.com/w40/${dialect.countryCode}.png`}
               alt="flag"
               className="w-6 h-4 object-cover rounded shadow-sm"
           />
           <h1 className="text-lg font-bold">Modo Conversação</h1>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-6 gap-6">
        
        {/* User Card (What I want to say) */}
        <div className="bg-indigo-600 rounded-3xl p-6 shadow-lg shadow-indigo-900/50 flex flex-col items-start gap-4 transform transition-all">
          <div className="w-full">
            <span className="text-indigo-200 text-sm font-bold uppercase tracking-wider mb-1 block">Você diz</span>
            <p className="text-3xl font-bold leading-tight text-white mb-2">
              {phrase.target_text}
            </p>
            <p className="text-indigo-200 text-lg border-t border-indigo-500/30 pt-2 mt-2">
              {phrase.pt}
            </p>
          </div>
          
          <button 
            onClick={speakPhrase}
            disabled={isPlaying}
            className={`w-full py-4 rounded-2xl flex items-center justify-center gap-3 font-bold text-indigo-900 transition-all ${isPlaying ? 'bg-white/80 scale-[0.98]' : 'bg-white hover:scale-[1.02] shadow-xl'}`}
          >
            <Volume2 size={24} className={isPlaying ? 'animate-pulse' : ''} />
            {isPlaying ? "Falando..." : "Falar por mim"}
          </button>
        </div>

        {/* Local Card (What they reply) */}
        <div className={`flex-1 bg-slate-800 rounded-3xl p-6 shadow-lg flex flex-col items-center justify-between border-2 ${isListening ? 'border-red-500 animate-pulse' : 'border-slate-700'}`}>
          <div className="w-full">
            <span className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4 block flex items-center gap-2">
               Eles respondem 
               {isListening && <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-ping"/>}
            </span>
            
            {transcript ? (
               <div className="animate-slide-up">
                   <p className="text-2xl font-medium text-slate-100 mb-2">
                    "{transcript}"
                   </p>
                   <p className="text-slate-400 text-sm italic">
                     *Texto detectado. Tradução requer internet.
                   </p>
               </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-40 opacity-30">
                    <p className="text-center text-slate-400 font-medium">
                        Toque no microfone para escutar e transcrever a resposta.
                    </p>
                </div>
            )}
            
            {error && (
                <div className="mt-4 bg-red-500/10 text-red-400 p-3 rounded-xl text-sm flex items-center gap-2">
                    <AlertTriangle size={16} />
                    {error}
                </div>
            )}
          </div>

          <div className="w-full mt-6">
            <button
                onClick={toggleListening}
                className={`w-full py-6 rounded-2xl flex items-center justify-center gap-3 font-bold transition-all shadow-xl ${
                    isListening 
                    ? 'bg-red-500 text-white shadow-red-900/20' 
                    : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                }`}
            >
                {isListening ? (
                    <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Ouvindo... (Toque para parar)
                    </>
                ) : (
                    <>
                        <Mic size={24} />
                        {transcript ? "Ouvir Novamente" : "Ouvir Resposta"}
                    </>
                )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
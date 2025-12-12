import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageSquareText } from 'lucide-react';
import { PhraseData, Dialect } from '../types';
import { PhraseCard } from './PhraseCard';
import { RecordButton } from './RecordButton';
import { ActionButtons } from './ActionButtons';

interface PracticeSessionProps {
  languageName: string;
  dialect: Dialect;
  phrases: PhraseData[];
  onBack: () => void;
  onConversationMode: (phrase: PhraseData) => void;
}

export const PracticeSession: React.FC<PracticeSessionProps> = ({ 
  languageName,
  dialect, 
  phrases, 
  onBack,
  onConversationMode
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [userAudioUrl, setUserAudioUrl] = useState<string | null>(null);
  const [isPlayingNative, setIsPlayingNative] = useState(false);
  const [isPlayingComparison, setIsPlayingComparison] = useState(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const userAudioRef = useRef<HTMLAudioElement | null>(null);

  const currentPhrase = phrases[currentIndex];

  // Reset state when changing phrase
  useEffect(() => {
    setUserAudioUrl(null);
    audioChunksRef.current = [];
  }, [currentIndex]);

  const speakNative = useCallback(async (): Promise<void> => {
    return new Promise((resolve) => {
      if (!('speechSynthesis' in window)) {
        alert("Seu navegador não suporta áudio nativo.");
        resolve();
        return;
      }

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentPhrase.target_text);
      // Use the specific dialect code (e.g. 'en-ZA' for South Africa)
      utterance.lang = dialect.code; 
      utterance.rate = 0.85; 
      
      utterance.onstart = () => setIsPlayingNative(true);
      utterance.onend = () => {
        setIsPlayingNative(false);
        resolve();
      };
      utterance.onerror = () => {
        setIsPlayingNative(false);
        resolve();
      };

      window.speechSynthesis.speak(utterance);
    });
  }, [currentPhrase, dialect]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      
      mediaRecorderRef.current = recorder;
      audioChunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) audioChunksRef.current.push(event.data);
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setUserAudioUrl(audioUrl);
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Permissão de microfone necessária.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const playUserAudio = (): Promise<void> => {
    return new Promise((resolve) => {
      if (!userAudioUrl) {
        resolve();
        return;
      }
      if (userAudioRef.current) userAudioRef.current.pause();

      const audio = new Audio(userAudioUrl);
      userAudioRef.current = audio;
      
      audio.onended = () => resolve();
      audio.onerror = () => resolve();
      
      audio.play().catch(() => resolve());
    });
  };

  const handleCompare = async () => {
    if (isPlayingComparison) return;
    setIsPlayingComparison(true);
    await speakNative();
    await new Promise(r => setTimeout(r, 600)); // Pause between voices
    await playUserAudio();
    setIsPlayingComparison(false);
  };

  const handleNext = () => {
    if (currentIndex < phrases.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full p-4 relative animate-fade-in pb-20">
      {/* Header */}
      <div className="w-full max-w-md flex items-center justify-between mb-4 pt-2">
        <button onClick={onBack} className="p-2 text-slate-500 hover:bg-slate-100 rounded-full">
          <ChevronLeft size={24} />
        </button>
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm border border-slate-200">
                <img 
                    src={`https://flagcdn.com/w80/${dialect.countryCode}.png`}
                    alt="flag"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest leading-none mb-1">
                    {languageName} ({dialect.name})
                </span>
                <span className="text-xs font-bold text-indigo-600 text-center">
                    Frase {currentIndex + 1} de {phrases.length}
                </span>
            </div>
        </div>
        <div className="w-10"></div>
      </div>

      <PhraseCard data={currentPhrase} />

      {/* Conversation Mode Trigger */}
      <button 
        onClick={() => onConversationMode(currentPhrase)}
        className="w-full max-w-md mb-6 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 p-4 rounded-xl flex items-center justify-center gap-2 font-semibold transition-colors border border-indigo-200"
      >
        <MessageSquareText size={20} />
        Abrir Modo Conversação
      </button>

      <div className="flex-1 w-full max-w-md flex flex-col items-center justify-center">
        <ActionButtons 
          hasRecording={!!userAudioUrl}
          onPlayNative={() => speakNative()}
          onCompare={handleCompare}
          isPlayingNative={isPlayingNative}
          isPlayingComparison={isPlayingComparison}
        />
        
        <div className="h-6"></div>

        <RecordButton 
          isRecording={isRecording}
          onStart={startRecording}
          onStop={stopRecording}
          disabled={isPlayingComparison || isPlayingNative}
        />
      </div>

      {/* Navigation Footer */}
      <div className="w-full max-w-md flex justify-between items-center mt-6 pb-4 px-4">
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          className={`flex items-center gap-1 font-medium text-sm p-3 rounded-xl transition-colors ${currentIndex === 0 ? 'text-slate-300' : 'text-slate-600 hover:bg-slate-100'}`}
        >
          <ChevronLeft size={18} /> Anterior
        </button>
        
        <button 
          onClick={handleNext} 
          disabled={currentIndex === phrases.length - 1}
          className={`flex items-center gap-1 font-medium text-sm p-3 rounded-xl transition-colors ${currentIndex === phrases.length - 1 ? 'text-slate-300' : 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100'}`}
        >
          Próxima <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
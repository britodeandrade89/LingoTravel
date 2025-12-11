export type ScreenState = 'welcome' | 'language-select' | 'dialect-select' | 'category-select' | 'practice';

export interface PhraseData {
  id: number;
  pt: string;
  target_text: string;
}

export interface Language {
  id: string;
  name: string;
  flag: string;
  countryCode: string; // New field for flag image lookup (e.g. 'us', 'br')
  code: string; // Default IETF language tag (e.g., 'en-US')
}

export interface Dialect {
  id: string;
  name: string;
  countryCode: string; // For flag (e.g., 'za')
  code: string; // Specific IETF tag (e.g., 'en-ZA')
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface AudioState {
  isRecording: boolean;
  isPlayingNative: boolean;
  isPlayingUser: boolean;
  userAudioUrl: string | null;
}
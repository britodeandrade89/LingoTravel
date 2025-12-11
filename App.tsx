import React, { useState } from 'react';
import { ScreenState, Language, Category, Dialect } from './types';
import { LANGUAGES, CATEGORIES, PHRASES, DIALECTS } from './data';
import { WelcomeScreen } from './components/WelcomeScreen';
import { SelectionScreen } from './components/SelectionScreen';
import { PracticeSession } from './components/PracticeSession';

// Background decoration wrapper
const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="min-h-screen bg-slate-50 flex flex-col items-center relative overflow-hidden font-sans">
    {/* Abstract Background Shapes */}
    <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-200 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
    <div className="absolute bottom-[-10%] left-[-20%] w-[600px] h-[600px] bg-teal-200 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
    
    {/* Content */}
    <div className="z-10 w-full flex-1 flex flex-col">
      {children}
    </div>
  </div>
);

const App: React.FC = () => {
  const [screen, setScreen] = useState<ScreenState>('welcome');
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [selectedDialect, setSelectedDialect] = useState<Dialect | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleStart = () => setScreen('language-select');

  const handleLanguageSelect = (lang: Language) => {
    setSelectedLanguage(lang);
    setScreen('dialect-select');
  };

  const handleDialectSelect = (dialect: Dialect) => {
    setSelectedDialect(dialect);
    setScreen('category-select');
  };

  const handleCategorySelect = (cat: Category) => {
    setSelectedCategory(cat);
    setScreen('practice');
  };

  const getPhrases = () => {
    if (!selectedLanguage || !selectedCategory) return [];
    // Note: We use the main language ID to fetch phrases, but the dialect code for TTS in PracticeSession
    return PHRASES[selectedLanguage.id]?.[selectedCategory.id] || [];
  };

  const getDialectsForLanguage = () => {
    if (!selectedLanguage) return [];
    return DIALECTS[selectedLanguage.id] || [];
  };

  return (
    <Wrapper>
      {screen === 'welcome' && (
        <WelcomeScreen onStart={handleStart} />
      )}

      {screen === 'language-select' && (
        <SelectionScreen 
          title="Qual idioma?"
          subtitle="Escolha o idioma base que deseja praticar."
          items={LANGUAGES}
          type="language"
          onSelect={handleLanguageSelect}
          onBack={() => setScreen('welcome')}
        />
      )}

      {screen === 'dialect-select' && selectedLanguage && (
        <SelectionScreen 
          title="Qual sotaque?"
          subtitle={`Escolha a região para a pronúncia em ${selectedLanguage.name}.`}
          items={getDialectsForLanguage()}
          type="language" // We reuse the 'language' type layout for dialects as it renders flags nicely
          onSelect={handleDialectSelect}
          onBack={() => setScreen('language-select')}
          headerIcon={
             <img 
                src={`https://flagcdn.com/w80/${selectedLanguage.countryCode}.png`} 
                alt="Flag" 
                className="w-full h-full object-cover opacity-50 grayscale" 
             />
          }
        />
      )}

      {screen === 'category-select' && selectedDialect && (
        <SelectionScreen 
          title="O que aprender?"
          subtitle="Escolha um tópico para começar."
          items={CATEGORIES}
          type="category"
          onSelect={handleCategorySelect}
          onBack={() => setScreen('dialect-select')}
          headerIcon={
             <img 
                src={`https://flagcdn.com/w80/${selectedDialect.countryCode}.png`} 
                alt="Flag" 
                className="w-full h-full object-cover" 
             />
          }
        />
      )}

      {screen === 'practice' && selectedLanguage && selectedDialect && (
        <PracticeSession 
          languageName={selectedLanguage.name}
          dialect={selectedDialect}
          phrases={getPhrases()}
          onBack={() => setScreen('category-select')}
        />
      )}
    </Wrapper>
  );
};

export default App;
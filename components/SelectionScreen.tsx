import React from 'react';
import { ChevronLeft } from 'lucide-react';
import * as Icons from 'lucide-react';

interface SelectionScreenProps {
  title: string;
  subtitle: string;
  items: any[];
  type: 'language' | 'category';
  onSelect: (item: any) => void;
  onBack: () => void;
  headerIcon?: React.ReactNode;
}

export const SelectionScreen: React.FC<SelectionScreenProps> = ({
  title,
  subtitle,
  items,
  type,
  onSelect,
  onBack,
  headerIcon
}) => {
  return (
    <div className="min-h-screen flex flex-col p-6 max-w-lg mx-auto w-full animate-slide-up font-sans">
      <header className="flex items-center mb-4 pt-2">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors active:scale-95"
        >
          <ChevronLeft size={32} strokeWidth={2.5} />
        </button>
      </header>

      <div className="flex flex-row items-center gap-4 mb-2">
        <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight leading-tight">
          {title}
        </h2>
        {headerIcon && (
            <div className="w-10 h-10 shadow-sm rounded-full bg-white flex items-center justify-center border border-slate-100 overflow-hidden shrink-0">
                {headerIcon}
            </div>
        )}
      </div>
      
      <p className="text-slate-500 mb-8 text-base font-medium leading-relaxed">
        {subtitle}
      </p>

      <div className="flex flex-col gap-4 pb-8">
        {items.map((item) => {
          // Dynamic Icon rendering for categories
          const IconComponent = type === 'category' ? (Icons as any)[item.icon] : null;
          const isCategory = type === 'category';

          return (
            <button
              key={item.id}
              onClick={() => onSelect(item)}
              className="group bg-white p-5 rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-transparent flex items-center gap-5 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 text-left"
            >
              {isCategory ? (
                <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 group-hover:bg-indigo-100 group-hover:text-indigo-700 transition-colors">
                  {IconComponent && <IconComponent size={26} strokeWidth={2.5} />}
                </div>
              ) : (
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-sm border border-slate-100 shrink-0 relative bg-slate-50">
                  <img 
                    src={`https://flagcdn.com/w160/${item.countryCode}.png`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              
              <div className="flex-1 flex flex-col justify-center">
                {/* For languages, we show the code and name */}
                {type === 'language' && (
                     <div className="flex items-center gap-3">
                         <span className="font-bold text-slate-800 text-lg uppercase tracking-wider">{item.countryCode.toUpperCase()}</span>
                         <h3 className="font-bold text-slate-800 text-lg tracking-tight">
                            {item.name}
                         </h3>
                     </div>
                )}
                
                {/* For categories, standard layout with description */}
                {type === 'category' && (
                    <>
                        <h3 className="font-bold text-slate-800 text-lg tracking-tight mb-1">
                        {item.name}
                        </h3>
                        {item.description && (
                        <p className="text-slate-400 text-xs font-medium leading-snug">
                            {item.description}
                        </p>
                        )}
                    </>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
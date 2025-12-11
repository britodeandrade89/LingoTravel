import React from 'react';
import { PhraseData } from '../types';

interface PhraseCardProps {
  data: PhraseData;
}

export const PhraseCard: React.FC<PhraseCardProps> = ({ data }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md mb-8 border border-gray-100 transform transition-all hover:scale-[1.02]">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
        {data.pt}
      </h2>
      <p className="text-center text-gray-500 font-medium">
        {data.target_text}
      </p>
    </div>
  );
};
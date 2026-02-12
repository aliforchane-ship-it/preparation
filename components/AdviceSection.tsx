
import React from 'react';
import { ADVICE_LIST } from '../constants.ts';

const AdviceSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Conseils de Survie en TSI 💡</h2>
        <p className="text-slate-600">Quelques pépites pour naviguer sereinement à travers les deux années de prépa.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ADVICE_LIST.map((advice, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
            <div className="flex flex-wrap gap-2 mb-4">
              {advice.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">{advice.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed flex-grow">
              {advice.content}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-8 rounded-r-2xl mt-12">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-bold text-indigo-900">Note Importante</h4>
            <p className="mt-2 text-indigo-700 leading-relaxed">
              La prépa TSI n'est pas une course de vitesse, c'est un marathon. Les ressources ici sont là pour vous aider, mais rien ne remplace le travail personnel régulier et l'écoute active en classe. Courage à tous les futurs ingénieurs !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdviceSection;

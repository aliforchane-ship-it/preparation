
import React from 'react';
import { RAMADAN_PLAN } from '../constants';

const RamadanPlanner: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-indigo-900 px-6 py-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-2">Programme Spécial Ramadan 🌙</h2>
        <p className="text-indigo-200">Optimisez vos révisions CPGE pendant le mois sacré</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
            <tr>
              <th className="px-6 py-4">Créneau</th>
              <th className="px-6 py-4">Activité</th>
              <th className="px-6 py-4">Focus</th>
              <th className="px-6 py-4">Intensité</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {RAMADAN_PLAN.map((slot, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-indigo-600 whitespace-nowrap">{slot.time}</td>
                <td className="px-6 py-4 text-slate-800 font-medium">{slot.activity}</td>
                <td className="px-6 py-4 text-slate-600 text-sm">{slot.focus}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    slot.intensity === 'High' ? 'bg-red-100 text-red-700' :
                    slot.intensity === 'Medium' ? 'bg-amber-100 text-amber-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {slot.intensity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6 bg-slate-50 border-t border-slate-200">
        <h3 className="font-semibold text-slate-800 mb-2">Conseils Nutrition :</h3>
        <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
          <li>Évitez les aliments trop sucrés au Suhoor pour éviter le crash glycémique.</li>
          <li>Hydratez-vous massivement par petites gorgées entre l'Iftar et le Suhoor.</li>
          <li>Privilégiez les sucres lents (pain complet, avoine) le matin.</li>
        </ul>
      </div>
    </div>
  );
};

export default RamadanPlanner;


import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import ResourceCard from './components/ResourceCard';
import RamadanPlanner from './components/RamadanPlanner';
import AdviceSection from './components/AdviceSection';
import LoginPage from './components/LoginPage';
import { RESOURCES } from './constants';
import { ResourceCategory } from './types';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('tsi_hub_auth') === 'true';
  });
  const [activeTab, setActiveTab] = useState('resources');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    localStorage.setItem('tsi_hub_auth', isLoggedIn.toString());
  }, [isLoggedIn]);

  const categories = ['All', ...Object.values(ResourceCategory)];

  const filteredResources = useMemo(() => {
    return RESOURCES.filter(res => {
      const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          res.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  if (!isLoggedIn) {
    return <LoginPage onLogin={setIsLoggedIn} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'resources' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
              <div>
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                  Bibliothèque de Ressources TSI
                </h1>
                <p className="text-slate-600">Retrouvez tous les drives, cours et exercices pour réussir vos CPGE.</p>
              </div>
              <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Rechercher une ressource..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none w-full sm:w-64 transition-all"
                />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-white transition-all"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredResources.map((res, idx) => (
                  <ResourceCard key={idx} resource={res} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="text-lg">Aucune ressource ne correspond à votre recherche.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'ramadan' && (
          <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
            <RamadanPlanner />
          </div>
        )}

        {activeTab === 'advice' && (
          <div className="animate-in fade-in duration-500">
            <AdviceSection />
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-slate-200 p-1.5 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18 18.247 18.477 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="font-bold text-slate-700">TSI PrepHub</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Développé pour la communauté TSI. Bonne chance pour vos concours !
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="text-slate-400 hover:text-indigo-600 text-sm font-medium transition-colors"
            >
              Déconnexion
            </button>
            <a href="https://youtu.be/hMeR5ZTAnt0?si=ltQwzdhLLvMXPVTS" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-red-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

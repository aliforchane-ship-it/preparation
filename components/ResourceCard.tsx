
import React from 'react';
import { Resource } from '../types';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <div className={`group bg-white p-5 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1 ${resource.important ? 'border-amber-200 bg-amber-50/30' : 'border-slate-200'}`}>
      <div className="flex justify-between items-start mb-3">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
          {resource.category}
        </span>
        {resource.important && (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-indigo-600">
        {resource.title}
      </h3>
      {resource.description && (
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
          {resource.description}
        </p>
      )}
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
      >
        Ouvrir le lien
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
};

export default ResourceCard;

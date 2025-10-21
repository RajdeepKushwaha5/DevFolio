
import React, { useState } from 'react';
import { PortfolioCard } from './PortfolioCard';
import { Portfolio } from '../types';

interface PortfolioGridProps {
  portfolios: Portfolio[];
  onLike: (id: number) => void;
}

const ITEMS_PER_PAGE = 8;

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({ portfolios, onLike }) => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE);
  };
  
  if (portfolios.length === 0) {
    return (
        <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 mb-6">
              <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-3">No Portfolios Found</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">Try adjusting your search or filter criteria to discover amazing portfolios.</p>
        </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
        {portfolios.slice(0, visibleCount).map(portfolio => (
          <PortfolioCard 
            key={portfolio.id} 
            portfolio={portfolio} 
            onLike={onLike}
          />
        ))}
      </div>
      {visibleCount < portfolios.length && (
        <div className="text-center mt-16">
          <button
            onClick={handleLoadMore}
            className="group relative px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Load More Portfolios</span>
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Showing {visibleCount} of {portfolios.length} portfolios
          </p>
        </div>
      )}
    </>
  );
};

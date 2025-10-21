
import React, { useState } from 'react';
import { CodeIcon, SearchIcon } from './Icons';

interface HeaderProps {
  openSubmitModal: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sortOrder: string;
  onSortChange: (order: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  openSubmitModal,
  searchTerm,
  setSearchTerm,
  sortOrder,
  onSortChange
}) => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  return (
    <header className="glass-effect sticky top-0 z-50 border-b border-[#00ff6a]/30 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative cyber-border bg-[#0a0e14] p-2">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff6a] to-[#00ffff] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <CodeIcon className="h-5 w-5 text-[#00ff6a] relative z-10" />
            </div>
            <span className="text-xl font-bold font-mono text-[#00ff6a] tracking-wider">
              <span className="text-[#00ffff]">&lt;</span>DEV<span className="text-white">FOLIO</span><span className="text-[#00ffff]">/&gt;</span>
            </span>
          </div>

          {/* Center - Cyber Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full group">
              <div className="absolute -inset-0.5 bg-[#00ff6a] opacity-0 group-focus-within:opacity-20 blur transition-opacity duration-300"></div>
              <div className="relative flex items-center cyber-border bg-[#0f1419]">
                <SearchIcon className="absolute left-3 h-4 w-4 text-[#00ff6a] group-focus-within:text-[#00ffff] transition-colors duration-200" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="> search_portfolios..."
                  className="w-full pl-10 pr-24 py-2.5 text-sm text-[#00ff6a] bg-transparent border-none focus:outline-none font-mono placeholder:text-gray-600"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-20 text-[#00ff6a] hover:text-[#00ffff] transition-colors"
                    aria-label="Clear search"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
                {/* Cyber Sort Dropdown */}
                <select
                  value={sortOrder}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="absolute right-2 px-2 py-1 text-xs bg-[#0a0e14] border border-[#00ff6a]/30 text-[#00ff6a] focus:outline-none focus:border-[#00ffff] cursor-pointer appearance-none pr-6 font-mono"
                  aria-label="Sort portfolios"
                >
                  <option value="default">DEFAULT</option>
                  <option value="likes-desc">MOST_LIKED</option>
                  <option value="likes-asc">LEAST_LIKED</option>
                </select>
                <svg className="absolute right-3 h-3 w-3 text-[#00ff6a] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              className="md:hidden p-2 text-[#00ff6a] hover:text-[#00ffff] transition-colors"
              aria-label="Toggle search"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            
            <button
              onClick={openSubmitModal}
              className="cyber-button text-xs px-4 py-2"
            >
              <span className="flex items-center space-x-1.5">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="hidden sm:inline">SUBMIT</span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Cyber Search Bar */}
        {isSearchExpanded && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top duration-200">
            <div className="relative cyber-border bg-[#0f1419] mb-2">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#00ff6a]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="> search..."
                className="w-full pl-10 pr-4 py-2.5 text-sm text-[#00ff6a] bg-transparent border-none focus:outline-none font-mono placeholder:text-gray-600"
              />
            </div>
            <select
              value={sortOrder}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full px-3 py-2.5 text-sm bg-[#0f1419] border border-[#00ff6a]/30 text-[#00ff6a] focus:outline-none focus:border-[#00ffff] font-mono cyber-border"
            >
              <option value="default">&gt; SORT: DEFAULT</option>
              <option value="likes-desc">&gt; SORT: MOST_LIKED</option>
              <option value="likes-asc">&gt; SORT: LEAST_LIKED</option>
            </select>
          </div>
        )}

      </div>
    </header>
  );
};

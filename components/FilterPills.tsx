
import React from 'react';

interface FilterPillsProps {
  techs: string[];
  activeFilters: string[];
  onFilterChange: (tech: string) => void;
}

export const FilterPills: React.FC<FilterPillsProps> = ({ techs, activeFilters, onFilterChange }) => {
  return (
    <div className="flex justify-center flex-wrap gap-3">
      {techs.map((tech, index) => {
        const isActive = activeFilters.includes(tech);
        return (
          <button
            key={tech}
            onClick={() => onFilterChange(tech)}
            className={`stagger-item relative px-4 py-2 text-xs font-bold font-mono uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
              isActive
                ? 'cyber-border bg-gradient-to-r from-[#00ff6a] to-[#00ffff] text-[#0a0e14] shadow-lg'
                : 'cyber-border bg-[#0f1419] text-[#00ff6a] hover:bg-[#1a1f29] hover:text-[#00ffff]'
            }`}
            style={{ 
              animationDelay: `${index * 0.05}s`,
              boxShadow: isActive ? '0 0 20px rgba(0, 255, 106, 0.6), inset 0 0 20px rgba(0, 255, 106, 0.2)' : 'none'
            }}
          >
            {/* Cyber Active indicator */}
            {isActive && (
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-[#00ffff] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 bg-[#00ffff]"></span>
              </span>
            )}
            <span className="relative z-10">
              <span className="text-[#00ffff]">[</span>{tech}<span className="text-[#00ffff]">]</span>
            </span>
          </button>
        );
      })}
    </div>
  );
};

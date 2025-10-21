import React, { useState } from 'react';
import { Portfolio } from '../types';
import { GithubIcon, GlobeIcon } from './Icons';

interface PortfolioCardProps {
  portfolio: Portfolio;
  onLike: (id: number) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ portfolio, onLike }) => {
  const [isAnimatingLike, setIsAnimatingLike] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [localLikes, setLocalLikes] = useState(portfolio.likes);

  const handleLikeClick = () => {
    if (isAnimatingLike) return;
    
    setLocalLikes(prev => prev + 1);
    onLike(portfolio.id);
    setIsAnimatingLike(true);
    setTimeout(() => setIsAnimatingLike(false), 500);
  };

  return (
    <div 
      className="group relative cyber-border overflow-hidden transition-all duration-500 bg-[#0f1419] hover:bg-[#1a1f29]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ boxShadow: isHovered ? '0 0 30px rgba(0, 255, 106, 0.3), inset 0 0 30px rgba(0, 255, 106, 0.1)' : '0 4px 20px rgba(0, 0, 0, 0.5)' }}
    >
      {/* Cyber Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={portfolio.imageUrl} 
          alt={portfolio.name} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75" 
          style={{ filter: 'contrast(1.1) saturate(0.8)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-[#0a0e14]/70 to-transparent opacity-90" />
        {/* Scanline effect on image */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ 
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 106, 0.03) 2px, rgba(0, 255, 106, 0.03) 4px)'
        }} />
        
        {/* Cyber Country Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-[#0a0e14]/80 backdrop-blur-sm border border-[#00ff6a]/50 text-[#00ff6a] text-xs font-mono font-bold uppercase tracking-wider">
          <span className="text-[#00ffff]">//</span> {portfolio.country}
        </div>

        {/* Cyber Quick Actions */}
        <div className={`absolute top-4 left-4 flex space-x-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
          <a 
            href={portfolio.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-[#0a0e14]/80 backdrop-blur-sm border border-[#00ff6a]/50 hover:border-[#00ffff] hover:bg-[#00ff6a]/20 transition-all duration-200 hover:scale-110"
            title="View GitHub"
          >
            <GithubIcon className="h-4 w-4 text-[#00ff6a]" />
          </a>
          <a 
            href={portfolio.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 bg-[#0a0e14]/80 backdrop-blur-sm border border-[#00ff6a]/50 hover:border-[#00ffff] hover:bg-[#00ff6a]/20 transition-all duration-200 hover:scale-110"
            title="View Live Site"
          >
            <GlobeIcon className="h-4 w-4 text-[#00ff6a]" />
          </a>
        </div>
        
        {/* Cyber Name & Bio Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-[#00ff6a]/30">
          <h3 className="text-lg font-bold text-[#00ff6a] mb-1 font-mono uppercase tracking-wide" style={{ textShadow: '0 0 10px rgba(0, 255, 106, 0.5)' }}>
            <span className="text-[#00ffff]">&gt;</span> {portfolio.name}
          </h3>
          <p className="text-xs text-gray-400 font-mono line-clamp-2">
            <span className="text-[#00ff6a]">//</span> {portfolio.bio}
          </p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Cyber Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {portfolio.techStack.slice(0, 4).map(tech => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs font-bold font-mono uppercase bg-[#0a0e14] text-[#00ff6a] border border-[#00ff6a]/30 hover:border-[#00ffff] hover:text-[#00ffff] transition-colors"
            >
              [{tech}]
            </span>
          ))}
          {portfolio.techStack.length > 4 && (
            <span className="px-2 py-1 text-xs font-bold font-mono bg-[#0a0e14] text-[#00ffff] border border-[#00ffff]/30">
              +{portfolio.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Cyber Actions Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-[#00ff6a]/20">
          {/* Cyber Portfolio Links */}
          <div className="flex items-center space-x-2">
            <a 
              href={portfolio.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-1 px-3 py-1.5 text-xs font-bold font-mono uppercase bg-[#0a0e14] text-[#00ff6a] border border-[#00ff6a]/50 hover:bg-[#00ff6a]/20 hover:border-[#00ffff] transition-all duration-200"
              title="View on GitHub"
            >
              <GithubIcon className="h-3 w-3" />
              <span>CODE</span>
            </a>
            <a 
              href={portfolio.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-1 px-3 py-1.5 text-xs font-bold font-mono uppercase bg-[#0a0e14] text-[#00ff6a] border border-[#00ff6a]/50 hover:bg-[#00ff6a]/20 hover:border-[#00ffff] transition-all duration-200"
              title="View Live Site"
            >
              <GlobeIcon className="h-3 w-3" />
              <span>LIVE</span>
            </a>
          </div>

          {/* Cyber Like Button */}
          <button 
            onClick={handleLikeClick} 
            className="flex items-center space-x-2 px-3 py-1.5 bg-[#0a0e14] text-[#00ff6a] border border-[#00ff6a]/50 hover:bg-[#00ff6a]/20 hover:border-[#00ffff] transition-all duration-300 group/like"
            title="Like this portfolio"
            style={{ boxShadow: isAnimatingLike ? '0 0 20px rgba(0, 255, 106, 0.8)' : 'none' }}
          >
            <span 
              className={`text-sm transition-all duration-300 ${isAnimatingLike ? 'scale-125' : 'scale-100'} group-hover/like:scale-110`}
            >
              ▲
            </span>
            <span className="font-bold text-xs font-mono">[{localLikes}]</span>
          </button>
        </div>
      </div>
    </div>
  );
};
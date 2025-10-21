
import React from 'react';
import { Portfolio } from '../types';
import { SparklesIcon } from './Icons';

interface RecommendationModalContentProps {
  portfolio: Portfolio | null;
  recommendation: string;
  isLoading: boolean;
}

export const RecommendationModalContent: React.FC<RecommendationModalContentProps> = ({ portfolio, recommendation, isLoading }) => {
  if (!portfolio) return null;

  return (
    <div className="space-y-6">
      {/* Portfolio Info */}
      <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-white dark:border-gray-700 shadow-lg">
            <img src={portfolio.imageUrl} alt={portfolio.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">{portfolio.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">{portfolio.bio}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {portfolio.techStack.slice(0, 3).map(tech => (
              <span key={tech} className="px-2 py-0.5 text-xs font-medium bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-md border border-blue-200 dark:border-blue-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="relative">
        <div className="flex items-center space-x-2 mb-3">
          <SparklesIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">AI Insight</h4>
        </div>
        
        <div className="relative p-5 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 min-h-[120px] flex items-center justify-center">
          {isLoading ? (
            <div className="flex flex-col items-center space-y-3">
              <div className="relative">
                <SparklesIcon className="h-8 w-8 text-purple-600 dark:text-purple-400 animate-pulse" />
                <div className="absolute inset-0 animate-ping">
                  <SparklesIcon className="h-8 w-8 text-purple-400 dark:text-purple-500 opacity-75" />
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Generating personalized recommendation...</p>
            </div>
          ) : (
            <div className="w-full">
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-sm">
                {recommendation}
              </p>
            </div>
          )}
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

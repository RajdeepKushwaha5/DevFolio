import React, { useState, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { FilterPills } from './components/FilterPills';
import { PortfolioGrid } from './components/PortfolioGrid';
import { SubmitPortfolioForm } from './components/SubmitPortfolioForm';
import { Modal } from './components/Modal';
import { Footer } from './components/Footer';
import { Portfolio } from './types';
import { INITIAL_PORTFOLIOS, TECH_STACKS } from './constants';

const App: React.FC = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>(INITIAL_PORTFOLIOS);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState('default');
  const [isSubmitModalOpen, setSubmitModalOpen] = useState(false);

  const handleFilterChange = (tech: string) => {
    setActiveFilters(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  const handleSortChange = (newOrder: string) => {
    setSortOrder(newOrder);
  };

  const handleAddPortfolio = (newPortfolio: Omit<Portfolio, 'id' | 'likes'>) => {
    const portfolioToAdd: Portfolio = {
      ...newPortfolio,
      id: Date.now(),
      likes: 0,
    };
    setPortfolios(prev => [portfolioToAdd, ...prev]);
    setSubmitModalOpen(false);
  };
  
  const handleLike = useCallback((id: number) => {
    setPortfolios(prev =>
      prev.map(p => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  }, []);

  const filteredPortfolios = useMemo(() => {
    const filtered = portfolios
      .filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.bio.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(p =>
        activeFilters.length === 0 || activeFilters.every(filter => p.techStack.includes(filter))
      );
    
    // Create a new array to avoid mutating the original filtered list
    const sortablePortfolios = [...filtered];

    // Apply sorting based on the selected order
    switch (sortOrder) {
      case 'likes-asc':
        sortablePortfolios.sort((a, b) => a.likes - b.likes);
        break;
      case 'likes-desc':
        sortablePortfolios.sort((a, b) => b.likes - a.likes);
        break;
      // 'default' case does nothing, preserving the original order
    }
    
    return sortablePortfolios;
  }, [portfolios, searchTerm, activeFilters, sortOrder]);

  return (
    <div className="cyber-grid bg-gradient-to-br from-[#0a0e14] via-[#0f1419] to-[#0a0e14] min-h-screen text-gray-200 transition-colors duration-300 scanline">
      <Header 
        openSubmitModal={() => setSubmitModalOpen(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOrder={sortOrder}
        onSortChange={handleSortChange}
      />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          {/* Cyber Glow Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-[#00ff6a]/10 via-[#00ffff]/10 to-[#00ff6a]/10 blur-3xl -z-10"></div>
          
          {/* Terminal-style Badge */}
          <div className="inline-block mb-6">
            <div className="cyber-border px-6 py-2 bg-[#0a0e14]/80 backdrop-blur-sm">
              <span className="text-[#00ff6a] text-sm font-mono font-semibold tracking-wider">
                <span className="text-[#00ffff]">&gt;_</span> DISCOVER_TOP_TALENT
              </span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight mb-6 font-mono">
            <span className="text-white neon-text">DEVELOPER </span>
            <br />
            <span className="bg-gradient-to-r from-[#00ff6a] via-[#00ffff] to-[#00ff6a] bg-clip-text text-transparent" style={{textShadow: '0 0 30px rgba(0,255,106,0.5)'}}>
              PORTFOLIO
            </span>
            <br />
            <span className="text-white neon-text">SHOWCASE</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-mono">
            <span className="text-[#00ffff]">[</span> Explore exceptional portfolios from talented developers worldwide <span className="text-[#00ffff]">]</span>
            <br />
            <span className="text-[#00ff6a] font-semibold">// Get inspired</span>, discover new technologies, and 
            <span className="text-[#00ff6a] font-semibold">connect with innovators</span>
          </p>

          {/* Cyber Stats */}
          <div className="flex justify-center gap-6 mt-12 flex-wrap">
            <div className="cyber-border bg-[#0a0e14]/60 backdrop-blur-sm px-6 py-4 hover:bg-[#0f1419]/80 transition-all duration-300">
              <div className="text-3xl font-bold text-[#00ff6a] font-mono">
                [{portfolios.length}]
              </div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mt-1">Portfolios</div>
            </div>
            <div className="cyber-border bg-[#0a0e14]/60 backdrop-blur-sm px-6 py-4 hover:bg-[#0f1419]/80 transition-all duration-300">
              <div className="text-3xl font-bold text-[#00ffff] font-mono">
                [{TECH_STACKS.length}]
              </div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mt-1">Technologies</div>
            </div>
            <div className="cyber-border bg-[#0a0e14]/60 backdrop-blur-sm px-6 py-4 hover:bg-[#0f1419]/80 transition-all duration-300">
              <div className="text-3xl font-bold text-[#00ff6a] font-mono">
                [{portfolios.reduce((sum, p) => sum + p.likes, 0)}]
              </div>
              <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mt-1">Total Likes</div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2 font-mono">
              <span className="text-[#00ffff]">&gt;</span> FILTER_BY_TECHNOLOGY
            </h2>
            <p className="text-gray-400 font-mono text-sm">
              <span className="text-[#00ff6a]">//</span> Select technologies to find portfolios that match your interests
            </p>
          </div>
          <FilterPills
            techs={TECH_STACKS}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
          />
        </div>
        
        {/* Portfolio Grid */}
        <PortfolioGrid 
          portfolios={filteredPortfolios} 
          onLike={handleLike}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Submit Portfolio Modal */}
      <Modal isOpen={isSubmitModalOpen} onClose={() => setSubmitModalOpen(false)} title="Submit Your Portfolio">
        <SubmitPortfolioForm onSubmit={handleAddPortfolio} />
      </Modal>
    </div>
  );
};

export default App;
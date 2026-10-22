import React, { useState, useMemo } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Sparkles, 
  Search, 
  Code, 
  Brain, 
  Cpu, 
  BarChart, 
  Server, 
  Bot,
  Layers
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'data-science', label: 'Data Science & ML' },
    { id: 'data-processing', label: 'BI & Data Processing' },
    { id: 'backend-databases', label: 'Backend & DBs' },
    { id: 'programming', label: 'Languages' },
    { id: 'tools-ai', label: 'AI & Dev Tools' },
    { id: 'core-cs', label: 'Core CS' },
  ];

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'programming':
        return <Code className="w-4 h-4 text-cyan-400" />;
      case 'data-science':
        return <Brain className="w-4 h-4 text-purple-400" />;
      case 'data-processing':
        return <BarChart className="w-4 h-4 text-emerald-400" />;
      case 'backend-databases':
        return <Server className="w-4 h-4 text-blue-400" />;
      case 'tools-ai':
        return <Bot className="w-4 h-4 text-amber-400" />;
      case 'core-cs':
        return <Layers className="w-4 h-4 text-rose-400" />;
      default:
        return <Cpu className="w-4 h-4 text-cyan-400" />;
    }
  };

  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => {
        if (selectedCategory === 'all') return true;
        return cat.id === selectedCategory;
      })
      .map((cat) => {
        const filteredSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          skill.levelDescription.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return {
          ...cat,
          skills: filteredSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 / TECHNICAL CAPABILITIES</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                Technical Stack & Core Competencies
              </h2>
              <p className="text-slate-400 text-base max-w-2xl">
                Verified proficiencies from academic training, 3 internships, machine learning projects, and national certifications.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search skills (e.g. Python, SQL)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => {
            const isSelected = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/80">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/80">
                    {getCategoryIcon(category.id)}
                  </div>
                  <h3 className="font-semibold text-white text-base">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-slate-700 hover:bg-slate-900/80 transition-colors group"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium text-slate-200 text-sm group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </span>
                        {skill.badge && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 text-xs mt-1 leading-normal">
                        {skill.levelDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>{category.skills.length} competencies</span>
                <span className="text-emerald-400">Verified in Resume</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Guarantee Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            <span>Every technology listed above is grounded in academic coursework, completed internships, or documented projects.</span>
          </div>
          <span className="font-mono text-cyan-400">No fabricated skill ratings.</span>
        </div>

      </div>
    </section>
  );
};

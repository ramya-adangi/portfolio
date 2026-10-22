import React, { useState } from 'react';
import { certifications, achievements } from '../data/portfolioData';
import { Sparkles, Award, Trophy, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'certifications' | 'achievements'>('certifications');

  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 / RECOGNITION & CREDENTIALS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                Certifications & Leadership Honors
              </h2>
              <p className="text-slate-400 text-base max-w-2xl">
                Verified industry simulations, global cloud certifications, national percentile recognitions, and community leadership roles.
              </p>
            </div>

            {/* Toggle Tabs */}
            <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
              <button
                onClick={() => setActiveTab('certifications')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === 'certifications'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>Certifications ({certifications.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  activeTab === 'achievements'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Trophy className="w-4 h-4" />
                <span>Leadership ({achievements.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                      {cert.issuer}
                    </span>
                    {cert.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950/80 text-amber-300 border border-amber-800/60">
                        {cert.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {cert.title}
                  </h3>

                  {cert.detail && (
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {cert.detail}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </span>
                  <span className="text-slate-500">Official</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Achievements & Leadership */}
        {activeTab === 'achievements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                      {item.badgeText}
                    </span>
                    {item.period && (
                      <span className="text-xs font-mono text-slate-400">
                        {item.period}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <div className="text-sm font-medium text-slate-400 mb-4">
                    {item.subtitle}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Trophy className="w-3.5 h-3.5" />
                    <span>National & Collegiate Honor</span>
                  </span>
                  <span>Documented in Resume</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

import React from 'react';
import { educationList } from '../data/portfolioData';
import { Sparkles, GraduationCap, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 / ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Education & Academic Track Record
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl">
            A consistent record of high academic performance and strong foundational training in Computer Science & Data Science.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationList.map((item, idx) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-2xl bg-slate-900/60 border ${
                idx === 0
                  ? 'border-cyan-500/40 shadow-lg shadow-cyan-950/30'
                  : 'border-slate-800 hover:border-slate-700'
              } transition-all duration-200 flex flex-col justify-between`}
            >
              <div>
                {/* Period and Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                    {item.score}
                  </span>
                </div>

                {/* Degree and Institution */}
                <h3 className="text-lg font-bold text-white mb-1.5">
                  {item.degree}
                </h3>
                <div className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-4">
                  <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item.institution}</span>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  {item.highlights.map((h, hIdx) => (
                    <p key={hIdx} className="text-xs text-slate-400 leading-relaxed">
                      • {h}
                    </p>
                  ))}
                </div>
              </div>

              {idx === 0 && (
                <div className="mt-5 pt-3 border-t border-cyan-900/40 text-[11px] font-mono text-cyan-400 flex items-center justify-between">
                  <span>Current Major: CSE - Data Science</span>
                  <span>CGPA: 8.67 / 10</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

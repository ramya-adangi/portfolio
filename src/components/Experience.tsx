import React from 'react';
import { experiences } from '../data/portfolioData';
import { 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 / PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Internship Experience & Practical Impact
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl">
            Documented internships spanning Power BI enterprise analytics, full-stack Python application engineering at Infosys, and open-source backend development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform duration-200">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 m-auto mt-0.5"></div>
              </div>

              {/* Date Badge placed on left in desktop */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono font-semibold text-slate-400 mb-2 md:mb-0 md:text-right md:w-28">
                <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 inline-block">
                  {exp.period}
                </span>
              </div>

              {/* Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 shadow-xl">
                
                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 text-xs font-mono">{exp.category}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Brief description */}
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  {exp.description}
                </p>

                {/* Documented Responsibilities */}
                <div className="space-y-2.5 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/70">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

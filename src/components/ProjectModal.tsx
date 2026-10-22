import React from 'react';
import type { Project } from '../types';
import { GithubIcon } from './Icons';
import { 
  X, 
  CheckCircle2, 
  Layers, 
  Code2
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl z-10 flex flex-col text-slate-100">
        
        {/* Header */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-slate-950/95 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/60">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Timeline: {project.timeline}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Title and summary */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-base text-cyan-400 font-medium mb-3">
              {project.subtitle}
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {metric.value}
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-slate-950/60 border border-rose-900/30">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm mb-2">
                <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                <span>The Problem</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/60 border border-emerald-900/30">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span>The Solution & Implementation</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Actual Documented Contributions */}
          <div>
            <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Documented Contributions & Engineering Details</span>
            </h4>
            <div className="space-y-2.5">
              {project.responsibilities.map((resp, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* System Architecture Flow */}
          <div>
            <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>Architecture & Data Flow</span>
            </h4>
            <div className="space-y-2">
              {project.architecture.map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs sm:text-sm font-mono text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-slate-800 text-cyan-400 flex items-center justify-center text-xs font-bold shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider font-mono">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-950/95 border-t border-slate-800 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};

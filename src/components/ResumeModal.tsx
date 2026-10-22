import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  Briefcase 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl z-10 overflow-hidden text-slate-100">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950/95 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/60">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Adangi Sai Ramya — Official Resume
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Verified ATS-Optimized Document (PDF Format)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumeUrl}
              download="Adangi_Sai_Ramya_Resume.pdf"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Open full PDF in separate browser tab"
              aria-label="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Credentials Summary Bar */}
        <div className="px-6 py-2.5 bg-slate-950/60 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-cyan-400">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>CGPA: 8.67 / 10</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <Briefcase className="w-3.5 h-3.5 text-blue-400" />
              <span>3 Internships</span>
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-amber-400">
              <Award className="w-3.5 h-3.5" />
              <span>NPTEL Gold 97%</span>
            </span>
          </div>

          <div className="text-emerald-400 flex items-center gap-1 text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Uploaded Original ATS PDF</span>
          </div>
        </div>

        {/* PDF Embedded View / Fallback Preview */}
        <div className="flex-1 min-h-[500px] bg-slate-950 relative overflow-hidden flex flex-col">
          <iframe
            src={`${personalInfo.resumeUrl}#toolbar=0&navpanes=0`}
            title="Adangi Sai Ramya Resume"
            className="w-full h-full min-h-[520px] border-0"
          />
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-3.5 bg-slate-950/95 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            File: Adangi_Sai_Ramya_Resume.pdf (298 KB)
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in Full Tab</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              download="Adangi_Sai_Ramya_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

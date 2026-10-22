import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  ExternalLink,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunityType: 'Internship Opportunity',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(
      formData.subject
        ? `[Portfolio Contact] ${formData.opportunityType}: ${formData.subject}`
        : `[Portfolio Contact] ${formData.opportunityType} - ${formData.name || 'Recruiter Inquiry'}`
    );
    const body = encodeURIComponent(
      `Hello Sai Ramya,\n\nName: ${formData.name || 'N/A'}\nEmail: ${formData.email || 'N/A'}\nOpportunity Type: ${formData.opportunityType}\n\nMessage:\n${formData.message || 'I would like to discuss potential opportunities.'}\n\nBest regards,\n${formData.name || 'Visitor'}`
    );
    return `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyDraft = () => {
    const text = `To: ${personalInfo.email}\nSubject: [${formData.opportunityType}] ${formData.subject}\nFrom: ${formData.name} (${formData.email})\n\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>07 / GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Let's Discuss Opportunities & Collaborations
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl">
            Currently open to Data Science and Full-Stack Engineering internships, graduate opportunities, and technical projects. Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Direct Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-2 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>{copiedEmail ? 'Copied to clipboard!' : 'Click to copy or compose'}</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-cyan-400 hover:underline flex items-center gap-1 font-mono"
                >
                  Compose <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Phone & WhatsApp</div>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors font-mono"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="mt-2 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>{copiedPhone ? 'Copied phone number!' : 'Available for calls & WhatsApp'}</span>
                <a
                  href={`https://wa.me/919347669203`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline flex items-center gap-1 font-mono"
                >
                  WhatsApp <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-purple-950 text-purple-400 border border-purple-800/60 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Based In</div>
                <div className="text-base font-semibold text-white">
                  {personalInfo.location}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Open to On-site, Hybrid & Remote Opportunities
                </div>
              </div>
            </div>

            {/* LinkedIn & GitHub Links */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center gap-3 group transition-colors"
              >
                <LinkedinIcon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-slate-400">Network</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    LinkedIn
                  </div>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center gap-3 group transition-colors"
              >
                <GithubIcon className="w-5 h-5 text-slate-300 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-slate-400">Codebase</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    GitHub
                  </div>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">
                Send a Direct Message
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Compose a message below. You can send it directly through your default mail client with pre-filled details or copy the draft with one click.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = generateMailtoUrl();
              }}
              className="space-y-4 text-xs sm:text-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Opportunity Type
                  </label>
                  <select
                    value={formData.opportunityType}
                    onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="Internship Opportunity">Data Science / ML Internship</option>
                    <option value="Full-time Role">Full-Stack / Software Role</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="Mentorship / Networking">General Inquiry / Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Summer 2026 Internship Discussion"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about the role, technical requirements, or team..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={generateMailtoUrl()}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email Client</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
                  title="Copy full message formatted to clipboard"
                >
                  {copiedDraft ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>Copy Draft</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center pt-1 font-mono">
                Genuine mail delivery: Clicking "Send via Email Client" opens your pre-filled email client directly addressed to ramyaadangi@gmail.com.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

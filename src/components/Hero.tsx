import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  ArrowRight, 
  Download, 
  FileText, 
  Mail, 
  Sparkles, 
  Cpu, 
  BarChart2, 
  CheckCircle2, 
  Code2
} from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [activeTab, setActiveTab] = useState<'ml' | 'api' | 'bi'>('ml');

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-radial-glow pointer-events-none" />
      
      {/* Ambient background blur blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal Brand & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Data Science & Full-Stack Opportunities</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">{personalInfo.fullName}</span>
            </h1>

            {/* Professional Headline */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-200 mb-5 leading-snug">
              {personalInfo.headline}
            </p>

            {/* Concise Bio */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              B.Tech Computer Science student specializing in <strong className="text-slate-200 font-medium">Data Science</strong> at Vignan's Institute of Engineering for Women (CGPA 8.67/10). Experienced in turning complex datasets into predictive machine learning models, production REST APIs with <strong className="text-slate-200 font-medium">Python & SQL</strong>, and executive business intelligence dashboards.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Adangi_Sai_Ramya_Resume.pdf"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm sm:text-base bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white hover:bg-slate-800/70 transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Preview CV</span>
              </button>
            </div>

            {/* Social Proof & Profiles */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              {/* Quick Resume Highlights */}
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 border-l border-slate-800 pl-6">
                <div>
                  <span className="text-white font-semibold">8.67</span> CGPA
                </div>
                <span>•</span>
                <div>
                  <span className="text-white font-semibold">3</span> Internships
                </div>
                <span>•</span>
                <div>
                  <span className="text-white font-semibold">7</span> Certifications
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Pipeline & Engineering Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-xl shadow-2xl overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-xs font-mono text-slate-400 ml-2">ramya-system-inspector.py</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
                  <Sparkles className="w-3 h-3" />
                  <span>Verified Resume Tech</span>
                </div>
              </div>

              {/* Interactive Tabs */}
              <div className="grid grid-cols-3 bg-slate-950/60 border-b border-slate-800/80 p-1 gap-1 text-xs font-medium">
                <button
                  onClick={() => setActiveTab('ml')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'ml'
                      ? 'bg-slate-800 text-cyan-400 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>ML & Analytics</span>
                </button>
                <button
                  onClick={() => setActiveTab('api')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'api'
                      ? 'bg-slate-800 text-cyan-400 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>REST API & DB</span>
                </button>
                <button
                  onClick={() => setActiveTab('bi')}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg transition-colors cursor-pointer ${
                    activeTab === 'bi'
                      ? 'bg-slate-800 text-cyan-400 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <BarChart2 className="w-3.5 h-3.5" />
                  <span>Power BI & DAX</span>
                </button>
              </div>

              {/* Tab Content 1: Machine Learning */}
              {activeTab === 'ml' && (
                <div className="p-5 font-mono text-xs space-y-4">
                  <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                    <span className="text-cyan-400 font-bold">Pipeline: Customer Churn Prediction</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> ROC-AUC: 0.77
                    </span>
                  </div>

                  <div className="space-y-1.5 text-slate-300">
                    <p className="text-slate-500"># Model Benchmarking (Scikit-Learn)</p>
                    <p><span className="text-purple-400">classifiers</span> = [LogisticRegression(), RandomForest(), GradientBoosting()]</p>
                    <p><span className="text-purple-400">best_model</span> = <span className="text-cyan-300">GradientBoostingClassifier</span>(n_estimators=100)</p>
                    <p><span className="text-purple-400">roc_score</span> = roc_auc_score(y_test, y_pred_prob)</p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800 space-y-2">
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Key Feature Drivers:</div>
                    <div className="space-y-1.5 text-xs">
                      <div>
                        <div className="flex justify-between text-slate-300 mb-0.5">
                          <span>1. Customer Tenure (Months)</span>
                          <span className="text-cyan-400">High Impact</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-cyan-500 h-full w-[88%] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-slate-300 mb-0.5">
                          <span>2. Contract Type (Month-to-Month)</span>
                          <span className="text-cyan-400">High Impact</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-cyan-500 h-full w-[76%] rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-slate-300 mb-0.5">
                          <span>3. Monthly Charges Threshold</span>
                          <span className="text-sky-400">Moderate</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-sky-500 h-full w-[62%] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                    <span>Target Deployment: <strong className="text-slate-200">Streamlit UI</strong></span>
                    <a href="#projects" className="text-cyan-400 hover:underline flex items-center gap-1">
                      Try Live Simulator <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {/* Tab Content 2: Backend REST & Databases */}
              {activeTab === 'api' && (
                <div className="p-5 font-mono text-xs space-y-4">
                  <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                    <span className="text-cyan-400 font-bold">Service: Smart Agriculture REST API</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 200 OK (14ms)
                    </span>
                  </div>

                  <div className="space-y-1.5 text-slate-300">
                    <p className="text-slate-500"># Flask Route with Optimized MySQL Query</p>
                    <p><span className="text-purple-400">@app.route</span>(<span className="text-emerald-300">'/api/v1/advisory'</span>, methods=[<span className="text-amber-300">'GET'</span>])</p>
                    <p><span className="text-blue-400">def</span> <span className="text-yellow-300">get_crop_insights</span>():</p>
                    <p className="pl-4 text-slate-400">params = request.args.to_dict()</p>
                    <p className="pl-4 text-slate-400">sql = <span className="text-emerald-300">"SELECT * FROM crop_metrics WHERE soil_type = %s"</span></p>
                    <p className="pl-4 text-purple-400">return jsonify(results=db.execute_indexed(sql))</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                      <div className="text-[11px] text-slate-400">Database Engine</div>
                      <div className="font-semibold text-slate-200 mt-1">MySQL & MongoDB</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">Normalized & Indexed</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800">
                      <div className="text-[11px] text-slate-400">Architecture</div>
                      <div className="font-semibold text-slate-200 mt-1">MVC + JWT Auth</div>
                      <div className="text-[10px] text-cyan-400 mt-0.5">Production Pattern</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab Content 3: Power BI & Business Intelligence */}
              {activeTab === 'bi' && (
                <div className="p-5 font-mono text-xs space-y-4">
                  <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                    <span className="text-cyan-400 font-bold">BI: K-Square Analytics Model</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> DAX Measures Active
                    </span>
                  </div>

                  <div className="space-y-1.5 text-slate-300">
                    <p className="text-slate-500"># DAX Measure: Dynamic Sales MoM Variance</p>
                    <p><span className="text-yellow-300">Sales_MoM_%</span> = </p>
                    <p className="pl-2">VAR CurrentSales = <span className="text-purple-400">CALCULATE</span>(SUM(Sales[Amount]))</p>
                    <p className="pl-2">VAR PreviousSales = <span className="text-purple-400">CALCULATE</span>(SUM(Sales[Amount]), PREVIOUSMONTH(DimDate[Date]))</p>
                    <p className="pl-2">RETURN <span className="text-purple-400">DIVIDE</span>(CurrentSales - PreviousSales, PreviousSales, 0)</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800">
                      <div className="text-[10px] text-slate-400">ETL Tool</div>
                      <div className="font-bold text-slate-200 mt-0.5">Power Query</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Modeling</div>
                      <div className="font-bold text-cyan-400 mt-0.5">Star Schema</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950/70 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Reporting</div>
                      <div className="font-bold text-emerald-400 mt-0.5">Interactive Slicers</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Terminal Footer */}
              <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Vignan's Institute of Engineering for Women • 2023–2027</span>
                <span className="text-cyan-400">CGPA 8.67</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

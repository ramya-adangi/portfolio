import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle, 
  Sprout, 
  Languages,
  Activity
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Interactive state for Project 1: Customer Churn Predictor
  const [tenure, setTenure] = useState<number>(12);
  const [monthlyCharges, setMonthlyCharges] = useState<number>(75);
  const [contractType, setContractType] = useState<'month-to-month' | 'one-year' | 'two-year'>('month-to-month');
  const [hasTechSupport, setHasTechSupport] = useState<boolean>(false);

  // Calculate dynamic churn probability based on documented Telco weights
  const calculateChurnRisk = () => {
    let score = 0.2;
    score -= (tenure / 72) * 1.6;
    score += ((monthlyCharges - 20) / 100) * 0.9;
    if (contractType === 'month-to-month') score += 1.1;
    else if (contractType === 'one-year') score -= 0.4;
    else if (contractType === 'two-year') score -= 1.2;
    if (hasTechSupport) score -= 0.5;

    const probability = 1 / (1 + Math.exp(-score));
    return Math.min(Math.max(Math.round(probability * 100), 5), 95);
  };

  const churnRiskScore = calculateChurnRisk();

  // Interactive state for Project 2: Smart Agriculture System
  const [cropSeason, setCropSeason] = useState<'Kharif' | 'Rabi' | 'Zaid'>('Kharif');
  const [soilMoisture, setSoilMoisture] = useState<'Low' | 'Optimal' | 'High'>('Low');
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'te' | 'hi'>('en');

  const getAgricultureAdvisory = () => {
    if (selectedLanguage === 'te') {
      if (cropSeason === 'Kharif') {
        return {
          crop: 'వరి / పత్తి (Rice & Cotton)',
          irrigation: soilMoisture === 'Low' ? 'వెంటనే డ్రిప్ ఇరిగేషన్ ఆన్ చేయండి' : 'తేమ తగినంతగా ఉంది, నీరు అవసరం లేదు',
          pestAlert: 'కాండం తొలిచే పురుగు హెచ్చరిక - వేప నూనె పిచికారీ చేయండి'
        };
      } else if (cropSeason === 'Rabi') {
        return {
          crop: 'గోధుమ / వేరుశెనగ (Wheat & Groundnut)',
          irrigation: soilMoisture === 'Low' ? 'స్పింక్లర్ ద్వారా 35 నిమిషాలు నీరు పెట్టండి' : 'భూమిలో తేమ బాగుంది',
          pestAlert: 'రసం పీల్చే పురుగుల ప్రభావం - పసుపు రంగు జిగురు అట్టలు వాడండి'
        };
      } else {
        return {
          crop: 'పుచ్చకాయ / కూరగాయలు (Watermelon & Pulses)',
          irrigation: 'ప్రతిరోజూ సాయంత్రం వేళల్లో నీరు ఇవ్వండి',
          pestAlert: 'తెల్లదోమల దాడి అవకాశం - పర్యవేక్షణ అవసరం'
        };
      }
    } else if (selectedLanguage === 'hi') {
      if (cropSeason === 'Kharif') {
        return {
          crop: 'धान / कपास (Paddy & Cotton)',
          irrigation: soilMoisture === 'Low' ? 'तुरंत ड्रिप सिंचाई शुरू करें (40L/वर्ग मी)' : 'मिट्टी में पर्याप्त नमी है',
          pestAlert: 'तना छेदक कीट चेतावनी - नीम तेल का छिड़काव करें'
        };
      } else if (cropSeason === 'Rabi') {
        return {
          crop: 'गेहूं / चना (Wheat & Gram)',
          irrigation: soilMoisture === 'Low' ? 'हल्की सिंचाई की आवश्यकता है' : 'नमी स्तर अनुकूल है',
          pestAlert: 'माहू (एफिड) का प्रकोप संभावित है'
        };
      } else {
        return {
          crop: 'तरबूज / मक्का (Watermelon & Maize)',
          irrigation: 'नियमित अंतराल पर जल प्रबंधन करें',
          pestAlert: 'पत्ती धब्बा रोग से बचाव के लिए जैविक उपचार'
        };
      }
    } else {
      if (cropSeason === 'Kharif') {
        return {
          crop: 'Paddy / Cotton / Maize',
          irrigation: soilMoisture === 'Low' ? 'Schedule drip irrigation: 45 L/m² immediately' : 'Soil moisture sufficient; suspend irrigation for 48 hrs',
          pestAlert: 'Stem Borer Risk: High humidity triggered. Apply neem-based bio-repellent.'
        };
      } else if (cropSeason === 'Rabi') {
        return {
          crop: 'Wheat / Mustard / Groundnut',
          irrigation: soilMoisture === 'Low' ? 'Sprinkler irrigation cycle recommended (30 mins)' : 'Optimal moisture balance maintained',
          pestAlert: 'Aphid Alert: Monitor underside of leaves, set up yellow sticky traps.'
        };
      } else {
        return {
          crop: 'Watermelon / Cucumber / Pulses',
          irrigation: 'Drip micro-irrigation at dawn and dusk',
          pestAlert: 'Whitefly Surveillance: Maintain mulch cover to deter infestation.'
        };
      }
    }
  };

  const agAdvisory = getAgricultureAdvisory();

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 / FEATURED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Featured Projects & Real-World Implementations
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl">
            Each project is built from scratch with real data pipelines, rigorous evaluation, and responsive interfaces. Test the interactive simulators below.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          
          {/* PROJECT 1: Customer Churn Prediction & Analytics Dashboard */}
          <div className="rounded-3xl bg-slate-900/70 border border-slate-800 overflow-hidden shadow-2xl transition-all duration-300 hover:border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Project Overview */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/60">
                      Machine Learning & Analytics
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono text-slate-400 bg-slate-800/80">
                      Year: 2026
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50">
                      Best ROC-AUC: 0.77
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Customer Churn Prediction & Analytics Dashboard
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                    End-to-end Machine Learning pipeline utilizing Telco customer data. Covers data cleaning, exploratory data analysis, correlation evaluations, model benchmarking (Logistic Regression, Decision Tree, Random Forest, Gradient Boosting), and an interactive Streamlit intelligence dashboard.
                  </p>

                  {/* Documented accomplishments */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Benchmarked 4 classification algorithms; achieved top ROC-AUC of 0.77.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Identified tenure length, contract duration, and monthly charges as critical churn drivers.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>Built an interactive Streamlit UI for customer segmentation and live inference.</span>
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Python', 'Scikit-Learn', 'Streamlit', 'Pandas', 'NumPy', 'Matplotlib', 'EDA', 'ROC-AUC'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-800/80">
                  <button
                    onClick={() => setSelectedProject(projects[0])}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                  >
                    <span>View Architecture & Methodology</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://github.com/ramya-adangi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Live Interactive Simulator */}
              <div className="lg:col-span-5 bg-slate-950/90 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Activity className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-mono font-semibold text-slate-200">
                        Interactive Live Churn Simulator
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/50">
                      Streamlit Emulation
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-5">
                    Adjust customer parameters below to observe real-time churn probability generated by the model coefficients:
                  </p>

                  {/* Sliders & Controls */}
                  <div className="space-y-4 font-mono text-xs">
                    
                    {/* Tenure */}
                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Customer Tenure:</span>
                        <span className="text-cyan-400 font-bold">{tenure} months</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="72"
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="w-full accent-cyan-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-500 mt-0.5">
                        <span>New Customer (1 mo)</span>
                        <span>Loyal Customer (72 mo)</span>
                      </div>
                    </div>

                    {/* Monthly Charges */}
                    <div>
                      <div className="flex justify-between text-slate-300 mb-1">
                        <span>Monthly Charges:</span>
                        <span className="text-cyan-400 font-bold">${monthlyCharges}/mo</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="120"
                        value={monthlyCharges}
                        onChange={(e) => setMonthlyCharges(Number(e.target.value))}
                        className="w-full accent-cyan-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-500 mt-0.5">
                        <span>Basic ($20)</span>
                        <span>Premium ($120)</span>
                      </div>
                    </div>

                    {/* Contract Type */}
                    <div>
                      <span className="block text-slate-300 mb-1.5">Contract Agreement:</span>
                      <div className="grid grid-cols-3 gap-1.5">
                        {(['month-to-month', 'one-year', 'two-year'] as const).map((cType) => (
                          <button
                            key={cType}
                            onClick={() => setContractType(cType)}
                            className={`py-1.5 px-2 rounded text-[11px] font-mono transition-colors cursor-pointer text-center ${
                              contractType === cType
                                ? 'bg-cyan-500 text-slate-950 font-bold'
                                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                            }`}
                          >
                            {cType === 'month-to-month' ? 'Monthly' : cType === 'one-year' ? '1 Year' : '2 Years'}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Tech Support */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-slate-300">Active Tech Support:</span>
                      <button
                        onClick={() => setHasTechSupport(!hasTechSupport)}
                        className={`px-3 py-1 rounded text-[11px] font-mono font-semibold transition-colors cursor-pointer ${
                          hasTechSupport
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-slate-900 text-slate-500 border border-slate-800'
                        }`}
                      >
                        {hasTechSupport ? 'Enabled (Protective)' : 'None (At-Risk)'}
                      </button>
                    </div>

                  </div>
                </div>

                {/* Real-time Calculation Result Card */}
                <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-slate-400 uppercase">Estimated Churn Risk</span>
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        churnRiskScore > 60
                          ? 'bg-rose-950 text-rose-400 border border-rose-800'
                          : churnRiskScore > 35
                          ? 'bg-amber-950 text-amber-400 border border-amber-800'
                          : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      }`}
                    >
                      {churnRiskScore > 60 ? 'HIGH RISK' : churnRiskScore > 35 ? 'MODERATE RISK' : 'LOW RISK'}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-extrabold font-mono text-white">
                      {churnRiskScore}%
                    </span>
                    <span className="text-xs text-slate-400">Probability of cancellation</span>
                  </div>

                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-3">
                    <div
                      className={`h-full transition-all duration-300 ${
                        churnRiskScore > 60 ? 'bg-rose-500' : churnRiskScore > 35 ? 'bg-amber-400' : 'bg-emerald-400'
                      }`}
                      style={{ width: `${churnRiskScore}%` }}
                    />
                  </div>

                  <p className="text-[11px] text-slate-400 leading-normal">
                    {churnRiskScore > 60
                      ? '⚠️ High churn driver: Short tenure paired with month-to-month contract. Proactive retention discount suggested.'
                      : churnRiskScore > 35
                      ? '⚡ Moderate churn risk: Recommend contract renewal incentive before next billing cycle.'
                      : '✅ Loyal customer profile: Long tenure and multi-year commitment minimize churn likelihood.'}
                  </p>
                </div>
              </div>

            </div>
          </div>


          {/* PROJECT 2: Smart Agriculture Information System */}
          <div className="rounded-3xl bg-slate-900/70 border border-slate-800 overflow-hidden shadow-2xl transition-all duration-300 hover:border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Project Overview */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                      Full Stack Developer
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono text-slate-400 bg-slate-800/80">
                      07/2025 – 08/2025
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50">
                      REST APIs & MySQL
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Smart Agriculture Information System
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                    A data-driven web application built with Python Flask providing crop recommendations, precision irrigation schedules, and pest-control guidance for rural communities. Designed REST APIs and optimized MySQL queries for rapid data access with multilingual AI assistance.
                  </p>

                  {/* Documented accomplishments */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Engineered Flask backend with modular REST APIs for crop, soil, and pest data.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Optimized MySQL queries and indexing for seamless performance on low-bandwidth rural connections.</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Integrated AI-powered multilingual assistance to democratize access for non-technical users.</span>
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Python', 'Flask', 'MySQL', 'REST APIs', 'Query Optimization', 'AI Assistance', 'Multilingual UX'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-800/80">
                  <button
                    onClick={() => setSelectedProject(projects[1])}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                  >
                    <span>View Architecture & Endpoints</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://github.com/ramya-adangi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Live Agricultural Advisory Simulator */}
              <div className="lg:col-span-5 bg-slate-950/90 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Sprout className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-mono font-semibold text-slate-200">
                        Interactive Advisory Service
                      </span>
                    </div>
                    
                    {/* Multilingual Switcher */}
                    <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                      <Languages className="w-3 h-3 text-slate-400 ml-1.5" />
                      {(['en', 'te', 'hi'] as const).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setSelectedLanguage(lang)}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono cursor-pointer transition-colors ${
                            selectedLanguage === lang
                              ? 'bg-emerald-500 text-slate-950 font-bold'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {lang.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5">
                    Test the Flask advisory response logic across seasons and soil hydration states:
                  </p>

                  {/* Selectors */}
                  <div className="space-y-4 font-mono text-xs">
                    
                    {/* Season */}
                    <div>
                      <span className="block text-slate-300 mb-1.5">Cropping Season:</span>
                      <div className="grid grid-cols-3 gap-1.5">
                        {(['Kharif', 'Rabi', 'Zaid'] as const).map((s) => (
                          <button
                            key={s}
                            onClick={() => setCropSeason(s)}
                            className={`py-1.5 px-2 rounded text-[11px] font-mono transition-colors cursor-pointer text-center ${
                              cropSeason === s
                                ? 'bg-emerald-500 text-slate-950 font-bold'
                                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                            }`}
                          >
                            {s === 'Kharif' ? 'Kharif (Monsoon)' : s === 'Rabi' ? 'Rabi (Winter)' : 'Zaid (Summer)'}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Soil Moisture */}
                    <div>
                      <span className="block text-slate-300 mb-1.5">Soil Moisture Level:</span>
                      <div className="grid grid-cols-3 gap-1.5">
                        {(['Low', 'Optimal', 'High'] as const).map((m) => (
                          <button
                            key={m}
                            onClick={() => setSoilMoisture(m)}
                            className={`py-1.5 px-2 rounded text-[11px] font-mono transition-colors cursor-pointer text-center ${
                              soilMoisture === m
                                ? 'bg-emerald-500 text-slate-950 font-bold'
                                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                            }`}
                          >
                            {m === 'Low' ? '< 30% (Dry)' : m === 'Optimal' ? '30–60%' : '> 60% (Saturated)'}
                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* API Output Simulation Card */}
                <div className="mt-6 p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <span className="text-[11px] text-slate-400 uppercase">Flask API Response: 200 OK</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/60">
                      MySQL Latency: 12ms
                    </span>
                  </div>

                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">Optimal Crop Recommendation:</div>
                    <div className="text-white font-semibold text-sm mt-0.5">
                      {agAdvisory.crop}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">Automated Irrigation Plan:</div>
                    <div className="text-cyan-300 text-xs mt-0.5">
                      {agAdvisory.irrigation}
                    </div>
                  </div>

                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">Pest Control & Protection:</div>
                    <div className="text-amber-300 text-xs mt-0.5">
                      {agAdvisory.pestAlert}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

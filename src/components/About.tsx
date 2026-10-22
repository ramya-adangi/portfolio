import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  BrainCircuit, 
  LineChart, 
  Layers, 
  Award, 
  GraduationCap, 
  Users, 
  CheckCircle,
  Sparkles
} from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-cyan-400" />,
      title: 'Machine Learning & Predictive Modeling',
      description: 'Hands-on experience in building and benchmarking supervised models (Random Forest, Gradient Boosting, Logistic Regression, Decision Trees) optimizing for ROC-AUC and feature interpretability.'
    },
    {
      icon: <LineChart className="w-6 h-6 text-emerald-400" />,
      title: 'Data Analytics & Business Intelligence',
      description: 'Translating complex datasets into actionable business intelligence using Power BI, DAX formulas, Power Query ETL pipelines, and statistical exploratory analysis.'
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: 'Full-Stack & REST API Engineering',
      description: 'Building secure, scalable Python web services using Flask and Django, structured with MVC architecture, JWT authentication, and optimized MySQL/MongoDB relational schemas.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Technical Leadership & Collaboration',
      description: 'GeeksforGeeks Student Chapter Lead and collegiate Club Coordinator, experienced in leading engineering hackathon teams through national finals.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/50 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Bridging Analytical Rigor & Full-Stack Systems
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl">
            A developer who loves looking at data from both ends: deriving statistical intelligence through machine learning models, and building the web infrastructure to deliver those insights reliably.
          </p>
        </div>

        {/* Narrative & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            <p>
              I am a <strong className="text-white font-medium">B.Tech Computer Science student specializing in Data Science</strong> at <strong className="text-cyan-400 font-medium">Vignan's Institute of Engineering for Women</strong> (CGPA: 8.67/10). My journey combines mathematical curiosity with practical software engineering.
            </p>
            <p>
              Through internships at <strong className="text-slate-100 font-medium">K-Square Company</strong>, <strong className="text-slate-100 font-medium">Infosys</strong>, and open-source contributions, I have developed a disciplined approach to software development. Whether developing DAX-driven enterprise dashboards, training classifiers to predict customer churn with a 0.77 ROC-AUC score, or optimizing MySQL queries for rural farmers in our Smart Agriculture system, I prioritize solutions that are reliable, maintainable, and grounded in real data.
            </p>
            <p>
              Beyond development, I actively invest in the tech community as the <strong className="text-white font-medium">Lead of the GeeksforGeeks Student Chapter</strong> and <strong className="text-white font-medium">Club Coordinator</strong> for collegiate tech initiatives. I believe the best engineering happens when analytical precision meets clear communication and empathy for the end user.
            </p>

            {/* Key Academic Badges */}
            <div className="pt-3 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>B.Tech CSE - Data Science (2023–2027)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                <Award className="w-4 h-4 text-amber-400" />
                <span>NPTEL Elite + Gold (Java 97%)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>OCI 2025 AI Foundations</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1 group-hover:scale-105 transition-transform duration-200">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

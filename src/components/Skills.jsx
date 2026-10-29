import React, { useState } from 'react';
import { 
  Code2, Server, Database, Sparkles, Cpu, 
  Terminal, Layers, Network, Radio, HardDrive, 
  Gauge, GitBranch, Search, Bug, Send, Smartphone,
  CheckCircle2, Filter
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = ({ isDark }) => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & Real-Time' },
    { id: 'database', label: 'Database & SQL' },
    { id: 'toolsAI', label: 'AI, Tools & Cloud' },
  ];

  // Map icons
  const getIcon = (name) => {
    switch (name) {
      case 'React.js':
      case 'React Native':
        return Code2;
      case 'JavaScript (ES6+)':
      case 'HTML5 & CSS3':
      case 'Ant Design':
      case 'Bootstrap 5':
      case 'Tailwind CSS':
      case 'Responsive UI':
        return Layers;
      case 'ASP.NET (C#)':
      case 'C# Language':
        return Server;
      case 'RESTful APIs':
        return Network;
      case 'SignalR':
        return Radio;
      case 'Python':
        return Terminal;
      case 'Microsoft SQL Server':
      case 'MySQL':
        return Database;
      case 'Stored Procedures':
      case 'SSMS':
        return HardDrive;
      case 'Query Optimization':
        return Gauge;
      case 'Git & GitHub':
        return GitBranch;
      case 'Generative AI & LLMs':
        return Sparkles;
      case 'RAG Architectures':
        return Search;
      case 'Debugging & DevTools':
        return Bug;
      case 'Postman':
        return Send;
      default:
        return Cpu;
    }
  };

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return [
        ...skills.frontend.map(s => ({ ...s, category: 'Frontend' })),
        ...skills.backend.map(s => ({ ...s, category: 'Backend' })),
        ...skills.database.map(s => ({ ...s, category: 'Database' })),
        ...skills.toolsAI.map(s => ({ ...s, category: 'AI & Tools' })),
      ];
    }
    return (skills[activeTab] || []).map(s => ({ 
      ...s, 
      category: categories.find(c => c.id === activeTab)?.label || 'Tech' 
    }));
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-['Space_Grotesk'] ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Core Skills & Engineering Stack
          </h2>
          <p className={`text-sm sm:text-base max-w-2xl ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Comprehensive technical repertoire honed through enterprise software production, relational database optimization, and modern AI development.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white border-transparent shadow-md shadow-indigo-500/25 scale-[1.02]'
                    : isDark
                      ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => {
            const IconComponent = getIcon(skill.name);

            return (
              <div
                key={index}
                className={`p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 ${
                  isDark
                    ? 'bg-slate-900/50 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/80 shadow-lg'
                    : 'bg-white/80 border-slate-200 hover:border-indigo-300 hover:bg-white shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                    {skill.experience}
                  </span>
                </div>

                <div className="mb-2">
                  <h4 className={`text-base font-bold font-['Space_Grotesk'] ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {skill.name}
                  </h4>
                  <p className="text-xs text-indigo-400/90 font-medium">
                    {skill.highlight}
                  </p>
                </div>

                {/* Level Meter */}
                <div className="mt-4 pt-3 border-t border-slate-800/40">
                  <div className="flex items-center justify-between text-[11px] mb-1.5 font-medium">
                    <span className="text-slate-400">Proficiency</span>
                    <span className="font-mono text-indigo-300">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Competencies Callout Banner */}
        <div className={`mt-12 p-6 rounded-3xl border backdrop-blur-xl ${
          isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h5 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Component Driven UI
                </h5>
                <p className="text-xs text-slate-400 mt-0.5">
                  High-reusability hooks & state flows
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h5 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Optimized SQL Architecture
                </h5>
                <p className="text-xs text-slate-400 mt-0.5">
                  High-speed queries & tuned stored procedures
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h5 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  AI & RAG Ready
                </h5>
                <p className="text-xs text-slate-400 mt-0.5">
                  Vector search & LLM integration skills
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

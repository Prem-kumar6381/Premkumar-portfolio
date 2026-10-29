import React from 'react';
import { 
  Code, Cpu, Layers, Sparkles, CheckCircle2, 
  MapPin, Globe, GraduationCap, Briefcase, Zap, Terminal 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = ({ isDark }) => {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: Layers,
      title: "Modular Frontend Architecture",
      description: "Developing scalable, reusable component systems with React.js, Ant Design, and modern CSS that remain maintainable across large enterprise codebases.",
      tag: "React & AntD"
    },
    {
      icon: Cpu,
      title: "Enterprise Backend & Services",
      description: "Crafting structured REST APIs, business workflows, and microservice controllers in ASP.NET (C#) integrated seamlessly with frontend clients.",
      tag: "ASP.NET & C#"
    },
    {
      icon: Zap,
      title: "Real-Time Collaboration",
      description: "Building bi-directional WebSockets and live messaging workflows using SignalR for instant notifications, group chats, and state synchronizations.",
      tag: "SignalR Sync"
    },
    {
      icon: Terminal,
      title: "SQL Query & Procedure Tuning",
      description: "Optimizing relational schemas, stored procedures, indexing, and execution plans in MS SQL Server and SSMS to eliminate performance bottlenecks.",
      tag: "SQL Server & SSMS"
    }
  ];

  const quickFacts = [
    { label: "Location", value: personal.location, icon: MapPin },
    { label: "Current Company", value: "KaiDP Technologies LLP", icon: Briefcase },
    { label: "Core Product", value: "One Awesome Team (OAT)", icon: Globe },
    { label: "Education", value: "Pursuing MCA | BCA Graduate", icon: GraduationCap },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-500/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-['Space_Grotesk'] ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering With Precision & Purpose
          </h2>
          <p className={`text-sm sm:text-base max-w-2xl ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A deep-dive into my background, engineering philosophy, and the principles guiding my work on enterprise software.
          </p>
        </div>

        {/* Narrative & Quick Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Story Narrative */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border backdrop-blur-xl ${
            isDark 
              ? 'bg-slate-900/60 border-slate-800 text-slate-300' 
              : 'bg-white/80 border-slate-200 text-slate-700 shadow-sm'
          }`}>
            <h3 className={`text-xl sm:text-2xl font-bold font-['Space_Grotesk'] mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Bridging Intuitive Interfaces with Robust Backend Systems
            </h3>
            
            <div className="space-y-4 text-sm sm:text-base leading-relaxed">
              <p>
                I am a Software Engineer based in Tamil Nadu, India, with nearly two years of professional experience building enterprise web applications. At <span className="text-indigo-400 font-semibold">KaiDP Technologies LLP</span>, I contribute directly to <span className="font-semibold text-cyan-400">One Awesome Team (OAT)</span>, an enterprise platform that powers team administration, employee skill matrixes, broadcast announcements, and real-time messaging.
              </p>
              <p>
                My core strength lies in combining modern frontend frameworks like <span className="font-semibold text-cyan-400">React.js</span> with powerful backend architectures built on <span className="font-semibold text-indigo-400">ASP.NET (C#)</span> and <span className="font-semibold text-emerald-400">Microsoft SQL Server</span>. I take pride in crafting reusable components, troubleshooting intricate bugs, and profiling SQL stored procedures to ensure blazing fast response times.
              </p>
              <p>
                Beyond standard web development, I am passionate about modern advancements in AI. I am actively expanding my capabilities into <span className="font-semibold text-purple-400">Generative AI, Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG)</span> architectures, exploring how AI-driven intelligence can enhance enterprise productivity.
              </p>
            </div>

            {/* Core Values check list */}
            <div className="mt-6 pt-6 border-t border-slate-800/40 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Production-ready clean code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real-time WebSocket architectures</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Database query optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Generative AI & RAG exploration</span>
              </div>
            </div>
          </div>

          {/* Quick Facts & Overview Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Factsheet Card */}
            <div className={`p-6 rounded-3xl border backdrop-blur-xl ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white/80 border-slate-200 shadow-sm'
            }`}>
              <h4 className={`text-base font-bold font-['Space_Grotesk'] mb-4 flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                <span>Snapshot Details</span>
              </h4>
              <div className="space-y-4">
                {quickFacts.map((fact, idx) => {
                  const Icon = fact.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-slate-400">{fact.label}</div>
                        <div className={`text-sm font-semibold mt-0.5 ${
                          isDark ? 'text-slate-200' : 'text-slate-800'
                        }`}>
                          {fact.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AI & Innovation Highlight Card */}
            <div className={`p-6 rounded-3xl border bg-gradient-to-br from-indigo-950/30 via-purple-950/20 to-slate-900/50 backdrop-blur-xl relative overflow-hidden ${
              isDark ? 'border-indigo-500/30' : 'border-indigo-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>AI Specialization & Learning</span>
              </div>
              <h4 className={`text-base font-bold font-['Space_Grotesk'] mb-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Building for the Generative Era
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Studying LLM orchestrations, prompt design, and RAG knowledge-retrieval pipelines to merge classical enterprise architectures with frontier AI capabilities.
              </p>
            </div>

          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className={`p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 group ${
                  isDark 
                    ? 'bg-slate-900/40 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/80 shadow-lg' 
                    : 'bg-white/70 border-slate-200 hover:border-indigo-300 hover:bg-white shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                    {pillar.tag}
                  </span>
                </div>
                <h4 className={`text-base font-bold font-['Space_Grotesk'] mb-2 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {pillar.title}
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

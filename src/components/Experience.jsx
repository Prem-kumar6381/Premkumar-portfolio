import React from 'react';
import { 
  Briefcase, Calendar, MapPin, CheckCircle2, 
  Sparkles, Server, Database, Radio, Code2, 
  ArrowUpRight, ShieldCheck, Terminal, Layers 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = ({ isDark }) => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-['Space_Grotesk'] ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Professional Work Experience
          </h2>
          <p className={`text-sm sm:text-base max-w-2xl ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Delivering mission-critical web applications, enterprise collaboration engines, and real-time backend integrations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((job, idx) => (
            <div 
              key={idx}
              className={`relative rounded-3xl border p-6 sm:p-10 backdrop-blur-xl transition-all duration-300 shadow-xl overflow-hidden group ${
                isDark 
                  ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40' 
                  : 'bg-white/90 border-slate-200 hover:border-indigo-300 shadow-slate-100'
              }`}
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500" />

              {/* Header: Role, Company & Meta */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Current Role
                    </span>
                    <span className="text-xs font-semibold text-indigo-400 px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20">
                      {job.type}
                    </span>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {job.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                    <span className="font-semibold text-indigo-400 text-base">
                      {job.company}
                    </span>
                    <span className="text-slate-500">•</span>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>

                {/* Period Badge */}
                <div className={`shrink-0 px-4 py-2 rounded-2xl border text-xs font-mono font-semibold flex items-center gap-2 ${
                  isDark ? 'bg-slate-950/80 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}>
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{job.period}</span>
                </div>
              </div>

              {/* Core Platform Spotlight Banner */}
              <div className={`p-4 rounded-2xl border mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                isDark 
                  ? 'bg-indigo-950/30 border-indigo-500/30 text-indigo-200' 
                  : 'bg-indigo-50/80 border-indigo-200 text-indigo-900'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-indigo-500 text-white shadow-md shadow-indigo-500/30">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                      Enterprise Product
                    </div>
                    <div className="font-bold text-sm sm:text-base font-['Space_Grotesk']">
                      One Awesome Team (OAT) Platform
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium text-slate-400">
                  Full-Lifecycle Engineering & Maintenance
                </span>
              </div>

              {/* Description */}
              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {job.description}
              </p>

              {/* Achievements Bullet List */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Responsibilities & Deliverables:
                </div>
                {job.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group/item">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1 transition-transform group-hover/item:scale-125" />
                    <span className={`text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-6 border-t border-slate-800/40">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Technologies Employed in Production:
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1.5 rounded-xl border font-mono font-medium transition-colors ${
                        isDark 
                          ? 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-indigo-500/40' 
                          : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-indigo-300'
                      }`}
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

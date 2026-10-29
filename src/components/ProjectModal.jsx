import React from 'react';
import { 
  X, ExternalLink, CheckCircle2, 
  Layers, Cpu, Database, Radio, Sparkles, ShieldCheck 
} from 'lucide-react';

export const ProjectModal = ({ project, onClose, isDark }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className={`relative w-full max-w-3xl rounded-3xl border shadow-2xl overflow-hidden z-10 my-8 transition-all duration-300 ${
        isDark 
          ? 'bg-slate-900 border-slate-700 text-slate-100 shadow-black/80' 
          : 'bg-white border-slate-300 text-slate-900 shadow-xl'
      }`}>
        {/* Top Header Banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} border-b border-white/10 relative`}>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-950/60 hover:bg-slate-950/90 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/30 text-white/90">
              {project.role}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] text-white">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-200 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.stats.map((stat, i) => (
              <div 
                key={i}
                className={`p-3 rounded-2xl border text-center ${
                  isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="text-xs text-slate-400">{stat.label}</div>
                <div className="text-sm font-bold font-mono text-indigo-400 mt-0.5">{stat.value}</div>
              </div>
            ))}
          </div>

          {/* Long Description */}
          <div>
            <h4 className={`text-base font-bold font-['Space_Grotesk'] mb-2 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Project Overview & Architecture
            </h4>
            <p className={`text-sm leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {project.longDescription}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className={`text-base font-bold font-['Space_Grotesk'] mb-3 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Engineering Highlights & Deliverables
            </h4>
            <div className="space-y-2.5">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className={`text-sm leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack List */}
          <div>
            <h4 className={`text-base font-bold font-['Space_Grotesk'] mb-3 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className={`text-xs px-3 py-1.5 rounded-xl border font-mono font-medium ${
                    isDark ? 'bg-slate-950 border-slate-800 text-indigo-300' : 'bg-slate-100 border-slate-200 text-indigo-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className={`p-6 border-t flex items-center justify-between gap-4 ${
          isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="text-xs text-slate-400">
            {project.company ? `Developed at ${project.company}` : 'Engineered by Prem Kumar R'}
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md transition-all"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};

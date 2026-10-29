import React from 'react';
import { 
  Award, ExternalLink, CheckCircle2, ShieldCheck, 
  Terminal, Database, Code, BookOpen, Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certifications = ({ isDark }) => {
  const { certifications } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Database':
        return Database;
      case 'Terminal':
        return Terminal;
      case 'Code':
        return Code;
      default:
        return Award;
    }
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-emerald-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Training</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-['Space_Grotesk'] ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Training & Verified Certifications
          </h2>
          <p className={`text-sm sm:text-base max-w-2xl ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Professional industry immersion and standardized skill assessments on HackerRank and accredited institutes.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => {
            const Icon = getIcon(cert.icon);

            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between group hover:-translate-y-1 ${
                  isDark
                    ? 'bg-slate-900/50 border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/80 shadow-lg'
                    : 'bg-white/80 border-slate-200 hover:border-emerald-300 hover:bg-white shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold font-mono bg-slate-800 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      {cert.period}
                    </span>
                  </div>

                  <h3 className={`text-lg sm:text-xl font-bold font-['Space_Grotesk'] mb-1 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-4">
                    <span className="text-indigo-400 font-semibold">{cert.issuer}</span>
                    {cert.location && <span>• {cert.location}</span>}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/40 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s, i) => (
                      <span
                        key={i}
                        className={`text-[11px] px-2.5 py-1 rounded-lg border font-medium ${
                          isDark
                            ? 'bg-slate-950/70 border-slate-800 text-slate-300'
                            : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 pt-2 transition-colors"
                    >
                      <span>Verify on HackerRank Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

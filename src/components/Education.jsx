import React, { useState } from 'react';
import { 
  GraduationCap, Calendar, Award, BookOpen, 
  CheckCircle2, Clock, BarChart3, LayoutGrid, Table as TableIcon, Sparkles, Building2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = ({ isDark }) => {
  const { qualifications } = portfolioData;
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'table'

  return (
    <section id="education" className="py-20 lg:py-28 relative">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-['Space_Grotesk'] ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Education & Qualifications
          </h2>
          <p className={`text-sm sm:text-base max-w-2xl ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            My academic foundation spanning undergraduate studies in computer applications, ongoing postgraduate research, and foundational schooling.
          </p>

          {/* View Mode Switcher */}
          <div className={`mt-4 inline-flex items-center p-1 rounded-2xl border backdrop-blur-md ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-100 border-slate-200'
          }`}>
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                viewMode === 'cards'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Card Grid</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                viewMode === 'table'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25'
                  : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Qualification Table</span>
            </button>
          </div>
        </div>

        {/* View 1: Card Grid */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifications.map((item, index) => {
              const isPursuing = item.status === 'Pursuing';

              return (
                <div
                  key={index}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between group ${
                    isDark
                      ? 'bg-slate-900/50 border-slate-800 hover:border-purple-500/40 hover:bg-slate-900/80 shadow-lg'
                      : 'bg-white/80 border-slate-200 hover:border-purple-300 hover:bg-white shadow-sm'
                  }`}
                >
                  {/* Status Indicator Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                    isPursuing 
                      ? 'from-amber-400 via-orange-400 to-pink-500' 
                      : 'from-indigo-500 via-purple-500 to-cyan-400'
                  }`} />

                  <div>
                    {/* Top Row: Degree & Status Badge */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2.5">
                          <h3 className={`text-2xl font-bold font-['Space_Grotesk'] ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}>
                            {item.degree}
                          </h3>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                            isPursuing
                              ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                              : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                        <p className={`text-sm font-medium mt-1 ${
                          isDark ? 'text-purple-300' : 'text-purple-700'
                        }`}>
                          {item.field}
                        </p>
                      </div>

                      {/* Percentage Badge */}
                      <div className="text-right shrink-0">
                        <div className={`text-xl sm:text-2xl font-extrabold font-mono ${
                          item.score ? 'text-emerald-400' : 'text-amber-400'
                        }`}>
                          {item.percentage}
                        </div>
                        <div className="text-[11px] text-slate-400 font-medium">
                          {item.score ? 'Overall Score' : 'Status'}
                        </div>
                      </div>
                    </div>

                    {/* Institution & Year Details */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <Building2 className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                          {item.institution}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>Academic Period: {item.year}</span>
                      </div>
                    </div>

                    {/* Score Bar if score exists */}
                    {item.score && (
                      <div className="mb-6 space-y-1.5">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-slate-400">Academic Score</span>
                          <span className="text-slate-300 font-mono font-semibold">{item.score}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-1000"
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Description */}
                    <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Coursework Tags */}
                  <div className="pt-4 border-t border-slate-800/40">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Key Highlights & Competencies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.highlights.map((h, i) => (
                        <span
                          key={i}
                          className={`text-[11px] px-2.5 py-1 rounded-lg border font-medium ${
                            isDark
                              ? 'bg-slate-950/60 border-slate-800 text-slate-300'
                              : 'bg-slate-100 border-slate-200 text-slate-700'
                          }`}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View 2: Professional Clean Western Table */}
        {viewMode === 'table' && (
          <div className={`rounded-3xl border overflow-hidden backdrop-blur-xl shadow-xl ${
            isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="p-6 border-b border-slate-800/60 flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className={`text-lg font-bold font-['Space_Grotesk'] ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Official Academic Qualifications Summary
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Verified educational record across primary, secondary, undergraduate, and postgraduate pursuits.
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold font-mono">
                4 Academic Milestones
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className={`text-xs font-bold tracking-wider uppercase border-b ${
                    isDark ? 'bg-slate-950/80 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}>
                    <th className="py-4 px-6">Qualification</th>
                    <th className="py-4 px-6">Institution</th>
                    <th className="py-4 px-6">Year / Period</th>
                    <th className="py-4 px-6">Percentage / Grade</th>
                    <th className="py-4 px-6 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className={`divide-y text-sm ${
                  isDark ? 'divide-slate-800/60' : 'divide-slate-200'
                }`}>
                  {qualifications.map((row, idx) => (
                    <tr 
                      key={idx}
                      className={`transition-colors ${
                        isDark ? 'hover:bg-slate-800/30' : 'hover:bg-slate-50/80'
                      }`}
                    >
                      <td className="py-4 px-6">
                        <div className="font-bold text-base font-['Space_Grotesk'] text-indigo-400">
                          {row.degree}
                        </div>
                        <div className="text-xs text-slate-400">
                          {row.field}
                        </div>
                      </td>
                      <td className="py-4 px-6 font-medium">
                        <div className={isDark ? 'text-slate-200' : 'text-slate-800'}>
                          {row.institution}
                        </div>
                      </td>
                      <td className="py-4 px-6 font-mono text-xs text-slate-400">
                        {row.year}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <span className={`font-mono font-bold text-base ${
                            row.score ? 'text-emerald-400' : 'text-slate-400'
                          }`}>
                            {row.percentage}
                          </span>
                          {row.score && (
                            <div className="w-24 h-1.5 rounded-full bg-slate-800 hidden sm:block">
                              <div 
                                className="h-full rounded-full bg-emerald-400"
                                style={{ width: `${row.score}%` }}
                              />
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                          row.status === 'Pursuing'
                            ? 'bg-amber-500/10 text-amber-400 border-amber-500/25'
                            : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25'
                        }`}>
                          {row.status === 'Pursuing' ? <Clock className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                          <span>{row.status}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={`p-4 border-t text-xs text-center ${
              isDark ? 'bg-slate-950/60 border-slate-800 text-slate-500' : 'bg-slate-50 border-slate-200 text-slate-500'
            }`}>
              Graduated with Distinction in Bachelor of Computer Applications (BCA) • Currently pursuing Master of Computer Applications (MCA) via Distance Education
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

import React from 'react';
import { 
  X, Printer, Download, Mail, Phone, MapPin, 
  Terminal, ExternalLink, CheckCircle2 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose, isDark }) => {
  if (!isOpen) return null;

  const { personal, qualifications, experience, skills, certifications } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:static">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity print:hidden"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className={`relative w-full max-w-4xl rounded-3xl border shadow-2xl overflow-hidden z-10 my-6 transition-all duration-300 print:border-none print:shadow-none print:my-0 print:max-w-none print:rounded-none ${
        isDark 
          ? 'bg-slate-900 border-slate-700 text-slate-100' 
          : 'bg-white border-slate-300 text-slate-900'
      }`}>
        
        {/* Top Control Bar (Hidden on print) */}
        <div className={`p-4 sm:p-5 border-b flex items-center justify-between gap-4 print:hidden ${
          isDark ? 'bg-slate-950/90 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="font-semibold text-xs sm:text-sm font-['Space_Grotesk']">
              Prem Kumar R — Official Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume"
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-8 space-y-8 font-sans bg-white text-slate-900">
          
          {/* Header */}
          <div className="border-b border-slate-300 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-['Space_Grotesk']">
                PREM KUMAR R
              </h1>
              <p className="text-sm sm:text-base font-bold text-indigo-700 tracking-wide mt-1 uppercase">
                Software Engineer | Full-Stack Web Developer
              </p>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 mt-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-indigo-600" />
                  Devakottai, Tamil Nadu, India
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-indigo-600" />
                  +91 63813 58624
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-indigo-600" />
                  premkumarramanathan72@gmail.com
                </span>
              </div>
            </div>

            {/* Social / Portfolio Links */}
            <div className="text-xs text-slate-700 space-y-1 sm:text-right shrink-0">
              <div>
                <span className="font-semibold text-slate-900">LinkedIn:</span>{' '}
                <a href={personal.profiles.linkedin} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                  linkedin.com/in/prem-kumar6177
                </a>
              </div>
              <div>
                <span className="font-semibold text-slate-900">GitHub:</span>{' '}
                <a href={personal.profiles.github} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                  github.com/Prem-kumar6381
                </a>
              </div>
              <div>
                <span className="font-semibold text-slate-900">HackerRank:</span>{' '}
                <a href={personal.profiles.hackerrank} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">
                  hackerrank.com/profile/pk6177181
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-800 border-b border-indigo-200 pb-1 mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              Software Engineer with nearly two years of professional experience developing and maintaining web applications using React.js, JavaScript, ASP.NET (C#), and Microsoft SQL Server. Experienced in responsive UI development, REST API integration, reusable components, troubleshooting, and SQL query and stored procedure optimization. Contributes to an enterprise collaboration platform and is expanding knowledge of Generative AI, large language models (LLMs), and retrieval-augmented generation (RAG).
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-800 border-b border-indigo-200 pb-1 mb-2 font-mono">
              Technical Skills
            </h2>
            <div className="text-xs sm:text-sm text-slate-700 space-y-1.5">
              <div>
                <span className="font-bold text-slate-900">Frontend:</span> React.js, JavaScript, HTML5, CSS3, Bootstrap, Ant Design, Tailwind CSS, Responsive UI Development
              </div>
              <div>
                <span className="font-bold text-slate-900">Backend & Databases:</span> ASP.NET (C#), REST APIs, Microsoft SQL Server, SQL Server Management Studio (SSMS), MySQL
              </div>
              <div>
                <span className="font-bold text-slate-900">Tools & Additional:</span> Git, GitHub, SignalR (WebSockets), Debugging, SQL Performance Tuning, React Native, Python
              </div>
              <div>
                <span className="font-bold text-slate-900">AI Learning / Exposure:</span> Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Generative AI
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-800 border-b border-indigo-200 pb-1 mb-3 font-mono">
              Professional Experience
            </h2>
            
            {experience.map((job, idx) => (
              <div key={idx} className="space-y-2 mb-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="font-bold text-sm text-slate-900">
                    {job.role} <span className="font-normal text-slate-600">| {job.company}, {job.location}</span>
                  </div>
                  <div className="text-xs font-mono font-bold text-indigo-700">
                    {job.period}
                  </div>
                </div>

                <p className="text-xs text-slate-600 italic">
                  Core Enterprise Project: One Awesome Team (OAT)
                </p>

                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700 leading-relaxed">
                  {job.achievements.map((ach, i) => (
                    <li key={i}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Whole Qualifications & Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-800 border-b border-indigo-200 pb-1 mb-3 font-mono">
              Education & Academic Qualifications
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 border-collapse">
                <thead>
                  <tr className="bg-slate-100 font-bold text-slate-900 border-b border-slate-200">
                    <th className="p-2 border-r border-slate-200">Qualification</th>
                    <th className="p-2 border-r border-slate-200">Institution</th>
                    <th className="p-2 border-r border-slate-200">Year</th>
                    <th className="p-2">Percentage / Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {qualifications.map((item, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="p-2 font-bold text-slate-900 border-r border-slate-200">
                        {item.degree}
                      </td>
                      <td className="p-2 border-r border-slate-200">
                        {item.institution}
                      </td>
                      <td className="p-2 border-r border-slate-200 font-mono">
                        {item.year}
                      </td>
                      <td className="p-2 font-mono font-bold text-slate-800">
                        {item.percentage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Training & Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-800 border-b border-indigo-200 pb-1 mb-2 font-mono">
              Training & Certifications
            </h2>
            <div className="text-xs text-slate-700 space-y-1.5">
              <div>
                <span className="font-bold text-slate-900">Full-Stack Development Training:</span> LetSify Sigma4Solution Pvt Ltd, Karaikudi | 2023 - 2024
              </div>
              <div>
                <span className="font-bold text-slate-900">HackerRank Certifications:</span> Python (Basic); MySQL (Basic); MySQL (Intermediate)
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className={`p-4 border-t flex items-center justify-between print:hidden ${
          isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <div className="text-xs text-slate-400">
            Available for immediate full-time / remote positions.
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};

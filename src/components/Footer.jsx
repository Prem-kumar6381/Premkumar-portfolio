import React from 'react';
import { 
  ArrowUp, Terminal, Mail, Phone, Heart 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const Footer = ({ isDark }) => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isDark ? 'bg-slate-950/80 border-slate-800/80 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-slate-800/40">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-xs text-white">
                PK
              </div>
              <span className={`text-lg font-bold font-['Space_Grotesk'] ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Prem Kumar R
              </span>
            </div>
            <p className="text-xs sm:text-sm max-w-sm leading-relaxed">
              Software Engineer crafting high-performance enterprise web platforms with React.js, ASP.NET (C#), MS SQL Server, SignalR, and Generative AI.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-indigo-400 transition-colors">Qualifications</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Back To Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={personal.profiles.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-xl border transition-all ${
                isDark ? 'bg-slate-900 border-slate-800 hover:text-white' : 'bg-white border-slate-200 hover:text-slate-900'
              }`}
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.profiles.github}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-xl border transition-all ${
                isDark ? 'bg-slate-900 border-slate-800 hover:text-white' : 'bg-white border-slate-200 hover:text-slate-900'
              }`}
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.profiles.hackerrank}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-xl border transition-all ${
                isDark ? 'bg-slate-900 border-slate-800 hover:text-white' : 'bg-white border-slate-200 hover:text-slate-900'
              }`}
              title="HackerRank"
            >
              <Terminal className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Prem Kumar R. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <span>Devakottai, Tamil Nadu, India</span>
            <span>•</span>
            <span className="text-emerald-400 font-medium">Available for Opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

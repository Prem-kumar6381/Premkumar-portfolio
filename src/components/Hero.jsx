import React from 'react';
import { 
  ArrowRight, Download, FileText, Sparkles, MapPin, 
  Terminal, Mail, Phone, ShieldCheck,
  Code2, Server, Database, Radio, CheckCircle2 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onOpenResume, isDark }) => {
  const { personal } = portfolioData;

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient gradient meshes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 blur-[90px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10"
        style={{ maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Pitch */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Badge */}
            <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${
              isDark 
                ? 'bg-slate-900/80 border-slate-700/80 text-slate-300 shadow-inner' 
                : 'bg-white/90 border-slate-200 text-slate-700 shadow-sm'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Software Engineer</span>
              <span className="text-slate-500">•</span>
              <span className="text-indigo-400 font-semibold">{personal.status}</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className={`text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-[1.12] ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">{personal.name}</span>
                <br />
                <span className={`text-2xl sm:text-3xl xl:text-4xl font-semibold tracking-normal ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Full-Stack Web Developer
                </span>
              </h1>
            </div>

            {/* Sub-headline / Pitch */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {personal.bio}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>{personal.location}</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>KaiDP Technologies LLP (Remote)</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2 w-full sm:w-auto">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* View Resume Modal Trigger */}
              <button
                onClick={onOpenResume}
                className={`flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-200 hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-slate-900/90 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                    : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400'
                }`}
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>View Resume</span>
              </button>

              {/* Direct Qualifications CTA */}
              <a
                href="#education"
                className={`flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 ${
                  isDark
                    ? 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Qualifications (MCA / BCA)</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-2.5">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mr-1">
                Connect:
              </span>
              <a
                href={personal.profiles.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all duration-200 hover:scale-110 ${
                  isDark 
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40' 
                    : 'bg-white border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300'
                }`}
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.profiles.github}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all duration-200 hover:scale-110 ${
                  isDark 
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-500' 
                    : 'bg-white border-slate-200 text-slate-700 hover:text-black hover:border-slate-400'
                }`}
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.profiles.hackerrank}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all duration-200 hover:scale-110 ${
                  isDark 
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40' 
                    : 'bg-white border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-300'
                }`}
                title="HackerRank Profile"
              >
                <Terminal className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className={`p-2.5 rounded-xl border transition-all duration-200 hover:scale-110 ${
                  isDark 
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40' 
                    : 'bg-white border-slate-200 text-slate-700 hover:text-cyan-600 hover:border-cyan-300'
                }`}
                title="Email Prem Kumar"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personal.phone}`}
                className={`p-2.5 rounded-xl border transition-all duration-200 hover:scale-110 ${
                  isDark 
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40' 
                    : 'bg-white border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-300'
                }`}
                title="Call Prem Kumar"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Professional Portrait & Floating Tech Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            
            <div className="relative w-72 sm:w-80 md:w-96 group">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              
              {/* Image Frame Card */}
              <div className={`relative rounded-3xl p-2 border overflow-hidden transition-all duration-300 shadow-2xl ${
                isDark 
                  ? 'bg-slate-900/90 border-slate-700/80 shadow-black/60' 
                  : 'bg-white/95 border-slate-200 shadow-indigo-100'
              }`}>
                
                {/* Photo */}
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-slate-950">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center filter saturate-[1.03] contrast-[1.02] transform transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Badge at the bottom of the photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold font-['Space_Grotesk'] text-white">Prem Kumar R</p>
                      <p className="text-[11px] text-indigo-300 font-medium">Software Engineer • KaiDP</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-semibold text-emerald-300">
                      Active
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating Tech Badges (Western aesthetic subtle overlays) */}
              {/* React badge */}
              <div className={`absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-2xl border flex items-center gap-2 shadow-xl backdrop-blur-md animate-bounce [animation-duration:4s] ${
                isDark 
                  ? 'bg-slate-900/90 border-slate-700/80 text-cyan-300 shadow-black/40' 
                  : 'bg-white/90 border-slate-200 text-cyan-700 shadow-slate-200'
              }`}>
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold font-mono">React.js</span>
              </div>

              {/* ASP.NET / C# badge */}
              <div className={`absolute -bottom-4 -left-3 sm:-left-5 px-3.5 py-2 rounded-2xl border flex items-center gap-2 shadow-xl backdrop-blur-md animate-bounce [animation-duration:5s] ${
                isDark 
                  ? 'bg-slate-900/90 border-slate-700/80 text-indigo-300 shadow-black/40' 
                  : 'bg-white/90 border-slate-200 text-indigo-700 shadow-slate-200'
              }`}>
                <Server className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold font-mono">ASP.NET (C#)</span>
              </div>

              {/* SQL Server badge */}
              <div className={`absolute top-1/3 -right-4 sm:-right-8 px-3.5 py-2 rounded-2xl border flex items-center gap-2 shadow-xl backdrop-blur-md animate-bounce [animation-duration:4.5s] ${
                isDark 
                  ? 'bg-slate-900/90 border-slate-700/80 text-emerald-300 shadow-black/40' 
                  : 'bg-white/90 border-slate-200 text-emerald-700 shadow-slate-200'
              }`}>
                <Database className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold font-mono">MS SQL Server</span>
              </div>

              {/* SignalR badge */}
              <div className={`absolute -top-3 -right-2 sm:-right-4 px-3 py-1.5 rounded-2xl border flex items-center gap-1.5 shadow-xl backdrop-blur-md ${
                isDark 
                  ? 'bg-slate-900/90 border-slate-700/80 text-purple-300 shadow-black/40' 
                  : 'bg-white/90 border-slate-200 text-purple-700 shadow-slate-200'
              }`}>
                <Radio className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-[11px] font-bold font-mono">SignalR Live</span>
              </div>

            </div>

          </div>

        </div>

        {/* Metrics Ribbon Bar */}
        <div className="mt-16 lg:mt-20">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
            isDark 
              ? 'bg-slate-900/60 border-slate-800 shadow-xl' 
              : 'bg-white/80 border-slate-200/90 shadow-md shadow-slate-100'
          }`}>
            {personal.metrics.map((metric, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center sm:items-start p-3 rounded-xl transition-colors ${
                  idx !== 0 ? 'sm:border-l sm:border-slate-800/40 sm:pl-6' : ''
                }`}
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className={`text-xs font-semibold mt-0.5 ${
                  isDark ? 'text-slate-200' : 'text-slate-800'
                }`}>
                  {metric.label}
                </div>
                <div className="text-[11px] text-indigo-400/90 font-medium">
                  {metric.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

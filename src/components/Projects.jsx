import React, { useState } from 'react';
import { 
  FolderGit2, ExternalLink, ArrowRight, Sparkles, ShieldCheck
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects = ({ isDark }) => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects (4)' },
    { id: 'enterprise', label: 'Enterprise Systems' },
    { id: 'ai', label: 'Generative AI' },
    { id: 'frontend', label: 'Frontend & Web' },
  ];

  const getFilteredProjects = () => {
    if (filter === 'all') return projects;
    if (filter === 'enterprise') return projects.filter(p => p.category.toLowerCase().includes('enterprise'));
    if (filter === 'ai') return projects.filter(p => p.category.toLowerCase().includes('ai') || p.category.toLowerCase().includes('generative'));
    if (filter === 'frontend') return projects.filter(p => 
      p.category.toLowerCase().includes('frontend') || 
      p.category.toLowerCase().includes('web')
    );
    return projects;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-['Space_Grotesk'] ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering Work & Key Projects
          </h2>
          <p className={`text-sm sm:text-base max-w-2xl ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A curated selection of enterprise engineering, full-stack generative AI systems, responsive web applications, and technical showcases.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  filter === c.id
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white border-transparent shadow-md shadow-indigo-500/25 scale-[1.02]'
                    : isDark
                      ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/80 shadow-xl'
                  : 'bg-white/90 border-slate-200 hover:border-indigo-300 hover:bg-white shadow-md shadow-slate-100'
              }`}
            >
              {/* Card Banner Header */}
              <div className={`p-6 sm:p-7 bg-gradient-to-r ${project.gradient} border-b border-white/5 relative`}>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.isProprietary ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/30 text-indigo-100 border border-indigo-400/30 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        Enterprise Experience
                      </span>
                    ) : project.featured && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Card Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className={`text-sm leading-relaxed mb-6 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Highlights preview */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <span className="text-indigo-400 mt-0.5">•</span>
                        <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips & Action Button */}
                <div className="pt-4 border-t border-slate-800/40 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className={`text-[11px] px-2.5 py-1 rounded-lg border font-mono font-medium ${
                          isDark 
                            ? 'bg-slate-950/70 border-slate-800 text-slate-300' 
                            : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div>
                    {project.isProprietary ? (
                      <button
                        onClick={() => setSelectedProject(project)}
                        aria-label={`Open professional experience details for ${project.title}`}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-md transition-all group-hover:scale-[1.01]"
                      >
                        <span>Professional Experience</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Explore source code for ${project.title} on GitHub (opens in a new tab)`}
                          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-md transition-all group-hover:scale-[1.01]"
                        >
                          <span>Explore Source Code</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => setSelectedProject(project)}
                          aria-label={`View architecture overview for ${project.title}`}
                          title="View Architecture & Details"
                          className={`px-3.5 py-3 rounded-xl text-xs sm:text-sm font-semibold border transition-all shrink-0 ${
                            isDark
                              ? 'bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                              : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          <span>Overview</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
      />
    </section>
  );
};


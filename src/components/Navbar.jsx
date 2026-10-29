import React, { useState, useEffect } from 'react';
import { 
  Menu, X, FileText, Send, Sparkles, 
  Terminal, Sun, Moon 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ onOpenResume, isDark, setIsDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'experience', 'education', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? isDark 
            ? 'bg-[#0b0f19]/80 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5' 
            : 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-md shadow-slate-200/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#hero" 
            className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-400 p-[1px] shadow-md shadow-indigo-500/20">
              <div className={`w-full h-full rounded-[11px] flex items-center justify-center font-bold text-sm tracking-wider ${
                isDark ? 'bg-slate-950 text-white' : 'bg-white text-indigo-600'
              }`}>
                PK
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-slate-950 rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-base tracking-tight font-['Space_Grotesk'] leading-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Prem Kumar R
              </span>
              <span className="text-[11px] font-medium tracking-wide text-indigo-400 uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? 'text-indigo-400 bg-indigo-500/10 font-semibold'
                        : 'text-indigo-600 bg-indigo-50 font-semibold'
                      : isDark
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className={`p-2 rounded-xl transition-colors border ${
                isDark 
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800' 
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 border ${
                isDark
                  ? 'bg-slate-900/80 border-slate-700 text-slate-200 hover:border-indigo-500/50 hover:bg-slate-800'
                  : 'bg-white border-slate-300 text-slate-700 hover:border-indigo-400 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Resume</span>
            </button>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 transition-all duration-200 shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg border ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`sm:hidden border-b px-4 pt-4 pb-6 transition-all duration-300 ${
          isDark ? 'bg-slate-950/95 border-slate-800 backdrop-blur-xl' : 'bg-white/95 border-slate-200 backdrop-blur-xl'
        }`}>
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                  isDark ? 'text-slate-300 hover:text-white hover:bg-slate-900' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/40 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold border ${
                  isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-100 border-slate-300 text-slate-900'
                }`}
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                View Full Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-md shadow-indigo-500/25"
              >
                <Send className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

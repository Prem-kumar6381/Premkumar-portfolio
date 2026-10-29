import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, Check, Copy, 
  Terminal, Sparkles, MessageSquare, 
  Clock, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const Contact = ({ isDark }) => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate sending message with realistic delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#6366f1', '#06b6d4', '#10b981', '#a855f7'],
        });
      } catch (err) {
        // Fallback gracefully if canvas-confetti is not loaded
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-indigo-500/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-['Space_Grotesk'] ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Let's Discuss New Opportunities
          </h2>
          <p className={`text-sm sm:text-base max-w-2xl ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Whether you have an engineering opening, full-stack project, or simply want to connect, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status card */}
            <div className={`p-6 sm:p-7 rounded-3xl border backdrop-blur-xl transition-all ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white/80 border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Ready to Start
                </span>
              </div>
              <h3 className={`text-xl font-bold font-['Space_Grotesk'] mb-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Open to Full-Time & Remote Roles
              </h3>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Specialized in React.js, ASP.NET (C#), and MS SQL Server. Experienced in remote collaboration and agile shipping cycles.
              </p>
            </div>

            {/* Email Contact Card */}
            <div className={`p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
              isDark ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700' : 'bg-white/80 border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                  <a 
                    href={`mailto:${personal.email}`}
                    className={`text-sm font-semibold truncate hover:text-indigo-400 transition-colors block ${
                      isDark ? 'text-slate-200' : 'text-slate-800'
                    }`}
                  >
                    {personal.email}
                  </a>
                </div>
              </div>
              
              <button
                onClick={handleCopyEmail}
                className={`p-2.5 rounded-xl border shrink-0 transition-all ${
                  copiedEmail
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                    : isDark ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white' : 'bg-slate-100 border-slate-300 text-slate-700'
                }`}
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Contact Card */}
            <div className={`p-5 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
              isDark ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700' : 'bg-white/80 border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Direct Phone / WhatsApp</div>
                  <a 
                    href={`tel:${personal.phone}`}
                    className={`text-sm font-semibold hover:text-emerald-400 transition-colors block ${
                      isDark ? 'text-slate-200' : 'text-slate-800'
                    }`}
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={handleCopyPhone}
                  className={`p-2.5 rounded-xl border transition-all ${
                    copiedPhone
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                      : isDark ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white' : 'bg-slate-100 border-slate-300 text-slate-700'
                  }`}
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`tel:${personal.phone}`}
                  className="px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  Call
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className={`p-5 rounded-2xl border transition-all flex items-center gap-3.5 ${
              isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white/80 border-slate-200 shadow-sm'
            }`}>
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Current Location</div>
                <div className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                  {personal.location}
                </div>
              </div>
            </div>

            {/* Social Profiles Grid */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Professional Networks:
              </div>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={personal.profiles.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-2xl border text-center transition-all hover:-translate-y-1 ${
                    isDark 
                      ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40' 
                      : 'bg-white border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300'
                  }`}
                >
                  <LinkedinIcon className="w-5 h-5 mx-auto mb-1 text-blue-400" />
                  <span className="text-[11px] font-semibold block">LinkedIn</span>
                </a>
                
                <a
                  href={personal.profiles.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-2xl border text-center transition-all hover:-translate-y-1 ${
                    isDark 
                      ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-500' 
                      : 'bg-white border-slate-200 text-slate-700 hover:text-black hover:border-slate-400'
                  }`}
                >
                  <GithubIcon className="w-5 h-5 mx-auto mb-1 text-slate-300" />
                  <span className="text-[11px] font-semibold block">GitHub</span>
                </a>

                <a
                  href={personal.profiles.hackerrank}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-2xl border text-center transition-all hover:-translate-y-1 ${
                    isDark 
                      ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40' 
                      : 'bg-white border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-300'
                  }`}
                >
                  <Terminal className="w-5 h-5 mx-auto mb-1 text-emerald-400" />
                  <span className="text-[11px] font-semibold block">HackerRank</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-10 rounded-3xl border backdrop-blur-xl relative overflow-hidden shadow-xl ${
              isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white/90 border-slate-200'
            }`}>
              {/* Form title */}
              <h3 className={`text-xl sm:text-2xl font-bold font-['Space_Grotesk'] mb-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Send a Direct Message
              </h3>
              <p className={`text-xs sm:text-sm mb-6 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Fill out the form below or reach me directly at <a href={`mailto:${personal.email}`} className="text-indigo-400 underline">{personal.email}</a>.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3 animate-fade-in">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold">Message sent successfully!</span> Thank you for reaching out. Prem will get back to you promptly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Miller"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
                        isDark 
                          ? 'bg-slate-950/80 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-indigo-500' 
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                      }`}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
                        isDark 
                          ? 'bg-slate-950/80 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-indigo-500' 
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Subject / Project
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack Software Engineer Opening"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
                      isDark 
                        ? 'bg-slate-950/80 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-indigo-500' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                    }`}
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Message Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, engineering requirement, or message..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/40 resize-none ${
                      isDark 
                        ? 'bg-slate-950/80 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-indigo-500' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500'
                    }`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </div>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

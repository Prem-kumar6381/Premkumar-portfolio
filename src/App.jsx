import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#0b0f19] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-[#f8fafc] text-slate-900 antialiased selection:bg-indigo-500/20 selection:text-indigo-900';
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-300 relative ${
      isDark ? 'bg-[#0b0f19] text-slate-100' : 'bg-[#f8fafc] text-slate-900'
    }`}>
      {/* Top Navbar */}
      <Navbar 
        onOpenResume={() => setResumeModalOpen(true)}
        isDark={isDark}
        setIsDark={setIsDark}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenResume={() => setResumeModalOpen(true)}
          isDark={isDark}
        />
        <About isDark={isDark} />
        <Experience isDark={isDark} />
        <Education isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Certifications isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Interactive Resume Modal */}
      <ResumeModal 
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}

export default App;

import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Terminal, Sparkles, CheckCircle2, Code2 } from 'lucide-react';
import avatarImg from '../assets/hero-avatar.png';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md shadow-sm shadow-emerald-950/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-300 tracking-wide">
                BSc (Hons) SE Student • Open for Internships & Roles
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Malith Gamage
              </h1>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-200 tracking-tight">
                Software Engineering{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                  Undergraduate
                </span>
              </h2>
            </div>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              BSc (Hons) in Software Engineering Undergraduate at <span className="text-white font-semibold">Sabaragamuwa University of Sri Lanka</span>. 
              Crafting web & mobile applications using <span className="text-white font-semibold">React</span>, <span className="text-white font-semibold">React Native</span>, <span className="text-white font-semibold">Java</span>, and <span className="text-white font-semibold">MySQL</span>.
            </p>

            {/* Tech Stack Mini Tags */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" /> React & React Native
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" /> JavaScript & Java
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> HTML & CSS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> MySQL & Project Management
              </span>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 transition-all hover:-translate-y-0.5 group"
                id="hero-view-projects-btn"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all shadow-sm hover:text-white"
                id="hero-contact-btn"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Social Links */}
            <div className="flex items-center gap-4 pt-2 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">Connect:</span>
              <a
                href="https://github.com/Malith-Gamage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-cyan-400 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/malith-gamage-715b7b280/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-cyan-400 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Hero Avatar Column */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Avatar Card Frame */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 group">
              {/* Outer Glowing Border Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
              
              {/* Main Avatar Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
                <img
                  src={avatarImg}
                  alt="Malith Gamage Avatar"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

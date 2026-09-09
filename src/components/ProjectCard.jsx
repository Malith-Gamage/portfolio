import React from 'react';
import { ExternalLink, Github, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-950/40 flex flex-col group">
      
      {/* Project Image Banner */}
      <div className="relative aspect-video overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

        {/* Category Badge Pill */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {/* Action Overlay Links */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg"
          >
            <ExternalLink className="w-3.5 h-3.5" /> Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
          >
            <Github className="w-3.5 h-3.5" /> Source Code
          </a>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Key Highlights */}
          {project.highlights && (
            <div className="pt-2 space-y-1.5">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tech Stack Tags */}
        <div className="pt-4 border-t border-slate-800/80 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-slate-800/80 border border-slate-700/60"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Explore Live</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

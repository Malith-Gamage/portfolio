import React, { useState } from 'react';
import { projects, projectCategories } from '../data/projects';
import ProjectCard from './ProjectCard';
import { FolderGit2, Layers } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
            <FolderGit2 className="w-3.5 h-3.5" /> Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400">Projects & Applications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A showcase of production-ready web applications, microservices, and design systems I've architected and launched.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-800 text-cyan-400 border border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

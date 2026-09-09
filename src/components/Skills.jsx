import React, { useState } from 'react';
import { skillCategories } from '../data/skills';
import { 
  Code2, FileCode, Palette, Layers, Layout, Zap, 
  Server, Cpu, Database, HardDrive, Network, ShieldCheck, 
  Box, Cloud, GitBranch, Globe, GitCommit, Package, 
  Figma, CheckCircle2, Terminal, Sparkles, Wrench, Smartphone, Kanban
} from 'lucide-react';

const iconMap = {
  Code2, FileCode, Palette, Layers, Layout, Zap,
  Server, Cpu, Database, HardDrive, Network, ShieldCheck,
  Box, Cloud, GitBranch, Globe, GitCommit, Package,
  Figma, CheckCircle2, Terminal, Sparkles, Wrench, Smartphone, Kanban
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  return (
    <section id="skills" className="py-20 relative bg-slate-950/50 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium">
            <Wrench className="w-3.5 h-3.5" /> Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Technology Stack</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive overview of technologies, frameworks, and workflow tools I use to design and build scalable products.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                    : 'bg-slate-900/90 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Display Active Category Grid */}
        {skillCategories
          .filter((cat) => cat.id === activeCategory)
          .map((category) => (
            <div key={category.id} className="space-y-8 animate-in fade-in duration-300">
              
              <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800/80 mb-8 max-w-3xl mx-auto text-center">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={index}
                      className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/20 group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-slate-800/80 text-cyan-400 group-hover:bg-indigo-600/20 group-hover:text-indigo-300 transition-colors">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white text-base group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </h3>
                            <span className="text-[11px] font-mono text-slate-400">
                              {skill.tag}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-lg border border-cyan-800/50">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden p-0.5 border border-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}

      </div>
    </section>
  );
}

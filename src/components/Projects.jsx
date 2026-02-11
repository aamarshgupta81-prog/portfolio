import React from "react";
import { portfolioData } from "../data/mock";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-medium text-[#588157] uppercase tracking-widest">Portfolio</span>
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Featured Projects
          </h2>
          <div className="w-12 h-0.5 bg-[#588157] mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col h-full group bg-white border border-[#e8ede7] rounded-xl overflow-hidden hover:border-[#a3b18a] hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 group-hover:text-[#1B4332] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-[#4a4a4a] leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium text-[#588157] bg-[#f1f8f0] border border-[#d4e4d1] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA - Only shows if URL exists */}
                {project.url && (
                  <div className="mt-auto">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#1B4332] border border-[#1B4332] rounded-lg hover:bg-[#1B4332] hover:text-white transition-all duration-200"
                    >
                      View Project
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
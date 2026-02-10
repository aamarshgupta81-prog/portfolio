import React from "react";
import { portfolioData } from "../data/mock";
import { Briefcase, MapPin, ChevronRight } from "lucide-react";

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-medium text-[#588157] uppercase tracking-widest">Career Path</span>
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Professional Experience
          </h2>
          <div className="w-12 h-0.5 bg-[#588157] mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#d4e4d1]" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative pl-8 md:pl-20 group">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-3 h-3 bg-white border-2 border-[#588157] rounded-full group-hover:bg-[#588157] transition-colors duration-300 z-10" />

                {/* Card */}
                <div className="bg-white border border-[#e8ede7] rounded-xl p-6 hover:border-[#a3b18a] hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Image */}
                    <div className="lg:w-48 flex-shrink-0">
                      <img
                        src={exp.image}
                        alt={exp.company}
                        className="w-full h-36 lg:h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="px-2.5 py-1 text-xs font-medium text-[#1B4332] bg-[#f1f8f0] border border-[#d4e4d1] rounded-md">
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[#6b7280]">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-[#1a1a1a] mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-[#588157] flex items-center gap-1.5 mb-3">
                        <Briefcase className="w-3.5 h-3.5" />
                        {exp.company}
                      </p>

                      <p className="text-sm text-[#4a4a4a] leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[#3d3d3d]">
                            <ChevronRight className="w-3.5 h-3.5 text-[#a3b18a] mt-0.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

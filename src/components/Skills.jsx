import React from "react";
import { portfolioData } from "../data/mock";
import { Code2, Users, Monitor } from "lucide-react";

// This helper function picks the color based on the text you type in mock.js
const getLevelBadgeStyles = (level) => {
  const normalizedLevel = level.toLowerCase();
  
  if (normalizedLevel.includes("experienced") || normalizedLevel.includes("expert")) {
    return "bg-[#1B4332] text-white border-[#1B4332]"; // Dark Green
  }
  if (normalizedLevel.includes("intermediate")) {
    return "bg-[#588157] text-white border-[#588157]"; // Medium Green
  }
  if (normalizedLevel.includes("beginner")) {
    return "bg-[#f1f8f0] text-[#588157] border-[#a3b18a]"; // Light Green
  }
  // Default for anything else
  return "bg-gray-100 text-gray-600 border-gray-200";
};

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 bg-[#fafcfa]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-medium text-[#588157] uppercase tracking-widest">Expertise</span>
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Skills & Tools
          </h2>
          <div className="w-12 h-0.5 bg-[#588157] mt-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-white rounded-xl border border-[#e8ede7] p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 bg-[#1B4332] rounded-lg">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">Technical</h3>
            </div>

            <div className="space-y-3">
              {skills.technical.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between group">
                  <span className="text-sm font-medium text-[#3d3d3d] group-hover:text-[#1B4332] transition-colors">
                    {skill.name}
                  </span>
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border ${getLevelBadgeStyles(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Software Skills */}
          <div className="bg-white rounded-xl border border-[#e8ede7] p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 bg-[#588157] rounded-lg">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">Software</h3>
            </div>

            <div className="space-y-3">
              {skills.software.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between group">
                  <span className="text-sm font-medium text-[#3d3d3d] group-hover:text-[#588157] transition-colors">
                    {skill.name}
                  </span>
                  <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border ${getLevelBadgeStyles(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills (Tags) - No changes needed here, but kept for consistency */}
          <div className="bg-white rounded-xl border border-[#e8ede7] p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 bg-[#a3b18a] rounded-lg">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">Soft Skills</h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skills.soft.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-2 text-sm font-medium text-[#3d3d3d] bg-[#f1f8f0] border border-[#d4e4d1] rounded-lg hover:border-[#a3b18a] hover:text-[#1B4332] transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
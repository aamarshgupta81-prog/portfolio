import React from "react";
import { portfolioData } from "../data/mock";
import { BookOpen, Gamepad2, Sparkles } from "lucide-react";

const iconMap = {
  BookOpen: BookOpen,
  Gamepad2: Gamepad2,
};

const Interests = () => {
  const { interests } = portfolioData;

  return (
    <section id="interests" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header - Pixel Style */}
        <div className="mb-16">
          <span className="text-xs font-medium text-[#7c6daa] uppercase tracking-widest">Side Quests</span>
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mt-2"
            style={{ fontFamily: "'Press Start 2P', 'Courier New', monospace", fontSize: "1.5rem", lineHeight: "2.2rem" }}
          >
            {interests.title}
          </h2>
          <p className="text-sm text-[#6b7280] mt-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            {interests.subtitle}
          </p>
          <div className="w-12 h-0.5 bg-[#7c6daa] mt-4" />
        </div>

        {/* Main Content */}
        <div className="border-2 border-dashed border-[#c4bde0] rounded-2xl p-8 bg-[#faf9fe] relative overflow-hidden">
          {/* Decorative pixel corners */}
          <div className="absolute top-3 left-3 w-2 h-2 bg-[#7c6daa] opacity-30" />
          <div className="absolute top-3 right-3 w-2 h-2 bg-[#7c6daa] opacity-30" />
          <div className="absolute bottom-3 left-3 w-2 h-2 bg-[#7c6daa] opacity-30" />
          <div className="absolute bottom-3 right-3 w-2 h-2 bg-[#7c6daa] opacity-30" />

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            {interests.items.map((item, i) => {
              const IconComponent = iconMap[item.icon] || Sparkles;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-[#e0daf0] p-6 hover:shadow-md hover:border-[#7c6daa] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#f0edf8] rounded-xl group-hover:bg-[#7c6daa] transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-[#7c6daa] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-base font-bold text-[#1a1a1a] mb-2"
                        style={{ fontFamily: "'Press Start 2P', 'Courier New', monospace", fontSize: "0.75rem", lineHeight: "1.5rem" }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-sm text-[#4a4a4a] leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <ul className="space-y-1.5">
                        {item.details.map((detail, j) => (
                          <li key={j} className="flex items-center gap-2 text-xs text-[#6b7280]">
                            <span className="w-1.5 h-1.5 bg-[#7c6daa] rounded-sm flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pixel Art Gallery */}
          <div className="grid grid-cols-3 gap-4">
            {interests.images.map((img, i) => (
              <div
                key={i}
                className="relative rounded-lg overflow-hidden border border-[#e0daf0] hover:border-[#7c6daa] transition-all duration-300 group"
              >
                <img
                  src={img}
                  alt={`Pixel art ${i + 1}`}
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ imageRendering: "auto" }}
                />
                <div className="absolute inset-0 bg-[#7c6daa]/0 group-hover:bg-[#7c6daa]/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;

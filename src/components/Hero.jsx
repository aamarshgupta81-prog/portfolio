import React from "react";
import { portfolioData } from "../data/mock";
import { MapPin, ArrowDown } from "lucide-react";

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="min-h-screen bg-white flex items-center relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#f1f8f0] rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#e8f5e3] rounded-full blur-3xl opacity-40" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f1f8f0] border border-[#c8ddc5] rounded-full mb-6">
              <span className="w-2 h-2 bg-[#588157] rounded-full animate-pulse" />
              <span className="text-xs font-medium text-[#588157] tracking-wide uppercase">
                Available for opportunities
              </span>
            </div>

            <h1
              className="text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {personal.name}
            </h1>

            <p className="text-xl text-[#1B4332] font-medium mb-2">
              {personal.title}
            </p>

            <div className="flex items-center gap-1.5 text-sm text-[#6b7280] mb-8">
              <MapPin className="w-3.5 h-3.5" />
              <span>{personal.location}</span>
            </div>

            <p className="text-base text-[#4a4a4a] leading-relaxed max-w-xl mb-10">
              {personal.bio}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4332] text-white text-sm font-medium rounded-lg hover:bg-[#2D5F45] transition-colors duration-200 shadow-sm"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1B4332] text-sm font-medium rounded-lg border border-[#1B4332] hover:bg-[#f1f8f0] transition-colors duration-200"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right side - decorative card */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#f1f8f0] rounded-2xl rotate-3" />
              <div className="relative bg-white border border-[#d4e4d1] rounded-2xl p-6 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1549399905-5d1bad747576?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMjh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzcwNjI1NDc2fDA&ixlib=rb-4.1.0&q=85&w=600"
                  alt="Sustainable workspace"
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#588157] uppercase tracking-wider">Focus Areas</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Green Building", "Renewable Energy", "LEED", "Carbon Analysis"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium text-[#1B4332] bg-[#f1f8f0] border border-[#d4e4d1] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-1 text-[#a3b18a] hover:text-[#588157] transition-colors duration-300 group"
          >
            <span className="text-xs tracking-wider uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

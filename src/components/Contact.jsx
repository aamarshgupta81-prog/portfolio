import React from "react";
import { portfolioData } from "../data/mock";
import { Mail, Linkedin, Phone, Leaf, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-24 bg-[#1B4332]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-medium text-[#a3b18a] uppercase tracking-widest">Get in Touch</span>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's Build Something Sustainable
          </h2>
          <p className="text-sm text-[#a3b18a] mt-4 max-w-lg mx-auto leading-relaxed">
            Interested in collaborating on green building, renewable energy, or sustainability projects? I'd love to hear from you.
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-3 px-8 py-4 bg-white text-[#1B4332] font-medium rounded-xl hover:bg-[#f1f8f0] transition-all duration-200 group w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm">{personal.email}</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-transparent text-white font-medium rounded-xl border border-[#588157] hover:bg-[#588157]/20 transition-all duration-200 group w-full sm:w-auto justify-center"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn Profile</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </a>

          <a
            href={`tel:${personal.phone}`}
            className="flex items-center gap-3 px-8 py-4 bg-transparent text-white font-medium rounded-xl border border-[#588157] hover:bg-[#588157]/20 transition-all duration-200 group w-full sm:w-auto justify-center"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm">{personal.phone}</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-[#2D5F45] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#a3b18a]" />
              <span className="text-sm text-[#a3b18a]">
                {personal.name} · {personal.title}
              </span>
            </div>
            <p className="text-xs text-[#588157]">
              © {new Date().getFullYear()} — Designed with sustainability in mind
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

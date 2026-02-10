import React, { useState, useEffect } from "react";
import { portfolioData } from "../data/mock";
import { Menu, X, Leaf } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { navigation, personal } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#d4e4d1]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-2 group"
          >
            <Leaf className="w-5 h-5 text-[#1B4332] group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-semibold text-[#1B4332] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              {personal.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="px-3 py-2 text-sm text-[#3d3d3d] hover:text-[#1B4332] transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#588157] group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#1B4332] hover:bg-[#f1f8f0] rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-[#d4e4d1]">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="px-3 py-2.5 text-sm text-[#3d3d3d] hover:text-[#1B4332] hover:bg-[#f1f8f0] rounded-lg transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

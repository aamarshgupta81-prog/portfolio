import React from "react";
import "@/App.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Qualifications from "@/components/Qualifications";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <Qualifications />
      <Projects />
      <Skills />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;

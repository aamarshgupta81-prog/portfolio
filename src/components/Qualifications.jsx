import React from "react";
import { portfolioData } from "../data/mock";
import { Award, GraduationCap, BookOpen, FileCheck, Shield } from "lucide-react";

const Qualifications = () => {
  // 1. Safe access: If qualifications is missing, default to an empty object
  const { qualifications = {} } = portfolioData;

  // 2. Safe Lists: These lines prevent the "White Screen of Death"
  // If the list is undefined (missing), it falls back to an empty list []
  const certifications = qualifications.certifications || [];
  const education = qualifications.education || [];
  const courses = qualifications.courses || [];
  // This line handles BOTH spellings ("otherCertificates" or "Certificates")
  const otherCertificates = qualifications.otherCertificates || qualifications.Certificates || [];

  return (
    <section id="qualifications" className="py-24 bg-[#fafcfa]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-medium text-[#588157] uppercase tracking-widest">Credentials</span>
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Qualifications
          </h2>
          <div className="w-12 h-0.5 bg-[#588157] mt-4" />
        </div>

        {/* A) Professional Certifications - Only shows if data exists */}
        {certifications.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 bg-[#1B4332] rounded-lg">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a1a]">Professional Certifications</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="relative bg-white rounded-xl border-2 border-[#1B4332] p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#1B4332] rounded-t-xl" />
                  <Shield className="w-8 h-8 text-[#1B4332] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-base font-semibold text-[#1a1a1a] mb-1">{cert.name}</h4>
                  <p className="text-sm text-[#588157] font-medium mb-3">{cert.issuer}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#6b7280]">{cert.year}</span>
                    <span className="text-xs text-[#a3b18a] font-mono">{cert.credentialId}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* B) Formal Education */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 bg-[#588157] rounded-lg">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#1a1a1a]">Formal Education</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {education.map((edu, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#d4e4d1] p-6 hover:border-[#588157] hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <GraduationCap className="w-6 h-6 text-[#588157]" />
                  <span className="text-xs font-medium text-[#588157] bg-[#f1f8f0] px-2.5 py-1 rounded-full">
                    {edu.year}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-[#1a1a1a] mb-1">{edu.degree}</h4>
                <p className="text-sm text-[#4a4a4a] mb-2">{edu.institution}</p>
                {/* Check for lowercase 'focus' OR Capital 'Focus' */}
                <p className="text-xs text-[#a3b18a] italic">Focus: {edu.focus || edu.Focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row: C) Courses and D) Other Certificates side by side */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* C) Courses */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 bg-[#a3b18a] rounded-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a1a]">Courses</h3>
            </div>

            <div className="space-y-3">
              {courses.map((course, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg border border-[#e8ede7] p-4 hover:border-[#a3b18a] transition-all duration-200 flex items-start gap-3"
                >
                  <div className="w-8 h-8 bg-[#f1f8f0] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[#588157]">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1a1a1a] mb-0.5">{course.name}</h4>
                    <p className="text-xs text-[#6b7280]">{course.provider} · {course.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* D) Other Certificates */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 bg-[#c8b88a] rounded-lg">
                <FileCheck className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a1a]">Other Certificates</h3>
            </div>

            <div className="space-y-3">
              {otherCertificates.map((cert, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg border border-[#e8ede7] p-4 hover:border-[#c8b88a] transition-all duration-200 flex items-start gap-3"
                >
                  <div className="w-8 h-8 bg-[#faf6ee] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileCheck className="w-4 h-4 text-[#c8b88a]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1a1a1a] mb-0.5">{cert.name}</h4>
                    <p className="text-xs text-[#6b7280]">{cert.issuer} · {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
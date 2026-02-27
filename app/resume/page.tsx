"use client";

import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  Printer,
  Share2,
  Sparkles,
  Award,
  GraduationCap,
  Briefcase,
  Code,
  Calendar,
  MapPin,
  Globe2,
} from "lucide-react";
import { useState } from "react";

export default function Resume() {
  const [copied, setCopied] = useState(false);
  const resumeUrl = "/DelightCV.pdf";

  const sections = [
    {
      title: "Education",
      icon: <GraduationCap className="w-5 h-5 text-[#B08401]" />,
      items: [
        "Bachelor's in Computer Engineering",
        "Cyprus International University",
        "Expected Graduation: June 2026",
        "GPA: 3.65/4.0",
      ],
    },
    {
      title: "Technical Skills",
      icon: <Code className="w-5 h-5 text-[#B08401]" />,
      items: [
        "Programming: C++, TypeScript, SQL",
        "Web: Next.js, React, Firebase, Supabase",
        "Embedded: Arduino, Microcontrollers, Robotics",
        "AI/ML: OpenCV, OpenAI API",
      ],
    },
    {
      title: "Experience",
      icon: <Briefcase className="w-5 h-5 text-[#B08401]" />,
      items: [
        "Software Development Intern - Kimtronix Global",
        "Office Assistant - Falcon Electronics",
        "Web Developer - Kuvaneti Consultants",
      ],
    },
    {
      title: "Projects",
      icon: <Award className="w-5 h-5 text-[#B08401]" />,
      items: [
        "FindItAI - AI-Powered Lost & Found Platform",
        "Kimtronix Learning Platform",
        "Kuvaneti Risk Assessment Platform",
        "CPU Scheduler Simulator",
      ],
    },
  ];

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Delight Chirume - Resume",
          text: "Check out Delight Chirume's resume",
          url: resumeUrl,
        });
      } else {
        await navigator.clipboard.writeText(resumeUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FAF6F2] selection:bg-[#D49E8D] selection:text-white">
     
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DED1BD]/30 rounded-full border border-[#DED1BD]/50 mb-6">
          <FileText className="w-3.5 h-3.5 text-[#B08401]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B08401]">
            Professional Portfolio
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-serif text-[#683B2B] leading-tight mb-8">
          Resume & <br />
          <span className="italic text-[#D49E8D]">Qualifications.</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-[#DED1BD]/20 rounded-[3rem] translate-x-4 translate-y-4"></div>
              <div className="relative bg-white border border-[#DED1BD]/50 p-8 md:p-10 rounded-[3rem] shadow-sm">
             
                <div className="border-b border-[#DED1BD] pb-6 mb-8">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-4xl font-serif text-[#683B2B] font-bold">
                        DELIGHT CHIRUME
                      </h2>
                      <p className="text-xl text-[#D49E8D] font-serif italic">
                        Computer Engineering Student
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[#B08401]">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-bold uppercase tracking-wider">
                        Graduating June 2026
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-[#683B2B]/70">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">Nicosia, Cyprus</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#683B2B]/70">
                      <Award className="w-4 h-4" />
                      <span className="text-sm">GPA: 3.65/4.0</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#683B2B]/70">
                      <Globe2 className="w-4 h-4" />
                      <span className="text-sm">Available Worldwide</span>
                    </div>
                  </div>
                </div>

                {/* Resume Sections Preview */}
                <div className="space-y-10">
                  {sections.map((section, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-3 mb-4">
                        {section.icon}
                        <h3 className="text-2xl font-serif text-[#683B2B] font-bold">
                          {section.title}
                        </h3>
                      </div>
                      <ul className="space-y-3 ml-8">
                        {section.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-[#683B2B]/80"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#B08401] mt-2 shrink-0"></div>
                            <span className="text-lg leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-[#683B2B] text-[#FAF6F2] hover:bg-[#D49E8D] transition-all duration-500 shadow-lg hover:shadow-none hover:translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF6F2]/10 flex items-center justify-center mb-3 group-hover:bg-[#FAF6F2]/20 transition-all">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="font-bold uppercase tracking-wider text-xs">
                  View Online
                </span>
              </a>

              <a
                href={`${resumeUrl}?download=1`}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-[#B08401] text-[#FAF6F2] hover:bg-[#683B2B] transition-all duration-500 shadow-lg hover:shadow-none hover:translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF6F2]/10 flex items-center justify-center mb-3 group-hover:bg-[#FAF6F2]/20 transition-all">
                  <Download className="w-6 h-6" />
                </div>
                <span className="font-bold uppercase tracking-wider text-xs">
                  Download PDF
                </span>
              </a>

              <button
                onClick={handlePrint}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-[#D49E8D] text-[#FAF6F2] hover:bg-[#683B2B] transition-all duration-500 shadow-lg hover:shadow-none hover:translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF6F2]/10 flex items-center justify-center mb-3 group-hover:bg-[#FAF6F2]/20 transition-all">
                  <Printer className="w-6 h-6" />
                </div>
                <span className="font-bold uppercase tracking-wider text-xs">
                  Print
                </span>
              </button>

              <button
                onClick={handleShare}
                className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-[#683B2B] text-[#FAF6F2] hover:bg-[#B08401] transition-all duration-500 shadow-lg hover:shadow-none hover:translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-[#FAF6F2]/10 flex items-center justify-center mb-3 group-hover:bg-[#FAF6F2]/20 transition-all">
                  <Share2 className="w-6 h-6" />
                </div>
                <span className="font-bold uppercase tracking-wider text-xs">
                  {copied ? "Copied!" : "Share"}
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Resume Details */}
          <div className="lg:col-span-4 space-y-8">
            {/* Resume Features */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#DED1BD]/20 rounded-[2.5rem] translate-x-2 translate-y-2"></div>
              <div className="relative p-8 bg-[#683B2B] rounded-[2.5rem] text-[#FAF6F2]">
                <h3 className="text-xl font-serif mb-6 italic">
                  Resume Features
                </h3>
                <ul className="space-y-4">
                  {[
                    "ATS-Friendly Format",
                    "One-Page Design",
                    "Updated Regularly",
                    "Technical Skills Highlighted",
                    "Project Portfolio Included",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#B08401] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Looking For */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#DED1BD]/20 rounded-[2.5rem] translate-x-2 translate-y-2"></div>
              <div className="relative bg-white border border-[#DED1BD]/50 p-8 rounded-[2.5rem] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-5 h-5 text-[#B08401]" />
                  <h3 className="text-2xl font-serif text-[#683B2B] font-bold">
                    Looking For
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      title: "Graduate Positions",
                      description: "Software Engineering roles, Robotics",
                      color: "bg-[#D49E8D]/10 border-[#D49E8D]/20",
                      textColor: "text-[#683B2B]",
                    },
                    {
                      title: "Full-time from July 2026",
                      description: "Software Engineering Roles",
                      color: "bg-[#B08401]/10 border-[#B08401]/20",
                      textColor: "text-[#683B2B]",
                    },
                    {
                      title: "Research Opportunities",
                      description: "AI & Robotics",
                      color: "bg-[#683B2B]/5 border-[#683B2B]/10",
                      textColor: "text-[#683B2B]",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-2xl border ${item.color} transition-all hover:translate-y-0.5`}
                    >
                      <h4
                        className={`font-bold text-lg mb-1 ${item.textColor}`}
                      >
                        {item.title}
                      </h4>
                      <p className="text-[#683B2B]/70 text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="p-8 bg-[#683B2B] rounded-[2.5rem] text-[#FAF6F2]">
              <h3 className="text-xl font-serif mb-6 italic">At a Glance</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="text-3xl font-serif font-bold">3.65</div>
                  <div className="text-sm text-[#FAF6F2]/80">GPA (4.0 Scale)</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-serif font-bold">3+</div>
                  <div className="text-sm text-[#FAF6F2]/80">Professional Experiences</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-serif font-bold">4</div>
                  <div className="text-sm text-[#FAF6F2]/80">Major Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Marquee */}
        <div className="mt-24 border-y border-[#DED1BD]/50 py-8 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-center gap-12 text-[#683B2B]/20 text-4xl font-serif italic"
              >
                <span>Graduate from June 2026</span>
                <Sparkles className="w-6 h-6" />
                <span>Open to Opportunities</span>
                <Sparkles className="w-6 h-6" />
                <span>Remote Ready</span>
                <Sparkles className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
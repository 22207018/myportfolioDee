import { GraduationCap, Trophy, Users, Calendar, Sparkles, BookOpen, MapPin, ArrowRight } from "lucide-react";

interface Achievement {
  title: string;
  period: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Education() {
  const courses = [
    "Software Engineering",
    "Operating Systems",
    "Algorithms & Data Structures",
    "Artificial Intelligence",
    "Computer Architecture",
    "Embedded Systems",
    "Network Programming",
    "Database Systems",
  ];

  const achievements: Achievement[] = [
    {
      title: "CIU Computer Science Club - General Secretary",
      period: "Sep 2023 - Present",
      description: "Organized workshops and technical events for 500+ students.",
      icon: Users,
    },
    {
      title: "Robotics Club Organizer",
      period: "Sep 2023 - Present",
      description: "Coordinated robotics competitions and hands-on workshops.",
      icon: Trophy,
    },
    {
      title: "FIRST Global Robotics - Zimbabwe Representative",
      period: "2025 Panama",
      description: "Represented Zimbabwe in international robotics engineering.",
      icon: Trophy,
    },
    {
      title: "ITURO Robotics Competition",
      period: "April 2023",
      description: "Built line-following robot under resource constraints.",
      icon: Trophy,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F2] py-20 selection:bg-[#D49E8D] selection:text-white overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-96 h-96 rounded-full bg-[#DED1BD] opacity-30 blur-3xl"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-64 h-64 rounded-full bg-[#D49E8D] opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="relative mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DED1BD]/30 rounded-full border border-[#DED1BD]/50 mb-6">
            <GraduationCap className="w-4 h-4 text-[#B08401]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B08401]">Academic Journey</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-[#683B2B] leading-tight">
            Learning <br />
            <span className="italic text-[#D49E8D]">& Leadership</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Education Card */}
          <div className="lg:col-span-2 space-y-12">
            <div className="group relative">
              {/* Layered Effect Background */}
              <div className="absolute inset-0 bg-[#DED1BD]/40 rounded-[3rem] rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              
              <div className="relative bg-white p-8 md:p-12 rounded-[3rem] border border-[#DED1BD]/50 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#683B2B]">
                      Cyprus International University
                    </h2>
                    <div className="flex flex-wrap gap-4 text-[#683B2B]/60 font-medium italic">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4"/> Nicosia, Cyprus</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4"/> 2022 — 2026</span>
                    </div>
                    <p className="text-xl text-[#B08401] font-semibold">B.Sc. Computer Engineering</p>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="text-5xl font-serif text-[#683B2B]">3.65<span className="text-xl opacity-40">/4.0</span></div>
                    <p className="text-[10px] uppercase tracking-widest font-black text-[#D49E8D] mt-2">Cumulative GPA</p>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-[#683B2B]/40 mb-6">Specialized Coursework</h3>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course) => (
                      <span key={course} className="px-4 py-2 bg-[#FAF6F2] border border-[#DED1BD]/50 rounded-full text-xs font-bold text-[#683B2B] hover:border-[#B08401] transition-colors cursor-default">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Competitions / Certifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-[#683B2B] rounded-[2.5rem] text-[#FAF6F2] relative overflow-hidden group">
                <BookOpen className="w-12 h-12 text-[#D49E8D] mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-xl font-serif mb-2">FIRST Global Volunteer</h4>
                <p className="text-sm text-[#FAF6F2]/60 font-light">International Robotics Mentorship, Panama 2025.</p>
              </div>
              <div className="p-8 bg-[#DED1BD]/30 border border-[#DED1BD] rounded-[2.5rem] text-[#683B2B] group">
                <Sparkles className="w-12 h-12 text-[#B08401] mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-xl font-serif mb-2">ITURO Competition</h4>
                <p className="text-sm text-[#683B2B]/60 font-light">Autonomous line-tracking optimization under resource constraints.</p>
              </div>
            </div>
          </div>

          {/* Leadership Sidebar */}
          <div className="space-y-8">
            <div className="p-8 md:p-10 bg-white border border-[#DED1BD]/50 rounded-[3rem] shadow-sm relative">
                {/* Decorative Ocher Pill */}
                <div className="absolute top-10 right-[-10px] w-4 h-12 bg-[#B08401] rounded-full hidden lg:block"></div>
                
                <h3 className="text-2xl font-serif text-[#683B2B] mb-8">Leadership <br/><span className="italic text-[#D49E8D]">Experience</span></h3>
                
                <div className="space-y-10">
                  {achievements.map((item, idx) => (
                    <div key={idx} className="flex gap-5 group">
                      <div className="mt-1">
                        <item.icon className="w-5 h-5 text-[#B08401]" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm text-[#683B2B] group-hover:text-[#B08401] transition-colors leading-tight">{item.title}</h4>
                        <p className="text-[10px] uppercase tracking-widest text-[#D49E8D] font-black">{item.period}</p>
                        <p className="text-xs text-[#683B2B]/60 font-light leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="mt-12 flex items-center justify-between p-4 bg-[#FAF6F2] rounded-2xl group hover:bg-[#683B2B] transition-all duration-500">
                   <span className="text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">Request Resume</span>
                   <ArrowRight className="w-4 h-4 text-[#B08401]" />
                </Link>
            </div>
          </div>

        </div>

        {/* Impact Stat Block */}
        <div className="mt-24 p-12 md:p-20 bg-[#B08401] rounded-[4rem] text-white text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <h2 className="text-4xl md:text-5xl font-serif italic mb-6 relative z-10">Bridging Classrooms & Competitions</h2>
             <p className="max-w-2xl mx-auto text-white/80 font-light text-lg relative z-10">
               My education isn&apos;t just about grades; it&apos;s about leading a community of 500+ students and competing on the global stage.
             </p>
        </div>
      </div>
    </div>
  );
}

// Added internal Link mock since your code uses Next.js
import Link from 'next/link';
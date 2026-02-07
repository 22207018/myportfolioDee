import { Code, Cpu, Database, Cloud, Wrench, Brain, Sparkles, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C++", "TypeScript", "Python", "SQL", "C", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Embedded & Hardware",
    icon: Cpu,
    skills: ["Arduino", "Microcontrollers", "Sensor Integration", "Robotics", "PCB Design"],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["OpenCV", "Computer Vision", "OCR", "OpenAI API"],
  },
  {
    title: "Web Development",
    icon: Cloud,
    skills: ["Next.js", "React", "Firebase", "Supabase", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "Linux", "Docker", "VS Code", "Vercel", "Notion"],
  },
  {
    title: "Databases & Storage",
    icon: Database,
    skills: ["PostgreSQL", "Firestore", "Supabase", "File Systems"],
  },
];

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#FAF6F2] py-20 selection:bg-[#D49E8D] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="relative mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#B08401]/10 rounded-full border border-[#B08401]/20">
                <Zap className="w-3.5 h-3.5 text-[#B08401]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B08401]">Toolkit</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-serif text-[#683B2B]">
                Technical <span className="italic text-[#D49E8D]">Stack</span>
              </h1>
              <p className="max-w-xl text-[#683B2B]/70 text-lg font-light leading-relaxed">
                A comprehensive arsenal for engineering robust systems, from the silicon level to the cloud layer.
              </p>
            </div>
            {/* Decorative Ocher Circle */}
            <div className="w-20 h-20 bg-[#B08401] rounded-full hidden md:block opacity-10 blur-xl absolute right-10 top-0"></div>
          </div>
          <div className="h-px w-full bg-[#DED1BD]/50 mt-12"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {skillCategories.map((category, index) => (
            <div key={index} className="group relative">
              {/* Subtle Layered Depth */}
              <div className="absolute inset-0 bg-[#DED1BD]/20 rounded-[2rem] translate-x-1 translate-y-1 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 -z-10"></div>
              
              <div className="h-full bg-white p-8 rounded-[2rem] border border-[#DED1BD]/50 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#FAF6F2] rounded-xl text-[#B08401] group-hover:bg-[#B08401] group-hover:text-white transition-colors duration-500">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-[#683B2B]">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-[#FAF6F2] border border-[#DED1BD]/40 text-[#683B2B]/70 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-colors hover:border-[#B08401]/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="relative overflow-hidden rounded-[3rem] bg-[#683B2B] p-10 md:p-16 text-[#FAF6F2]">
    
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D49E8D] opacity-10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <Sparkles className="text-[#D49E8D] w-6 h-6" />
              <h2 className="text-3xl md:text-4xl font-serif italic">Development Philosophy</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {[
                { 
                  num: "01", 
                  title: "System-Level Thinking", 
                  desc: "Understanding the full stack, from hardware interrupts to cloud API latency.",
                  accent: "bg-[#B08401]"
                },
                { 
                  num: "02", 
                  title: "Performance First", 
                  desc: "Focusing on O(n) complexity, memory foot-prints, and real-time deterministic behavior.",
                  accent: "bg-[#D49E8D]"
                },
                { 
                  num: "03", 
                  title: "Clean Architecture", 
                  desc: "Separation of concerns is not a suggestion; it's the foundation of scalable systems.",
                  accent: "bg-[#DED1BD]/30"
                },
                { 
                  num: "04", 
                  title: "Continuous Learning", 
                  desc: "Iterating daily on the toolkit to stay ahead of the AI and hardware curve.",
                  accent: "bg-[#FAF6F2]/20"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className={`flex-shrink-0 w-12 h-12 ${item.accent} rounded-2xl flex items-center justify-center font-black text-white group-hover:scale-110 transition-transform`}>
                    {item.num}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2 text-[#FAF6F2]">{item.title}</h4>
                    <p className="text-[#FAF6F2]/60 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       
        <div className="mt-20 text-center">
            <p className="text-[#683B2B]/40 text-xs tracking-widest uppercase mb-4">Ready to build something?</p>
            <div className="h-px w-12 bg-[#B08401] mx-auto opacity-30"></div>
        </div>
      </div>
    </div>
  );
}
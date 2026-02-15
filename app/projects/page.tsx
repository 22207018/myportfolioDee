import { FolderKanban, Sparkles, ArrowUpRight, ArrowRight, Github } from "lucide-react";
import Link from 'next/link';

const projects = [
  {
    title: "FindItAI - Intelligent Lost & Found",
    description: "AI-powered platform for automated item identification and matching using computer vision and NLP.",
    problem: "Manual systems are inefficient with low recovery rates.",
    solution: "Implemented computer vision for visual matching and NLP for semantic search.",
    outcome: "Increased recovery rates by 60% and reduced search time by 80%.",
    technologies: ["Next.js", "TypeScript", "OpenCV"],
    githubUrl: "https://github.com/22207018/FindItAi",
    liveUrl: "#",
  },
  {
    title: "Kimtronix Learning Platform",
    description: "Full-stack personalized learning platform with AI-powered interviews and automated workflows.",
    problem: "Manual student screening causing delays and inconsistencies.",
    solution: "Built AI interview system with automated scoring and multi-role dashboards.",
    outcome: "Reduced onboarding time by 70% and improved matching accuracy by 85%.",
    technologies: ["Next.js", "Firebase", "OpenAI API", "Tailwind CSS"],
    githubUrl: "https://github.com/AlwinTwac/SkillsG",
    liveUrl: "#",
  },
  {
    title: "Kuvaneti Risk Assessment",
    description: "Comprehensive insurance risk management system with workflow automation.",
    problem: "Paper-based risk assessment leading to errors and delays.",
    solution: "Developed role-based dashboards with automated workflows.",
    outcome: "Reduced processing time by 60% and improved accuracy.",
    technologies: ["Next.js", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/22207018/kuvaneti-site",
    liveUrl: "#",
  },

  {
    title: "Autonomous Fire Fighting Robot",
    description: "Team-led development of autonomous robot for fire detection and response.",
    problem: "Need for early fire detection in hazardous environments.",
    solution: "Designed robot with flame sensors and autonomous navigation.",
    outcome: "Functional prototype capable of detecting fires in controlled environments.",
    technologies: ["Arduino", "C++", "Sensors", "Robotics"],
    
  },
  {
    title: "Line Tracking Robot - ITURO",
    description: "Resource-constrained autonomous line-following robot for competition.",
    problem: "Creating reliable navigation under tight hardware constraints.",
    solution: "Custom sensor placement.",
    outcome: "Competition-ready robot demonstrating robust performance.",
    technologies: ["Arduino", "Embedded C++"],
    Url: "https://ciu.edu.tr/sites/default/files/2024-01/CIU-VENTURING-INTO-THE-INGENIOUS-AND-CHALLENGING-WORLD-OF-ROBOTICS-24.pdf",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#FAF6F2] py-20 selection:bg-[#D49E8D] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="relative mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DED1BD]/30 rounded-full border border-[#DED1BD]/50">
                <Sparkles className="w-4 h-4 text-[#B08401]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B08401]">Portfolio</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-serif text-[#683B2B]">
                Selected <span className="italic text-[#D49E8D]">Works</span>
              </h1>
              <p className="max-w-xl text-[#683B2B]/70 text-lg font-light leading-relaxed">
                A collection of systems ranging from low-level embedded engineering to high-level AI-driven web architectures.
              </p>
            </div>
            
            <div className="p-4 bg-white/50 backdrop-blur-md border border-[#DED1BD] rounded-2xl hidden lg:block rotate-3">
               <FolderKanban className="w-12 h-12 text-[#B08401]" />
            </div>
          </div>
          <div className="h-px w-full bg-[#DED1BD]/50 mt-12"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Animated Background Blob on Hover */}
              <div className="absolute inset-0 bg-[#DED1BD]/20 rounded-[2rem] rotate-0 group-hover:-rotate-2 transition-transform duration-500 -z-10"></div>
              
              <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#DED1BD]/50 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full group-hover:-translate-y-2">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-serif text-[#683B2B] leading-tight group-hover:text-[#B08401] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#FAF6F2] rounded-full transition-colors">
                        <Github className="w-5 h-5 text-[#683B2B]/40 hover:text-[#683B2B]" />
                      </a>
                    )}
                    {(project.liveUrl || project.Url) && (
                       <a href={project.liveUrl || project.Url} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#FAF6F2] rounded-full transition-colors">
                        <ArrowUpRight className="w-5 h-5 text-[#B08401]" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[#683B2B]/70 text-sm leading-relaxed mb-8 flex-grow font-light">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-[#FAF6F2] text-[#683B2B]/60 text-[10px] font-bold uppercase tracking-wider rounded-md border border-[#DED1BD]/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-[#FAF6F2] flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D49E8D]">Outcome</span>
                    <span className="text-xs italic text-[#683B2B]/80">{project.outcome}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Styled Call to Action */}
        <div className="mt-32 relative overflow-hidden rounded-[3rem] bg-[#683B2B] p-12 md:p-20 text-center shadow-2xl">
          {/* Decorative shapes inside CTA */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#B08401]/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D49E8D]/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
          
          <div className="relative z-10 space-y-8">
            <h3 className="text-4xl md:text-5xl font-serif text-[#FAF6F2]">
              Have a project <span className="italic text-[#D49E8D]">in mind?</span>
            </h3>
            <p className="text-[#FAF6F2]/70 mb-10 max-w-2xl mx-auto font-light text-lg">
              I&apos;m currently looking for internships and collaborative roles starting June 2026. 
              Let&apos;s build something intelligent together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#B08401] text-white rounded-full font-bold hover:scale-105 transition-transform shadow-xl"
            >
              Get In Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
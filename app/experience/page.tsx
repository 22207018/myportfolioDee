import { Briefcase, Calendar, MapPin, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface ExperienceType {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: string;
}

const experiences: ExperienceType[] = [
  {
    company: "Kuvaneti Consultants",
    role: "Web Developer (Remote)",
    period: "Ongoing",
    location: "South Africa",
    description: "Developing a comprehensive risk insurance platform with complex workflow automation.",
    achievements: [
      "Building multi-role account management for surveyors, assessors, and insurers.",
      "Implementing real-time collaboration tools for insurance claim processing.",
      "Developing an enhanced security admin domain with PostgreSQL/Supabase.",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "React Query"],
    type: "Contract",
  },
  {
    company: "Kimtronix Global",
    role: "Software Development Intern",
    period: "July - Sept 2025",
    location: "Harare, Zimbabwe",
    description: "Developed full-stack web applications with AI integration and automated workflows.",
    achievements: [
      "Built AI-powered interview system using OpenAI API for student screening.",
      "Created multi-role dashboards with real-time updates for learners and recruiters.",
      "Automated email workflows and chatbot triggers using N8N and SendGrid.",
    ],
    technologies: ["Next.js", "OpenAI API", "Firebase", "N8N", "TypeScript"],
    type: "Internship",
  },
  {
    company: "Falcon Electronics",
    role: "Office Assistant",
    period: "Feb - Sept 2022",
    location: "Harare, Zimbabwe",
    description: "Managed inventory, sales tracking, and financial records for a regional electronics firm.",
    achievements: [
      "Improved record-keeping efficiency by 40% through Excel process optimization.",
      "Managed invoicing and financial documentation for daily operations.",
      "Supported sales team with accurate product data and availability tracking.",
    ],
    technologies: ["Excel", "Inventory Systems", "Data Analysis", "Financial Reporting"],
    type: "Full-time",
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-[#FAF6F2] py-20 selection:bg-[#D49E8D] selection:text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="relative mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DED1BD]/30 rounded-full border border-[#DED1BD]/50">
                <Briefcase className="w-3.5 h-3.5 text-[#B08401]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B08401]">Career Path</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif text-[#683B2B] leading-none">
                Work <span className="italic text-[#D49E8D]">History</span>
              </h1>
              <p className="max-w-xl text-[#683B2B]/70 text-lg font-light">
                Bridging the gap between academic theory and industrial application.
              </p>
            </div>
          </div>
          <div className="h-px w-full bg-[#DED1BD]/50 mt-12"></div>
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <div key={index} className="group relative grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Year/Type Sidebar (Collage Element) */}
              <div className="lg:col-span-3 space-y-2">
                <div className="text-4xl font-serif text-[#B08401] opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  {exp.period.split(' ').pop()}
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-black text-[#683B2B]">
                  {exp.type}
                </div>
              </div>

              {/* Content Card */}
              <div className="lg:col-span-9 relative">
                {/* 3D Offset Background */}
                <div className="absolute inset-0 bg-[#DED1BD]/20 rounded-[3rem] translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                
                <div className="relative bg-white border border-[#DED1BD]/50 p-8 md:p-12 rounded-[3rem] shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
                    <div>
                      <h3 className="text-3xl font-serif text-[#683B2B] mb-2">{exp.company}</h3>
                      <p className="text-[#D49E8D] font-bold text-sm tracking-wide uppercase">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-4 text-[#683B2B]/40 text-xs font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {exp.location}</span>
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {exp.period}</span>
                    </div>
                  </div>

                  <p className="text-[#683B2B]/70 mb-10 text-lg font-light leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-10">
                    {/* Achievements List */}
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-black text-[#B08401] mb-6">Key Contributions</h4>
                      <ul className="space-y-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 group/item">
                            <CheckCircle2 className="w-4 h-4 text-[#DED1BD] group-hover/item:text-[#B08401] transition-colors mt-0.5" />
                            <span className="text-sm text-[#683B2B]/80 font-light">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack for this role */}
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-black text-[#B08401] mb-6">Environment</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-4 py-1.5 bg-[#FAF6F2] border border-[#DED1BD]/50 rounded-full text-[10px] font-bold text-[#683B2B] uppercase tracking-tighter">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Philosophy Footer */}
        <section className="mt-32 p-12 md:p-20 bg-[#683B2B] rounded-[4rem] text-[#FAF6F2] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#B08401] opacity-10 rounded-full blur-3xl -ml-20 -mt-20"></div>
          
          <div className="relative z-10 grid md:grid-cols-3 gap-12 text-center items-center">
            <div className="space-y-2">
              <div className="text-5xl font-serif text-[#D49E8D]">3+</div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-black opacity-60">Industries Explored</p>
            </div>
            <div className="space-y-4">
              <Sparkles className="w-8 h-8 text-[#B08401] mx-auto" />
              <h3 className="text-2xl font-serif italic">Reliability in every line of code.</h3>
              <p className="text-sm font-light opacity-60">Delivering high-performance solutions from Harare to Nicosia.</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-serif text-[#D49E8D]">100%</div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-black opacity-60">Commitment Rate</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
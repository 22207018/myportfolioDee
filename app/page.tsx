import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Cpu, Code, Brain, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FAF6F2] text-[#683B2B] selection:bg-[#D49E8D] selection:text-white overflow-x-hidden">
      
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-64 h-64 rounded-full bg-[#DED1BD] opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-96 h-96 rounded-full bg-[#D49E8D] opacity-10 blur-3xl"></div>
       
        <div className="absolute top-40 right-[10%] w-4 h-4 bg-[#B08401] rounded-full opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            
            <div className="text-left space-y-8 order-2 lg:order-1">
              <div className="inline-block">
                <span className="text-[#B08401] font-medium tracking-[0.2em] text-xs uppercase">Computer Engineer • Class of 2026</span>
                <div className="h-px w-12 bg-[#B08401] mt-2"></div>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-serif font-light leading-[1.1]">
                DELIGHT <br />
                <span className="italic font-normal text-[#D49E8D]">CHIRUME</span>
              </h1>

              <p className="text-xl md:text-2xl font-light leading-relaxed max-w-xl text-[#683B2B]/80">
                Building intelligent systems at the intersection of 
                <span className="font-semibold text-[#B08401]"> Hardware </span> 
                and <span className="font-semibold text-[#B08401]">AI Engineering</span>.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {["Embedded Systems", "Robotics", "AI Engineering"].map((skill) => (
                  <span key={skill} className="px-4 py-1.5 border border-[#DED1BD] bg-white/40 backdrop-blur-sm rounded-full text-xs font-bold tracking-wider uppercase">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Link
                  href="/projects"
                  className="group px-10 py-4 bg-[#683B2B] text-[#FAF6F2] rounded-full font-medium transition-all hover:bg-[#B08401] hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Explore Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="group px-10 py-4 border border-[#683B2B]/30 rounded-full font-medium transition-all hover:bg-white flex items-center justify-center"
                >
                  Let&apos;s Connect
                </Link>
              </div>
            </div>

           
            <div className="relative h-[500px] md:h-[600px] flex items-center justify-center order-1 lg:order-2">
              
              
              <div className="absolute top-10 right-10 w-72 h-72 bg-[#DED1BD] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

              
              <div 
                className="relative z-10 w-full h-full rounded-[30%_70%_70%_30%/50%_30%_70%_50%] overflow-hidden shadow-[0_35px_60px_-15px_rgba(104,59,43,0.3)] transition-all duration-1000 hover:rounded-3xl group"
                style={{
                  backgroundImage: `url('/inty.jpeg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: '100% 50%',
                  backgroundAttachment: 'fixed',
                }}
              >
                
                <Image 
                  src="/inty.jpeg" 
                  alt="Delight Chirume" 
                  fill 
                  className="object-cover opacity-0 pointer-events-none"
                  priority
                />
               
                <div className="absolute inset-0 bg-[#683B2B]/10 opacity-20 mix-blend-overlay"></div>
              </div>

              
              <div className="absolute -bottom-6 -left-6 z-20 p-6 backdrop-blur-xl bg-white/40 border border-white/60 rounded-2xl shadow-2xl hidden md:block transform -rotate-3 hover:rotate-0 transition-transform duration-500 cursor-default">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#B08401] rounded-full flex items-center justify-center text-white">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#683B2B] font-black">Current Focus</p>
                    <p className="text-sm font-serif italic text-[#683B2B]">Intelligent systems</p>
                  </div>
                </div>
              </div>

             
              <div className="absolute top-10 -right-4 w-10 h-10 bg-[#B08401] rounded-full shadow-xl z-20 animate-bounce transition-all duration-1000" style={{ animationDuration: '4s' }}></div>
            </div>

          </div>
        </section>

       
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#683B2B] mb-4">Core Expertise</h2>
            <div className="w-24 h-1 bg-[#D49E8D] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                title: "Embedded & Robotics", 
                icon: Cpu, 
                desc: "Low-level system programming and hardware optimization for real-time robotics.",
                tags: ["C/C++", "STM32", "ROS"]
              },
              { 
                title: "Modern Full-Stack", 
                icon: Code, 
                desc: "Building seamless user interfaces backed by scalable cloud architectures.",
                tags: ["Next.js", "TypeScript", "Node.js"]
              },
              { 
                title: "AI & Intelligence", 
                icon: Brain, 
                desc: "Integrating computer vision and NLP to create truly autonomous systems.",
                tags: ["OpenCV", "PyTorch", "OpenAI"]
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-[#DED1BD]/50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-14 h-14 bg-[#FAF6F2] rounded-2xl flex items-center justify-center mb-6 border border-[#DED1BD]/30 group-hover:bg-[#B08401] transition-colors duration-500">
                  <item.icon className="w-7 h-7 text-[#B08401] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-[#683B2B]">{item.title}</h3>
                <p className="text-[#683B2B]/70 mb-8 text-sm leading-relaxed">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#DED1BD]/20 text-[#683B2B] text-[10px] font-bold uppercase tracking-wider rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-16">
          <div className="bg-[#683B2B] rounded-[4rem] p-12 md:p-20 text-[#FAF6F2] relative overflow-hidden shadow-2xl">
            {/* Decorative texture for the dark card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
              {[
                { label: "GPA", val: "3.65", sub: "Cumulative" },
                { label: "Graduation", val: "2026", sub: "Comp Engineering" },
                { label: "Students", val: "500+", sub: "Club Leadership" },
                { label: "Projects", val: "10+", sub: "Completed" },
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-5xl font-bold text-[#D49E8D]">{stat.val}</div>
                  <div className="font-serif italic text-lg opacity-90">{stat.label}</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

       
        <section className="py-24 text-center">
          <div className="inline-flex items-center gap-4 mb-12">
            <div className="h-px w-8 bg-[#B08401]"></div>
            <h2 className="text-3xl font-serif text-[#683B2B]">Explore Further</h2>
            <div className="h-px w-8 bg-[#B08401]"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Projects", link: "/projects", desc: "Technical Portfolio" },
              { name: "Journey", link: "/experience", desc: "Experience & Roles" },
              { name: "Toolkit", link: "/skills", desc: "Technical Skills" }
            ].map((link) => (
              <Link 
                key={link.name}
                href={link.link} 
                className="p-10 bg-white/30 border border-[#DED1BD]/50 hover:border-[#B08401] hover:bg-white rounded-3xl transition-all duration-300 group shadow-sm hover:shadow-xl"
              >
                <h3 className="text-xl font-bold mb-2 text-[#683B2B] group-hover:text-[#B08401] transition-colors">{link.name}</h3>
                <p className="text-xs text-[#683B2B]/60 mb-6 uppercase tracking-widest">{link.desc}</p>
                <div className="flex items-center justify-center text-[#683B2B] font-bold text-sm">
                  View <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
      
      {/* Editorial Footer Element */}
      <footer className="py-12 text-center opacity-40 text-xs tracking-widest uppercase">
        © {new Date().getFullYear()} Delight Chirume — Breathe Life into Your Creative Work
      </footer>
    </div>
  )
}
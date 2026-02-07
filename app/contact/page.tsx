'use client';

import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, Sparkles, Globe2, ArrowRight, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendEmail } from "@/app/actions/send-email"; // Adjust path as needed

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await sendEmail(formData);

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.',
        });
        reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:chirumedelight2@gmail.com';
  };

  return (
    <div className="min-h-screen bg-[#FAF6F2] selection:bg-[#D49E8D] selection:text-white">
      
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DED1BD]/30 rounded-full border border-[#DED1BD]/50 mb-6">
          <Globe2 className="w-3.5 h-3.5 text-[#B08401]" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B08401]">Global Availability</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-serif text-[#683B2B] leading-tight mb-8">
          Let&apos;s start a <br />
          <span className="italic text-[#D49E8D]">Conversation.</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Information & Socials */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <p className="text-xl text-[#683B2B]/70 font-light leading-relaxed">
                Whether you have a graduate opportunity in mind or a complex software challenge, I&apos;m ready to collaborate.
              </p>
              
              <div className="space-y-6">
                <div className="group flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#DED1BD] flex items-center justify-center text-[#B08401] group-hover:bg-[#B08401] group-hover:text-white transition-all duration-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-black text-[#B08401]">Email Me</p>
                    <button
                      onClick={handleEmailClick}
                      className="text-[#683B2B] font-serif text-lg hover:text-[#D49E8D] transition-colors text-left"
                    >
                      chirumedelight2@gmail.com
                    </button>
                    <p className="text-xs text-[#683B2B]/60 mt-1">Click to open your email client</p>
                  </div>
                </div>

                <div className="group flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#DED1BD] flex items-center justify-center text-[#B08401]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-black text-[#B08401]">Base Location</p>
                    <p className="text-[#683B2B] font-serif text-lg">Nicosia, Cyprus (non EU)</p>
                    <p className="text-xs text-[#683B2B]/60 mt-1">Available for remote work worldwide</p>
                  </div>
                </div>

                <div className="group flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#DED1BD] flex items-center justify-center text-[#B08401]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-black text-[#B08401]">Languages</p>
                    <p className="text-[#683B2B] font-serif text-lg">English, Shona, Chinese, German</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-[#683B2B] rounded-[2.5rem] text-[#FAF6F2]">
              <h3 className="text-xl font-serif mb-6 italic">Connect Online</h3>
              <div className="flex gap-4">
                <a href="https://github.com/22207018" target="_blank" className="flex-1 py-3 bg-[#FAF6F2]/10 hover:bg-[#FAF6F2]/20 border border-[#FAF6F2]/20 rounded-2xl transition-all flex items-center justify-center gap-2">
                  <Github className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-tighter">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/delight-chirume-5771a0248/" target="_blank" className="flex-1 py-3 bg-[#FAF6F2]/10 hover:bg-[#FAF6F2]/20 border border-[#FAF6F2]/20 rounded-2xl transition-all flex items-center justify-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-tighter">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7 relative">
            <div className="absolute inset-0 bg-[#DED1BD]/20 rounded-[3rem] translate-x-4 translate-y-4"></div>
            <div className="relative bg-white border border-[#DED1BD]/50 p-8 md:p-12 rounded-[3rem] shadow-sm">
              
              {submitStatus.type === 'success' ? (
                <div className="py-20 text-center space-y-6">
                  <div className="w-20 h-20 bg-[#FAF6F2] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-[#B08401]" />
                  </div>
                  <h2 className="text-3xl font-serif text-[#683B2B]">Message Received</h2>
                  <p className="text-[#683B2B]/60 font-light">{submitStatus.message}</p>
                  <button onClick={() => setSubmitStatus({ type: null, message: '' })} className="text-[#B08401] font-bold text-xs uppercase tracking-widest hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  {submitStatus.type === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                      <p className="text-red-800 text-sm">{submitStatus.message}</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-[#683B2B]/40 ml-1">First Name *</label>
                      <input 
                        {...register('firstName')}
                        className={`w-full bg-[#FAF6F2] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#DED1BD] transition-all text-[#683B2B] ${
                          errors.firstName ? 'ring-2 ring-red-300' : ''
                        }`}
                        placeholder="Delight"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-[#683B2B]/40 ml-1">Last Name *</label>
                      <input 
                        {...register('lastName')}
                        className={`w-full bg-[#FAF6F2] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#DED1BD] transition-all text-[#683B2B] ${
                          errors.lastName ? 'ring-2 ring-red-300' : ''
                        }`}
                        placeholder="Chirume"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-xs text-red-600">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-[#683B2B]/40 ml-1">Email Address *</label>
                    <input 
                      {...register('email')}
                      type="email"
                      className={`w-full bg-[#FAF6F2] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#DED1BD] transition-all text-[#683B2B] ${
                        errors.email ? 'ring-2 ring-red-300' : ''
                      }`}
                      placeholder="hello@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-[#683B2B]/40 ml-1">Subject *</label>
                    <select 
                      {...register('subject')}
                      className={`w-full bg-[#FAF6F2] border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#DED1BD] transition-all text-[#683B2B] ${
                        errors.subject ? 'ring-2 ring-red-300' : ''
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="internship">Internship Opportunity</option>
                      <option value="collaboration">Project Collaboration</option>
                      <option value="job">Job Opportunity</option>
                      <option value="question">Technical Question</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-[#683B2B]/40 ml-1">Your Message *</label>
                    <textarea 
                      {...register('message')}
                      rows={5}
                      className={`w-full bg-[#FAF6F2] border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-[#DED1BD] transition-all text-[#683B2B] resize-none ${
                        errors.message ? 'ring-2 ring-red-300' : ''
                      }`}
                      placeholder="How can I help you today?"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#B08401] hover:bg-[#683B2B] text-[#FAF6F2] py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all duration-500 shadow-lg shadow-[#B08401]/20 hover:shadow-none hover:translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-[#FAF6F2]/30 border-t-[#FAF6F2] rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <>
                        <span>Initiate Contact</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 bg-[#683B2B] rounded-[2.5rem] p-8 md:p-12 text-[#FAF6F2]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-serif font-bold">
                24h
              </div>
              <div className="text-[#FAF6F2]/90">Response Time</div>
              <div className="text-sm text-[#FAF6F2]/70">Average</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-serif font-bold">
                100%
              </div>
              <div className="text-[#FAF6F2]/90">Remote Ready</div>
              <div className="text-sm text-[#FAF6F2]/70">Fully Equipped</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-serif font-bold">
                4
              </div>
              <div className="text-[#FAF6F2]/90">Languages</div>
              <div className="text-sm text-[#FAF6F2]/70">Communication</div>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-serif font-bold">
                ∞
              </div>
              <div className="text-[#FAF6F2]/90">Timezone</div>
              <div className="text-sm text-[#FAF6F2]/70">Flexible</div>
            </div>
          </div>
        </div>

        {/* Status Marquee */}
        <div className="mt-12 border-y border-[#DED1BD]/50 py-8 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-12 text-[#683B2B]/20 text-4xl font-serif italic">
                <span>Available July 2026</span>
                <Sparkles className="w-6 h-6" />
                <span>Remote Ready</span>
                <Sparkles className="w-6 h-6" />
                <span>Multilingual Support</span>
                <Sparkles className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
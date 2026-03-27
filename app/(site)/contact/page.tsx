

"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ChevronRight, 
  Clock,
  MessageSquare
} from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-[#fafbff] min-h-screen">
      <section className="pb-24 pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* --- HEADER --- */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-4">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">
                Get In Touch
              </h2>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Ready to <span className="text-blue-600">Collaborate?</span> <br />
                We're all ears.
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed">
                Have a question about our manpower services or need help planning an event? 
                Fill out the form below and our team will get back to you shortly.
              </p>
            </div>
            {/* NEW: Unsplash Image for Visual Context */}
            <div className="hidden lg:block relative h-64 rounded-[2rem] overflow-hidden shadow-2xl rotate-2">
              <Image 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800" 
                alt="Team Collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* --- LEFT SIDE: INFO --- */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="grid gap-6">
                <div className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-blue-100 transition-all">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email Us</h3>
                    <p className="text-slate-500 text-sm mb-1">Response within 24 hours</p>
                    <a href="mailto:contact@worekenza.com" className="text-blue-600 font-bold hover:underline">
sales@workenzasolution.com                      
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-white rounded-3xl shadow-sm border border-slate-100 hover:border-blue-100 transition-all">
                  <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Call Support</h3>
                    <p className="text-slate-500 text-sm mb-1">Direct line for urgent needs</p>
                    <a href="tel:+919876543210" className="text-indigo-600 font-bold hover:underline">
                      +91 9217650884| +919354938254
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust Box with Background Image */}
              <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
                {/* NEW: Subtle Background Image Overlay */}
                <div className="absolute inset-0 opacity-20">
                    <Image 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                        alt="Background Office"
                        fill
                        className="object-cover"
                    />
                </div>
                
                <div className="relative z-10 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-300 text-xs font-bold uppercase tracking-widest">
                    <Clock size={14} /> Global Operations
                  </div>
                  <h3 className="text-2xl font-bold">Why Contact Us?</h3>
                  <ul className="space-y-4">
                    {[
                      "Customized Staffing Solutions",
                      "End-to-End Event Management",
                      "Vetted & Verified Professionals",
                      "24/7 Dedicated Client Support"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                        <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* --- RIGHT SIDE: FORM --- */}
            <div className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-slate-50 relative overflow-hidden">
              {/* NEW: Small Decorative Image in corner */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                 <Image 
                    src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=200"
                    alt="Abstract Decor"
                    fill
                    className="object-cover"
                 />
              </div>

              <form className="space-y-7 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-7">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all outline-none"
                      placeholder="Akash Sharma"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Work Email</label>
                    <input 
                      type="email" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all outline-none"
                      placeholder="akash@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Service Required</label>
                  <div className="relative">
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all outline-none appearance-none">
                      <option>General Manpower Supply</option>
                      <option>Corporate Event Planning</option>
                      <option>Industrial Staffing</option>
                      <option>Career Opportunities</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <ChevronRight size={18} className="rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Your Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all"
                >
                  Send Inquiry <Send size={20} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

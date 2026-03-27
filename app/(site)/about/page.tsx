"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Users, 
  Target, 
  Award, 
  ShieldCheck, 
  Zap, 
  ArrowRight,
  Briefcase
} from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="bg-[#fafbff] min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest">
                <Zap size={14} /> Our Mission
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1]">
                Empowering Businesses through <span className="text-blue-600">Exceptional Talent.</span>
              </h1>
              <p className="text-slate-500 text-xl leading-relaxed max-w-xl">
                Workenza is a premier manpower and event management firm dedicated to bridging the gap between talent and opportunity. From industrial staffing to grand-scale corporate events, we handle the logistics so you can focus on growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
                  Our Services <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Hero Image Collage */}
            <div className="relative">
              <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/20">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team working together"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 hidden md:block">
                <p className="text-4xl font-black text-blue-600">10k+</p>
                <p className="text-slate-500 font-bold">Professionals Placed</p>
              </div>
            </div>
          </div>
        </div>
        {/* Abstract Background Shape */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -z-0 rounded-bl-[200px]" />
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Why Choose Workenza</h2>
            <h3 className="text-4xl font-black text-slate-900">Built on Trust, Driven by Excellence</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vetted Professionals",
                desc: "Every candidate in our network undergoes a rigorous screening process to ensure they meet the highest industry standards.",
                icon: <ShieldCheck size={32} />,
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "Scalable Solutions",
                desc: "Whether you need a single specialist or a workforce of hundreds, we scale our operations to match your requirements.",
                icon: <Users size={32} />,
                color: "bg-indigo-50 text-indigo-600"
              },
              {
                title: "Event Precision",
                desc: "Our event management team brings world-class logistics and creative flair to every corporate gathering or industrial expo.",
                icon: <Target size={32} />,
                color: "bg-purple-50 text-purple-600"
              }
            ].map((value, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${value.color}`}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TWO-COLUMN FEATURE --- */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000" 
                  alt="Corporate Event Management"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Overlay Decor */}
              <div className="absolute top-10 -right-10 w-40 h-40 bg-blue-600/10 blur-3xl rounded-full" />
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                Beyond Staffing: <br />
                We Build <span className="text-blue-600">Experiences.</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-600 text-white p-1 rounded-full"><Award size={16} /></div>
                  <div>
                    <h5 className="font-bold text-slate-900">Industrial & Corporate Staffing</h5>
                    <p className="text-slate-500">Providing skilled labor, admin staff, and executive talent for diverse sectors.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-600 text-white p-1 rounded-full"><Award size={16} /></div>
                  <div>
                    <h5 className="font-bold text-slate-900">Seamless Event Logistics</h5>
                    <p className="text-slate-500">From venue sourcing to on-site coordination, we handle the complex details of your events.</p>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <p className="text-slate-900 font-bold italic border-l-4 border-blue-600 pl-6 text-lg">
                  "Our goal is to be the invisible backbone of your success, ensuring your operations run smoothly and your events shine brightly."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white">Let's Build Your Future Workforce.</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Ready to elevate your business with the right people or plan your next major event? Our team is standing by.
              </p>
              <div className="flex justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 hover:scale-105 transition-all"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full blur-[100px]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
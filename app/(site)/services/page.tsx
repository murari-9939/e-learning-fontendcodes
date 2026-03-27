"use client";
import React from 'react';
import Image from 'next/image';
import { 
  Users, 
  Code, 
  Calculator, 
  Briefcase, 
  Mic2, 
  Monitor, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

export default function ServicesPage() {
  const manpowerServices = [
    {
      title: "IT & Tech Staffing",
      desc: "Specialized recruitment for Next.js, Django, and .NET ecosystems.",
      icon: <Code size={24} />,
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Finance & Accounting",
      desc: "Certified professionals for payroll, auditing, and tax management.",
      icon: <Calculator size={24} />,
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "General Manpower",
      desc: "Reliable staff for hospitality, logistics, and administrative roles.",
      icon: <Users size={24} />,
      img: "https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <main className="bg-[#fafbff] min-h-screen pb-24">
      {/* --- HEADER --- */}
      <section className="pt-24 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Expertise</h2>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
            Comprehensive Solutions for <span className="text-blue-600">Modern Growth.</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            From sourcing top-tier technical talent to executing flawless corporate events, 
            Workenza provides the infrastructure your business needs to excel.
          </p>
        </div>
      </section>

      {/* --- SERVICE PILLAR 1: MANPOWER --- */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-slate-200" />
          <h3 className="text-xl font-bold text-slate-400">Manpower Solutions</h3>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {manpowerServices.map((service, i) => (
            <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
              <div className="relative h-48">
                <Image src={service.img} alt={service.title} fill className="object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-4 left-6 p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 space-y-3">
                <h4 className="text-xl font-bold text-slate-900">{service.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                <div className="pt-4 flex items-center gap-2 text-blue-600 font-bold text-sm cursor-pointer">
                  Learn More <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SERVICE PILLAR 2: EVENTS (The Bento Grid) --- */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-slate-200" />
          <h3 className="text-xl font-bold text-slate-400">Event Management</h3>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="grid lg:grid-cols-4 lg:grid-rows-2 gap-6 h-auto lg:h-[600px]">
          {/* Main Large Card */}
          <div className="lg:col-span-2 lg:row-span-2 bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" 
              alt="Corporate Events"
              fill
              className="object-cover opacity-40 group-hover:scale-105 transition-all"
            />
            <div className="relative z-10 h-full flex flex-col justify-end space-y-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center"><Mic2 /></div>
              <h4 className="text-3xl font-black">End-to-End Event Planning</h4>
              <p className="text-slate-300">From concept to execution, we manage corporate seminars, product launches, and gala dinners.</p>
            </div>
          </div>

          {/* Top Right Card */}
          <div className="lg:col-span-2 bg-indigo-600 rounded-[3rem] p-10 text-white flex flex-col justify-between group">
            <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center"><Monitor /></div>
                <ArrowUpRight className="text-white/40 group-hover:text-white" />
            </div>
            <div>
              <h4 className="text-2xl font-bold">Exhibition Management</h4>
              <p className="text-indigo-100 mt-2">Professional on-ground teams and stall management for trade fairs.</p>
            </div>
          </div>

          {/* Bottom Middle Card */}
          <div className="lg:col-span-1 bg-white border border-slate-100 rounded-[3rem] p-8 group">
            <div className="space-y-4">
               <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white">
                 <ShieldCheck />
               </div>
               <h4 className="font-bold text-slate-900 leading-tight">Security & Staffing</h4>
               <p className="text-slate-500 text-xs">Vetted security and event hosts.</p>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="lg:col-span-1 bg-blue-50 border border-blue-100 rounded-[3rem] p-8 flex flex-col justify-center text-center space-y-2">
             <p className="text-3xl font-black text-blue-600">24/7</p>
             <p className="text-blue-900 font-bold text-xs uppercase tracking-widest">Support</p>
          </div>
        </div>
      </section>
    </main>
  );
}

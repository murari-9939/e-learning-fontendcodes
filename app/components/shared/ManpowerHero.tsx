

// "use client";   
// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Users, ArrowRight, Zap, Briefcase, Star, Globe, ShieldCheck, Sparkles } from 'lucide-react';

// const ManpowerHero = () => {
//   return (
//     <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#fafbff] pt-20 pb-16 lg:pt-32 lg:pb-32">
      
//       {/* --- EXTRA DIMENSION BACKGROUND --- */}
//       <div className="absolute inset-0 -z-10">
//         {/* Animated Gradient Blobs */}
//         <div className="absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[120px] animate-pulse" />
//         <div className="absolute bottom-[-5%] left-[-5%] h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[140px]" />
        
//         {/* Subtle Grid Pattern */}
//         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="grid lg:grid-cols-12 gap-16 items-center">
          
//           {/* --- CONTENT SIDE (LEFT) --- */}
//           <div className="lg:col-span-7 space-y-10 text-center lg:text-left order-2 lg:order-1">
//             <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white shadow-sm border border-blue-50 text-blue-600 text-sm font-bold tracking-tight">
//               <span className="relative flex h-3 w-3">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
//               </span>
//               WOREKENZA SOLUTIONS: REINVENTING LABOR
//             </div>
            
          
            
           

//             <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
//               <Link
//                 href="#hire"
//                 className="group relative inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg transition-all hover:bg-blue-700 shadow-[0_20px_50px_rgba(37,_99,_235,_0.3)] hover:-translate-y-1 overflow-hidden"
//               >
//                 <span className="relative z-10 flex items-center">
//                   Partner With Us <Briefcase className="ml-3 group-hover:scale-110 transition-transform" size={22} />
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
//               </Link>
              
//               <Link
//                 href="#jobs"
//                 className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-white text-slate-900 font-bold text-lg border border-slate-200 hover:border-blue-600 hover:bg-blue-50/30 transition-all hover:-translate-y-1"
//               >
//                 Join the Network <ArrowRight className="ml-2" size={20} />
//               </Link>
//             </div>

//             {/* Micro-Trust Signals */}
//             <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-8 opacity-70">
//               <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
//                 <ShieldCheck className="text-blue-500" size={18} /> Fully Verified Staff
//               </div>
//               <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
//                 <Sparkles className="text-blue-500" size={18} /> AI-Powered Matching
//               </div>
//             </div>
//           </div>

//           {/* --- VISUAL SIDE (RIGHT) --- */}
//           <div className="lg:col-span-5 relative order-1 lg:order-2">
//             <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square">
              
//               {/* Main Image with Modern "Floating" Frame */}
//               <div className="absolute top-0 right-0 w-[90%] h-[90%] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white z-10">
//                 <Image
//                   src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop" 
//                   alt="Professional Team"
//                   fill
//                   className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
//                   priority
//                 />
//               </div>

//               {/* Secondary Branding Image - Positioned as a "Stamp" */}
            

//               {/* Glassmorphism Floating Stats Card */}
//               <div className="absolute top-1/2 -right-8 z-40 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50 hidden md:block animate-float">
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-blue-100 rounded-2xl text-blue-600">
//                       <Star size={24} fill="currentColor" />
//                     </div>
//                     <div>
//                       <p className="text-2xl font-black text-slate-900">4.9/5</p>
//                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client Rating</p>
//                     </div>
//                   </div>
//                   <div className="h-px bg-slate-200 w-full" />
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-indigo-100 rounded-2xl text-indigo-600">
//                       <Globe size={24} />
//                     </div>
//                     <div>
//                       <p className="text-2xl font-black text-slate-900">24/7</p>
//                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Support</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Decorative Geometric Elements */}
//               <div className="absolute -top-10 -left-10 h-32 w-32 bg-blue-500/10 rounded-full blur-3xl" />
//             </div>
//           </div>
          
//         </div>
//       </div>

//       {/* Tailwind Custom Animation Injection */}
//       <style jsx global>{`
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//           100% { transform: translateY(0px); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ManpowerHero;
"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Users, ArrowRight, Briefcase, Star, Globe, ShieldCheck, Sparkles } from 'lucide-react';

const ManpowerHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#fafbff] pt-20 pb-16 lg:pt-32 lg:pb-32">
      
      {/* --- EXTRA DIMENSION BACKGROUND --- */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-5%] left-[-5%] h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* --- CONTENT SIDE (LEFT) --- */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left order-2 lg:order-1">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white shadow-sm border border-blue-50 text-blue-600 text-sm font-bold tracking-tight">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
              </span>
              WOREKENZA SOLUTIONS: REINVENTING LABOR
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Right People. <br />
              <span className="text-blue-600">Perfect Execution.</span>
            </h1>
            
            {/* Description */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl text-slate-600 leading-relaxed">
              Worekenza Solution bridges the gap between top-tier talent and industry-leading businesses. 
              From skilled manpower supply to grand-scale event management, we make it happen.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">
              <Link
                href="#hire"
                className="group relative inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg transition-all hover:bg-blue-700 shadow-[0_20px_50px_rgba(37,_99,_235,_0.3)] hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Partner With Us <Briefcase className="ml-3 group-hover:scale-110 transition-transform" size={22} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
              
              <Link
                href="#jobs"
                className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-white text-slate-900 font-bold text-lg border border-slate-200 hover:border-blue-600 hover:bg-blue-50/30 transition-all hover:-translate-y-1"
              >
                Join the Network <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>

            {/* Micro-Trust Signals */}
            <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-8 opacity-70">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <ShieldCheck className="text-blue-500" size={18} /> Fully Verified Staff
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <Sparkles className="text-blue-500" size={18} /> AI-Powered Matching
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
              <div>
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Staff Placed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">120+</p>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Events Hosted</p>
              </div>
              <div className="hidden sm:block">
                <p className="text-2xl font-bold text-slate-900">98%</p>
                <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Client Retention</p>
              </div>
            </div>
          </div>

          {/* --- VISUAL SIDE (RIGHT) --- */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square">
              
              {/* Main Image */}
              <div className="absolute top-0 right-0 w-[90%] h-[90%] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white z-10">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop" 
                  alt="Professional Team"
                  fill
                  className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Glassmorphism Floating Stats Card */}
              <div className="absolute top-1/2 -right-8 z-40 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50 hidden md:block animate-float">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-2xl text-blue-600">
                      <Star size={24} fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-slate-900">4.9/5</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Client Rating</p>
                    </div>
                  </div>
                  <div className="h-px bg-slate-200 w-full" />
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-100 rounded-2xl text-indigo-600">
                      <Globe size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-slate-900">24/7</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 h-32 w-32 bg-blue-500/10 rounded-full blur-3xl" />
            </div>
          </div>
          
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ManpowerHero;
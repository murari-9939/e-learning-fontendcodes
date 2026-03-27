// "use client";

// import ManpowerNavbar from "./components/shared/ManpowerNavbar";
// import Image from "next/image";
// import { CheckCircle, ArrowRight } from "lucide-react";

// export default function ManpowerPage() {
//   return (
//     <>
//       <ManpowerNavbar />
      
//       {/* --- HERO SECTION --- */}
//       <section className="relative overflow-hidden bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
//         {/* Background Decorative Element - Matching your logo's "orbit" feel */}
//         <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
//         <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-72 h-72 bg-orange-50 rounded-full blur-3xl opacity-50" />

//         <div className="container mx-auto px-6 relative z-10">
//           <div className="flex flex-col lg:flex-row items-center gap-12">
            
//             {/* Text Content */}
//             <div className="lg:w-1/2 text-center lg:text-left">
//               <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
//                 Professional Staffing Solutions
//               </span>
//               <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
//                 Build Your Future with <span className="text-blue-600">Workenza</span> <span className="text-[#f37021]">Solution</span>
//               </h1>
//               <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
//                 From specialized **IT Developers** to expert **Accountants** and **Event Staff**, we provide the human capital that drives your business growth.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//                 <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-blue-100 transition-all transform hover:-translate-y-1">
//                   Hire Top Talent <ArrowRight size={20} />
//                 </button>
//                 <button className="flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all">
//                   Browse Jobs
//                 </button>
//               </div>

//               {/* Trust Indicators */}
//               <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500 font-medium">
//                 <div className="flex items-center gap-2">
//                   <CheckCircle size={18} className="text-green-500" /> Vetted Candidates
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <CheckCircle size={18} className="text-green-500" /> Quick Turnaround
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <CheckCircle size={18} className="text-green-500" /> 24/7 Support
//                 </div>
//               </div>
//             </div>

//             {/* Visual Content / Image */}
//             <div className="lg:w-1/2 relative">
//               <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
//                 <Image 
//                   src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80" 
//                   alt="Team Collaboration" 
//                   width={800} 
//                   height={600}
//                   className="object-cover"
//                 />
//               </div>
//               {/* Floating Badge */}
//               <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-[#f37021] font-bold text-xl">
//                     W
//                   </div>
//                   <div>
//                     <p className="text-2xl font-bold text-gray-900">500+</p>
//                     <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Placements Made</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* --- QUICK SERVICES GRID --- */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <ServiceCard 
//               title="IT & Tech Staffing" 
//               desc="Next.js, Django, and .NET experts ready to scale your product." 
//               color="border-blue-500"
//             />
//             <ServiceCard 
//               title="Accounting Experts" 
//               desc="Professional accountants for bookkeeping, tax, and auditing." 
//               color="border-orange-500"
//             />
//             <ServiceCard 
//               title="Event Management" 
//               desc="Reliable on-ground staff for your corporate events and expos." 
//               color="border-blue-900"
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// // Sub-component for Services
// function ServiceCard({ title, desc, color }: { title: string; desc: string; color: string }) {
//   return (
//     <div className={`bg-white p-8 rounded-2xl shadow-sm border-t-4 ${color} hover:shadow-lg transition-all`}>
//       <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
//       <p className="text-gray-600 mb-6">{desc}</p>
//     </div>
//   );
// }

import React from 'react'
import ManpowerNavbar from './components/shared/ManpowerNavbar'
import ManpowerFooter from './components/shared/ManpowerFooter'
import ManpowerHero from './components/shared/ManpowerHero'
import TeamPage from './components/shared/TeamPage'

const page = () => {
  return (
    <div>
       <ManpowerNavbar />
       <ManpowerHero/>
       <TeamPage /> 
<ManpowerFooter />
    </div>
  )
}

export default page

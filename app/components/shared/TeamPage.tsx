// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { Linkedin, Mail, Twitter, Github } from 'lucide-react';

// const teamMembers = [
//   {
//     name: "Akash Sharma",
//     role: "Founder & CEO",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
//     bio: "Visionary leader with a passion for bridging the gap between talent and industry.",
//     linkedin: "#",
//     email: "akash@worekenza.com",
//   },
//   {
//     name: "Sarah Jenkins",
//     role: "Operations Director",
//     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
//     bio: "Expert in logistical execution and large-scale event manpower management.",
//     linkedin: "#",
//     email: "sarah@worekenza.com",
//   },
//   {
//     name: "David Chen",
//     role: "Head of Recruitment",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
//     bio: "Dedicated to finding the 'right fit' through AI-driven matching and human insight.",
//     linkedin: "#",
//     email: "david@worekenza.com",
//   },
//   {
//     name: "Priya Verma",
//     role: "Event Strategy Lead",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
//     bio: "Crafting memorable experiences through precision planning and creative flair.",
//     linkedin: "#",
//     email: "priya@worekenza.com",
//   },
// ];

// const TeamPage = () => {
//   return (
//     <section className="bg-[#fafbff] py-24">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
//         {/* --- HEADER --- */}
//         <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
//           <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm">
//             The Minds Behind Worekenza
//           </h2>
//           <h1 className="text-4xl md:text-5xl font-black text-slate-900">
//             Meet Our <span className="text-blue-600">Expert Team</span>
//           </h1>
//           <p className="text-slate-600 text-lg">
//             We are a diverse group of recruiters, event planners, and strategists 
//             united by a single mission: Delivering excellence through people.
//           </p>
//         </div>

//         {/* --- TEAM GRID --- */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {teamMembers.map((member, index) => (
//             <div 
//               key={index} 
//               className="group relative bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2"
//             >
//               {/* Image Container */}
//               <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-6">
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   fill
//                   className="object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
                
//                 {/* Overlay Socials */}
//                 <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
//                   <a href={member.linkedin} className="p-3 bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
//                     <Linkedin size={20} />
//                   </a>
//                   <a href={`mailto:${member.email}`} className="p-3 bg-white text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
//                     <Mail size={20} />
//                   </a>
//                 </div>
//               </div>

//               {/* Info */}
//               <div className="px-2 text-center pb-4">
//                 <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
//                   {member.name}
//                 </h3>
//                 <p className="text-blue-500 font-semibold text-sm mb-3">
//                   {member.role}
//                 </p>
//                 <p className="text-slate-500 text-sm leading-relaxed">
//                   {member.bio}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* --- JOIN THE TEAM CTA --- */}
//         <div className="mt-20 p-10 rounded-[3rem] bg-slate-900 text-center text-white relative overflow-hidden">
//             <div className="relative z-10">
//                 <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to be part of our journey?</h3>
//                 <p className="text-slate-400 mb-8 max-w-xl mx-auto">We're always looking for talented individuals to join our growing network of professionals.</p>
//                 <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all">
//                     View Open Positions
//                 </button>
//             </div>
//             {/* Decorative Background Glow */}
//             <div className="absolute top-0 right-0 h-64 w-64 bg-blue-600/20 blur-[100px] -mr-32 -mt-32" />
//             <div className="absolute bottom-0 left-0 h-64 w-64 bg-indigo-600/20 blur-[100px] -ml-32 -mb-32" />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default TeamPage;
"use client";
import React from 'react';
import Image from 'next/image';
import { Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';

const teamMembers = [
  {
    name: "Akash Sharma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    bio: "Driving the vision of Worekenza with over a decade of experience in manpower solutions.",
    linkedin: "#",
    email: "akash@worekenza.com",
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    bio: "Ensuring seamless execution for every event, from corporate galas to industrial staffing.",
    linkedin: "#",
    email: "sarah@worekenza.com",
  },
  {
    name: "David Chen",
    role: "Head of Recruitment",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    bio: "Specializing in identifying top-tier talent using our proprietary AI-matching systems.",
    linkedin: "#",
    email: "david@worekenza.com",
  },
  {
    name: "Priya Verma",
    role: "Event Strategy Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    bio: "Turning client concepts into high-impact reality through precision planning.",
    linkedin: "#",
    email: "priya@worekenza.com",
  },
];

const TeamPage = () => {
  return (
    <section className="bg-[#f8faff] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            The Core Team
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Meet the <span className="text-blue-600">Experts</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            A dedicated group of professionals working together to redefine 
            manpower and event management standards.
          </p>
        </div>

        {/* --- TEAM GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center transition-all duration-300"
            >
              {/* Rounded Image Container */}
              <div className="relative mb-8">
                {/* Outer Decorative Ring */}
                <div className="absolute -inset-3 rounded-full border-2 border-dashed border-blue-200 group-hover:border-blue-500 group-hover:rotate-45 transition-all duration-700" />
                
                {/* Main Image Wrapper */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-white shadow-xl z-10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Social Overlay on Hover */}
                  <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 z-20">
                    <a href={member.linkedin} className="text-white hover:scale-125 transition-transform">
                      <Linkedin size={22} />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-white hover:scale-125 transition-transform">
                      <Mail size={22} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-2 relative z-10">
                <h3 className="text-2xl font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-bold text-sm uppercase tracking-wide">
                  {member.role}
                </p>
                <p className="text-slate-500 text-sm max-w-[250px] mx-auto leading-relaxed pt-2">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- JOIN CTA --- */}
        <div className="mt-32 relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-1 group-hover:rotate-0 transition-transform duration-500 opacity-10" />
            <div className="relative bg-white border border-slate-100 p-12 rounded-[3rem] shadow-xl text-center flex flex-col items-center">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl mb-6">
                    <ExternalLink size={32} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">Ready to join Worekenza?</h2>
                <p className="text-slate-500 max-w-lg mb-8">
                    We’re always looking for ambitious individuals to help us grow our 
                    network across the globe.
                </p>
                <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all">
                    Explore Opportunities
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
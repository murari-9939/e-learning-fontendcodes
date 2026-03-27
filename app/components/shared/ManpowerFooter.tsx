// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';


// const ManpowerFooter = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
//           {/* Column 1: Brand & About */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-2">
//               <div className="relative w-10 h-10 overflow-hidden rounded bg-white p-1">
//                 <Image 
//                   src="/images/IMG-20260326-WA0015.jpg" 
//                   alt="Worekenza Logo" 
//                   width={40}
//                   height={40}
//                   className="object-contain"
//                 />
//               </div>
//               <span className="text-xl font-bold tracking-tight text-white">
//                 WOREKENZA
//               </span>
//             </div>
//             <p className="text-sm leading-relaxed text-slate-400">
//               Connecting premium talent with world-class opportunities. Specializing in specialized manpower supply and seamless event management solutions.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
//               <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
//               <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
//             </div>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div>
//             <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Services</h3>
//             <ul className="space-y-4 text-sm">
//               <li><Link href="#hire" className="hover:text-white transition-colors">Temporary Staffing</Link></li>
//               <li><Link href="#hire" className="hover:text-white transition-colors">Corporate Events</Link></li>
//               <li><Link href="#hire" className="hover:text-white transition-colors">Payroll Management</Link></li>
//               <li><Link href="#hire" className="hover:text-white transition-colors">Security Services</Link></li>
//             </ul>
//           </div>

//           {/* Column 3: For Candidates */}
//           <div>
//             <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Job Seekers</h3>
//             <ul className="space-y-4 text-sm">
//               <li><Link href="#jobs" className="hover:text-white transition-colors">Browse Jobs</Link></li>
//               <li><Link href="#jobs" className="hover:text-white transition-colors">Submit Resume</Link></li>
//               <li><Link href="#jobs" className="hover:text-white transition-colors">Career Advice</Link></li>
//               <li><Link href="#jobs" className="hover:text-white transition-colors">Employee Portal</Link></li>
//             </ul>
//           </div>

//           {/* Column 4: Contact Info */}
//           <div>
//             <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Get In Touch</h3>
//             <ul className="space-y-4 text-sm">
//               <li className="flex items-start gap-3">
//                 <MapPin size={18} className="text-blue-500 shrink-0" />
//                 {/* <span>123 Business Hub, Sector 44,<br/>New Delhi, India</span> */}

// <span>
//   Surajpur, Greater Noida <br />
//   Noida, India
// </span>


//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone size={18} className="text-blue-500 shrink-0" />
                      

//                 <span>+91 9217650884| +919354938254</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail size={18} className="text-blue-500 shrink-0" />
//                 <span>sales@workenzasolution.com  </span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-xs text-slate-500">
//             © {currentYear} Worekenza Solution. All rights reserved.
//           </p>
//           <div className="flex space-x-6 text-xs text-slate-500">
//             <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
//             <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
//             <Link href="/cookies" className="hover:text-slate-300">Cookie Policy</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default ManpowerFooter;



import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';


const ManpowerFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 overflow-hidden rounded bg-white p-1">
                <Image 
                  src="/images/IMG-20260326-WA0015.jpg" 
                  alt="Worekenza Logo" 
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                WOREKENZA
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Connecting premium talent with world-class opportunities. Specializing in specialized manpower supply and seamless event management solutions.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a> */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          {/* <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="#hire" className="hover:text-white transition-colors">Temporary Staffing</Link></li>
              <li><Link href="#hire" className="hover:text-white transition-colors">Corporate Events</Link></li>
              <li><Link href="#hire" className="hover:text-white transition-colors">Payroll Management</Link></li>
              <li><Link href="#hire" className="hover:text-white transition-colors">Security Services</Link></li>
            </ul>
          </div> */}

          {/* Column 3: For Candidates */}
          {/* <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Job Seekers</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="#jobs" className="hover:text-white transition-colors">Browse Jobs</Link></li>
              <li><Link href="#jobs" className="hover:text-white transition-colors">Submit Resume</Link></li>
              <li><Link href="#jobs" className="hover:text-white transition-colors">Career Advice</Link></li>
              <li><Link href="#jobs" className="hover:text-white transition-colors">Employee Portal</Link></li>
            </ul>
          </div> */}

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 shrink-0" />
                {/* <span>123 Business Hub, Sector 44,<br/>New Delhi, India</span> */}

<span>
  Surajpur, Greater Noida <br />
  Noida, India
</span>


              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-500 shrink-0" />
                      

                <span>+91 9217650884| +919354938254</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>sales@workenzasolution.com  </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} Worekenza Solution. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-slate-300">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ManpowerFooter;

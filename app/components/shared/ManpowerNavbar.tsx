// "use client";   
// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Menu, X, Users, Briefcase, PhoneCall } from 'lucide-react';

// const ManpowerNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinksk = [
//     { name: 'Home', href: '/' },
//     { name: 'Services', href: '#services' },
//     { name: 'Find Talent', href: '#hire' },
//     { name: 'Find Work', href: '#jobs' },
//     { name: 'About Us', href: '/about' }
//   ];
// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'Services', href: '/services' },
//   { name: 'Find Talent', href: '/#hire' },
//   { name: 'Find Work', href: '/jobs' },
//   { name: 'About Us', href: '/about' }
// ];

//   return (
//     <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
          
// {/* Logo Section */}
// <div className="flex-shrink-0 flex items-center gap-2">
//   <div className="relative w-12 h-12 overflow-hidden rounded-lg">
//     <Image 
//       src="/images/IMG-20260326-WA0015.jpg" 
//       alt="Worekenza Logo" 
//       fill
//       className="object-cover"
//     />
//   </div>
//   <div className="flex flex-col leading-tight">
//     <span className="text-xl font-bold tracking-tight text-slate-800">
//       WOREKENZA<span className="text-blue-600">.</span>
//     </span>
//     <span className="text-sm font-medium text-gray-500">
//       Manpower Solutions<span className="text-blue-600">.</span>
//     </span>
//   </div>
// </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link 
//                 key={link.name} 
//                 href={link.href}
//                 className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <Link
//   href="/contact"
//   className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
// >
//   Contact Now
// </Link>

          
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-slate-600 hover:text-blue-600 focus:outline-none"
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
//           <div className="px-4 pt-4 pb-6 space-y-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-md"
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <div className="pt-4">
//               <Link
//                 href="/contact"
//                 className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-sm"
//               >
//                 <PhoneCall size={18} className="mr-2" /> Get Started
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default ManpowerNavbar;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, PhoneCall } from "lucide-react";
import { usePathname } from "next/navigation";

const ManpowerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    // { name: "Find Talent", href: "/#hire" },
    { name: "Career", href: "/jobs" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-12 h-12 overflow-hidden rounded-lg">
              <Image
                src="/images/IMG-20260326-WA0015.jpg"
                alt="Worekenza Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-slate-800">
                WOREKENZA<span className="text-blue-600">.</span>
              </span>
              <span className="text-sm text-gray-500">
                Manpower Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Contact Button */}
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-md"
            >
              Contact Now
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base text-slate-700 hover:bg-blue-50 rounded-md"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 text-white font-bold rounded-lg"
            >
              <PhoneCall size={18} className="mr-2" />
              Contact Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ManpowerNavbar;

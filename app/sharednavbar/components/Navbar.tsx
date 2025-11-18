// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="bg-white dark:bg-gray-900 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo / Brand */}
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-bold text-blue-600">E-learning</h1>
//           </div>

//           {/* Menu links */}
//           <div className="hidden md:flex space-x-8">
//             <a
//               href="#home"
//               className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
//             >
//               Home
//             </a>
//             <a
//               href="#courses"
//               className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
//             >
//               Courses
//             </a>
//             <a
//               href="#about"
//               className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
//             >
//               About
//             </a>
//             <a
//               href="#contact"
//               className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
//             >
//               Contact
//             </a>
//           </div>

//           {/* Action buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//               Login
//             </button>
//             <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition">
//               Sign Up
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               type="button"
//               className="text-gray-700 dark:text-gray-200 focus:outline-none"
//             >
//               {/* Hamburger Icon */}
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// "use client";
// import { Link } from "lucide-react";
// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white dark:bg-gray-900 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo / Brand */}
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-bold text-blue-600">E-learning</h1>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
//               Home
//             </a>
//             <a href="#courses" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
//               Courses
//             </a>
//             <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
//               About
//             </a>
//             <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">
//               Contact
//             </a>
//           </div>

//           {/* Desktop Action Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//                 <a href="/login" className="hover:text-blue-600">
//                  Login
//               </a>
            
//             {/* <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition">
//               Sign Up
//             </button> */}
//              <a href="/register" className="hover:text-blue-600">
//                  Sign Up
//               </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               type="button"
//               className="text-gray-700 dark:text-gray-200 focus:outline-none"
//               onClick={toggleMenu}
//             >
//               {/* Hamburger Icon */}
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden mt-2 space-y-2 px-2 pb-4">
//             <a
//               href="#home"
//               className="block text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded"
//             >
//               Home
//             </a>
//             <a
//               href="#courses"
//               className="block text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded"
//             >
//               Courses
//             </a>
//             <a
//               href="#about"
//               className="block text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded"
//             >
//               About
//             </a>
//             <a
//               href="#contact"
//               className="block text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded"
//             >
//               Contact
//             </a>

//             {/* Mobile Action Buttons */}
//             <div className="flex flex-col gap-2 mt-2">
//               <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
//                 Login
//               </button>
//               <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition">
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { ShoppingCart } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="bg-white dark:bg-gray-900 shadow-md w-full">
//       {/* REMOVED max-w, mx-auto, all px that caused spacing */}
//       <div className="w-full">
//         <div className="flex justify-between h-16 items-center px-4 py-4">
          
//           {/* Logo / Brand */}
//           <div className="flex items-center gap-4">

//             <Link href="/" className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold">
//                 EL
//               </div>
//               {/* <div className="hidden sm:block"> */}
//                  <div className="block">
//                 <div className="font-semibold text-gray-900">E-Learnify</div>
//                 <div className="text-xs text-gray-500">Learn. Grow. Succeed.</div>
//               </div>
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             <a href="#home" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Home</a>
//             <a href="#courses" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Courses</a>
//             <a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">About</a>
//             <a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Contact</a>
//           </div>

//           {/* Desktop Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <a href="/login" className="hover:text-blue-600">Login</a>
//             <a href="/register" className="hover:text-blue-600">Sign Up</a>
//              <Link
//     href="/cart"
//     className="relative px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center"
//   >
//     <ShoppingCart className="w-5 h-5 mr-1" />
//     Cart
//     {/* Optional badge */}
//     <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
//       3
//     </span>
//   </Link>
//           </div>


//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-200">
//               <svg className="h-6 w-6" fill="none" stroke="currentColor"
//                 viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={
//                     isOpen
//                       ? "M6 18L18 6M6 6l12 12"
//                       : "M4 6h16M4 12h16M4 18h16"
//                   }
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden mt-2 space-y-2 px-4 pb-4">
//             <a href="#home" className="block hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded">Home</a>
//             <a href="#courses" className="block hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded">Courses</a>
//             <a href="#about" className="block hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded">About</a>
//             <a href="#contact" className="block hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-2 rounded">Contact</a>

//             <div className="flex flex-col gap-2 mt-2">
//               <a href="/login" className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700">Login</a>
//               <a href="/register" className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-center hover:bg-blue-50">Sign Up</a>

    
//             </div>
   
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu, X, Bell, Search, LogOut, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <>
      {/* Header */}
      <header className="shadow-sm bg-white/70 border-b border-gray-200 w-full z-50 relative">
        <div className="w-full px-3 py-3">
          <div className="flex justify-between h-16 items-center">
            {/* Left: Logo + Hamburger */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)} // Open drawer
                className="-ml-2 p-2 rounded-md text-gray-600 hover:bg-gray-100 md:hidden"
              >
                <Menu className="w-5 h-5" />
              </button>

              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold">
                  EL
                </div>
                <div className="block">
                  <div className="font-semibold text-gray-900">E-Learnify</div>
                  <div className="text-xs text-gray-500">Learn. Grow. Succeed.</div>
                </div>
              </Link>
            </div>

            {/* Desktop Links */}
            <nav className="hidden md:flex md:items-center md:space-x-4">
              <Link href="/courses" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">Courses</Link>
              <Link href="/register" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">Sign Up</Link>
              <Link href="/instructors" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">Instructors</Link>
              <Link href="/pricing" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">Pricing</Link>
              <Link href="/support" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">Support</Link>
            </nav>

            {/* Right: Search + Cart + User */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="hidden md:flex items-center bg-gray-100 rounded-md px-2 py-1 gap-2">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search courses, instructors..."
                  className="bg-transparent outline-none text-sm min-w-[200px]"
                />
                <Button size="sm" onClick={() => console.log("Search:", query)}>Search</Button>
              </div>

              {/* Cart */}
              <Link
                href="/cart"
                className="relative px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center"
              >
                <ShoppingCart className="w-5 h-5 mr-1" />
                Cart
                <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">3</span>
              </Link>
               {/* <a href="/login" className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700">Sign Up</a> */}


    
              <Link href="/login" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">Login</Link>
              

              {/* User Menu */}
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 p-1 rounded-md hover:bg-gray-100">
                    <Avatar className="w-8 h-8">
                      <div className="rounded-full bg-blue-600 w-8 h-8 flex items-center justify-center text-white">M</div>
                    </Avatar>
                    <span className="hidden md:inline-block text-sm text-gray-700">Murari</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/MyAccount/MyProfileForStudent">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/my-learning">My Learning</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex items-center gap-2"><LogOut className="w-4 h-4"/> Logout</div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full flex z-[1000] pointer-events-none`}
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible"}`}
          onClick={() => setMobileOpen(false)}
        ></div>

        {/* Drawer panel */}
        <div
          className={`relative bg-white w-72 h-full shadow-xl p-4 transform transition-transform duration-300 ${mobileOpen ? "translate-x-0 pointer-events-auto" : "-translate-x-full"}`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={() => setMobileOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-2">
            <Link href="/courses" className="block px-3 py-2 rounded-md hover:bg-gray-100">Courses</Link>
              <Link href="/register" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">Sign Up</Link>

            {/* <Link href="/my-learning" className="block px-3 py-2 rounded-md hover:bg-gray-100">My Learning</Link> */}
            <Link href="/instructors" className="block px-3 py-2 rounded-md hover:bg-gray-100">Instructors</Link>
            <Link href="/pricing" className="block px-3 py-2 rounded-md hover:bg-gray-100">Pricing</Link>
            <Link href="/support" className="block px-3 py-2 rounded-md hover:bg-gray-100">Support</Link>
            {/* <Link href="/cart" className="block px-3 py-2 rounded-md hover:bg-gray-100 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" /> Cart
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}


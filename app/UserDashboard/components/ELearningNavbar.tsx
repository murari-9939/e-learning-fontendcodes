// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Avatar } from "@/components/ui/avatar";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";
// import { Menu, X,Bell, Search, User, LogOut } from "lucide-react";

// // E-Learning Navbar component
// // - TailwindCSS + shadcn/ui
// // - Responsive (desktop / mobile)
// // - Search input, notifications, user menu
// // - Default export as React component

// export default function ELearningNavbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [query, setQuery] = useState("");

//   return (
//     <header className="bg-white border-b">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Left: Logo + Brand */}
//           <div className="flex items-center gap-4">
//             <button
//               aria-label="Open menu"
//               onClick={() => setMobileOpen((s) => !s)}
//               className="-ml-2 p-2 rounded-md text-gray-600 hover:bg-gray-100 md:hidden"
//             >
//               <Menu className="w-5 h-5" />
//             </button>

//             <Link href="/" className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold">EL</div>
//               <div className="hidden sm:block">
//                 <div className="font-semibold text-gray-900">E-Learnify</div>
//                 <div className="text-xs text-gray-500">Learn. Grow. Succeed.</div>
//               </div>
//             </Link>
//           </div>

//           {/* Center: nav links (desktop) */}
//           <nav className="hidden md:flex md:items-center md:space-x-4">
//             <Link href="/courses" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
//               Courses
//             </Link>
//             <Link href="/my-learning" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
//               My Learning
//             </Link>
//             <Link href="/instructors" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
//               Instructors
//             </Link>
//             <Link href="/pricing" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
//               Pricing
//             </Link>
//             <Link href="/support" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
//               Support
//             </Link>
//           </nav>

//           {/* Right: Search + actions */}
//           <div className="flex items-center gap-3">
//             {/* Search */}
//             <div className="hidden md:flex items-center bg-gray-100 rounded-md px-2 py-1 gap-2">
//               <Search className="w-4 h-4 text-gray-500" />
//               <input
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Search courses, instructors..."
//                 className="bg-transparent outline-none text-sm min-w-[200px]"
//               />
//               <Button size="sm" onClick={() => console.log("Search:", query)}>
//                 Search
//               </Button>
//             </div>

//             {/* Notifications */}
//             <button className="hidden md:inline-flex p-2 rounded-md text-gray-600 hover:bg-gray-100">
//               <Bell className="w-5 h-5" />
//             </button>

//             {/* User menu */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <button className="flex items-center gap-2 p-1 rounded-md hover:bg-gray-100">
//                   <Avatar className="w-8 h-8">
//                     <div className="rounded-full bg-blue-600 w-8 h-8 flex items-center justify-center text-white">M</div>
//                   </Avatar>
//                   <span className="hidden md:inline-block text-sm text-gray-700">Murari</span>
//                 </button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-48">
//                 <DropdownMenuItem asChild>
//                   <Link href="/profile">Profile</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link href="/settings">Settings</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link href="/my-learning">My Learning</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <div className="flex items-center gap-2"><LogOut className="w-4 h-4"/> Logout</div>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu panel */}
//       <div className={`md:hidden bg-white border-t ${mobileOpen ? "block" : "hidden"}`}>
//         <div className="px-4 pt-4 pb-6 space-y-2">
//           <Link href="/courses" className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100">Courses</Link>
//           <Link href="/my-learning" className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100">My Learning</Link>
//           <Link href="/instructors" className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100">Instructors</Link>
//           <Link href="/pricing" className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100">Pricing</Link>
//           <Link href="/support" className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100">Support</Link>

//           <div className="pt-3 border-t">
//             <div className="flex items-center gap-3">
//               <Avatar className="w-8 h-8">
//                 <div className="rounded-full bg-blue-600 w-8 h-8 flex items-center justify-center text-white">M</div>
//               </Avatar>
//               <div>
//                 <div className="text-sm font-medium">Murari</div>
//                 <div className="text-xs text-gray-500">murari@example.com</div>
//               </div>
//             </div>
//             <div className="mt-4 space-y-2">
//               <Link href="/profile" className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100">Profile</Link>
//               <Link href="/settings" className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-gray-100">Settings</Link>
//               <Link href="/logout" className="block px-3 py-2 rounded-md text-base text-red-600 hover:bg-red-50">Logout</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

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
import { Menu, X,Bell, Search, User,  LogOut, ShoppingCart } from "lucide-react";

// E-Learning Navbar component
// - TailwindCSS + shadcn/ui
// - Responsive (desktop / mobile)
// - Search input, notifications, user menu
// - Default export as React component

export default function ELearningNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    // <header className="bg-white border-b">
      // <header className="shadow-sm bg-white/70 border-b border-gray-200" >

      //  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
<header className="shadow-sm bg-white/70 border-b border-gray-200 w-full">
  <div className="w-full px-3 py-3">

        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo + Brand */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen((s) => !s)}
              className="-ml-2 p-2 rounded-md text-gray-600 hover:bg-gray-100 md:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>

            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold">EL</div>
              {/* <div className="hidden sm:block"> */}
              <div className="block">
                <div className="font-semibold text-gray-900">E-Learnify</div>
                <div className="text-xs text-gray-500">Learn. Grow. Succeed.</div>
              </div>
            </Link>
          </div>

          {/* Center: nav links (desktop) */}
          <nav className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/courses" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              Courses
            </Link>
            <Link href="/my-learning" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              My Learning
            </Link>
            <Link href="/instructors" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              Instructors
            </Link>
            <Link href="/MyAccount/MyProfileForStudent" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              Pricing
            </Link>
            <Link href="/support" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
              Support
            </Link>
          </nav>

          {/* Right: Search + actions */}
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
              <Button size="sm" onClick={() => console.log("Search:", query)}>
                Search
              </Button>
            </div>

 <Link
    href="/cart"
    className="relative px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 flex items-center"
  >
    <ShoppingCart className="w-5 h-5 mr-1" />
    Cart
    {/* Optional badge */}
    <span className="absolute top-0 right-0 -mt-1 -mr-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
      3
    </span>
  </Link>

            {/* Notifications */}
            <button className="hidden md:inline-flex p-2 rounded-md text-gray-600 hover:bg-gray-100">
              <Bell className="w-5 h-5" />
            </button>

            {/* User menu */}
            <DropdownMenu>
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
            </DropdownMenu>
          </div>
        </div>
      </div>


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
               <Link href="/my-learning" className="block px-3 py-2 rounded-md hover:bg-gray-100">
              My Learning
            </Link>

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
     
    </header>
  );
}
// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Home, BookOpen, BarChart2, Settings, User } from "lucide-react";
// import { Avatar } from "@/components/ui/avatar";

// interface NavItem {
//   label: string;
//   href: string;
//   icon: React.ReactNode;
// }

// const navItems: NavItem[] = [
//   { label: "Dashboard", href: "/UserDashboard", icon: <Home className="w-5 h-5" /> },
//   { label: "My Courses", href: "/UserDashboard/courses", icon: <BookOpen className="w-5 h-5" /> },
//   { label: "Progress", href: "/UserDashboard/progress", icon: <BarChart2 className="w-5 h-5" /> },
//   { label: "Profile", href: "/UserDashboard/profile", icon: <User className="w-5 h-5" /> },
//   { label: "Settings", href: "/UserDashboard/settings", icon: <Settings className="w-5 h-5" /> },
// ];

// export default function DashboardSidebar() {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <aside
//       className={`bg-white border-r border-gray-200 shadow-md h-screen transition-all duration-300 ${
//         collapsed ? "w-20" : "w-64"
//       }`}
//     >
//       {/* Toggle button */}
//       <div className="flex justify-end p-2">
//         <button
//           onClick={() => setCollapsed(!collapsed)}
//           className="p-1 rounded hover:bg-gray-100"
//         >
//           {collapsed ? "→" : "←"}
//         </button>
//       </div>

//       {/* User info */}
//       <div className={`flex flex-col items-center gap-2 p-4 ${collapsed ? "hidden" : "flex"}`}>
//         <Avatar className="w-16 h-16">
//           <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl">
//             M
//           </div>
//         </Avatar>
//         <div className="text-center">
//           <h3 className="font-semibold text-gray-800">Murari Jha</h3>
//           <p className="text-xs text-gray-500">murari@example.com</p>
//         </div>
//       </div>

//       {/* Nav Items */}
//       <nav className="mt-4 flex flex-col">
//         {navItems.map((item) => (
//           <Link
//             key={item.href}
//             href={item.href}
//             className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
//           >
//             {item.icon}
//             {!collapsed && <span>{item.label}</span>}
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { Menu, X, ChevronLeft, ChevronRight, User, Book, Settings, LogOut } from "lucide-react";
// import { Avatar } from "@/components/ui/avatar";

// export default function Sidebar() {
//   const [open, setOpen] = useState(true);       // Desktop collapse
//   const [mobileOpen, setMobileOpen] = useState(false); // Mobile menu

//   const navItems = [
//     { label: "Profile", href: "/profile", icon: <User className="w-4 h-4"/> },
//     { label: "My Courses", href: "/my-courses", icon: <Book className="w-4 h-4"/> },
//     { label: "Settings", href: "/settings", icon: <Settings className="w-4 h-4"/> },
//     { label: "Logout", href: "/logout", icon: <LogOut className="w-4 h-4 text-red-500"/> },
//   ];

//   return (
//     <>
//       {/* Mobile overlay menu */}
//       {/* Mobile Sidebar (slim icons always visible) */}

//       {mobileOpen && (
//         <div className="fixed inset-0 z-50 flex md:hidden">
//           <div className="fixed inset-0 bg-black/30" onClick={() => setMobileOpen(false)}></div>
//           <aside className="relative w-64 bg-white p-4 shadow-lg z-50">
//             <button className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100" onClick={() => setMobileOpen(false)}>
//               <X className="w-5 h-5"/>
//             </button>
//             <div className="mb-6">
//               <Avatar className="w-10 h-10">
//                 <div className="rounded-full bg-blue-600 w-10 h-10 flex items-center justify-center text-white font-bold">M</div>
//               </Avatar>
//               <div className="mt-2 text-sm font-medium">Murari</div>
//             </div>
//             <nav className="flex flex-col gap-2">
//               {navItems.map((item) => (
//                 <Link key={item.href} href={item.href} className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
//                   {item.icon}
//                   <span>{item.label}</span>
//                 </Link>
//               ))}
//             </nav>
//           </aside>
//         </div>
//       )}

//       {/* Sidebar for desktop */}
//   <aside
//   className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 shadow-md flex flex-col transition-all duration-300
//   ${open ? "w-64" : "w-20"} hidden md:flex z-40`}
// >
//      {/* <aside className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 shadow-md transition-all duration-300 */}
//         {/* ${open ? "w-64" : "w-16"} hidden md:flex flex-col z-40`}> */} 
//         {/* Collapse toggle */}
//         <button
//           className="absolute top-4 right-[-12px] flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-full shadow-md"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <ChevronLeft className="w-4 h-4"/> : <ChevronRight className="w-4 h-4"/>}
//         </button>

//         <div className="flex flex-col h-full p-4">
//           {/* Avatar */}
//           <div className="flex items-center gap-2 mb-6">
//             <Avatar className="w-10 h-10">
//               <div className="rounded-full bg-blue-600 w-10 h-10 flex items-center justify-center text-white font-bold">M</div>
//             </Avatar>
//             {open && <div className="text-sm font-medium">Murari</div>}
//           </div>

//           {/* Navigation */}
//           <nav className="flex flex-col gap-2 flex-1">
//             {navItems.map((item) => (
//               <Link key={item.href} href={item.href} className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
//                 {item.icon}
//                 {open && <span>{item.label}</span>}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </aside>

//       {/* Mobile menu button */}
//       <button
//         className="fixed top-4 left-4 p-2 rounded-md text-gray-600 hover:bg-gray-100 md:hidden z-50"
//         onClick={() => setMobileOpen(true)}
//       >
//         <Menu className="w-5 h-5"/>
//       </button>

//       {/* Main content placeholder */}
//       <div className={`ml-0 md:ml-${open ? "64" : "16"} transition-all duration-300 p-4`}>
//         {/* <p>Put your page content here...</p> */}
//       </div>
//     </>
//   );
// }



// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { Menu, X, ChevronLeft, ChevronRight, User, Book, Settings, LogOut } from "lucide-react";
// import { Avatar } from "@/components/ui/avatar";

// export default function Sidebar() {
//   const [open, setOpen] = useState(true);       // Desktop collapse
//   const [mobileOpen, setMobileOpen] = useState(false); // Mobile menu

//   const navItems = [
//     { label: "Profile", href: "/profile", icon: <User className="w-4 h-4"/> },
//     { label: "My Courses", href: "/my-courses", icon: <Book className="w-4 h-4"/> },
//     { label: "Settings", href: "/settings", icon: <Settings className="w-4 h-4"/> },
//     { label: "Logout", href: "/logout", icon: <LogOut className="w-4 h-4 text-red-500"/> },
//   ];

//   return (
//     <>
//       {/* Mobile overlay menu */}
//       {/* Mobile Sidebar (slim icons always visible) */}

//       {mobileOpen && (
//         <div className="fixed inset-0 z-50 flex md:hidden">
//           <div className="fixed inset-0 bg-black/30" onClick={() => setMobileOpen(false)}></div>
//           <aside className="relative w-64 bg-white p-4 shadow-lg z-50">
//             <button className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100" onClick={() => setMobileOpen(false)}>
//               <X className="w-5 h-5"/>
//             </button>
//             <div className="mb-6">
//               <Avatar className="w-10 h-10">
//                 <div className="rounded-full bg-blue-600 w-10 h-10 flex items-center justify-center text-white font-bold">M</div>
//               </Avatar>
//               <div className="mt-2 text-sm font-medium">Murari</div>
//             </div>
//             <nav className="flex flex-col gap-2">
//               {navItems.map((item) => (
//                 <Link key={item.href} href={item.href} className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
//                   {item.icon}
//                   <span>{item.label}</span>
//                 </Link>
//               ))}
//             </nav>
//           </aside>
//         </div>
//       )}

//       {/* Sidebar for desktop */}
//   <aside
//   className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 shadow-md flex flex-col transition-all duration-300
//   ${open ? "w-64" : "w-20"} hidden md:flex z-40`}
// >
//      {/* <aside className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 shadow-md transition-all duration-300 */}
//         {/* ${open ? "w-64" : "w-16"} hidden md:flex flex-col z-40`}> */} 
//         {/* Collapse toggle */}
//         <button
//           className="absolute top-4 right-[-12px] flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-full shadow-md"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <ChevronLeft className="w-4 h-4"/> : <ChevronRight className="w-4 h-4"/>}
//         </button>

//         <div className="flex flex-col h-full p-4">
//           {/* Avatar */}
//           <div className="flex items-center gap-2 mb-6">
//             <Avatar className="w-10 h-10">
//               <div className="rounded-full bg-blue-600 w-10 h-10 flex items-center justify-center text-white font-bold">M</div>
//             </Avatar>
//             {open && <div className="text-sm font-medium">Murari</div>}
//           </div>

//           {/* Navigation */}
//           <nav className="flex flex-col gap-2 flex-1">
//             {navItems.map((item) => (
//               <Link key={item.href} href={item.href} className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100">
//                 {item.icon}
//                 {open && <span>{item.label}</span>}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </aside>

//       {/* Mobile menu button */}
//       <button
//         className="fixed top-4 left-4 p-2 rounded-md text-gray-600 hover:bg-gray-100 md:hidden z-50"
//         onClick={() => setMobileOpen(true)}
//       >
//         <Menu className="w-5 h-5"/>
//       </button>

//       {/* Main content placeholder */}
//       <div className={`ml-0 md:ml-${open ? "64" : "16"} transition-all duration-300 p-4`}>
//         {/* <p>Put your page content here...</p> */}
//       </div>
//     </>
//   );
// }
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight, User, Book, Settings, LogOut } from "lucide-react";
// import { Avatar } from "@/components/ui/avatar";

// export default function Sidebar() {
//   const [open, setOpen] = useState(true); // Collapsed / Expanded

//   const navItems = [
//     { label: "Profile", href: "/profile", icon: <User className="w-4 h-4" /> },
//     { label: "My Courses", href: "/my-courses", icon: <Book className="w-4 h-4" /> },
//     { label: "Settings", href: "/settings", icon: <Settings className="w-4 h-4" /> },
//     { label: "Logout", href: "/logout", icon: <LogOut className="w-4 h-4 text-red-500" /> },
//   ];

//   return (
//     <>
//       {/* ---------------- SIDEBAR ---------------- */}
//       <aside
//         className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 shadow-md flex flex-col transition-all duration-300
//         ${open ? "w-64" : "w-20"} z-40`}
//       >
//         {/* Collapse toggle */}
//         <button
//           className="absolute top-4 right-[-12px] flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-full shadow-md"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
//         </button>

//         <div className="flex flex-col h-full p-4">
//           {/* Avatar */}
//           <div className="flex items-center gap-2 mb-6">
//             <Avatar className="w-10 h-10">
//               <div className="rounded-full bg-blue-600 w-10 h-10 flex items-center justify-center text-white font-bold">M</div>
//             </Avatar>
//             {open && <div className="text-sm font-medium">Murari</div>}
//           </div>

//           {/* Navigation */}
//           <nav className="flex flex-col gap-2 flex-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
//               >
//                 {item.icon}
//                 {open && <span>{item.label}</span>}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </aside>

//       {/* ---------------- PAGE CONTENT ---------------- */}
//       <div className={`ml-0 ${open ? "ml-64" : "ml-20"} transition-all duration-300 p-4`}>
//         {/* Your page content goes here */}
//       </div>
//     </>
//   );
// }
// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight, User, Book, Settings, LogOut } from "lucide-react";
// import { Avatar } from "@/components/ui/avatar";

// export default function Sidebar() {
//   const [open, setOpen] = useState(true); // Desktop collapse
//   const [mobileOpen, setMobileOpen] = useState(false); // Mobile collapse

//   const navItems = [
//     { label: "Profile", href: "/profile", icon: <User className="w-4 h-4" /> },
//     { label: "My Courses", href: "/my-courses", icon: <Book className="w-4 h-4" /> },
//     { label: "Settings", href: "/settings", icon: <Settings className="w-4 h-4" /> },
//     { label: "Logout", href: "/logout", icon: <LogOut className="w-4 h-4 text-red-500" /> },
//   ];

//   return (
//     <>
//       {/* ---------------- MOBILE SIDEBAR ---------------- */}
//       <aside
//         className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 shadow-md flex flex-col transition-all duration-300
//           ${mobileOpen ? "w-64" : "w-12"} md:hidden z-50`}
//       >
//         {/* Toggle button */}
//         <button
//           className="absolute top-4 right-[-12px] w-6 h-6 flex items-center justify-center bg-white border border-gray-300 rounded-full shadow-md"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           {mobileOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
//         </button>

//         <div className="flex flex-col h-full p-2">
//           {/* Avatar */}
//           <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
//             <Avatar className="w-8 h-8">
//               <div className="rounded-full bg-blue-600 w-8 h-8 flex items-center justify-center text-white font-bold">M</div>
//             </Avatar>
//             {mobileOpen && <span className="text-sm font-medium">Murari</span>}
//           </div>

//           {/* Navigation */}
//           <nav className="flex flex-col gap-2">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 justify-center md:justify-start"
//               >
//                 {item.icon}
//                 {mobileOpen && <span>{item.label}</span>}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </aside>

//       {/* ---------------- DESKTOP SIDEBAR ---------------- */}
//       <aside
//         className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 shadow-md flex flex-col transition-all duration-300
//           ${open ? "w-64" : "w-20"} hidden md:flex z-40`}
//       >
//         <button
//           className="absolute top-4 right-[-12px] flex items-center justify-center w-6 h-6 bg-white border border-gray-300 rounded-full shadow-md"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
//         </button>

//         <div className="flex flex-col h-full p-4">
//           <div className="flex items-center gap-2 mb-6">
//             <Avatar className="w-10 h-10">
//               <div className="rounded-full bg-blue-600 w-10 h-10 flex items-center justify-center text-white font-bold">M</div>
//             </Avatar>
//             {open && <div className="text-sm font-medium">Murari</div>}
//           </div>

//           <nav className="flex flex-col gap-2 flex-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
//               >
//                 {item.icon}
//                 {open && <span>{item.label}</span>}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       </aside>

//       {/* ---------------- PAGE CONTENT ---------------- */}
//       <div className={`ml-0 md:ml-${open ? "64" : "20"} transition-all duration-300 p-4`}>
//         {/* Your page content */}
//       </div>
//     </>
//   );
// }






// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight, User, Book, Settings, LogOut } from "lucide-react";

// export default function Sidebar() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const navItems = [
//     { label: "Profile", href: "/profile", icon: <User className="w-4 h-4" /> },
//     { label: "My Courses", href: "/my-courses", icon: <Book className="w-4 h-4" /> },
//     { label: "Settings", href: "/settings", icon: <Settings className="w-4 h-4" /> },
//     { label: "Logout", href: "/logout", icon: <LogOut className="w-4 h-4 text-red-500" /> },
//   ];

//   return (
//     <>
//       {/* ---------------- MOBILE SIDEBAR ---------------- */}
//       <div className="fixed top-16 left-0 z-50 md:hidden flex">
//         {/* Collapsed icon */}
//         {!mobileOpen && (
//           <button
//             className="w-10 h-12 bg-white border border-gray-300 flex items-center justify-center shadow-md rounded-r-md"
//             onClick={() => setMobileOpen(true)}
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         )}

//         {/* Expanded sidebar */}
//         {mobileOpen && (
//           <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-36 bg-white border-r border-gray-200 shadow-md z-50 flex flex-col p-4 transition-transform duration-300">
//             {/* Collapse button */}
//             <button
//               className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100 border"
//               onClick={() => setMobileOpen(false)}
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>

//             {/* Navigation */}
//             <nav className="flex flex-col gap-2 mt-8">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
//                 >
//                   {item.icon}
//                   <span>{item.label}</span>
//                 </Link>
//               ))}
//             </nav>
//           </aside>
//         )}
//       </div>

//       {/* ---------------- DESKTOP SIDEBAR ---------------- */}
//           <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-36 bg-white border-r border-gray-200 shadow-md z-50 flex flex-col p-4 transition-transform duration-300">

//       {/* <aside className="hidden md:flex fixed top-16 left-0 h-[calc(100vh-4rem)] w-36 bg-white border-r border-gray-200 shadow-md flex-col p-4"> */}
//         {/* Desktop navigation */}
//         <nav className="flex flex-col gap-2 mt-4">
//           {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
//             >
//               {item.icon}
//               <span>{item.label}</span>
//             </Link>
//           ))}
//         </nav>
//       </aside>
//     </>
//   );
// }








"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, User, Book, Settings, LogOut } from "lucide-react";

export default function Sidebar() {
  const [desktopOpen, setDesktopOpen] = useState(true); // Desktop collapse
  const [mobileOpen, setMobileOpen] = useState(false);  // Mobile menu

  const navItems = [
 { label: "Profile", href: "/MyAccount/MyProfileForStudent", icon: <User className="w-5 h-5" /> },
    { label: "Profile Settings", href: "/MyAccount/ProfileSettings", icon: <Settings className="w-5 h-5" /> },
    { label: "My Courses", href: "/MyCourses", icon: <Book className="w-5 h-5" /> },
      // { label: "Profile", href: "/MyProfileForStudent", icon: <User className="w-5 h-5" /> },
    // { label: "Profile", href: "/profile", icon: <User className="w-4 h-6" /> },
      // { label: "Profile", href: "/UserDashboard/MyProfileForStudent", icon: <User className="w-4 h-6" /> },
    { label: "My Courses", href: "/my-courses", icon: <Book className="w-4 h-6" /> },
    { label: "Logout", href: "/logout", icon: <LogOut className="w-4 h-6 text-red-500" /> },
  ];

  return (
    <>
      {/* ---------------- MOBILE SIDEBAR ---------------- */}
      <div className="md:hidden">
        {!mobileOpen && (
          <button
            className="fixed top-16 left-0 w-10 h-10 bg-white border border-gray-300 flex items-center justify-center shadow-md rounded-r-md z-50"
            onClick={() => setMobileOpen(true)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {mobileOpen && (
          <aside className="fixed top-22 left-0 h-[calc(100vh-4rem)] w-36 bg-white border-r border-gray-200 shadow-md z-50 flex flex-col p-4">
            <button
              className="absolute top-4 right-4 p-2 rounded-md hover:bg-gray-100 border"
              onClick={() => setMobileOpen(false)}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <nav className="flex flex-col gap-4 mt-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  {item.icon}
                  <span className="text-base font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          </aside>
        )}
      </div>

      {/* ---------------- DESKTOP SIDEBAR ---------------- */}
      <aside
        className={`hidden md:flex fixed top-22 left-0 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 shadow-md flex-col transition-all duration-300 z-40
        ${desktopOpen ? "w-36" : "w-12"}`}
      >
        {/* Collapse toggle button */}
        <button
          className="absolute top-4 right-[-12px] w-6 h-6 bg-white border border-gray-300 rounded-full shadow-md flex items-center justify-center"
          onClick={() => setDesktopOpen(!desktopOpen)}
        >
          {desktopOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>

        <nav className="flex flex-col gap-4 mt-4 p-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-gray-100"
            >
              {item.icon}
              {desktopOpen && <span className="text-base font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
